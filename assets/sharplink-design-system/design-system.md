# Design System — SharpLink (sharplink.com)

Extraído em 2026-07-30 via Firecrawl. Referência visual completa em `reference-fullpage.png`, logo vetorial em `logo.svg`, tokens brutos em `tokens.json`.

## 1. Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| Primary / Accent | `#0E76FF` | Links, destaques, gráficos, elementos interativos |
| Black | `#000000` | Fundo de seções dark, texto sobre fundo claro, botão primário |
| Background light | `#F7F7F5` | Fundo das seções claras (off-white, não branco puro) |
| Background light alt | `#EEEEEE` | Variação de fundo claro (cards, blocos) |
| Text on dark | `#F3F3F3` | Texto sobre fundos escuros/pretos (quase branco, não puro) |
| Button secondary bg | `#DEDEDD` | Fundo de botão/CTA secundário |

Paleta enxuta e de alto contraste: essencialmente **preto + branco-gelo + um único azul de destaque**. Não há gradiente de cores múltiplas — a sensação de "tech/institucional" vem de gradientes de luminosidade (preto → azul → branco) aplicados em backgrounds, não de variação de matiz.

## 2. Tipografia

- **Heading:** `Archivo Narrow` — grotesca condensada, usada em títulos grandes (H1 ~32px+), reforça o tom técnico/editorial.
- **Body:** `Archivo` — grotesca padrão (não condensada), usada em parágrafos, labels e UI (~13px).
- Labels/eyebrows (ex.: pequenos textos acima dos títulos de seção) aparecem em **uppercase com letter-spacing aberto**.
- Sem serifa em nenhum ponto do site — 100% sans-serif, reforçando a identidade "fintech/institucional".

## 3. Espaçamento e forma

- `baseUnit`: 4px (grid de espaçamento múltiplo de 4).
- `borderRadius`: **0px em todos os componentes** (inputs, botões, cards) — cantos retos, estética "engenharia/blueprint", sem suavização.
- Sem sombras (`shadow: none`) nos componentes principais — a profundidade é criada por contraste de fundo e gradientes, não por drop-shadow.

## 4. Componentes

**Botão primário**
- fundo `#000000`, texto `#F3F3F3`, cantos retos, sem sombra.

**Botão secundário**
- fundo `#DEDEDD`, texto `#000000`, cantos retos, sem sombra.

**Input**
- fundo transparente, texto `#F3F3F3`, sem borda visível, cantos retos.

## 5. Padrão de layout observado (via screenshot)

1. **Header fixo/blur**: logo à esquerda, nav central-direita, fundo com `backdrop-filter: blur` sobre o hero.
2. **Hero (dark)**: título grande em duas linhas, subtítulo curto, dois CTAs (primário preto + secundário outline), ilustração 3D técnica (objeto tipo "reator/cilindro de vidro e metal") sobreposta com efeito de profundidade/parallax.
3. **Seção de métricas (light)**: fundo off-white, cards com gráfico de linha e mini-KPIs em grid assimétrico.
4. **Seção de pilares (dark→light gradiente vertical)**: lista de diferenciais em coluna única, alternando label + descrição curta, com a mesma ilustração 3D reaparecendo como elemento de continuidade visual.
5. **Seção de CTA full-bleed (black)**: título curto centrado-esquerda, dois CTAs, fundo preto puro para criar pausa visual antes da próxima seção.
6. **Seção institucional (gradiente azul→branco)**: bloco de texto grande sobre imagem de fundo com overlay gradiente, reforçando a narrativa "categoria/mercado".
7. **Latest News / Blog**: card único em destaque, fundo escuro, thumbnail + tag de categoria.
8. **FAQ**: lista de accordion simples, sem ícones decorativos, apenas +/− .
9. **Footer (dark→black gradiente)**: logo wordmark gigante como fechamento de página (assinatura visual final), links organizados em colunas.

## 6. Direção de arte geral

- Estética **"engenharia/blueprint institucional"**: ilustrações 3D técnicas (renders tipo produto industrial/vidro-metal) em vez de fotografia ou ícones flat.
- Uso extensivo de **gradientes de luminosidade** (preto ⇄ azul ⇄ branco) para criar transição entre seções, em vez de divisores/bordas.
- Grid tipográfico rígido, zero border-radius, zero sombra → transmite precisão/solidez (adequado a produto financeiro institucional).
- Paleta minimalista de 1 cor de destaque + neutros reforça foco e seriedade.

## Arquivos nesta pasta

- `tokens.json` — tokens estruturados (cores, tipografia, espaçamento, componentes).
- `logo.svg` — logotipo extraído do site (vetor original).
- `reference-fullpage.png` — screenshot completo da página inicial para referência visual.
