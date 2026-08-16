"use client";

import Image from "next/image";
import { useState } from "react";
import {
  CashAppMark,
  PayPalMark,
  ZelleMark,
} from "@/components/payment-brand-icons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { paymentMethods, type PaymentMethod } from "@/lib/payment-methods";
import { cn } from "@/lib/utils";

function BrandIcon({ id, className }: { id: PaymentMethod["id"]; className?: string }) {
  if (id === "zelle") return <ZelleMark className={className} />;
  if (id === "paypal") return <PayPalMark className={className} />;
  return <CashAppMark className={className} />;
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center rounded-full border border-[#ddd6c8] bg-white px-3 py-1.5 text-xs font-semibold text-teal-deep transition-colors hover:border-teal-deep/40 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function PaymentDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#efe9dc] bg-white/90 px-3 py-2.5">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-gray">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-charcoal">{value}</p>
      </div>
      <CopyButton value={value} label={label} />
    </div>
  );
}

function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_18px_44px_-32px_rgba(30,42,58,0.45)]"
      style={{ borderColor: `${method.accent}33` }}
    >
      <div className="h-1.5 w-full" style={{ backgroundColor: method.accent }} aria-hidden />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <BrandIcon id={method.id} className="h-12 w-12 shrink-0" />
          <div>
            <h2 className="font-heading text-xl font-extrabold text-charcoal">{method.name}</h2>
            <p className="text-sm text-muted-gray">{method.tagline}</p>
          </div>
        </div>

        {method.qrSrc ? (
          <div
            className="mx-auto mt-5 rounded-3xl border border-[#efe9dc] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
            style={{ backgroundColor: method.soft }}
          >
            <Image
              src={method.qrSrc}
              alt={method.qrAlt ?? `${method.name} payment QR code`}
              width={220}
              height={220}
              className="h-[200px] w-[200px] rounded-2xl bg-white sm:h-[220px] sm:w-[220px]"
            />
          </div>
        ) : (
          <div
            className="mt-5 rounded-2xl px-4 py-3 text-sm leading-6 text-charcoal/85"
            style={{ backgroundColor: method.soft }}
          >
            {method.instructions}
          </div>
        )}

        {method.qrSrc ? (
          <p className="mt-4 text-sm leading-6 text-muted-gray">{method.instructions}</p>
        ) : null}

        <div className="mt-4 grid gap-2">
          <PaymentDetail label={method.detailLabel} value={method.detailValue} />
          {method.secondaryLabel && method.secondaryValue ? (
            <PaymentDetail label={method.secondaryLabel} value={method.secondaryValue} />
          ) : null}
        </div>

        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-5 inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/80 focus-visible:ring-offset-2",
            method.buttonClass,
          )}
        >
          {method.hrefLabel}
        </a>
      </div>
    </article>
  );
}

export function PaymentOptions() {
  return (
    <StaggerGrid className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {paymentMethods.map((method) => (
        <PaymentCard key={method.id} method={method} />
      ))}
    </StaggerGrid>
  );
}

export function PaymentHelpNote() {
  return (
    <Reveal direction="up">
      <aside className="rounded-3xl border border-teal-deep/15 bg-gradient-to-br from-white to-[#fffdf6] p-6 sm:p-8">
        <h2 className="font-heading text-xl font-bold text-charcoal">Before you send</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-gray marker:text-teal-deep">
          <li>Please include your name or invoice number in the payment note.</li>
          <li>Send the amount on your quote or invoice — we do not collect card numbers on this page.</li>
          <li>Zelle, PayPal, and Cash App are the current options. More methods can be added later.</li>
        </ul>
      </aside>
    </Reveal>
  );
}
