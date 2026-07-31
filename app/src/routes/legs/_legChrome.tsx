/** SEO sat Nav + footer for leg pages (shares the homepage chrome). */
import { CiggaMark } from "../components/cigga";

export function LegNav() {
  return (
    <header className="cg-nav">
      <a className="cg-nav__brand" href="/">
        <CiggaMark />
        <span>CIGGA-Labs</span>
      </a>
      <a className="cg-cta-pill" href="/#contact">Book a strategy call</a>
    </header>
  );
}

export function LegCta({ sceneId }: { sceneId: string }) {
  return (
    <section className="cg-section cg-final" style={{ marginTop: 20 }}>
      <div className="cg-wrap" style={{ textAlign: "center", maxWidth: 640 }}>
        <h2 className="cg-h2">This is one leg. The full system is the point.</h2>
        <p className="cg-lede" style={{ marginInline: "auto" }}>
          Back on the field journal you can watch the whole journey, or skip to the part where we map yours.
        </p>
        <div style={{ marginTop: 30, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="cg-cta-pill" href="/#contact">Book a strategy call</a>
          <a
            href={"/#" + sceneId}
            style={{
              display: "inline-flex", alignItems: "center",
              color: "var(--cg-pulp)", fontWeight: 700, textDecoration: "none",
              borderBottom: "2px solid var(--cg-citron)", padding: "10px 2px",
            }}
          >
            Watch this leg in the film →
          </a>
        </div>
      </div>
    </section>
  );
}

export function LegFooter() {
  return (
    <footer className="cg-footer">
      <div className="cg-footer__row">
        <span>© {new Date().getFullYear()} CIGGA-Labs</span>
        <a href="/">Back to the field journal</a>
      </div>
    </footer>
  );
}
