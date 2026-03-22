"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { businessInfo, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee6d6] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Sunshines Handy Gal Services"
            width={160}
            height={52}
            className="h-auto w-[120px] sm:w-[140px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  isActive ? "text-teal" : "text-charcoal hover:text-teal",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={businessInfo.phoneHref}
            className="rounded-full px-4 py-2 text-sm font-semibold text-teal transition hover:bg-teal/5"
          >
            Call for a Quote
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal/90"
          >
            Get a Custom Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-full border border-[#ddd6c8] px-4 py-2 text-sm font-semibold text-charcoal lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[#eee6d6] bg-white px-4 py-4 lg:hidden">
          <nav className="grid gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-semibold",
                    isActive
                      ? "bg-teal/10 text-teal"
                      : "text-charcoal hover:bg-cream",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 grid gap-2">
            <a
              href={businessInfo.textHref}
              className="rounded-full border border-teal/30 px-4 py-2 text-center text-sm font-semibold text-teal"
            >
              Text for a Quote
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-teal px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Call or Text to Book
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
