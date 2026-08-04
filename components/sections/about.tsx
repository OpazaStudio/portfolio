import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import type { Copy } from "@/lib/copy";
import { STACK } from "@/lib/copy";

export function About({ t }: { t: Copy }) {
  return (
    <section className="border-ink/14 flex flex-wrap gap-12 border-t pt-14 pb-[92px]">
      <SectionLabel icon={<Glyph dots={4} />}>{t.s4Label}</SectionLabel>

      <div data-reveal className="max-w-[880px] flex-[1_1_560px]">
        <p className="text-ink mb-8 max-w-[640px] text-2xl leading-[1.48] text-pretty">
          {t.aboutBody}
        </p>

        <div className="flex flex-wrap gap-2">
          {STACK.map((tool) => (
            <span
              key={tool}
              className="border-ink/16 text-body hover:bg-moss hover:text-parchment hover:border-moss border px-3 py-[7px] font-mono text-[12px] tracking-[0.02em] transition-colors duration-[250ms]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
