"use client";

import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCss, SiHtml5, SiMongodb, SiN8N, SiNextdotjs, SiPostgresql, SiPrisma, SiStripe, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrain, TbChartBar } from "react-icons/tb";
import type { IconType } from "react-icons";

import { SectionHeading } from "@/components/shared/section-heading";
import { TechArchitecture } from "@/components/sections/tecnologias/tech-architecture";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface Tecnologia {
  name: string;
  icon: IconType;
  color: string;
  /** Position in the diagram's 200x100 viewBox space, matching a wire endpoint. */
  x: number;
  y: number;
}

const TECNOLOGIAS: Tecnologia[] = [
  { name: "React", icon: FaReact, color: "#61DAFB", x: 10, y: 20 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", x: 180, y: 10 },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", x: 130, y: 20 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", x: 170, y: 80 },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A", x: 135, y: 65 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", x: 94.8, y: 95 },
  { name: "Prisma", icon: SiPrisma, color: "#8181F7", x: 88, y: 88 },
  { name: "Stripe", icon: SiStripe, color: "#635BFF", x: 30, y: 30 },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", x: 55, y: 8 },
  { name: "CSS", icon: SiCss, color: "#1572B6", x: 75, y: 12 },
  { name: "IA", icon: TbBrain, color: "#A66BF0", x: 150, y: 8 },
  { name: "n8n", icon: SiN8N, color: "#EA4B71", x: 185, y: 45 },
  { name: "Power BI", icon: TbChartBar, color: "#F2C811", x: 15, y: 60 },
  { name: "Postgres", icon: SiPostgresql, color: "#4169E1", x: 25, y: 85 },
  { name: "Banco de dados", icon: FaDatabase, color: "#9CA3AF", x: 50, y: 92 },
];

export function Tecnologias() {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-24 text-white sm:py-32">
      <div className="mx-auto max-w-wrap px-8">
        <SectionHeading
          eyebrow="Stack completa"
          title={
            <>
              As <span className="text-brand-green-soft">tecnologias</span> que se conectam ao seu{" "}
              <span className="text-brand-purple-soft">futuro dev</span>
            </>
          }
          lede="Do front ao back, você aprende o mesmo stack usado por empresas de verdade, tudo integrado em um único ecossistema."
          align="center"
          className="mx-auto"
        />

        <ScrollReveal className="mt-16 sm:mt-20">
          <div className="rounded-panel border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <div className="relative mx-auto aspect-2/1 w-full max-w-4xl">
              <TechArchitecture className="absolute inset-0 h-full w-full" />

              {TECNOLOGIAS.map((tech) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.name}
                    title={tech.name}
                    className="absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/85 backdrop-blur-sm sm:size-12"
                    style={{
                      left: `${(tech.x / 200) * 100}%`,
                      top: `${(tech.y / 100) * 100}%`,
                      boxShadow: `0 0 16px 0 ${tech.color}55`,
                    }}
                  >
                    <Icon className="size-4 sm:size-5" style={{ color: tech.color }} />
                  </span>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-14">
              {TECNOLOGIAS.map((tech) => (
                <span key={tech.name} className="rounded-full border border-white/10 px-3 py-1 font-display text-[11px] tracking-wide text-white/55 uppercase">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={100} className="mt-10 sm:mt-14">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {TECNOLOGIAS.map((tech) => {
              const Icon = tech.icon;
              return (
                <span
                  key={tech.name}
                  title={tech.name}
                  className="flex aspect-square size-16 shrink-0 items-center justify-center rounded-2xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] sm:size-20"
                  style={{ background: `linear-gradient(135deg, ${tech.color}, color-mix(in srgb, ${tech.color} 45%, black))` }}
                >
                  <Icon className="size-7 text-white sm:size-9" />
                </span>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
