"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const hideChromePaths = new Set(["/connect", "/pay"]);

export function HideOnConnect({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (hideChromePaths.has(pathname)) return null;

  return <>{children}</>;
}

/** Site-wide atmosphere stays behind page content, including /connect. */
export function AtmosphereLayer({ children }: { children: ReactNode }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {children}
    </div>
  );
}
