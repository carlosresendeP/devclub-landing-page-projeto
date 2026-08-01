import { LOGOS } from "./constants";

export function HeroTicker() {
  return (
    <section aria-label="Empresas onde nossos alunos atuam" className="relative pt-3.5 pb-6">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max items-center gap-14 animate-ticker-scroll">
          {[0, 1, 2, 3].flatMap((rep) =>
            LOGOS.map((logo, i) => (
              <img
                key={`${rep}-${i}`}
                src={logo.src}
                alt={rep === 0 ? logo.alt : ""}
                aria-hidden={rep === 0 ? undefined : true}
                className="h-8 w-28 shrink-0 object-contain opacity-70 brightness-0 invert"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
