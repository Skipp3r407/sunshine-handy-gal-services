"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function HideOnConnect({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/connect") return null;

  return <>{children}</>;
}
