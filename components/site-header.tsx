import Link from "next/link";

import { Container } from "@/components/container";
import { LeafMark } from "@/components/icons";
import { cn } from "@/lib/cn";
import { COPY, type Copy, type Lang } from "@/lib/copy";
import { PATH } from "@/lib/metadata";

type SiteHeaderProps = {
  t: Copy;
  lang: Lang;
};

const NAV = [
  { href: "#services", key: "nav1" },
  { href: "#travaux", key: "nav2" },
  { href: "#methode", key: "nav3" },
  { href: "#contact", key: "nav4" },
] as const;

const LANGS: Lang[] = ["fr", "en"];

/**
 * En-tête.
 *
 * Le design source laissait `flex-wrap` gérer seul le mobile : à 375 px la
 * barre s'étalait sur quatre lignes et 210 px de haut, soit un quart du
 * premier écran. Elle tient maintenant sur deux lignes courtes — identité et
 * langue d'abord, ancres de section ensuite — et redevient une ligne unique
 * à partir de `md`, où elle est collante.
 *
 * Le sélecteur de langue est une paire de liens et non deux boutons : chaque
 * langue a désormais son URL (`/` et `/en`), donc elle se partage, s'indexe
 * et survit à un rechargement.
 */
export function SiteHeader({ t, lang }: SiteHeaderProps) {
  return (
    <header className="bg-parchment/90 border-line z-20 border-b backdrop-blur-[10px] md:sticky md:top-0">
      <Container className="flex flex-wrap items-center gap-x-8 gap-y-1 py-2 md:py-[6px]">
        <Link
          href={PATH[lang]}
          className="order-1 flex items-center gap-[10px] py-2 font-mono text-[0.75rem] font-medium tracking-[0.08em] uppercase"
        >
          <LeafMark />
          Ethan Huot
        </Link>

        <nav
          aria-label={t.navLabel}
          // Les quatre ancres tiennent sur une seule ligne jusqu'à 320 px à
          // 16 px d'écart ; l'écart du design revient dès `sm`.
          className="order-3 flex w-full flex-wrap gap-x-4 pb-1 sm:gap-x-[26px] md:order-2 md:ml-auto md:w-auto md:pb-0"
        >
          {NAV.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="nav-link font-mono text-[0.75rem] tracking-[0.06em]"
            >
              {t[key]}
            </a>
          ))}
        </nav>

        <div
          className="border-line-strong order-2 ml-auto flex items-center gap-[2px] border p-[2px] md:order-3 md:ml-0"
          role="group"
          aria-label={t.langLabel}
        >
          {LANGS.map((code) => (
            <Link
              key={code}
              href={PATH[code]}
              hrefLang={code}
              lang={code}
              aria-current={code === lang ? "page" : undefined}
              className={cn(
                "px-[11px] py-[9px] font-mono text-[0.6875rem] tracking-[0.06em] transition-colors duration-200",
                code === lang
                  ? "bg-ink text-parchment"
                  : "text-muted bg-transparent",
              )}
            >
              {code.toUpperCase()}
              {/* Le nom complet complète l'abréviation à l'oral sans la
                  remplacer : le nom accessible contient le texte visible. */}
              <span className="sr-only"> — {COPY[code].langName}</span>
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}
