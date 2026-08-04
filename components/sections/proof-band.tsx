import type { Copy } from "@/lib/copy";

/** Bandeau vert : les fédérations pour lesquelles des plateformes ont été livrées. */
export function ProofBand({ t }: { t: Copy }) {
  return (
    <div className="bg-band border-ink/12 border-y">
      <div className="mx-auto max-w-[1180px] px-10 pt-[34px] pb-9">
        <p
          data-reveal
          className="text-marker mb-[22px] font-mono text-[11px] tracking-[0.12em] uppercase"
        >
          {t.proofKicker}
        </p>

        <div className="flex flex-wrap">
          {t.proof.map((fed) => (
            <div
              key={fed.name}
              data-reveal
              className="border-parchment/34 flex-[1_1_168px] border-l px-[22px]"
            >
              <div className="text-parchment text-[25px] leading-[1.2] text-pretty">
                {fed.name}
              </div>
              <div className="text-marker mt-[7px] font-mono text-[11px] tracking-[0.06em] uppercase">
                {fed.role}
              </div>
            </div>
          ))}
        </div>

        <p
          data-reveal
          className="text-marker mt-6 font-mono text-[11px] tracking-[0.08em]"
        >
          {t.proofNote}
        </p>
      </div>
    </div>
  );
}
