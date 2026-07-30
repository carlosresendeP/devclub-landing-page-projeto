# DevClub — Prompt profissional para desenvolvimento da Landing Page

> Estrutura baseada no modelo **P.R.O.M.P.T.**  
> **P**apel · **R**esultado · **O**bjetivo e contexto · **M**étodo · **P**arâmetros · **T**estes

---

# P — PAPEL

Atue como um **Senior Front-end Engineer, Creative Developer e UI Motion Designer**, especialista em:

- Next.js com App Router;
- React;
- TypeScript;
- Tailwind CSS;
- GSAP e ScrollTrigger;
- Lenis Smooth Scroll;
- experiências orientadas por scroll;
- vídeos controlados pelo progresso da página;
- acessibilidade;
- responsividade;
- Core Web Vitals;
- interfaces premium para educação e tecnologia.

Sua responsabilidade é desenvolver a landing page oficial do **DevClub**, seguindo rigorosamente o Design System fornecido no projeto.

Você não deve apenas “se inspirar” no Design System. Deve tratá-lo como **fonte visual obrigatória e contrato de implementação**.

---

# R — RESULTADO ESPERADO

Desenvolva uma landing page completa, cinematográfica, responsiva e pronta para produção para o DevClub.

A página deve:

- possuir menu superior fixo;
- conter exatamente **16 seções**;
- usar vídeo controlado pelo scroll no hero;
- utilizar obrigatoriamente o componente existente `reel.tsx` na segunda seção;
- apresentar formações, tecnologias, benefícios, plataforma, projetos, comunidade, professores, bônus, reconhecimento, salários, garantia e FAQ;
- encerrar com footer e uma seção final independente com a marca DevClub em grande escala;
- usar os arquivos existentes em `/public`;
- usar o arquivo de Design System existente no projeto como referência absoluta;
- transmitir autoridade, clareza, evolução e pertencimento;
- converter visitantes em alunos.

A landing não deve parecer:

- um template genérico de SaaS;
- uma landing de infoproduto improvisada;
- uma cópia de NovaAI, Marketeam, Asimov ou qualquer outra referência;
- um conjunto repetitivo de cards;
- uma página escura sem variação de ritmo;
- uma demonstração técnica desconectada do objetivo comercial.

---

# O — OBJETIVO E CONTEXTO

## Objetivo principal

Levar o visitante da sensação de:

> “Estou perdido, sobrecarregado e não sei o que estudar”

para:

> “Agora entendi o caminho, o que vou aprender, como vou praticar e onde posso chegar.”

A narrativa da página deve seguir esta progressão:

1. falta de direção;
2. descoberta do DevClub;
3. visão das formações;
4. domínio das principais tecnologias;
5. acompanhamento além do código;
6. acesso à plataforma;
7. prática com projetos reais;
8. prova social;
9. autoridade dos professores;
10. módulos extras;
11. reconhecimento;
12. perspectiva de carreira;
13. segurança pela garantia;
14. resolução de dúvidas;
15. decisão final;
16. memória de marca.

## Público

- pessoas iniciantes em tecnologia;
- pessoas migrando de carreira;
- alunos travados em cursos e tutoriais;
- desenvolvedores que desejam evoluir;
- profissionais interessados em programação, IA, automação e dados;
- pessoas que precisam de direção, acompanhamento e prática.

## Posicionamento

O DevClub não vende apenas aulas.

O DevClub entrega:

- direção;
- trilhas organizadas;
- suporte humano;
- mentoria;
- comunidade;
- prática;
- empregabilidade;
- desenvolvimento profissional.

## Mensagem central

> Pare de estudar sem direção. Aprenda tecnologia com uma trilha completa, projetos reais e acompanhamento para evoluir do zero ao mercado.

---

# DESIGN SYSTEM OBRIGATÓRIO

Use o arquivo `designer_system.html` existente no projeto como fonte visual principal.

Antes de criar qualquer seção:

1. abra e analise completamente o arquivo;
2. identifique seus tokens;
3. converta os tokens para CSS Variables e Tailwind;
4. reaproveite os padrões de botão, card, tipografia, espaçamento e motion;
5. não crie outra identidade visual paralela;
6. não altere cores ou fontes por preferência pessoal;
7. não use componentes prontos que conflitem com o sistema.

## Identidade do sistema

Nome interno:

`DevClub — Signal Design System`

Conceito:

- precisão editorial;
- energia pill/glow;
- dark tech;
- duotone verde e roxo;
- contraste entre superfícies escuras e claras;
- movimento sutil;
- tecnologia viva;
- forma definida pela função.

---

## Cores oficiais

Utilize exatamente estes tokens:

```css
:root {
  --green: #39D353;
  --green-soft: #7FE896;

  --purple: #721AE7;
  --purple-soft: #A66BF0;

  --gray: #AAAEB3;

  --white: #FFFFFF;

  --dark: #1F1E20;
  --dark-2: #141315;

  --bg-light: #F7F7F8;
}
```

### Função das cores

#### Verde `#39D353`

Usar para:

- CTA primário;
- progresso;
- sucesso;
- sinais de ativação;
- indicadores positivos;
- pontos luminosos;
- linhas de trajetória;
- foco visual principal.

#### Verde suave `#7FE896`

Usar para:

- hover de botão;
- textos sobre superfícies escuras;
- pequenos glows;
- estados positivos secundários.

#### Roxo `#721AE7`

Usar para:

- destaque secundário;
- categorias;
- estados ativos;
- bordas de CTA secundário;
- elementos criativos;
- contraste com o verde.

#### Roxo suave `#A66BF0`

Usar para:

- glows controlados;
- labels;
- gráficos;
- fundos decorativos;
- gradientes discretos.

#### Escuro base `#1F1E20`

Usar em:

- hero;
- footer;
- seções de alta intensidade;
- painéis escuros.

#### Escuro profundo `#141315`

Usar em:

- áreas mais profundas;
- seções de formações;
- transições;
- blocos de contraste.

#### Cinza claro `#F7F7F8`

Usar em:

- seções claras;
- garantia;
- plataforma;
- FAQ;
- áreas editoriais.

### Regras de cor

- não usar azul como cor dominante;
- não usar arco-íris de categorias;
- as categorias devem alternar apenas entre verde e roxo;
- evitar grandes gradientes sem função;
- gradientes permitidos:

```css
linear-gradient(90deg, #39D353, #721AE7)
linear-gradient(90deg, #39D353, #A66BF0)
```

- gradientes devem ser usados prioritariamente em:
  - texto de destaque;
  - números;
  - indicadores;
  - linhas;
  - pequenos elementos decorativos.

---

## Tipografia oficial

Use:

```css
--font-display: "Manrope", sans-serif;
--font-body: "Albert Sans", sans-serif;
```

Carregue:

- Manrope: 400, 500, 600, 700 e 800;
- Albert Sans: 400, 500, 600, 700 e 800.

### Manrope

Usar para:

- logotipo;
- H1;
- H2;
- títulos de cards;
- números;
- estatísticas;
- labels;
- eyebrows;
- palavras de destaque;
- wordmark final.

### Albert Sans

Usar para:

- corpo de texto;
- descrição;
- botões;
- inputs;
- navegação;
- FAQ;
- legenda;
- componentes de UI.

### Escala sugerida

```css
.hero-title {
  font-family: "Manrope";
  font-weight: 800;
  font-size: clamp(2.4rem, 6vw, 5.5rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.section-title {
  font-family: "Manrope";
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.body {
  font-family: "Albert Sans";
  font-size: clamp(0.95rem, 1.2vw, 1.125rem);
  line-height: 1.65;
}

.eyebrow {
  font-family: "Manrope";
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}
```

Não substituir as fontes por Inter, Poppins, Montserrat, Geist ou fontes aleatórias.

---

## Espaçamento

Utilize grid base de 4px:

```txt
4px   — xs
8px   — sm
16px  — md
20px  — card
40px  — xl
64px  — 2xl
```

### Containers

```css
max-width: 1180px;
padding-inline: 32px;
```

Em telas grandes, o palco do hero e áreas de mídia podem chegar a `1440px`, mas o conteúdo textual principal deve preservar a largura editorial.

Mobile:

```css
padding-inline: 20px;
```

### Padding vertical

Desktop:

```css
padding-block: 120px;
```

Mobile:

```css
padding-block: 70px;
```

A experiência cinematográfica pode usar seções maiores quando necessário, mas o sistema de espaçamento continua baseado nos mesmos múltiplos.

---

## Radius

O sistema usa radius por função:

```css
--radius-input: 0px;
--radius-card: 20px;
--radius-pill: 9999px;
```

Aplicação:

- inputs: retos;
- cards: `20px`;
- painéis especiais: até `28px`;
- botões: pill;
- badges: pill;
- imagens dentro de cards: `12px` a `20px`;
- não aplicar `rounded-3xl` indiscriminadamente.

---

## Botões

### Botão primário

```css
background: #39D353;
color: #1F1E20;
border-radius: 9999px;
box-shadow: 0 6px 26px rgba(57, 211, 83, 0.35);
```

Hover:

```css
background: #7FE896;
transform: translateY(-2px);
box-shadow: 0 10px 34px rgba(57, 211, 83, 0.5);
```

### Botão secundário

```css
background: transparent;
color: #FFFFFF;
border: 1px solid #721AE7;
border-radius: 9999px;
```

Hover:

```css
background: #721AE7;
box-shadow: 0 8px 28px rgba(114, 26, 231, 0.4);
```

### Botão ghost

Em superfície clara:

```css
background: transparent;
color: #1F1E20;
border: 1px solid rgba(31, 30, 32, 0.2);
```

### Ícone do botão

Use seta diagonal ou `ArrowUpRight`.

No hover:

```css
transform: translate(3px, -3px);
```

Não utilizar botões quadrados genéricos para CTAs principais.

---

## Eyebrow

Todo eyebrow deve seguir:

- ponto verde;
- glow discreto;
- texto Manrope;
- uppercase;
- tracking `0.14em`;
- roxo em superfícies claras;
- verde suave ou roxo suave em superfícies escuras.

Estrutura:

```tsx
<div className="eyebrow">
  <span className="eyebrow-dot" />
  <span>Texto da seção</span>
</div>
```

---

## Cards

### Card claro

```css
background: #FFFFFF;
border: 1px solid rgba(31, 30, 32, 0.1);
border-radius: 20px;
```

### Card escuro

```css
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 20px;
```

Hover:

```css
transform: translateY(-4px);
border-color: rgba(255, 255, 255, 0.2);
```

### Glow de categoria

- verde ou roxo;
- blur próximo de `42px`;
- opacidade entre `0.2` e `0.35`;
- nunca esconder conteúdo;
- nunca preencher a seção inteira.

---

## Header

Use o padrão:

```css
position: fixed;
height: 76px;
background: rgba(31, 30, 32, 0.55);
backdrop-filter: blur(14px);
border-bottom: 1px solid rgba(255, 255, 255, 0.08);
```

### Conteúdo

**Esquerda**
- Logo DevClub.

**Centro**
- Formações;
- Faculdade.

**Direita**
- Área do Aluno;
- Quero ser aluno.

### Navegação

- Albert Sans;
- `12px`;
- peso `600`;
- uppercase;
- tracking `0.04em`;
- branco com opacidade;
- hover verde.

### Mobile

- esconder navegação desktop;
- menu acessível;
- drawer escuro;
- CTA visível;
- fechar com Escape;
- bloquear scroll do body quando aberto.

---

## Motion

Ease oficial:

```css
cubic-bezier(0.16, 1, 0.3, 1)
```

### Reveal padrão

Estado inicial:

```css
opacity: 0;
transform: translateY(30px);
```

Estado visível:

```css
opacity: 1;
transform: translateY(0);
```

Transição:

```css
opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
```

Delays:

```txt
80ms
160ms
240ms
320ms
```

### Linguagem de motion

O sistema possui três famílias:

1. partículas e constelações;
2. botão com glow;
3. reveal e gráficos desenhados.

### Uso das partículas

- permitidas no hero;
- podem reaparecer discretamente no brand outro;
- não repetir partículas em todas as seções;
- no hero com vídeo por scroll, partículas devem ser apenas uma camada sutil;
- reduzir ou remover partículas durante frames mais detalhados do vídeo.

### Motion reduzido

Em `prefers-reduced-motion`:

- remover smooth scrolling;
- remover scrub;
- usar poster estático;
- remover parallax;
- manter apenas fades curtos;
- conteúdo continua acessível.

---

# M — MÉTODO DE EXECUÇÃO

## Stack

Use:

- Next.js com App Router;
- React;
- TypeScript;
- Tailwind CSS;
- GSAP;
- ScrollTrigger;
- Lenis;
- Lucide React;
- `next/image`;
- `next/font/google`.

Não adicionar Framer Motion caso GSAP já seja usado.

## Configuração de fonte

Utilize `next/font/google`:

```tsx
import { Manrope, Albert_Sans } from "next/font/google";
```

Exponha variáveis:

```tsx
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});
```

## Tailwind

Estender o tema com os tokens exatos:

```ts
colors: {
  devclub: {
    green: "#39D353",
    greenSoft: "#7FE896",
    purple: "#721AE7",
    purpleSoft: "#A66BF0",
    gray: "#AAAEB3",
    dark: "#1F1E20",
    darkDeep: "#141315",
    light: "#F7F7F8",
    white: "#FFFFFF",
  },
}
```

## Arquitetura sugerida

```txt
app/
  page.tsx
  globals.css

components/
  layout/
    devclub-header.tsx

  sections/
    hero-scroll-section.tsx
    reel-section.tsx
    formations-section.tsx
    technologies-section.tsx
    beyond-code-section.tsx
    platform-section.tsx
    projects-section.tsx
    testimonials-section.tsx
    instructors-section.tsx
    bonus-modules-section.tsx
    mec-section.tsx
    salaries-section.tsx
    guarantee-section.tsx
    faq-section.tsx
    footer-section.tsx
    brand-outro-section.tsx

  shared/
    section-heading.tsx
    eyebrow.tsx
    devclub-button.tsx
    reveal.tsx
    media-frame.tsx
    accessible-accordion.tsx
    logo-ticker.tsx

  reel.tsx

hooks/
  use-reduced-motion.ts
  use-scroll-video.ts
  use-media-query.ts

lib/
  gsap.ts
  assets.ts
  content.ts
```

Preserve a estrutura existente caso o projeto já tenha organização consistente.

## Assets

Antes de implementar:

1. ler todo o conteúdo de `/public`;
2. criar um inventário dos assets;
3. relacionar cada arquivo com uma seção;
4. usar imagens reais do DevClub;
5. não inventar nomes de arquivos;
6. não usar imagens remotas enquanto houver um asset local equivalente;
7. usar placeholders identificados apenas quando o asset não existir.

---

# ESTRUTURA EXATA DA LANDING PAGE

O menu superior não conta como seção.

---

## SEÇÃO 01 — HERO COM VÍDEO CONTROLADO PELO SCROLL

### Objetivo

Mostrar a transformação de uma pessoa:

- sem direção;
- sobrecarregada;
- cercada por conteúdos desconectados;

para uma pessoa:

- com trilha;
- com prática;
- com apoio;
- com direção profissional.

### Direção visual

O hero deve seguir o Design System:

- fundo `#1F1E20`;
- Manrope 800 no H1;
- Albert Sans no texto;
- CTA verde;
- CTA secundário com borda roxa;
- badges pill;
- verde e roxo em duotone;
- partículas discretas;
- glow controlado;
- header translúcido;
- bordas de baixa opacidade.

Não criar um hero inteiramente centralizado e vazio.

Use composição editorial:

- conteúdo textual à esquerda;
- notebook ou objeto visual principal à direita;
- prova social e empresas na parte inferior;
- muito espaço negativo;
- hierarquia clara.

### Copy

**Trust badge**

`+25 mil alunos já passaram por aqui`

**Eyebrow**

`FORMAÇÃO COMPLETA EM TECNOLOGIA`

**H1**

`Pare de estudar sem direção. Aprenda tecnologia do zero ao mercado.`

Aplicar gradiente apenas em:

`do zero ao mercado`

**Subtítulo**

`Formações completas em programação, inteligência artificial, automações e dados, com suporte humano, projetos reais e uma comunidade pronta para ajudar você a evoluir.`

**CTAs**

- `Quero ser aluno`
- `Conhecer as formações`

**Prova social**

`Alunos nas maiores empresas do Brasil e do mundo`

Usar logos existentes em `/public`.

### Estrutura técnica

```txt
hero-scroll-wrapper: 240svh a 300svh
  hero-stage: sticky, top 0, 100svh
    poster
    video
    canvas
    overlays
    particles
    copy
    notebook
    trust proof
    companies ticker
```

### Scroll do vídeo

O vídeo deve ser controlado somente pelo progresso da seção Hero.

Não mapear o vídeo pelo scroll total da página.

Cálculo:

```ts
const start = hero.offsetTop;
const end = start + hero.offsetHeight - window.innerHeight;
const progress = clamp((window.scrollY - start) / (end - start), 0, 1);
```

Suavização:

```ts
smoothed += (target - smoothed) * 0.12;
```

### Camadas

1. poster;
2. vídeo;
3. canvas;
4. overlay dark;
5. overlay verde/roxo;
6. partículas;
7. conteúdo HTML.

### Atos do vídeo

#### 0%–30% — Sobrecarga

- notebook completo;
- janelas sobrepostas;
- projetos incompletos;
- elementos desconectados;
- iluminação escura;
- roxo mais presente.

Copy visível:

- H1;
- subtítulo;
- CTAs.

#### 30%–68% — Direção

- câmera aproxima;
- elementos se reorganizam;
- linhas verdes e roxas formam trilhas;
- programação, IA/automações e dados aparecem visualmente;
- copy principal reduz opacidade.

Frases HTML:

- `Aprenda com direção`
- `Construa projetos reais`
- `Evolua com acompanhamento`

#### 68%–100% — Ecossistema

- interface organizada;
- módulos;
- projetos;
- comunidade;
- mentoria;
- progresso;
- tela se estabiliza;
- notebook fica frontal.

O frame final deve encaixar visualmente no notebook da seção `reel.tsx`.

### Performance

- poster imediato;
- vídeo local em MP4 e WebM;
- `preload="auto"` apenas no hero;
- cache de frames opcional;
- canvas com DPR máximo 2;
- fallback por `currentTime`;
- pausar processamento fora do viewport;
- liberar frames ao desmontar;
- reduced motion usa poster.

---

## SEÇÃO 02 — REEL NO NOTEBOOK

Utilize obrigatoriamente:

```tsx
import Reel from "@/components/reel";
```

Não recrie o componente.

Não copie o seu conteúdo para outro arquivo.

### Copy

**Eyebrow**

`POR DENTRO DO DEVCLUB`

**Título**

`Não é só assistir aula. É entrar em um ecossistema feito para você evoluir.`

**Texto**

`Veja como formações, prática, professores, suporte, comunidade e oportunidades se conectam.`

### Layout

- superfície clara ou dark profunda conforme melhor transição do hero;
- mockup central;
- card ou frame com radius `20px`;
- glow verde/roxo atrás do notebook;
- controles acessíveis;
- sem áudio automático;
- pausar fora do viewport.

---

## SEÇÃO 03 — FORMAÇÕES COMPLETAS

**Eyebrow**

`FORMAÇÕES E TRILHAS`

**Título**

`Formações completas para aprender do zero ao avançado`

**Descrição**

`Escolha por onde começar e avance por uma trilha organizada, prática e conectada ao mercado.`

### Formações

1. Programação Front End
2. Programação Back End
3. Programação Full Stack
4. Programação Mobile
5. React
6. Node
7. JavaScript Completo
8. HTML5
9. CSS3
10. Gestor de IA
11. IA e Automações
12. Claude & Claude Code
13. Trilha N8N
14. Análise de Dados
15. Power BI

### Layout

Desktop:

- fundo `#141315`;
- seção pinned;
- scroll vertical move uma linha horizontal;
- cards escuros;
- radius `20px`;
- glows alternando verde e roxo;
- card ativo aumenta levemente;
- indicador de progresso.

Mobile:

- scroll horizontal nativo;
- `scroll-snap`;
- não prender o scroll vertical;
- uma formação visível por vez.

### Card

- tag;
- nome;
- imagem;
- resumo;
- tecnologias;
- nível;
- CTA.

Não usar 15 cards idênticos em grid tradicional.

---

## SEÇÃO 04 — TECNOLOGIAS

**Eyebrow**

`TECNOLOGIAS DO MERCADO`

**Título**

`Aprenda as principais tecnologias do mercado, do zero e de forma didática.`

### Layout

- superfície clara `#F7F7F8`;
- painel principal;
- lista interativa;
- tecnologia ativa altera imagem ou projeto;
- nomes em Manrope;
- descrições em Albert Sans;
- verde indica ativo;
- roxo indica categoria;
- usar logos reais.

Não criar nuvem aleatória de logos.

---

## SEÇÃO 05 — ALÉM DO CÓDIGO

**Eyebrow**

`VOCÊ NÃO EVOLUI SOZINHO`

**Título**

`Tudo o que você precisa além do código para evoluir mais rápido`

### Benefícios

- acompanhamento semanal com recrutadora;
- terapeuta focado em alta performance;
- mentorias semanais;
- agentes de IA disponíveis 24h;
- suporte humano sete dias por semana;
- comunidade de profissionais;
- vagas exclusivas.

### Layout

- fundo escuro;
- jornada sticky;
- um benefício por estágio;
- indicador vertical verde;
- conteúdo ativo com glow;
- imagem ou interface lateral;
- não usar sete cards iguais.

---

## SEÇÃO 06 — PLATAFORMA

**Eyebrow**

`ECOSSISTEMA DEVCLUB`

**Título**

`Uma plataforma criada para transformar estudo em progresso`

### Recursos

- Plataforma de Ensino
- Cursos organizados por trilhas
- Comunidade de alunos
- Club Agents
- Playground de Treinamento
- Mural da Fama
- Área de vagas

### Layout

- fundo claro;
- mockup grande;
- tabs acessíveis;
- tabs com formato pill;
- tab ativa verde;
- painéis com radius `20px`;
- imagens reais;
- transições curtas.

---

## SEÇÃO 07 — PROJETOS REAIS

**Eyebrow**

`APRENDER FAZENDO`

**Título**

`Você aprende construindo projetos que poderiam existir no mercado`

### Layout

- projetos full-bleed;
- alternância claro/escuro;
- imagens grandes;
- contexto;
- problema;
- solução;
- stack;
- resultado;
- habilidade desenvolvida.

Usar imagens reais do DevClub.

Não usar carrossel automático.

---

## SEÇÃO 08 — VIDAS TRANSFORMADAS

**Eyebrow**

`RESULTADOS REAIS`

**Título**

`Milhares de vidas transformadas dentro da nossa comunidade`

Criar duas implementações:

```ts
type TestimonialsLayout = "editorial" | "mosaic";

const TESTIMONIALS_LAYOUT: TestimonialsLayout = "editorial";
```

### Editorial

- um caso principal;
- imagem ou vídeo;
- antes e depois;
- cargo;
- empresa;
- depoimentos menores;
- métricas.

### Mosaico

- cards com proporções diferentes;
- vídeos;
- prints;
- fotos;
- frases;
- hover com contexto;
- mobile em lista.

Não inventar depoimentos.

---

## SEÇÃO 09 — PROFESSORES

**Eyebrow**

`APRENDA COM OS MELHORES`

**Título**

`Profissionais que conhecem o caminho e ensinam como quem vive o mercado`

### Pessoas

- Rodolfo Mori
- Fernanda
- Agustinho
- Henrique
- Márcio
- Juliana
- Mateus

### Layout

- fundo escuro;
- lista editorial;
- nome em grande escala;
- foto muda conforme item ativo;
- especialidade ao lado;
- linha verde indicando o professor ativo;
- detalhes roxos;
- mobile em carrossel.

Não inventar cargos ou biografias.

---

## SEÇÃO 10 — MÓDULOS BÔNUS

**Eyebrow**

`VÁ MAIS LONGE`

**Título**

`Módulos bônus para ampliar suas possibilidades`

### Layout

- superfície clara;
- timeline;
- módulos desbloqueados conforme scroll;
- progress line verde;
- marcos roxos;
- cards com `20px`;
- descrição de aplicação prática.

Não inventar nomes de módulos ausentes.

---

## SEÇÃO 11 — MEC E DIPLOMAS

**Eyebrow**

`RECONHECIMENTO`

**Título**

`Escola reconhecida pelo MEC e com diplomas oficiais`

### Layout

- documento ou diploma real;
- composição limpa;
- fundo claro;
- card escuro de autoridade;
- selo verde;
- detalhes roxos;
- explicação objetiva.

Não inventar:

- registro;
- autorização;
- validade;
- equivalência;
- número oficial.

---

## SEÇÃO 12 — SALÁRIOS

**Eyebrow**

`PERSPECTIVA DE CARREIRA`

**Título**

`Veja onde a evolução em tecnologia pode levar você`

### Áreas

- Front-end
- Back-end
- Full Stack
- Mobile
- Dados
- IA

### Níveis

- Júnior
- Pleno
- Sênior

### Layout

- stat cards;
- gráficos com linha verde;
- números em gradiente verde/roxo;
- filtros pill;
- superfície clara;
- animação por `stroke-dashoffset`;
- fonte e data visíveis.

Não inventar valores.

---

## SEÇÃO 13 — GARANTIA

**Eyebrow**

`RISCO ZERO`

**Título**

`E se eu entrar e perceber que não é para mim?`

**Texto**

`Você tem 7 dias para conhecer a experiência. Se não fizer sentido para você, solicite o cancelamento dentro do prazo informado nos termos da oferta.`

### Layout

Aplicar o padrão do Design System:

- fundo `#F7F7F8`;
- card escuro;
- radius `28px`;
- glow verde radial;
- número 7 grande;
- selo circular verde;
- copy curta;
- CTA.

Não usar urgência artificial.

---

## SEÇÃO 14 — FAQ

**Eyebrow**

`PERGUNTAS FREQUENTES`

**Título**

`Antes de começar, tire suas dúvidas`

### Perguntas

1. Preciso saber programar?
2. Por quanto tempo tenho acesso?
3. Como funciona o suporte?
4. As aulas são gravadas?
5. Existem projetos práticos?
6. Como funcionam as mentorias?
7. O DevClub ajuda na busca por vagas?
8. Como funciona a comunidade?
9. Quais formações estão incluídas?
10. Como funciona a garantia?

### Layout

- superfície clara;
- accordion;
- Manrope nas perguntas;
- Albert Sans nas respostas;
- ícone plus roxo;
- linha divisória;
- abertura com ease oficial;
- `aria-expanded`;
- teclado.

Não inventar regras comerciais.

---

## SEÇÃO 15 — FOOTER

### Bloco final de conversão

**Título**

`Seu próximo nível começa quando você decide avançar.`

**Texto**

`Entre para o DevClub e construa uma trajetória em tecnologia com direção, prática e acompanhamento.`

**CTAs**

- `Quero ser aluno`
- `Conhecer as formações`

### Navegação

- Formações
- Faculdade
- Área do Aluno
- Suporte
- Termos
- Privacidade
- Redes sociais

### Visual

- fundo `#1F1E20`;
- colunas;
- links com hover verde;
- divisor;
- dados legais;
- copyright dinâmico.

---

## SEÇÃO 16 — BRAND OUTRO

Esta seção deve existir depois do footer.

### Objetivo

Encerrar a experiência com memória de marca.

### Layout

- fundo `#141315`;
- altura entre `55svh` e `80svh`;
- wordmark `DEVCLUB`;
- Manrope 800;
- tamanho entre `clamp(60px, 16vw, 220px)`;
- gradiente vertical:
  - topo `#3A3A3D`;
  - base `#141315`;
- glow verde e roxo discreto;
- partículas leves;
- parallax sutil;
- sem textos extras;
- sem CTA;
- sem menu.

---

# P — PARÂMETROS E RESTRIÇÕES

## Obrigatório

- exatamente 16 seções;
- menu fora da contagem;
- seção 02 usando `@/components/reel`;
- vídeo do hero controlado por scroll;
- scroll limitado ao hero;
- Design System aplicado literalmente;
- Manrope e Albert Sans;
- verde `#39D353`;
- roxo `#721AE7`;
- cards com `20px`;
- botões pill;
- inputs retos;
- ease `cubic-bezier(0.16, 1, 0.3, 1)`;
- seções claras e escuras alternadas;
- imagens locais;
- reduced motion;
- acessibilidade;
- duas versões de depoimentos.

## Não fazer

- não usar Inter;
- não usar Geist;
- não usar outra paleta;
- não usar azul como cor dominante;
- não inventar Design System;
- não criar todos os cards com a mesma composição;
- não usar partículas em toda a página;
- não usar grid genérico para todas as seções;
- não usar autoplay com áudio;
- não usar vídeo em loop;
- não mapear o vídeo pelo scroll total;
- não duplicar `reel.tsx`;
- não inventar salários;
- não inventar depoimentos;
- não inventar informações do MEC;
- não criar uma landing específica de Claude Code;
- não exibir preço de US$ 97;
- não usar Lorem Ipsum;
- não adicionar seções fora da estrutura;
- não remover nenhuma seção.

## Performance

- LCP abaixo de 2.5s;
- poster imediato;
- vídeos abaixo da dobra com `preload="metadata"` ou `none`;
- imagens lazy;
- dimensões reservadas;
- cleanup de GSAP;
- cleanup de RAF;
- pausar vídeo fora do viewport;
- evitar layout shift;
- reduzir hidratação;
- não carregar bibliotecas redundantes.

## Acessibilidade

- contraste AA;
- foco visível;
- teclado;
- menu mobile acessível;
- accordion acessível;
- alt text;
- reduced motion;
- sem conteúdo importante apenas no hover;
- controles de vídeo;
- ordem de tabulação coerente.

## SEO

- H1 único;
- H2 por seção;
- metadata;
- Open Graph;
- alt text;
- links descritivos;
- conteúdo semântico;
- dados estruturados apenas com informações reais.

---

# T — TESTES E CRITÉRIOS DE ACEITAÇÃO

## Design System

- [ ] Manrope aplicada em títulos e números.
- [ ] Albert Sans aplicada em corpo e UI.
- [ ] Verde oficial utilizado nos CTAs.
- [ ] Roxo oficial utilizado em destaques secundários.
- [ ] Nenhuma nova cor dominante foi introduzida.
- [ ] Cards usam radius de 20px.
- [ ] Botões usam radius pill.
- [ ] Inputs usam radius zero.
- [ ] Motion utiliza o ease oficial.
- [ ] Eyebrows usam ponto verde e texto uppercase.

## Estrutura

- [ ] Menu correto.
- [ ] Exatamente 16 seções.
- [ ] Reel na segunda seção.
- [ ] Todas as 15 formações.
- [ ] Duas versões de depoimentos.
- [ ] Footer separado do Brand Outro.

## Hero

- [ ] Vídeo avança e retrocede com o scroll.
- [ ] Não existe autoplay em loop.
- [ ] Progresso limitado ao hero.
- [ ] Frame final encaixa no Reel.
- [ ] Poster imediato.
- [ ] Fallback se o vídeo falhar.
- [ ] Reduced motion funcional.

## Responsividade

- [ ] Sem overflow horizontal.
- [ ] Formações usam scroll-snap no mobile.
- [ ] Menu mobile acessível.
- [ ] Textos com `clamp()`.
- [ ] Mockups não cortam conteúdo.
- [ ] Nenhuma interação depende apenas de hover.

## Conteúdo

- [ ] Nenhum salário inventado.
- [ ] Nenhum depoimento inventado.
- [ ] Nenhuma informação do MEC inventada.
- [ ] Não aparece US$ 97.
- [ ] Claude Code aparece apenas entre as formações.
- [ ] Copy consistente com o posicionamento do DevClub.

## Código

- [ ] Sem erros TypeScript.
- [ ] Sem `any` desnecessário.
- [ ] Sem warning de hydration.
- [ ] Timelines possuem cleanup.
- [ ] Listeners possuem cleanup.
- [ ] Código dividido por seção.
- [ ] Conteúdo centralizado em arquivos de dados.
- [ ] Componentes reutilizáveis.
- [ ] Site continua legível sem motion.

---

# ENTREGA

Entregue:

1. página completa;
2. componentes separados;
3. integração com `reel.tsx`;
4. hook dedicado ao vídeo por scroll;
5. tokens do Design System configurados no Tailwind e CSS;
6. conteúdo organizado;
7. README contendo:
   - como executar;
   - onde trocar vídeos;
   - onde trocar imagens;
   - como alternar depoimentos;
   - quais conteúdos ainda dependem de dados oficiais;
   - como desativar Lenis;
   - como desativar GSAP;
   - como testar reduced motion.

Antes de concluir, percorra toda a página em desktop, tablet e mobile.

Remova qualquer seção que pareça visualmente desconectada, mas preserve seu conteúdo e reconstrua sua composição dentro da identidade do Design System.

O resultado final deve parecer uma evolução natural e cinematográfica do **DevClub — Signal Design System**, não uma nova identidade criada por conveniência do desenvolvedor.
