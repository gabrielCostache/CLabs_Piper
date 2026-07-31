import { createFileRoute } from "@tanstack/react-router";

import { LegCta, LegFooter, LegNav } from "./_legChrome";

const TITLE = 'It Holds: deployment, monitoring, and the flag moment';
const DESC = 'Go-live with monitoring, alerting, and rollback paths, so when something breaks you hear it from the system first.';

export const Route = createFileRoute("/legs/4-5")({
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
          <p className="cg-eyebrow">Leg 5 of the journey</p>
          <h1 className="cg-h2" style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}>{TITLE}</h1>
          <p className="cg-lede">{DESC}</p>

          <div className="cg-compare" style={{ marginTop: 40 }}>
            <img src="/assets/world/scene-05-poster.png" alt="The mascot planting a flag at the foot of a wall of live instrument panels" />
          </div>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 56 }}>What happens on this leg</h2>
          <ul style={{ lineHeight: 1.9, color: "var(--cg-ink-soft)", paddingLeft: 22 }}>
            <li>Monitored deployment with alerting on the failure modes that matter</li>
            <li>Rollback paths planned before they are needed</li>
            <li>Live dashboards reading from one source of truth</li>
            <li>The flag moment: the system holds under real load</li>
          </ul>

          <h2 className="cg-h2" style={{ fontSize: "1.7rem", marginTop: 48 }}>What you leave with</h2>
          <p className="cg-lede">You leave with a running system your team can watch, measured from one truth, with nobody guessing.</p>
          <p className="cg-note" style={{ fontSize: "1.35rem", marginTop: 26 }}>deployment is a beginning you can see, not a handoff and a prayer</p>
        </div>
      </main>
      <LegCta sceneId="scene-05" />
      <LegFooter />
    </div>
  );
}
