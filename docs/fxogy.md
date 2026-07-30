---
version: "alpha"
name: "Fxogy — Fintech Cinematic Design System"
description: "Fxogy is a dark, editorial, cinematic design system for financial and trading products. It reconstructs the visual DNA of scientific fintech presentations: near-black backgrounds, electric green signal light, oversized cut-off typography, cartesian grids and scroll-driven chapters. Suitable for prop-trading, capital markets and data-driven SaaS landing pages."
colors:
  primary: "#38e446"
  secondary: "#87d179"
  tertiary: "#335b35"
  neutral: "#dbe5e0"
  background: "#010202"
  surface: "#0b0e0c"
  text-primary: "#dbe5e0"
  text-secondary: "#7a817e"
  accent: "#25d635"
typography:
  display-lg:
    fontFamily: "PP Mori, Inter Tight, Manrope, sans-serif"
    fontSize: "clamp(4rem, 9vw, 9.5rem)"
    fontWeight: 400
    lineHeight: "0.88"
    letterSpacing: "-0.065em"
  title-lg:
    fontFamily: "PP Mori, Inter Tight, Manrope, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 5.5rem)"
    fontWeight: 400
    lineHeight: "0.94"
    letterSpacing: "-0.052em"
  body-md:
    fontFamily: "Inter Tight, Manrope, sans-serif"
    fontSize: "clamp(0.82rem, 1vw, 1rem)"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "-0.015em"
  label-sm:
    fontFamily: "Inter Tight, Manrope, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "0.04em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  base: "8px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  gap: "8px"
  section-padding: "clamp(24px, 6vw, 96px)"
components:
  button-primary:
    backgroundColor: "#dbe5e0"
    textColor: "#010202"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    border: "1px solid var(--border-strong)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#dbe5e0"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    border: "1px solid rgba(219, 229, 224, 0.10)"
  button-link:
    textColor: "#87d179"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "0px"
---

## Overview

- **Composition cues:**
  - Layout: Editorial / cinematic sequence
  - Content Width: Full-bleed with bounded reading columns
  - Framing: Asymmetric, headlines cut by the viewport edges
  - Grid: Cartesian, technical, mostly invisible until it lights up

Fxogy does not read like a conventional SaaS landing page. It behaves like a continuous cinematic sequence, divided into scroll-linked chapters that reuse elements from the previous section to keep visual continuity. Composition favors large empty areas, off-center headlines and financial/scientific motifs (grids, coordinates, glow) over card-heavy templates.

## Colors

The system is near-absolute black with a single electric green signal color. There is no secondary accent hue: contrast and hierarchy come from tints of green, off-white and near-black grays.

- **Primary (#38e446):** Signal color. Used for glow, highlighted data, active states and the one word per headline that must stand out.
- **Secondary (#87d179):** Soft green for secondary emphasis, link hover, chart lines.
- **Tertiary (#335b35):** Deep green for gradients, inactive highlights, subtle depth.
- **Neutral (#dbe5e0):** Slightly green-tinted off-white, primary text color.
- **Background (#010202):** Near-absolute black, the page's resting state.
- **Surface (#0b0e0c):** Panels, tables, pinned sections.

- **Usage:** Background: `#010202`; Surface: `#0b0e0c` / `#111512`; Text Primary: `#dbe5e0`; Text Secondary: `#7a817e`; Accent: `#25d635`

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

Signature background gradient:

```css
background:
  radial-gradient(circle at 50% 10%, rgba(56, 228, 70, 0.14), transparent 34%),
  radial-gradient(circle at 15% 45%, rgba(51, 91, 53, 0.12), transparent 28%),
  #010202;
```

## Typography

Display and title sizes are intentionally huge and regular-weight, meant to be cut by the viewport edges and used as graphic elements, not just headlines.

- **Display (`display-lg`):** PP Mori / Inter Tight, `clamp(4rem, 9vw, 9.5rem)`, weight 400, line-height 0.88, letter-spacing -0.065em.
- **Title (`title-lg`):** `clamp(2.5rem, 5vw, 5.5rem)`, weight 400, line-height 0.94, letter-spacing -0.052em.
- **Body (`body-md`):** `clamp(0.82rem, 1vw, 1rem)`, weight 400, line-height 1.55, letter-spacing -0.015em.
- **Label (`label-sm`):** 0.68rem, weight 500, line-height 1, letter-spacing 0.04em, uppercase — used for technical labels, coordinates and eyebrow text.

Rules:

- never use heavy bold; stay at regular or medium;
- keep letter-spacing tight and negative on display/title sizes;
- write short phrases; let words be cropped by section edges;
- mix white, gray and green inside the same line for hierarchy;
- treat oversized headlines as graphic elements, not just copy.

## Layout

Layout follows a cinematic chapter structure: each section is a full-viewport "scene" connected to the next by scroll, not by a hard cut. Preserve the near-black canvas and the cartesian grid as the stable frame before changing ornament or component styling. Use 8px as the base rhythm.

- **Layout type:** Scroll-driven chapters, several pinned for multiple viewport-heights
- **Content width:** Full-bleed backgrounds, bounded text columns (max ~640px for body copy)
- **Base unit:** 8px
- **Scale:** 8px, 16px, 24px, 40px, 64px
- **Section padding:** `clamp(24px, 6vw, 96px)`
- **Grid:** extremely subtle cartesian lines (1px, `--border`), visible mainly where a glow crosses them

## Elevation & Depth

Depth comes from light, blur and translucency, not from drop shadows on cards. Volumetric glows, layered blur states and thin borders communicate hierarchy across hero, pinned sections and 3D objects.

- **Surface style:** Near-black panel with hairline border, lit by radial glow
- **Shadows:** `0 0 0 1px var(--border)`, `0 0 80px var(--glow)`, `0 40px 120px rgba(0,0,0,0.8)`
- **Inactive state:** `opacity: 0.25`, `filter: blur(5px)`, `scale(0.92)`
- **Active state:** `opacity: 1`, `filter: blur(0)`, `scale(1)`

### Techniques
- **Volumetric glow:** radial-gradient halos behind key elements (`--glow`, `--glow-soft`), animated slowly (breathing, 4-8s loops), never static.
- **Grid ignition:** the cartesian grid stays nearly invisible until a glow or scroll progress line crosses it, lighting the intersections it touches.
- **Layered depth stack:** stacked cards (programs, testimonials) use `scale`, `opacity` and `blur` together, never a single property alone, to fake real depth without heavy shadows.
- **Grain:** a 2%-4% film grain overlay (`mix-blend-mode: overlay`) sits above every section to avoid a flat digital look.

## Shapes

Shapes are restrained: thin borders, small radii, and full-pill only for buttons and badges. Nothing about this system is soft or bubbly.

- **Corner radii:** 4px, 8px, 12px, 9999px (buttons/badges only)
- **Borders:** 1px, `rgba(219, 229, 224, 0.10)` default, `rgba(56, 228, 70, 0.30)` on active/highlighted elements
- **Icon treatment:** Linear, thin stroke, technical (think oscilloscope/coordinate marks, not filled glyphs)

## Components

### Buttons
- **Primary:** background `#dbe5e0`, text `#010202`, radius `9999px`, padding `8px 20px`, label typography.
- **Outline:** transparent background, text `#dbe5e0`, border `1px solid var(--border)`, radius `9999px`.
- **Link:** text `#87d179`, no background, underline or arrow on hover only.

### Data & labels
- Technical labels (`label-sm`) accompany every numeric value: coordinates, timestamps, small captions in uppercase with letter-spacing.
- Numbers animate by counting up when they enter the viewport; never show them static inside a rounded card.

### Tables
- Pricing/comparison content lives in one shared grid with thin internal borders; the recommended/active column gets a `border-strong` outline and an animated glow, not a separate floating card.

## Do's and Don'ts

### Do
- Do keep the canvas near-absolute black and let green glow carry emphasis.
- Do let display/title text get cropped by section edges intentionally.
- Do reuse the previous section's background element into the transition (grid, glow, object) instead of hard-cutting.
- Do keep motion heavy, continuous and controlled — `power2`/`power3` easing, scrub-linked to scroll.
- Do pin sections that need to tell a multi-step story (metrics, programs, timeline).

### Don't
- Don't introduce purple/blue gradients or extra accent hues outside the green scale.
- Don't use rounded bento-grid cards or icons-in-circles as a default layout.
- Don't apply glassmorphism to every section — reserve translucency for 3D objects and specific glows.
- Don't use bounce/elastic easing or fast fade-up-everywhere animations.
- Don't center every title; asymmetry is part of the DNA.

## Motion

Motion is heavy, continuous and scroll-driven rather than snappy or bouncy. Most sections are tied to `ScrollTrigger`-style scrub progress instead of one-shot entrance animations.

**Motion Level:** cinematic / scroll-scrubbed

**Durations:** entrance reveals ~0.6-1s; scroll-linked motion follows scroll progress directly (`scrub: 0.8-1.2`)

**Easings:** `power3.out` for entrances, `power2.inOut` for transitions, linear for scrub-driven motion

**Patterns:**
- Mask reveal: `clip-path: inset(100% 0 0 0)` → `inset(0 0 0 0)` for headlines.
- Horizontal drift: `xPercent` sweeps (e.g. 15 → -45) tied to scroll, used for oversized statement lines.
- Stack transitions: inactive card → active card via `scale 0.92→1`, `opacity 0.25→1`, `blur 5px→0`.
- Counters: numeric values tween from 0 to target as scroll progress crosses the section.
- Radar rings: concentric rings scale `0.6→1.2` while fading `0→0.7→0`, staggered.

For `prefers-reduced-motion`: remove pinning and scrub, jump to final states, cap any remaining transition under 200ms.

## 3D & Background Effects

Reconstruct the atmosphere as a layered background system: a near-black base, a barely-visible cartesian grid, a slow volumetric glow, and (where 3D is used) translucent iridescent geometry lit by green rim light.

**Id:** background-system

**Label:** Volumetric Glow + Grid + Grain

**Stack:** CSS (grid, radial-gradient, grain overlay) for most sections; Canvas/WebGL (Three.js / React Three Fiber) only for the hero symbol, the capital object, the certificate, the globe and the footer sculpture.

**Insights:**
- **Scene:** Full-bleed dark canvas per chapter, never a single global 3D scene.
- **Effect:** Radial green haze breathing slowly behind headlines and objects.
- **Primitives:** Thin cartesian grid lines, SVG stroke-drawn curves/paths, translucent `MeshPhysicalMaterial` geometry.
- **Motion:** Slow breathing glow (4-8s loop) + slow object rotation (never fast spin).
- **Interaction:** Minimal — subtle parallax on scroll/pointer, never full pointer-follow.
- **Render:** alpha canvas, DPR clamp (~1.5-2), antialias on, static image fallback for low-power devices.

**Techniques:** Breathing glow, scroll parallax (4-8%), grid ignition on glow crossing, film grain overlay, SVG line drawing (`stroke-dashoffset`), translucent 3D materials with green rim light.
