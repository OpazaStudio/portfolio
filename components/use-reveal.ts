"use client";

import { useEffect } from "react";

import { SITE } from "@/lib/site";

const HIDDEN_TRANSFORM = "translateY(20px)";
const EASING = "cubic-bezier(.2,.8,.2,1)";
/** Filet de sécurité : au-delà, tout est affiché même si l'observer n'a rien émis. */
const SAFETY_MS = 2600;

/**
 * Fait apparaître les blocs marqués `data-reveal` à l'entrée dans le viewport.
 *
 * Le HTML est rendu visible : c'est le JavaScript qui masque, puis révèle.
 * Sans JavaScript — ou pour un robot d'indexation qui n'exécute rien — la page
 * reste donc entièrement lisible.
 *
 * `data-revealed` n'est posé qu'au moment où un bloc est réellement affiché :
 * un bloc masqué mais pas encore révélé est ré-observé au montage suivant
 * (React réexécute les effets en mode strict, en développement).
 */
export function useReveal(dependency?: unknown) {
  useEffect(() => {
    if (!SITE.motion) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ).filter((el) => !el.dataset.revealed);

    if (pending.length === 0) return;

    const show = (el: HTMLElement) => {
      el.dataset.revealed = "1";
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    pending.forEach((el, index) => {
      // Décalage en cascade par groupes de quatre, comme dans le design.
      const delay = (index % 4) * 70;
      el.style.opacity = "0";
      el.style.transform = HIDDEN_TRANSFORM;
      el.style.transition =
        `opacity .7s ${EASING} ${delay}ms, transform .7s ${EASING} ${delay}ms`;
      observer.observe(el);
    });

    const safety = window.setTimeout(() => pending.forEach(show), SAFETY_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, [dependency]);
}
