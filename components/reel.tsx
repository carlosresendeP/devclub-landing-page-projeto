"use client";

import { useReveal } from "@/hooks/use-reveal";

export function Reel() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <section id="reel" aria-labelledby="reel-heading" className="relative overflow-hidden bg-ink py-30 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-55"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(57,211,83,0.08), transparent 65%), linear-gradient(180deg, rgba(20,19,21,0.9), transparent)",
        }}
      />

      <div ref={rootRef} className="relative mx-auto max-w-wrap px-8">
        <div className="relative z-10 mb-14 max-w-170">
          <div data-reveal className="reveal mb-5 flex items-center gap-2 font-display text-xs font-bold tracking-widest text-brand-purple-soft uppercase">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-green" style={{ boxShadow: "0 0 10px #39D353" }} />
            <span>Por dentro do DevClub</span>
          </div>

          <h2
            id="reel-heading"
            data-reveal
            className="reveal delay-75 mb-5 font-display text-reel-heading font-bold leading-reel-heading tracking-reel-heading text-white"
          >
            Não é só assistir aula. É entrar em um ecossistema feito para você evoluir.
          </h2>

          <p data-reveal className="reveal delay-150 max-w-135 font-body text-reel-body leading-reel-body text-white/62">
            Veja como formações, prática, professores, suporte, comunidade e oportunidades se conectam.
          </p>
        </div>

        <div className="relative z-10">
          <span
            aria-hidden="true"
            className="absolute -top-20 -left-15 h-85 w-85 rounded-full bg-brand-purple opacity-30 blur-2xl"
          />
          <span
            aria-hidden="true"
            className="absolute -right-10 -bottom-20 h-75 w-75 rounded-full bg-brand-green opacity-25 blur-2xl"
          />

          <div
            data-reveal
            className="reveal delay-200 relative aspect-video overflow-hidden rounded-card border border-white/10 bg-black"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <span className="font-body text-xs tracking-widest text-white/25 uppercase">Preview em breve</span>
            </div>
          </div>
        </div>

        <p data-reveal className="reveal delay-300 relative z-10 mt-6 font-body text-sm text-white/55">
          Espaço reservado para o showreel real da plataforma —{" "}
          <span className="text-brand-green-soft">entra na próxima iteração</span> deste protótipo.
        </p>
      </div>
    </section>
  );
}
