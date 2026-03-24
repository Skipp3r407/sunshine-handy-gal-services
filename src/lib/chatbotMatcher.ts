import {
  DEFAULT_QUICK_REPLIES,
  FALLBACK_RESPONSE,
  PRESET_RESPONSES,
  UNCLEAR_PROMPT,
  AREA_UNCERTAIN_RESPONSE,
} from "@/lib/chatbotKnowledge";

export type MatcherResult =
  | { type: "preset"; key: string }
  | { type: "fallback" }
  | { type: "unclear" }
  | { type: "area_uncertain" }
  | { type: "start_quote" };

type IntentRule = {
  key: string;
  keywords: string[];
  /** Minimum keyword hits to match (lenient for short inputs) */
  minHits: number;
};

const INTENT_RULES: IntentRule[] = [
  { key: "services", keywords: ["service", "services", "what do you offer", "what you offer", "do you offer"], minHits: 1 },
  { key: "deep_cleaning", keywords: ["deep clean", "deep cleaning", "full reset", "thorough clean"], minHits: 1 },
  { key: "move_out", keywords: ["move out", "move-out", "move in", "move-in", "listing", "handoff"], minHits: 1 },
  { key: "organizing", keywords: ["organiz", "declutter", "closet", "clutter"], minHits: 1 },
  { key: "commercial", keywords: ["commercial", "business", "office", "small business"], minHits: 1 },
  { key: "areas", keywords: ["area", "serve", "location", "orlando", "winter park", "lake nona", "lake mary", "st. cloud", "st cloud", "where do you"], minHits: 1 },
  { key: "pricing", keywords: ["price", "pricing", "cost", "how much", "rate", "charge", "cheap", "expensive"], minHits: 1 },
  { key: "list_prices", keywords: ["list price", "on the website", "website price", "menu price"], minHits: 1 },
  {
    key: "how_quote",
    keywords: [
      "how do i get",
      "how to get a quote",
      "request a quote",
      "quote request",
      "submit a quote",
      "personalized quote",
    ],
    minHits: 1,
  },
  { key: "scheduling", keywords: ["schedule", "book", "booking", "availability", "when can", "how soon", "next week"], minHits: 1 },
  { key: "why_choose", keywords: ["why choose", "why you", "trust", "recommend", "women-owned", "women owned", "better than"], minHits: 1 },
  { key: "owner", keywords: ["who owns", "owner", "sheena", "hotaling", "started"], minHits: 1 },
  { key: "recurring", keywords: ["recurring", "weekly", "biweekly", "bi-weekly", "every week", "regular clean"], minHits: 1 },
  { key: "online_booking", keywords: ["online book", "book online", "website book"], minHits: 1 },
  { key: "long_reset", keywords: ["haven't cleaned", "havent cleaned", "long time", "months ago", "first time", "where to start"], minHits: 1 },
  { key: "call_text", keywords: ["call", "text", "phone", "number", "reach you"], minHits: 1 },
  { key: "testimonials", keywords: ["review", "testimonial", "feedback", "clients say"], minHits: 1 },
];

/** Quick-reply label -> preset key */
/** "Get a Quote" is handled in the chat UI to start the lead flow */
const QUICK_REPLY_MAP: Record<string, string> = {
  Services: "services",
  Pricing: "pricing",
  "Service Areas": "areas",
  "Deep Cleaning": "deep_cleaning",
  "Move-Out Cleaning": "move_out",
  Organizing: "organizing",
  "Call / Text": "call_text",
  "Why choose you?": "why_choose",
  Testimonials: "testimonials",
};

function countHits(text: string, keywords: string[]) {
  return keywords.reduce((n, kw) => (text.includes(kw) ? n + 1 : n), 0);
}

/** Nearby / edge-case area questions */
function looksLikeAreaQuestion(text: string) {
  return (
    (text.includes("serve") || text.includes("come to") || text.includes("cover")) &&
    (text.includes("near") ||
      text.includes("close") ||
      text.includes("outside") ||
      text.includes("clermont") ||
      text.includes("kissimmee") ||
      text.includes("town"))
  );
}

export function matchUserMessage(raw: string): MatcherResult {
  const trimmed = raw.trim();
  if (!trimmed) return { type: "unclear" };

  const text = trimmed.toLowerCase();

  if (trimmed === "Get a Quote" || text === "get a quote") {
    return { type: "start_quote" };
  }

  const quick = QUICK_REPLY_MAP[trimmed];
  if (quick && PRESET_RESPONSES[quick]) {
    return { type: "preset", key: quick };
  }

  if (looksLikeAreaQuestion(text)) {
    return { type: "area_uncertain" };
  }

  let best: { key: string; score: number; minHits: number } | null = null;
  for (const rule of INTENT_RULES) {
    const hits = countHits(text, rule.keywords);
    if (hits >= rule.minHits && (!best || hits > best.score)) {
      best = { key: rule.key, score: hits, minHits: rule.minHits };
    }
  }

  if (best && best.score >= 1 && PRESET_RESPONSES[best.key]) {
    return { type: "preset", key: best.key };
  }

  if (text.length < 4) return { type: "unclear" };

  return { type: "fallback" };
}

export function resolveMatcherResult(result: MatcherResult): {
  text: string;
  quickReplies: readonly string[];
} | null {
  if (result.type === "start_quote") return null;
  if (result.type === "preset") {
    const p = PRESET_RESPONSES[result.key];
    return {
      text: p.text,
      quickReplies: p.quickReplies ?? DEFAULT_QUICK_REPLIES,
    };
  }
  if (result.type === "area_uncertain") {
    return {
      text: AREA_UNCERTAIN_RESPONSE,
      quickReplies: ["Service Areas", "Call / Text", "Get a Quote"],
    };
  }
  if (result.type === "unclear") {
    return { text: UNCLEAR_PROMPT, quickReplies: DEFAULT_QUICK_REPLIES };
  }
  return {
    text: FALLBACK_RESPONSE,
    quickReplies: DEFAULT_QUICK_REPLIES,
  };
}
