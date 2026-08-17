import { businessInfo } from "@/lib/site-data";

/**
 * Client payment options — edit this file when accounts change
 * (for example after a business bank account is set up).
 *
 * Zelle, PayPal.me, and Cash App are live.
 * Send clients: https://www.sunshineshandygal.com/pay
 */
export const paymentPagePath = "/pay";
export const paymentPageUrl = "https://www.sunshineshandygal.com/pay";

export const paymentInfo = {
  recipientName: "SHEENA HOTALING",
  zelle: {
    /**
     * Official Zelle QR enrollment link from Sheena's payment card.
     * Payload: {"name":"SHEENA","action":"payment","token":"3213396686"}
     */
    href: "https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiU0hFRU5BIiwiYWN0aW9uIjoicGF5bWVudCIsInRva2VuIjoiMzIxMzM5NjY4NiJ9",
    qrSrc: "/images/qr/zelle-qr.png",
  },
  paypal: {
    email: businessInfo.email,
    paypalMe: "Irishsunshine86",
    href: "https://www.paypal.me/Irishsunshine86",
    qrSrc: "/images/qr/paypal-qr.png",
  },
  cashApp: {
    cashtag: "sunshine4u86",
    href: "https://cash.app/$sunshine4u86",
    qrSrc: "/images/qr/cashapp-qr.png",
  },
} as const;

export type PaymentMethodId = "zelle" | "paypal" | "cashapp";

export type PaymentMethod = {
  id: PaymentMethodId;
  name: string;
  tagline: string;
  instructions: string;
  detailLabel: string;
  detailValue: string;
  secondaryLabel?: string;
  secondaryValue?: string;
  href: string;
  hrefLabel: string;
  qrSrc?: string;
  qrAlt?: string;
  accent: string;
  soft: string;
  buttonClass: string;
};

function paypalHref() {
  const handle = paymentInfo.paypal.paypalMe.trim();
  if (paymentInfo.paypal.href) return paymentInfo.paypal.href;
  if (handle) return `https://www.paypal.me/${encodeURIComponent(handle)}`;
  return "https://www.paypal.com/myaccount/transfer/homepage";
}

function cashAppHref() {
  if (paymentInfo.cashApp.href) return paymentInfo.cashApp.href;
  const tag = paymentInfo.cashApp.cashtag.trim().replace(/^\$/, "");
  if (tag) return `https://cash.app/$${encodeURIComponent(tag)}`;
  return "https://cash.app/";
}

function cashAppDetail() {
  const tag = paymentInfo.cashApp.cashtag.trim().replace(/^\$/, "");
  if (tag) return `$${tag}`;
  return businessInfo.phoneDisplay;
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "zelle",
    name: "Zelle",
    tagline: "Fast bank-to-bank transfer",
    instructions:
      "Scan the QR code in your banking app or tap Open Zelle. Send to the name and phone below.",
    detailLabel: "Send to",
    detailValue: paymentInfo.recipientName,
    secondaryLabel: "Zelle phone",
    secondaryValue: businessInfo.phoneDisplay,
    href: paymentInfo.zelle.href,
    hrefLabel: "Open Zelle",
    qrSrc: paymentInfo.zelle.qrSrc,
    qrAlt: `Zelle QR code for ${paymentInfo.recipientName}`,
    accent: "#6d1ed4",
    soft: "#f4edff",
    buttonClass: "bg-[#6d1ed4] hover:bg-[#5a18b0] text-white",
  },
  {
    id: "paypal",
    name: "PayPal",
    tagline: "Pay with PayPal or a linked card",
    instructions: paymentInfo.paypal.paypalMe.trim()
      ? "Tap Open PayPal to send your invoice total to our PayPal.me link."
      : "Open PayPal and send your invoice total to the email below.",
    detailLabel: paymentInfo.paypal.paypalMe.trim() ? "PayPal.me" : "PayPal email",
    detailValue: paymentInfo.paypal.paypalMe.trim()
      ? `paypal.me/${paymentInfo.paypal.paypalMe.trim()}`
      : paymentInfo.paypal.email,
    href: paypalHref(),
    hrefLabel: "Open PayPal",
    qrSrc: paymentInfo.paypal.qrSrc,
    qrAlt: `PayPal QR code for ${paymentInfo.paypal.href}`,
    accent: "#003087",
    soft: "#e8f1fb",
    buttonClass: "bg-[#003087] hover:bg-[#00266c] text-white",
  },
  {
    id: "cashapp",
    name: "Cash App",
    tagline: "Send with Cash App",
    instructions: paymentInfo.cashApp.cashtag.trim()
      ? "Tap Open Cash App or search the $cashtag below and send your invoice total."
      : "Open Cash App, search the phone number below, and send your invoice total.",
    detailLabel: paymentInfo.cashApp.cashtag.trim() ? "Cashtag" : "Cash App phone",
    detailValue: cashAppDetail(),
    href: cashAppHref(),
    hrefLabel: "Open Cash App",
    qrSrc: paymentInfo.cashApp.qrSrc,
    qrAlt: `Cash App QR code for $${paymentInfo.cashApp.cashtag}`,
    accent: "#00c244",
    soft: "#e9fbf0",
    buttonClass: "bg-[#00c244] hover:bg-[#00a83a] text-white",
  },
];
