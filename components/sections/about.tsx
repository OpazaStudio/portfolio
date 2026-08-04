import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import type { Copy } from "@/lib/copy";
import { STACK } from "@/lib/copy";

export function About({ t }: { t: Copy }) {
  return (
    <section className="border-line flex flex-wrap gap-12 border-t pt-14 pb-[92px]">
      <SectionLabel icon={<Glyph dots={4} />}>{t.s4Label}</SectionLabel>

      <div data-reveal className="max-w-[880px] flex-[1_1_560px]">
        <p className="text-ink mb-8 max-w-[640px] text-[1.5rem] leading-[1.48] text-pretty">
          {t.aboutBody}
        </p>

        <ul className="flex flex-wrap gap-2">
          {STACK.map((tool) => (
            <li
              key={tool}
              // `moss` en fond ramenait le libellé à 2,71:1 ; `deep` le porte
              // à 9,19:1 sans changer le geste.
              className="border-line-strong text-body hover:bg-deep hover:text-parchment hover:border-deep border px-3 py-[7px] font-mono text-[0.75rem] tracking-[0.02em] transition-colors duration-[250ms]"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
