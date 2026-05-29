export const SITE_CONFIG = {
  name: "Spotlight",
  description: "Sistema de Descoberta de Filmes com Inteligência Artificial",
  url: "https://spotlight.com.br",
  appUrl: "https://app.spotlight.com.br",
  apiUrl: "https://api.spotlight.com.br",
  github: "https://github.com/joeljoao/spotlight",
  tcc: {
    institution: "COTIL/UNICAMP",
    course: "Desenvolvimento de Sistemas",
    year: 2026,
    class: "3ºDSN",
  },
  team: [
    {
      name: "Andrei Silva de Oliveira",
      ra: "204010",
      role: "Dev Mobile & UI/UX",
      linkedin: "#", // TODO: Preencher com LinkedIn real (ex: https://linkedin.com/in/nome)
      github: "https://github.com/joeljoao/spotlight",
    },
    {
      name: "Joel João de Araujo Neto",
      ra: "204244",
      role: "Arquiteto & Dev Full Stack",
      linkedin: "#", // TODO: Preencher com LinkedIn real
      github: "https://github.com/joeljoao",
    },
    {
      name: "Luan Henrique Ferreira",
      ra: "204267",
      role: "Dev Backend & Banco de Dados",
      linkedin: "#", // TODO: Preencher com LinkedIn real
      github: "https://github.com/joeljoao/spotlight",
    },
    {
      name: "Miguel Vinhado",
      ra: "204572",
      role: "Dev IA & NLP Specialist",
      linkedin: "#", // TODO: Preencher com LinkedIn real
      github: "https://github.com/joeljoao/spotlight",
    },
  ],
} as const;

export const NAV_LINKS = [
  { href: "/sobre", label: "Sobre" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/equipe", label: "Equipe" },
] as const;
