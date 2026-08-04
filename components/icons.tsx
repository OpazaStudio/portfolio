import { cn } from "@/lib/cn";

/** Feuille du logo, dans l'en-tête. */
export function LeafMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.2a3.1 3.1 0 0 1 3.1 3.1c0 1-.44 1.86-1.13 2.45 1.36.5 2.53 1.27 3.79 1.27H21a1.55 1.55 0 0 1 0 3.1h-2.04c-1.07 0-1.95-.2-2.82-.58.87 1.55 1.36 3.4 1.36 5.44V21.8H6.5v-3.82c0-2.04.49-3.89 1.36-5.44-.87.38-1.75.58-2.82.58H3a1.55 1.55 0 0 1 0-3.1h2.24c1.26 0 2.43-.77 3.79-1.27A3.1 3.1 0 0 1 12 2.2z"
        fill="#89986D"
      />
    </svg>
  );
}

/**
 * Pictogrammes de section : une face de dé dont le nombre de points
 * suit l'ordre des sections (1 = Services, 2 = Travaux, … 5 = Contact).
 * Coordonnées `[cx, cy, r]` reprises du design.
 */
const DOT_LAYOUTS: Record<GlyphDots, Array<[number, number, number]>> = {
  1: [[12, 12, 2.2]],
  2: [
    [7.4, 7.4, 2.2],
    [16.6, 16.6, 2.2],
  ],
  3: [
    [6.8, 6.8, 2.1],
    [12, 12, 2.1],
    [17.2, 17.2, 2.1],
  ],
  4: [
    [7.2, 7.2, 2.1],
    [16.8, 7.2, 2.1],
    [7.2, 16.8, 2.1],
    [16.8, 16.8, 2.1],
  ],
  5: [
    [7.2, 7.2, 2.1],
    [16.8, 7.2, 2.1],
    [12, 12, 2.1],
    [7.2, 16.8, 2.1],
    [16.8, 16.8, 2.1],
  ],
};

export type GlyphDots = 1 | 2 | 3 | 4 | 5;

type GlyphProps = {
  dots: GlyphDots;
  /** `dark` : version claire, posée sur le bloc contact vert foncé. */
  tone?: "light" | "dark";
  className?: string;
};

export function Glyph({ dots, tone = "light", className }: GlyphProps) {
  const stroke = tone === "dark" ? "rgb(197 216 157 / 0.6)" : "#9CAB84";
  const fill = tone === "dark" ? "#C5D89D" : "#89986D";

  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("flex-[0_0_auto]", className)}
    >
      <rect
        x="0.6"
        y="0.6"
        width="22.8"
        height="22.8"
        rx="4"
        fill="none"
        stroke={stroke}
      />
      {DOT_LAYOUTS[dots].map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={fill} />
      ))}
    </svg>
  );
}
