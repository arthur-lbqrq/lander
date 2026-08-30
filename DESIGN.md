---
name: lander.co
description: Studio site for a freelance landing-page shop — a dark, mono-labeled console aesthetic built for technical credibility and conversion.
colors:
  ink: "#0a0a0a"
  paper: "#fafafa"
  accent: "#2d5cff"
  surface: "#131316"
  line: "#23232a"
  muted: "#68686c"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  container-x: "1.5rem"
  container-x-sm: "2rem"
  container-x-lg: "3rem"
  section-y: "5rem"
  section-y-sm: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "Space Grotesk 500"
    rounded: "{rounded.md}"
    padding: "15px 30px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
  button-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "Space Grotesk 500, 15px"
    rounded: "{rounded.full}"
    padding: "11px 22px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: lander.co

## Overview

**Creative North Star: "The Midnight Console"**

lander.co reads like a dark IDE or terminal at work past midnight: near-black canvas, a single raised panel tone for cards, hairline borders standing in for structure, and JetBrains Mono carrying every functional label the way a CLI carries status text. Space Grotesk handles the few moments that need to speak — headlines, big numbers — with a tight, confident tracking. Signal Blue, the one accent, behaves like an active cursor or a syntax highlight: it marks the word that matters, lights up a gauge needle, and otherwise stays out of the way. Nothing is filled that doesn't need to be; the system earns its technical credibility by looking like something a developer actually built, not something a template generated.

Depth is almost entirely denied. Two background tones (ink for the page, a barely-lighter surface for panels) plus 1px hairline borders do the work that shadows would do elsewhere — the instrument dials (below) are the one exception, earning depth because they're a signature object, not a routine surface. Every other surface stays flat at rest.

Layered onto that base is a page-wide compositional device, **"Painel de Controle Industrial"**: every metric and the process pipeline read as a labeled instrument on one control-panel fascia, rather than as a stat or a list. This is a composition choice, not a new identity — the palette, type, and every rule below still govern it; it adds instrument shapes (circular gauges, a rotary dial) and one narrow depth exception, never a new material, color, or font.

**Navbar + Hero redesign (`design_handoff_navbar_hero/README.md`).** The nav and hero were rebuilt pixel-perfect to a high-fidelity handoff: a floating translucent pill navbar, sized down from the handoff's own literal spec at the user's request (replacing the earlier full-width bar), and a centered hero (replacing the browser-mockup/gauge composition) — its status badge was dropped, since "Agenda aberta para setembro" wasn't a verified business claim. Same tokens throughout — the handoff's colors and type families are identical to this system's — but it retires the browser-mockup illustration, its Overdrive tilt/power-trace moments, the hero's power-on rise sequence, and the Switch Glyph. The handoff's own hero-only light-beam background was tried, then dropped in favor of the Dark Veil showing through the hero too, at the user's request for one continuous site-wide background instead of a hero-only one (see Dark Veil, Hero). The unused components (`hero-beams.tsx` included) stay in the repo rather than deleted (see Overdrive / Switch Glyph below). The handoff also drops icons from every button and CTA sitewide — buttons are text-only now — and introduces one deliberate typography exception (see Typography Named Rules) where nav links and primary buttons read in Inter/Space Grotesk instead of Mono.

**Key Characteristics:**
- Near-black canvas with the Dark Veil's ambient motion as the one background layer, showing through every section including the hero — no per-section background.
- Signal Blue used as a marker (outline, dot, single word, gauge needle) or as a solid hover fill on the system's off-white primary buttons — never as a large-area background at rest.
- JetBrains Mono for true metadata/labels (eyebrows, tags, durations); Space Grotesk for display type and buttons; Inter for reading copy and nav links (see Typography Named Rules for the button/nav exception).
- Flat by default — hairline borders and background-tone shifts carry structure instead of shadows, except the instrument faces' bezel (see Elevation & Depth).
- A single reusable identity motif — the browser-window brand mark with an arrow "landing" inside it — appears at multiple scales (nav, footer, favicon).
- Buttons and links are text-only — no arrows, no icons — across the entire site.
- Metrics, process, and primary actions read as instruments and switches on a shared control-panel fascia (see Components).

## Colors

The palette is almost monochrome by design — near-black, near-white, and one blue used as punctuation, not paint.

### Primary
- **Signal Blue** (`#2d5cff`): The system's only accent. Used for the accent dot in eyebrows, one highlighted word per headline, gauge needles, process-step numbers, and the `.co` in the wordmark — see the No-Fill Accent Rule for its two interaction-only fill exceptions.

### Neutral
- **Near-Black Ink** (`#0a0a0a`): Page background (`body`, `html`). The base of the whole system.
- **Paper White** (`#fafafa`): Primary text and headline color, always referenced through an opacity ladder rather than a separate gray scale (see the Named Rule below).
- **Raised Surface** (`#131316`): Legacy panel background, superseded on content cards by the glass material (see Cards / Containers) but still the base the Gauge and Process Dial faces sit on.
- **Hairline** (`#23232a`): The system's border/divider color on non-glass surfaces — footer rules, section dividers.
- **Console Gray** (`#68686c`): A quieter, desaturated neutral, available for future use; nothing currently depends on it.

### Named Rules
**The One Ink Rule.** There is no separate gray scale for secondary/tertiary text. Every text hierarchy step below full-strength Paper White is expressed as an opacity of `paper` — `/90` for quoted testimonial copy, `/70` for body copy and secondary UI text, `/60` for muted labels and metric captions, `/50` for the quietest timestamps and durations, `/40` and `/25` for de-emphasized icons and empty-state marks. Never introduce a new gray hex; step the opacity instead.

**The No-Fill Accent Rule.** Signal Blue never becomes a background fill at rest. Two standing exceptions, both transient/interaction-only, never part of the static composition: `::selection`, a solid Signal Blue highlight (`globals.css`) triggered by the user's own text selection; and the primary button's `:hover` state (`bg-paper` → `bg-accent`, see Buttons) — the button is off-white (not blue) at rest, and only the pointer's own hover briefly swaps it solid blue.

## Typography

**Display Font:** Space Grotesk (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Body Font:** Inter (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Label/Mono Font:** JetBrains Mono (with `ui-monospace, SFMono-Regular, monospace` fallback)

**Character:** Space Grotesk gives headlines and big numbers a tight, geometric confidence (`-0.03em` to `-0.035em` tracking); Inter stays neutral and highly legible for reading copy; JetBrains Mono turns every functional label — nav links, buttons, eyebrows, tags, durations — into something that reads like console output.

### Hierarchy
- **Display / Hero H1** (500, `clamp(40px, 9vw, 76px)`, `leading-[1.02]`, `tracking-[-0.04em]`): The page's single hero headline; one word is highlighted in Signal Blue. Widened from an earlier 36–60px/`-0.03em` pass to match the navbar+hero handoff.
- **Headline / H2** (500, `text-3xl` → `text-4xl` / 30px–36px, `leading-[1.1]`, `tracking-[-0.03em]`): Section headings, always paired with an Eyebrow above and an optional description below.
- **Subheadline** (400, `19px`, `leading-[1.6]`, `text-[#8A8A8A]`, `max-w-[560px]`): Hero-only, one level lighter than the Body role below it — reserved for the single sentence directly under the H1.
- **Title / H3** (500, `text-lg`–`text-xl` / 18px–20px): Card titles (portfolio client name, process step title).
- **Body** (400, `text-base`–`text-lg` / 16px–18px, ~`max-w-lg`–`max-w-2xl` measure): Section descriptions and card copy, always at `paper/70`.
- **Button Label** (500, Space Grotesk, `15px`/`tracking-[-0.01em]` compact (nav CTA) or `17px` large (hero/CTA-section/404) — see Typography Named Rules for why this is Space Grotesk, not Mono.
- **Nav Link** (500, Inter, `15px`, `text-[#A8A8A8]`): the floating navbar's own link style — see Typography Named Rules.
- **Mobile Menu Link** (500, Space Grotesk, `32px`, `tracking-[-0.02em]`): the full-screen mobile nav panel's link size.
- **Label** (500, `text-[11px]`–`text-sm` / 11px–14px, JetBrains Mono): true metadata — eyebrows, gauge captions, tags, durations, the hero badge's "NOVO" tag — `uppercase`, `tracking-[0.16em]` at the 11px size.

### Named Rules
**The Mono-for-Function Rule.** If a string is a piece of metadata (tag, eyebrow, duration, badge) it is set in JetBrains Mono, usually uppercase with wide tracking. If it's a sentence meant to be read, it's Inter. Display type is reserved for headlines, standalone numbers, and — per the amendment below — buttons. **Amendment (navbar+hero handoff):** nav links and every button (nav CTA, hero's two CTAs, CTA-section, 404) no longer use Mono. Nav links are Inter (matching the handoff's `15px` link spec); buttons are Space Grotesk (matching the handoff's button spec) — both read as first-class UI actions in this pattern, not console-style function labels. Footer links keep the older Mono treatment (untouched by the handoff).

## Layout

Container is `max-w-6xl`, centered, with responsive horizontal padding of `1.5rem` → `2rem` (sm) → `3rem` (lg) — used by every section below the hero. Sections follow a consistent vertical rhythm of `py-24 sm:py-32` (6rem → 8rem). Within a section, the gap from its heading to its first content block is `mt-16`; grids and card padding were widened alongside it (portfolio/testimonial grids `gap-8`, the process box `p-10 sm:p-14`, card interiors `p-7`) — the goal throughout is less information visually adjacent, not a new scale for its own sake.

The hero doesn't use the shared Container — per the navbar+hero handoff it defines its own direct padding (`64px 20px 96px` below ~860px, `96px 32px 140px` at ≥860px) and per-element max-widths (H1 `860px`, subheadline `560px`), centered as a column.

The nav is no longer a full-width fixed bar — see Navigation for the current floating-pill spec.

Grids scale by content density rather than a single fixed column system: the hero is a 2-column split from `lg` (copy + signature illustration), the portfolio grid steps 1 → 2 (`sm`) → 3 (`lg`) columns, and the process steps grid steps 1 → 2 (`sm`) → 4 (`lg`) columns. Mobile is always single-column and stacks top-to-bottom in reading order.

## Elevation & Depth

The system is flat by default — no shadows — but as of the glass-card pass, depth on content cards (portfolio, testimonials, the process box, the CTA box) is now conveyed through translucency and blur against the Dark Veil background, not the earlier solid Raised Surface fill: `bg-white/[0.03]`, `border-white/15`, `backdrop-blur-xl`, `backdrop-brightness-125`. The nav and its mobile drawer use a slightly heavier version of the same glass material (`bg-ink/50` and `bg-ink/70`, no brightness boost) for legibility over busier parts of the veil. The hero's browser-mockup illustration and the instrument dial faces remain solid — they're the system's "physical instrument" objects, not content cards, and stay opaque so the tilt/power-trace moments and dial needles keep a stable, high-contrast face to read against.

### Shadow Vocabulary
- **Hero lift** (`box-shadow: shadow-2xl` at `black/40`) — retired along with the browser-mockup illustration that used it (see Overdrive: Hero Instrument Cluster). No component currently uses this shadow.
- **Instrument bezel** (`inset 0 1px 2px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(250,250,250,0.04)`): A shallow inset rim, scoped to gauge and dial faces only (`gauge.tsx`'s `GAUGE_BEZEL_SHADOW`, reused by `process-dial.tsx`). Reads as a recessed instrument face, never a raised/projected shadow — no other component may use it.

### Named Rules
**The Flat-by-Default Rule.** No card, button, or panel casts a shadow at rest or on hover. If something needs to feel elevated, that's a signal it should be the page's hero object, not a routine surface. **Amendment (approved for the instrument-panel composition):** a circular gauge or rotary dial face may carry the Instrument Bezel above — it is still not a projected/raised shadow, only a recessed rim that lets a dial read as a physical instrument. No other component earns this exception; a button or card that wants to feel "pressable" gets a border-tone change (or, on the pill CTA only, a `-1px` lift), never a bezel. **Amendment (approved for the glass-card pass):** flat still means no shadow, but content cards earn their depth from `backdrop-blur` + translucency against the page's Near-Black Ink instead of a solid fill — still no shadow, still a border-tone change on hover, just a lighter material.

## Shapes

Corner radius scales with a component's weight in the layout: small interactive elements (`button-outline`) use a modest 6px radius; every content card (portfolio, testimonials, the process box, the CTA container) now shares one generous 24px radius, part of the glass-card pass — softer corners read better with a translucent, blurred material than the earlier 16px did; pills, dots, the "coming soon" indicator, and the skip-link use fully rounded (`rounded-full`). Borders are uniformly 1px and solid Hairline, except one deliberately dashed state — the portfolio's "+N em breve" pill — which uses `border-dashed border-white/20` to read as visibly provisional rather than as a normal card. Sections with no real content to show (e.g. testimonials before the first real quote) are omitted entirely rather than rendered as a dashed placeholder — see Components.

The brand mark itself is a fixed-geometry SVG (60×60 viewBox, 14px corner radius, 5px stroke) with a filled top bar and a landing arrow inside — documented as non-negotiable geometry ("não redesenhar; só escalar") that only ever scales, never redraws.

## Components

Buttons, cards, and nav all share the same quiet, structural feel: edges and rules define them, not fills or shading.

### Buttons
Text-only, sitewide — no arrows, no icons, per the navbar+hero handoff. Two shapes depending on context:
- **Pill CTA** (nav only): `rounded-full`, `px-[22px] py-[11px]`, `bg-paper` / `text-ink` at rest, Space Grotesk `15px` `tracking-[-0.01em]`. Hover: `bg-accent`, `text-paper`, `-translate-y-px` — the one button that lifts.
- **Rect CTA** (hero primary, CTA-section, 404 primary): `rounded-xl` (12px), `px-[30px] py-[15px]`, same `bg-paper → bg-accent` hover swap, Space Grotesk `17px`.
- **Rect Ghost** (hero secondary, 404 secondary): same shape/padding as Rect CTA but transparent with a `border-white/[0.14]` outline and `text-[#A8A8A8]`; hover brightens the border to `white/[0.32]` and the text to full `paper` — no background change.
- **Nav Link:** not a button shape at all — `rounded-full`, `px-3.5 py-2.5`, Inter `15px`, `text-[#A8A8A8]`; hover adds a faint `bg-white/[0.06]` fill and brightens to `paper`.
- All transitions `180ms ease-out` on color/background/transform only; no press-scale (the earlier Switch Glyph's press feedback is retired along with the glyph itself — see Switch Glyph below).

### Instrument Gauge
A circular analog dial (`gauge.tsx`) standing in for a stat: a Hairline tick arc, a Signal Blue "good zone" arc past a documented threshold, and a needle that sweeps from rest to its real value once the dial scrolls into view (one authored moment, respects `prefers-reduced-motion` globally). The dial is `aria-hidden`; the literal value and label always render as real text beside it — the needle illustrates the number, it never replaces it as the source of truth. Each dial's needle position is an honestly documented, labeled-in-source mapping onto the arc (e.g. a load time inverted onto a 0–5s scale), never a fabricated extra metric. Used for the three MetricsBar readouts.

### Process Dial
A rotary 4-detent dial (`process-dial.tsx`) sharing the Instrument Gauge's bezel and needle language: on scroll into view, the needle sweeps once through all four detents and rests at the fourth, tracing the fixed Briefing → Prototype → Development → Delivery sequence. Purely illustrative and `aria-hidden` — the real step titles, numbers, and durations live in the text list beside it, so nothing is announced twice.

### Switch Glyph — retired
Removed as part of the navbar+hero handoff, which specifies text-only buttons everywhere. `icons.tsx`'s `SwitchIcon` component and its `switch-pulse` keyframe were deleted (both were fully unused once every call site was cleared) rather than kept dead in the repo, since removing a small, easily-recreated icon is low-risk — unlike the larger hero-mockup/Dark Veil components below, which are kept unused in case a future direction wants them back.

### Motion
- **Navbar power-on** (`nav.tsx`, `globals.css` `navbar-open`): a rounded `clip-path: inset(... round 9999px)` reveal window starts as a circle at the pill's own center (roughly its height in diameter) and opens outward horizontally — top/bottom inset stays 0 throughout, only the side insets shrink — until the full pill is revealed, once, on page load. Went through two earlier passes: a `circle()` clip-path (read as a "ball," not the pill opening) and a `scaleX` transform (visibly distorted the pill's real content — logo, links, CTA — since `transform` resizes everything inside it, unlike `clip-path`, which only reveals/hides). This version keeps the content static and undistorted throughout, matches the pill's own rounded-full curvature in the reveal shape itself, and opens specifically horizontally rather than radially. 1.5s, `cubic-bezier(0.65, 0, 0.35, 1)` (ease-in-out, shared with Panel Power-Up below) rather than the site's usual ease-out — at this length a symmetrical curve reads as fluid, where a fast-start ease-out would read as trailing off slowly.
- **Sibling-stagger reveal** (`reveal.tsx`): reserved for genuine lists only — Portfolio cards and Process steps — 60ms apart, capped, triggered once per item on scroll into view. Every other section (Testimonials, CTA, Footer) has no scroll-entrance motion; a blanket "everything fades up" was deliberately rejected. Defaults to fully visible — the hidden state is applied by JS after mount, never server-rendered, so a blocked script never hides content.
- **Drawer open** (`nav.tsx`): the mobile menu (now a full-screen panel, not a dropdown drawer) rises and fades in (`drawer-in`) each time it mounts, explaining the state change instead of an instant swap. Closing stays instant (unmount).
- **Portfolio card hover** (`portfolio-card.tsx`): the whole card lifts `-6px` and its border brightens; the image scales to `1.06`; the lit dot scales to `1.25`; the description brightens from `paper/70` to `paper/85`; and a soft cursor-tracked spotlight (a `radial-gradient` positioned via CSS custom properties set on `pointermove`) sweeps across the card. Desktop/fine-pointer only (`hover: hover` + `pointer: fine`, same gate as the retired Instrument Cluster Tilt) — touch devices get the plain hover state, no spotlight, since there's no cursor to track.
- **Instrument settle** (`gauge.tsx`, `globals.css` `dial-sweep`): the Gauge needle and Process Dial needle both end their travel with a small overshoot-past-value before settling back (`cubic-bezier(0.34, 1.56, 0.64, 1)` on the Gauge; an explicit 96°→90° step on the dial's keyframe) — a calibrated physical instrument has spring and mass, so it doesn't just glide to a stop like a UI tween. The one deliberate exception to "no bounce/elastic easing": grounded in the instrument-panel mechanism itself, not decorative, and a single restrained overshoot rather than an oscillating spring.

All motion above is `transform`/`opacity`/`color` only, and every keyframe/transition duration collapses under the global `prefers-reduced-motion: reduce` rule in `globals.css` — state changes stay legible, movement is removed.

### Overdrive: Hero Instrument Cluster — retired
The hero no longer has a browser-mockup illustration; the navbar+hero handoff replaced it with the centered badge/H1/subheadline/CTA composition above. The Instrument Cluster Tilt (`hero-mockup-stage.tsx`), Panel Power-Up (`power-trace-frame.tsx`, `globals.css` `power-trace`), and `browser-mockup.tsx` itself are unused but kept in the repo — none are imported by any page — in case a future direction wants the mockup back. The hero's power-on rise sequence (`hero-rise` keyframe) was deleted outright (not kept unused) since the handoff's hero has no entrance choreography at all.

### Dark Veil (Site-Wide Background)
A single ambient WebGL backdrop (`dark-veil-background.tsx`, wrapping vendored `DarkVeil.jsx`/`DarkVeil.css` from react-bits) sits behind the entire page, `fixed inset-0` with a negative z-index, rendered once in `layout.tsx`. Briefly removed during the navbar+hero handoff pass (the new hero has its own dedicated light-beam background, so the veil felt redundant there) and then restored, since the rest of the page — the glass cards especially — reads better with the veil's motion showing through than against plain flat Ink. The hero's own `bg-ink` fill still opaquely covers the veil in that one section (the light beams are its background instead); everywhere else, the veil shows through the glass cards, the nav's translucent pill, and the gaps between sections.

- **A dialed-in preset, applied verbatim.** `hueShift={20}`, `speed={1}`, `resolutionScale={1.25}`, noise/scanline/warp off — the shader's own hue, not locked to a single accent. `opacity-[0.3]` keeps it a backdrop, not the page's subject.
- **`resolutionScale` above 1, made safe.** ogl's `Renderer.setSize()` writes the canvas's CSS width/height as inline pixel styles derived from that same scaled value (overriding DarkVeil.css's `width:100%;height:100%`) — left alone, `1.25` would overflow the viewport-filling container instead of just supersampling for a crisper render. Fixed with an `!important` utility scoped to this one instance (`[&_canvas]:w-full! [&_canvas]:h-full!`) that forces the CSS box back to 100%×100% without touching the vendored `DarkVeil.css`.
- **Respects this project's motion/perf discipline, which the vendored component doesn't on its own:** fully skipped under `prefers-reduced-motion`, and unmounted (stopping its uncapped `requestAnimationFrame` loop) whenever the tab is hidden via `visibilitychange`.
- The vendored `kokonutui/flow-field.tsx` (the veil's predecessor) stays unused in the repo.

### Browser Surfaces
- **Scrollbar:** themed to the Ink/Hairline pairing (`scrollbar-color` for Firefox, `::-webkit-scrollbar*` for Chrome/Safari/Edge) — thin, with the thumb inset by a 2px Ink border so it reads as a groove, not a default gray bar. Lightens to Console Gray on hover.
- **Selection and focus:** documented under their own Named Rules above (`::selection`'s No-Fill Accent Rule exception; `:focus-visible`'s accent outline).

### Error / Recovery
`src/app/not-found.tsx` — the one error state on the site, styled instead of left as Next.js's bare default. Reuses Nav/Footer/Container so it never feels like a different product, leads with the problem in plain language ("Essa página não está no ar"), and offers two real recoveries (back to the homepage; a WhatsApp message pre-filled with context) — no jokes, no invented content. The signature detail: a single Gauge at `fraction={0}`, `goodFrom={1}`, labeled "Sem sinal" — its needle never sweeps even once the dial scrolls into view, so the instrument itself communicates "nothing to read here" before the copy does, reusing an existing component rather than inventing new error-page furniture.

### Cards / Containers
- **Corner Style:** 24px radius, uniform across every content card.
- **Background:** Glass — `bg-white/[0.03]` + `backdrop-blur-xl` + `backdrop-brightness-125`, tuned to let the Dark Veil background's motion show through brighter and more transparent than the earlier solid Raised Surface fill. No fill for provisional content (see Coming-Soon Indicator below).
- **Shadow Strategy:** None — see Elevation & Depth. Hover state changes `border-white/15` to `border-white/25`, not shadow.
- **Border:** 1px solid `white/15` (a lighter hairline than the page's own Hairline token, tuned for the translucent fill).
- **Internal Padding:** 28px (`p-7`) for standard cards; 40–96px (`px-8 py-20` / `sm:px-16 sm:py-24`) for the single large CTA container.

### Portfolio Card
Each live case's tag line leads with a small filled Signal Blue dot (6px, `rounded-full`) — the panel-selector reading: a lit case is an active/selected channel, the tag is its label. The dot is decorative (`aria-hidden`) and never appears on the Coming-Soon Indicator, which stays deliberately unlit. The grid gap is wider than the rest of the system's card grids — `gap-10 lg:gap-12` vs. `gap-8` elsewhere — so the two (soon more) case cards read as distinct, separated pieces rather than a dense block.

### Coming-Soon Indicator
Unfinished/pipeline content never takes a full card slot next to real content — it would visually compete with it at equal weight. Instead it collapses into one small `rounded-full` pill with a dashed `white/20` border, a muted (`text-paper/25`) Brand Mark, and a Mono `text-xs` count ("+N em breve"). The portfolio grid uses this for upcoming case studies rather than rendering one dashed ghost card per pending item.

### Empty Sections
A section with zero real content to show (e.g. Testimonials before the first real quote) renders nothing — the component returns `null` and any nav/footer link pointing at it is omitted too — rather than shipping a "coming soon" placeholder in that section's own space. The section reappears automatically, with its nav/footer links, the moment real content exists.

### Navigation
Floating pill (`design_handoff_navbar_hero/README.md`), not a full-width bar. `max-w-[880px]`, centered, `rounded-full`, `bg-[rgba(16,16,18,.55)]` + `border-white/10` + `blur(18px) saturate(1.2)` at rest; scrolling past 24px darkens the fill to `rgba(16,16,18,.78)` and the border to `white/16` over `240ms` (`isScrolled` state, rAF-throttled scroll listener). Sized down from the handoff's own literal spec (`py-2 pr-3 pl-4` pill padding, 22px brand mark, 17px wordmark, `px-[18px] py-[9px]` CTA) at the user's request — proportions kept, just smaller throughout. Desktop (`≥860px`) shows Trabalhos/Processo (+ Depoimentos when real testimonials exist) as Nav Links, then the pill CTA. Below `860px` the links hide, replaced by a hamburger button that opens a full-screen Ink panel with the same links at Mobile Menu Link size (32px); the pill CTA stays visible at all sizes. The panel closes on `Escape`, on clicking outside it, or on navigating, and locks body scroll while open.

### Hero
Centered column, not the earlier headline+mockup split (`design_handoff_navbar_hero/README.md`, recreated pixel-perfect, minus the status badge — removed at the user's request as an unverified availability claim). Order: Display H1 with one Signal Blue word → Subheadline → two CTAs (Rect CTA + Rect Ghost, both text-only). `min-h-[720px]`, no background of its own — the Dark Veil (see Dark Veil) shows through here exactly like every other section, at the user's request for one continuous site-wide background rather than a hero-only one. The handoff's own light-beam background (`hero-beams.tsx`) is unused as a result, kept in the repo in case a future direction wants it back. Top padding is generous (`pt-32`, `pt-48` from `860px`) to put clear air between the floating nav pill and the H1.

### Eyebrow (signature label pattern)
A small Mono `uppercase` label (`text-[11px]`, `tracking-[0.16em]`) preceded by a `6px` Signal Blue dot. Appears above every section headline and the hero headline; the accent dot carries the color so the label text itself can stay at `paper/70` (kept there deliberately — Signal Blue on Ink only clears AA contrast at large text sizes, so small label text stays neutral and the dot alone carries the accent).

### Brand Mark (signature component)
A browser-window glyph (rounded square outline + filled top bar) with a landing arrow inside, read literally as "landing." Fixed, non-redrawable geometry, used at two scales: small in the nav/footer wordmark (26×26 in the new pill nav, `h-6 w-6` in the footer), and muted/ghost in the portfolio's coming-soon pill (`h-4 w-4`, `text-paper/25`).

## Do's and Don'ts

### Do:
- **Do** treat text hierarchy as opacity steps on Paper White (`/90` → `/25`), not as a separate gray palette.
- **Do** set true metadata/label/tag strings in JetBrains Mono, uppercase with wide tracking; set nav links in Inter and buttons in Space Grotesk (see Typography Named Rules).
- **Do** keep every button and link text-only — no arrows, no decorative icons.
- **Do** keep Signal Blue rare and marker-like at rest — one accent word, an outline, a dot, a needle — reserving a solid fill for the primary button's `:hover` and `::selection` only.
- **Do** keep the interface flat; use background-tone and border changes, not shadows, for hover/state feedback.
- **Do** scale the brand mark rather than redrawing its geometry.
- **Do** keep the Instrument Bezel scoped to gauge/dial faces only, and keep every dial `aria-hidden` with the real value or label rendered as ordinary text beside it.
- **Do** document how a gauge's needle fraction was derived (the label/comment stays with the data, in `metrics.ts` or equivalent) — a dial reinforces a real, sourced number, it never invents one.

### Don't:
- **Don't** give a button a solid Signal Blue fill at rest — it's off-white at rest, blue only on hover.
- **Don't** add drop shadows to routine cards, buttons, or panels; the Instrument Bezel is the system's only depth exception now that the hero browser-mockup is retired.
- **Don't** set body copy or reading paragraphs in JetBrains Mono, or labels/metadata in Inter — the font choice is functional, not aesthetic preference.
- **Don't** fabricate a new neutral gray hex for a text-hierarchy step; step Paper White's opacity instead.
- **Don't** let a decorative dial's caption or label duplicate text a screen reader already gets from real content nearby — hide the decorative copy instead (see Process Dial).
