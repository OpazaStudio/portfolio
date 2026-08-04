import { LeafMark } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { Copy, Lang } from "@/lib/copy";

type SiteHeaderProps = {
  t: Copy;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
};

const NAV = [
  { href: "#services", key: "nav1" },
  { href: "#travaux", key: "nav2" },
  { href: "#methode", key: "nav3" },
  { href: "#contact", key: "nav4" },
] as const;

export function SiteHeader({ t, lang, onLangChange }: SiteHeaderProps) {
  return (
    // Le design source n'a aucun point de rupture : en dessous de ~700 px la
    // barre passe sur trois lignes (≈ 165 px). Collante, elle mangerait un
    // cinquième de l'écran d'un téléphone — elle défile donc jusqu'à `md`.
    <header className="bg-parchment/90 border-ink/14 z-20 border-b backdrop-blur-[10px] md:sticky md:top-0">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-8 px-10 py-[15px]">
        <a
          href="#top"
          className="flex items-center gap-[10px] font-mono text-[12px] font-medium tracking-[0.08em] uppercase"
        >
          <LeafMark />
          Ethan Huot
        </a>

        <nav className="ml-auto flex flex-wrap gap-[26px]">
          {NAV.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="nav-link font-mono text-[12px] tracking-[0.06em]"
            >
              {t[key]}
            </a>
          ))}
        </nav>

        <div className="border-ink/16 flex items-center gap-[2px] border p-[2px]">
          <LangButton
            code="fr"
            active={lang === "fr"}
            onSelect={onLangChange}
          />
          <LangButton
            code="en"
            active={lang === "en"}
            onSelect={onLangChange}
          />
        </div>
      </div>
    </header>
  );
}

type LangButtonProps = {
  code: Lang;
  active: boolean;
  onSelect: (lang: Lang) => void;
};

function LangButton({ code, active, onSelect }: LangButtonProps) {
  return (
    <button
      type="button"
      lang={code}
      aria-pressed={active}
      onClick={() => onSelect(code)}
      className={cn(
        "cursor-pointer px-[11px] py-[6px] font-mono text-[11px] tracking-[0.06em] transition-colors duration-200",
        active ? "bg-ink text-parchment" : "text-muted bg-transparent",
      )}
    >
      {code.toUpperCase()}
    </button>
  );
}
