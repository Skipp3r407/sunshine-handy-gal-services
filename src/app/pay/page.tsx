import type { Metadata } from "next";
import Link from "next/link";
import { PaymentHelpNote, PaymentOptions } from "@/components/payment-options";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { businessInfo } from "@/lib/site-data";
import { paymentPagePath } from "@/lib/payment-methods";

export const metadata: Metadata = {
  title: `Pay Your Invoice | ${businessInfo.name}`,
  description: `Pay ${businessInfo.name} with Zelle, PayPal, or Cash App. Scan the Zelle QR code or open your preferred payment app.`,
  alternates: {
    canonical: paymentPagePath,
  },
};

export default function PayPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff8db] via-white to-[#eefaff] p-8 sm:p-12">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Payment options"
            title="Pay your invoice the easy way"
            description="Choose Zelle, PayPal, or Cash App. Scan a code, copy the details, or open the app — whichever is easiest on your phone."
          />
        </Reveal>
      </section>

      <PaymentOptions />

      <PaymentHelpNote />

      <Reveal direction="up">
        <p className="text-center text-sm leading-6 text-muted-gray">
          Question about an invoice?{" "}
          <a href={businessInfo.textHref} className="font-semibold text-teal-deep underline-offset-4 hover:underline">
            Text {businessInfo.phoneDisplay}
          </a>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-teal-deep underline-offset-4 hover:underline">
            request a quote
          </Link>
          .
        </p>
      </Reveal>
    </div>
  );
}
