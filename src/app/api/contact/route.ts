import { NextResponse } from "next/server";
import { Resend } from "resend";
import { businessInfo } from "@/lib/site-data";

const recipientEmail = "sunshineshandygalservices@gmail.com";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  date?: string;
  message?: string;
  company?: string;
};

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const formatValue = (value: string) => value || "Not provided";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form email service is missing RESEND_API_KEY.");
    return NextResponse.json(
      { success: false, error: "Missing RESEND_API_KEY" },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid form submission" },
      { status: 400 },
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.log("Incoming contact form payload:", payload);
  }

  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const address = clean(payload.address);
  const service = clean(payload.service);
  const date = clean(payload.date);
  const message = clean(payload.message);
  const honeypot = clean(payload.company);

  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!name || !phone || !email) {
    return NextResponse.json(
      { success: false, error: "Please include your name, phone, and email." },
      { status: 400 },
    );
  }

  const submittedRows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Address", address],
    ["Service Needed", service],
    ["Preferred Date", date],
    ["Message / Details", message],
  ] as const;

  try {
    const { data, error } = await resend.emails.send({
      from: `${businessInfo.name} <onboarding@resend.dev>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New quote request from ${name}`,
      text: submittedRows
        .map(([label, value]) => `${label}: ${formatValue(value)}`)
        .join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2933; line-height: 1.6;">
          <h1 style="font-size: 20px; margin: 0 0 16px;">New quote request</h1>
          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%;">
            <tbody>
              ${submittedRows
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: 700; width: 180px;">${label}</td>
                      <td style="border: 1px solid #e5e7eb; padding: 10px;">${escapeHtml(formatValue(value)).replace(/\n/g, "<br />")}</td>
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `,
    });

    if (error || !data) {
      console.error("Resend contact form send failed:", error ?? "No email data returned.");
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}

export function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed" },
    { status: 405 },
  );
}
