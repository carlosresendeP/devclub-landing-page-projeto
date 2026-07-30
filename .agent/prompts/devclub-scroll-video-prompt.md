# Prompt para o vídeo de scroll do Hero — DevClub

## Conceito escolhido

**Da confusão à trilha profissional.**

O vídeo deve mostrar, sem depender de textos legíveis dentro da imagem, a transformação de uma pessoa que estuda de forma desorganizada para uma jornada clara, prática e conectada ao mercado.

Ele precisa cumprir duas funções:

1. sustentar a promessa do hero;
2. terminar com o mesmo enquadramento do notebook usado em `@/components/reel.tsx`, criando uma transição contínua para a segunda seção.

Não criar um vídeo abstrato de “tecnologia” com partículas, cérebro digital, robôs, planetas ou hologramas aleatórios. Isso é o equivalente visual de escrever “inovação” e esperar aplausos.

---

## Prompt principal para geração

Create a cinematic 16:9 hero video designed specifically for scroll scrubbing on a premium technology education website called DevClub.

The entire video must be one continuous camera move with clearly separated visual stages and no hard cuts.

Start with a realistic black laptop on a dark minimalist desk, viewed from a slightly low three-quarter angle. The environment is almost black, with subtle volumetric haze, controlled reflections, soft film grain, and the DevClub color language: luminous green accents and deep violet secondary light. The laptop screen initially shows a visually disorganized learning workspace: overlapping code windows, scattered project panels, disconnected UI fragments, unfinished components, and multiple paths competing for attention. Do not render readable text, logos, fake words, or random symbols.

As the camera slowly pushes toward the laptop, the disorganized interface begins to reorganize. Loose code fragments and interface panels move into alignment. Thin luminous green and violet paths emerge from the screen and connect the elements into three deliberate learning routes: software development, artificial intelligence and automation, and data. These routes must feel like a structured curriculum, not a generic network visualization.

In the middle stage, the camera gets closer to the screen. The interface transforms into a clear premium learning environment with organized modules, progress indicators, project thumbnails, mentor presence, community activity, and a practical coding workspace. Show visual evidence of progression: unfinished UI becoming a complete responsive application, disconnected files becoming an organized project structure, and a blank dashboard becoming a polished working product. Keep all interface text abstract and unreadable because real copy will be rendered as HTML over the video.

In the final stage, the camera passes gently through the screen and reveals a clean frontal view of the same laptop. Inside the screen, a refined horizontal sequence of course modules and real project previews moves slowly from right to left, anticipating the next formations section. The environment becomes calmer and more confident. The green path reaches a clear endpoint and forms a subtle upward trajectory, representing professional evolution without using arrows, charts, money, diplomas, or corporate clichés.

End on a stable, centered, front-facing laptop composition against a dark background, with enough negative space around it for the next webpage section. The final frame must be visually compatible with a laptop mockup containing a showreel, allowing a seamless crossfade into the next section.

Visual style: premium cinematic product film, realistic materials, high-end motion design, dark editorial composition, restrained volumetric light, subtle depth of field, crisp laptop details, controlled green and violet glow, no excessive neon, no cyberpunk city, no sci-fi spaceship, no human face close-ups.

Camera: slow continuous dolly-in, perfectly stable, no handheld shake, no sudden zoom, no orbit around the laptop, no hard cut.

Lighting: mostly black environment, soft white key light, DevClub green rim light, subtle violet fill, highlights must preserve screen readability.

Motion: smooth and reversible because the video will be controlled by page scroll. Every transition must look correct both forward and backward.

Duration: 8 to 12 seconds.
Resolution: 1920x1080.
Frame rate: 30 fps.
Aspect ratio: 16:9.
No audio.
No captions.
No readable text.
No watermark.
No embedded UI labels.

---

## Estrutura temporal recomendada

### 0%–25% — Sobrecarga

- notebook inteiro;
- workspace visualmente desorganizado;
- janelas sobrepostas;
- vários caminhos sem hierarquia;
- pouca luz verde;
- maior presença de sombras e violeta.

### 25%–60% — Direção

- câmera aproxima;
- elementos se alinham;
- surgem três trilhas visuais;
- verde passa a dominar;
- projeto começa a tomar forma;
- movimento claro, porém não acelerado.

### 60%–85% — Prática

- interface organizada;
- módulos, projeto, comunidade e mentoria aparecem visualmente;
- aplicação incompleta se torna um produto final;
- sensação de progresso verificável.

### 85%–100% — Entrega para o Reel

- notebook frontal e centralizado;
- fundo mais limpo;
- tela estável;
- módulos movem horizontalmente com baixa velocidade;
- último frame sem partículas cruzando a frente;
- manter composição por pelo menos 12 a 18 frames para facilitar o crossfade.

---

## Negative prompt

generic AI imagery, digital brain, humanoid robot, floating hologram person, cyberpunk city, spaceship, galaxy, planet, tunnel of random code, Matrix rain, illegible typography, fake brand logo, readable fake text, excessive particles, aggressive camera shake, rapid cuts, glitch transition, strobe light, bright white flash, oversaturated neon, blue-only palette, green code rain, gaming setup, RGB keyboard close-up, cryptocurrency imagery, money, salary chart, diploma floating in space, corporate handshake, stock footage classroom, smiling people looking at camera, abstract liquid blob, unrelated futuristic machinery, hard cuts, looping animation, camera orbit, fisheye lens, distorted laptop, extra screens, duplicated objects, low-resolution UI, watermark

---

## Orientações de integração

- gerar também um frame estático do primeiro momento para o poster;
- gerar, se possível, uma versão MP4 H.264 e uma WebM;
- preservar o mesmo crop entre versões;
- não colocar a logo DevClub dentro do vídeo; renderizar a marca em HTML;
- sincronizar as frases do hero com os três atos:
  1. `Aprenda com direção`;
  2. `Construa projetos reais`;
  3. `Evolua com acompanhamento`;
- mapear o vídeo somente ao scroll da Seção 01;
- no frame final, cruzar opacidade com o notebook do componente `reel.tsx`;
- não fazer o Reel repetir as mesmas cenas. O hero mostra a transformação; o Reel mostra o ecossistema real.
