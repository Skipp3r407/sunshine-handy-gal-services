"use client";

import { useState } from "react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { SunnyChatLogo } from "@/components/chat/SunnyChatLogo";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-[5.25rem] right-4 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-teal-deep text-2xl shadow-lg shadow-teal-deep/35 transition-[transform,box-shadow] hover:scale-[1.04] hover:shadow-xl hover:shadow-teal-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/80 focus-visible:ring-offset-2 sm:bottom-24 sm:right-5 lg:bottom-6 lg:right-8"
        aria-label={open ? "Close chat with Sunny" : "Open chat with Sunny"}
        aria-expanded={open}
      >
        {open ? (
          <span className="text-2xl font-light leading-none text-white" aria-hidden>
            ×
          </span>
        ) : (
          <SunnyChatLogo variant="onTeal" className="h-8 w-8 shrink-0" />
        )}
      </button>

      <ChatWindow open={open} onClose={() => setOpen(false)} />
    </>
  );
}
