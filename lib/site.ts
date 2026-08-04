/**
 * Réglages globaux du portfolio.
 *
 * Ces valeurs correspondent aux props exposées par le design source
 * (`Portfolio Ethan Huot.dc.html`), figées sur leurs valeurs par défaut :
 * `cdiMode: "double"`, `showPricing: true`, `lang: "fr"`, `motion: true`.
 */

import type { Lang } from "@/lib/copy";

/**
 * Manière dont la recherche d'un CDI est affichée :
 * - `discret` : rien n'est affiché ;
 * - `mention` : une ligne discrète sous l'accroche ;
 * - `double`  : le bloc « deux portes » (projet à construire / recrutement).
 */
export type CdiMode = "discret" | "mention" | "double";

type SiteConfig = {
  cdiMode: CdiMode;
  showPricing: boolean;
  defaultLang: Lang;
  /** Coupe toutes les révélations au défilement (les animations CSS restent gérées par `prefers-reduced-motion`). */
  motion: boolean;
  email: string;
  cvHref: string;
  github: string;
  linkedin: string;
};

export const SITE: SiteConfig = {
  cdiMode: "double",
  showPricing: true,
  defaultLang: "fr",
  motion: true,
  email: "contact@opaza.fr",
  cvHref: "/cv-ethan-huot.pdf",
  // Placeholders du design source : à remplacer par les vraies URL de profil.
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};
