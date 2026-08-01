import type { IconSvgElement } from "@hugeicons/react";
import {
  Rocket01Icon,
  HtmlFiveIcon,
  CssThreeIcon,
  JavaScriptIcon,
  Typescript01Icon,
  ReactIcon,
  Database01Icon,
  Layers01Icon,
  Briefcase01Icon,
  AiBrain01Icon,
  MagicWand01Icon,
  WorkflowSquare02Icon,
  ChartAnalysisIcon,
  DashboardSquare01Icon,
  GraduationCapIcon,
} from "@hugeicons/core-free-icons";

export interface Formacao {
  id: string;
  label: string;
  icon: IconSvgElement;
  image: string;
  description: string;
}

export const FORMACOES: Formacao[] = [
  {
    id: "inicio-do-zero",
    label: "Início do Zero",
    icon: Rocket01Icon,
    image: "/cards-fomacoes/f_comeco.webp",
    description: "Programação para iniciantes, do primeiro código à sua primeira aplicação.",
  },
  {
    id: "html",
    label: "Html",
    icon: HtmlFiveIcon,
    image: "/cards-fomacoes/f_html.webp",
    description: "Html do básico ao avançado para estruturar qualquer página.",
  },
  {
    id: "css",
    label: "Css",
    icon: CssThreeIcon,
    image: "/cards-fomacoes/f_css.webp",
    description: "Css do básico ao avançado para criar interfaces bonitas e responsivas.",
  },
  {
    id: "javascript",
    label: "JavaScript Completo",
    icon: JavaScriptIcon,
    image: "/cards-fomacoes/f_javascript.webp",
    description: "JavaScript do básico ao avançado para dar vida às suas aplicações.",
  },
  {
    id: "typescript",
    label: "Typescript",
    icon: Typescript01Icon,
    image: "/cards-fomacoes/f_typescript.webp",
    description: "Typescript completo para escrever código mais seguro e escalável.",
  },
  {
    id: "react",
    label: "React",
    icon: ReactIcon,
    image: "/cards-fomacoes/f_react.webp",
    description: "React do zero à criação de interfaces modernas e componentizadas.",
  },
  {
    id: "back-end",
    label: "Back End",
    icon: Database01Icon,
    image: "/cards-fomacoes/f_node.webp",
    description: "Node, APIs e banco de dados para construir sistemas robustos.",
  },
  {
    id: "full-stack",
    label: "Full Stack",
    icon: Layers01Icon,
    image: "/cards-fomacoes/f_full.webp",
    description: "Front-end e back-end integrados em um único fluxo de trabalho.",
  },
  {
    id: "carreira-dev",
    label: "Carreira Dev",
    icon: Briefcase01Icon,
    image: "/cards-fomacoes/f_carreira.webp",
    description: "Como se posicionar no mercado e conquistar sua primeira vaga.",
  },
  {
    id: "gestor-de-ia",
    label: "Gestor de IA",
    icon: AiBrain01Icon,
    image: "/cards-fomacoes/f_ia.webp",
    description: "Estratégia com IA para liderar times e produtos com tecnologia.",
  },
  {
    id: "engenharia-de-prompts",
    label: "Engenharia de Prompts",
    icon: MagicWand01Icon,
    image: "/cards-fomacoes/f_prompt.webp",
    description: "Fluxos inteligentes para extrair o máximo dos modelos de IA.",
  },
  {
    id: "automacao-n8n",
    label: "Automação com n8n",
    icon: WorkflowSquare02Icon,
    image: "/cards-fomacoes/f_n8n.webp",
    description: "Automação de processos e integrações sem escrever infraestrutura do zero.",
  },
  {
    id: "analise-de-dados",
    label: "Análise de Dados",
    icon: ChartAnalysisIcon,
    image: "/cards-fomacoes/f_data.webp",
    description: "Sql, Pandas e insights para transformar dados em decisões.",
  },
  {
    id: "power-bi",
    label: "Power BI",
    icon: DashboardSquare01Icon,
    image: "/cards-fomacoes/f_power.webp",
    description: "Dashboards executivos para visualizar dados com clareza.",
  },
  {
    id: "mba-em-ia",
    label: "MBA em IA",
    icon: GraduationCapIcon,
    image: "/cards-fomacoes/f_mba.webp",
    description: "Gestão e estratégia para liderar a transformação digital com IA.",
  },
];
