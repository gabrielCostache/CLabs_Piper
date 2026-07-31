# CIGGA-Labs design brief

## Design read
A founder-led automation studio for established online businesses (funnels, agencies, course creators) that have outgrown disconnected tools and repetitive manual work. Emotional register: warm-paper editorial sketchbook — confident ink, hand annotation, credible, alive.

## Concept spine
The site is a field journal the mascot works through: it discovers the leak, diagnoses the kinks, wires the spine, tests the build, plants the flag, and finally presents the whole connected city-map. Scroll is the camera; the mascot is the guide; the CTA never leaves the page.

## Delivery tier
cinema — Lenis-style smooth scroll + the scroll-scrub engine as the Tier-1 hero mechanic.

## Locked palette
- Warm pulp base: `#F5F0D8` (paper)
- Seed ink: `#171D18` (linework)
- Citron signature: `#D7FF3F` (highlights, active states, annotations)
- Mandarin accent: `#FF6A2A` (sparing flags/alerts)
- Leaf structure: `#146B4A` (authority, pass states)
Defense: user-supplied brand colors; the Citric Jungle palette overrides the banned-family check by explicit brief.

## Locked type
- Display/body: Archivo (weights 400–900) — confident modern grotesque
- Hand annotations: Caveat
- Mono accents: IBM Plex Mono for chapter numerals and micro-labels
Defense: sans-first, the brand’s editorial sketch direction comes from strokes and paper texture, not a serif.

## Animation mode
animated-website — fly-through-the-world scroll journey is explicitly requested.

## Journey shape
multi-leg (Architecture B): six world-stills + dive clips, connected by aerial connector clips with frame-identical seams. Justification: distinct environments the mascot travels between; the story spans several locations, not one object.

## Journey (chapters)
1. The Leak — chaos office; paper strips descending and dissolving before the in-tray. Focal: waterfall of leads dissolving.
2. The Diagnosis — magnifying glass over kinked pipes on stepping-stone modules. Focal: lens over the kink.
3. The Build — bulldog pressing a connector into the tall monolith spine. Focal: the socket burst.
4. The Proof — workbench, laptop, tally strip, pass/fail cards. Focal: checklist window on the laptop.
5. It Holds — wall of instrument panels on one bus, flag planted. Focal: the pennant flag.
6. Connected — whole sketched city-map on paper, five diorama islands joined into one ring; dog presents. Focal: central hub ring.

## World grammar (applies to every still + clip)
Hand-drawn editorial illustration; slightly imperfect confident black ink outlines; warm pulp paper texture; sketched isometric rounded cards; ink contour hatching shadows; palette exactly as above; no text, no letters; generous negative space at the edges; mascot consistent: black French bulldog, charcoal hoodie, silver over-ear headphones.

## Camera architecture
Architecture B — dive-in per still + aerial connector from dive-N’s actual last frame to dive-(N+1)’s actual first frame. Seedance 2.0 (start + end image roles) for both leg kinds. Final second of every dive settles into a slow forward drift so connectors pick up the same velocity.

## Mobile framing
Native 9:16 portrait chain: center-crop each encoded 16:9 desktop clip to 9:16 (`1080x1920` desk → mobile height-cap 720 wide) and re-encode at CRF 23, small GOP; mobile poster from the same mobile clip. Keep every focal point inside the center-safe area (the composition already is).

## Delivery budget
≤32 MiB desktop clips total, ≤16 MiB mobile clips total (11 files each chain: six scenes + five connectors).

## Section plan
Scroll journey (6 chapters) → proof band → problems (flag row list) → capabilities (6-card hand-drawn grid) → before/after compare slider (draggable; before = scene-01, after = scene-05) → selected work (3 dossiers, placeholders marked) → process (rail + steps; CG note tying to the journey) → reputation/upwork → about Gabriel → FAQ → final CTA with contact form. Every section a distinct family; eyebrow ration ≈ 1 per 3 sections.

## Asset plan
- 6 dive clips (5s) + 5 connector clips (5s), all 16:9 1080p, plus their exact-frame posters.
- Mobile 9:16 variants of all 11, plus their posters.
- Brand cover, OG image, favicon (generate_app_branding, in flight).
- About-image reuse of scene-03 poster; compare slider reuses scene-01/scene-05 posters.
- Monogram SVG in `CiggaMark` (ink rounded-square with citron “C” arc and mandarin dot), Cap-icons as hand-drawn inline SVGs.

## CTA inventory
- Primary (site-wide single label): “Book a strategy call” → `#contact` (the final form section). One intent, one label.
- Chapter 6 action: “See how a system gets built ↓” (anchor to `#process`).
- Journey mid-chapter action: contextual leg-page links (`/legs/1-2 … /legs/5-6`) — “See this leg of Gabriel’s process →” on chapters 2–5; each leg page expands that chapter into a short SEO-targeted read.
