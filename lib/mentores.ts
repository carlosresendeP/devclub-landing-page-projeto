export interface Mentor {
  name: string;
  role: string;
  photo?: string;
  initials: string;
}

export const MENTORES: Mentor[] = [
  {
    name: "Rodolfo Mori",
    role: "Fundador & Mentor de Programação",
    photo: "/professores/Rodolfo Mori.webp",
    initials: "RM",
  },
  {
    name: "Fernanda",
    role: "Recrutadora & Carreira",
    photo: "/professores/Fernanda - Carreira.webp",
    initials: "FE",
  },
  {
    name: "Agustinho",
    role: "Mentor de Back End",
    photo: "/professores/Agustinho.webp",
    initials: "AG",
  },
  {
    name: "Henrique",
    role: "Mentor de Full Stack",
    photo: "/professores/Henrique.webp",
    initials: "HE",
  },
  {
    name: "Márcio",
    role: "Terapeuta de Alta Performance",
    photo: "/professores/Marcio - Terapelta.webp",
    initials: "MA",
  },
  {
    name: "Juliana",
    role: "Mentora de Carreira",
    photo: "/professores/Juliana.webp",
    initials: "JU",
  },
  {
    name: "Mateus",
    role: "Especialista em IA",
    photo: "/professores/Mateus - Especialista em IA.webp",
    initials: "MT",
  },
];
