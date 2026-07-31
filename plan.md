### T0 — gauntlet briefing

**CHECKPOINT_ORDER:**
- T1 — connective tissue (copy/case/contact/SEO/assets + page mapping)
- T2 — source files & journey + page structures
- T3: `components/cigga.tsx` (leaf UI)
- T4: `routes/index.tsx` (assembly)
- T5: `scroll-scrub.tsx` (engine bugfix)
- T6: `styles.css` (custom CSS)
- T7: `landing-content.ts` (content spine)
- T8: `design-brief.md` (vibe contract)
- T9: `scroll-scrub-scenes.ts` (media config)
- T10: `lib/security-headers.server.ts` (CSP blob media-src)
- T11: `routes/legs/_legChrome.tsx` (leg page shell)
- T12: `routes/legs/checklist.txt` (content checklist)
- T13: `legs/1-2.tsx` (leg page shape sample)
- T14: `manifest.json` (D1 contact)
- T15: `__root.tsx` + `app-meta.json` (metadata/branding)
- T16: `routes/app.tsx` + `routes/README.md` (dead routes)
- T17: `index.html` (engine reference, optional)
- T18: `scroll-scrub-landing/index.html` (engine reference, optional)

**GATE QUESTION** (run at every checkpoint): What does this file DO *right now* when its route is visited — rendered DOM, data flow, broken seams, already-correct detail? NOT vibes; state mechanics.

**MEDIA INVENTORY** (paths only; never contents):
- `app/public/assets/landing/` — tree recursively; for each file: path + size + type (video/img/other); never inline contents

**SOURCE TESTS** (run T2 gate against these findings):
- src data: present fields/types (name the routes if grep-visible: /, /legs/1-2 … 5-6, any other)
- What routes exist? (hard navigation boundaries)
- How sections get content: scenes[] vs landingContent vs hardcode (which fields feed which component/section)
- Contact: where does the form end? server fn vs edge route?
- D1 enabled in manifest? binding name?
- Branding fields present in app-meta? which URLs broken/placeholder?

**ALWAYS-DO:** If a claimed setting responsible for a bug is *exactly opposite* to a doc/skill assertion (“blob in media-src”), treat the doc as ground truth — the file likely has the drifted version; flag it loudly, not as a doubt. If a route is imported in `#/router.tsx` routeTree, it IS live (type-error if unread).

**FORBIDDEN:** repo scavenger hunts (no `search_files`, no `tool_search` — directory listing was T0 authoritatively complete), memory tools, workflow/workflowagent tools, second passes (“just to be safe” — once a file is read, it’s known), assumptions visualized in another AI’s head (“I’ll get to that later” is cope — this is later).

**SPLIT_THRESHOLD:** (1) current segment UNREAD → split; (2) current segment read but verdict summary NON-DETERMINISTIC (e.g. path touchpoints unresolved) → split; (3) current segment read + verdict deterministic → DO NOT split (just state verdict). Do not split because of generic anxiety; split because comprehension is at stake.
