# Design System — ARKKHE (arkkhe.com)

Extraído em 2026-07-30 via Firecrawl. Referência visual completa em `reference-fullpage.png`, logotipo em `logo.webp`, tokens brutos em `tokens.json`, versão interativa em `design-system.html`.

## 1. Paleta de cores

| Token | Cor | Uso |
|---|---|---|
| Primary text | `#101820` | Títulos, texto principal (quase preto, tom navy) |
| Secondary text | `#5B6871` | Texto de apoio, parágrafos secundários |
| Muted text | `#8A8F8D` | Trechos de destaque discreto dentro de parágrafos |
| Footer label | `#334049` | Labels de rodapé (NAVIGATION, SERVICES) |
| Black | `#000000` | Seções full-black, botão primário |
| Near-black section | `#0A0A0A` | Fundo da seção "diferenciais/portfólio" |
| White | `#FFFFFF` | Fundo padrão das seções claras |
| Accent orange | `#FF8400` / `#FF6B1A` | Cor de destaque única — dots, links, blobs de fundo, pill ativa |

Diferente de paletas monocromáticas frias, o ARKKHE usa uma base **quase-preto + branco** com **um único acento quente (laranja)**, aplicado com moderação: pontos indicadores, um label ("Connect with us!"), e grandes *blobs* radiais desfocados usados como textura de fundo entre seções.

## 2. Tipografia

- **Display — `Orlean`**: reservada para o headline de abertura do hero (alto impacto, poucas ocorrências, ~59px).
- **Heading/UI — `AventaLight`**: domina títulos de seção, navegação, labels e microcopy, majoritariamente em peso 300 (light), com ênfases pontuais em 600 (semibold) para reforçar palavras-chave dentro da mesma frase.
- **Heading medium — `Aventa`** (peso 450): variante intermediária usada para destacar uma palavra específica dentro de um título (ex.: uma palavra em peso mais forte no meio de um H2 leve).
- **Body — `Satoshi`**: stack de corpo/fallback padrão do sistema.
- Sem serifa em nenhum ponto — grotescas geométricas, reforçando o caráter "arquitetônico" da marca.

## 3. Espaçamento e forma

- `baseUnit`: 4px (grid Tailwind padrão).
- `borderRadius` base de componentes: **16px** (cards, blocos).
- Botões: **totalmente arredondados (pill)** — 32px no primário, 26px no secundário outline. Isso contrasta com sistemas de cantos retos: aqui a forma pill reforça um tom mais acolhedor/humano sobre a base geométrica angular do logotipo.
- Sem sombra (`shadow: none`) nos componentes — igual ao padrão observado em outros sites do mesmo gênero (profundidade via contraste de cor, não elevação).

## 4. Componentes

**Botão primário**
- fundo `#000000`, texto branco, pill (`border-radius: 32px`), sem sombra.

**Botão secundário**
- fundo transparente, borda `#000000`, texto `#101820`, pill outline (`border-radius: 26px`).

**Input**
- fundo transparente, texto `#101820`, sem borda visível, cantos retos (0px) — contraste proposital com os botões arredondados.

## 5. Logotipo

Wordmark geométrico monolinha: o "A" é um triângulo puro, o "RK" se funde num duplo-chevron (`<<`) que também aparece como motivo decorativo, "HE" em traços retos. Identidade angular e "arquitetônica" — conectada ao nome (arkhé = origem/princípio, em grego). Usado em preto sobre fundo claro no header e em branco (gigante, full-bleed) como assinatura do rodapé.

## 6. Motion & interação (identificado no HTML/CSS reais)

- **Smooth scroll**: `Lenis` (`<html class="lenis" style="scroll-behavior:smooth">`).
- **Scroll reveal**: `GSAP ScrollTrigger` — elementos nascem com `opacity:0` e `transform: translateY(50px)` e animam para `opacity:1` / `translateY(0)` ao entrar no viewport (classes `gs-title`, `gs-desc`).
- **Blobs decorativos**: manchas radiais laranja desfocadas (blur alto) posicionadas atrás do conteúdo, usadas como elemento de transição visual entre seções claras — não são fotografia nem ilustração, são puramente gradiente.
- **Scrollytelling**: a seção "Built with Intent / Made to Be Felt" repete a mesma composição 3 vezes em sequência, sugerindo uma timeline de scroll pinado (GSAP) trocando pequenos detalhes sobre o mesmo fundo — técnica de storytelling progressivo.
- **Stat cards**: números grandes (percentuais/métricas) em destaque laranja sobre fundo quase-preto — padrão típico de contagem animada (count-up) ao entrar em viewport.

## 7. Padrão de layout observado (via screenshot)

1. **Header**: logo à esquerda, nav central, CTA pill "LET'S TALK" + toggle de tema à direita.
2. **Hero (claro, muito whitespace)**: headline de duas linhas em `Orlean`, parágrafo de apoio à direita, pills de serviço abaixo, CTA pill preta com seta. Um blob laranja grande fecha a seção como transição.
3. **Seção "Built with Intent" (scrollytelling)**: título + subtítulo, grade de 4 pills com ícone (serviços), repetida com leve variação sobre o mesmo fundo de blob.
4. **Seção "Why are we so different?" (fundo quase-preto)**: cards de estatística com número grande em laranja + label, seguidos de CTA "View Projects".
5. **Portfólio (fundo preto)**: filtro de categorias em pills (uma ativa em laranja), grade 2 colunas de cases com hover.
6. **Contato (fundo bege/cream)**: formulário com pills de tipo de serviço e botão "SEND" pill preto.
7. **Pré-footer (dark strip)**: chamada curta + e-mail de contato.
8. **Footer**: logotipo gigante em branco, full-bleed, como assinatura final — mesmo princípio de fechamento visual usado em outros sites do gênero (ver `sharplink-design-system`), mas aqui com o wordmark geométrico real da marca em vez de outline fino.

## 8. Direção de arte geral

- Base **minimalista quase-preto/branco** pontuada por **um único acento laranja quente** — evita a paleta azul/fria comum em produtos "tech/institucional", buscando um tom mais humano e criativo (agência de design, não fintech).
- **Botões pill + cards com radius 16px** vs. **inputs de canto reto** — mistura deliberada de formas suaves (humano/acolhedor) com estrutura reta (precisão/agência técnica).
- **Blobs radiais desfocados** como única "ilustração" de fundo — reforça leveza e movimento sem depender de fotografia.
- Tipografia com 3 papéis bem definidos (display de impacto, heading utilitário, corpo) cria hierarquia clara mesmo usando majoritariamente um peso leve (300).
- Motion como parte central da identidade: nada aparece estático — todo bloco de conteúdo "nasce" com fade + slide-up ao entrar em cena.

## Arquivos nesta pasta

- `tokens.json` — tokens estruturados (cores, tipografia, espaçamento, componentes, motion).
- `design-system.html` — style guide interativo (paleta copiável, especimes tipográficos, componentes, motion ao vivo).
- `logo.webp` — logotipo original extraído do site (com transparência).
- `favicon.png` — favicon do site.
- `reference-fullpage.png` — screenshot completo da página inicial para referência visual.
