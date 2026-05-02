/**
 * Cloudflare Pages Function – Kontaktformular
 *
 * Endpoint: POST /api/contact
 *
 * Diese Function läuft NUR auf Cloudflare Pages (nicht auf Vercel/Goneo).
 * Sie ist eine zusätzliche Variante neben dem bestehenden Supabase Edge
 * Function `send-contact-request` und greift auf denselben Resend-Account
 * zu (gleiche verifizierte Domain `resend.fels-coach.de`).
 *
 * WICHTIG für den Betrieb:
 *   1. In Cloudflare Pages → Settings → Environment Variables hinterlegen:
 *      - RESEND_API_KEY  (Production + Preview)
 *      - CONTACT_TO_EMAIL = info@fels-coach.de         (optional, Default gesetzt)
 *      - CONTACT_FROM     = "Coach Anfrage <noreply@resend.fels-coach.de>" (optional)
 *   2. Der Resend API-Key wird ausschließlich serverseitig aus `env` gelesen,
 *      niemals an das Frontend ausgeliefert.
 */

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // Honeypot
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: corsHeaders });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    if (!env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY ist in den Cloudflare-Umgebungsvariablen nicht gesetzt.");
      return json(
        { error: "Server ist nicht korrekt konfiguriert. Bitte später erneut versuchen." },
        500
      );
    }

    let payload: ContactPayload;
    try {
      payload = (await request.json()) as ContactPayload;
    } catch {
      return json({ error: "Ungültige Anfrage." }, 400);
    }

    // Honeypot: stille Annahme, kein Versand
    if (payload.website && payload.website.length > 0) {
      return json({ success: true });
    }

    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const message = payload.message?.trim() ?? "";

    if (
      !name || name.length > 100 ||
      !email || email.length > 255 || !isValidEmail(email) ||
      !message || message.length > 2000
    ) {
      return json({ error: "Bitte überprüfe deine Eingaben." }, 400);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const toEmail = env.CONTACT_TO_EMAIL || "info@fels-coach.de";
    const fromEmail = env.CONTACT_FROM || "Coach Anfrage <noreply@resend.fels-coach.de>";

    const html = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background:#f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.08);">
        <tr><td style="padding:32px 40px 24px;border-bottom:1px solid #e5e5e5;">
          <h1 style="margin:0;font-size:22px;font-weight:600;color:#1a1a1a;">Neue Coaching-Anfrage</h1>
          <p style="margin:8px 0 0;font-size:13px;color:#666;">${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin", dateStyle: "full", timeStyle: "short" })}</p>
        </td></tr>
        <tr><td style="padding:24px 40px;">
          <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:.5px;">Name</p>
          <p style="margin:0 0 16px;font-size:16px;color:#1a1a1a;">${safeName}</p>
          <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:.5px;">E-Mail</p>
          <p style="margin:0 0 16px;font-size:16px;"><a href="mailto:${safeEmail}" style="color:#333;text-decoration:underline;">${safeEmail}</a></p>
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:.5px;">Nachricht</p>
          <div style="padding:16px;background:#fafafa;border-left:4px solid #999;border-radius:0 6px 6px 0;">
            <p style="margin:0;font-size:15px;line-height:1.7;color:#333;white-space:pre-wrap;">${safeMessage}</p>
          </div>
        </td></tr>
        <tr><td style="padding:16px 40px;background:#f9f9f9;border-top:1px solid #e5e5e5;border-radius:0 0 8px 8px;">
          <p style="margin:0;font-size:12px;color:#666;text-align:center;">Gesendet über <strong>fels-coach.de</strong> (Cloudflare). Antworte direkt an <strong>${safeEmail}</strong>.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Neue Coaching-Anfrage von ${name}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, errorBody);
      return json(
        { error: "Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen." },
        502
      );
    }

    return json({ success: true });
  } catch (err) {
    console.error("Unhandled error in /api/contact:", err);
    return json({ error: "Ein unerwarteter Fehler ist aufgetreten." }, 500);
  }
};
