import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import type { Copy } from "@/lib/copy";
import { SITE } from "@/lib/site";

export function Services({ t }: { t: Copy }) {
  return (
    <section className="border-line mt-[84px] flex flex-wrap gap-12 border-t pt-14 pb-6">
      <SectionLabel id="services" icon={<Glyph dots={1} className="animate-roll" />}>
        {t.s1Label}
      </SectionLabel>

      <div className="max-w-[880px] flex-[1_1_560px]">
        {t.services.map((service) => (
          <div
            key={service.title}
            data-reveal
            className="flex flex-wrap gap-8 pb-10"
          >
            <div className="flex-[1_1_340px]">
              <h3 className="mb-[10px] text-[1.875rem] leading-[1.15] font-normal tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-body max-w-[520px] text-[1.1875rem] leading-[1.55] text-pretty">
                {service.body}
              </p>
            </div>

            {SITE.showPricing && (
              <div className="flex-[0_0_150px] pt-2">
                <span className="bg-marker text-ink inline-block px-[9px] py-[5px] font-mono text-[0.75rem] leading-[1.6]">
                  {service.price}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
