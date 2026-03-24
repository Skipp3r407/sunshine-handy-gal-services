import { businessInfo } from "@/lib/site-data";

export type QuoteLead = {
  service: string;
  area: string;
  propertyType: string;
  timeframe: string;
  contact: string;
  notes: string;
  source: "sunny-chatbot";
  createdAt: string;
};

export const QUOTE_SERVICE_OPTIONS = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out",
  "Organizing",
  "Residential Cleaning",
  "Light Commercial",
] as const;

export function buildQuoteSummary(lead: Omit<QuoteLead, "source" | "createdAt">) {
  return [
    `Service: ${lead.service}`,
    `Area: ${lead.area}`,
    `Property: ${lead.propertyType}`,
    `Preferred timing: ${lead.timeframe}`,
    `Contact: ${lead.contact}`,
    lead.notes ? `Notes: ${lead.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

const QUOTE_TO_FORM_SERVICE: Record<string, string> = {
  "Standard Cleaning": "Standard Cleaning",
  "Deep Cleaning": "Deep Cleaning",
  "Move-In / Move-Out": "Move-In / Move-Out Cleaning",
  Organizing: "Organization Services",
  "Residential Cleaning": "Residential Cleaning",
  "Light Commercial": "Light Commercial Cleaning",
};

export function mapQuoteServiceToFormValue(service: string) {
  return QUOTE_TO_FORM_SERVICE[service] ?? service;
}

export function buildContactFormUrl(lead: Omit<QuoteLead, "source" | "createdAt">) {
  const params = new URLSearchParams();
  params.set("message", buildQuoteSummary(lead));
  const formService = mapQuoteServiceToFormValue(lead.service);
  if (formService) params.set("service", formService);
  return `/contact?${params.toString()}`;
}

export const QUOTE_FLOW_PROMPTS = {
  service: "Wonderful — what type of service do you need?",
  area: "What area are you located in? (City or neighborhood is perfect.)",
  property:
    "What type of property is it? (For example: house, apartment, townhome, or small office.)",
  timeframe: "What day or timeframe are you hoping for?",
  contact: "What's the best name and phone number to reach you?",
  notes: "Anything else you'd like us to know? (Optional — you can type “no” or skip.)",
  done: `Thanks! Your quote request is ready. You can open our contact form with these details filled in, or call/text ${businessInfo.phoneDisplay} for the fastest help.`,
} as const;
