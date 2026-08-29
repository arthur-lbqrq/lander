# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small business owners who need a landing page built for them — not Brazil-specific as a defining constraint, though the current site content and copy are in Portuguese (pt_BR).

## Product Purpose

lander.co is a freelance studio that designs and builds landing pages (and, secondarily, small institutional/multi-page sites) end-to-end, from briefing to deployed, production-ready code. It exists to give small businesses a professionally built web presence without agency overhead.

## Positioning

Conversion focus / outcomes: every design and copy decision is driven by what makes a visitor act (contact, buy, book) — not just visual polish. This is paired with real production code (no page builders) and a fast, defined process (briefing → prototype → development → delivery, ~7 days average).

## Operating Context

- Primary conversion channel is WhatsApp (`getWhatsappUrl` in `src/content/site.ts`); Instagram is a secondary presence/proof channel.
- Delivery process is a fixed 4-step pipeline (`src/content/process.ts`): Briefing (1 day) → Prototype (2 days) → Development (3 days) → Delivery (1 day).
- Performance is a stated deliverable, not just an internal goal: 90+ PageSpeed, <2s load time (`src/content/metrics.ts`).
- All site content is data-driven from `src/content/*.ts` with no CMS, so publishing a new case or testimonial is a content-file edit, not a design change.

## Capabilities and Constraints

- Core service: landing pages. Institutional/multi-page sites (e.g. the CONCREPISOS case) are also offered but are not the current focus — landing pages are the primary offer going forward.
- No CMS; content lives in typed TypeScript modules under `src/content/`.
- No external UI/component libraries; icons and the brand mark are custom SVGs.

## Evidence on Hand

- Two real, live case studies: **Tino** (financial-management SaaS for small businesses) and **CONCREPISOS** (flooring/finishing company site, Recife-PE), both in `src/content/projects.ts` with screenshots in `src/content/images/`.
- Four additional portfolio slots exist as "Em breve" (coming soon) placeholders — not fabricated cases.
- No testimonials yet: `src/content/testimonials.ts` is intentionally empty and the UI shows an explicit placeholder rather than an invented quote. Do not add a testimonial without a real one to publish.
- `whatsappNumber` and `email` in `src/content/site.ts` are still TODO placeholders, not real contact info yet.

## Product Principles

- Every page decision serves conversion (visitor action), not decoration for its own sake.
- Ship only real evidence — no fabricated testimonials, metrics, or case studies; empty sections show honest placeholders instead.
- Keep content and design decoupled: publishing or updating a case/testimonial/metric should never require touching a component.
- Favor a fast, well-defined delivery process (fixed steps, fixed rough durations) over ad hoc scope.
- Production-grade output is part of the offer itself (real code, measured performance), not just a claim.
