import type { Copy } from "@/lib/copy";
import { SITE, mailto } from "@/lib/site";

/**
 * Bloc « deux portes » : un client qui a un projet d'un côté,
 * un recruteur de l'autre. Affiché quand `SITE.cdiMode === "double"`.
 */
export function Doors({ t }: { t: Copy }) {
  return (
    <section data-reveal className="flex flex-wrap gap-12 pt-[84px]">
      {/* `h2` comme les autres intitulés de section : sans lui, les deux
          portes ouvraient le document sur des `h3` sans niveau au-dessus. */}
      <h2 className="text-olive flex-[0_0_160px] self-start font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
        ↳ {t.doorsLabel}
      </h2>

      <div className="flex max-w-[880px] flex-[1_1_560px] flex-wrap gap-5">
        <div className="paper-card border-line-strong bg-card hover:bg-card-hover hover:shadow-lift flex-[1_1_300px] border px-8 py-[34px] hover:-translate-y-[6px] hover:-rotate-[0.6deg]">
          <div className="text-olive mb-5 font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
            {t.doorALabel}
          </div>
          <h3 className="mb-3 text-[2.0625rem] leading-[1.14] font-normal tracking-[-0.012em]">
            {t.doorATitle}
          </h3>
          <p className="text-body mb-6 text-[1.125rem] leading-[1.55]">
            {t.doorABody}
          </p>
          <a
            href={mailto()}
            className="border-olive inline-block border-b pt-2 pb-[3px] font-mono text-[0.75rem] tracking-[0.04em]"
          >
            {t.doorALink} →
          </a>
        </div>

        <div className="paper-card bg-deep text-parchment on-deep hover:shadow-lift flex-[1_1_300px] px-8 py-[34px] [--paper-line:var(--color-line-soft-invert)] hover:-translate-y-[6px] hover:rotate-[0.6deg]">
          <div className="text-marker mb-5 font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
            {t.doorBLabel}
          </div>
          <h3 className="text-parchment mb-3 text-[2.0625rem] leading-[1.14] font-normal tracking-[-0.012em]">
            {t.doorBTitle}
          </h3>
          <p className="text-parchment/78 mb-6 text-[1.125rem] leading-[1.55]">
            {t.doorBBody}
          </p>
          {/* Repli si `SITE.cvHref` repasse à `null` : la porte garde un appel
              à l'action plutôt qu'un lien qui renverrait une 404. */}
          {SITE.cvHref ? (
            <a
              href={SITE.cvHref}
              target="_blank"
              rel="noopener"
              className="border-marker text-parchment hover:text-marker inline-block border-b pt-2 pb-[3px] font-mono text-[0.75rem] tracking-[0.04em]"
            >
              {t.doorBLink} ↓
            </a>
          ) : (
            <a
              href={mailto(t.doorBSubject)}
              className="border-marker text-parchment hover:text-marker inline-block border-b pt-2 pb-[3px] font-mono text-[0.75rem] tracking-[0.04em]"
            >
              {t.doorBLinkAlt} ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
