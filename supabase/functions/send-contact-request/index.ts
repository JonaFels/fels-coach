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

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

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

  if (error && error.code !== "PGRST116") {
    console.error("Rate limit check error:", error);
    return true;
  }

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

  if ((data.request_count ?? 0) >= RATE_LIMIT) {
    return false;
  }

  await supabase
    .from("rate_limits")
    .update({ request_count: (data.request_count ?? 0) + 1 })
    .eq("ip_address", ip)
    .eq("endpoint", endpoint);

  return true;
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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

    const allowed = await checkRateLimit(supabase, clientIP, "send-contact-request");
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, message }: ContactRequest = await req.json();

    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedMessage = message?.trim();

    if (!trimmedName || trimmedName.length > 100 || !trimmedEmail || trimmedEmail.length > 255 || !trimmedMessage || trimmedMessage.length > 2000 || !isValidEmail(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Ungültige Formulardaten." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { error: dbError } = await supabase.from("contacts").insert({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Anfrage konnte nicht gespeichert werden." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage);

    const emailResponse = await resend.emails.send({
      from: "Coach Anfrage <noreply@resend.fels-coach.de>",
      to: ["jona-fels@magenta.de"],
      replyTo: trimmedEmail,
      subject: `Neue Coaching-Anfrage von ${trimmedName}`,
      html: `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="padding: 32px 40px 24px; border-bottom: 1px solid #e5e5e5;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #1a1a1a;">Neue Coaching-Anfrage</h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #666;">${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin", dateStyle: "full", timeStyle: "short" })}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 12px 16px; background-color: #f9f9f9; border-radius: 6px;">
                    <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                    <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${safeName}</p>
                  </td>
                </tr>
                <tr><td style="height: 12px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f9f9f9; border-radius: 6px;">
                    <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</p>
                    <p style="margin: 0; font-size: 16px; color: #1a1a1a;"><a href="mailto:${safeEmail}" style="color: #333; text-decoration: underline;">${safeEmail}</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="margin: 0 0 12px; font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Nachricht</p>
              <div style="padding: 20px; background-color: #fafafa; border-left: 4px solid #999; border-radius: 0 6px 6px 0;">
                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #333; white-space: pre-wrap;">${safeMessage}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 40px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; font-size: 13px; color: #666; text-align: center;">
                Diese Anfrage wurde über das Kontaktformular auf <strong>fels-coach.de</strong> gesendet.<br>
                Klicke auf „Antworten“, um direkt an <strong>${safeEmail}</strong> zu schreiben.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", JSON.stringify(emailResponse.error));
      return new Response(
        JSON.stringify({ error: "Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in send-contact-request function:", JSON.stringify(error));
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);