import { Container } from "@/components/container";
import type { Copy } from "@/lib/copy";

/** Bandeau vert : les fédérations pour lesquelles des plateformes ont été livrées. */
export function ProofBand({ t }: { t: Copy }) {
  return (
    <div className="bg-band border-line on-deep border-y">
      <Container className="pt-[34px] pb-9">
        <p
          data-reveal
          className="text-marker mb-[22px] font-mono text-[0.6875rem] tracking-[0.12em] uppercase"
        >
          {t.proofKicker}
        </p>

        <div className="flex flex-wrap gap-y-5">
          {t.proof.map((fed) => (
            // Le filet sépare des colonnes : il n'a rien à séparer devant la
            // première, ni quand les blocs s'empilent sous `sm`.
            <div
              key={fed.name}
              data-reveal
              className="border-parchment/34 flex-[1_1_168px] sm:pr-[22px] sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-[22px]"
            >
              <div className="text-parchment text-[1.5625rem] leading-[1.2] text-pretty">
                {fed.name}
              </div>
              <div className="text-marker mt-[7px] font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
                {fed.role}
              </div>
            </div>
          ))}
        </div>

        <p
          data-reveal
          className="text-marker mt-6 font-mono text-[0.6875rem] tracking-[0.08em]"
        >
          {t.proofNote}
        </p>
      </Container>
    </div>
  );
}
