import type { ReactNode } from "react";

import "@/app/globals.css";
import { fontVariables } from "@/lib/fonts";
import type { Lang } from "@/lib/copy";

/**
 * Enveloppe `<html>` partagée par les deux racines de langue.
 *
 * Chaque langue a sa propre racine (`app/(fr)` et `app/(en)`) pour que
 * l'attribut `lang` soit juste dès le HTML serveur : le design source le
 * corrigeait après hydratation, ce qui laissait le contenu anglais annoncé
 * comme français aux moteurs et aux lecteurs d'écran.
 *
 * `suppressHydrationWarning` : `RevealScript` (rendu par `Portfolio`) ajoute
 * une classe sur `<html>` avant la première peinture, donc avant que React
 * n'hydrate. Sans cette annotation, React signale l'écart, abandonne
 * l'hydratation de l'arbre et remonte un DOM neuf — ce qui détache les nœuds
 * déjà observés et annule silencieusement toutes les révélations.
 */
export function Document({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${fontVariables} antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
