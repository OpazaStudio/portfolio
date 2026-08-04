import { EB_Garamond, JetBrains_Mono } from "next/font/google";

/**
 * EB Garamond ne sert qu'en graisse 400, en romain.
 *
 * Le design source déclarait aussi l'italique et la graisse 500 : ni l'un ni
 * l'autre n'apparaissent dans le projet, et `next/font` préchargeait le
 * fichier italique — 47 Ko en priorité haute, en concurrence de bande
 * passante avec les polices du premier rendu.
 */
export const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/** La graisse 500 sert au logo de l'en-tête. */
export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = `${ebGaramond.variable} ${jetBrainsMono.variable}`;
