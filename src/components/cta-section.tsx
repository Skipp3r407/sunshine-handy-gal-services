import Link from "next/link";
import { businessInfo } from "@/lib/site-data";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="rounded-[2rem] bg-gradient-to-r from-sunshine-yellow via-[#ffd85f] to-coral-peach p-8 shadow-[0_18px_44px_-28px_rgba(0,0,0,0.45)] sm:p-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-charcoal/85 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-charcoal/90"
          >
            Book Now
          </Link>
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center justify-center rounded-full border border-charcoal/30 bg-white/85 px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-white"
          >
            Call Today
          </a>
        </div>
      </div>
    </section>
  );
}
