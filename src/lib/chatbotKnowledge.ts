import { businessInfo } from "@/lib/site-data";

export const CHATBOT_DISPLAY_NAME = "Sunny";

export const CHAT_GREETING = `Hi! I'm Sunny ☀️ I can help with services, service areas, quotes, and booking questions. What can I help you with today?`;

export const DEFAULT_QUICK_REPLIES = [
  "Services",
  "Pricing",
  "Service Areas",
  "Detailed Clean",
  "Deep Cleaning",
  "Move-Out Cleaning",
  "Organizing",
  "Get a Quote",
  "Call / Text",
] as const;

export const FALLBACK_RESPONSE = `I'd love to help with that. The fastest way to confirm is to call or text ${businessInfo.phoneDisplay}, or I can help you request a quote here.`;

export const UNCLEAR_PROMPT = `I'm not quite sure I caught that — are you curious about our services, pricing, areas we serve, or getting a custom quote? Tap a quick reply below or type your question.`;

export const AREA_UNCERTAIN_RESPONSE = `The best way to confirm coverage for your exact address is to call or text ${businessInfo.phoneDisplay} — we're happy to check your location.`;

/** Preset answers keyed for matcher + manual quick paths */
export const PRESET_RESPONSES: Record<
  string,
  { text: string; quickReplies?: readonly string[] }
> = {
  services: {
    text: "We offer Detailed Clean, deep cleaning, move-in / move-out cleaning, organization services, residential cleaning, and light commercial cleaning for small businesses. Which one are you most interested in?",
    quickReplies: [
      "Detailed Clean",
      "Deep Cleaning",
      "Move-Out Cleaning",
      "Organizing",
      "Get a Quote",
    ],
  },
  detailed_clean: {
    text: "Detailed Clean includes thorough, top-to-bottom attention to all areas of your home, focusing on buildup, high-touch surfaces, and areas that need extra care. It's our go-to for consistent, premium upkeep.",
    quickReplies: ["Pricing", "Get a Quote", "Deep Cleaning", "Services"],
  },
  deep_cleaning: {
    text: "Yes — deep cleaning includes detailed top-to-bottom attention for buildup, neglected areas, and high-touch surfaces that need extra care. It's a great option for a full reset.",
    quickReplies: ["Pricing", "Get a Quote", "Services"],
  },
  move_out: {
    text: "Yes — move-in / move-out cleaning is designed to prepare a property for listing, handoff, or a fresh start in a new space.",
    quickReplies: ["Pricing", "Get a Quote", "Service Areas"],
  },
  organizing: {
    text: "Yes — organizing services are available for closets, kitchens, and everyday spaces to improve flow and reduce clutter.",
    quickReplies: ["Pricing", "Get a Quote", "Services"],
  },
  commercial: {
    text: "Yes — light commercial cleaning is available for offices and small business spaces, with detail-focused standards and professional communication.",
    quickReplies: ["Pricing", "Get a Quote", "Service Areas"],
  },
  areas: {
    text: `We proudly serve ${businessInfo.serviceAreaSummary}.`,
    quickReplies: ["Pricing", "Get a Quote", "Call / Text"],
  },
  pricing: {
    text: "Pricing is customized based on your space and cleaning needs. There's a 3-hour minimum service rate of $150, and the best next step is to call or text for a personalized quote.",
    quickReplies: ["Get a Quote", "Call / Text", "Services"],
  },
  list_prices: {
    text: "No — every home and job is different, so pricing is customized based on your needs. Call or text for a personalized quote.",
    quickReplies: ["Pricing", "Get a Quote", "Call / Text"],
  },
  how_quote: {
    text: "You can call, text, or submit a quote request through the contact form. If you'd like, tap Get a Quote and I'll walk you through a few quick questions.",
    quickReplies: ["Get a Quote", "Call / Text", "Service Areas"],
  },
  scheduling: {
    text: "Availability can vary, but the team typically responds quickly with personalized availability and pricing. Call, text, or request a quote to check dates.",
    quickReplies: ["Get a Quote", "Call / Text", "Pricing"],
  },
  why_choose: {
    text: "Clients consistently mention thorough cleaning, responsive communication, thoughtful special touches, and polished results. The business is women-owned and 100% recommended.",
    quickReplies: ["Get a Quote", "Services", "Testimonials"],
  },
  owner: {
    text: `${businessInfo.name} was started by ${businessInfo.owner} with a focus on care, trust, and consistency.`,
    quickReplies: ["Services", "Get a Quote", "Why choose you?"],
  },
  recurring: {
    text: "Yes — Detailed Clean is a great fit for dependable recurring care. Reach out to set a rhythm that works for your home.",
    quickReplies: ["Pricing", "Get a Quote", "Services"],
  },
  online_booking: {
    text: "Yes — online booking is available, and you can also call or text for a custom quote.",
    quickReplies: ["Get a Quote", "Call / Text", "Pricing"],
  },
  long_reset: {
    text: "Deep cleaning is usually the best place to start if your home needs a full reset or extra attention to buildup and high-touch areas.",
    quickReplies: ["Pricing", "Get a Quote", "Deep Cleaning"],
  },
  call_text: {
    text: `You can reach us at ${businessInfo.phoneDisplay} — call or text anytime for a friendly, personalized quote.`,
    quickReplies: ["Get a Quote", "Pricing", "Services"],
  },
  testimonials: {
    text: "Local clients often share that we're responsive, professional, thorough, and thoughtful — from deep cleans to move-out help and special touches. See more on our Testimonials page!",
    quickReplies: ["Get a Quote", "Services", "Pricing"],
  },
};
