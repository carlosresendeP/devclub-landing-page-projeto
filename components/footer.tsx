import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const COLUNAS = [
  {
    titulo: "Formações",
    links: [
      { label: "Formações completas", href: "#formacoes" },
      { label: "Módulos bônus", href: "#modulos-bonus" },
      { label: "Plataforma de ensino", href: "#plataforma" },
    ],
  },
  {
    titulo: "DevClub",
    links: [
      { label: "Mentores", href: "#professores" },
      { label: "Projetos reais", href: "#projetos" },
      { label: "Dúvidas frequentes", href: "#faq" },
    ],
  },
  {
    titulo: "Comece agora",
    links: [
      { label: "Quero ser aluno", href: "#" },
      { label: "Área do aluno", href: "#" },
      { label: "Garantia de 7 dias", href: "#garantia" },
    ],
  },
];

const REDES = [
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com/devclub" },
  { icon: SiYoutube, label: "YouTube", href: "https://youtube.com/@devclub" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/company/devclub" },
  { icon: SiTiktok, label: "TikTok", href: "https://tiktok.com/@devclub" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 text-white">
      <div className="mx-auto w-full max-w-wrap px-8">
        <div className="flex flex-col items-center gap-6 border-b border-white/10 py-16 text-center sm:py-20">
          <span className="font-display text-[11px] font-bold tracking-widest text-brand-purple-soft uppercase">matrícula aberta</span>
          <h2 className="max-w-3xl font-display text-reel-heading font-bold leading-reel-heading tracking-reel-heading text-white">
            Pronto para começar <span className="text-gradient-brand">sua jornada?</span>
          </h2>
          <a href="#" className="group relative mt-2 inline-flex items-center justify-center rounded-full p-px transition-transform duration-300 hover:scale-[1.03]">
            <span aria-hidden className="btn-glow-ring absolute inset-0 rounded-full opacity-90" />
            <span aria-hidden className="absolute inset-px rounded-full bg-black/85 backdrop-blur-xl" />
            <span className="relative z-10 flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white">
              Quero ser aluno
              <FiArrowUpRight className="size-4" />
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-12 py-14 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-5">
            <a href="/" className="flex items-center gap-2">
              <Image src="/LOGO.webp" alt="DevClub" width={32} height={32} className="brightness-0 invert" />
              <span className="font-display text-sm text-white">DevClub</span>
            </a>
            <p className="text-sm text-white/60">
              Escola de programação, gestão de IA, automações e análise de dados, do zero ao avançado, com mentoria semanal e uma comunidade que não te
              deixa parar no meio do caminho.
            </p>
            <div className="flex items-center gap-3">
              {REDES.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-brand-green-soft/50 hover:text-brand-green-soft"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-14">
            {COLUNAS.map((coluna) => (
              <div key={coluna.titulo} className="flex flex-col gap-4">
                <span className="font-display text-[11px] font-bold tracking-widest text-white/40 uppercase">{coluna.titulo}</span>
                <ul className="flex flex-col gap-3">
                  {coluna.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-brand-green-soft">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="border-t border-white/10 py-8 text-xs text-white/40">© {new Date().getFullYear()} DevClub. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
