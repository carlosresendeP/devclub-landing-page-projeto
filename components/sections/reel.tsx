"use client";

import { useEffect, useRef } from "react";

import { useReveal } from "@/hooks/use-reveal";

export function Reel() {
  const rootRef = useReveal<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = "/film/plataforma-film.mp4";
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reel" aria-labelledby="reel-heading" className="relative overflow-hidden bg-linear-to-b from-ink to-transparent py-30 text-white">

      <div ref={rootRef} className="relative mx-auto max-w-wrap px-8">
        <div className="relative z-10 mb-14 max-w-170">
          <div data-reveal className="reveal mb-5 flex items-center gap-2 font-display text-xs font-bold tracking-widest text-brand-purple-soft uppercase">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-green" style={{ boxShadow: "0 0 10px #39D353" }} />
            <span>Por dentro do DevClub</span>
          </div>

          <h2
            id="reel-heading"
            className="mb-5 font-display text-reel-heading font-bold leading-reel-heading tracking-reel-heading text-white"
          >
            Não é só assistir aula. É entrar em um <span className="text-brand-green-soft">ecossistema</span> feito para
            você <span className="text-brand-purple-soft">evoluir</span>.
          </h2>

          <p className="max-w-135 font-body text-reel-body leading-reel-body text-white/62">
            Veja como formações, prática, professores, suporte, comunidade e oportunidades se conectam.
          </p>
        </div>

        <div data-reveal className="reveal delay-200 relative">
          <div
            className="relative rounded-[20px] border border-white/15 bg-[#111014] p-3 pb-4 sm:p-4 sm:pb-5"
            style={{ boxShadow: "0 0 60px color-mix(in srgb, var(--color-brand-purple) 18%, transparent)" }}
          >
            <div aria-hidden="true" className="mb-2 flex justify-center sm:mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg bg-ink">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster="/print-plataforma.webp"
                muted
                loop
                playsInline
                preload="none"
              >
                <track kind="captions" />
              </video>
            </div>
          </div>

          <div aria-hidden="true" className="h-2 bg-gradient-to-b from-white/10 to-transparent" />

          <div aria-hidden="true" className="laptop-base relative mx-[-5%] h-5 bg-gradient-to-b from-[#232228] to-[#0a0a0a] sm:h-6">
            <span className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-black/40 sm:w-24" />
          </div>

          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-6 w-[80%] rounded-full blur-2xl"
            style={{ background: "color-mix(in srgb, var(--color-brand-purple) 22%, transparent)" }}
          />
        </div>

        <p className="relative z-10 mt-6 font-body text-sm text-white/55">
          Um gostinho da experiência dentro da{" "}
          <span className="text-brand-green-soft">plataforma DevClub</span>.
        </p>
      </div>
    </section>
  );
}
