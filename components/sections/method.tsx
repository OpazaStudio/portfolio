import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import type { Copy } from "@/lib/copy";

export function Method({ t }: { t: Copy }) {
  return (
    <section className="border-line flex flex-wrap gap-12 border-t pt-14 pb-[92px]">
      <SectionLabel id="methode" icon={<Glyph dots={3} />}>
        {t.s3Label}
      </SectionLabel>

      <div className="flex max-w-[880px] flex-[1_1_560px] flex-wrap gap-5">
        {t.method.map((step) => (
          <div
            key={step.n}
            data-reveal
            className="paper-card border-line-strong bg-card hover:bg-card-hover flex-[1_1_178px] border px-6 py-[26px] hover:-translate-y-[6px]"
          >
            <div className="bg-marker text-ink mb-[18px] flex h-6 w-6 items-center justify-center font-mono text-[0.6875rem]">
              {step.n}
            </div>
            <h3 className="mb-[10px] text-[1.5625rem] leading-[1.2] font-normal">
              {step.title}
            </h3>
            <p className="text-body text-[1.0625rem] leading-[1.55] text-pretty">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
