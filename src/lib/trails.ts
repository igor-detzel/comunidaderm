export type Trail = {
  slug: string;
  tag: string;
  name: string;
  subtitle?: string;
  intro?: string;
  groups: { title?: string; items: string[] }[];
  bonus: string | string[];
  bonusLabel?: string;
  href: string;
  featured?: boolean;
};

export const trails: Trail[] = [
  {
    slug: "mat",
    tag: "Para advogados trabalhistas",
    name: "MAT",
    subtitle: "Mentoria em Advocacia Trabalhista",
    groups: [
      {
        items: [
          "Mais de 20 aulas — gravadas e ao vivo",
          "Hotseat com análise do seu escritório",
          "Grupo estratégico até 30/09/2026",
          "Acesso vitalício ao conteúdo",
          "Mais de 100 modelos de peças e documentos",
          "Ingresso Classic para o próximo RM Summit",
        ],
      },
    ],
    bonus: "Call individual de raio-x do escritório",
    bonusLabel: "Bônus do evento",
    href: "#",
  },
  {
    slug: "map",
    tag: "Para advogados previdenciários",
    name: "MAP",
    subtitle: "Mentoria em Advocacia Previdenciária",
    groups: [
      {
        items: [
          "Mais de 20 aulas — gravadas e ao vivo",
          "Hotseat com análise do seu escritório",
          "Grupo estratégico até 30/09/2026",
          "Acesso vitalício ao conteúdo",
          "Mais de 100 modelos de peças e documentos",
          "Ingresso Classic para o próximo RM Summit",
        ],
      },
    ],
    bonus: "Call individual de raio-x do escritório",
    bonusLabel: "Bônus do evento",
    href: "#",
  },
  {
    slug: "comunidade",
    tag: "Para escritórios que já têm resultados e querem continuar evoluindo",
    name: "Comunidade",
    subtitle: "O nível de proximidade mais alto com Rafael Mendes",
    groups: [
      {
        title: "Conteúdo",
        items: [
          "2 anos de acesso ao conteúdo MAT",
          "Aulas exclusivas da Comunidade",
          "Webinários e imersões virtuais",
          "Aulas bônus com convidados estratégicos",
          "500 modelos de documentos",
          "Treinamento comercial completo",
        ],
      },
      {
        title: "Proximidade",
        items: [
          "Hotseats mensais",
          "Imersões presenciais",
          "Grupo exclusivo no WhatsApp",
          "Relação de parcerias estratégicas",
          "Viagens estratégicas",
          "Ingresso Master para o próximo RM Summit",
        ],
      },
    ],
    bonus: [
      "Ingresso Master para um acompanhante",
      "Acompanhamento individual",
      "Visita presencial às sedes do escritório",
    ],
    bonusLabel: "Bônus do evento",
    href: "#",
    featured: true,
  },
  {
    slug: "lideranca",
    tag: "Para quem precisa delegar de verdade",
    name: "Formação de Lideranças",
    intro:
      "Para donos de escritório que cresceram, mas ainda carregam tudo nas próprias costas. Os treinamentos são conduzidos pelos próprios líderes do meu escritório — não por um consultor externo. Quem vive a operação ensina a operação.",
    groups: [
      {
        title: "Conhecimento e acompanhamento",
        items: [
          "Acesso ao MAP",
          "Hotseats quinzenais",
          "Treinamentos conduzidos pelos meus líderes com você, sua equipe e lideranças",
          "Acompanhamento estratégico para aplicação prática dentro do seu escritório",
        ],
      },
      {
        title: "Liderança e operação",
        items: [
          "Estruturação e reestruturação dos seus setores de iniciais, audiências, acordos, prazos, execuções, controladoria, RH e financeiro",
          "Desenvolvimento de cultura, gestão e acompanhamento da sua equipe",
          "Criação de setores escaláveis e menos dependentes do dono",
          "Rotinas de acompanhamento, performance e organização interna",
        ],
      },
      {
        title: "Modelos, fluxos e processos",
        items: [
          "Modelos operacionais aplicados na prática dentro do escritório",
          "Fluxos internos para organização dos setores",
          "Processos utilizados para melhorar produtividade, clareza e previsibilidade",
          "Materiais internos para facilitar a implementação pela equipe",
        ],
      },
      {
        title: "Extras",
        items: [
          "Grupo exclusivo do seu escritório com os meus líderes por 1 ano",
          "Networking e troca estratégica com quem vive a operação na prática",
          "Acesso a mais de 1.500 documentos (teses, materiais, fluxos e modelos internos utilizados no escritório)",
        ],
      },
    ],
    bonus: "Treinamento presencial de até 5 dias para até 3 pessoas do seu escritório",
    bonusLabel: "Bônus do evento",
    href: "#",
  },
];
