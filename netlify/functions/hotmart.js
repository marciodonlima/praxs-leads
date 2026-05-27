const crypto = require('crypto');

// Verifica assinatura do webhook da Hotmart
function verificarAssinatura(body, signature, secret) {
  if (!secret || !signature) return true; // pula verificação se não configurado
  const hmac = crypto.createHmac('sha256', secret).update(body).digest('hex');
  return hmac === signature;
}

// Gera senha aleatória segura
function gerarSenha(tamanho = 10) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#';
  return Array.from({ length: tamanho }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

exports.handler = async function (event) {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS' },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Verificar variáveis de ambiente
  const SUPA_URL     = process.env.SUPABASE_URL;
  const SUPA_SECRET  = process.env.SUPABASE_SERVICE_KEY; // service_role key (secreta)
  const HOTMART_SECRET = process.env.HOTMART_WEBHOOK_SECRET; // opcional mas recomendado
  const RESEND_KEY   = process.env.RESEND_API_KEY; // para envio de e-mail

  if (!SUPA_URL || !SUPA_SECRET) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Variáveis SUPABASE_URL e SUPABASE_SERVICE_KEY não configuradas.' }) };
  }

  // Verificar assinatura Hotmart
  const signature = event.headers['x-hotmart-webhook-token'] || '';
  if (HOTMART_SECRET && !verificarAssinatura(event.body, signature, HOTMART_SECRET)) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Assinatura inválida.' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Payload inválido.' }) };
  }

  // Só processa eventos de compra aprovada
  const evento = payload?.event || payload?.data?.event;
  if (evento !== 'PURCHASE_APPROVED' && evento !== 'PURCHASE_COMPLETE') {
    console.log('Evento ignorado:', evento);
    return { statusCode: 200, body: JSON.stringify({ message: `Evento ${evento} ignorado.` }) };
  }

  // Extrair dados do comprador
  const comprador = payload?.data?.buyer || payload?.buyer || {};
  const email = comprador.email;
  const nome  = comprador.name || comprador.full_name || 'Cliente';

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'E-mail do comprador não encontrado no payload.' }) };
  }

  const senha = gerarSenha();

  // Criar usuário no Supabase via Admin API
  const criarUsuario = await fetch(`${SUPA_URL}/auth/v1/admin/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPA_SECRET,
      'Authorization': `Bearer ${SUPA_SECRET}`
    },
    body: JSON.stringify({
      email,
      password: senha,
      email_confirm: true,
      user_metadata: { nome, origem: 'hotmart' }
    })
  });

  const usuarioData = await criarUsuario.json();

  if (!criarUsuario.ok) {
    // Se usuário já existe, apenas registra e retorna sucesso
    if (usuarioData?.msg?.includes('already') || usuarioData?.code === 'email_exists') {
      console.log('Usuário já existe:', email);
      return { statusCode: 200, body: JSON.stringify({ message: 'Usuário já cadastrado.' }) };
    }
    console.error('Erro Supabase:', usuarioData);
    return { statusCode: 500, body: JSON.stringify({ error: 'Erro ao criar usuário.', detail: usuarioData }) };
  }

  // Enviar e-mail de boas-vindas via Resend
  if (RESEND_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_KEY}`
      },
      body: JSON.stringify({
        from: 'Praxs Leads <noreply@seudominio.com.br>', // troque pelo seu domínio verificado no Resend
        to: email,
        subject: 'Seu acesso ao Praxs Leads está pronto!',
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:auto;padding:32px;">
            <h2 style="color:#c9a84c;">Bem-vindo ao Praxs Leads, ${nome}!</h2>
            <p>Seu acesso à ferramenta de prospecção para Food Service está liberado.</p>
            <div style="background:#1a1b18;border:1px solid #333;border-radius:8px;padding:20px;margin:24px 0;">
              <p style="margin:0 0 8px;color:#888;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:.1em;">Seus dados de acesso</p>
              <p style="margin:4px 0;"><strong>Link:</strong> <a href="https://marciodonlima.github.io/praxs-leads/" style="color:#c9a84c;">praxs leads</a></p>
              <p style="margin:4px 0;"><strong>E-mail:</strong> ${email}</p>
              <p style="margin:4px 0;"><strong>Senha:</strong> <code style="background:#333;padding:2px 8px;border-radius:4px;">${senha}</code></p>
            </div>
            <p style="color:#888;font-size:13px;">Recomendamos trocar sua senha após o primeiro acesso.</p>
            <p style="color:#888;font-size:13px;">Qualquer dúvida, responda este e-mail.</p>
          </div>
        `
      })
    });
  }

  console.log(`Usuário criado com sucesso: ${email}`);
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Usuário criado com sucesso.', email })
  };
};
