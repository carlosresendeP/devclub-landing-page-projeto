# DevClub — Landing Page

Landing page institucional da DevClub, construída em Next.js (App Router) com Tailwind CSS v4, GSAP, Motion (Framer Motion) e Embla Carousel. Página única (`/`), full dark, com seções animadas em scroll, vídeo/canvas no Hero e carrosséis interativos.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS v4 (tokens via `@theme` em `app/globals.css`)
- **Animação:** GSAP, Motion (`motion/react`), Lenis (smooth scroll), IntersectionObserver custom (`useReveal`)
- **Carrosséis:** Embla Carousel (`embla-carousel-react`)
- **Ícones:** `react-icons`, `lucide-react`, `@hugeicons/react`
- **Componentes primitivos:** `@base-ui/react` (Avatar, Tabs, Accordion)
- **Partículas / efeitos:** `@tsparticles/*`

## Como rodar

Pré-requisito: [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando       | Descrição                                  |
| ------------- | ------------------------------------------- |
| `pnpm dev`    | Sobe o servidor de desenvolvimento (Turbopack) |
| `pnpm build`  | Build de produção                           |
| `pnpm start`  | Serve o build de produção                   |
| `pnpm lint`   | Roda o ESLint                               |

## Estrutura do projeto

```
app/
  layout.tsx          # Root layout: fontes, PreloaderProvider, SmoothScroll, Header, GlobalBackground
  page.tsx             # Composição das seções da landing (ordem de exibição)
  globals.css          # Design tokens (@theme), keyframes, utilities customizadas

components/
  layout/               # Casca da página (persistente entre seções)
    header.tsx           # Nav fixa; transparente sobre o Hero, glass após scroll
    preloader.tsx         # Tela de carregamento inicial
    preloader-context.tsx # Contexto que libera o conteúdo do Hero só após o preloader terminar
    smooth-scroll.tsx     # Wrapper do Lenis (smooth scrolling)

  sections/              # Uma seção por arquivo, na ordem em que aparecem em app/page.tsx
    hero/                  # Vídeo/canvas com scroll, typewriter, CTA, ticker de logos
    reel.tsx
    formacoes.tsx           # Carrossel de trilhas com scroll pinado (estilo Módulos Bônus)
    alem-do-codigo.tsx
    empresas.tsx
    projetos-reais.tsx
    tecnologias/             # Diagrama de stack + fileira estática de ícones
    depoimentos.tsx
    professores.tsx           # Carrossel de mentores (autoplay)
    certificado.tsx
    modulos-bonus.tsx          # Carrossel de módulos bônus com scroll pinado
    salarios.tsx
    garantia.tsx
    faq.tsx
    footer.tsx
    brand-outro.tsx

  shared/                # Blocos reutilizados entre seções (ex.: SectionHeading)
  ui/                    # Design system: primitivos (Button, Card, Badge, Tabs...) e
                          # componentes visuais maiores (Carousel, TiltedCard, GlobalBackground...)

hooks/
  use-reveal.ts             # Fade-in ao entrar no viewport via [data-reveal]
  use-prefers-reduced-motion.ts

lib/
  *.ts                    # Dados estáticos das seções (formações, mentores, depoimentos, empresas)
  utils.ts                # cn() (clsx + tailwind-merge)
```

## Seções (ordem em `app/page.tsx`)

1. **Hero** — vídeo/canvas com scroll (`use-scroll-video`), headline em efeito de máquina de escrever, CTA e ticker de logos de empresas.
2. **Reel** — texto de impacto complementar ao Hero.
3. **Formações** — carrossel reto e centralizado das trilhas; a seção é pinada (`lg:h-[320vh]` + `sticky`) e o scroll da página avança o carrossel, com navegação por steps sincronizada.
4. **Além do Código** — grid de benefícios (comunidade, mentoria, suporte etc.).
5. **Empresas** — mosaico de logos com efeito de flip aleatório.
6. **Projetos Reais** — showcase de projetos construídos por alunos.
7. **Tecnologias** — diagrama animado da stack + fileira estática de ícones de tecnologia.
8. **Depoimentos** — grade/mosaico/lista de depoimentos em abas.
9. **Professores** — carrossel autoplay dos mentores.
10. **Certificado** — certificado com efeito de parallax no scroll.
11. **Módulos Bônus** — carrossel de módulos extras, também pinado ao scroll.
12. **Salários** — narrativa de evolução salarial com gráfico SVG animado por scroll.
13. **Garantia** — card de garantia de 7 dias.
14. **FAQ** — perguntas frequentes em accordion.
15. **Footer** — CTA final, links e redes sociais.
16. **Brand Outro** — encerramento de marca.

## Design system

Tokens definidos em `app/globals.css` (`@theme`):

- **Cores de marca:** `--color-brand-green` (#39D353), `--color-brand-purple` (#721AE7), variações `-soft`
- **Superfícies:** `--color-ink`, `--color-ink-soft`, `--color-ink-deep`, `--color-surface-dark`
- **Fontes:** Manrope (`font-display`), Albert Sans (`font-body`), Urbanist (`font-accent`), Inter (`font-sans`)
- **Raios:** `--radius-card` (20px), `--radius-panel` (28px)
- **Containers:** `--container-mkt` (1600px, usado no Hero), `--container-wrap` (1180px, usado nas demais seções)
- **Easings:** `--ease-signature`, `--ease-pop`

Padrões reutilizados:

- **Reveal on scroll:** atributo `data-reveal` + classe `reveal` (opcionalmente `delay-75`/`delay-150`/...) dentro de um elemento com `ref` do hook `useReveal`. Respeita `prefers-reduced-motion`.
- **Carrosséis retos:** `components/ui/carousel.tsx` (wrapper sobre Embla), usado em Professores, Módulos Bônus e Formações.
- **Seções com scroll pinado:** Formações, Módulos Bônus e Salários travam o scroll da viewport (`lg:sticky` + seção alta) para sincronizar a rolagem da página com uma animação/carrossel interno; todas têm fallback estático para `prefers-reduced-motion`.

## Acessibilidade

A maioria das animações (reveal, ticker, scroll pinado, GSAP) tem fallback via `usePrefersReducedMotion`/media query `prefers-reduced-motion: reduce`, desativando movimento e exibindo o conteúdo final diretamente.
