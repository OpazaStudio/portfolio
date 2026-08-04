import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

/**
 * `robots.txt`, généré à la construction.
 *
 * Tout est indexable, y compris le CV : c'est un choix, pas un défaut. Un
 * `disallow` sur le PDF n'empêcherait que son référencement — le fichier
 * reste lié dans le HTML et téléchargeable par quiconque, et les moissonneurs
 * ignorent ce fichier. Ça coûterait la découvrabilité sans réduire
 * l'exposition. La protection se joue sur le contenu du PDF, pas sur l'URL.
 *
 * La 404 porte déjà `robots: { index: false }` dans ses métadonnées ; elle
 * n'a pas besoin d'être exclue ici.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", SITE.url).href,
    host: SITE.url,
  };
}
