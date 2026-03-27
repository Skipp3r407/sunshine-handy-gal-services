import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactPageSidebar } from "@/components/contact-page-sidebar";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact | Custom Cleaning Quote in Orlando",
  description:
    "Contact Sunshines Handy Gal Services to call or text for custom pricing, check availability, and request trusted cleaning in Orlando and nearby areas.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <Reveal direction="up">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-2xl font-bold leading-snug text-charcoal sm:text-3xl">
            Request a booking
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-gray sm:text-base">
            Share your details and preferred date—we&apos;ll follow up with personalized options
            for cleaning and organizing in your space.
          </p>
        </header>
      </Reveal>

      <div className="rounded-[1.75rem] bg-[#faf7f2] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:items-start lg:gap-10 xl:gap-12">
          <Reveal direction="left" className="min-h-0">
            <ContactForm variant="page" />
          </Reveal>
          <Reveal direction="right" className="min-h-0" delay={0.06}>
            <ContactPageSidebar />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
