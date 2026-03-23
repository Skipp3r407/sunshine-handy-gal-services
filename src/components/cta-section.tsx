import Link from "next/link";
import { businessInfo } from "@/lib/site-data";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="rounded-[2rem] bg-gradient-to-r from-sunshine-yellow via-[#ffd85f] to-[#7ecce0] p-8 shadow-[0_18px_44px_-28px_rgba(12,125,150,0.25)] sm:p-12">
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
            className="inline-flex items-center justify-center rounded-full bg-teal-deep px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-deep/30 transition hover:bg-teal-hover hover:shadow-xl hover:shadow-teal-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#7ecce0]"
          >
            Request a Custom Quote
          </Link>
          <a
            href={businessInfo.textHref}
            className="inline-flex items-center justify-center rounded-full border border-teal-deep/45 bg-white/90 px-6 py-3 text-sm font-semibold text-teal-deep shadow-sm transition hover:border-golden-amber/55 hover:bg-sunshine-yellow/15 hover:shadow-md"
          >
            Text for a Quote
          </a>
        </div>
        <p className="mt-4 text-xs font-medium text-charcoal/80">
          Every home is different, so pricing is customized based on your needs.
          3-hour minimum service rate: $150.
        </p>
      </div>
    </section>
  );
}
