import { Container } from "@/components/container";
import type { Copy } from "@/lib/copy";
import { SITE } from "@/lib/site";

type FooterLink = { href: string; label: string; external: boolean };

/**
 * Pied de page.
 *
 * Il est sorti de `<main>` : un `<footer>` imbriqué dans le contenu principal
 * n'est pas exposé comme repère `contentinfo`.
 *
 * Les entrées sont filtrées sur `SITE` : le design source livrait
 * `https://github.com` et `https://linkedin.com`, c'est-à-dire les pages
 * d'accueil des plateformes. Une entrée repassée à `null` disparaît plutôt
 * que de mener nulle part.
 */
export function SiteFooter({ t }: { t: Copy }) {
  const links: FooterLink[] = [
    SITE.cvHref && { href: SITE.cvHref, label: t.cvLink, external: true },
    SITE.github && { href: SITE.github, label: "GitHub", external: true },
    SITE.linkedin && { href: SITE.linkedin, label: "LinkedIn", external: true },
  ].filter((link): link is FooterLink => Boolean(link));

  return (
    <div className="hatched bg-deep text-parchment on-deep">
      <Container>
        <footer className="border-parchment/20 flex flex-wrap items-baseline gap-x-8 gap-y-2 border-t pt-7 pb-11">
          {/* 4,83:1 : le design source était à 4,45:1, sous le seuil AA.
              L'année est celle de la construction — la page est prérendue en
              statique, donc elle se met à jour à chaque déploiement plutôt
              qu'à chaque visite. C'est ce qu'on veut : pas de rendu dynamique
              pour un millésime. */}
          <span className="text-parchment/64 flex-[1_1_260px] py-1 font-mono text-[0.6875rem] tracking-[0.06em]">
            © {new Date().getFullYear()} Ethan Huot — Opaza Studio · La
            Rochelle
          </span>

          {links.length > 0 && (
            <div className="flex flex-wrap gap-x-[22px]">
              {links.map(({ href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-parchment/72 hover:text-marker inline-block py-1 font-mono text-[0.6875rem] tracking-[0.06em] uppercase"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </footer>
      </Container>
    </div>
  );
}
