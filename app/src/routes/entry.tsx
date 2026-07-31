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

const KEY = "cg-entry-choice";

function Entry() {
  // No stored preference — we intentionally re-ask every visit per brief.
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* private mode */
    }
  }, []);

  return (
    <div className="cg-entry">
      <div className="cg-entry__bg" aria-hidden="true" />
      <header className="cg-entry__top">
        <a className="cg-nav__brand" href="/" aria-label="CIGGA-Labs home">
          <CiggaMark />
          <span>CIGGA-Labs</span>
        </a>
      </header>

      <main className="cg-entry__main">
        <p className="cg-entry__eyebrow">Automation studio · founder-led</p>
        <h1 className="cg-entry__title">
          Two ways in. <em>Same destination.</em>
        </h1>
        <p className="cg-entry__lede">
          Watch the mascot walk a broken business back to one connected system, or skip the story and go straight to what CIGGA-Labs does.
        </p>

        <div className="cg-entry__figure" aria-hidden="true">
          <img
            src="/assets/gabriel-about.png"
            alt=""
            className="cg-entry__img"
          />
          <span className="cg-entry__figure-cap">and this is your host ↓</span>
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

        <p className="cg-note" style={{ textAlign: "center", fontSize: "1.35rem", marginTop: 40 }}>
          the dog gets there either way; one route is just more fun to watch
        </p>
        {touch && (
          <p className="cg-entry__hint">Mobile recommended: Direct Website</p>
        )}
      </main>
    </div>
  );
}
