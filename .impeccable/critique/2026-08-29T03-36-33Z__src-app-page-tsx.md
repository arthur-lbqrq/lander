---
target: toda a landing page (src/app/page.tsx)
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-29T03-36-33Z
slug: src-app-page-tsx
---
Method: dual-agent (A: a47fbaf176bccc600 · B: a0748b508e69cdf18)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3/4 | Primary conversion actions (WhatsApp/mailto in hero, CTA section, nav, footer) open new tabs with zero in-page confirmation. |
| 2 | Match Between System and Real World | 4/4 | "Orçamento", "Falar no WhatsApp" — exactly the vocabulary and channel Brazilian small businesses actually use. |
| 3 | User Control and Freedom | 3/4 | Skip link and Escape-to-close mobile nav work well; external links give no visual cue before the click that they leave the site. |
| 4 | Consistency and Standards | 4/4 | Spacing, radii, and type scale track DESIGN.md almost verbatim across every component. |
| 5 | Error Prevention | 1/4 | `whatsappNumber: "55SEUNUMEROAQUI"` (src/content/site.ts) is a live placeholder wired into every CTA on the page, with no build-time guard against shipping it. |
| 6 | Recognition Rather Than Recall | 4/4 | Fixed nav with anchor links matching section ids — always-visible wayfinding. |
| 7 | Flexibility and Efficiency | n/a | No power-user path expected on a single-scroll landing page. |
| 8 | Aesthetic and Minimalist Design | 4/4 | Near-monochrome palette, one accent, flat surfaces — executed exactly as DESIGN.md specifies. |
| 9 | Help Users Recognize/Diagnose/Recover from Errors | 2/4 | Email is offered as a WhatsApp backup (good), but nothing handles a dead/misconfigured WhatsApp link. |
| 10 | Help and Documentation | n/a | Not applicable to a Persuade-mode landing page. |
| **Total** | | **25/32** | **Good (78%)** |

## Design Specificity Verdict

**Design review:** This is not a copy-paste-swappable template. The brand mark (browser-window frame + an arrow "landing" inside it, `brand-mark.tsx`) is a genuinely product-specific metaphor, extended into the hero's `browser-mockup.tsx` with a dashed "descent route" and a blinking mono cursor — reused consistently at nav, footer, and hero scale. The mono-for-labels / display-for-headlines / one-accent-as-marker system matches DESIGN.md almost class-for-class. Where it slides toward generic is the information architecture: Hero → Stats → Work → Process → Testimonials → CTA is the default SaaS-marketing skeleton; nothing in the *layout* itself signals "landing-page specialist" the way the brand mark does.

**Deterministic scan:** `node .claude/skills/impeccable/scripts/detect.mjs --json src/app src/components src/content/site.ts` exited 2 with 3 findings across 2 rules:
- `overused-font` (warning, 1 finding) — flags Space Grotesk in `opengraph-image.tsx` as an over-saturated AI-slop face.
- `design-system-font-size` (advisory, 2 findings) — flags `text-[11px]` in `eyebrow.tsx` and `browser-mockup.tsx` as off the DESIGN.md type ramp.

We overrule the `overused-font` finding as a **false positive**: Space Grotesk is DESIGN.md's explicitly documented, deliberately chosen display face, not an unexamined default — the detector can't see intent from a font name alone. The `design-system-font-size` findings are legitimate but point at a documentation bug, not a code bug: DESIGN.md's own frontmatter lists the `label` type role at `0.8125rem` (13px), while its prose and the actual shipped code both consistently use `11px` for eyebrows/tags. The frontmatter needs a fix, not the components — filed below as P3.

No visual overlay is available this run: no browser automation/screenshot tool was exposed to either assessment in this session, so this critique is code-based (JSX + Tailwind classes read against DESIGN.md), not a rendered-page visual pass.

## Overall Impression

The system-level craft is genuinely strong — this reads as a landing page built by someone who took their own design system seriously, not templated. The problem isn't execution quality; it's that the page's proof structure works against its own pitch. A studio whose entire positioning is "conversion focus, outcomes, not just polish" currently shows a live conversion channel pointing at a placeholder phone number, a portfolio section that's 4/6 empty slots, and an empty testimonials section placed directly before the final ask. The single biggest opportunity: fix the evidence stack (real contact info, less placeholder-to-real-work ratio, testimonials repositioned or hidden) before touching anything visual — the visual system is already doing its job.

## What's Working

- **The brand mark and browser-mockup illustration** (`brand-mark.tsx`, `browser-mockup.tsx`) — a literal, specific "landing" visual metaphor reused at three scales with a dashed descent-route and blinking cursor. Survives the "would this work for any agency" test.
- **Documentation-to-code fidelity** (`eyebrow.tsx`) — the code comment explaining why label text stays at `paper/70` instead of full accent (accent only clears AA contrast at large sizes) mirrors DESIGN.md's own stated rationale almost word for word. Rare discipline.
- **Accessibility follow-through** (`page.tsx`, `nav.tsx`) — a real skip link, `aria-expanded`/`aria-controls` on the mobile menu, `Escape`-to-close, and a proper 44×44px touch target show accessibility was implemented, not just claimed.

## Priority Issues

**[P0] Every primary CTA points at a placeholder WhatsApp number.**
- **Why it matters:** `src/content/site.ts` line 15 (`whatsappNumber: "55SEUNUMEROAQUI"`) feeds `getWhatsappUrl()`, which every conversion path on the page uses — nav, hero, CTA section, footer. If this ships as-is, the one action the entire page exists to drive produces a broken WhatsApp chat, with no build-time guard catching it.
- **Fix:** Replace with the real number before launch, and add a build-time check (fail the build or log a loud warning) if `whatsappNumber` still matches the placeholder pattern, so this can never silently ship again.
- **Suggested command:** `/impeccable harden`

**[P1] Portfolio proof is 2/3 placeholder in the page's one evidence section.**
- **Why it matters:** `src/content/projects.ts` has 4 of 6 entries as `status: "soon"`, rendered by `portfolio-card.tsx` as dashed ghost cards at equal visual weight and grid position (`portfolio.tsx`, 3-column grid) as the 2 real cases. The studio's entire positioning depends on demonstrated results; presenting 4 empty slots next to 2 real ones right where a skeptical visitor looks for proof undercuts "proven" at the exact wrong moment. On mobile, the low-contrast dashed cards (`border-dashed border-white/20`, faint ghost icon) risk reading as *broken* rather than intentional.
- **Fix:** Show only the 2 live cards at larger/more prominent treatment, or compress the 4 "soon" slots into one small "+4 more in progress" chip instead of 4 full-size dashed cards outnumbering real proof 2-to-1.
- **Suggested command:** `/impeccable layout`

**[P1] Empty testimonials sit directly before the final CTA.**
- **Why it matters:** `page.tsx` renders `<Testimonials />` (its empty-state placeholder, since `testimonials.ts` is `[]`) immediately before `<CtaSection />`. Per the peak-end rule, the last content a visitor reads before being asked to act is an admission of "no social proof yet" — actively working against the ask it precedes.
- **Fix:** Suppress the Testimonials section entirely while the array is empty (go straight from Process to CTA), or move it earlier/lighter so the CTA follows the strongest available beat (Portfolio) instead of the weakest.
- **Suggested command:** `/impeccable onboard`

**[P2] Inconsistent affordance for the same action across the page.**
- **Why it matters:** The WhatsApp CTA carries `ArrowUpRightIcon` in `hero.tsx` and `cta-section.tsx`, but the identical action in `nav.tsx`'s "Orçamento" button has no icon. Same destination, same external-tab behavior, two different visual signatures — inconsistent pattern-matching cues for a returning visitor scanning for "the WhatsApp button." Related: the hero's "Ver portfólio →" uses a literal `→` character while every other affordance in the system uses the `ArrowUpRightIcon` SVG.
- **Fix:** Add `ArrowUpRightIcon` to the nav CTA and footer WhatsApp link (or standardize on no icon anywhere), and replace the literal `→` with the same icon component.
- **Suggested command:** `/impeccable polish`

**[P3] Two documentation/token drifts, no code change needed.**
- **Why it matters:** (a) `globals.css`'s `::selection { @apply bg-accent text-paper; }` is a 100%-opacity Signal Blue fill, which reads against DESIGN.md's own "No-Fill Accent Rule" (accent never fills beyond a 10% hover tint) with no documented exception. (b) DESIGN.md's frontmatter lists the `label` type role at 13px, but its prose and the actual shipped code (`eyebrow.tsx`, `browser-mockup.tsx`) both consistently use 11px — flagged by the detector as `design-system-font-size` (advisory).
- **Fix:** Add `::selection` as a documented exception in DESIGN.md (or dial it back to `bg-accent/20`), and correct the frontmatter `label.fontSize` to `11px` (or add an explicit second label step) so the token file matches what's actually shipped.
- **Suggested command:** `/impeccable document`

## Persona Red Flags

**Jordan (confused first-timer):** Reads the hero clearly — headline and CTA are unambiguous. Scrolls to Portfolio expecting proof and hits 4 faint placeholder cards mixed with 2 real ones — genuinely unsure whether this studio has done real work. By Testimonials, the second "coming soon" admission reads as confirmation of doubt, so Jordan reaches the WhatsApp CTA with *less* trust than at the top of the page, not more.

**Casey (distracted mobile user):** Scrolling past Portfolio at speed, the 4 very-low-contrast dashed cards could register as broken images rather than intentional placeholders, since the "Em breve" label is small, muted mono text easy to miss mid-scroll. (The 320px metrics-bar number-wrap risk flagged in the prior `/impeccable adapt` pass has already been fixed.)

**"Dona Márcia" — small business owner evaluating whether to hire lander.co (project-specific, from PRODUCT.md's actual audience):** She's here because the pitch is conversion outcomes, not decoration. But `metrics.ts` only shows the studio's *own* operational stats (PageSpeed score, load time, delivery time) — not a single client outcome number (leads generated, conversion lift, revenue). Both live cases in `projects.ts` get a one-line description and a tag, no outcome data. The page that promises "every design decision is driven by what makes a visitor act" shows zero evidence that its own past pages made anyone act — a direct mismatch between stated positioning and the evidence on screen, which is exactly what this persona is here to check.

## Minor Observations

- `footer.tsx`'s "Construído com Next.js + Tailwind CSS." is a nice, on-brand, low-cost credibility touch.
- `layout.tsx`'s `openGraph`/`twitter` metadata blocks are populated but no `images` field is set — shared links will render with no preview image.
- `CtaSection`'s `rounded-3xl` and `PortfolioCard`'s `rounded-2xl` correctly match DESIGN.md's documented shape scale.
- Detector's `overused-font` finding on Space Grotesk is a false positive against this project's documented, intentional typeface choice (see Design Specificity Verdict).

## Questions to Consider

1. If the positioning is "conversion focus, not decoration," why is there no conversion-outcome number anywhere on the page — could each live case study carry one hard result instead of a one-line description?
2. Would trust be better served by showing only the 2 real portfolio cases at full weight, with the "coming soon" pipeline compressed into a single small chip, rather than 4 dashed cards visually outnumbering the real work 2-to-1?
3. Given testimonials are empty today, is there a version of this page that simply omits that section until real quotes exist, so the CTA follows Portfolio (the strongest evidence) instead of an admitted gap?
