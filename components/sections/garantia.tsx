"use client";

import { FiShield } from "react-icons/fi";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useReveal } from "@/hooks/use-reveal";

const PASSOS = [
  { numero: "01", texto: "Compre hoje e acesse imediatamente" },
  { numero: "02", texto: "Use a plataforma como quiser por 7 dias" },
  { numero: "03", texto: "Não gostou? Mande e-mail e receba 100% de volta" },
];

const CIRCLE_RADIUS = 80;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const CIRCLE_LABEL = "GARANTIA INCONDICIONAL  •  7 DIAS  •  ";

export function Garantia() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <section id="garantia" className="relative overflow-hidden py-24 text-white sm:py-32">
      <div ref={rootRef} className="mx-auto w-full max-w-5xl px-8">
        <ScrollReveal className="elevated-surface relative overflow-hidden rounded-panel border border-white/10 px-6 py-12 sm:px-12">
          <div aria-hidden className="pointer-events-none absolute -top-32 right-0 size-80 rounded-full bg-brand-green/15 blur-3xl" />

          <div className="relative grid gap-12 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-16">
            <div className="relative mx-auto size-40 shrink-0 sm:size-44">
              <svg viewBox="0 0 200 200" className="size-full animate-spin text-brand-green-soft [animation-duration:26s]">
                <defs>
                  <path
                    id="garantia-circle-path"
                    fill="none"
                    d={`M 100,100 m -${CIRCLE_RADIUS},0 a ${CIRCLE_RADIUS},${CIRCLE_RADIUS} 0 1,1 ${CIRCLE_RADIUS * 2},0 a ${CIRCLE_RADIUS},${CIRCLE_RADIUS} 0 1,1 -${CIRCLE_RADIUS * 2},0`}
                  />
                </defs>
                <text fill="currentColor" fontSize="9" className="font-display uppercase">
                  <textPath href="#garantia-circle-path" textLength={CIRCLE_CIRCUMFERENCE} lengthAdjust="spacingAndGlyphs">
                    {CIRCLE_LABEL}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-[20%] flex items-center justify-center rounded-full border border-brand-green/30 bg-surface-dark">
                <FiShield className="size-9 text-brand-green-soft" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-col gap-6 text-center sm:text-left">
              <div className="flex flex-col gap-3">
                <span className="font-display text-xs font-bold tracking-widest text-brand-green-soft uppercase">risco zero pra você</span>
                <h2 className="font-display text-reel-heading font-bold leading-reel-heading tracking-reel-heading text-white">
                  7 dias de garantia <span className="text-gradient-brand">incondicional</span>
                </h2>
                <p className="text-sm text-white/60 sm:max-w-2xl sm:text-base">
                  Você tem até <span className="font-semibold text-white">7 dias</span> depois da sua matrícula no DevClub para explorar todos
                  os cursos, formações, projetos e a comunidade. Se não for pra você, é só pedir reembolso. Sem burocracia, sem letra miúda.
                </p>
              </div>

              <div className="grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
                {PASSOS.map((passo) => (
                  <div key={passo.numero} className="flex flex-col gap-1.5">
                    <span className="font-display text-xs text-brand-green-soft">{passo.numero}</span>
                    <span className="text-sm font-medium leading-snug text-white">{passo.texto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
