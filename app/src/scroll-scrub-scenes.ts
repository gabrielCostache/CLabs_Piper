/**
 * Scene data for the scroll-scrub journey — CIGGA-Labs field journal.
 *
 * Multi-leg (6 worlds): one entry per seam-locked leg, in journey order. Every
 * `poster` is the exact first frame of the encoded clip beside it (extracted
 * after encoding with the scroll-scrub video helper).
 *
 * Keep this array a module constant. Changing its identity on every render
 * intentionally rebuilds the media controller.
 */
import type {
  ScrollScrubConnector,
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

/** Brand tokens for the journey layer. Set from the design brief. */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#D7FF3F",
  background: "#F5F0D8",
  ink: "#171D18",
  muted: "#4a5348",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "scene-01",
    label: "The Leak",
    kicker: "Operational drag",
    title: "Your business is leaking hours.",
    body: "Leads slip between tools. Follow-up depends on memory. Handoffs live in inboxes. Growth multiplies the noise, not the output.",
    tags: ["Lead leakage", "Manual follow-up", "Disconnected tools"],
    clip: "/assets/world/scene-01.mp4",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    poster: "/assets/world/scene-01-poster.png",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    linger: 0.35,
  },
  {
    id: "scene-02",
    label: "The Diagnosis",
    kicker: "Systems audit",
    title: "First, we find every kink in the hose.",
    body: "A CIGGA-Labs engagement starts with a working map of how your business actually runs: every tool, every handoff, every silent failure, priced in hours.",
    tags: ["Workflow mapping", "Bottleneck trace", "Data integrity"],
    clip: "/assets/world/scene-02.mp4",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    poster: "/assets/world/scene-02-poster.png",
    mobilePoster: "/assets/world/scene-02-mobile-poster.png",
    linger: 0.35,
  },
  {
    id: "scene-03",
    label: "The Build",
    kicker: "Architecture",
    title: "Then everything plugs into one spine.",
    body: "CRM, funnels, payments, comms, and AI agents, wired into one designed system your whole team can see and trust.",
    tags: ["CRM core", "AI agents", "Integrations"],
    clip: "/assets/world/scene-03.mp4",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    poster: "/assets/world/scene-03-poster.png",
    mobilePoster: "/assets/world/scene-03-mobile-poster.png",
    linger: 0.35,
  },
  {
    id: "scene-04",
    label: "The Proof",
    kicker: "Build and test",
    title: "Nothing deploys until it survives testing.",
    body: "Every automation ships with test runs, edge-case handling, monitoring, and documentation your team can actually read.",
    tags: ["Edge cases", "Test runs", "Documentation"],
    clip: "/assets/world/scene-04.mp4",
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    poster: "/assets/world/scene-04-poster.png",
    mobilePoster: "/assets/world/scene-04-mobile-poster.png",
    linger: 0.35,
  },
  {
    id: "scene-05",
    label: "It Holds",
    kicker: "Deployment",
    title: "Then it just works. Every day.",
    body: "The system runs in the background while your team gets clarity, speed, and control back. The flag goes up when it holds.",
    tags: ["Live monitoring", "Clean handoff", "Team training"],
    clip: "/assets/world/scene-05.mp4",
    mobileClip: "/assets/world/scene-05-mobile.mp4",
    poster: "/assets/world/scene-05-poster.png",
    mobilePoster: "/assets/world/scene-05-mobile-poster.png",
    linger: 0.35,
  },
  {
    id: "scene-06",
    label: "Connected",
    kicker: "Your system, whole",
    title: "One connected business, end to end.",
    body: "Funnels, AI agents, CRM, integrations, and operations: one system you can see, measure, and steer. That is what CIGGA-Labs builds.",
    tags: ["Top Rated on Upwork", "1,000+ client hours"],
    clip: "/assets/world/scene-06.mp4",
    mobileClip: "/assets/world/scene-06-mobile.mp4",
    poster: "/assets/world/scene-06-poster.png",
    mobilePoster: "/assets/world/scene-06-mobile-poster.png",
    linger: 0.4,
  },
];

/**
 * Aerial connectors between consecutive dives. Posters are the exact first
 * frame of each encoded connector clip.
 */
export const scrollScrubConnectors: ScrollScrubConnector[] = [
  {
    clip: "/assets/world/conn-1.mp4",
    mobileClip: "/assets/world/conn-1-mobile.mp4",
    poster: "/assets/world/conn-1-poster.png",
    mobilePoster: "/assets/world/conn-1-mobile-poster.png",
  },
  {
    clip: "/assets/world/conn-2.mp4",
    mobileClip: "/assets/world/conn-2-mobile.mp4",
    poster: "/assets/world/conn-2-poster.png",
    mobilePoster: "/assets/world/conn-2-mobile-poster.png",
  },
  {
    clip: "/assets/world/conn-3.mp4",
    mobileClip: "/assets/world/conn-3-mobile.mp4",
    poster: "/assets/world/conn-3-poster.png",
    mobilePoster: "/assets/world/conn-3-mobile-poster.png",
  },
  {
    clip: "/assets/world/conn-4.mp4",
    mobileClip: "/assets/world/conn-4-mobile.mp4",
    poster: "/assets/world/conn-4-poster.png",
    mobilePoster: "/assets/world/conn-4-mobile-poster.png",
  },
  {
    clip: "/assets/world/conn-5.mp4",
    mobileClip: "/assets/world/conn-5-mobile.mp4",
    poster: "/assets/world/conn-5-poster.png",
    mobilePoster: "/assets/world/conn-5-mobile-poster.png",
  },
];
