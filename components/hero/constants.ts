export const VIDEO_SRC = "/film/hero-film.mp4";

export const TYPEWRITER_TEXT = "Pare de estudar sem direção. Aprenda tecnologia do zero ao mercado.";
export const TYPEWRITER_SPLIT = 48;
export const TYPEWRITER_SPEED = 35;
export const TYPEWRITER_DELAY = 400;

export const LOGOS = [
  { src: "/logos/google-logo-transparent.png", alt: "Google" },
  { src: "/logos/microsoft-logo.png", alt: "Microsoft" },
  { src: "/logos/intel-logo.svg", alt: "Intel" },
  { src: "/logos/ifood-logo-png_seeklogo-463141.png", alt: "iFood" },
  { src: "/logos/mercado-livre-87.png", alt: "Mercado Livre" },
  { src: "/logos/bradesco-logo-novo-2018-2.png", alt: "Bradesco" },
];

export const HERO_ACTS = ["Direção. Clareza. Resultado.", "Conhecimento sob demanda.", "Aprenda a programar de verdade."];

export const SOCIAL_PROOF_TEXT = "já passaram por aqui";
export const SOCIAL_PROOF_COUNT = "+25 mil alunos";
export const SOCIAL_PROOF_AVATARS = [
  { src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&q=80", alt: "Aluno DevClub" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80", alt: "Aluna DevClub" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80", alt: "Aluno DevClub" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&q=80", alt: "Aluno DevClub" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80", alt: "Aluna DevClub" },
];

import type { IconType } from "react-icons";
import { SiCss, SiHtml5, SiJavascript, SiReact, SiTypescript } from "react-icons/si";

type AvatarBase = {
  orbit: 1 | 2 | 3 | 4;
  angle: number;
  radius: number;
  size: 58 | 78 | 88;
  shape: "round" | "square-20" | "square-24";
  glow: "purple" | "orange" | "pink" | "yellow" | "blue";
  delay: number;
};

export type Avatar = AvatarBase &
  ({ kind: "photo"; src: string; alt: string } | { kind: "icon"; Icon: IconType; color: string; label: string });

export const AVATARS: Avatar[] = [
  // Orbit 4 (399px)
  {
    kind: "photo",
    orbit: 4,
    angle: 0,
    radius: 399,
    size: 88,
    shape: "round",
    glow: "purple",
    delay: 1.5,
    src: "/professores/Agustinho.webp",
    alt: "Agustinho",
  },
  {
    kind: "icon",
    orbit: 4,
    angle: 120,
    radius: 399,
    size: 88,
    shape: "square-24",
    glow: "orange",
    delay: 1.7,
    Icon: SiHtml5,
    color: "#E34F26",
    label: "HTML5",
  },
  {
    kind: "photo",
    orbit: 4,
    angle: 240,
    radius: 399,
    size: 88,
    shape: "round",
    glow: "pink",
    delay: 1.9,
    src: "/professores/Henrique.webp",
    alt: "Henrique",
  },
  // Orbit 3 (325px)
  {
    kind: "icon",
    orbit: 3,
    angle: 40,
    radius: 325,
    size: 78,
    shape: "square-20",
    glow: "yellow",
    delay: 1.1,
    Icon: SiCss,
    color: "#1572B6",
    label: "CSS3",
  },
  {
    kind: "photo",
    orbit: 3,
    angle: 160,
    radius: 325,
    size: 78,
    shape: "round",
    glow: "blue",
    delay: 1.3,
    src: "/professores/Juliana.webp",
    alt: "Juliana",
  },
  {
    kind: "icon",
    orbit: 3,
    angle: 280,
    radius: 325,
    size: 78,
    shape: "square-20",
    glow: "purple",
    delay: 1.5,
    Icon: SiJavascript,
    color: "#F7DF1E",
    label: "JavaScript",
  },
  // Orbit 2 (251px)
  {
    kind: "photo",
    orbit: 2,
    angle: 80,
    radius: 251,
    size: 58,
    shape: "round",
    glow: "yellow",
    delay: 0.8,
    src: "/professores/Mateus - Especialista em IA.webp",
    alt: "Mateus",
  },
  {
    kind: "icon",
    orbit: 2,
    angle: 200,
    radius: 251,
    size: 58,
    shape: "square-20",
    glow: "blue",
    delay: 1.0,
    Icon: SiReact,
    color: "#61DAFB",
    label: "React",
  },
  {
    kind: "photo",
    orbit: 2,
    angle: 320,
    radius: 251,
    size: 58,
    shape: "round",
    glow: "pink",
    delay: 1.2,
    src: "/professores/Rodolfo Mori.webp",
    alt: "Rodolfo Mori",
  },
  // Orbit 1 (177px)
  {
    kind: "icon",
    orbit: 1,
    angle: 90,
    radius: 177,
    size: 58,
    shape: "square-20",
    glow: "purple",
    delay: 0.6,
    Icon: SiTypescript,
    color: "#3178C6",
    label: "TypeScript",
  },
];
