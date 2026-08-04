import type { Metadata } from "next";
import type { ReactNode } from "react";

import { COPY } from "@/lib/copy";

/**
 * Les métadonnées de la 404 anglaise vivent ici : un `not-found.tsx` n'en
 * exporte pas, et celles de la page qui appelle `notFound()` sont écartées
 * au profit de la mise en page englobante. Cette mise en page-ci est la plus
 * proche de la limite 404, c'est donc elle qui fixe le titre.
 */
export const metadata: Metadata = {
  title: COPY.en.nfMetaTitle,
  robots: { index: false, follow: true },
};

export default function IntrouvableLayout({ children }: { children: ReactNode }) {
  return children;
}
