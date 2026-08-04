/**
 * Réglages globaux du portfolio.
 *
 * Ces valeurs correspondent aux props exposées par le design source
 * (`Portfolio Ethan Huot.dc.html`), figées sur leurs valeurs par défaut :
 * `cdiMode: "double"`, `showPricing: true`, `motion: true`.
 *
 * Les liens sortants sont typés `string | null` : tant qu'une URL réelle
 * n'est pas renseignée, l'interface masque l'entrée plutôt que d'envoyer le
 * visiteur sur la page d'accueil de la plateforme. Un lien absent vaut mieux
 * qu'un lien qui ment.
 *
 * Les tarifs sont masqués (`showPricing: false`). Les montants restent dans
 * `lib/copy.ts` : remettre le drapeau à `true` les réaffiche tels quels.
 */

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
  /** Coupe toutes les révélations au défilement (les animations CSS restent gérées par `prefers-reduced-motion`). */
  motion: boolean;
  /** Domaine de production : base des URL absolues (OpenGraph, canonique). */
  url: string;
  email: string;
  /** Chemin du CV dans `public/`. `null` masque les deux liens qui le portent. */
  cvHref: string | null;
  github: string | null;
  linkedin: string | null;
};

export const SITE: SiteConfig = {
  cdiMode: "double",
  showPricing: false,
  motion: true,
  url: "https://opaza.fr",
  email: "contact@opaza.fr",
  cvHref: "/cv-ethan-huot.pdf",
  github: "https://github.com/Opaza-studio",
  linkedin: "https://www.linkedin.com/in/ethan-huot-opaza-studio/",
};

/** Adresse `mailto:` avec objet pré-rempli selon l'intention du visiteur. */
export function mailto(subject?: string) {
  return subject
    ? `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${SITE.email}`;
}
