import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Ethan Huot — Plateformes pour jeux de société et jeux de cartes";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage("fr");
}
