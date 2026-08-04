import { ImageResponse } from "next/og";

import type { Lang } from "@/lib/copy";
import { SITE } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PARCHMENT = "#f6f0d7";
const INK = "#23271d";
const MARKER = "#c5d89d";
const OLIVE = "#657143";
const BODY = "#4a5040";
const DEEP = "#3a422e";

/**
 * Récupère EB Garamond au format TrueType, sous-ensemble aux seuls caractères
 * de la carte.
 *
 * `satori`, le moteur derrière `ImageResponse`, ne lit ni le WOFF2 ni l'EOT.
 * L'API CSS de Google choisit le format d'après l'agent utilisateur : un
 * `Mozilla/5.0` nu donne du TTF, un agent MSIE de l'EOT, un navigateur récent
 * du WOFF2. Vérifié à la main avant de figer cette valeur.
 */
async function garamond(text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());

    // L'API ne suffixe pas toujours `format('truetype')` : on ne s'appuie que
    // sur l'URL. C'est ce qui faisait retomber la carte sur une sans-serif.
    const url = css.match(/src:\s*url\((.+?)\)/)?.[1];
    if (!url) return undefined;

    const data = await fetch(url).then((r) => r.arrayBuffer());
    return [{ name: "EB Garamond", data, style: "normal" as const, weight: 400 as const }];
  } catch {
    // Une carte de partage sans la bonne fonte reste préférable à un build
    // qui échoue parce que Google Fonts était injoignable.
    return undefined;
  }
}

/**
 * Carte de partage : c'est ce que voient LinkedIn, Slack ou un client de
 * messagerie quand le lien circule. Le design source n'en avait aucune,
 * l'aperçu se réduisait à une URL nue.
 */
export async function ogImage(lang: Lang) {
  const titre =
    lang === "fr"
      ? "Plateformes pour jeux de société et jeux de cartes"
      : "Platforms for board games and trading card games";
  const sousTitre =
    lang === "fr"
      ? "Développeur full-stack indépendant · La Rochelle"
      : "Independent full-stack developer · La Rochelle, France";
  // Repris mot pour mot de `heroSub` : le bandeau doit se suffire à lui-même,
  // là où `proofKicker` (« … livrées pour ») attend une suite.
  const bandeau =
    lang === "fr"
      ? "Tournois · Boutiques · Back-offices · Applications mobiles"
      : "Tournaments · Shops · Back-offices · Mobile apps";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PARCHMENT,
          fontFamily: "EB Garamond, serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 84px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: OLIVE,
            }}
          >
            Ethan Huot
          </div>
          <div
            style={{
              width: 190,
              height: 3,
              background: MARKER,
              marginTop: 20,
              marginBottom: 46,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.08,
              letterSpacing: -1.6,
              color: INK,
              maxWidth: 940,
            }}
          >
            {titre}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 30,
              color: BODY,
            }}
          >
            {sousTitre}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: DEEP,
            color: PARCHMENT,
            padding: "26px 84px",
            fontSize: 24,
            letterSpacing: 1,
          }}
        >
          <div style={{ display: "flex" }}>{bandeau}</div>
          <div style={{ display: "flex", color: MARKER }}>{SITE.email}</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: await garamond(
        `${titre}${sousTitre}${bandeau}${SITE.email}Ethan Huot`,
      ),
    },
  );
}
