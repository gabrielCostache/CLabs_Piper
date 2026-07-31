import { useRef, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import type { ScrollScrubScene } from "@/components/scroll-scrub/scroll-scrub";
import {
  scrollScrubConnectors,
  scrollScrubScenes,
  scrollScrubTheme,
} from "@/scroll-scrub-scenes";
import {
  CiggaMark,
  Eyebrow,
  FlagDoodle,
  SectionKicker,
  UPWORK_URL,
  capIcons,
} from "@/components/cigga";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { mode?: string } => ({
    mode: search.mode === "site" ? "site" : undefined,
  }),
  head: () => ({
    meta: [
      { title: "CIGGA-Labs · Business systems, automation and AI" },
      {
        name: "description",
        content:
          "CIGGA-Labs designs, builds, and scales intelligent business systems: automation, AI agents, CRM architecture, funnels, and integrations. Led by Gabriel Costache, Top Rated on Upwork, 1,000+ client hours.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              name: "CIGGA-Labs",
              description:
                "Automation studio designing, building, and scaling intelligent business systems: automation, AI agents, CRM architecture, funnels, and integrations.",
              founder: {
                "@type": "Person",
                name: "Costache Gabriel",
                jobTitle: "Founder",
                sameAs: [UPWORK_URL],
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who does CIGGA-Labs work with?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Founders, funnel-driven businesses, agencies, course creators, and established online companies that have outgrown disconnected tools and manual work.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does an engagement look like?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Every project starts with a systems audit, then architecture, a tested build, monitored deployment, and a documented handoff your team can operate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with our existing stack?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Engagements are tool-agnostic: CRMs, funnel builders, payment platforms, and internal tools are audited and connected rather than ripped out by default.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do we start?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Book a strategy call. You leave with a working map of where your operation leaks hours and what a connected system would fix first.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What happens after launch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Systems ship with monitoring, documentation, and a training pass. Ongoing support and iteration retainers are available after handoff.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

/* ─── mascot journey legs (scene openers between chapters) ─── */
const LEGS = ["1-2", "2-3", "3-4", "4-5", "5-6"] as const;

/** Wire the mascot's journey-leg actions into scenes 1–5 (finale holds the CTA). */
const journeyScenes: ScrollScrubScene[] = scrollScrubScenes.map((scene, i) => {
  if (i === 0 || i === scrollScrubScenes.length - 1) return scene;
  return {
    ...scene,
    actions: (
      <a className="cg-legged" href={"/legs/" + LEGS[i - 1]}>
        See this leg of Gabriel&apos;s process <span aria-hidden="true">→</span>
      </a>
    ),
  };
});

const problems = [
  { name: "Leads fall through the cracks between capture and CRM", cost: "every week, silently" },
  { name: "Follow-up depends on someone's memory and mood", cost: "deals go cold" },
  { name: "Fulfillment is a manual relay race of inboxes and DMs", cost: "hours per order" },
  { name: "The same data gets typed into four different tools", cost: "double entry, half truth" },
  { name: "Reports disagree because each tool keeps its own score", cost: "decisions on fog" },
  { name: "Integrations fail quietly, and you find out from a customer", cost: "trust, refunded" },
];

const capabilities = [
  { icon: "agents", title: "AI agents and assistants", tag: "always on", body: "Agents that qualify leads, draft replies, enrich records, and route work, governed by your rules instead of generic prompts." },
  { icon: "crm", title: "CRM architecture", tag: "one truth", body: "A CRM designed around your real pipeline: stages, data model, ownership, and hygiene rules your team actually keeps." },
  { icon: "funnel", title: "Funnel systems", tag: "click to close", body: "Capture, nurture, booking, and post-sale flows connected end to end, measured at every step instead of guessed." },
  { icon: "hub", title: "Integrations and APIs", tag: "no silos", body: "Payment, comms, scheduling, fulfillment, and internal tools wired together with retries, alerts, and no silent failures." },
  { icon: "stack", title: "Operational workflows", tag: "no copy-paste", body: "The repetitive team tasks: onboarding, invoicing, reporting, handoffs, turned into checked, logged, automatic runs." },
  { icon: "wrench", title: "Custom implementation", tag: "built for you", body: "When no connector exists, we build it: scripts, middleware, mini-apps, and the glue that keeps your stack one system." },
];

const dossiers = [
  { no: "File 01", title: "Funnel business · lead-to-close automation", desc: "Scope snapshot: capture, qualification, routing, and follow-up unified into one pipeline. Stack, timeline, and results will publish with client sign-off." },
  { no: "File 02", title: "Agency · operations backbone", desc: "Scope snapshot: client onboarding, delivery tracking, and reporting moved out of inboxes into a single monitored workflow. Details pending client material." },
  { no: "File 03", title: "Education business · fulfillment engine", desc: "Scope snapshot: purchase-to-delivery fulfillment, access provisioning, and support triage automated end to end. Full write-up pending client sign-off." },
];

const steps = [
  { h: "Discovery and systems audit", hand: "the diagnosis leg", p: "We map how your business actually runs: every tool, handoff, and silent failure, priced in hours. You get the map whether or not we build together." },
  { h: "Architecture", hand: "one spine", p: "The target system on one page: what connects to what, what the source of truth is, and what gets automated first for the fastest return." },
  { h: "Build and test", hand: "nothing ships raw", p: "The system is built in staged modules, each one run against real cases, edge cases, and failure modes before it touches live operations." },
  { h: "Deploy and monitor", hand: "the flag goes up", p: "Go-live includes monitoring, alerting, and rollback paths. When something upstream breaks, you hear it from the system, not a customer." },
  { h: "Handoff and support", hand: "your team owns it", p: "Documentation written for humans, a training pass with your team, and an iteration retainer if you want the system to keep growing." },
];

const faqs = [
  { q: "Who does CIGGA-Labs work with?", a: "Founders, funnel-driven businesses, agencies, course creators, and established online companies that have outgrown disconnected tools, repetitive manual work, and fragile workflows." },
  { q: "What does an engagement look like?", a: "Every project starts with a systems audit, then architecture, a tested build, monitored deployment, and a documented handoff your team can operate without us." },
  { q: "Do you work with our existing stack?", a: "Yes. Engagements are tool-agnostic. Your CRM, funnel builder, payment platform, and internal tools are audited and connected; replacement is a decision, not a default." },
  { q: "How do we start?", a: "Book a strategy call below. You leave with a working map of where your operation leaks hours and which connection fixes the most first." },
  { q: "What happens after launch?", a: "Systems ship with monitoring, documentation, and a training pass. Ongoing support and iteration retainers are available when you want the system to keep evolving." },
];

function Index() {
  const { mode } = Route.useSearch();
  const siteMode = mode === "site";

  return (
    <div className="cg-site" data-mode={siteMode ? "site" : "story"}>
      <SiteNav siteMode={siteMode} />
      {siteMode ? <SiteHero /> : (
        <main>
          {/* ── the cinematic journey (chapters read over the hero's exploration) ── */}
          <ScrollScrub
            scenes={journeyScenes}
            connectors={scrollScrubConnectors}
            theme={scrollScrubTheme}
          />
        </main>
      )}
      <main>
        <ProofBand />
        <Problems />
        <Capabilities />
        <Compare />
        <Work />
        <Process />
        <Reputation />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ─────────────────────────── chrome ─────────────────────────── */

function SiteNav({ siteMode }: { siteMode?: boolean }) {
  return (
    <header className="cg-nav">
      <Link className="cg-nav__brand" to="/entry" aria-label="CIGGA-Labs home">
        <CiggaMark />
        <span>CIGGA-Labs</span>
      </Link>
      <nav className="cg-nav__links" aria-label="Site">
        <a className="cg-nav__link" href="#problems">Problems</a>
        <a className="cg-nav__link" href="#capabilities">Capabilities</a>
        <a className="cg-nav__link" href="#work">Work</a>
        <a className="cg-nav__link" href="#process">Process</a>
        <a className="cg-nav__link" href="#about">About</a>
        <a className="cg-nav__link" href="#faq">FAQ</a>
      </nav>
      <div className="cg-nav__mode" aria-label="View mode">
        <Link
          to="/"
          search={{}}
          aria-current={siteMode ? undefined : "page"}
          className={"cg-nav__mode-btn" + (siteMode ? "" : " is-on")}
        >
          Story
        </Link>
        <Link
          to="/"
          search={{ mode: "site" }}
          aria-current={siteMode ? "page" : undefined}
          className={"cg-nav__mode-btn" + (siteMode ? " is-on" : "")}
        >
          Direct
        </Link>
      </div>
      <a className="cg-cta-pill" href="#contact">Book a strategy call</a>
    </header>
  );
}

/** Compact hero for “Direct Website” mode: clear positioning, no video. */
function SiteHero() {
  return (
    <section className="cg-sitehero" aria-label="Overview">
      <div className="cg-wrap">
        <div className="cg-sitehero__grid">
          <div>
            <Eyebrow>Automation studio · founder-led</Eyebrow>
            <h1 className="cg-h2" style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}>
              Your business is leaking hours.{" "}
              <em>We build the system that stops it.</em>
            </h1>
            <p className="cg-lede" style={{ maxWidth: "46ch" }}>
              CIGGA-Labs designs, builds, and scales intelligent business systems: automation, AI agents, CRM architecture, funnels, and integrations for companies that have outgrown disconnected tools.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
              <a className="cg-cta-pill" href="#contact" style={{ fontSize: "1rem", padding: "14px 26px" }}>
                Book a strategy call
              </a>
              <Link
                to="/"
                search={{}}
                style={{
                  display: "inline-flex", alignItems: "center",
                  fontWeight: 700, color: "var(--cg-ink)", textDecoration: "none",
                  borderBottom: "2px solid var(--cg-citron)", padding: "6px 2px", alignSelf: "center",
                }}
              >
                Or watch the story first →
              </Link>
            </div>
          </div>
          <div className="cg-sitehero__art" aria-hidden="true">
            <img src="/assets/world/scene-06-poster.webp" alt="" width={640} height={427} />
            <div className="cg-sitehero__badge">
              <span>Top Rated</span>
              <strong>1,000+ hrs</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="cg-footer">
      <div className="cg-footer__row">
        <span>© {new Date().getFullYear()} CIGGA-Labs · Founded by Costache Gabriel</span>
        <span>
          <a href={UPWORK_URL} target="_blank" rel="noreferrer">Upwork profile</a>
          {" · "}
          <a href="#contact">Book a strategy call</a>
        </span>
      </div>
    </footer>
  );
}

/* ─────────────────────────── sections ─────────────────────────── */

function ProofBand() {
  const items = [
    ["Top Rated", "Upwork badge, earned and current"],
    ["1,000+", "client hours delivered on Upwork"],
    ["Millions", "in client funnel revenue supported"],
    ["1 founder", "you work with the person who builds"],
  ];
  return (
    <section className="cg-proof" aria-label="Proof">
      <div className="cg-proof__row">
        {items.map(([num, lbl]) => (
          <div className="cg-proof__item" key={lbl}>
            <span className="cg-proof__num">{num}</span>
            <span className="cg-proof__lbl">{lbl}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="cg-section" id="problems">
      <div className="cg-wrap">
        <SectionKicker
          eyebrow="What it costs you"
          title={<>The expensive problems <em>hiding in plain sight.</em></>}
          lede="None of these look dramatic on a Tuesday. Together they decide whether growth feels like leverage or like dragging the business uphill."
        />
        <div className="cg-problems">
          {problems.map((p) => (
            <div className="cg-problem" key={p.name}>
              <FlagDoodle />
              <span className="cg-problem__name">{p.name}</span>
              <span className="cg-problem__cost">{p.cost}</span>
            </div>
          ))}
        </div>
        <p className="cg-note" style={{ marginTop: 26, fontSize: "1.35rem" }}>
          sound familiar? that&apos;s the leak the hero just flew through ↑
        </p>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="cg-section" id="capabilities" style={{ background: "var(--cg-pulp-deep)" }}>
      <div className="cg-wrap">
        <SectionKicker
          eyebrow="What CIGGA-Labs builds"
          title={<>One partner for the <em>whole connected system.</em></>}
          lede="Not another tool subscription, not a pile of zaps nobody owns. A designed system: sourced, built, tested, and documented by one accountable studio."
        />
        <div className="cg-caps">
          {capabilities.map((c) => (
            <article className="cg-cap" key={c.title}>
              <span className="cg-cap__tag">{c.tag}</span>
              <div className="cg-cap__icon">{capIcons[c.icon]}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(58);

  const move = (clientX: number) => {
    const box = ref.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(94, Math.max(6, pct)));
  };

  return (
    <section className="cg-section" aria-label="Before and after">
      <div className="cg-wrap">
        <SectionKicker
          title={<>From scattered tools to <em>one wired system.</em></>}
          lede="Drag the handle. On the left, the chaos the mascot walked into: severed cables and a waterfall of leads. On the right, the deployed state he plants the flag on: every panel on one bus, one truth, monitored."
        />
        <div
          ref={ref}
          className="cg-compare"
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            move(e.clientX);
            const onMove = (ev: PointerEvent) => move(ev.clientX);
            const up = () => window.removeEventListener("pointermove", onMove);
            window.addEventListener("pointermove", onMove);
            window.addEventListener("pointerup", up, { once: true });
          }}
          role="slider"
          aria-label="Before and after comparison"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(6, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(94, p + 5));
          }}
        >
          <img src="/assets/world/scene-01-poster.png" alt="Before: disconnected tools and leaking lead flow" />
          <div className="cg-compare__after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <img src="/assets/world/scene-05-poster.png" alt="After: one connected, monitored system" />
          </div>
          <div className="cg-compare__handle" style={{ left: `${pos}%` }}>
            <div className="cg-compare__line" />
            <div className="cg-compare__knob" aria-hidden="true">⇔</div>
          </div>
          <span className="cg-compare__tag cg-compare__tag--before">before</span>
          <span className="cg-compare__tag cg-compare__tag--after">after</span>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="cg-section" id="work" style={{ background: "var(--cg-pulp-deep)" }}>
      <div className="cg-wrap">
        <SectionKicker
          title={<>Selected work, <em>filed honestly.</em></>}
          lede="Full case studies publish as client sign-off lands. Until then, each file shows the real shape of an engagement, and nothing is invented."
        />
        <div className="cg-dossiers">
          {dossiers.map((d) => (
            <article className="cg-dossier" key={d.no}>
              <span className="cg-dossier__no">{d.no}</span>
              <div>
                <h3 className="cg-dossier__title">{d.title}</h3>
                <p className="cg-dossier__desc">{d.desc}</p>
              </div>
              <span className="cg-badge-pending">Client material pending</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="cg-section" id="process">
      <div className="cg-wrap">
        <div className="cg-process-grid">
          <div>
            <SectionKicker
              title={<>How a system <em>gets built.</em></>}
              lede="Five stages, one owner, no black box. The mascot's journey on this page is the same route your project takes."
            />
            <p className="cg-note" style={{ fontSize: "1.4rem", marginTop: 24 }}>
              the chapters above are literally this process, animated
            </p>
          </div>
          <div className="cg-rail">
            {steps.map((s) => (
              <div className="cg-step" key={s.h}>
                <span className="cg-step__dot" aria-hidden="true" />
                <h3>
                  {s.h}
                  <span className="cg-step__hand">{s.hand}</span>
                </h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reputation() {
  return (
    <section className="cg-section" id="reputation" style={{ background: "var(--cg-pulp-deep)" }}>
      <div className="cg-wrap">
        <SectionKicker
          eyebrow="Reputation"
          title={<>Proof you can <em>go and check.</em></>}
          lede="No screenshots you have to trust. The work history behind CIGGA-Labs is public: Top Rated on Upwork, with 1,000+ client hours delivered."
        />
        <div className="cg-rep">
          <div className="cg-upwork">
            <span className="cg-upwork__badge">Top Rated</span>
            <div className="cg-upwork__big">1,000+ hrs</div>
            <p className="cg-upwork__sub">
              Delivered on Upwork across automation, CRM, funnel, and integration engagements, including support for businesses whose funnels move seven figures.
            </p>
            <p style={{ marginTop: 18, fontSize: "0.95rem" }}>
              <a href={UPWORK_URL} target="_blank" rel="noreferrer">View the public profile →</a>
            </p>
          </div>
          <div>
            <blockquote className="cg-quote">
              <p>“Gabriel didn&apos;t just connect our tools. He redesigned how the business runs, then stayed until the team trusted it.”</p>
              <cite><span className="cg-quote__pending">Placeholder quote</span> · awaiting permission to publish client wording and name</cite>
            </blockquote>
            <blockquote className="cg-quote">
              <p>“The audit alone paid for the project. We finally knew where every lead went and why follow-up stalled.”</p>
              <cite><span className="cg-quote__pending">Placeholder quote</span> · awaiting permission to publish client wording and name</cite>
            </blockquote>
            <p className="cg-note" style={{ fontSize: "1.3rem" }}>
              real testimonials from the Upwork profile get pasted here verbatim once confirmed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="cg-section" id="about">
      <div className="cg-wrap cg-about">
        <div className="cg-about__photo">
          <img
            src="/assets/gabriel-about.jpg"
            alt="Costache Gabriel, founder of CIGGA-Labs"
            loading="lazy"
          />
        </div>
        <div>
          <SectionKicker
            title={<>Built by someone who <em>has done the work.</em></>}
          />
          <p className="cg-lede" style={{ marginTop: 22 }}>
            CIGGA-Labs is led by <strong>Costache Gabriel</strong>. Gabriel is a Top Rated professional on Upwork with more than 1,000 client hours delivered across automation, AI implementation, CRM architecture, funnel systems, and integrations, including work for businesses whose funnels generate millions in revenue.
          </p>
          <p className="cg-lede">
            The studio exists for a specific kind of company: past the startup scramble, successful enough to feel the operational drag, and done patching it with more tools. CIGGA-Labs stays deliberately founder-led, so the person who scopes your system is the person who builds and stands behind it.
          </p>
          <p className="cg-note" style={{ fontSize: "1.35rem", marginTop: 20 }}>
            the bulldog is the studio spirit animal: stubborn about reliability, allergic to fluff
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="cg-section" id="faq" style={{ background: "var(--cg-pulp-deep)" }}>
      <div className="cg-wrap" style={{ maxWidth: 860 }}>
        <SectionKicker
          eyebrow="Questions"
          title={<>Asked often, <em>answered straight.</em></>}
        />
        <div className="cg-faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span className="cg-plus" aria-hidden="true">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const [status, setStatus] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const local: Record<string, string> = {};
    if (!data.name.trim()) local.name = "Your name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) local.email = "That email does not look right.";
    if (data.message.trim().length < 10) local.message = "Tell us a little about what you want to automate (10+ characters).";
    if (Object.keys(local).length) {
      setErrors(local);
      return;
    }

    setStatus("busy");
    try {
      await submitContact({ data });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="cg-section cg-final" id="contact">
      <div className="cg-wrap">
        <Eyebrow>
          <span style={{ color: "var(--cg-pulp)" }}>Next step</span>
        </Eyebrow>
        <h2 className="cg-h2">See what a connected system fixes first.</h2>
        <p className="cg-lede">
          Book a strategy call and leave with a working map of where your operation leaks hours, what a connected system looks like for your stack, and the first fix worth building. The call is free; the map is yours either way.
        </p>
        <div className="cg-contact">
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
              {[
                "A systems read on your current stack (live on the call).",
                "The first automation worth building, priced in hours saved.",
                "An honest answer on fit, including when not to hire us.",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span aria-hidden="true" style={{
                    flex: "none", width: 22, height: 22, borderRadius: "50%",
                    background: "var(--cg-citron)", border: "2px solid var(--cg-ink)",
                    display: "inline-block", marginTop: 2,
                  }} />
                  <span style={{ lineHeight: 1.5 }}>{t}</span>
                </li>
              ))}
            </ul>
            <p className="cg-note" style={{ fontSize: "1.4rem", marginTop: 28, color: "var(--cg-citron)" }}>
              prefer async? write everything in the box, Gabriel reads it himself
            </p>
          </div>
          {status === "done" ? (
            <div className="cg-form cg-form__ok">
              <CiggaMark size={44} />
              <p className="cg-note" style={{ marginTop: 14 }}>Request received.</p>
              <p style={{ color: "var(--cg-ink-soft)" }}>
                Gabriel will reply personally to schedule your strategy call. Talk soon.
              </p>
            </div>
          ) : (
            <form className="cg-form" onSubmit={onSubmit} noValidate>
              <div className="cg-field">
                <label htmlFor="cg-name">Name</label>
                <input id="cg-name" name="name" type="text" autoComplete="name" />
                {errors.name && <div className="cg-field__err">{errors.name}</div>}
              </div>
              <div className="cg-field">
                <label htmlFor="cg-email">Work email</label>
                <input id="cg-email" name="email" type="email" autoComplete="email" />
                {errors.email && <div className="cg-field__err">{errors.email}</div>}
              </div>
              <div className="cg-field">
                <label htmlFor="cg-company">Company (optional)</label>
                <input id="cg-company" name="company" type="text" autoComplete="organization" />
              </div>
              <div className="cg-field">
                <label htmlFor="cg-message">What should stop being manual?</label>
                <textarea id="cg-message" name="message" placeholder="e.g. leads sit in the inbox for two days before anyone follows up…" />
                {errors.message && <div className="cg-field__err">{errors.message}</div>}
              </div>
              {status === "error" && (
                <p className="cg-field__err" style={{ marginBottom: 12 }}>
                  Something jammed on our side. Try again, or find Gabriel on <a href={UPWORK_URL} target="_blank" rel="noreferrer">Upwork</a>.
                </p>
              )}
              <button className="cg-submit" type="submit" disabled={status === "busy"}>
                {status === "busy" ? "Sending…" : "Book a strategy call"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* keep Link referenced for TanStack route typing on stub pages */
void Link;
