import { Glyph } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/cn";
import type { Copy, Project } from "@/lib/copy";

export function Work({ t }: { t: Copy }) {
  return (
    <section className="border-line flex flex-wrap gap-12 border-t pt-14 pb-[92px]">
      <SectionLabel id="travaux" icon={<Glyph dots={2} />}>
        {t.s2Label}
      </SectionLabel>

      <div className="flex max-w-[880px] flex-[1_1_560px] flex-col gap-4">
        {t.projects.map((project) => (
          <ProjectCard key={project.n} project={project} />
        ))}

        <p
          data-reveal
          className="text-muted mt-3 max-w-[520px] font-mono text-[0.75rem] leading-[1.7]"
        >
          {t.worksNote}
        </p>
      </div>
    </section>
  );
}

/**
 * Carte projet.
 *
 * Le design source rendait les quatre cartes en `<a href="#travaux">` — la
 * section qui les contient — sous une affordance de lien complète : flèche,
 * soulèvement de 6 px, rotation, ombre portée. Cliquer ne menait nulle part.
 *
 * La carte n'est un lien que si le projet en déclare un. Sinon elle reste un
 * `<article>` : même papier, même liseré, mais ni flèche ni soulèvement.
 */
function ProjectCard({ project }: { project: Project }) {
  const shell = cn(
    "paper-card border-line-strong bg-card block border px-[26px] py-6",
    project.url && "paper-card--link hover:-rotate-[0.5deg]",
  );

  const content = (
    <>
      <div className="flex flex-wrap items-baseline gap-5">
        <span className="text-muted flex-[0_0_36px] font-mono text-[0.6875rem]">
          {project.n}
        </span>
        <span className="flex-[0_1_auto] text-[2.25rem] leading-[1.1] tracking-[-0.015em]">
          {project.name}
        </span>
        <span className="text-muted flex-[1_1_60px] text-right font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
          {project.type} · {project.status}
        </span>
        {project.url && (
          // `ml-auto` est sans effet sur grand écran (la colonne type/statut
          // absorbe déjà l'espace libre) ; il garde la flèche à droite quand
          // elle passe seule à la ligne sur mobile.
          <span
            aria-hidden="true"
            className="text-olive ml-auto flex-[0_0_18px] text-right text-[1.3125rem]"
          >
            →
          </span>
        )}
      </div>

      <p className="text-body mt-3 mb-[18px] ml-14 max-w-[520px] text-[1.1875rem] leading-[1.5] text-pretty">
        {project.body}
      </p>

      <div className="border-line text-olive ml-14 border-t pt-3 font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
        {project.tags}
      </div>
    </>
  );

  if (!project.url) {
    return (
      <article data-reveal className={shell}>
        {content}
      </article>
    );
  }

  return (
    <a data-reveal href={project.url} className={shell}>
      {content}
    </a>
  );
}
