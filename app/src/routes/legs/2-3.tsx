import { createFileRoute } from "@tanstack/react-router";

import { LegCta, LegFooter, LegNav } from "./-_legChrome";

const TITLE = 'The Build: everything plugs into one spine';
const DESC = 'Designing the architecture: CRM, funnels, payments, comms, and AI agents wired into one system with a single source of truth.';

export const Route = createFileRoute("/legs/2-3")({
  head: () => ({
    meta: [
      { title: TITLE + " \u00b7 CIGGA-Labs" },
      { name: "description", content: DESC },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="cg-site" style={{ paddingTop: 70 }}>
      <LegNav />
      <main className="cg-section">
        <div className="cg-wrap" style={{ maxWidth: 820 }}>
          <p className="cg-eyebrow">Leg 3 of the journey</p>
          <h1 className="cg-h2" style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}>{TITLE}</h1>
          <p className="cg-lede">{DESC}</p>

          <div className="cg-compare" style={{ marginTop: 40 }}>
            <img src="/assets/world/scene-03-poster.png" alt="The mascot pressing a heavy cable into a tall monolith of automation modules" />
          </div>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 56 }}>What happens on this leg</h2>
          <ul style={{ lineHeight: 1.9, color: "var(--cg-ink-soft)", paddingLeft: 22 }}>
            <li>One designed spine every tool plugs into, no more point-to-point spaghetti</li>
            <li>A single source of truth for contacts, deals, and delivery state</li>
            <li>AI agents governed by your rules, not generic prompts</li>
            <li>Every connection named, owned, and documented</li>
          </ul>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 48 }}>What you leave with</h2>
          <p className="cg-lede">You leave with the target architecture on one page: what connects to what, what the source of truth is, and what gets automated first.</p>
          <p className="cg-note" style={{ fontSize: "1.35rem", marginTop: 26 }}>this is where generic templates die and your actual stack wins</p>
        </div>
      </main>
      <LegCta sceneId="scene-03" />
      <LegFooter />
    </div>
  );
}
