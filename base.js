// Arquivo: base.js

const PROSPECTS_BASE = {
  "Dark Kitchen": [
    // ADICIONAR EM "Dark Kitchen":
    { nome: "Oli Pizzas", contato: "olipizzas.com.br", instagram: "@olipizzas", tipo: "Delivery Premium", oportunidade: "Forte atuação no mercado digital de pizzas em São Paulo.", sinal: "Alta demanda", abrangencia: "SP", dor: "Altas temperaturas dos fornos de pizza em galpões de delivery fechados", abordagem: "Exaustão localizada e isolamento térmico de fornos para saúde ocupacional da equipe" },
    { nome: "Apptite", contato: "apptite.com", instagram: "@apptite", tipo: "Hub de Chefs", oportunidade: "Plataforma que integra cozinhas independentes para delivery artesanal.", sinal: "Novas praças", abrangencia: "SP", dor: "Flexibilidade espacial para abrigar diferentes tipos de gastronomia na mesma planta", abordagem: "Criação de baias modulares com pontos de elétrica e gás flexíveis" }
  ],


  "Hamburgueria": [
    // ADICIONAR EM "Hamburgueria":
    { nome: "Bullguer", contato: "bullguer.com", instagram: "@bullguer", tipo: "Smash Burger / Fast Casual", oportunidade: "Pioneiros no smash no Brasil, com expansão contínua e lojas de rua de alto fluxo.", sinal: "Expansão Sudeste", abrangencia: "SP / RJ / MG", dor: "Cozinhas compactas lidando com alto volume de fumaça gerada pela técnica de smash na chapa quente", abordagem: "Sistemas de exaustão de alta vazão com compensação de ar para evitar pressão negativa no salão" },
    { nome: "Jeronimo Burger", contato: "jeronimoburger.com.br", instagram: "@jeronimoburger", tipo: "Fast Food Premium (Grupo Madero)", oportunidade: "Lojas focadas em autoatendimento e extrema velocidade operacional.", sinal: "Lojas modulares", abrangencia: "Nacional (Forte no Sul/SP)", dor: "Integração do fluxo de totens digitais com a esteira de montagem sem gargalos na entrega", abordagem: "Layout em linha de produção linear para otimização de tempo e movimento da equipe" },
    { nome: "O Burguês", contato: "oburgues.com", instagram: "@oburgues", tipo: "Delivery e Lojas Físicas", oportunidade: "Forte atuação no modelo de dark kitchen e take away no Rio de Janeiro, expandindo para SP.", sinal: "Dominância regional", abrangencia: "RJ / SP", dor: "Conflito físico entre motoboys esperando pedidos e o fluxo de operação da loja", abordagem: "Desenho de janelas de expedição isoladas e áreas de espera com conforto térmico para entregadores" },
    { nome: "Bucaneiro", contato: "bucaneiroburger.com.br", instagram: "@bucaneiroburger", tipo: "Artesanal", oportunidade: "Crescimento sólido nos bairros do Rio de Janeiro com lojas de perfil rústico e industrial.", sinal: "Abertura de unidades", abrangencia: "RJ", dor: "Adequação de imóveis antigos de rua para suportar carga elétrica e extração de ar", abordagem: "Retrofit de infraestrutura pesada preservando a estética industrial da marca" },
  ],


  "Café": [
    // ADICIONAR EM "Café":
    { nome: "The Coffee", contato: "thecoffee.jp", instagram: "@thecoffee.jp", tipo: "To Go / Minimalista", oportunidade: "Lojas ultracompactas (algumas com menos de 10m²). Padrão estético rigoroso.", sinal: "Expansão Nacional", abrangencia: "PR / SP / Nacional", dor: "Encaixar toda a marcenaria, maquinário, hidráulica e estoque em espaços mínimos", abordagem: "Compatibilização milimétrica em BIM para marcenaria técnica e ergonomia em microespaços" },
    { nome: "Mais1 Café", contato: "mais1cafe.com.br", instagram: "@mais1cafe", tipo: "Franquia To Go", oportunidade: "Uma das redes que mais cresce no modelo pegue e leve, ideal para quiosques e pequenas lojas.", sinal: "Centenas de lojas", abrangencia: "Nacional", dor: "Rápida aprovação de projetos padronizados em diferentes prefeituras e shoppings", abordagem: "Elaboração de cadernos executivos padrão e gestão ágil de aprovações legais" },
    { nome: "Go Coffee", contato: "gocoffee.com.br", instagram: "@gocoffeebrasil", tipo: "Cafeteria Grab and Go", oportunidade: "Forte presença em Curitiba e espalhando pelo Sul/Sudeste. Variedade de snacks e bebidas.", sinal: "Expansão orgânica", abrangencia: "PR / SC / SP", dor: "Concorrência de espaço visual entre os equipamentos de café e a vitrine de doces", abordagem: "Desenho de balcões vitrine iluminados que não bloqueiam a interação com o barista" },
    { nome: "Dark Coffee", contato: "darkcoffeebr.com", instagram: "@darkcoffeerio", tipo: "Cafeteria Contemporânea", oportunidade: "Lojas amplas, focadas em coworking e permanência no Centro e Zona Sul carioca.", sinal: "Novas lojas conceito", abrangencia: "RJ", dor: "Gestão acústica em grandes salões com piso duro e muitas pessoas trabalhando", abordagem: "Especificação de forros e revestimentos acústicos disfarçados na decoração estética" },
  ],


  "Restaurante À la Carte": [
    // ADICIONAR EM "Restaurante À la Carte":
    { nome: "Madero Steak House", contato: "restaurantemadero.com.br", instagram: "@maderobrasil", tipo: "Casual Dining", oportunidade: "Operações parrudas em shoppings e rodovias. Cozinhas industriais completas.", sinal: "Potência do Sul", abrangencia: "Nacional", dor: "Logística interna complexa (recebimento de congelados da fábrica vs. produção local)", abordagem: "Dimensionamento correto de câmaras frias e setorização suja/limpa rigorosa" },
    { nome: "Tragga", contato: "tragga.com.br", instagram: "@restaurantetragga", tipo: "Carnes Premium", oportunidade: "Carnes na brasa e culinária sofisticada no Rio de Janeiro. Ambientes de alto padrão.", sinal: "Consolidação na Zona Sul", abrangencia: "RJ", dor: "Carga térmica severa da parrilla impactando o rendimento do chef e da equipe", abordagem: "Projeto de ventilação mecânica com insuflamento de ar fresco focado na praça quente" },
    { nome: "Mocotó", contato: "mocoto.com.br", instagram: "@mocotorestaurante", tipo: "Cozinha Sertaneja", oportunidade: "Lojas em shoppings e expansão do conceito a partir da matriz na Zona Norte de SP.", sinal: "Novos modelos", abrangencia: "SP", dor: "Equipamentos de grande litragem (panelões) que danificam o piso e dificultam a limpeza", abordagem: "Especificação de pisos resinados de alta espessura e ralos lineares industriais" },
    { nome: "Paris 6", contato: "paris6.com.br", instagram: "@paris6", tipo: "Bistrô 24h", oportunidade: "Operação que não para. Obras e manutenções precisam ser cirúrgicas.", sinal: "Modelo de franquia Petit", abrangencia: "Nacional (Forte SP)", dor: "Desgaste acelerado de revestimentos e infraestrutura devido à operação ininterrupta", abordagem: "Utilização de materiais de ultra durabilidade e acesso facilitado para manutenção sem quebrar paredes" },
  ],


  "Buffet Self-Service": [
    // ADICIONAR EM "Buffet Self-Service":
    { nome: "Mania de Churrasco", contato: "maniadechurrasco.com.br", instagram: "@maniadechurrascoprime", tipo: "Fast Casual / Churrasco", oportunidade: "Presença maciça nas praças de alimentação. Equipamentos pesados à vista do cliente.", sinal: "Líder em shoppings", abrangencia: "SP / RJ / Nacional", dor: "Restrições rigorosíssimas da engenharia de shoppings para coifas de churrasqueiras", abordagem: "Sistemas de lavadores de gases e precipitadores eletrostáticos para liberação de alvará" },
    { nome: "Spoleto", contato: "spoleto.com.br", instagram: "@spoleto_oficial", tipo: "Culinária Italiana Rápida", oportunidade: "Gigante carioca que está passando por retrofit do projeto arquitetônico (Minha Cozinha Italiana).", sinal: "Retrofit de rede", abrangencia: "Nacional", dor: "Otimização da vitrine de ingredientes refrigerada que sofre com o calor da praça de massas", abordagem: "Desenho de ilhas de cocção frontal com barreira térmica invisível para proteger os frios" },
  ]
};

const BASE_LOOKUP = {};