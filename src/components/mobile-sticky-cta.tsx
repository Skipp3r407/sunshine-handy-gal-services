import { businessInfo } from "@/lib/site-data";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e6dcc9] bg-white/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={businessInfo.phoneHref}
          className="flex-1 rounded-full border border-teal/35 px-4 py-2 text-center text-sm font-semibold text-teal"
        >
          Call for a Quote
        </a>
        <a
          href={businessInfo.textHref}
          className="flex-1 rounded-full bg-teal px-4 py-2 text-center text-sm font-semibold text-white"
        >
          Text for a Quote
        </a>
      </div>
    </div>
  );
}
