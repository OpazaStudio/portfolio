import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import type { Copy } from "@/lib/copy";

export function Method({ t }: { t: Copy }) {
  return (
    <section className="border-ink/14 flex flex-wrap gap-12 border-t pt-14 pb-[92px]">
      <SectionLabel icon={<Glyph dots={3} />}>{t.s3Label}</SectionLabel>

      <div className="flex max-w-[880px] flex-[1_1_560px] flex-wrap gap-5">
        {t.method.map((step) => (
          <div
            key={step.n}
            data-reveal
            className="paper-card border-ink/18 bg-card hover:bg-card-hover flex-[1_1_178px] border px-6 py-[26px] [--paper-line:rgb(35_39_29/0.1)] hover:-translate-y-[6px]"
          >
            <div className="bg-marker text-ink mb-[18px] flex h-6 w-6 items-center justify-center font-mono text-[11px]">
              {step.n}
            </div>
            <h3 className="mb-[10px] text-[25px] leading-[1.2] font-normal">
              {step.title}
            </h3>
            <p className="text-body text-[17px] leading-[1.55] text-pretty">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
