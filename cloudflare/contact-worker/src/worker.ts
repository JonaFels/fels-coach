/**
 * Cloudflare Worker: Contact Form -> Resend
 *
 * Receives a POST from the website's contact form, validates input,
 * applies a basic per-IP rate limit (in-memory, per worker instance),
 * and sends a notification email via Resend.
 *
 * No database is used. The email to NOTIFY_TO is the only "storage".
 *
 * Required secrets (wrangler secret put):
 *   - RESEND_API_KEY
 *
 * Required vars (wrangler.toml [vars]):
 *   - NOTIFY_TO         e.g. "jona@fels-coach.de"
 *   - NOTIFY_FROM       e.g. "Kontaktformular <kontakt@fels-coach.de>"
 *   - ALLOWED_ORIGIN    e.g. "https://fels-coach.de"
 */

export interface Env {
  RESEND_API_KEY: string;
  NOTIFY_TO: string;
  NOTIFY_FROM: string;
  ALLOWED_ORIGIN: string;
}

type Body = {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot
};

// Per-instance rate limit: max 5 submissions / IP / 60 minutes
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQ = 5;
const ipHits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || entry.reset < now) {
    ipHits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQ;
}

function escape(html: string): string {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function corsHeaders(origin: string): HeadersInit {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(env.ALLOWED_ORIGIN || "*");

    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: cors });
    }

    const ip =
      req.headers.get("CF-Connecting-IP") ||
      req.headers.get("x-forwarded-for") ||
      "unknown";

    if (rateLimited(ip)) {
      return new Response(JSON.stringify({ error: "rate_limited" }), {
        status: 429,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    let body: Body;
    try {
      body = (await req.json()) as Body;
    } catch {
      return new Response(JSON.stringify({ error: "invalid_json" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    // Honeypot: silently accept
    if (body.website && body.website.length > 0) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (
      !name ||
      name.length > 100 ||
      !email ||
      email.length > 255 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !message ||
      message.length > 2000
    ) {
      return new Response(JSON.stringify({ error: "invalid_input" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${escape(name)}</p>
      <p><strong>E-Mail:</strong> ${escape(email)}</p>
      <p><strong>Nachricht:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${escape(message)}</pre>
      <hr>
      <p style="color:#888;font-size:12px">IP: ${escape(ip)}</p>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.NOTIFY_FROM,
        to: [env.NOTIFY_TO],
        reply_to: email,
        subject: `Kontaktanfrage von ${name}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const txt = await resendRes.text();
      console.error("Resend error:", resendRes.status, txt);
      return new Response(JSON.stringify({ error: "send_failed" }), {
        status: 502,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  },
};
