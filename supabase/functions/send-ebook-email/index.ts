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

const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const checkRateLimit = async (
  supabase: any,
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
      window_start: now,
    });
    return true;
  }

  const windowStart = new Date(data.window_start);
  const windowAge = (now.getTime() - windowStart.getTime()) / 60000;

  if (windowAge > WINDOW_MINUTES) {
    await supabase
      .from("rate_limits")
      .update({ request_count: 1, window_start: now })
      .eq("ip_address", ip)
      .eq("endpoint", endpoint);
    return true;
  }

  if (data.request_count >= RATE_LIMIT) {
    return false;
  }

  await supabase
    .from("rate_limits")
    .update({ request_count: data.request_count + 1 })
    .eq("ip_address", ip)
    .eq("endpoint", endpoint);

  return true;
};

interface EbookRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Rate limiting
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

    const { name, email }: EbookRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "E-Mail ist erforderlich." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (email.length > 255 || (name && name.length > 100)) {
      return new Response(
        JSON.stringify({ error: "Eingabe zu lang." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Ungültige E-Mail-Adresse." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { error: dbError } = await supabase
      .from("ebook_leads")
      .insert({ name: name || null, email });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Use signed URL instead of public URL
    const { data: signedUrlData, error: urlError } = await supabase
      .storage
      .from("ebook-automation")
      .createSignedUrl("ebook.pdf", 604800); // 7 days

    if (urlError || !signedUrlData) {
      console.error("Error generating signed URL:", urlError);
      return new Response(
        JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const downloadUrl = signedUrlData.signedUrl;
    const safeName = name ? escapeHtml(name) : null;

    const emailResponse = await resend.emails.send({
      from: "Jona Fels <anfrage@send.fels-coach.de>",
      to: [email],
      subject: "Dein Coaching E-Book ist da!",
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
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #1a1a1a;">Dein Coaching E-Book ist da!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 40px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333;">
                ${safeName ? `Hallo ${safeName},` : 'Hallo,'}
              </p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #333;">
                vielen Dank für dein Interesse an meinem E-Book! Hier kannst du es direkt herunterladen:
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto 24px;">
                <tr>
                  <td style="background-color: #1a1a1a; border-radius: 6px;">
                    <a href="${downloadUrl}" style="display: inline-block; padding: 14px 32px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none;">
                      E-Book herunterladen
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: #666;">
                Der Download-Link ist 7 Tage gültig.
              </p>
              <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6; color: #333;">
                Ich wünsche dir viel Freude beim Lesen und hoffe, dass dir die Inhalte wertvolle Impulse geben.
              </p>
              <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6; color: #333;">
                Herzliche Grüße,<br>
                <strong>Jona Fels</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 40px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; font-size: 13px; color: #666; text-align: center;">
                Diese E-Mail wurde automatisch versendet, weil du das E-Book auf <strong>fels-coach.de</strong> angefordert hast.
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

    console.log("Ebook email response:", emailResponse);

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return new Response(
        JSON.stringify({ error: "E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-ebook-email function:", error);
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
