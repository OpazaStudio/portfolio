import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import type { Copy } from "@/lib/copy";

export function Work({ t }: { t: Copy }) {
  return (
    <section className="border-ink/14 flex flex-wrap gap-12 border-t pt-14 pb-[92px]">
      <SectionLabel icon={<Glyph dots={2} />}>{t.s2Label}</SectionLabel>

      <div className="flex max-w-[880px] flex-[1_1_560px] flex-col gap-4">
        {t.projects.map((project) => (
          <a
            key={project.n}
            data-reveal
            href="#travaux"
            className="paper-card border-ink/20 bg-card hover:bg-card-hover block border px-[26px] py-6 hover:-translate-y-[6px] hover:-rotate-[0.5deg] hover:shadow-[0_18px_34px_-20px_rgb(35_39_29/0.45)]"
          >
            <div className="flex flex-wrap items-baseline gap-5">
              <span className="text-muted flex-[0_0_36px] font-mono text-[11px]">
                {project.n}
              </span>
              <span className="flex-[0_1_auto] text-[36px] leading-[1.1] tracking-[-0.015em]">
                {project.name}
              </span>
              <span className="text-muted flex-[1_1_60px] text-right font-mono text-[11px] tracking-[0.06em] uppercase">
                {project.type} · {project.status}
              </span>
              {/* `ml-auto` est sans effet sur grand écran (la colonne
                  type/statut absorbe déjà l'espace libre) ; il garde la flèche
                  à droite quand elle passe seule à la ligne sur mobile. */}
              <span className="text-olive ml-auto flex-[0_0_18px] text-right text-[21px]">
                →
              </span>
            </div>

            <p className="text-body mt-3 mb-[18px] ml-14 max-w-[520px] text-[19px] leading-[1.5] text-pretty">
              {project.body}
            </p>

            <div className="border-ink/14 text-olive ml-14 border-t pt-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              {project.tags}
            </div>
          </a>
        ))}

        <p
          data-reveal
          className="text-muted mt-3 max-w-[520px] font-mono text-[12px] leading-[1.7]"
        >
          {t.worksNote}
        </p>
      </div>
    </section>
  );
}
