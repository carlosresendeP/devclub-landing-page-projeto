"use client";

import { UserSearch, HeartPulse, GraduationCap, Bot, Headset, Users, Briefcase, type LucideIcon } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { EMPRESAS } from "@/lib/empresas";

interface Beneficio {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  accent: "green" | "purple";
}

const BENEFICIOS: Beneficio[] = [
  {
    icon: GraduationCap,
    tag: "mentoria",
    title: "Mentorias semanais com os melhores do mercado",
    description: "Tire dúvidas direto com profissionais que já vivem o mercado.",
    accent: "purple",
  },
  {
    icon: HeartPulse,
    tag: "mente",
    title: "Terapeuta focado em alta performance",
    description: "Suporte emocional para sustentar a rotina de estudos.",
    accent: "green",
  },
  {
    icon: Bot,
    tag: "24h",
    title: "Dezenas de Agentes de IA",
    description: "Assistentes disponíveis 24h por dia para acelerar tudo.",
    accent: "purple",
  },
  {
    icon: Headset,
    tag: "7 dias",
    title: "Suporte humano 7 dias por semana",
    description: "Nunca fique travado sozinho, sempre tem alguém pra te ajudar.",
    accent: "green",
  },
  {
    icon: Briefcase,
    tag: "vagas",
    title: "Vagas de emprego exclusivas",
    description: "Oportunidades que chegam direto pra quem está na comunidade.",
    accent: "purple",
  },
];

export function AlemDoCodigo() {
  return (
    <section id="alem-do-codigo" className="relative overflow-hidden py-24 text-white sm:py-30">
      <div className="mx-auto max-w-wrap px-8">
        <SectionHeading
          eyebrow="Além do código"
          title={
            <>
              Tudo que você precisa <span className="text-brand-green-soft">além do código</span> para{" "}
              <span className="text-brand-purple-soft">evoluir mais rápido</span>
            </>
          }
          lede="Programar é só uma parte da jornada. Construímos uma estrutura completa de suporte, mentoria e comunidade ao seu redor."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-6">
          <ScrollReveal className="lg:col-span-2 lg:row-span-2">
            <div className="group relative flex h-full min-h-65 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-brand-purple/25 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <span className="relative flex size-11 items-center justify-center rounded-2xl bg-brand-purple/12 text-brand-purple-soft transition-transform duration-300 group-hover:scale-110">
                <Users className="size-5" />
              </span>

              <div className="relative flex flex-col gap-2">
                <span className="font-display text-4xl font-light text-white sm:text-5xl">+25 mil</span>
                <h3 className="text-base font-semibold text-white sm:text-lg">A maior e melhor comunidade de tecnologia do Brasil</h3>
                <p className="text-sm text-white/60">Milhares de profissionais trocando experiência e se cobrando junto.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={70} className="lg:col-span-4">
            <article className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-brand-green/30 bg-gradient-brand-soft p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-green/50 hover:shadow-glow-green sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-brand-green/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-green/12 text-brand-green-soft transition-transform duration-300 group-hover:scale-110">
                  <UserSearch className="size-5" />
                </span>
                <span className="rounded-full border border-brand-green/30 px-3 py-1 font-display text-[10px] tracking-widest text-brand-green-soft uppercase">semanal</span>
              </div>

              <div className="relative flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">Acompanhamento da nossa recrutadora, toda semana</h3>
                <p className="text-sm text-white/60 sm:text-base">Revisão de currículo, portfólio e simulados de entrevista até você estar pronto para as vagas reais.</p>
              </div>

              <a href="#" className="relative inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand-green-soft transition-colors hover:text-brand-green">
                Falar com a recrutadora
                <FiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={140} className="lg:col-span-4">
            <article className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-purple/50 hover:shadow-glow-purple sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-brand-purple/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-purple/12 text-brand-purple-soft transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap className="size-5" />
                </span>
                <span className="rounded-full border border-brand-purple/30 px-3 py-1 font-display text-[10px] tracking-widest text-brand-purple-soft uppercase">mentoria</span>
              </div>

              <div className="relative flex flex-col gap-2">
                <h3 className="text-base font-semibold text-white sm:text-lg">Mentorias semanais com os melhores do mercado</h3>
                <p className="text-sm text-white/60">Tire dúvidas direto com profissionais que já vivem o mercado.</p>
              </div>
            </article>
          </ScrollReveal>

          {BENEFICIOS.slice(1).map((item, index) => {
            const Icon = item.icon;
            const isPurple = item.accent === "purple";
            return (
              <ScrollReveal key={item.title} delayMs={210 + index * 70} className="lg:col-span-2">
                <article
                  className={cn(
                    "group relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300",
                    isPurple ? "hover:border-brand-purple/50 hover:shadow-glow-purple" : "hover:border-brand-green/50 hover:shadow-glow-green"
                  )}
                >
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -top-16 -right-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                      isPurple ? "bg-brand-purple/25" : "bg-brand-green/25"
                    )}
                  />

                  <div className="relative flex items-center justify-between">
                    <span className={cn("flex size-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110", isPurple ? "bg-brand-purple/12 text-brand-purple-soft" : "bg-brand-green/12 text-brand-green-soft")}>
                      <Icon className="size-5" />
                    </span>
                    <span className={cn("rounded-full border px-3 py-1 font-display text-[10px] tracking-widest uppercase", isPurple ? "border-brand-purple/30 text-brand-purple-soft" : "border-brand-green/30 text-brand-green-soft")}>
                      {item.tag}
                    </span>
                  </div>

                  <div className="relative flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delayMs={280} className="mt-16 border-t border-white/10 pt-10">
          <p className="text-center font-display text-xs font-bold tracking-widest text-white/50 uppercase">Empresas que contratam nossos alunos</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:gap-x-10 sm:gap-y-6">
            {EMPRESAS.map((empresa) => (
              <div key={empresa.alt} className="flex h-7 w-20 shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-28">
                <Image src={empresa.src} alt={empresa.alt} width={112} height={40} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
