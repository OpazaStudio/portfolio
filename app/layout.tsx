import type { Metadata } from "next";
import { EB_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethan Huot — Plateformes pour jeux de société et jeux de cartes",
  description:
    "Développeur full-stack indépendant, basé à La Rochelle. Tournois, boutiques, back-offices, applications mobiles — du premier écran à la mise en production.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${ebGaramond.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
