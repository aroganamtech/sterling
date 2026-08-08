# Sterling Ventilation Asia Pacific Pte Ltd — Website

React + Vite + Tailwind CSS + React Router + Three.js / React Three Fiber + GSAP + Framer Motion.
Positioned as an **international engineering
consultancy / life safety systems company** (Colt, Halton, Kingspan Light + Air, TROX), not a
product catalogue.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

Node 18+ required.

---

## Your two images

| Where it is used | File | Notes |
| --- | --- | --- |
| Hero background (full screen) | `src/assets/hero/fire.jpg`, `fire-1400.jpg`, `fire-blur.jpg` | Your industrial fire image — the base visual language for the whole site. Also reused at low opacity behind every inner page hero and CTA band. |
| Logo (header, footer, About page) | `src/assets/logo-mark.png`, `logo-mark-light.png`, `logo-lockup*.png`, `logo-full.png` | Generated from your uploaded logo. The white background has been removed (transparent PNG) and a light-on-dark variant created for the footer. The header pairs the **SV** mark with live HTML text so the wordmark stays crisp at any size. |
| 3D smoke background | `src/assets/smoke-texture.jpg` | Your smoke photograph, used as the particle texture in `src/components/SmokeCanvas.jsx`. |

### How the 3D smoke works

`SmokeCanvas.jsx` builds a real 3D particle field. Each puff has `x, y, z` coordinates and is
projected through a pinhole camera (`scale = focal / (focal + z)`), so near puffs are large, bright
and fast while distant ones are small and faint. Sprites are cut from random regions of your smoke
photograph, masked with a radial falloff, and composited additively — the dark areas of the photo
contribute nothing, so the puffs blend seamlessly. Pointer movement shifts the camera, producing
true parallax between depth layers. `prefers-reduced-motion` renders a single static frame.

Props: `density`, `speed`, `intensity`, `interactive`. Used at full strength on the home hero and
dialled down on inner page heroes and CTA bands.

---

## Edit these first

| File | What is in it |
| --- | --- |
| `src/data/company.js` | Company name, strapline, **metrics/counters**, **office addresses, phones, emails**, map embeds, territories. All placeholders are marked `// TODO`. |
| `src/data/solutions.js` | The 8 system families — overview copy, applications, benefits, options, specs, standards. |
| `src/data/engineering.js` | The 6 engineering disciplines + the 10-stage process. |
| `src/data/industries.js` | The 15 industry sectors — overview, challenges, recommended systems, standards. |
| `src/data/projects.js` | Case studies. **Currently representative placeholders** — replace with verified records and obtain client consent before publishing. |
| `src/data/resources.js` | Standards families, compliance matrix, technical library, downloads, FAQ, news, vacancies, enquiry routing. |
| `src/data/products.js` | **Products module** — 3 categories, 16 products, full specs, features, applications, benefits, certifications, related products and per-product SEO. |
| `src/data/navigation.js` | Menu structure (derived automatically from solutions, products + engineering). |

Adding a solution, product, industry or project to its data file automatically creates its page, its
menu entry, its cards on the home page and its cross-links — no routing changes needed.

---

## Site map

```
/                                  Home
/about                             Company
/about/vision-mission
/about/leadership
/about/global-presence
/solutions                         Index + solution finder
/solutions/:slug                   8 system pages
/products                          Index + expandable category lists
/products/:slug                    16 product landing pages
                                   e.g. /products/smoke-curtain
                                        /products/smoke-ventilator
                                        /products/window-actuator
/engineering                       Index + CFD comparison
/engineering/:slug                 6 discipline pages
/industries                        Index + compliance matrix
/industries/:slug                  15 sector pages
/projects                          Index (filterable) + coverage map
/projects/:slug                    Case studies
/resources                         Hub
/resources/standards               EN / NFPA / BS / ASHRAE / IBC / SCDF
/resources/library
/resources/downloads
/resources/faq
/resources/news
/careers
/contact                           Routed enquiry form
*                                  404
```

---

## The premium / interactive pieces

| Component | What it does |
| --- | --- |
| `SmokeCanvas` | 3D depth-projected smoke field built from your photograph (hero backgrounds). |
| `SystemDiagram` | Interactive smoke control architecture — click a node to see detection, curtains, ventilators, extraction, make-up air, pressurisation, car park and control. Animated cause-and-effect links. |
| `CFDCompare` | Drag-to-compare before/after smoke scenario (unmanaged vs engineered), rendered as animated SVG. |
| `SolutionFinder` | Pick a building type, get the recommended systems and governing standards. |
| `ComplianceMatrix` | Interactive standards-by-building-type matrix. |
| `CoverageMap` | Animated regional map with connection arcs from the Singapore hub. |
| `ProcessFlow` | Animated 10-stage engineering workflow. |
| `Counter` | Performance metric counters that count up on scroll. |
| `Header` | Full mega menu with descriptions, plus a mobile drawer. |

---

## The cinematic layer

A visual-only upgrade — no section, heading, product or link was changed. Everything below sits
underneath or around the existing content.

### The hero — five real layers, one GPU scene

`src/components/hero/CinematicHero.jsx` is the full-viewport (`100svh`) shell.
`HeroStage.jsx` renders the scene with React Three Fiber; because everything lives in one
perspective camera, the parallax between layers is genuine depth, not stacked CSS translations.

| z | Layer | What it does |
| --- | --- | --- |
| −7 | **1 · Fire** | The photograph on a shader plane |
| −7 | **4 · Heat distortion** | Same shader: rising fbm noise offsets the UVs, masked to the burning pixels only, so the shimmer appears above the flames and nowhere else |
| −6.2 | **Dynamic light** | Three additive orange lobes whose intensity breathes on a slow multi-sine cycle |
| −4.6 | **2 · Volumetric smoke** | Instanced billboards cut from your smoke photo, drifting upward, each with its own rotation and a "breathing" density term |
| −3.4 | **3 · Embers** | Hundreds of GPU points — random size, opacity, speed and phase; they rise, wander on sine paths, flicker, and the elongated sprites tumble as they go |
| −1.15 | **5 · Foreground smoke** | Larger, closer, slower puffs that pass in front of everything |

The fire itself stays still — only a ±4.5% brightness flicker applied to warm pixels, plus the
light pulse. Nothing whips around.

**Camera.** A lissajous drift on two slow frequencies plus a continuous, barely-perceptible
push-in. Pointer position nudges the camera and each layer by a different amount; all of it eases
through a shared spring, so nothing snaps.

**Scroll.** The background fades and lifts, smoke thins out, embers keep floating, and the hero
copy rises and dissolves — driven by a `--hero-progress` CSS variable so the DOM content and the
WebGL scene stay in lockstep.

### Performance

- **Signals, not state.** Pointer, scroll and hero progress live in one `requestAnimationFrame`
  loop (`src/lib/viewportSignals.js`) and are read directly by the shaders and by CSS variables.
  Moving the mouse triggers **zero React re-renders**.
- **Offscreen work stops.** The R3F loop switches to `frameloop="never"` once the hero leaves the
  viewport, and every 2D `SmokeCanvas` pauses on an IntersectionObserver. Measured in this
  container: **16.7 ms/frame — a flat 60fps — everywhere below the hero**.
- **Adaptive quality.** If a device can't hold 60fps, `AdaptiveQuality` steps the render scale down
  (1.75 → 1 → 0.75) and then halves the ember and foreground-smoke counts, rather than stuttering.
- **Device tiers.** Particle counts and DPR are chosen up front from core count, memory and screen
  width.
- Everything animated is `transform`, `opacity` or `filter` — all GPU-composited.
- The hero image ships at three sizes with a 32px blurred placeholder painted on first frame; the
  WebGL bundle is lazy-loaded and never blocks first paint.

### Fallbacks

No WebGL, or `prefers-reduced-motion: reduce` → a CSS version of the same five layers (or a still
frame under reduced motion). All GSAP reveals resolve to visible immediately. The site is fully
usable and still looks the part.

### Section transitions

`src/components/Reveal.jsx` is now GSAP + ScrollTrigger — fade plus upward motion on an `expo.out`
ease, with children marked `data-stagger` cascading automatically. Because every page already used
this component, the whole site inherited the upgrade without a single page edit. `RevealGroup` is
available where a grid should cascade child-by-child.

### Chrome

- **Navbar** — glassmorphism (`.glass` / `.glass-dark`): 22px backdrop blur, saturation boost,
  inner specular highlight, rounded lower corners and a thin ember-tinted sheen along the edge.
  The mega menu and mobile drawer use the same material.
- **Buttons** — lift on hover, a specular sweep across the face, layered warm glow, and an animated
  gradient border on `.btn-ghost`.
- **Typography** — `.text-cine` (soft white glow) and `.text-cine-warm` (ember glow) on hero and
  dark-section headings.
- **Inner page heroes** and CTA bands carry the fire image at low opacity behind the existing smoke
  canvas, so the language is consistent site-wide.

---

## The Products module

A self-contained module in an **orange / black / white** engineering theme, deliberately distinct
from the navy + red used across the rest of the site. Header and footer stay consistent, so it reads
as a product sub-brand rather than a different website.

### Structure

```
/products                        three expandable category lists + filterable catalogue
/products/:slug                  product landing page
```

Categories: **Natural Ventilation** (5) · **Smoke Ventilation** (6) · **Mechanical Ventilation** (5).

Every landing page carries: breadcrumb navigation · large image gallery with thumbnails, keyboard
navigation and a lightbox · product name and short description · feature cards · tabbed technical
specifications · applications · benefits · certifications · related products · contact CTA.

### The two primary CTAs

**1. AI Assistant** (`src/components/products/AIAssistantModal.jsx`)

Opens a chat modal with the current product as context. Suggested prompts, typing indicator,
in-answer links to other pages, keyboard dismiss, focus handling.

Answers come from `src/lib/aiAssistant.js`, which today runs a rules-based knowledge base built from
`products.js` — no backend, no key, works offline. To connect a real model:

```bash
# .env
VITE_ASSISTANT_ENDPOINT=https://your-api.example.com/assistant
```

Your endpoint receives `{ message, history, context }` and returns `{ reply }`. `context` already
contains the full catalogue plus the focused product's specs and certifications, ready to use as
system grounding. If the endpoint is absent or errors, the assistant silently falls back to the
local knowledge base, and the header badge switches between **Live model** and **Demo mode**.

> Never put an API key in this file or any client bundle — proxy through your own endpoint.

**2. Download Brochure** (`src/components/products/BrochureButton.jsx`)

Fetches `public/brochures/sterling-ventilation-product-brochure.pdf` as a blob and saves it with a
product-specific filename (e.g. `Sterling-Ventilation-SV-SC-Smoke-Curtain-Brochure.pdf`), falling
back to opening it in a new tab. The included 4-page PDF is a **demo** — replace it with the
approved brochure, or generate one per product and switch `BROCHURE_URL` to
`product.brochure`.

### Product imagery

48 technical-illustration SVGs (3 views per product: elevation, installed section, detail with
callouts) live in `src/assets/products/` and are resolved by `src/lib/productImages.js`.

They are **placeholders in a blueprint style** — deliberately schematic rather than pretending to be
photography. To swap in real product photos, drop `<slug>-elevation.jpg`, `<slug>-section.jpg` and
`<slug>-detail.jpg` into the same folder; the glob already accepts jpg/png/webp and nothing else
needs to change.

### Reusable components

| Component | Purpose |
| --- | --- |
| `CategoryAccordion` | Expandable product list per category, animated height |
| `ProductCard` | Catalogue card with hover lift and cover image |
| `ProductGallery` | Gallery, thumbnails, arrow-key navigation, lightbox |
| `LazyImage` | Native lazy loading, async decode, skeleton, fade-in, error state |
| `SpecTable` | Tabbed specification groups with an animated tab indicator |
| `ProductSections` | `FeatureCards`, `ApplicationsGrid`, `BenefitsList`, `CertificationStrip`, `RelatedProducts`, `PSection`, `PHead` |
| `AIAssistantModal` | Chat modal |
| `BrochureButton` | Blob download with per-product filename |
| `Seo` | Title, description, keywords, canonical, Open Graph, JSON-LD — no extra dependency |

### Motion & performance

Framer Motion presets are centralised in `src/lib/motion.js` (`fadeUp`, `stagger`, `scaleIn`,
`modalPanel`, and an `inView` spread used by every section) so animation stays consistent. Routes
are code-split with `React.lazy`, so the Framer Motion bundle only loads when someone opens the
Products module.

---

## Still to wire up before launch

1. **Contact form backend** — `src/pages/Contact.jsx` logs the payload and shows the routing team.
   Point it at your API, CRM or a form service. Routing rules live in `enquiryRouting`
   (`src/data/resources.js`).
2. **Download buttons** — `src/pages/resources/Downloads.jsx` and `TechnicalLibrary.jsx` are
   inert. Link to the real assets or a gated form.
3. **News articles** — the listing is built; individual article routes/CMS are not.
4. **Leadership** — replace `[Name]` placeholders and add photographs
   (`src/pages/about/Leadership.jsx`).
5. **Project photography** — `ProjectDetail.jsx` renders gradient placeholder tiles.
6. **Google Maps** — the embeds in `company.js` point at generic city searches; swap in the real
   office locations.
7. **Metrics** — confirm the counters in `company.js` before publishing.
8. **AI Assistant** — set `VITE_ASSISTANT_ENDPOINT` to move it out of demo mode (see above).
9. **Product brochures & photography** — replace the demo PDF and the placeholder SVG illustrations.
10. **Product data** — model numbers (SV-…), performance figures and lead times are indicative;
    confirm each against the actual supplied equipment before publishing.

---

## Deploying

`npm run build` produces a static `dist/`. Because this is a single-page app with client-side
routing, the host must rewrite unknown paths to `index.html`:

- **Netlify** — `public/_redirects` is already included
- **Vercel** — the "Vite" framework preset handles it automatically
- **Apache / Nginx** — add the standard SPA fallback rule

---

## Design system

- **Navy** `navy.*` — structure, dark sections, headings (drawn from the logo)
- **Signal red** `signal.*` — accent, CTAs, active states (drawn from the logo)
- **Steel** `steel.*` — body copy, borders, muted surfaces
- **Ember** `ember.*` + **Ink** `ink.*` — the orange / black / white palette, scoped to the
  Products module (`.p-eyebrow`, `.btn-ember`, `.btn-ink`, `.btn-ember-outline`, `.p-card`, `.p-chip`)
- Display type: **Barlow Condensed** (uppercase headings) · Body: **Inter**
- Square corners throughout, hairline `gap-px` grids, generous whitespace — deliberately
  engineering-document in feel rather than consumer-SaaS.

Tokens live in `tailwind.config.js`; component classes (`.btn-primary`, `.card`, `.eyebrow`,
`.shell`, `.field`) in `src/index.css`.
