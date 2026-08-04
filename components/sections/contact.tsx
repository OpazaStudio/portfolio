import { Container } from "@/components/container";
import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import type { Copy } from "@/lib/copy";
import { SITE, mailto } from "@/lib/site";

/** Bloc vert foncé de bas de page : l'appel au contact. */
export function Contact({ t }: { t: Copy }) {
  return (
    <div className="hatched bg-deep text-parchment on-deep">
      <Container>
        <section className="flex flex-wrap gap-12 pt-[92px] pb-[84px]">
          <SectionLabel
            id="contact"
            tone="dark"
            icon={<Glyph dots={5} tone="dark" />}
          >
            {t.s5Label}
          </SectionLabel>

          <div data-reveal className="max-w-[880px] flex-[1_1_560px]">
            <p className="text-parchment max-w-[640px] text-[clamp(2.125rem,0.45rem+3.9vw,4rem)] leading-[1.07] tracking-[-0.022em] text-pretty">
              {t.contactLine}
            </p>

            <a
              href={mailto()}
              className="border-marker text-parchment hover:text-marker hover:border-parchment mt-[34px] inline-block border-b pb-[5px] text-[2.125rem] tracking-[-0.01em] transition-colors duration-[250ms]"
            >
              {SITE.email}
            </a>

            <p className="text-parchment/68 mt-[30px] font-mono text-[0.75rem] leading-[1.8]">
              {t.contactNote}
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
