import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RATE_LIMIT = 5;
const WINDOW_MINUTES = 60;
const PDF_URL = "https://fels-coach.de/der-weg-zum-ganzsein.pdf";

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const checkRateLimit = async (
  supabase: ReturnType<typeof createClient>,
  ip: string,
  endpoint: string
): Promise<boolean> => {
  const { data, error } = await supabase
    .from("rate_limits")
    .select("request_count, window_start")
    .eq("ip_address", ip)
    .eq("endpoint", endpoint)
    .single();

  if (error && error.code !== "PGRST116") return true;

  const now = new Date();

  if (!data) {
    await supabase.from("rate_limits").insert({
      ip_address: ip,
      endpoint,
      request_count: 1,
      window_start: now.toISOString(),
    });
    return true;
  }

  const windowStart = new Date(data.window_start);
  const windowAge = (now.getTime() - windowStart.getTime()) / 60000;

  if (windowAge > WINDOW_MINUTES) {
    await supabase
      .from("rate_limits")
      .update({ request_count: 1, window_start: now.toISOString() })
      .eq("ip_address", ip)
      .eq("endpoint", endpoint);
    return true;
  }

  if ((data.request_count ?? 0) >= RATE_LIMIT) return false;

  await supabase
    .from("rate_limits")
    .update({ request_count: (data.request_count ?? 0) + 1 })
    .eq("ip_address", ip)
    .eq("endpoint", endpoint);

  return true;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const clientIP =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const allowed = await checkRateLimit(supabase, clientIP, "send-ebook-email");
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, website } = await req.json();

    // Honeypot
    if (website && String(website).length > 0) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const trimmedName = String(name ?? "").trim();
    const trimmedEmail = String(email ?? "").trim();

    if (
      !trimmedName ||
      trimmedName.length > 100 ||
      !trimmedEmail ||
      trimmedEmail.length > 255 ||
      !isValidEmail(trimmedEmail)
    ) {
      return new Response(
        JSON.stringify({ error: "Ungültige Formulardaten." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Lead speichern (Best-effort, blockiert Versand nicht)
    const { error: dbError } = await supabase.from("ebook_leads").insert({
      name: trimmedName,
      email: trimmedEmail,
    });
    if (dbError) console.error("ebook_leads insert error:", dbError);

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);

    // 1) E-Mail an Kunde mit Download-Link
    const customerEmail = await resend.emails.send({
      from: "Jona Fels <noreply@resend.fels-coach.de>",
      to: [trimmedEmail],
      replyTo: "info@fels-coach.de",
      subject: "Dein E-Book: Der Weg zum Ganzsein",
      html: `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:#F9F7F2;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F9F7F2;padding:40px 20px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <tr><td style="padding:36px 40px 16px;">
          <h1 style="margin:0 0 8px;font-size:24px;font-weight:600;color:#2F4F4F;">Hallo ${safeName},</h1>
          <p style="margin:0;font-size:16px;line-height:1.6;color:#333;">schön, dass du da bist. Hier ist dein kostenloses E-Book <strong>„Der Weg zum Ganzsein“</strong>.</p>
        </td></tr>
        <tr><td style="padding:24px 40px;text-align:center;">
          <a href="${PDF_URL}" style="display:inline-block;padding:14px 32px;background-color:#2F4F4F;color:#ffffff;text-decoration:none;border-radius:6px;font-size:16px;font-weight:500;">E-Book herunterladen</a>
          <p style="margin:14px 0 0;font-size:13px;color:#888;">Falls der Button nicht funktioniert: <a href="${PDF_URL}" style="color:#2F4F4F;">${PDF_URL}</a></p>
        </td></tr>
        <tr><td style="padding:8px 40px 32px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#444;">Nimm dir Zeit dafür. Lass die Worte wirken. Und falls du Fragen hast oder spürst, dass du tiefer gehen möchtest – ich freue mich, von dir zu hören.</p>
          <p style="margin:0;font-size:15px;line-height:1.7;color:#444;">Herzlichst,<br><strong>Jona</strong></p>
        </td></tr>
        <tr><td style="padding:20px 40px;background-color:#F9F7F2;border-radius:0 0 8px 8px;border-top:1px solid #eee;">
          <p style="margin:0;font-size:12px;color:#888;text-align:center;line-height:1.5;">
            Jona Fels – Systemisches Coaching &amp; Familienaufstellungen<br>
            Karlstraße 51, 79104 Freiburg · <a href="mailto:info@fels-coach.de" style="color:#2F4F4F;">info@fels-coach.de</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    if (customerEmail.error) {
      console.error("Resend customer error:", JSON.stringify(customerEmail.error));
      return new Response(
        JSON.stringify({ error: "E-Mail konnte nicht gesendet werden." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // 2) Benachrichtigung an Jona (Best-effort)
    try {
      await resend.emails.send({
        from: "E-Book Lead <noreply@resend.fels-coach.de>",
        to: ["info@fels-coach.de"],
        replyTo: trimmedEmail,
        subject: `Neuer E-Book Download: ${trimmedName}`,
        html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>E-Mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>`,
      });
    } catch (notifyErr) {
      console.error("Notify error:", notifyErr);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in send-ebook-email:", JSON.stringify(error));
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
