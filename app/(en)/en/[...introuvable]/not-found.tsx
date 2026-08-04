import { NotFoundPage } from "@/components/not-found-page";

/**
 * 404 anglaise. Elle hérite de `app/(en)/layout.tsx`, donc de
 * `<html lang="en">` — pas besoin de rendre sa propre enveloppe.
 */
export default function NotFoundEn() {
  return <NotFoundPage lang="en" />;
}
