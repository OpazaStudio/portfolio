import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Doors } from "@/components/sections/doors";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { ProofBand } from "@/components/sections/proof-band";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/sections/site-footer";
import { Work } from "@/components/sections/work";
import { Container } from "@/components/container";
import { Reveal, RevealScript } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { COPY, type Lang } from "@/lib/copy";
import { SITE } from "@/lib/site";

/**
 * Page unique du portfolio.
 *
 * Composant serveur : le design source posait `"use client"` sur la racine,
 * ce qui envoyait tout l'arbre de sections et les deux langues de `lib/copy`
 * au navigateur. Seule la révélation au défilement reste cliente, dans un
 * îlot qui ne rend rien.
 */
export function Portfolio({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  return (
    <>
      {/* Avant tout contenu : arme l'état masqué des révélations avant la
          première peinture. Rendu ici et non dans `Document` pour que la 404,
          qui n'a rien à révéler, garde un `<html>` intact. */}
      <RevealScript />

      <a
        href="#contenu"
        className="skip-link px-4 py-3 font-mono text-[0.75rem] tracking-[0.06em] uppercase"
      >
        {t.skipLink}
      </a>

      <SiteHeader t={t} lang={lang} />

      <main id="contenu">
        <Container>
          <Hero t={t} />
        </Container>

        <ProofBand t={t} />

        <Container>
          {SITE.cdiMode === "double" && <Doors t={t} />}
          <Services t={t} />
          <Work t={t} />
          <Method t={t} />
          <About t={t} />
        </Container>

        <Contact t={t} />
      </main>

      <SiteFooter t={t} />

      <Reveal />
    </>
  );
}
