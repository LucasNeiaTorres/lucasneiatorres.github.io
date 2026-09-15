import type { Dict } from "./types";

export const pt: Dict = {
  htmlLang: "pt-BR",
  meta: {
    title: "Lucas Néia Torres — Desenvolvedor back-end",
    description:
      "Desenvolvedor back-end em Curitiba. Java com Spring e Python com FastAPI em sistemas de telemetria e fiscalização de trânsito que recebem dado de cerca de 1.700 equipamentos em campo.",
  },
  nav: { path: "Percurso", stack: "Stack", contact: "Contato", skip: "Ir para o conteúdo" },

  opening: {
    eyebrow: "Desenvolvedor back-end · Curitiba, BR",
    headline: "Recebo dado de máquina que chega, falta, ou chega errado.",
    body: [
      "Na FiscalTech trabalho com telemetria e fiscalização de trânsito: cerca de 1.700 equipamentos em campo mandando dado 24 horas por dia, e um servidor que precisa receber tudo. Java com Spring e Python com FastAPI, sobre PostgreSQL e Oracle.",
      "O problema que mais me ensinou foi esse — dado de veículo se perdendo entre o sistema embarcado e o servidor, 20% de falha no envio. Diagnostiquei o gargalo no fluxo de integração, reescrevi a rotina de comunicação, e a taxa foi para *0%*.",
    ],
  },

  axis: {
    heading: "Percurso",
    legend: { work: "Trabalho", project: "Projeto", edu: "Formação" },
    now: "hoje",
    elapsed: (m: number) => (m === 1 ? "1 mês" : `${m} meses`),
    featuredLabel: "Destaque",
    repoLabel: "Ver o repositório",
    aside:
      "O vão entre dois eventos é proporcional ao tempo decorrido entre eles: o espaçamento desta página é dado, não decoração.",
    more: {
      lead: "Fora do eixo, no GitHub, está o que sobrou da graduação — e o que sobrou é sistema, não exercício de sintaxe:",
      items: [
        { label: "um núcleo de sistema operacional em espaço de usuário", repo: "PingPongOS" },
        { label: "um alocador de memória em assembly x86-64", repo: "malloc-assembly" },
        { label: "partição paralela com pool de pthreads", repo: "parallel-partition-pool" },
        { label: "a mesma partição em memória distribuída, com MPI", repo: "parallel-partition-mpi" },
        { label: "uma biblioteca de grafos em C99, sem dependência", repo: "grafos" },
        { label: "classificação de pneumotórax em radiografia DICOM", repo: "classificador-imagens-biomedicas" },
      ],
      tail: "Cada um com README que explica o que ele mede e onde ele falha.",
    },
  },

  prose: {
    ifpr: {
      title: "Técnico em Informática · IFPR",
      role: "Jacarezinho, PR · concluído em 2020",
    },

    queroemprestar: {
      title: "QueroEmprestar",
      role: "Trabalho de conclusão do curso técnico · Java 8, JSF, MySQL, sem ORM",
      body: [
        "Aluguel de objetos entre pessoas — furadeira, muleta, livro — em que o mesmo cadastro é locador numa transação e locatário na seguinte. O sistema inteiro gira em torno de uma pergunta: este item está livre nessas datas?",
        "A resposta não é calculada em Java. É um CASE WHEN dentro do próprio INSERT: havendo reserva conflitante, a coluna de data recebe NULL e a linha é rejeitada pelo banco, não pela aplicação. O README discute o que essa escolha compra e as duas brechas que ela deixa abertas.",
      ],
    },

    "ufpr-ie": {
      title: "UFPR · Projeto Inteligência Esportiva",
      role: "Desenvolvedor web · 08.2022 → 08.2023",
      body: [
        "A plataforma web do projeto de pesquisa tinha indisponibilidades recorrentes. Resolvi os problemas crônicos de código legado e as inconsistências de banco que as causavam, e mantive as rotinas de acompanhamento que seguraram a disponibilidade para a equipe de pesquisa até o fim do projeto.",
      ],
    },

    mppr: {
      title: "Ministério Público do Paraná",
      role: "Desenvolvedor de software · 09.2023 → 09.2024",
      body: [
        "Arquitetei e entreguei em produção o back-end completo de um sistema governamental, assumindo sozinho a stack Python — FastAPI e SQLAlchemy sobre Oracle — da modelagem de dados ao deploy, respondendo pelas decisões técnicas do projeto.",
        "Escrevi toda a camada de autenticação e controle de acesso a dado sensível com OAuth2 e JWT, com access e refresh token. Containerizei a aplicação com Docker, o que acabou com a divergência de configuração entre as máquinas da equipe, e desenvolvi o front em Angular consumindo as APIs que eu mesmo construí.",
      ],
    },

    rumores: {
      title: "RUmores",
      role: "API REST em FastAPI · em dupla",
      body: [
        "Avaliação do restaurante universitário: a nutricionista publica o cardápio do dia e as informações nutricionais dos pratos; o estudante autenticado dá nota e comentário. Um roteador por caso de uso, e a documentação interativa gerada em /docs.",
        "É protótipo, e o README diz onde ele não serve: sem persistência, sessão global, senha sem hash. Declarar o limite é parte da entrega.",
      ],
    },

    "fiscaltech-estagio": {
      title: "FiscalTech · estágio",
      role: "Estagiário de desenvolvimento · 10.2024 → 07.2026",
      body: [
        "Mapeei os gargalos de integração de dados de trânsito analisando logs de comunicação e correlacionando falhas de envio por lote de dispositivos — os mesmos gargalos que dariam origem ao trabalho de otimização executado depois da efetivação.",
        "Construí as rotinas iniciais do scheduler da plataforma PlateSight com Quartz, base do que hoje está em produção, e sustentei o ciclo de manutenção corretiva das APIs em Java sobre Spring Boot, além de componentes React integrados a esses serviços.",
      ],
    },

    ufpr: {
      title: "Bacharelado em Ciência da Computação · UFPR",
      role: "Concluído em 07.2026",
    },

    "fiscaltech-junior": {
      title: "FiscalTech · efetivado",
      role: "Desenvolvedor Full-Stack Júnior · 08.2026 → atual · promovido após 22 meses na mesma equipe",
      body: [
        "Dado de veículo se perdia na comunicação entre os sistemas embarcados e o servidor: 20% de falha no envio, numa frota de cerca de 1.700 equipamentos. Diagnostiquei o gargalo no fluxo de integração e reescrevi a rotina de comunicação em Java, sobre Spring Boot e Hibernate, com PostgreSQL embaixo. A taxa foi para *0%*.",
        "Projetei o agendamento em tempo real da plataforma PlateSight com Quartz Scheduler, trocando acionamento manual pela execução automática das rotinas de captura e processamento. Desenvolvi o módulo de atualização remota (OTA) dos sistemas embarcados via telemetria, que dispensou o deslocamento técnico a campo a cada versão.",
        "Sustento as APIs REST de telemetria que concentram os dados dessa frota, modelando as consultas em PostgreSQL, e apoiei a migração dos deploys manuais para pipelines de CI/CD no GitLab.",
      ],
    },

    "tcc-mdvrp": {
      title: "Roteamento de frota quando a estrada quebra no meio da operação",
      role: "Trabalho de conclusão · UFPR · em dupla · Python",
      body: [
        "Uma transportadora com vários depósitos, uma frota em cada um e uma lista de clientes para o dia. São duas decisões acopladas, e ambas NP-difíceis: qual depósito atende qual cliente, e em que ordem cada veículo visita os seus. A parte que interessa vem depois — durante a execução, trechos de via são bloqueados, e os veículos que já estão na rua só descobrem ao chegar lá.",
        "A decisão de projeto foi separar o plano do improviso. O plano agrupa antes de rotear: k-means capacitado sobre as vagas de veículo, depois um algoritmo genético por depósito com a busca local de Prins como mutação e o split de Vidal cortando a rota gigante em veículos. O improviso é uma cascata de três estágios — reparo dentro da rota, dentro do cluster do depósito, e só então entre depósitos.",
        "As falhas não são sorteadas uniformemente no mapa. São zonas de colapso geradas sobre as arestas que a frota de fato percorre, porque bloqueio aleatório é quase invisível para a frota e faz o desastre parecer mais fácil do que é.",
      ],
      stats:
        "10.459 linhas em src/ · 36 instâncias de benchmark Cordeau · parâmetros do algoritmo genético justificados por Prins (2004) e Vidal (2012)",
    },

    curatela: {
      title: "Prestação de contas em tutela e curatela",
      role: "FastAPI e SQLAlchemy sobre Oracle · front em Angular · três contêineres",
      body: [
        "Quem administra o patrimônio de outra pessoa por nomeação judicial precisa prestar contas ao juízo periodicamente: cada entrada e cada saída, com o comprovante de cada uma. Na prática isso é feito em planilha, e o comprovante se perde do lançamento.",
        "A decisão que moldou o projeto foi tratar o anexo como prova. Todo arquivo recebido é validado abrindo — Pillow para imagem, PyPDF2 para PDF — porque extensão e Content-Type são declarados pelo cliente e qualquer um pode mentir. A imagem é reencodada, o que descarta metadado EXIF e payload escondido em segmento. O arquivo é gravado com o id da linha no banco por nome, nunca com o nome que o usuário mandou, o que elimina travessia de diretório. E o SHA-256 do conteúdo gravado vai para a mesma linha, que é o que permite dizer depois que o comprovante é o mesmo que foi entregue.",
        "Uma fatia vertical está completa ponta a ponta; as demais telas estão esboçadas sobre um modelo de dados que já as cobre.",
      ],
    },
  },

  stack: {
    heading: "Stack",
    lead: "O centro é back-end. O front-end existe para consumir as APIs que eu construo, e é assim que ele aparece aqui.",
    groups: [
      {
        label: "Back-end",
        lead: "Onde eu moro.",
        items:
          "Java 8 e 17 · Spring Boot · Spring Data JPA · Spring Security · Hibernate · Python · FastAPI · SQLAlchemy · APIs RESTful · arquitetura de microsserviços · Quartz Scheduler",
      },
      {
        label: "Dados",
        lead: "Boa parte do trabalho de telemetria é decidir o que o banco responde, e em quanto tempo.",
        items: "PostgreSQL · Oracle Database · MySQL · modelagem relacional · otimização de queries",
      },
      {
        label: "Segurança",
        items: "OAuth2 · JWT com access e refresh token · controle de acesso baseado em perfis",
      },
      {
        label: "Infraestrutura",
        items: "Docker · Linux · Git · GitLab · pipelines de CI/CD",
      },
      {
        label: "Front-end",
        lead: "Apoio, não centro.",
        items: "Angular · React · TypeScript · JavaScript (ES6+) · HTML5 · CSS3",
      },
      {
        label: "Prática",
        items: "SOLID · Clean Code · code review · Git Flow · testes automatizados com pytest",
      },
    ],
  },

  contact: {
    heading: "Contato",
    lead: "Procuro vaga de back-end em Java com Spring ou Python com FastAPI, no Brasil ou remoto.",
    cv: "Currículo em PDF",
  },

  lang: { other: "EN", otherHref: "/en/", label: "Read in English" },
};
