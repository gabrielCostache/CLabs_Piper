/** CIGGA-Labs shared bits: hand-drawn icons, monogram, section helpers. */
import type { CSSProperties } from "react";

export const UPWORK_URL = "https://www.upwork.com/freelancers/~0137ced3bf3756ada3";

export function CiggaMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <rect x="3" y="3" width="38" height="38" rx="11" fill="#171D18" />
      <path
        d="M28.5 17.2c-1.1-1.9-3.3-3-6.4-3-4.9 0-8.3 3.6-8.3 8.4 0 4.9 3.4 8.4 8.5 8.4 3 0 5.1-1.1 6.3-3"
        stroke="#D7FF3F"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="31.6" cy="14a1.6" ry="1.6" r="1.6" fill="#FF6A2A" />
    </svg>
  );
}

/** small hand-drawn flag used on problem rows */
export function FlagDoodle({ color = "#FF6A2A" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className="cg-problem__flag">
      <path d="M6 23V4.2" stroke="#171D18" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M6.5 5.2c3.4-2.2 6.2 1 9.8-.6 1.8-.8 3.4-.3 4.2.4v7.6c-.8-.7-2.4-1.2-4.2-.4-3.6 1.6-6.4-1.6-9.8.6z"
        fill={color}
        stroke="#171D18"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconProps = {
  fill: "none",
  stroke: "#171D18",
  strokeWidth: 2.1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const capIcons: Record<string, React.ReactNode> = {
  agents: (
    <svg viewBox="0 0 24 24" {...iconProps} aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2.5" />
      <path d="M9.5 3.5v3.5M14.5 3.5v3.5M9.5 17v3.5M14.5 17v3.5M3.5 9.5H7M3.5 14.5H7M17 9.5h3.5M17 14.5h3.5" />
      <path d="M10.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" {...iconProps} aria-hidden="true">
      <ellipse cx="12" cy="5.6" rx="7" ry="2.6" />
      <path d="M5 5.6v6.2c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V5.6" />
      <path d="M5 11.8v6.2c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6.2" />
    </svg>
  ),
  funnel: (
    <svg viewBox="0 0 24 24" {...iconProps} aria-hidden="true">
      <path d="M4 5h16l-6.2 7.2v5.6L10.2 20v-7.8L4 5z" />
      <path d="M9 9.2h6" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 24 24" {...iconProps} aria-hidden="true">
      <path d="M12 3.6 20.5 8 12 12.4 3.5 8 12 3.6z" />
      <path d="M3.5 12.4 12 16.8l8.5-4.4" />
      <path d="M3.5 16.6 12 21l8.5-4.4" />
    </svg>
  ),
  hub: (
    <svg viewBox="0 0 24 24" {...iconProps} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="4.4" cy="5.4" r="1.9" />
      <circle cx="19.6" cy="5.4" r="1.9" />
      <circle cx="4.4" cy="18.6" r="1.9" />
      <circle cx="19.6" cy="18.6" r="1.9" />
      <path d="M9.8 9.8 5.8 6.8M14.2 9.8l4-3M9.8 14.2l-4 3M14.2 14.2l4 3" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" {...iconProps} aria-hidden="true">
      <path d="M14.8 6.2a4.3 4.3 0 0 1 5.6-2.6l-3 3 1.4 1.4 3-3a4.3 4.3 0 0 1-5.9 5.6L7.6 19a2 2 0 0 1-2.8-2.8l8.4-8.4z" />
      <path d="M5.4 18.6h.01" strokeWidth="3" />
    </svg>
  ),
};

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="cg-eyebrow">{children}</p>;
}

export function SectionKicker({ id, eyebrow, title, lede, style }: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  style?: CSSProperties;
}) {
  return (
    <div style={style}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="cg-h2" id={id}>{title}</h2>
      {lede ? <p className="cg-lede">{lede}</p> : null}
    </div>
  );
}
