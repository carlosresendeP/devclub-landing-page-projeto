# Design System — Asimov Academy (asimov.academy)

Extraído em 2026-07-30 via Firecrawl. Referência visual completa em `reference-fullpage.png`, logo vetorial em `logo.svg`, tokens brutos em `tokens.json`, versão interativa em `design-system.html`.

## 1. Paleta de cores

| Token | Cor | Uso |
|---|---|---|
| Base | `#050505` | Fundo geral (quase-preto puro) |
| Surface | `#0D0D1F` | Fundo dos cards (preto com leve tom azulado) |
| Surface alt | `#0F0F0F` | Fundo de botão secundário |
| Border sutil | `#282828` | Borda de botões/cards outline |
| **Brand teal** | `#14B8A6` / `#2DD4BF` | Cor de marca — CTA principal, glow, destaques de preço |
| Texto sobre dark | `#FAFAFA` | Texto principal |

**Sistema de cores por categoria** (usado nos cards de formações/trilhas — cada card recebe um glow radial de uma cor diferente):

`laranja #F97316` · `azul #3B82F6` · `rosa #F43F5E` · `vermelho #EF4444` · `verde #22C55E` · `sky #0EA5E9` · `roxo #A855F7` · `teal #14B8A6`

Diferente do SharpLink (1 acento) e do ARKKHE (1 acento quente), o Asimov usa um **acento de marca fixo (teal)** para CTAs/preço, mas libera uma **paleta multicolor codificada por categoria** para os cards de conteúdo — cada trilha/formação tem sua própria cor de identidade visual, o que ajuda a escanear rapidamente uma grade de +8 cards.

## 2. Tipografia

- **Família única: `Inter`**, usada tanto em headings quanto em corpo de texto — hierarquia construída por peso e tamanho, não por troca de fonte.
- `H1 ≈ 52px`, `H2 ≈ 40px`, `body ≈ 18px` — corpo de texto maior que o padrão de sites institucionais (13–15px em SharpLink/ARKKHE), priorizando legibilidade típica de plataforma educacional (muito texto de apoio por seção).
- Sans-serif geométrica neutra — reforça o tom "produto SaaS/plataforma" em vez de "editorial/agência".

## 3. Espaçamento e forma

- `baseUnit`: 4px.
- `borderRadius` base (cards): **18px** — cantos suavemente arredondados, mais "software" que "blueprint".
- Botões: **pill total** (`border-radius: 9999px`), igual ao padrão ARKKHE, mas aqui somado a **glow externo colorido** (ver componentes).
- Cards com borda de 1px quase invisível (`rgba(255,255,255,.06)`-like) + fundo levemente mais claro que o base — efeito "glass sutil" sobre fundo preto.

## 4. Componentes

**Botão primário**
- fundo quase-preto `#07070E`, texto `#FAFAFA`, pill total.
- `box-shadow`: glow externo em teal (`rgba(20,184,166,.35)`, blur 24px) + highlight interno branco no topo (`inset 0 1px 0 rgba(255,255,255,.35)`) — cria sensação de botão "iluminado por dentro", assinatura visual forte da marca.

**Botão secundário**
- fundo `#0F0F0F`, borda `#282828`, texto branco, pill total, sem glow — visualmente mais discreto/neutro.

**Card de categoria**
- fundo `#0D0D1F`, radius 18px, glow radial atrás do ícone na cor daquela categoria (opacidade baixa, blur alto) — mesmo princípio dos "blobs" do ARKKHE, mas aplicado por card individual em vez de seção inteira, e com paleta variável.

**Card de preço**
- estrutura similar ao card de categoria, com borda/realce em teal no plano em destaque e lista de benefícios com ícone de check teal.

## 5. Motivo visual do hero

Fundo quase-preto com **campo de partículas** (pontos pequenos e esparsos, como estrelas) e uma **formação triangular luminosa** no centro — como uma constelação ou "árvore de pontos conectados" brilhando em azul/teal sobre o headline. É o elemento decorativo mais distintivo do site: substitui fotografia/ilustração por um efeito generativo abstrato, reforçando a identidade "IA/dados".

## 6. Padrão de layout observado (via screenshot)

1. **Header**: logo à esquerda, nav central (Formações / Trilhas / Cursos / Projetos / Conteúdo grátis), CTA teal "Assinar agora" à direita.
2. **Hero**: fundo de partículas + constelação triangular, headline curto e direto, dois CTAs (pill preto com glow teal + pill outline "Fale com a Asimov"), badge pequena de prova social (indicador "ao vivo"/contador de alunos online).
3. **Grade de Formações e Trilhas**: 3 colunas de cards, cada um com ícone + glow de cor própria por categoria, título curto + descrição de uma linha.
4. **"Você terá acesso..." (features em lista alternada)**: item de texto à esquerda + mockup de produto (screenshot de UI) à direita, alternando lado a cada bloco — 6 blocos ao todo (plataforma, projetos, cursos organizados, e-books, certificado, comunidade).
5. **Especialistas/instrutores**: grade de avatares circulares com nome + cargo abaixo.
6. **"Além das aulas, você também recebe"**: 4 mini-cards de benefício em grid, ícone + título + descrição curta.
7. **Planos/preços**: 2 cards lado a lado (anual vs. mensal), plano recomendado com destaque teal, lista de benefícios com check.
8. **Garantia**: card único de "garantia incondicional" com ícone de escudo.
9. **FAQ**: accordion simples de perguntas frequentes.
10. **Footer**: logo + colunas de links (plataforma, redes, suporte), ícones sociais.

## 7. Direção de arte geral

- **Dark mode "produto SaaS"**: preto quase puro como base, superfícies com leve variação de luminosidade (não de matiz) para criar profundidade — cards não têm sombra tradicional, têm *glow*.
- **Cor como sistema de categorização**, não só decoração: cada trilha/formação carrega uma cor própria de forma consistente, funcionando quase como um "sistema de tags visuais".
- **Glow em vez de sombra**: tanto botões quanto cards usam halos coloridos desfocados no lugar de `box-shadow` neutro — cria sensação de "energia"/tecnologia, coerente com o tema IA.
- Efeito de partículas no hero é o único elemento "generativo"/animado de destaque — o resto da página é estático e direto, focado em conversão (muitos CTAs, prova social, FAQ, garantia).

## Arquivos nesta pasta

- `tokens.json` — tokens estruturados (cores, tipografia, espaçamento, componentes).
- `design-system.html` — style guide interativo (paleta, tipografia, componentes com glow, cards de categoria, hero com partículas animadas).
- `logo.svg` — logotipo extraído do site (vetor original).
- `favicon.png` — favicon do site.
- `reference-fullpage.png` — screenshot completo da página inicial para referência visual.
