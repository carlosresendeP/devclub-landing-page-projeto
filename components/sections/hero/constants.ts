export const FRAME_COUNT = 90;
export const FRAME_SRC = (index: number) => `/frames/frame-${String(index).padStart(3, "0")}.webp`;

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
  { src: "/logos/dell-logo-16.png", alt: "Dell" },
  { src: "/logos/download-removebg-preview.png", alt: "Santander" },
  { src: "/logos/IBM_logo.svg", alt: "IBM" },
  { src: "/logos/Itaú_Unibanco_logo_2023.svg.webp", alt: "Itaú" },
  { src: "/logos/Logo-Inter.png", alt: "Inter" },
  { src: "/logos/MSI-Logo-2019-present.png", alt: "MSI" },
  { src: "/logos/Nubank_logo.svg.webp", alt: "Nubank" },
  { src: "/logos/nvidia-logo.png", alt: "NVIDIA" },
  { src: "/logos/PlayStation-Logo.wine.svg", alt: "PlayStation" },
  { src: "/logos/TV_Globo_logo_(April_2025).png", alt: "TV Globo" },
  { src: "/logos/WEG_Equipamentos_Elétricos.svg.webp", alt: "WEG" },
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
import { SiCss, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

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
    kind: "icon",
    orbit: 4,
    angle: 0,
    radius: 399,
    size: 88,
    shape: "square-24",
    glow: "purple",
    delay: 1.5,
    Icon: SiHtml5,
    color: "#E34F26",
    label: "HTML5",
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
    Icon: SiNodedotjs,
    color: "#339933",
    label: "Node.js",
  },
  {
    kind: "icon",
    orbit: 4,
    angle: 240,
    radius: 399,
    size: 88,
    shape: "square-24",
    glow: "pink",
    delay: 1.9,
    Icon: SiMongodb,
    color: "#47A248",
    label: "MongoDB",
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
    kind: "icon",
    orbit: 3,
    angle: 160,
    radius: 325,
    size: 78,
    shape: "square-20",
    glow: "blue",
    delay: 1.3,
    Icon: SiJavascript,
    color: "#F7DF1E",
    label: "JavaScript",
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
    Icon: SiTailwindcss,
    color: "#38BDF8",
    label: "Tailwind CSS",
  },
  // Orbit 2 (251px)
  {
    kind: "icon",
    orbit: 2,
    angle: 90,
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
    kind: "icon",
    orbit: 2,
    angle: 270,
    radius: 251,
    size: 58,
    shape: "square-20",
    glow: "yellow",
    delay: 1.2,
    Icon: TbDatabase,
    color: "#F2C94C",
    label: "Banco de Dados",
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
