"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Formações", href: "#" },
  { label: "Faculdade", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Comunidade", href: "#" },
];

const SCROLL_THRESHOLD = 140;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "glass-surface" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-mkt items-center justify-between px-10 py-4">
        <div className="flex items-center gap-11">
          <Image src="/LOGO.webp" alt="DevClub" width={100} height={100} className="h-7 w-auto" />

          <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative pb-0.5 text-sm text-white/85 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:text-white hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#"
            className="hidden text-sm text-white/85 transition-colors hover:text-white md:inline"
          >
            Área do Aluno
          </a>

          <div className="gradient-border-pill hidden md:block">
            <button
              type="button"
              className="group relative z-10 inline-flex items-center  overflow-hidden rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 ease-pop group-hover:translate-x-0" />
              <span className="relative z-10">Quero ser aluno</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex items-center justify-center rounded-full p-1.5 text-white md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegação mobile"
        className={`grid transition-[grid-template-rows] duration-300 ease-signature md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-5 px-10 pb-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-sm text-white/85 transition-colors hover:text-white"
            >
              Área do Aluno
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
