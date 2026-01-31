import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Save to Supabase
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("contacts")
      .insert({ name, email, message });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save contact" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: ["info@fels-coach.de"],
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="border-bottom: 1px solid #e5e5e5; padding-bottom: 16px; margin-bottom: 16px;">
            <p style="margin: 4px 0; color: #666;"><strong>Von:</strong> ${name} &lt;${email}&gt;</p>
            <p style="margin: 4px 0; color: #666;"><strong>Betreff:</strong> Neue Kontaktanfrage über fels-coach.de</p>
            <p style="margin: 4px 0; color: #666;"><strong>Datum:</strong> ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}</p>
          </div>
          <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e5e5; color: #999; font-size: 12px;">
            <p>Diese Nachricht wurde über das Kontaktformular auf fels-coach.de gesendet.</p>
            <p>Antworten Sie direkt an: ${email}</p>
          </div>
        </div>
      `,
      reply_to: email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
