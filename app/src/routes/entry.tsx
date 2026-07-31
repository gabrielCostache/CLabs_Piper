import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { CiggaMark } from "@/components/cigga";

export const Route = createFileRoute("/entry")({
  head: () => ({
    meta: [
      { title: "CIGGA-Labs — Start" },
      {
        name: "description",
        content:
          "Choose your path: watch the mascot work through a broken business, or go straight to the studio overview.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Entry,
});

function Entry() {
  // Intentionally re-ask every visit per brief — no stored preference.
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <div className="cg-entry">
      <div className="cg-entry__bg" aria-hidden="true" />
      <header className="cg-entry__top">
        <Link to="/" className="cg-nav__brand" aria-label="CIGGA-Labs home">
          <CiggaMark />
          <span>CIGGA-Labs</span>
        </Link>
      </header>

      <main className="cg-entry__main">
        <p className="cg-entry__eyebrow">Automation studio · founder-led</p>
        <h1 className="cg-entry__title">
          Two ways in. <em>Same destination.</em>
        </h1>

        <div className="cg-entry__artw" aria-hidden="true">
          <img src="/assets/entry-duo.png" alt="" width={440} height={330} className="cg-entry__art" />
          <p className="cg-entry__artcap">gabriel gets the map · the bulldog runs the build</p>
        </div>

        <div className="cg-entry__cards">
          <Link to="/" className="cg-entry-card cg-entry-card--story" aria-label="Enter the story">
            <span className="cg-entry-card__num">01</span>
            <span className="cg-entry-card__title">Story</span>
            <span className="cg-entry-card__body">
              The field journal. Scroll through six hand-drawn scenes as our bulldog finds the leak, wires the spine, and plants the flag.
            </span>
            <span className="cg-entry-card__meta">45 seconds · animated · best on a larger screen</span>
            <span className="cg-entry-card__go">Enter the journey →</span>
          </Link>

          <Link to="/" search={{ mode: "site" }} className="cg-entry-card cg-entry-card--site" aria-label="Go to the direct website">
            <span className="cg-entry-card__num">02</span>
            <span className="cg-entry-card__title">Direct Website</span>
            <span className="cg-entry-card__body">
              The straight read: problems we solve, capabilities, how we work, proof, and the strategy call.
            </span>
            <span className="cg-entry-card__meta">No video · loads instantly · best on mobile</span>
            <span className="cg-entry-card__go">Skip to the overview →</span>
          </Link>
        </div>

        <p className="cg-entry__foot">the dog gets there either way; one route is just more fun to watch</p>
        {touch ? <p className="cg-entry__hint">On mobile, most people prefer Direct Website.</p> : null}
      </main>
    </div>
  );
}
