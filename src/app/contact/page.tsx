import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { businessInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Custom Cleaning Quote in Orlando",
  description:
    "Contact Sunshines Handy Gal Services to call or text for custom pricing, check availability, and request trusted cleaning in Orlando and nearby areas.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff7d9] via-white to-[#ebf9ff] p-8 sm:p-12">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you need, and we’ll bring a little more sunshine into your space."
            description="Call or text for pricing and availability, or share a few details below and we will follow up quickly with personalized recommendations."
          />
        </Reveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal direction="left" className="min-h-0">
          <article className="rounded-3xl border border-[#eee5d7] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-charcoal">Get In Touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-gray">
            <li>
              <span className="font-semibold text-charcoal">Email:</span>{" "}
              <a href={businessInfo.emailHref} className="text-teal">
                {businessInfo.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-charcoal">Location:</span>{" "}
              Orlando, Florida
            </li>
            <li>
              <span className="font-semibold text-charcoal">Service Areas:</span>{" "}
              Orlando, Lake Nona, Winter Park, Lake Mary, St. Cloud, and nearby
              Central Florida communities.
            </li>
          </ul>
          <p className="mt-5 rounded-2xl bg-cream px-4 py-3 text-sm text-charcoal">
            Every home is different, so pricing is customized based on your
            needs. Call or text for a personalized quote. 3-hour minimum service
            rate: $150.
          </p>
        </article>
        </Reveal>

        <Reveal direction="right" className="min-h-0" delay={0.06}>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
