"use client";

import { useEffect, useRef, useState } from "react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

interface Etapa {
  nivel: string;
  valor: string;
  titulo: string;
  texto: string;
  x: number;
  y: number;
}

const AREAS = ["Front-end", "Back-end", "Full Stack", "Mobile", "Dados", "IA"];

const ETAPAS: Etapa[] = [
  {
    nivel: "Júnior",
    valor: "R$ 4.000",
    titulo: "Primeiras oportunidades",
    texto: "Com projetos no GitHub e uma base sólida, você conquista as primeiras vagas e passa a atuar no dia a dia de um time.",
    x: 150,
    y: 300,
  },
  {
    nivel: "Pleno",
    valor: "R$ 7.500",
    titulo: "Autonomia técnica",
    texto: "Você ganha independência, resolve problemas mais complexos e se torna referência dentro do time.",
    x: 380,
    y: 190,
  },
  {
    nivel: "Sênior",
    valor: "R$ 13.000+",
    titulo: "Sem teto definido",
    texto: "Sua experiência abre portas para liderar projetos, escolher onde trabalhar e negociar sua própria evolução.",
    x: 600,
    y: 75,
  },
];

const VIEW_BOX = "0 0 620 420";
const BASELINE_Y = 360;

function SalariosChart({ activeStep, className }: { activeStep: number; className?: string }) {
  const progress = (activeStep + 1) / ETAPAS.length;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-1/4 bottom-[8%] h-32 rounded-full bg-brand-green/20 blur-3xl transition-opacity duration-700"
        style={{ opacity: 0.3 + progress * 0.5 }}
      />

      <div aria-hidden className="absolute inset-x-[-20%] bottom-0 h-[50%] origin-bottom" style={{ transform: "perspective(700px) rotateX(60deg)" }}>
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            maskImage: "linear-gradient(to top, black 0%, black 25%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, black 25%, transparent 95%)",
          }}
        />
      </div>

      <span className="absolute left-5 top-5 font-display text-[10px] font-bold uppercase tracking-widest text-white/35">Trajetória dev</span>

      <svg viewBox={VIEW_BOX} preserveAspectRatio="xMidYMid meet" className="absolute inset-0 size-full p-6">
        <defs>
          <linearGradient id="salariosLine" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-brand-green)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>

        {ETAPAS.map((etapa, index) => {
          const revealed = index <= activeStep;
          const isActive = index === activeStep;
          return (
            <g
              key={etapa.nivel}
              style={{
                transformOrigin: `${etapa.x}px ${BASELINE_Y}px`,
                transform: revealed ? "scaleY(1)" : "scaleY(0)",
                opacity: revealed ? 1 : 0,
                transition: "transform 700ms cubic-bezier(0.16,1,0.3,1), opacity 400ms ease-out",
              }}
            >
              <line
                x1={etapa.x}
                y1={BASELINE_Y}
                x2={etapa.x}
                y2={etapa.y}
                stroke={isActive ? "var(--color-brand-green-soft)" : "var(--color-brand-green)"}
                strokeWidth={2}
                strokeLinecap="round"
                opacity={isActive ? 0.9 : 0.45}
              />
              {isActive ? <circle cx={etapa.x} cy={etapa.y} r={12} fill="var(--color-brand-green)" opacity={0.22} /> : null}
              <circle cx={etapa.x} cy={etapa.y} r={isActive ? 6 : 4.5} fill={isActive ? "var(--color-brand-green-soft)" : "var(--color-brand-green)"} />

              <text
                x={etapa.x - 16}
                y={etapa.y - 2}
                textAnchor="end"
                fontSize={18}
                fontWeight={700}
                style={{ fontFamily: "var(--font-display)" }}
                fill={isActive ? "url(#salariosLine)" : "rgba(255,255,255,0.5)"}
              >
                {etapa.valor}
              </text>
              <text
                x={etapa.x - 16}
                y={etapa.y + 16}
                textAnchor="end"
                fontSize={11}
                fontWeight={700}
                letterSpacing={1.5}
                style={{ fontFamily: "var(--font-display)" }}
                className="uppercase"
                fill={isActive ? "#ffffff" : "rgba(255,255,255,0.4)"}
              >
                {etapa.nivel}
              </text>
            </g>
          );
        })}
      </svg>

      <span className="absolute bottom-4 right-5 max-w-45 text-right font-display text-[9px] leading-snug text-white/25">
        Médias de mercado por nível, fev/2026. Fontes: Glassdoor, GeekHunter.
      </span>
    </div>
  );
}

function AreaPills() {
  return (
    <div className="flex flex-wrap gap-2">
      {AREAS.map((area) => (
        <span key={area} className="rounded-full border border-white/10 px-3 py-1 font-display text-[11px] tracking-wide text-white/55 uppercase">
          {area}
        </span>
      ))}
    </div>
  );
}

export function Salarios() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    let ticking = false;

    function compute() {
      ticking = false;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      const next = Math.min(ETAPAS.length - 1, Math.floor(progress * ETAPAS.length));
      setActiveStep((prev) => (prev === next ? prev : next));
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    }

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  const displayStep = reducedMotion ? ETAPAS.length - 1 : activeStep;

  const log = ETAPAS.slice(0, displayStep + 1).reverse();

  return (
    <section id="salarios" ref={sectionRef} className="relative lg:h-[380vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
        <div className="mx-auto w-full max-w-wrap px-8 py-24 sm:py-32 lg:py-0">
          <SectionHeading
            eyebrow="Perspectiva de carreira"
            title={
              <>
                Veja onde a <span className="text-gradient-brand">evolução em tecnologia</span> pode levar você
              </>
            }
          />

          {/* Desktop: pinned scroll-driven experience */}
          <div className="mt-10 hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="flex min-h-[clamp(220px,32vh,320px)] flex-col justify-center gap-6">
              {log.map((etapa, i) => (
                <div key={etapa.nivel} className={cn("transition-all duration-500", i === 0 ? "opacity-100" : "opacity-35")}>
                  <span className={cn("font-display text-xs font-bold uppercase tracking-widest", i === 0 ? "text-brand-green-soft" : "text-white/40")}>
                    {etapa.nivel} · {etapa.valor}
                  </span>
                  <h3 className={cn("mt-2 font-display font-semibold", i === 0 ? "text-2xl text-white" : "text-base text-white/60")}>{etapa.titulo}</h3>
                  {i === 0 ? <p className="mt-2 max-w-sm text-sm text-white/60">{etapa.texto}</p> : null}
                </div>
              ))}
            </div>

            <SalariosChart activeStep={displayStep} className="h-[clamp(340px,52vh,540px)]" />
          </div>

          {/* Mobile/tablet: static fallback, no scroll pin */}
          <div className="lg:hidden">
            <p className="mt-4 max-w-135 text-reel-body leading-reel-body text-white/62">
              Seu salário cresce junto com sua experiência. Veja como a trajetória em programação evolui, nível a nível, sem teto definido.
            </p>
            <div className="mt-6">
              <AreaPills />
            </div>
            <SalariosChart activeStep={ETAPAS.length - 1} className="mt-10 h-95 sm:h-110" />
            <div className="mt-10 flex flex-col gap-8">
              {ETAPAS.map((etapa, index) => (
                <ScrollReveal key={etapa.nivel} delayMs={index * 80} className="flex flex-col gap-2">
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-green-soft">
                    {etapa.nivel} · {etapa.valor}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">{etapa.titulo}</h3>
                  <p className="max-w-sm text-sm text-white/60">{etapa.texto}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
