"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { businessInfo, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { buttonLiftHover, primaryCtaHover } from "@/lib/motion-variants";

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

  const navSpring = reduced
    ? { duration: 0.12 }
    : { type: "spring" as const, stiffness: 420, damping: 34 };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-teal/10 bg-white/95 backdrop-blur transition-[box-shadow,border-color] duration-300 ease-out",
        scrolled
          ? "border-teal/15 shadow-md shadow-teal-deep/[0.08]"
          : "shadow-[0_1px_0_rgba(244,197,66,0.12)]",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <motion.div
          whileHover={reduced ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Sunshines Handy Gal Services"
              width={160}
              height={52}
              className="h-auto w-[120px] sm:w-[140px]"
            />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <motion.span
                key={link.href}
                className="relative inline-block"
                whileHover={reduced ? undefined : { y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative pb-1 text-sm font-semibold transition-colors duration-200",
                    isActive ? "text-teal-deep" : "text-charcoal hover:text-teal-deep",
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

        <div className="hidden items-center gap-2 lg:flex">
          <motion.span className="inline-block" whileHover={buttonLiftHover(reduced)}>
            <a
              href={businessInfo.phoneHref}
              className="inline-flex rounded-full px-4 py-2 text-sm font-semibold text-teal-deep transition-colors duration-200 hover:bg-sunshine-yellow/10 hover:text-teal-hover"
            >
              Call for a Quote
            </a>
          </motion.span>
          <motion.span className="inline-block" whileHover={primaryCtaHover(reduced)}>
            <Link
              href="/contact"
              className="cta-primary-enhanced inline-flex rounded-full bg-teal-deep px-5 py-2 text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors duration-200 hover:bg-teal-hover hover:shadow-lg hover:shadow-teal-deep/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2"
            >
              Get a Custom Quote
            </Link>
          </motion.span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-full border border-[#ddd6c8] px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:border-teal/30 hover:text-teal-deep lg:hidden"
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
                    "rounded-xl px-3 py-2 text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "bg-sunshine-yellow/15 text-teal-deep ring-1 ring-teal-deep/15"
                      : "text-charcoal hover:bg-cream hover:text-teal-deep",
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
              className="rounded-full border border-teal-deep/40 px-4 py-2 text-center text-sm font-semibold text-teal-deep transition-colors hover:bg-sunshine-yellow/10"
            >
              Text for a Quote
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="cta-primary-enhanced rounded-full bg-teal-deep px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors hover:bg-teal-hover"
            >
              Call or Text to Book
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
