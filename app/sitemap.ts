import type { MetadataRoute } from "next";

import { PATH } from "@/lib/metadata";
import { SITE } from "@/lib/site";

const abs = (path: string) => new URL(path, SITE.url).href;

/**
 * `sitemap.xml`, généré à la construction.
 *
 * Deux entrées : les deux versions linguistiques, chacune déclarant l'autre en
 * `hreflang`. C'est le pendant machine de `alternates.languages` posé dans
 * `metadataFor` — un moteur qui ne lit que le sitemap voit la même paire.
 *
 * `lastModified` vaut la date de construction : la page étant entièrement
 * statique, son contenu ne change qu'au déploiement.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: abs(PATH.fr), en: abs(PATH.en) };
  const lastModified = new Date();

  return [
    {
      url: abs(PATH.fr),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: abs(PATH.en),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
  ];
}
