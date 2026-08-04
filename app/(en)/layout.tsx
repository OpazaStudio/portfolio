import type { ReactNode } from "react";

import { Document } from "@/components/document";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("en");

export default function EnLayout({ children }: { children: ReactNode }) {
  return <Document lang="en">{children}</Document>;
}
