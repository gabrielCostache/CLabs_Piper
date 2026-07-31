import { createFileRoute } from "@tanstack/react-router";

import { LegCta, LegFooter, LegNav } from "./_legChrome";

const TITLE = 'The Connected System: one business, end to end';
const DESC = 'What the finished state looks like: every leg wired into one connected operation you can see, measure, and steer.';

export const Route = createFileRoute("/legs/5-6")({
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
          <p className="cg-eyebrow">Leg 6 of the journey</p>
          <h1 className="cg-h2" style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}>{TITLE}</h1>
          <p className="cg-lede">{DESC}</p>

          <div className="cg-compare" style={{ marginTop: 40 }}>
            <img src="/assets/world/scene-06-poster.png" alt="The mascot presenting a sketched city map of connected business systems" />
          </div>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 56 }}>What happens on this leg</h2>
          <ul style={{ lineHeight: 1.9, color: "var(--cg-ink-soft)", paddingLeft: 22 }}>
            <li>Funnels, AI agents, CRM, integrations, and operations on one map</li>
            <li>Every stage visible and measured from the same truth</li>
            <li>Your team trained on the system, not dependent on the builder</li>
            <li>Room designed in from day one for the next stage of growth</li>
          </ul>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 48 }}>What you leave with</h2>
          <p className="cg-lede">You leave with a connected business you can steer, and a studio that stays available as it grows.</p>
          <p className="cg-note" style={{ fontSize: "1.35rem", marginTop: 26 }}>the wiring room from leg three is the promise; this map is the receipt</p>
        </div>
      </main>
      <LegCta sceneId="scene-06" />
      <LegFooter />
    </div>
  );
}
