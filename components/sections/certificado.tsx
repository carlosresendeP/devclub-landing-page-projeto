"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Award } from "lucide-react";
import { FiCheck } from "react-icons/fi";

import { SectionHeading } from "@/components/shared/section-heading";
import { TiltedCard } from "@/components/ui/tilted-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const DESTAQUES = [
  "Emitido assim que você conclui a formação",
  "Vem com o seu nome e a trilha concluída",
  "Pronto para o LinkedIn e o portfólio",
];

const STATS = [
  { k: "Carga", v: "480h" },
  { k: "Nível", v: "Nacional" },
  { k: "Registro", v: "MEC" },
];

export function Certificado() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [56, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="certificado" ref={sectionRef} className="relative overflow-hidden py-24 text-white sm:py-32">
      <div className="relative mx-auto grid w-full max-w-wrap items-center gap-14 px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Certificado"
            title={
              <>
                Termine e leve um certificado com <span className="text-brand-green-soft">o seu nome</span>
              </>
            }
            lede="Cada formação concluída gera um certificado digital, pronto para compartilhar no LinkedIn ou anexar num processo seletivo."
          />

          <ul className="flex flex-col gap-3 border-t border-white/10 pt-6">
            {DESTAQUES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                <FiCheck className="mt-0.5 size-4 shrink-0 text-brand-green-soft" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div style={reducedMotion ? undefined : { y, scale, rotate, opacity }} className="relative mx-auto w-full max-w-135">
          <div aria-hidden className="absolute inset-0 -z-10 rounded-4xl bg-brand-purple/20 blur-3xl" />

          <TiltedCard className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card via-card to-brand-purple/10 p-8 shadow-glow-purple">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"
            />

            <div className="flex items-start justify-between">
              <Image src="/LOGO.webp" alt="DevClub" width={36} height={36} className="rounded" />
              <Award className="size-6 text-brand-green-soft" />
            </div>

            <div className="mt-16 flex flex-col gap-2">
              <span className="font-display text-[10px] tracking-[0.2em] text-white/50 uppercase">Certificado de Conclusão</span>
              <span className="font-display text-3xl leading-tight font-light text-white sm:text-4xl">Programação Full Stack</span>
              <span className="text-xs text-white/50">Reconhecido pelo MEC · Diploma oficial com validade nacional</span>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {STATS.map((stat) => (
                <div key={stat.k} className="flex flex-col gap-0.5">
                  <span className="font-display text-[10px] tracking-[0.14em] text-white/50 uppercase">{stat.k}</span>
                  <span className="text-sm font-semibold text-white">{stat.v}</span>
                </div>
              ))}
            </div>
          </TiltedCard>
        </motion.div>
      </div>
    </section>
  );
}
