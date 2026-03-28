"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { businessInfo, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { primaryCtaHover } from "@/lib/motion-variants";

/** Avoids `/services` matching `/service-areas` (pathname.startsWith bug). */
function navLinkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) root.classList.add("mobile-nav-open");
    else root.classList.remove("mobile-nav-open");
    return () => root.classList.remove("mobile-nav-open");
  }, [isOpen]);

  const navSpring = reduced
    ? { duration: 0.12 }
    : { type: "spring" as const, stiffness: 420, damping: 34 };

  return (
    <header
      className={cn(
        "sticky top-0 border-b border-teal/10 bg-white/95 backdrop-blur transition-[box-shadow,border-color,z-index] duration-300 ease-out",
        isOpen ? "z-[110]" : "z-50",
        scrolled
          ? "border-teal/15 shadow-md shadow-teal-deep/[0.08]"
          : "shadow-[0_1px_0_rgba(244,197,66,0.12)]",
      )}
    >
      <div
        className={cn(
          "relative mx-auto flex max-w-6xl items-center justify-between gap-2 bg-white px-3 py-2 sm:gap-4 sm:px-6 sm:py-3 lg:px-8",
          isOpen ? "z-[220] shadow-sm" : "z-10 bg-white/95 backdrop-blur",
        )}
      >
        <motion.div
          whileHover={reduced ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Sunshines Handy Gal Services"
              width={160}
              height={52}
              className="h-auto w-[88px] min-[360px]:w-[96px] sm:w-[120px] md:w-[140px]"
            />
          </Link>
        </motion.div>

        <nav className="hidden shrink-0 items-center gap-3 xl:gap-4 2xl:gap-5 lg:flex">
          {navLinks.map((link) => {
            const isActive = navLinkIsActive(pathname, link.href);
            return (
              <motion.span
                key={link.href}
                className="relative inline-flex shrink-0 items-center"
                whileHover={reduced ? undefined : { y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative whitespace-nowrap pb-1 text-[13px] font-semibold text-charcoal transition-colors duration-200 xl:text-sm",
                    !isActive && "hover:text-teal-deep",
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute -bottom-px left-0 right-0 mx-auto h-0.5 max-w-full rounded-full bg-gradient-to-r from-teal-deep via-aqua to-teal-deep"
                      transition={navSpring}
                    />
                  ) : null}
                </Link>
              </motion.span>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <motion.span className="inline-block" whileHover={primaryCtaHover(reduced)}>
            <Link
              href="/contact"
              className="cta-primary-enhanced inline-flex whitespace-nowrap rounded-full bg-teal-deep px-5 py-2 text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors duration-200 hover:bg-teal-hover hover:shadow-lg hover:shadow-teal-deep/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2"
            >
              Get a Custom Quote
            </Link>
          </motion.span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 min-h-[40px] min-w-[40px] shrink-0 items-center justify-center rounded-full border border-[#ddd6c8] px-2.5 text-charcoal transition-colors hover:border-teal/30 hover:text-teal-deep lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[200] bg-charcoal/65 backdrop-blur-[2px] lg:hidden"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="fixed right-0 top-14 z-[210] flex h-[calc(100dvh-3.5rem)] w-[min(100%,20rem)] flex-col border-l border-[#eee6d6] bg-white shadow-[-8px_0_32px_-12px_rgba(0,0,0,0.22)] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex items-center justify-between border-b border-[#eee6d6] px-3 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-gray">Menu</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-charcoal hover:bg-cream"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2.5 py-3">
              <ul className="grid gap-0.5">
                {navLinks.map((link) => {
                  const isActive = navLinkIsActive(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors duration-200",
                          isActive
                            ? "bg-sunshine-yellow/15 text-teal-deep ring-1 ring-teal-deep/15"
                            : "text-charcoal hover:bg-cream hover:text-teal-deep",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="border-t border-[#eee6d6] p-2.5 pt-3">
              <div className="grid gap-2">
                <a
                  href={businessInfo.phoneHref}
                  className="rounded-full border border-teal-deep/40 px-3 py-2 text-center text-xs font-semibold text-teal-deep transition-colors hover:bg-sunshine-yellow/10 sm:text-sm"
                >
                  Call for a Quote
                </a>
                <a
                  href={businessInfo.textHref}
                  className="rounded-full border border-teal-deep/40 px-3 py-2 text-center text-xs font-semibold text-teal-deep transition-colors hover:bg-sunshine-yellow/10 sm:text-sm"
                >
                  Text for a Quote
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="cta-primary-enhanced rounded-full bg-teal-deep px-3 py-2 text-center text-xs font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors hover:bg-teal-hover sm:text-sm"
                >
                  Get a Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
