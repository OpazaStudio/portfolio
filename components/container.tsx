import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Gabarit de la page.
 *
 * Le design source réécrivait `mx-auto max-w-[1180px] px-10` à cinq endroits,
 * avec une marge de 40 px figée à toutes les tailles — 295 px utiles sur un
 * écran de 375. La marge respire maintenant sous `md`.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[1180px] px-5 md:px-10", className)}>
      {children}
    </div>
  );
}
