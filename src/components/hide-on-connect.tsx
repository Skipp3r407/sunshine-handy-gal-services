"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HideOnConnect({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/connect") return null;

  return <>{children}</>;
}

/** On /connect the page card sits above the default atmosphere layer, so raise it. */
export function AtmosphereLayer({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const onConnect = pathname === "/connect";

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 overflow-hidden",
        onConnect ? "z-[25]" : "z-[1]",
      )}
      aria-hidden
    >
      {children}
    </div>
  );
}
