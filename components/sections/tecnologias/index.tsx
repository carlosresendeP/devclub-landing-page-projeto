"use client";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiPrisma, SiStripe, SiTailwindcss, SiTypescript } from "react-icons/si";
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
      </div>
    </section>
  );
}
