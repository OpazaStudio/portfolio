import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: ReactNode;
  icon: ReactNode;
  /** `dark` : étiquette posée sur le bloc contact vert foncé. */
  tone?: "light" | "dark";
};

/** Colonne de gauche des sections : pictogramme + intitulé en petites capitales. */
export function SectionLabel({
  children,
  icon,
  tone = "light",
}: SectionLabelProps) {
  return (
    <div
      data-reveal
      className={cn(
        "flex flex-[0_0_160px] items-center gap-[11px] font-mono text-[11px] tracking-[0.1em] uppercase",
        tone === "dark" ? "text-marker" : "text-olive",
      )}
    >
      {icon}
      {children}
    </div>
  );
}
