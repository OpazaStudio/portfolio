import type { Copy } from "@/lib/copy";
import { SITE, mailto } from "@/lib/site";

export function Hero({ t }: { t: Copy }) {
  return (
    <section className="flex flex-wrap gap-12 pt-[92px] pb-[84px]">
      <div className="flex-[0_0_160px] pt-4">
        <div className="animate-fade-up text-olive font-mono text-[0.6875rem] tracking-[0.1em] uppercase [animation-duration:600ms]">
          {t.introLabel}
        </div>
        <div className="animate-grow bg-marker mt-[14px] h-[2px] origin-left [animation-delay:300ms]" />
      </div>

      <div className="max-w-[880px] flex-[1_1_560px]">
        <p className="animate-fade-up text-muted mb-[30px] flex items-center gap-[11px] font-mono text-[0.75rem] tracking-[0.06em] [animation-delay:100ms] [animation-duration:600ms]">
          <span className="animate-dot bg-moss inline-block h-2 w-2 shrink-0 rounded-full" />
          {t.avail}
        </p>

        {/* Le `clamp` mêle `rem` et `vw` : la borne basse suit la taille de
            police choisie par le lecteur, ce qu'une valeur en `px` ignore. */}
        <h1 className="text-[clamp(2.375rem,0.55rem+4.7vw,5.25rem)] leading-[1.04] font-normal tracking-[-0.022em] text-pretty">
          <span className="block overflow-hidden pb-[0.04em]">
            <span className="animate-line-up block [animation-delay:150ms]">
              {t.hero1}
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.04em]">
            <span className="animate-line-up block [animation-delay:270ms]">
              {t.hero2} <span className="hero-mark">{t.heroMark}</span>
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.04em]">
            <span className="animate-line-up block [animation-delay:390ms]">
              {t.hero3}
            </span>
          </span>
        </h1>

        <p className="animate-fade-up text-body mt-[38px] max-w-[620px] text-[1.375rem] leading-[1.5] text-pretty [animation-delay:600ms]">
          {t.heroSub}
        </p>

        {SITE.cdiMode === "mention" && (
          <p className="animate-fade-up text-muted mt-6 font-mono text-[0.75rem] tracking-[0.04em] [animation-delay:700ms]">
            {t.cdiChip}
          </p>
        )}

        <div className="animate-fade-up mt-[44px] flex flex-wrap gap-[14px] [animation-delay:750ms]">
          {/* `moss` en fond ramenait le texte du bouton à 2,71:1 au survol,
              c'est-à-dire au moment précis où le pointeur le désigne. */}
          <a
            href={mailto()}
            className="cta bg-ink text-parchment hover:bg-deep hover:text-parchment px-7 py-4 font-mono text-[0.75rem] tracking-[0.08em] uppercase"
          >
            {t.emailCta} ↗
          </a>
          <a
            href="#travaux"
            className="cta border-line-control text-ink hover:bg-marker hover:border-marker border px-7 py-4 font-mono text-[0.75rem] tracking-[0.08em] uppercase"
          >
            {t.workCta}
          </a>
        </div>
      </div>
    </section>
  );
}
