"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { businessInfo } from "@/lib/site-data";
import {
  CHATBOT_DISPLAY_NAME,
  CHAT_GREETING,
  DEFAULT_QUICK_REPLIES,
} from "@/lib/chatbotKnowledge";
import { matchUserMessage, resolveMatcherResult } from "@/lib/chatbotMatcher";
import {
  QUOTE_FLOW_PROMPTS,
  QUOTE_SERVICE_OPTIONS,
  buildContactFormUrl,
  type QuoteLead,
} from "@/lib/chatbotFlows";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { QuickReplies } from "@/components/chat/QuickReplies";
import { SunnyChatLogo } from "@/components/chat/SunnyChatLogo";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  quickReplies?: readonly string[];
};

type QuotePhase =
  | null
  | {
      step: number;
      data: Partial<
        Pick<
          QuoteLead,
          "service" | "area" | "propertyType" | "timeframe" | "contact" | "notes"
        >
      >;
    };

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function matchServicePick(input: string): string | null {
  const t = input.trim().toLowerCase();
  for (const s of QUOTE_SERVICE_OPTIONS) {
    if (t === s.toLowerCase()) return s;
  }
  for (const s of QUOTE_SERVICE_OPTIONS) {
    const w = s.toLowerCase().split(/[\s/]+/)[0];
    if (w && t.includes(w)) return s;
  }
  return null;
}

type ChatWindowProps = {
  open: boolean;
  onClose: () => void;
};

export function ChatWindow({ open, onClose }: ChatWindowProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: newId(),
      role: "assistant",
      content: CHAT_GREETING,
      quickReplies: DEFAULT_QUICK_REPLIES,
    },
  ]);
  const [input, setInput] = useState("");
  const [quotePhase, setQuotePhase] = useState<QuotePhase>(null);
  const [quoteFormUrl, setQuoteFormUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, open, scrollToBottom]);

  const pushUser = useCallback((content: string) => {
    setMessages((m) => [...m, { id: newId(), role: "user", content }]);
  }, []);

  const pushAssistant = useCallback(
    (content: string, quickReplies?: readonly string[]) => {
      setMessages((m) => {
        const cleared = m.map((msg, i) =>
          i === m.length - 1 && msg.role === "assistant"
            ? { ...msg, quickReplies: undefined }
            : msg,
        );
        return [
          ...cleared,
          { id: newId(), role: "assistant", content, quickReplies },
        ];
      });
    },
    [],
  );

  const beginQuoteFlow = useCallback(() => {
    setQuotePhase({ step: 0, data: {} });
    pushAssistant(QUOTE_FLOW_PROMPTS.service, [...QUOTE_SERVICE_OPTIONS]);
  }, [pushAssistant]);

  const applyMatcher = useCallback(
    (trimmed: string) => {
      const result = matchUserMessage(trimmed);
      if (result.type === "start_quote") {
        beginQuoteFlow();
        return;
      }
      const resolved = resolveMatcherResult(result);
      if (resolved) {
        pushAssistant(resolved.text, resolved.quickReplies);
      }
    },
    [beginQuoteFlow, pushAssistant],
  );

  const submitLead = useCallback(
    async (data: QuoteLead) => {
      setSubmitting(true);
      const formUrl = buildContactFormUrl(data);
      setQuoteFormUrl(formUrl);
      try {
        await fetch("/api/chat-quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service: data.service,
            area: data.area,
            propertyType: data.propertyType,
            timeframe: data.timeframe,
            contact: data.contact,
            notes: data.notes,
            source: data.source,
          }),
        });
      } catch {
        /* non-blocking */
      } finally {
        setSubmitting(false);
      }

      pushAssistant(
        `${QUOTE_FLOW_PROMPTS.done}`,
        ["Open contact form", "Call / Text", "Services"],
      );
    },
    [pushAssistant],
  );

  const handleQuoteStep = useCallback(
    (raw: string) => {
      if (!quotePhase) return;
      const text = raw.trim();
      const { step, data } = quotePhase;

      if (step === 0) {
        const svc = matchServicePick(text);
        if (!svc) {
          pushAssistant(
            "Please choose a service from the buttons below — that helps us route your quote correctly.",
            [...QUOTE_SERVICE_OPTIONS],
          );
          return;
        }
        pushUser(text);
        setQuotePhase({ step: 1, data: { ...data, service: svc } });
        pushAssistant(QUOTE_FLOW_PROMPTS.area);
        return;
      }

      if (step === 1) {
        if (!text) return;
        pushUser(text);
        setQuotePhase({ step: 2, data: { ...data, area: text } });
        pushAssistant(QUOTE_FLOW_PROMPTS.property);
        return;
      }

      if (step === 2) {
        if (!text) return;
        pushUser(text);
        setQuotePhase({ step: 3, data: { ...data, propertyType: text } });
        pushAssistant(QUOTE_FLOW_PROMPTS.timeframe);
        return;
      }

      if (step === 3) {
        if (!text) return;
        pushUser(text);
        setQuotePhase({ step: 4, data: { ...data, timeframe: text } });
        pushAssistant(QUOTE_FLOW_PROMPTS.contact);
        return;
      }

      if (step === 4) {
        if (!text) return;
        pushUser(text);
        setQuotePhase({ step: 5, data: { ...data, contact: text } });
        pushAssistant(QUOTE_FLOW_PROMPTS.notes);
        return;
      }

      if (step === 5) {
        const notes =
          !text ||
          /^(no|none|n\/a|skip|nothing)$/i.test(text)
            ? ""
            : text;
        if (text) pushUser(text);
        else pushUser("(No extra notes)");

        const lead: QuoteLead = {
          service: data.service!,
          area: data.area!,
          propertyType: data.propertyType!,
          timeframe: data.timeframe!,
          contact: data.contact!,
          notes,
          source: "sunny-chatbot",
          createdAt: new Date().toISOString(),
        };
        setQuotePhase(null);
        void submitLead(lead);
      }
    },
    [quotePhase, pushAssistant, pushUser, submitLead],
  );

  const processUserText = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      if (quotePhase) {
        handleQuoteStep(trimmed);
        return;
      }

      pushUser(trimmed);
      applyMatcher(trimmed);
    },
    [quotePhase, handleQuoteStep, pushUser, applyMatcher],
  );

  const onSend = useCallback(() => {
    const v = input.trim();
    if (!v || submitting) return;
    setInput("");
    processUserText(v);
  }, [input, submitting, processUserText]);

  const onQuickReply = useCallback(
    (label: string) => {
      if (submitting) return;

      if (label === "Open contact form") {
        if (quoteFormUrl) router.push(quoteFormUrl);
        else router.push("/contact");
        return;
      }

      if (quotePhase?.step === 0) {
        handleQuoteStep(label);
        return;
      }

      if (!quotePhase && label === "Get a Quote") {
        pushUser(label);
        beginQuoteFlow();
        return;
      }

      if (!quotePhase) {
        pushUser(label);
        applyMatcher(label);
      }
    },
    [
      submitting,
      quoteFormUrl,
      quotePhase,
      router,
      handleQuoteStep,
      pushUser,
      beginQuoteFlow,
      applyMatcher,
    ],
  );

  const lastAssistantWithReplies = [...messages]
    .reverse()
    .find((m) => m.role === "assistant" && m.quickReplies?.length);

  if (!open) return null;

  return (
    <div
      className="fixed bottom-[5.25rem] right-4 z-[100] flex w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-teal/15 bg-white shadow-[0_16px_48px_-12px_rgba(12,125,150,0.35)] sm:bottom-24 sm:right-5 lg:bottom-6 lg:right-8"
      role="dialog"
      aria-label={`${CHATBOT_DISPLAY_NAME} chat assistant`}
      aria-modal="true"
    >
      <div className="flex items-center justify-between gap-2 border-b border-teal/10 bg-gradient-to-r from-sunshine-yellow/25 via-white to-aqua/20 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal/15 bg-white shadow-sm ring-1 ring-sunshine-yellow/20">
            <SunnyChatLogo variant="onLight" className="h-8 w-8" />
          </span>
          <div className="min-w-0">
            <p className="font-heading text-sm font-bold text-teal-deep">
              {CHATBOT_DISPLAY_NAME}
            </p>
            <p className="text-xs text-muted-gray">Booking & quote help</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1.5 text-charcoal transition-colors hover:bg-cream hover:text-teal-deep"
          aria-label="Close chat"
        >
          <span aria-hidden className="text-lg leading-none">
            ×
          </span>
        </button>
      </div>

      <div
        ref={listRef}
        className="flex max-h-[min(52vh,420px)] flex-col gap-3 overflow-y-auto overscroll-contain px-3 py-3"
      >
        {messages.map((m) => (
          <MessageBubble key={m.id} role={m.role} content={m.content} />
        ))}
      </div>

      {lastAssistantWithReplies?.quickReplies ? (
        <div className="border-t border-teal/8 px-3 pb-2 pt-1">
          <QuickReplies
            labels={lastAssistantWithReplies.quickReplies}
            onSelect={(label) => {
              if (label === "Call / Text") {
                pushUser(label);
                pushAssistant(
                  `You can call ${businessInfo.phoneDisplay} or text the same number for the quickest reply.`,
                  ["Get a Quote", "Services", "Pricing"],
                );
                return;
              }
              onQuickReply(label);
            }}
            disabled={submitting}
          />
        </div>
      ) : null}

      <form
        className="border-t border-teal/10 p-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSend();
        }}
      >
        <div className="flex gap-2">
          <label htmlFor="sunny-chat-input" className="sr-only">
            Message {CHATBOT_DISPLAY_NAME}
          </label>
          <input
            id="sunny-chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            className="min-w-0 flex-1 rounded-xl border border-[#ddd6c8] px-3 py-2.5 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/15"
            autoComplete="off"
            maxLength={2000}
          />
          <button
            type="submit"
            disabled={!input.trim() || submitting}
            className="shrink-0 rounded-xl bg-teal-deep px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-hover disabled:opacity-50"
          >
            Send
          </button>
        </div>
        <p className="mt-2 text-center text-[10px] text-muted-gray">
          <Link href="/contact" className="text-teal-deep underline-offset-2 hover:underline">
            Contact form
          </Link>
          {" · "}
          <a href={businessInfo.phoneHref} className="text-teal-deep underline-offset-2 hover:underline">
            Call
          </a>
          {" · "}
          <a href={businessInfo.textHref} className="text-teal-deep underline-offset-2 hover:underline">
            Text
          </a>
        </p>
      </form>
    </div>
  );
}
