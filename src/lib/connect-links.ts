import { businessInfo, socialLinks } from "@/lib/site-data";

export const connectQrUrl = "https://sunshineshandygal.com/connect";

export type ConnectLinkIcon =
  | "sparkles"
  | "home"
  | "phone"
  | "message"
  | "mail"
  | "facebook"
  | "map"
  | "star"
  | "external";

export type ConnectLink = {
  id: string;
  label: string;
  href: string;
  icon: ConnectLinkIcon;
  type: "primary" | "website" | "contact" | "social" | "review";
  enabled: boolean;
  order: number;
  external?: boolean;
  ariaLabel: string;
  analyticsEvent: string;
  note?: string;
};

export const connectLinks: ConnectLink[] = [
  {
    id: "quote",
    label: "Request a Free Quote",
    href: "/contact",
    icon: "sparkles",
    type: "primary",
    enabled: true,
    order: 10,
    ariaLabel: "Request a free quote from Sunshine's Handy Gal Services",
    analyticsEvent: "connect_quote_click",
  },
  {
    id: "website",
    label: "Visit Our Website",
    href: "https://www.sunshineshandygal.com",
    icon: "home",
    type: "website",
    enabled: true,
    external: true,
    order: 20,
    ariaLabel: "Visit the Sunshine's Handy Gal Services homepage",
    analyticsEvent: "connect_website_click",
  },
  {
    id: "call",
    label: "Call Us",
    href: businessInfo.phoneHref,
    icon: "phone",
    type: "contact",
    enabled: true,
    order: 30,
    ariaLabel: `Call Sunshine's Handy Gal Services at ${businessInfo.phoneDisplay}`,
    analyticsEvent: "connect_call_click",
  },
  {
    id: "text",
    label: "Text Us",
    href: businessInfo.textHref,
    icon: "message",
    type: "contact",
    enabled: true,
    order: 40,
    ariaLabel: `Text Sunshine's Handy Gal Services at ${businessInfo.phoneDisplay}`,
    analyticsEvent: "connect_text_click",
  },
  {
    id: "email",
    label: "Email Us",
    href: businessInfo.emailHref,
    icon: "mail",
    type: "contact",
    enabled: true,
    order: 50,
    ariaLabel: `Email Sunshine's Handy Gal Services at ${businessInfo.email}`,
    analyticsEvent: "connect_email_click",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: socialLinks.facebook,
    icon: "facebook",
    type: "social",
    enabled: Boolean(socialLinks.facebook),
    external: true,
    order: 60,
    ariaLabel: "Open the official Sunshine's Handy Gal Services Facebook page",
    analyticsEvent: "connect_facebook_click",
  },
  {
    id: "google-reviews",
    label: "Google Reviews",
    href: businessInfo.googleReviewUrl,
    icon: "star",
    type: "review",
    enabled: Boolean(businessInfo.googleReviewUrl),
    external: true,
    order: 70,
    ariaLabel: "Open Sunshine's Handy Gal Services Google reviews",
    analyticsEvent: "connect_google_reviews_click",
  },
  {
    id: "leave-review",
    label: "Leave Us a Review",
    href: businessInfo.googleReviewUrl,
    icon: "star",
    type: "review",
    enabled: Boolean(businessInfo.googleReviewUrl),
    external: true,
    order: 80,
    ariaLabel: "Leave Sunshine's Handy Gal Services a Google review",
    analyticsEvent: "connect_leave_review_click",
    note: "Uses the existing Google reviews link until a direct review URL is supplied.",
  },
  {
    id: "nextdoor",
    label: "Nextdoor",
    href: "https://nextdoor.com/page/sunshines-handygal-services-orlando-fl?init_source=FAVES_HUB&query=Sunshines+Handy+Gal&referrer=nextdoor",
    icon: "map",
    type: "social",
    enabled: true,
    external: true,
    order: 90,
    ariaLabel: "Open the official Sunshine's Handy Gal Services Nextdoor profile",
    analyticsEvent: "connect_nextdoor_click",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "",
    icon: "external",
    type: "social",
    enabled: false,
    external: true,
    order: 100,
    ariaLabel: "Open the official Sunshine's Handy Gal Services YouTube profile",
    analyticsEvent: "connect_youtube_click",
    note: "Official YouTube channel URL needed before enabling.",
  },
];

export const enabledConnectLinks = connectLinks
  .filter((link) => link.enabled)
  .sort((a, b) => a.order - b.order);

export const disabledConnectLinks = connectLinks
  .filter((link) => !link.enabled)
  .sort((a, b) => a.order - b.order);
