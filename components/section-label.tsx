import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: ReactNode;
  icon: ReactNode;
  /** Ancre de navigation : posée sur le titre lui-même, pas sur un `<span>` vide. */
  id?: string;
  /** `dark` : étiquette posée sur le bloc contact vert foncé. */
  tone?: "light" | "dark";
};

/**
 * Colonne de gauche des sections : pictogramme + intitulé en petites capitales.
 *
 * C'est un `<h2>` : le design source en faisait un `<div>`, ce qui laissait le
 * document sur une suite de huit `<h3>` sans titre de niveau intermédiaire —
 * la navigation par titres ne restituait ni le plan ni le nom des sections.
 * L'apparence est inchangée.
 *
 * `self-start` est indispensable : la section est un conteneur flex en
 * `align-items: stretch`, donc sans lui la boîte de l'étiquette prend toute la
 * hauteur de la section et `items-center` fait dériver le texte jusqu'à son
 * milieu vertical — 459 px plus bas dans le cas de « Travaux ».
 */
export function SectionLabel({
  children,
  icon,
  id,
  tone = "light",
}: SectionLabelProps) {
  return (
    <h2
      id={id}
      data-reveal
      className={cn(
        "flex flex-[0_0_160px] items-center gap-[11px] self-start font-mono text-[0.6875rem] tracking-[0.1em] uppercase",
        tone === "dark" ? "text-marker" : "text-olive",
      )}
    >
      {icon}
      {children}
    </h2>
  );
}
