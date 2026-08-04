import type { Metadata } from "next";

import { COPY, type Lang } from "@/lib/copy";
import { SITE } from "@/lib/site";

/** Chemin canonique de chaque langue. Le français tient la racine. */
export const PATH: Record<Lang, string> = { fr: "/", en: "/en" };

/**
 * Métadonnées d'une version linguistique.
 *
 * Le design source n'exposait que `title` et `description` : une page de
 * portfolio se partage par lien, et sans `openGraph` l'aperçu se réduit à
 * une URL nue. `alternates.languages` déclare la paire FR/EN aux moteurs.
 */
export function metadataFor(lang: Lang): Metadata {
  const t = COPY[lang];

  return {
    metadataBase: new URL(SITE.url),
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: PATH[lang],
      languages: { fr: PATH.fr, en: PATH.en },
    },
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_GB",
      url: PATH[lang],
      siteName: "Ethan Huot",
      title: t.metaTitle,
      description: t.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
    },
  };
}
