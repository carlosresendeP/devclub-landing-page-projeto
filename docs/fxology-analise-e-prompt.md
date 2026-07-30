# Análise do vídeo e prompt de reconstrução — Fxology

## 1. Referência analisada

- Projeto: **Fxology — Prop Trading Company**
- Referência visual: apresentação publicada no Behance pela QClay
- Vídeo analisado: aproximadamente **99,7 segundos**, resolução **720 × 540**, 30 fps
- Direção: fintech experimental, editorial, científica, dark e cinematográfica

> A reconstrução deve preservar a linguagem visual, a estrutura narrativa e o sistema de movimento, mas usar marca, textos, logotipo e assets próprios.

---

# 2. DNA visual

A página não se comporta como uma landing page SaaS convencional. Ela funciona como uma sequência cinematográfica contínua, dividida em capítulos conectados pela rolagem.

Características principais:

- fundo preto quase absoluto;
- verde elétrico usado como sinal, luz e destaque;
- branco levemente esverdeado;
- cinzas muito escuros;
- tipografia grotesca de peso regular;
- títulos gigantes cortados pelas bordas;
- elementos financeiros misturados a gráficos científicos;
- grades cartesianas e linhas técnicas;
- brilhos volumétricos;
- partículas mínimas;
- modelos 3D translúcidos;
- telas de produto em perspectiva;
- seções fixadas durante a rolagem;
- movimentos horizontais ligados ao scroll;
- composição assimétrica;
- grandes áreas vazias;
- transições que reutilizam elementos da seção anterior.

---

# 3. Paleta

```css
:root {
  --background: #010202;
  --background-soft: #060907;
  --surface: #0b0e0c;
  --surface-2: #111512;

  --foreground: #dbe5e0;
  --foreground-strong: #f1f5f2;
  --muted: #505654;
  --muted-soft: #7a817e;

  --primary: #38e446;
  --primary-strong: #25d635;
  --primary-soft: #87d179;
  --primary-deep: #335b35;

  --border: rgba(219, 229, 224, 0.10);
  --border-strong: rgba(56, 228, 70, 0.30);

  --glow: rgba(56, 228, 70, 0.22);
  --glow-soft: rgba(135, 209, 121, 0.12);
}
```

Gradientes:

```css
background:
  radial-gradient(circle at 50% 10%, rgba(56, 228, 70, 0.14), transparent 34%),
  radial-gradient(circle at 15% 45%, rgba(51, 91, 53, 0.12), transparent 28%),
  #010202;
```

---

# 4. Tipografia

Fonte principal recomendada:

```css
font-family: "PP Mori", "Inter Tight", "Manrope", sans-serif;
```

Caso PP Mori seja utilizada, ela deve ser licenciada e adicionada pelo proprietário do projeto. Não incluir arquivos de fonte no repositório público.

## Display

```css
font-size: clamp(4rem, 9vw, 9.5rem);
font-weight: 400;
line-height: 0.88;
letter-spacing: -0.065em;
```

## Títulos de seção

```css
font-size: clamp(2.5rem, 5vw, 5.5rem);
font-weight: 400;
line-height: 0.94;
letter-spacing: -0.052em;
```

## Corpo

```css
font-size: clamp(0.82rem, 1vw, 1rem);
font-weight: 400;
line-height: 1.55;
letter-spacing: -0.015em;
```

## Labels técnicos

```css
font-size: 0.68rem;
font-weight: 500;
line-height: 1;
letter-spacing: 0.04em;
text-transform: uppercase;
```

Regras:

- evitar títulos em negrito pesado;
- usar regular ou medium;
- reduzir bastante o `letter-spacing`;
- usar frases curtas;
- permitir que palavras sejam cortadas pelas bordas;
- combinar texto branco, cinza e verde na mesma linha;
- usar textos gigantes como elementos gráficos.

---

# 5. Cronologia e animações observadas

## 00s–05,5s — Hero

- Navbar permanece fixa no topo.
- O fundo contém névoa verde volumétrica e símbolos matemáticos.
- A headline aparece por máscaras horizontais e verticais.
- Palavras entram com pequeno atraso entre elas.
- Elementos decorativos flutuam lentamente.
- CTAs aparecem após o título.
- A transição seguinte sobe por baixo do hero, sem corte seco.

Implementação:

- `clip-path: inset(100% 0 0 0)` para revelar linhas;
- `yPercent: 110 → 0`;
- stagger entre 0,05 e 0,09;
- fundo com parallax de 4% a 8%;
- partículas com movimento quase imperceptível.

## 05,5s–10s — Métricas

- A seção de números entra por baixo do hero.
- Um grid técnico divide a tela.
- Os valores aumentam enquanto o scroll avança.
- Linhas verdes são desenhadas entre os quadrantes.
- Um brilho percorre as interseções.
- O título permanece centralizado no topo.

Implementação:

- seção pinada;
- contadores vinculados ao progresso;
- linhas em SVG com `stroke-dashoffset`;
- glow animado com pseudo-elemento;
- texto com opacidade de 0,3 para 1.

## 10s–15s — Frase horizontal e capital

- Uma frase verde gigantesca atravessa a parte superior.
- O texto começa e termina cortado pelas laterais.
- Abaixo há uma composição em duas colunas.
- Um símbolo tridimensional central gira lentamente.
- Uma faixa de logos permanece próxima da base.

Implementação:

- `white-space: nowrap`;
- `xPercent: 18 → -42`;
- ScrollTrigger com `scrub: 1`;
- objeto 3D com rotação pequena;
- seção com `overflow: clip`.

## 15s–18,5s — “Start earning”

- Texto repetido ocupa a metade direita.
- As linhas se movem com velocidades diferentes.
- Objetos circulares translúcidos passam entre as palavras.
- O conteúdo principal e os CTAs ficam na esquerda.
- O efeito depende de camadas, não de um simples marquee.

Implementação:

- duplicar a frase entre 6 e 8 vezes;
- deslocar cada linha entre -12px e 12px;
- variar opacidade de 0,25 a 1;
- aplicar `mix-blend-mode: screen` nos objetos;
- mover linhas alternadas em sentidos opostos.

## 19s–26,5s — Como funciona

- Seção fixa com três etapas.
- A forma verde de tecido permanece ao fundo.
- O mockup do produto muda a cada etapa.
- O card anterior diminui, desfoca e desaparece.
- O próximo entra com escala, profundidade e leve deslocamento.
- O texto inferior é substituído junto da interface.

Implementação:

- timeline GSAP com três capítulos;
- cada capítulo ocupa aproximadamente 100vh de scroll;
- `opacity`, `scale`, `filter: blur()` e `yPercent`;
- não desmontar o fundo entre etapas;
- manter o título fixo.

## 26,5s–30s — Payouts / Certificates

- Duas palavras gigantes aparecem nas laterais.
- Um certificado fica no centro em perspectiva.
- O certificado flutua e gira poucos graus.
- Partículas e pequenos brilhos saem do centro.
- Os textos laterais deslizam em sentidos opostos.

Implementação:

- `Payouts`: xPercent de -35 para -70;
- `Certificates`: xPercent de 35 para 70;
- card central: `rotateY(-8deg)` e `rotateX(4deg)`;
- glow radial atrás do card;
- movimento amarrado ao scroll.

## 30s–36,5s — Preços

- O título aparece antes da tabela.
- A tabela sobe da escuridão.
- Uma coluna recebe contorno e iluminação verde.
- O brilho percorre a coluna destacada.
- A seção funciona como tabela comparativa, não como quatro cards separados.

Implementação:

- grid único com colunas;
- bordas internas finas;
- `box-shadow` verde animado na coluna ativa;
- linhas da tabela reveladas progressivamente;
- manter labels e valores pequenos.

## 36,5s–44,5s — Programas

- Cards entram em uma pilha com profundidade.
- Apenas um programa fica totalmente iluminado por vez.
- Cards inativos ficam escuros, desfocados e afastados.
- Cada programa tem uma cor própria: cobre, bronze, prata, ouro e diamante.
- A troca acontece por deslocamento horizontal e diagonal.

Implementação:

- seção pinada;
- cards absolutos;
- estado ativo: escala 1, opacidade 1 e blur 0;
- estado inativo: escala 0,92, opacidade 0,25 e blur 5px;
- alternar `z-index`;
- usar progressão de scroll para selecionar o card.

## 44,5s–49,5s — Planeta e comunidade global

- Um grande arco surge da parte inferior.
- O título parece nascer atrás do planeta.
- Partículas orbitais cruzam o fundo.
- O conteúdo muda para um contador regressivo.
- O planeta continua presente durante a troca de conteúdo.

Implementação:

- círculo grande com gradiente radial;
- borda com luz verde;
- pseudo-elemento de atmosfera;
- partículas lentas;
- transição do título para o contador por máscara.

## 49,5s–55,5s — Benefícios

- Grid 2 × 2 de benefícios.
- Imagens abstratas dentro dos cards.
- Brilho percorre algumas imagens.
- Cards têm borda muito discreta.
- A seção inteira se move lentamente para cima.

Implementação:

- cards com `border-radius` baixo;
- parallax interno de 4% a 6%;
- imagem com leve escala no hover;
- borda com gradiente animado;
- sem glassmorphism excessivo.

## 55,5s–62,5s — Ponte tipográfica e linhas

- Headline gigantesca “Get a refund...” atravessa a tela.
- A frase é cortada pelas laterais.
- O fundo muda para linhas curvas luminosas.
- “Who we are?” aparece no centro.
- Depois o texto muda para “And how it all started?”.
- As curvas lembram gráficos financeiros e mapas topográficos.

Implementação:

- headline horizontal com `xPercent`;
- transição para canvas ou SVG de curvas;
- linhas com brilho verde e branco;
- números pequenos posicionados ao longo das curvas;
- títulos centrais revelados por blur e máscara;
- fundo com grid técnico.

## 62,5s–72,5s — Linha do tempo

- Headline permanece no topo.
- Um gráfico em perspectiva ocupa a base.
- Pontos são acesos da esquerda para a direita.
- Parágrafos entram um após o outro.
- Barras e marcadores crescem conforme a narrativa avança.
- A seção permanece fixada por vários capítulos.

Implementação:

- seção com 400vh a 500vh;
- wrapper interno sticky;
- dados em array;
- atualizar texto e gráfico conforme o índice da etapa;
- linhas SVG animadas;
- pontos com glow pulsante;
- usar `scrub: 1.1`.

## 72,5s–75,5s — CTA central

- O ícone aparece pequeno e cresce.
- Headline entra por baixo.
- Botões aparecem por último.
- Linhas técnicas laterais são desenhadas.
- O fundo permanece quase preto.

## 75,5s–80,5s — FAQ

- Lista entra por baixo.
- Perguntas são separadas por linhas.
- Um item é aberto no vídeo.
- A resposta aparece por expansão de altura e opacidade.
- Elementos verdes decorativos ficam nos cantos.

Implementação:

- accordion com `grid-template-rows: 0fr → 1fr`;
- rotação do ícone;
- texto da resposta com pequeno delay;
- sem cards individuais.

## 80,5s–85,5s — Plataforma

- Headline central no topo.
- Dashboard sobe da parte inferior.
- O mockup cresce em direção à câmera.
- Raios verdes iluminam o fundo.
- A interface permanece frontal com perspectiva pequena.

Implementação:

- `translateY(35vh) → 0`;
- `scale(0.78) → 1`;
- `rotateX(7deg) → 0`;
- spotlights com gradientes animados;
- sombra verde difusa.

## 85,5s–87,8s — Avaliações

- Cards aparecem com stagger.
- A composição é irregular.
- Alguns cards ficam mais altos e outros deslocados.
- O título fica no canto superior esquerdo.

## 88s–90,8s — Comunidade

- Ícone central cresce.
- Anéis compostos por linhas horizontais pulsam para fora.
- Texto e botões permanecem no centro.
- O efeito lembra radar ou ondas sonoras.

Implementação:

- anéis SVG ou CSS;
- `scale: 0.6 → 1.2`;
- opacidade 0 → 0,7 → 0;
- delay entre anéis;
- máscara horizontal para criar scanlines.

## 91s–92,8s — Blog

- Cards do blog entram por baixo.
- Há diferença de altura entre eles.
- A composição usa largura total com muito espaço vazio.

## 93s–99,7s — Footer

- Formas 3D translúcidas surgem de baixo.
- Discos formam uma espécie de túnel ou escultura.
- A câmera parece se aproximar.
- Um “Let’s Talk” gigantesco atravessa o objeto.
- O texto é cortado pelas bordas.
- O footer convencional entra por baixo.
- A headline continua parcialmente visível no topo.

Implementação:

- React Three Fiber para os discos;
- materiais translúcidos e iridescentes;
- movimento de câmera muito pequeno;
- headline absoluta sobre ou entre camadas;
- footer com grid de links;
- `overflow: clip`;
- texto de 12vw a 16vw.

---

# 6. Stack recomendada

```txt
Next.js
React
TypeScript
Tailwind CSS
GSAP
GSAP ScrollTrigger
Lenis
Framer Motion
React Three Fiber
Three.js
Lucide React
```

Divisão de responsabilidades:

- **GSAP:** animações de scroll, pinagens, máscaras e timelines;
- **Lenis:** suavização da rolagem;
- **Framer Motion:** menu, accordion, botões e microinterações;
- **React Three Fiber:** objetos 3D do hero e footer;
- **SVG:** gráficos, linhas, orbitais e indicadores;
- **CSS:** glows, grids, scanlines e texturas.

---

# 7. Prompt completo para geração

## Papel

Você é um diretor de arte digital, motion designer e desenvolvedor front-end sênior especializado em experiências Awwwards.

Sua tarefa é criar uma landing page completa, funcional e responsiva com a mesma qualidade visual, narrativa de rolagem e sistema de movimento do projeto Fxology — Prop Trading Company.

A referência deve ser usada para reproduzir:

- o nível de refinamento;
- a composição editorial;
- o contraste;
- a tipografia;
- o uso de grids;
- a linguagem de gráficos financeiros;
- os movimentos ligados ao scroll;
- as transições entre capítulos;
- a integração entre 2D, interface e 3D.

Não copie o nome Fxology, logotipo, textos, dados, imagens ou identidade protegida da referência. Use conteúdo e assets originais para:

- Marca: `[NOME DA MARCA]`
- Segmento: `[SEGMENTO]`
- Produto: `[PRODUTO PRINCIPAL]`
- Público: `[PÚBLICO-ALVO]`
- Conversão principal: `[AÇÃO PRINCIPAL]`

## Resultado obrigatório

Entregue um projeto real, executável e pronto para evolução.

Não entregue apenas mockup, screenshot ou protótipo estático.

O projeto deve rodar com:

```bash
npm install
npm run dev
```

## Stack obrigatória

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- Lenis Smooth Scroll
- Framer Motion para microinterações
- React Three Fiber e Three.js para os elementos 3D
- Lucide React
- next/font
- CSS variables

## Direção visual

Criar uma experiência:

- dark;
- editorial;
- científica;
- financeira;
- cinematográfica;
- sofisticada;
- futurista sem parecer cyberpunk;
- minimalista;
- baseada em tipografia e movimento.

Evitar:

- gradientes roxos genéricos;
- neon em excesso;
- cards redondos de template;
- bento grid genérico;
- ícones dentro de bolinhas repetidas;
- glassmorphism em todas as seções;
- animação fade-up repetida;
- fundo de partículas aleatórias sem função;
- excesso de elementos;
- seções com a mesma composição;
- títulos sempre centralizados;
- imagens genéricas de banco;
- mockup dentro de notebook ou celular sem contexto.

## Design tokens

```css
:root {
  --background: #010202;
  --background-soft: #060907;
  --surface: #0b0e0c;
  --surface-2: #111512;

  --foreground: #dbe5e0;
  --foreground-strong: #f1f5f2;
  --muted: #505654;
  --muted-soft: #7a817e;

  --primary: #38e446;
  --primary-strong: #25d635;
  --primary-soft: #87d179;
  --primary-deep: #335b35;

  --border: rgba(219, 229, 224, 0.10);
  --border-strong: rgba(56, 228, 70, 0.30);

  --glow: rgba(56, 228, 70, 0.22);
  --glow-soft: rgba(135, 209, 121, 0.12);
}
```

Adicionar:

- grain de 2% a 4%;
- grid cartesiano extremamente sutil;
- gradientes radiais verdes;
- pequenos números e coordenadas decorativas;
- símbolos matemáticos relacionados ao segmento;
- bordas de 1px;
- cantos entre 4px e 12px;
- grandes áreas de espaço negativo.

## Tipografia

Utilizar PP Mori quando houver licença disponível.

Fallback:

```css
font-family: "Inter Tight", "Manrope", sans-serif;
```

Display:

```css
font-size: clamp(4rem, 9vw, 9.5rem);
font-weight: 400;
line-height: 0.88;
letter-spacing: -0.065em;
```

Títulos:

```css
font-size: clamp(2.5rem, 5vw, 5.5rem);
font-weight: 400;
line-height: 0.94;
letter-spacing: -0.052em;
```

Regras:

- não usar bold pesado;
- títulos curtos;
- palavras cortadas pelas bordas;
- misturar verde, branco e cinza;
- usar headline como elemento de transição;
- corpo pequeno e técnico;
- hierarquia editorial.

## Estrutura da landing page

### 01. Loader

- fundo preto;
- logotipo pequeno;
- linha verde crescendo;
- números ou coordenadas;
- duração máxima de 1,3 segundo;
- revelar hero por máscara;
- respeitar sessão para não repetir sempre.

### 02. Navbar

- fixa;
- logotipo à esquerda;
- links finos;
- idioma e ações à direita;
- botão claro com detalhe verde;
- fundo transparente no hero;
- blur discreto após rolar;
- menu mobile em tela cheia.

### 03. Hero

- altura mínima de 100svh;
- headline central de duas linhas;
- palavra principal em verde;
- símbolos matemáticos flutuantes;
- névoa verde volumétrica;
- dois CTAs;
- trust bar inferior;
- navbar visível;
- pequenos labels técnicos;
- animação palavra por palavra;
- elementos decorativos em parallax;
- transição da próxima seção subindo por baixo.

### 04. Métricas globais

- título central;
- quatro métricas distribuídas em um grid técnico;
- números animados;
- linhas sendo desenhadas;
- brilho percorrendo o grid;
- seção fixada durante o scroll;
- valores não devem estar dentro de cards.

### 05. Statement horizontal

- frase gigantesca em uma única linha;
- texto verde e branco;
- movimento horizontal ligado ao scroll;
- conteúdo secundário abaixo em duas colunas;
- objeto 3D central;
- faixa de logos na base.

### 06. Start earning

- texto repetido na metade direita;
- camadas com velocidades diferentes;
- discos 3D atravessando as palavras;
- texto e CTAs na esquerda;
- composição assimétrica;
- nenhuma animação automática rápida.

### 07. Como funciona

- seção fixada;
- três etapas;
- fundo verde abstrato permanente;
- mockup central mudando por etapa;
- textos inferiores correspondentes;
- mudanças com blur, escala, máscara e profundidade;
- indicador de progresso;
- cada etapa deve ocupar aproximadamente 100vh de scroll.

### 08. Prova financeira

- certificado ou resultado central em 3D;
- duas palavras gigantes nas laterais;
- partículas discretas;
- glow radial;
- textos laterais deslizando em sentidos opostos.

### 09. Tabela de planos

- título;
- toggle ou filtro;
- tabela comparativa;
- coluna recomendada iluminada;
- bordas finas;
- glow percorrendo a coluna;
- CTA na base;
- não criar quatro cards isolados.

### 10. Programas

- seção fixa;
- cinco programas;
- cards em pilha;
- apenas um ativo por vez;
- inactive cards escuros e desfocados;
- transição diagonal;
- cor específica por programa;
- indicadores discretos.

### 11. Comunidade global

- planeta ou arco na parte inferior;
- headline surgindo de trás do planeta;
- estrelas e partículas;
- números globais;
- contador ou evento;
- manter o planeta na troca de conteúdo.

### 12. Benefícios

- grid 2 × 2;
- quatro benefícios;
- imagens abstratas originais;
- bordas mínimas;
- brilho interno;
- leve parallax;
- layout mais denso que o restante da página.

### 13. Ponte tipográfica

- frase de 10vw a 14vw;
- movimento horizontal ligado ao scroll;
- frase cortada nas laterais;
- fundo escuro;
- finalizar transformando o fundo em linhas curvas luminosas.

### 14. Manifesto visual

- curvas de gráfico;
- grid;
- números flutuantes;
- headline central;
- mudança de pergunta durante o scroll;
- linhas animadas;
- brilho branco e verde;
- não usar imagem de banco.

### 15. História e linha do tempo

- seção de 400vh a 500vh;
- conteúdo interno sticky;
- título no topo;
- texto lateral trocado por capítulo;
- gráfico de crescimento em perspectiva;
- pontos acesos sequencialmente;
- linhas SVG desenhadas;
- pequenas datas;
- fechamento com CTA.

### 16. CTA central

- ícone crescendo;
- headline curta;
- descrição;
- dois botões;
- linhas técnicas laterais;
- fundo quase vazio.

### 17. FAQ

- accordion;
- linhas horizontais;
- perguntas em fonte pequena;
- expansão de altura;
- resposta com fade;
- detalhe verde nos cantos;
- sem cards.

### 18. Plataforma

- headline central;
- dashboard subindo da parte inferior;
- escala e perspectiva;
- raios verdes;
- sombra difusa;
- detalhes internos legíveis;
- mockup original.

### 19. Avaliações

- cards em composição assimétrica;
- stagger;
- ratings;
- pequenos logotipos;
- title na esquerda;
- fundo sem container arredondado gigante.

### 20. Comunidade

- CTA central;
- anéis de radar;
- scanlines;
- botões;
- pulsação lenta;
- ícone da marca.

### 21. Blog

- título na esquerda;
- quatro artigos;
- cards com tamanhos diferentes;
- imagens originais;
- navegação discreta.

### 22. Footer cinematográfico

- esculturas 3D translúcidas;
- materiais verdes iridescentes;
- câmera em movimento lento;
- “Let’s Talk” ou frase equivalente com 12vw a 16vw;
- texto atravessando os objetos;
- conteúdo final do footer entrando por baixo;
- links em três ou quatro colunas;
- redes sociais;
- contato;
- marca parcialmente cortada.

## Sistema de movimento

Integrar Lenis com GSAP:

```ts
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
```

Padrões:

- entradas com `power3.out`;
- transições com `power2.inOut`;
- scroll com `scrub: 0.8` a `1.2`;
- escalas entre 0,86 e 1;
- blur entre 4px e 14px;
- stagger entre 0,04 e 0,10;
- títulos revelados por `clip-path`;
- evitar bounce;
- evitar elastic;
- evitar animações rápidas;
- movimento deve parecer pesado, contínuo e controlado.

Exemplo de seção pinada:

```ts
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: 1,
    anticipatePin: 1
  }
});
```

Exemplo de headline horizontal:

```ts
gsap.fromTo(
  headline,
  { xPercent: 15 },
  {
    xPercent: -45,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=180%",
      pin: true,
      scrub: 1
    }
  }
);
```

## 3D

Usar React Three Fiber apenas onde existe ganho real:

- objeto central da seção de capital;
- discos da seção “Start earning”;
- certificado;
- planeta;
- escultura do footer.

Não criar um canvas WebGL por seção.

Preferir um canvas persistente quando possível.

Materiais:

- `MeshPhysicalMaterial`;
- transmissão;
- roughness baixa;
- espessura;
- iridescência;
- luzes verdes;
- environment map otimizado.

Criar fallback estático para dispositivos fracos.

## Componentes

```txt
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── GlobalMetrics.tsx
│   │   ├── HorizontalStatement.tsx
│   │   ├── StartEarning.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── PayoutProof.tsx
│   │   ├── PricingTable.tsx
│   │   ├── ProgramsStack.tsx
│   │   ├── GlobalCommunity.tsx
│   │   ├── Benefits.tsx
│   │   ├── KineticBridge.tsx
│   │   ├── ManifestoGraph.tsx
│   │   ├── CompanyTimeline.tsx
│   │   ├── CenterCTA.tsx
│   │   ├── FAQ.tsx
│   │   ├── PlatformShowcase.tsx
│   │   ├── Reviews.tsx
│   │   ├── TradersCTA.tsx
│   │   └── Blog.tsx
│   ├── motion/
│   │   ├── SmoothScrollProvider.tsx
│   │   ├── MaskReveal.tsx
│   │   ├── HorizontalScrollText.tsx
│   │   ├── PinnedSection.tsx
│   │   └── MagneticButton.tsx
│   ├── three/
│   │   ├── SceneCanvas.tsx
│   │   ├── IridescentDiscs.tsx
│   │   ├── Globe.tsx
│   │   └── CertificateObject.tsx
│   └── ui/
├── hooks/
├── data/
├── lib/
└── public/
```

## Responsividade

Desktop:

- manter pinagens;
- preservar movimentos horizontais;
- usar 3D completo;
- permitir headlines cortadas.

Tablet:

- reduzir a duração das pinagens;
- reduzir amplitude;
- reorganizar grids;
- manter a narrativa.

Mobile:

- limitar pinagens longas;
- trocar algumas transições horizontais por verticais;
- reduzir 3D;
- dashboard sem perspectiva excessiva;
- fonte display entre 14vw e 18vw;
- evitar overflow acidental;
- preservar apenas cortes intencionais;
- usar `100svh`;
- não depender de hover.

## Acessibilidade

- `prefers-reduced-motion`;
- navegação por teclado;
- foco visível;
- landmarks semânticos;
- contraste suficiente;
- accordion acessível;
- botões reais;
- textos alternativos;
- headings em ordem;
- não ocultar conteúdo essencial dentro de canvas.

Para movimento reduzido:

- remover pinagens;
- remover scrub;
- mostrar estados finais;
- transformar horizontal scroll em layout estático;
- substituir 3D por imagem;
- manter transições menores que 200ms.

## Performance

- imagens com `next/image`;
- 3D lazy;
- compressão de texturas;
- Draco para modelos;
- limitar DPR;
- evitar múltiplos canvases;
- usar `transform` e `opacity`;
- limpar ScrollTriggers;
- pausar canvas fora da viewport;
- carregar fontes localmente apenas com licença;
- Lighthouse acima de 85 em mobile;
- evitar layout shift;
- usar vídeos apenas quando comprimidos;
- preservar 60 fps em desktop intermediário.

## Conteúdo

Escrever todo o conteúdo em português brasileiro.

Não usar Lorem Ipsum.

O conteúdo deve ser:

- curto;
- direto;
- técnico;
- confiável;
- orientado ao benefício;
- sem promessas impossíveis;
- sem parágrafos grandes;
- com headlines de duas linhas no máximo.

## Entrega

Antes de finalizar:

1. revisar a narrativa de scroll;
2. verificar que nenhuma seção repete a anterior;
3. testar desktop, tablet e mobile;
4. testar reduced motion;
5. validar importações;
6. verificar limpeza dos ScrollTriggers;
7. garantir que o projeto execute;
8. listar assets necessários;
9. incluir README;
10. fornecer placeholders originais;
11. explicar como substituir textos, imagens e modelos 3D;
12. não entregar seções incompletas ou comentários “TODO”.

A experiência final deve transmitir a mesma sensação do vídeo de referência: tipografia editorial gigantesca, verde luminoso controlado, dados financeiros, grids científicos, objetos 3D translúcidos, seções fixadas e transições contínuas que transformam a rolagem em uma narrativa.
