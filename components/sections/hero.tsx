import type { Copy } from "@/lib/copy";
import { SITE } from "@/lib/site";

export function Hero({ t }: { t: Copy }) {
  return (
    <section className="flex flex-wrap gap-12 pt-[92px] pb-[84px]">
      <div className="flex-[0_0_160px] pt-4">
        <div className="animate-fade-up text-olive font-mono text-[11px] tracking-[0.1em] uppercase [animation-duration:600ms]">
          {t.introLabel}
        </div>
        <div className="animate-grow bg-marker mt-[14px] h-[2px] origin-left [animation-delay:300ms]" />
      </div>

      <div className="max-w-[880px] flex-[1_1_560px]">
        <p className="animate-fade-up text-muted mb-[30px] flex items-center gap-[11px] font-mono text-[12px] tracking-[0.06em] [animation-delay:100ms] [animation-duration:600ms]">
          <span className="animate-dot bg-moss inline-block h-2 w-2 rounded-full" />
          {t.avail}
        </p>

        <h1 className="text-[clamp(38px,5.3vw,84px)] leading-[1.04] font-normal tracking-[-0.022em] text-pretty">
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

        <p className="animate-fade-up text-body mt-[38px] max-w-[620px] text-[22px] leading-[1.5] text-pretty [animation-delay:600ms]">
          {t.heroSub}
        </p>

        {SITE.cdiMode === "mention" && (
          <p className="animate-fade-up text-muted mt-6 font-mono text-[12px] tracking-[0.04em] [animation-delay:700ms]">
            {t.cdiChip}
          </p>
        )}

        <div className="animate-fade-up mt-[44px] flex flex-wrap gap-[14px] [animation-delay:750ms]">
          <a
            href={`mailto:${SITE.email}`}
            className="cta bg-ink text-parchment hover:bg-moss hover:text-parchment px-7 py-4 font-mono text-[12px] tracking-[0.08em] uppercase hover:-translate-y-[3px]"
          >
            {t.emailCta} ↗
          </a>
          <a
            href="#travaux"
            className="cta border-ink/28 text-ink hover:bg-marker hover:border-marker border px-7 py-4 font-mono text-[12px] tracking-[0.08em] uppercase hover:-translate-y-[3px]"
          >
            {t.workCta}
          </a>
        </div>
      </div>
    </section>
  );
}
