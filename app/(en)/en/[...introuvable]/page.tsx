import { notFound } from "next/navigation";

/**
 * Attrape tout ce qui commence par `/en/` et n'existe pas, pour que la 404
 * anglaise se déclenche au lieu de la française posée à la racine.
 */
export default function Introuvable(): never {
  notFound();
}
