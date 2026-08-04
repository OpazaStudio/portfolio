import type { Metadata } from "next";

import { Document } from "@/components/document";
import { NotFoundPage } from "@/components/not-found-page";
import { COPY } from "@/lib/copy";

/**
 * 404 pour toute URL hors de `/en`.
 *
 * Elle rend sa propre enveloppe `<html>` : les deux langues vivent dans des
 * groupes de routes (`app/(fr)` et `app/(en)`), il n'existe donc aucune mise
 * en page au-dessus d'elle. Son pendant anglais est `app/(en)/en/not-found.tsx`,
 * atteint via le segment attrape-tout `app/(en)/en/[...introuvable]`.
 */
export const metadata: Metadata = {
  title: COPY.fr.nfMetaTitle,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Document lang="fr">
      <NotFoundPage lang="fr" />
    </Document>
  );
}
