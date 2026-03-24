import { NextResponse } from "next/server";

type Body = {
  service?: string;
  area?: string;
  propertyType?: string;
  timeframe?: string;
  contact?: string;
  notes?: string;
  source?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const required = ["service", "area", "propertyType", "timeframe", "contact"] as const;
    for (const key of required) {
      if (!body[key] || String(body[key]).trim().length === 0) {
        return NextResponse.json(
          { ok: false, error: `Missing ${key}` },
          { status: 400 },
        );
      }
    }

    const payload = {
      ...body,
      source: body.source ?? "sunny-chatbot",
      createdAt: new Date().toISOString(),
    };

    if (process.env.NODE_ENV === "development") {
      console.info("[chat-quote] lead captured:", payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}
