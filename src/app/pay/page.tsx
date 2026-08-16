import type { Metadata } from "next";
import Image from "next/image";
import { PaymentHelpNote, PaymentOptions } from "@/components/payment-options";
import { businessInfo } from "@/lib/site-data";
import { paymentPageUrl } from "@/lib/payment-methods";

export const metadata: Metadata = {
  title: `Pay Your Invoice | ${businessInfo.name}`,
  description: `Pay ${businessInfo.name} with Zelle, PayPal, or Cash App.`,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: paymentPageUrl,
  },
};

export default function PayPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-[#fdfaf2] shadow-[0_24px_80px_-48px_rgba(30,42,58,0.55)]">
        <div className="px-5 py-7 sm:px-8 sm:py-10">
          <header className="text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[1.75rem] bg-white p-2 shadow-[0_18px_45px_-32px_rgba(30,42,58,0.5)] sm:h-36 sm:w-36">
              <Image
                src="/images/logo.png"
                alt={`${businessInfo.name} logo`}
                width={180}
                height={180}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-teal-deep">
              Client payment link
            </p>
            <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
              Pay your invoice
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted-gray">
              Choose Zelle, PayPal, or Cash App. Scan a code, copy the details, or
              open the app — whichever is easiest on your phone.
            </p>
          </header>

          <div className="mt-8">
            <PaymentOptions />
          </div>

          <div className="mt-8">
            <PaymentHelpNote />
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-muted-gray">
            Question about an invoice?{" "}
            <a
              href={businessInfo.textHref}
              className="font-semibold text-teal-deep underline-offset-4 hover:underline"
            >
              Text {businessInfo.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="px-4 py-6 text-center text-xs leading-6 text-muted-gray">
        <p>
          &copy; {new Date().getFullYear()} {businessInfo.name}
        </p>
      </footer>
    </div>
  );
}
