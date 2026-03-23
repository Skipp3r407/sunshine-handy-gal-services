import { businessInfo } from "@/lib/site-data";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-teal/15 bg-white/95 p-3 shadow-[0_-4px_24px_-8px_rgba(12,125,150,0.2)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={businessInfo.phoneHref}
          className="flex-1 rounded-full border border-teal-deep/40 px-4 py-2 text-center text-sm font-semibold text-teal-deep transition hover:bg-sunshine-yellow/12"
        >
          Call for a Quote
        </a>
        <a
          href={businessInfo.textHref}
          className="flex-1 rounded-full bg-teal-deep px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-teal-deep/30 transition hover:bg-teal-hover active:scale-[0.99]"
        >
          Text for a Quote
        </a>
      </div>
    </div>
  );
}
