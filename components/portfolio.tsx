"use client";

import { useEffect, useState } from "react";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Doors } from "@/components/sections/doors";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { ProofBand } from "@/components/sections/proof-band";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { SiteHeader } from "@/components/site-header";
import { useReveal } from "@/components/use-reveal";
import { COPY, type Lang } from "@/lib/copy";
import { SITE } from "@/lib/site";

/**
 * Page unique du portfolio.
 *
 * Le sélecteur FR/EN bascule le contenu côté client, comme dans le design
 * source ; le rendu serveur utilise `SITE.defaultLang`, ce qui laisse la
 * version française complète dans le HTML initial.
 */
export function Portfolio() {
  const [lang, setLang] = useState<Lang>(SITE.defaultLang);
  const t = COPY[lang];

  useReveal(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen">
      <SiteHeader t={t} lang={lang} onLangChange={setLang} />

      <span id="top" />

      <div className="mx-auto max-w-[1180px] px-10">
        <Hero t={t} />
      </div>

      <ProofBand t={t} />

      <div className="mx-auto max-w-[1180px] px-10">
        {SITE.cdiMode === "double" && <Doors t={t} />}

        <span id="services" />
        <Services t={t} />

        <span id="travaux" />
        <Work t={t} />

        <span id="methode" />
        <Method t={t} />

        <About t={t} />
      </div>

      <span id="contact" />
      <Contact t={t} />
    </div>
  );
}
