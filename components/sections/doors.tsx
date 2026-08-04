import type { Copy } from "@/lib/copy";
import { SITE } from "@/lib/site";

/**
 * Bloc « deux portes » : un client qui a un projet d'un côté,
 * un recruteur de l'autre. Affiché quand `SITE.cdiMode === "double"`.
 */
export function Doors({ t }: { t: Copy }) {
  return (
    <section data-reveal className="flex flex-wrap gap-12 pt-[84px]">
      <div className="text-olive flex-[0_0_160px] font-mono text-[11px] tracking-[0.1em] uppercase">
        ↳ {t.doorsLabel}
      </div>

      <div className="flex max-w-[880px] flex-[1_1_560px] flex-wrap gap-5">
        <div className="paper-card border-ink/20 bg-card hover:bg-card-hover flex-[1_1_300px] border px-8 py-[34px] hover:-translate-y-[6px] hover:-rotate-[0.6deg] hover:shadow-[0_18px_34px_-20px_rgb(35_39_29/0.45)]">
          <div className="text-olive mb-5 font-mono text-[11px] tracking-[0.1em] uppercase">
            {t.doorALabel}
          </div>
          <h3 className="mb-3 text-[33px] leading-[1.14] font-normal tracking-[-0.012em]">
            {t.doorATitle}
          </h3>
          <p className="text-body mb-6 text-[18px] leading-[1.55]">
            {t.doorABody}
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="border-moss border-b pb-[3px] font-mono text-[12px] tracking-[0.04em]"
          >
            {t.doorALink} →
          </a>
        </div>

        <div className="paper-card bg-deep text-parchment flex-[1_1_300px] px-8 py-[34px] [--paper-line:rgb(246_240_215/0.22)] hover:-translate-y-[6px] hover:rotate-[0.6deg] hover:shadow-[0_18px_34px_-20px_rgb(35_39_29/0.5)]">
          <div className="text-marker mb-5 font-mono text-[11px] tracking-[0.1em] uppercase">
            {t.doorBLabel}
          </div>
          <h3 className="text-parchment mb-3 text-[33px] leading-[1.14] font-normal tracking-[-0.012em]">
            {t.doorBTitle}
          </h3>
          <p className="text-parchment/78 mb-6 text-[18px] leading-[1.55]">
            {t.doorBBody}
          </p>
          <a
            href={SITE.cvHref}
            target="_blank"
            rel="noopener"
            className="border-marker text-parchment hover:text-marker border-b pb-[3px] font-mono text-[12px] tracking-[0.04em]"
          >
            {t.doorBLink} ↓
          </a>
        </div>
      </div>
    </section>
  );
}
