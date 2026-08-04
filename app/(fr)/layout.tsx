import type { ReactNode } from "react";

import { Document } from "@/components/document";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("fr");

export default function FrLayout({ children }: { children: ReactNode }) {
  return <Document lang="fr">{children}</Document>;
}
