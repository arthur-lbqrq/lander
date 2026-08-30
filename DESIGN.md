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
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "rgba(45, 92, 255, 0.1)"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: lander.co

## Overview

**Creative North Star: "The Midnight Console"**

lander.co reads like a dark IDE or terminal at work past midnight: near-black canvas, a single raised panel tone for cards, hairline borders standing in for structure, and JetBrains Mono carrying every functional label the way a CLI carries status text. Space Grotesk handles the few moments that need to speak — headlines, big numbers — with a tight, confident tracking. Signal Blue, the one accent, behaves like an active cursor or a syntax highlight: it marks the word that matters, traces a button's edge, blinks once in the hero mockup's address bar, and otherwise stays out of the way. Nothing is filled that doesn't need to be; the system earns its technical credibility by looking like something a developer actually built, not something a template generated.

Depth is almost entirely denied. Two background tones (ink for the page, a barely-lighter surface for panels) plus 1px hairline borders do the work that shadows would do elsewhere — the hero's signature browser-mockup illustration and the instrument dials (below) are the only exceptions, each earning depth because each is a signature object, not a routine surface. Every other surface stays flat at rest.

Layered onto that base is a page-wide compositional device, **"Painel de Controle Industrial"**: every metric, the process pipeline, and every primary action reads as a labeled instrument or switch on one control-panel fascia, rather than as a stat, a list, or a link. This is a composition choice, not a new identity — the palette, type, and every rule below still govern it; it adds instrument shapes (circular gauges, a rotary dial, a switch glyph) and one narrow depth exception, never a new material, color, or font.

**Key Characteristics:**
- Near-black canvas with a single raised-surface tone for panels — no gradient backgrounds.
- Signal Blue used as a marker (outline, dot, single word, blinking cursor, gauge needle), never as a fill.
- JetBrains Mono for every functional/label string; Space Grotesk for display type; Inter for reading copy.
- Flat by default — hairline borders and background-tone shifts carry structure instead of shadows, except the instrument faces' bezel (see Elevation & Depth).
- A single reusable identity motif — the browser-window brand mark with an arrow "landing" inside it — appears at multiple scales (nav, footer, favicon, hero illustration).
- Metrics, process, and primary actions read as instruments and switches on a shared control-panel fascia (see Components).

## Colors

The palette is almost monochrome by design — near-black, near-white, and one blue used as punctuation, not paint.

### Primary
- **Signal Blue** (`#2d5cff`): The system's only accent. Used for button/badge outlines, the accent dot in eyebrows, one highlighted word per headline, the blinking cursor in the hero mockup, process-step numbers, and the `.co` in the wordmark. Reserved for marking what matters — never a background fill except a faint 10% tint on hover (`rgba(45, 92, 255, 0.1)`) and a 30%-opacity badge border.

### Neutral
- **Near-Black Ink** (`#0a0a0a`): Page background (`body`, `html`). The base of the whole system.
- **Paper White** (`#fafafa`): Primary text and headline color, always referenced through an opacity ladder rather than a separate gray scale (see the Named Rule below).
- **Raised Surface** (`#131316`): Background for panels that sit "above" the page — cards, the metrics bar, the CTA container, the mobile nav sheet's chip.
- **Hairline** (`#23232a`): The system's only border/divider color — nav bottom edge, card borders, section rules (`border-t`/`border-y`).
- **Console Gray** (`#68686c`): A quieter, desaturated neutral used inside the signature browser-mockup illustration (dot markers, the landing line) rather than in UI chrome.

### Named Rules
**The One Ink Rule.** There is no separate gray scale for secondary/tertiary text. Every text hierarchy step below full-strength Paper White is expressed as an opacity of `paper` — `/90` for quoted testimonial copy, `/70` for body copy and secondary UI text, `/60` for muted labels and metric captions, `/50` for the quietest timestamps and durations, `/40` and `/25` for de-emphasized icons and empty-state marks. Never introduce a new gray hex; step the opacity instead.

**The No-Fill Accent Rule.** Signal Blue never becomes a background fill outside of a 10% hover tint. Primary actions are always outline buttons with a Signal Blue border on a transparent/ink background — a solid blue button would break the system's restraint. The one standing exception is `::selection`, a solid Signal Blue highlight (`globals.css`): browser text selection is transient, user-triggered, and never part of the static composition, so it doesn't compete with the restraint the rule protects.

## Typography

**Display Font:** Space Grotesk (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Body Font:** Inter (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Label/Mono Font:** JetBrains Mono (with `ui-monospace, SFMono-Regular, monospace` fallback)

**Character:** Space Grotesk gives headlines and big numbers a tight, geometric confidence (`-0.03em` to `-0.035em` tracking); Inter stays neutral and highly legible for reading copy; JetBrains Mono turns every functional label — nav links, buttons, eyebrows, tags, durations — into something that reads like console output.

### Hierarchy
- **Display / Hero H1** (500, `text-4xl` → `text-6xl` / 36px–60px, `leading-[1.05]`, `tracking-[-0.03em]`–`[-0.035em]`): The page's single hero headline; one word is highlighted in Signal Blue.
- **Headline / H2** (500, `text-3xl` → `text-4xl` / 30px–36px, `leading-[1.1]`, `tracking-[-0.03em]`): Section headings, always paired with an Eyebrow above and an optional description below.
- **Title / H3** (500, `text-lg`–`text-xl` / 18px–20px): Card titles (portfolio client name, process step title).
- **Body** (400, `text-base`–`text-lg` / 16px–18px, ~`max-w-lg`–`max-w-2xl` measure): Hero paragraph and section descriptions, always at `paper/70`.
- **Label** (500, `text-[11px]`–`text-sm` / 11px–14px, always JetBrains Mono): splits into two consistently-applied sub-styles rather than one shared treatment. **Metadata Label** (`uppercase`, `tracking-[0.16em]` at the 11px size — eyebrows, gauge captions, tags, durations) reads as annotation. **Action Label** (sentence case, no added tracking, `text-sm` — nav links, button text, footer nav/contact links) reads as something you do, not something you read about. Both are Label role; the case/tracking split is the signal for "metadata vs. action," not a drift to reconcile.

### Named Rules
**The Mono-for-Function Rule.** If a string is a label, action, or piece of metadata (nav item, button, tag, eyebrow, duration, footer heading) it is set in JetBrains Mono, usually uppercase with wide tracking. If it's a sentence meant to be read, it's Inter. Display type is reserved for headlines and standalone numbers.

## Layout

Container is `max-w-6xl`, centered, with responsive horizontal padding of `1.5rem` → `2rem` (sm) → `3rem` (lg). Sections follow a consistent vertical rhythm of `py-20 sm:py-28` (5rem → 7rem); the hero is the one exception, offset for the fixed nav (`pt-28 sm:pt-36`, `pb-20 sm:pb-28`).

The fixed header is `h-16` on mobile, `h-20` from `sm` up, with a translucent ink background (`bg-ink/80`) and backdrop blur so content scrolls beneath it; a hairline bottom border separates it from the page.

Grids scale by content density rather than a single fixed column system: the hero is a 2-column split from `lg` (copy + signature illustration), the portfolio grid steps 1 → 2 (`sm`) → 3 (`lg`) columns, and the process steps grid steps 1 → 2 (`sm`) → 4 (`lg`) columns. Mobile is always single-column and stacks top-to-bottom in reading order.

## Elevation & Depth

The system is flat by default — no shadows — but as of the glass-card pass, depth on content cards (portfolio, testimonials, the process box, the CTA box) is now conveyed through translucency and blur against the Dark Veil background, not the earlier solid Raised Surface fill: `bg-white/[0.04]`, `border-white/10`, `backdrop-blur-xl`. The nav and its mobile drawer use the same glass material at a slightly higher fill (`bg-ink/50` and `bg-ink/70`) for legibility over busier parts of the veil. The hero's browser-mockup illustration and the instrument dial faces remain solid — they're the system's "physical instrument" objects, not content cards, and stay opaque so the tilt/power-trace moments and dial needles keep a stable, high-contrast face to read against.

### Shadow Vocabulary
- **Hero lift** (`box-shadow: shadow-2xl` at `black/40`): Reserved for the hero's browser-mockup illustration only — the system's one hero object.
- **Instrument bezel** (`inset 0 1px 2px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(250,250,250,0.04)`): A shallow inset rim, scoped to gauge and dial faces only (`gauge.tsx`'s `GAUGE_BEZEL_SHADOW`, reused by `process-dial.tsx`). Reads as a recessed instrument face, never a raised/projected shadow — no other component may use it.

### Named Rules
**The Flat-by-Default Rule.** No card, button, or panel casts a shadow at rest or on hover. If something needs to feel elevated, that's a signal it should be the page's hero object, not a routine surface. **Amendment (approved for the instrument-panel composition):** a circular gauge or rotary dial face may carry the Instrument Bezel above — it is still not a projected/raised shadow, only a recessed rim that lets a dial read as a physical instrument. No other component earns this exception; a button or card that wants to feel "pressable" gets the switch glyph or a border-tone change, never a bezel. **Amendment (approved for the glass-card pass):** flat still means no shadow, but content cards now earn their depth from `backdrop-blur` + translucency against the Dark Veil instead of a solid fill — still no shadow, still a border-tone change on hover, just a lighter material.

## Shapes

Corner radius scales with a component's weight in the layout: small interactive elements (`button-outline`) use a modest 6px radius; every content card (portfolio, testimonials, the process box, the CTA container) now shares one generous 24px radius, part of the glass-card pass — softer corners read better with a translucent, blurred material than the earlier 16px did; pills, dots, the "coming soon" indicator, and the skip-link use fully rounded (`rounded-full`). Borders are uniformly 1px and solid Hairline, except one deliberately dashed state — the portfolio's "+N em breve" pill — which uses `border-dashed border-white/20` to read as visibly provisional rather than as a normal card. Sections with no real content to show (e.g. testimonials before the first real quote) are omitted entirely rather than rendered as a dashed placeholder — see Components.

The brand mark itself is a fixed-geometry SVG (60×60 viewBox, 14px corner radius, 5px stroke) with a filled top bar and a landing arrow inside — documented as non-negotiable geometry ("não redesenhar; só escalar") that only ever scales, never redraws.

## Components

Buttons, cards, and nav all share the same quiet, structural feel: edges and rules define them, not fills or shading.

### Buttons
- **Shape:** 6px radius (`rounded-md`), 1px Signal Blue border, transparent background.
- **Primary (only variant):** Outline only — `border-accent`, `px-6 py-3` (large, hero/CTA) or `px-5 py-2.5` (compact, nav), Paper White text, JetBrains Mono label. The WhatsApp/Orçamento actions (the panel's "switches") lead with the Switch Glyph — see Components below.
- **Hover:** Background tints to `accent/10`; no border or shadow change.
- **Press:** Primary (switch) buttons scale to `0.97` on `:active` — the smallest change that makes a press unmistakable before the WhatsApp/mailto navigation completes.
- **Secondary / Ghost:** Plain-text links in `paper/60`–`/70` transitioning to full `paper` on hover, used for lower-emphasis actions ("Ver portfólio", nav links). An in-page ghost link carries a plain `ArrowRightIcon`; an external/WhatsApp link carries the diagonal `ArrowUpRightIcon` — the icon shape itself signals whether the destination is on this page or not.

### Instrument Gauge
A circular analog dial (`gauge.tsx`) standing in for a stat: a Hairline tick arc, a Signal Blue "good zone" arc past a documented threshold, and a needle that sweeps from rest to its real value once the dial scrolls into view (one authored moment, respects `prefers-reduced-motion` globally). The dial is `aria-hidden`; the literal value and label always render as real text beside it — the needle illustrates the number, it never replaces it as the source of truth. Each dial's needle position is an honestly documented, labeled-in-source mapping onto the arc (e.g. a load time inverted onto a 0–5s scale), never a fabricated extra metric. Used for the three MetricsBar readouts.

### Process Dial
A rotary 4-detent dial (`process-dial.tsx`) sharing the Instrument Gauge's bezel and needle language: on scroll into view, the needle sweeps once through all four detents and rests at the fourth, tracing the fixed Briefing → Prototype → Development → Delivery sequence. Purely illustrative and `aria-hidden` — the real step titles, numbers, and durations live in the text list beside it, so nothing is announced twice.

### Switch Glyph
A small rounded-track icon (`icons.tsx`'s `SwitchIcon`) with a Signal Blue actuator dot at the "on" position — the panel's switch metaphor, reusing the same accent-dot-as-marker language as the Eyebrow rather than inventing a new device. Prefixes the primary WhatsApp/Orçamento outline buttons only (hero, nav, CTA section); never appears filled. On hover the dot scales to `1.1`; on press it shrinks to `0.9` and nudges left 4px, reading as the actuator physically flipping toward "off" before releasing back — a tactile confirmation that stays satisfying on the hundredth click, not just the first. The hero's instance alone also plays a one-time power-on pulse 900ms after the page's entrance sequence lands (`animated` prop) — the site's one "switch just got flipped" moment, never repeated at nav or CTA-section scale.

### Motion
- **Hero power-on** (`hero.tsx`): the page's one focal entrance. Eyebrow → headline → paragraph → CTA row → browser-mockup rise in one authored beat, ~80ms apart, 600ms each, ending with the primary switch's confirmation pulse. Pure CSS (`hero-rise`, `globals.css`) — content is in the markup regardless of script success; only the rise is animated. Not replayed anywhere else on the page.
- **Sibling-stagger reveal** (`reveal.tsx`): reserved for genuine lists only — Portfolio cards and Process steps — 60ms apart, capped, triggered once per item on scroll into view. Every other section (Testimonials, CTA, Footer) has no scroll-entrance motion; a blanket "everything fades up" was deliberately rejected. Defaults to fully visible — the hidden state is applied by JS after mount, never server-rendered, so a blocked script never hides content.
- **Drawer open** (`nav.tsx`): the mobile menu rises and fades in (`drawer-in`) each time it mounts, explaining the state change instead of an instant swap. Closing stays instant (unmount).
- **Portfolio card hover:** the image scales to `1.04` (clipped by the card's own rounded corners) and the lit dot scales to `1.25` — reinforcing the card as a selectable channel, matching the Switch Glyph's dot-scale language rather than inventing a new hover idiom.
- **Instrument settle** (`gauge.tsx`, `globals.css` `dial-sweep`): the Gauge needle and Process Dial needle both end their travel with a small overshoot-past-value before settling back (`cubic-bezier(0.34, 1.56, 0.64, 1)` on the Gauge; an explicit 96°→90° step on the dial's keyframe) — a calibrated physical instrument has spring and mass, so it doesn't just glide to a stop like a UI tween. The one deliberate exception to "no bounce/elastic easing": grounded in the instrument-panel mechanism itself, not decorative, and a single restrained overshoot rather than an oscillating spring.

All motion above is `transform`/`opacity`/`color` only, and every keyframe/transition duration collapses under the global `prefers-reduced-motion: reduce` rule in `globals.css` — state changes stay legible, movement is removed.

### Overdrive: Hero Instrument Cluster
The hero's browser-mockup is the site's one Overdrive moment — everywhere else stays restrained by design.

- **Instrument Cluster Tilt** (`hero-mockup-stage.tsx`): the whole mockup tilts as one rigid plane toward the pointer, capped at 7°, like a physical panel viewed from a slightly different angle. Desktop/fine-pointer only (`hover: hover` + `pointer: fine`) — touch devices keep the static mockup, since a tilt driven by the same gesture used to scroll would fight the visitor. Fully skipped under `prefers-reduced-motion` at attachment time, not just shortened, because continuous spatial motion is what that preference exists to remove. Implementation note: an internal multi-layer parallax (chrome bar, content, CTA each at independent depth) was the original ambition but was dropped — `transform-style: preserve-3d` cannot coexist with the mockup's existing `overflow-hidden` (CSS forces `preserve-3d` to compute as `flat` on any element with non-visible overflow), and removing that clipping risked visible corner bleed with no way to visually confirm it in this environment. The single rigid tilt was judged the more disciplined trade — lower risk, and arguably more "precision instrument" than a multi-plane parallax would have read anyway.
- **Panel Power-Up** (`power-trace-frame.tsx`, `globals.css` `power-trace`): a Signal Blue line traces the mockup's frame, holds, fades, then pauses before drawing again — a 3s loop (~1.4s active, ~1.6s paused) — the frame only reads as its normal Hairline border between passes, this never becomes a permanent new border treatment. First pass starts (~950ms) right as the mockup's own `hero-rise` entrance settles, so the opening read is one continuous beat: panel arrives → panel energizes → cursor blinks (existing, ambient) ever after; later passes are the ongoing "instrument is live" pulse. Paused via `IntersectionObserver`/`visibilitychange` whenever the mockup isn't visible, so the loop costs nothing off-screen or in a background tab. Real pixel `viewBox` (via `ResizeObserver`) keeps the traced corners circular across the mockup's responsive aspect ratio; SVG `pathLength=1` keeps the dash math a plain 0→1 draw regardless of actual perimeter.

Both are additive: `BrowserMockup`'s own markup, content, and copy are untouched.

### Dark Veil (Site-Wide Background)
A single ambient backdrop sits behind the entire page, not just the hero: `dark-veil-background.tsx` wraps the vendored `DarkVeil.jsx`/`DarkVeil.css` (react-bits, `@react-bits` registry) in a `fixed inset-0` layer with a negative z-index, rendered once in `layout.tsx` above the body's Near-Black Ink base and below every section. It shows through everywhere — the glass cards (see Cards / Containers), the translucent nav, the hero, and the gaps between sections — since nothing on the page carries a full-bleed opaque fill anymore (the metrics bar's own solid gray band was removed for exactly this reason). This replaced the earlier hero-only Flow Field (KokonutUI, canvas particles): running two different animated backgrounds in the same view — one hero-scoped, one now page-wide — would have layered two unrelated motion languages instead of one coherent one, so Flow Field's hero wiring was removed in its favor. The vendored `kokonutui/flow-field.tsx` source remains in the repo, unused, in case a future direction wants it back.

- **One tone, exactly — not approximated.** The shader's own generative pattern (a CPPN neural net) spans many hues, which would break the system's single-Signal-Blue-tone rule. Rather than guess at a `hueShift` that only approximates the accent, the canvas is desaturated to pure luminance (`grayscale`) and recolored with an isolated `mix-blend-mode: color` overlay painted in `--color-accent` — the exact brand blue, hue-for-hue, with the shader supplying only luminance and motion. `opacity-[0.22]` keeps it a backdrop, not the page's subject — bright enough to read as intentional (an earlier `0.14` pass read as "not working" against the near-black page).
- **No `resolutionScale` override.** ogl's `Renderer.setSize()` writes the canvas's CSS width/height as inline pixel styles derived from that same value, overriding DarkVeil.css's `width:100%;height:100%` — any value below 1 visibly shrinks the canvas to a smaller box anchored top-left instead of filling the viewport (the bug behind an earlier "background not centered" report). Left at the component's default of 1; the device-pixel-ratio cap already inside DarkVeil.jsx keeps the real framebuffer cost sane.
- **Respects this project's motion/perf discipline, which the vendored component doesn't on its own:** fully skipped under `prefers-reduced-motion`, and unmounted (stopping its uncapped `requestAnimationFrame` loop) whenever the tab is hidden via `visibilitychange` — since it's `fixed`, it's always "in view" by viewport intersection, so tab visibility is the correct pause signal here instead.
- **The vendored files themselves** (`DarkVeil.jsx`, `DarkVeil.css`) are unmodified from the upstream react-bits original — all integration and identity logic lives in the wrapper instead.

### Browser Surfaces
- **Scrollbar:** themed to the Ink/Hairline pairing (`scrollbar-color` for Firefox, `::-webkit-scrollbar*` for Chrome/Safari/Edge) — thin, with the thumb inset by a 2px Ink border so it reads as a groove, not a default gray bar. Lightens to Console Gray on hover.
- **Selection and focus:** documented under their own Named Rules above (`::selection`'s No-Fill Accent Rule exception; `:focus-visible`'s accent outline).

### Error / Recovery
`src/app/not-found.tsx` — the one error state on the site, styled instead of left as Next.js's bare default. Reuses Nav/Footer/Container so it never feels like a different product, leads with the problem in plain language ("Essa página não está no ar"), and offers two real recoveries (back to the homepage; a WhatsApp message pre-filled with context) — no jokes, no invented content. The signature detail: a single Gauge at `fraction={0}`, `goodFrom={1}`, labeled "Sem sinal" — its needle never sweeps even once the dial scrolls into view, so the instrument itself communicates "nothing to read here" before the copy does, reusing an existing component rather than inventing new error-page furniture.

### Cards / Containers
- **Corner Style:** 24px radius, uniform across every content card.
- **Background:** Glass — `bg-white/[0.04]` + `backdrop-blur-xl`, letting the Dark Veil background show through softly; no fill for provisional content (see Coming-Soon Indicator below).
- **Shadow Strategy:** None — see Elevation & Depth. Hover state changes `border-white/10` to `border-white/20`, not shadow.
- **Border:** 1px solid `white/10` (a lighter hairline than the page's own Hairline token, tuned for the translucent fill).
- **Internal Padding:** 24px (`p-6`) for standard cards; 32–64px (`px-8 py-16` / `sm:px-16`) for the single large CTA container.

### Portfolio Card
Each live case's tag line leads with a small filled Signal Blue dot (6px, `rounded-full`) — the panel-selector reading: a lit case is an active/selected channel, the tag is its label. The dot is decorative (`aria-hidden`) and never appears on the Coming-Soon Indicator, which stays deliberately unlit.

### Coming-Soon Indicator
Unfinished/pipeline content never takes a full card slot next to real content — it would visually compete with it at equal weight. Instead it collapses into one small `rounded-full` pill with a dashed `white/20` border, a muted (`text-paper/25`) Brand Mark, and a Mono `text-xs` count ("+N em breve"). The portfolio grid uses this for upcoming case studies rather than rendering one dashed ghost card per pending item.

### Empty Sections
A section with zero real content to show (e.g. Testimonials before the first real quote) renders nothing — the component returns `null` and any nav/footer link pointing at it is omitted too — rather than shipping a "coming soon" placeholder in that section's own space. The section reappears automatically, with its nav/footer links, the moment real content exists.

### Navigation
- Fixed header, translucent ink background with blur, Hairline bottom border. Desktop nav links are Mono `text-sm` at `paper/70`, transitioning to full `paper` on hover; the nav's CTA is the standard outline button at compact padding. Mobile collapses into a hamburger-triggered drawer sharing the same link/button styles, stacked full-width, with `Escape`-to-close and `aria-expanded`/`aria-controls` wired for accessibility.

### Eyebrow (signature label pattern)
A small Mono `uppercase` label (`text-[11px]`, `tracking-[0.16em]`) preceded by a `6px` Signal Blue dot. Appears above every section headline and the hero headline; the accent dot carries the color so the label text itself can stay at `paper/70` (kept there deliberately — Signal Blue on Ink only clears AA contrast at large text sizes, so small label text stays neutral and the dot alone carries the accent).

### Brand Mark (signature component)
A browser-window glyph (rounded square outline + filled top bar) with a landing arrow inside, read literally as "landing." Fixed, non-redrawable geometry, used at three scales: small in the nav/footer wordmark (`h-6 w-6`), muted/ghost in the portfolio's coming-soon pill (`h-4 w-4`, `text-paper/25`), and as the conceptual basis for the hero's browser-mockup illustration, which extends the same motif into a dashed "descent route" ending in the arrow landing on a line beside the CTA — the system's one purely illustrative, decorative element (`aria-hidden`).

## Do's and Don'ts

### Do:
- **Do** treat text hierarchy as opacity steps on Paper White (`/90` → `/25`), not as a separate gray palette.
- **Do** set every label, nav item, button, tag, and metadata string in JetBrains Mono, uppercase with wide tracking at small sizes.
- **Do** keep Signal Blue rare and marker-like — one accent word, an outline, a dot, never a fill beyond a 10% hover tint.
- **Do** keep the interface flat; use background-tone and border changes, not shadows, for hover/state feedback.
- **Do** scale the brand mark rather than redrawing its geometry.
- **Do** keep the Instrument Bezel scoped to gauge/dial faces only, and keep every dial `aria-hidden` with the real value or label rendered as ordinary text beside it.
- **Do** document how a gauge's needle fraction was derived (the label/comment stays with the data, in `metrics.ts` or equivalent) — a dial reinforces a real, sourced number, it never invents one.

### Don't:
- **Don't** introduce a filled/solid Signal Blue button — every button in this system is outline-only.
- **Don't** add drop shadows to routine cards, buttons, or panels; the hero browser-mockup shadow and the Instrument Bezel are the system's only two depth exceptions, both named above.
- **Don't** set body copy or reading paragraphs in JetBrains Mono, or labels/metadata in Inter — the font choice is functional, not aesthetic preference.
- **Don't** fabricate a new neutral gray hex for a text-hierarchy step; step Paper White's opacity instead.
- **Don't** let a decorative dial's caption or label duplicate text a screen reader already gets from real content nearby — hide the decorative copy instead (see Process Dial).
