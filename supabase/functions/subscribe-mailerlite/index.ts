import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RATE_LIMIT = 5;
const WINDOW_MINUTES = 60;
const BREVO_LIST_ID = 3;
const BREVO_DOI_TEMPLATE_ID = 1; // TODO: Replace with actual Brevo DOI template ID
const BREVO_REDIRECT_URL = "https://fels-coach.de/ebook";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const checkRateLimit = async (
  supabase: ReturnType<typeof createClient>,
  ip: string,
  endpoint: string,
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

  const windowStart = new Date(data.window_start as string);
  const windowAge = (now.getTime() - windowStart.getTime()) / 60000;

  if (windowAge > WINDOW_MINUTES) {
    await supabase
      .from("rate_limits")
      .update({ request_count: 1, window_start: now.toISOString() })
      .eq("ip_address", ip)
      .eq("endpoint", endpoint);
    return true;
  }

  if (((data.request_count as number) ?? 0) >= RATE_LIMIT) {
    return false;
  }

  await supabase
    .from("rate_limits")
    .update({ request_count: ((data.request_count as number) ?? 0) + 1 })
    .eq("ip_address", ip)
    .eq("endpoint", endpoint);

  return true;
};

interface SubscribeRequest {
  email: string;
  name?: string;
  consent: boolean;
  website?: string; // honeypot
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("BREVO_API_KEY");
    if (!apiKey) {
      console.error("BREVO_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Newsletter-Service nicht konfiguriert." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const clientIP =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const allowed = await checkRateLimit(supabase, clientIP, "subscribe-brevo");
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const body: SubscribeRequest = await req.json();

    // Honeypot — silently succeed
    if (body.website && body.website.length > 0) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Hard-require explicit consent (DSGVO)
    if (body.consent !== true) {
      return new Response(
        JSON.stringify({ error: "Einwilligung erforderlich." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const email = (body.email || "").trim().toLowerCase();
    const name = (body.name || "").trim();

    if (!email || email.length > 255 || !isValidEmail(email) || name.length > 100) {
      return new Response(
        JSON.stringify({ error: "Ungültige E-Mail-Adresse." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Brevo API: Create/update contact and add to list
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
        attributes: name ? { VORNAME: name } : undefined,
      }),
    });

    // Brevo returns 201 for new contact, 204 for updated
    if (!brevoResponse.ok && brevoResponse.status !== 204) {
      const brevoData = await brevoResponse.json().catch(() => ({}));
      console.error("Brevo API error:", brevoResponse.status, JSON.stringify(brevoData));
      return new Response(
        JSON.stringify({ error: "Newsletter-Anmeldung fehlgeschlagen." }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    console.log("Brevo subscribe success:", email);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in subscribe function:", error);
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
};

serve(handler);
