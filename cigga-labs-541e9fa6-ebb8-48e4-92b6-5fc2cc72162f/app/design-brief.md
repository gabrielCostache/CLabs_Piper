# CIGGA-Labs — design brief

## Design read
For founders, funnel-driven businesses, and agencies that have outgrown duct-taped tools; the register is a warm, confident field journal of a system being repaired: optimistic, hand-made, technically credible, memorable.

## Concept spine
"The Field Journal of a Connected Business." The site is a paper-world diagnostic notebook: the mascot (a black French bulldog engineer in a charcoal hoodie and silver headphones) discovers chaos, finds the kinks, wires the system, tests it, deploys it, and presents the finished connected map. Every scroll beat is one page of that journal; conversion copy sits alongside as the calm editorial voice.

## Delivery tier
cinema (animated website, scroll-scrub).

## Locked palette (brand-supplied, overrides banned-family defaults)
- Pulp (warm paper) #F5F0D8 — page ground; warm, optimistic, exotic.
- Seed-black ink #171D18 — linework, headline ink, primary text.
- Citron #D7FF3F — the ONE brand signature accent: active states, highlights, primary CTA fill, scroll rail.
- Mandarin #FF6A2A — sparing warning/alert accents only (chaos states, one fail flag).
- Frunz (deep leaf green) #146B4A — structure/authority: passed states, structural blocks, footer band.
Defense: user-supplied brand kit ("Citric Jungle"); warm-paper + citron + ink is the CIGGA-Labs identity and overrides the banned defaults by explicit brand constraint.

## Locked type
- Display: Archivo (weights 500/700/900, expanded feel via tracking-tight) — geometric, confident, industrial-editorial.
- Body: Archivo 400/500.
- Mono/annotations: Caveat (handwritten) ONLY for tiny hand-annotation labels and editorial marginalia; counts as the annotation voice, reserved for editorial notes and diagram callouts.
No serif; the editorial feel comes from ink texture + handwritten annotations, not a serif display face.

## Animation mode: animated-website
(multi-leg — six clearly distinct places the visitor travels between on one paper world: chaos office, diagnostic, assembly bay, test bench, mission control, connected city map. User explicitly requested a scroll-world journey with the mascot doing different things per stage.)

## Journey (multi-leg, 6 scenes)
World grammar (byte-identical style preamble on all scenes): hand-drawn editorial illustration, slightly imperfect confident black ink outlines, warm paper texture #F5F0D8, sketchbook diagram style; sketched isometric diorama modules on white rounded cards; ink #171D18; citron #D7FF3F as hand-applied highlighter fills; mandarin #FF6A2A sparing alerts; frunz #146B4A structural blocks; generous pulp negative space; no text/letters/logos. Camera: Architecture B diorama dives + aerial connectors.

1. scene-01 "The Leak" — mascot wades a drifting paper-strip waterfall of leads; disconnected app cards with severed cables. Focal point: the dissolving strips / empty in-tray. Kicker: Operational drag. Tags: Lead leakage, Manual follow-up, Disconnected tools.
2. scene-02 "The Diagnosis" — mascot crouches with a magnifying glass over stepping-stone module cards joined by kinked pipes. Focal: the magnifier over the pinched kink. Kicker: Systems audit. Tags: Workflow mapping, Bottleneck trace, Data integrity.
3. scene-03 "The Build" — mascot plugs a heavy cable into a tall monolith of automation modules; disconnected blocks in the wings. Focal: the central socket contact ring. Kicker: Architecture. Tags: CRM core, AI agents, Integrations.
4. scene-04 "The Proof" — mascot at a workbench laptop before a green pixel checklist; tally strip, pass/fail experiment cards. Focal: the green checklist window. Kicker: Build and test. Tags: Edge cases, Test runs, Documentation.
5. scene-05 "It Holds" — mascot plants a citron pennant at a rising wall of instrument panels joined by one cable bus. Focal: the flag and the panel wall. Kicker: Deployment. Tags: Live monitoring, Clean handoff, Team training.
6. scene-06 "The Connected System" — mascot on a terrace presenting a dollhouse city-map of the five earlier rooms, cabled into one hub ring with a flag. Focal: the hub ring. Kicker: Your system, whole. CTA scene. 

## Mobile framing
Native 9:16 portrait chain generated per leg (subject center-weighted in every prompt; heavy horizontal vignette usable since subjects sit center). Posted alongside desktop chain; ≤16 MiB total mobile budget.

## Section plan (page order)
1. Hero/journey (scroll-scrub, layout family: full-bleed cinematic scrub) — citation of sections below happens AFTER the journey, stacked as editorial paper sections.
2. Proof strip — horizontal ticker band of stats (family: stat band).
3. Problems — asymmetric two-column ink list + mandarin margin flags (family: editorial list).
4. Capabilities — 2x3 stamp-card grid with hand-drawn icon set (family: modular grid).
5. Before/After — draggable ink divider compare, two generated diagrams (family: interactive compare).
6. Selected work — placeholder case files, dossier-style cards with "placeholder: client material pending" marks (family: dossier rows).
7. Process — vertical route-timeline with sprout dots on a hand-drawn line (family: timeline rail).
8. Reputation — Upwork rating card + placeholder testimonial quotes (family: offset quote stack).
9. About Gabriel — split portrait/ink bio (family: calm split).
10. FAQ — accordion rows with plus-doodles (family: accordion).
11. Final CTA — big ink button on paper + mascot cameo (family: full-width closing banner).
≥4 layout families honored; eyebrows ≤ ceil(11/3)=4 — plan uses exactly 4 (Problems, Capabilities, Reputation, FAQ).

## Asset plan
- 6 scene stills (gpt_image_2, 3:2) → drives/legs + posters.
- 6 dive clips + 5 connector clips desktop (seedance_2_0 or kling3_0 per model schema).
- 6 mobile dive clips + 5 mobile connectors (9:16).
- Before/after pair: generated from scene-01 (before) and scene-05 (after) renders — reuse, no extra gens.
- Icon set: inline hand-drawn SVG (stroke #171D18) — logo monogram "CIGGA" paw-tag mark inline SVG.
- Cover/OG/favicon: generate_app_branding run already submitted (this build's single submission).
- Mascot cameo for About + final CTA: crop from generated scene assets (no extra gen).

## CTA inventory (one intent, one label)
Primary label everywhere: "Book a strategy call".
- Nav CTA — citron filled pill, ink text, underline-squiggle hover.
- Journey finale CTA — large ink-bordered paper card, citron edge fill sweep on hover.
- Final section CTA — oversized citron stamp button with press-down translate on :active.
- Footer CTA — quiet text link with hand-drawn arrow.
Contact form: on-page (#contact anchor) with server-fn persistence to D1.

## Non-negotiables
- No invented revenue/testimonials/clients: all unverifiable proof ships with visible "Placeholder" badges.
- Em/en dashes banned in visible copy.
- One accent logic: citron signature; mandarin only for alerts; frunz for structure.
- prefers-reduced-motion: full static paper edition (no video fetches).
