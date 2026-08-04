"use client";

import { UserSearch, HeartPulse, GraduationCap, Bot, Headset, Users, Briefcase, type LucideIcon } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

type Variant = "flagship" | "tall" | "standard";

interface Beneficio {
  variant: Variant;
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  accent: "green" | "purple";
  stat?: string;
  statLabel?: string;
  href?: string;
  linkLabel?: string;
}

const BENEFICIOS: Beneficio[] = [
  {
    variant: "flagship",
    icon: Users,
    label: "comunidade",
    stat: "+25 mil",
    statLabel: "alunos ativos",
    title: "A maior e melhor comunidade de tecnologia do Brasil",
    description: "Trocando experiência todos os dias.",
    accent: "purple",
  },
  {
    variant: "tall",
    icon: UserSearch,
    label: "semanal",
    title: "Acompanhamento de recrutadora",
    description: "Revisão de currículo, portfólio e simulados de entrevista até você estar pronto para as vagas reais.",
    accent: "green",
    href: "#",
    linkLabel: "Falar com a recrutadora",
  },
  {
    variant: "standard",
    icon: GraduationCap,
    label: "mentoria",
    title: "Mentorias semanais com os melhores do mercado",
    description: "Tire dúvidas direto com profissionais que já vivem o mercado.",
    accent: "purple",
  },
  {
    variant: "standard",
    icon: HeartPulse,
    label: "mente",
    title: "Terapeuta focado em alta performance",
    description: "Suporte emocional para sustentar a rotina de estudos.",
    accent: "green",
  },
  {
    variant: "standard",
    icon: Bot,
    label: "24h",
    title: "Dezenas de Agentes de IA",
    description: "Assistentes disponíveis 24h por dia para acelerar tudo.",
    accent: "purple",
  },
  {
    variant: "standard",
    icon: Headset,
    label: "7 dias",
    title: "Suporte humano 7 dias por semana",
    description: "Nunca fique travado sozinho, sempre tem alguém pra te ajudar.",
    accent: "green",
  },
  {
    variant: "standard",
    icon: Briefcase,
    label: "vagas",
    title: "Vagas de emprego exclusivas",
    description: "Oportunidades que chegam direto pra quem está na comunidade.",
    accent: "purple",
  },
];

const SPAN: Record<Variant, string> = {
  flagship: "sm:col-span-2 lg:col-span-4",
  tall: "lg:col-span-2 lg:row-span-2",
  standard: "lg:col-span-2",
};

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

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {BENEFICIOS.map((item, index) => {
            const Icon = item.icon;
            const isPurple = item.accent === "purple";
            const isFlagship = item.variant === "flagship";

            return (
              <ScrollReveal key={item.title} delayMs={index * 70} className={SPAN[item.variant]}>
                <article
                  className={cn(
                    "group relative flex h-full min-h-56 flex-col justify-between gap-6 overflow-hidden rounded-card border border-white/10 p-6 backdrop-blur-sm transition-all duration-300 sm:p-7",
                    isFlagship ? "bg-gradient-brand-soft" : "bg-white/3",
                    isPurple ? "hover:border-brand-purple/50 hover:shadow-glow-purple" : "hover:border-brand-green/50 hover:shadow-glow-green"
                  )}
                >
                  {!isFlagship ? (
                    <div
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute -top-16 -right-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                        isPurple ? "bg-brand-purple/25" : "bg-brand-green/25"
                      )}
                    />
                  ) : null}

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                        isPurple ? "bg-brand-purple/12 text-brand-purple-soft" : "bg-brand-green/12 text-brand-green-soft"
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span
                      className={cn(
                        "font-display text-[10px] font-bold tracking-widest uppercase",
                        isPurple ? "text-brand-purple-soft" : "text-brand-green-soft"
                      )}
                    >
                      {item.label}
                    </span>
                  </div>

                  {isFlagship ? (
                    <div className="relative flex flex-col gap-3">
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-display text-5xl font-bold text-gradient-brand sm:text-6xl">{item.stat}</span>
                        <span className="font-display text-sm font-semibold tracking-wide text-white/70 uppercase">{item.statLabel}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                      <p className="max-w-md text-sm text-white/60">{item.description}</p>
                    </div>
                  ) : (
                    <div className="relative flex flex-col gap-2">
                      <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                      <p className="text-sm text-white/60">{item.description}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand-green-soft transition-colors hover:text-brand-green"
                        >
                          {item.linkLabel}
                          <FiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      ) : null}
                    </div>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
