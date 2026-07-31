import { createFileRoute } from "@tanstack/react-router";

import { LegCta, LegFooter, LegNav } from "./_legChrome";

const TITLE = 'The Diagnosis: finding every kink in the hose';
const DESC = 'Before anything gets built, CIGGA-Labs maps how your business actually runs: every tool, handoff, and silent failure, priced in hours.';

export const Route = createFileRoute("/legs/1-2")({
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
          <p className="cg-eyebrow">Leg 2 of the journey</p>
          <h1 className="cg-h2" style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}>{TITLE}</h1>
          <p className="cg-lede">{DESC}</p>

          <div className="cg-compare" style={{ marginTop: 40 }}>
            <img src="/assets/world/scene-02-poster.png" alt="The mascot crouched with a magnifying glass over kinked pipes connecting system cards" />
          </div>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 56 }}>What happens on this leg</h2>
          <ul style={{ lineHeight: 1.9, color: "var(--cg-ink-soft)", paddingLeft: 22 }}>
            <li>A working map of how work actually moves through your business</li>
            <li>Every tool, handoff, and owner written down instead of assumed</li>
            <li>The silent failures found before a customer finds them</li>
            <li>Each bottleneck priced in hours so fixes rank themselves</li>
          </ul>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 48 }}>What you leave with</h2>
          <p className="cg-lede">You leave with a written map of your operation and the highest-value leaks ranked, whether or not we build together.</p>
          <p className="cg-note" style={{ fontSize: "1.35rem", marginTop: 26 }}>the audit is the cheapest place to be wrong on the whole project</p>
        </div>
      </main>
      <LegCta sceneId="scene-02" />
      <LegFooter />
    </div>
  );
}
