import Link from "next/link";

import { Container } from "@/components/container";
import { COPY, type Lang } from "@/lib/copy";
import { PATH } from "@/lib/metadata";

/**
 * Corps de la page 404, partagé par les deux langues.
 *
 * La langue est déduite de l'URL et non de l'en-tête `Accept-Language` :
 * `/en/…` sert la version anglaise, tout le reste la française. C'est
 * déterministe, ça reste entièrement statique, et ça évite un `proxy.ts`
 * qui devinerait la langue d'un visiteur déjà arrivé par un chemin précis.
 */
export function NotFoundPage({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const autre: Lang = lang === "fr" ? "en" : "fr";

  return (
    <main>
      <Container className="flex min-h-screen flex-col justify-center py-24">
        <p className="text-olive font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
          {t.nfLabel}
        </p>
        <div className="bg-marker mt-[14px] h-[2px] w-[160px] origin-left" />

        <h1 className="mt-10 max-w-[720px] text-[clamp(2.375rem,0.55rem+4.7vw,5.25rem)] leading-[1.04] font-normal tracking-[-0.022em] text-pretty">
          {t.nfTitle}
        </h1>

        <p className="text-body mt-8 max-w-[520px] text-[1.375rem] leading-[1.5] text-pretty">
          {t.nfBody}
        </p>

        <div className="mt-[44px] flex flex-wrap gap-[14px]">
          <Link
            href={PATH[lang]}
            className="cta bg-ink text-parchment hover:bg-deep px-7 py-4 font-mono text-[0.75rem] tracking-[0.08em] uppercase"
          >
            {t.nfHome}
          </Link>
          <Link
            href={PATH[autre]}
            hrefLang={autre}
            lang={autre}
            className="cta border-line-control text-ink hover:bg-marker hover:border-marker border px-7 py-4 font-mono text-[0.75rem] tracking-[0.08em] uppercase"
          >
            {t.nfOther}
          </Link>
        </div>
      </Container>
    </main>
  );
}
