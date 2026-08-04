import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import type { Copy } from "@/lib/copy";
import { SITE } from "@/lib/site";

/** Bloc vert foncé de bas de page : appel au contact + pied de page. */
export function Contact({ t }: { t: Copy }) {
  return (
    <div className="hatched bg-deep text-parchment">
      <div className="mx-auto max-w-[1180px] px-10">
        <section className="flex flex-wrap gap-12 pt-[92px] pb-[84px]">
          <SectionLabel tone="dark" icon={<Glyph dots={5} tone="dark" />}>
            {t.s5Label}
          </SectionLabel>

          <div data-reveal className="max-w-[880px] flex-[1_1_560px]">
            <h2 className="text-parchment max-w-[640px] text-[clamp(34px,4.4vw,64px)] leading-[1.07] font-normal tracking-[-0.022em] text-pretty">
              {t.contactLine}
            </h2>

            <a
              href={`mailto:${SITE.email}`}
              className="border-marker text-parchment hover:text-marker hover:border-parchment mt-[34px] inline-block border-b pb-[5px] text-[34px] tracking-[-0.01em] transition-colors duration-[250ms]"
            >
              {SITE.email}
            </a>

            <p className="text-parchment/68 mt-[30px] font-mono text-[12px] leading-[1.8]">
              {t.contactNote}
            </p>
          </div>
        </section>

        <footer className="border-parchment/20 flex flex-wrap items-baseline gap-8 border-t pt-7 pb-11">
          <span className="text-parchment/60 flex-[1_1_260px] font-mono text-[11px] tracking-[0.06em]">
            © 2026 Ethan Huot — Opaza Studio · La Rochelle
          </span>

          <div className="flex flex-wrap gap-[22px]">
            <a
              id="cv"
              href={SITE.cvHref}
              target="_blank"
              rel="noopener"
              className="text-parchment/72 hover:text-marker font-mono text-[11px] tracking-[0.06em] uppercase"
            >
              {t.cvLink}
            </a>
            <a
              href={SITE.github}
              className="text-parchment/72 hover:text-marker font-mono text-[11px] tracking-[0.06em] uppercase"
            >
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              className="text-parchment/72 hover:text-marker font-mono text-[11px] tracking-[0.06em] uppercase"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
