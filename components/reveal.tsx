"use client";

import { useEffect } from "react";

import { SITE } from "@/lib/site";

/** Décalage en cascade par groupes de quatre, comme dans le design. */
const STAGGER_MS = 70;
const GROUP = 4;

declare global {
  interface Window {
    /** Posé par `RevealScript`, annulé dès que ce composant s'hydrate. */
    __revealFallback?: number;
  }
}

/**
 * Révèle les blocs `data-reveal` à leur entrée dans le viewport.
 *
 * Deux corrections par rapport au design source :
 *
 * 1. **L'état masqué est posé en CSS avant peinture** (voir `RevealScript` et
 *    la règle `.reveal-armed` dans `globals.css`), et non en style inline
 *    après hydratation. Le design source peignait les 24 blocs puis les
 *    masquait 60 ms plus tard : tout ce qui était déjà à l'écran apparaissait,
 *    disparaissait, puis revenait.
 * 2. **Le filet de sécurité ne se déclenche qu'en cas d'échec réel.** Il était
 *    armé inconditionnellement à 2 600 ms, si bien que les 24 blocs étaient
 *    affichés d'un coup et qu'aucune révélation au défilement n'avait jamais
 *    lieu pour un visiteur qui commençait à lire après trois secondes.
 *
 * Sans JavaScript, `RevealScript` ne s'exécute pas, la classe n'est jamais
 * posée et la page reste entièrement lisible.
 */
export function Reveal() {
  useEffect(() => {
    // L'hydratation a eu lieu : le repli du script inline n'a plus lieu d'être.
    if (window.__revealFallback !== undefined) {
      window.clearTimeout(window.__revealFallback);
      window.__revealFallback = undefined;
    }

    const root = document.documentElement;
    const disarm = () => root.classList.remove("reveal-armed");

    if (!SITE.motion || !root.classList.contains("reveal-armed")) {
      disarm();
      return;
    }

    const pending = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ).filter((el) => !el.hasAttribute("data-revealed"));

    if (pending.length === 0) {
      disarm();
      return;
    }

    pending.forEach((el, index) => {
      el.style.setProperty(
        "--reveal-delay",
        `${(index % GROUP) * STAGGER_MS}ms`,
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      // La marge basse de -8 % est la ligne de déclenchement du design : un
      // bloc se révèle un peu avant d'atteindre le bas de l'écran. La marge
      // haute très large fait entrer dans le champ tout ce qui est déjà passé
      // au-dessus — sans elle, un saut d'ancre ou un défilement rapide laisse
      // derrière lui une traînée de blocs invisibles pour toujours.
      { rootMargin: "10000px 0px -8% 0px", threshold: 0.05 },
    );

    pending.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

/**
 * Arme l'état masqué avant la première peinture.
 *
 * Le repli à 4 s ne s'exécute que si `Reveal` ne s'est jamais hydraté —
 * erreur JavaScript, bundle non chargé. Dans tous les autres cas il est
 * annulé, et les révélations au défilement fonctionnent sans limite de temps.
 */
export function RevealScript() {
  const script = `(function(){try{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    var r=document.documentElement;r.classList.add('reveal-armed');
    window.__revealFallback=window.setTimeout(function(){r.classList.remove('reveal-armed')},4000);
  }catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
