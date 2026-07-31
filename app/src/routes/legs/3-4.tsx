import { createFileRoute } from "@tanstack/react-router";

import { LegCta, LegFooter, LegNav } from "./_legChrome";

const TITLE = 'The Proof: nothing deploys until it survives testing';
const DESC = 'Every module is run against real cases, edge cases, and failure modes before it touches live operations.';

export const Route = createFileRoute("/legs/3-4")({
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
          <p className="cg-eyebrow">Leg 4 of the journey</p>
          <h1 className="cg-h2" style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}>{TITLE}</h1>
          <p className="cg-lede">{DESC}</p>

          <div className="cg-compare" style={{ marginTop: 40 }}>
            <img src="/assets/world/scene-04-poster.png" alt="The mascot at a workbench in front of a laptop with a green checklist" />
          </div>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 56 }}>What happens on this leg</h2>
          <ul style={{ lineHeight: 1.9, color: "var(--cg-ink-soft)", paddingLeft: 22 }}>
            <li>Staged modules, each tested against real cases from your business</li>
            <li>Failure modes exercised on purpose before customers hit them by accident</li>
            <li>Edge cases handled, logged, and monitored instead of wished away</li>
            <li>Documentation written while building, not after</li>
          </ul>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 48 }}>What you leave with</h2>
          <p className="cg-lede">You leave with a system that has already survived contact with reality, plus the test record to prove it.</p>
          <p className="cg-note" style={{ fontSize: "1.35rem", marginTop: 26 }}>tally marks on the wall: four passes before the flag goes up</p>
        </div>
      </main>
      <LegCta sceneId="scene-04" />
      <LegFooter />
    </div>
  );
}
