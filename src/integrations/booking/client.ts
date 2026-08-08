import { createClient } from "@supabase/supabase-js";

/**
 * Eigene Supabase-Datenbank (nur für das Buchungssystem).
 * Bewusst getrennt vom Haupt-Client unter src/integrations/supabase/client.ts.
 * Der storageKey ist eigenständig, damit sich die beiden Sessions nicht überschreiben.
 */
const BOOKING_SUPABASE_URL = "https://bavfevdcmyeytwvtnhag.supabase.co";
const BOOKING_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdmZldmRjbXlleXR3dnRuaGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMDcyNzIsImV4cCI6MjEwMTc4MzI3Mn0.xmlGjLSul5QG9aI_r560rVg0JwRJZZmxj1orNM-lUKM";

export const bookingSupabase = createClient(BOOKING_SUPABASE_URL, BOOKING_SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    storageKey: "fels-booking-auth",
    persistSession: true,
    autoRefreshToken: true,
  },
});

export interface BookingClient {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  format: string | null;
  status: string | null;
  first_contact: string | null;
  created_at: string;
}

export interface Booking {
  id: string;
  client_id: string;
  starts_at: string;
  service: string;
  price_cents: number | null;
  status: string;
  created_at: string;
}

export interface SessionNote {
  id: string;
  client_id: string;
  content: string;
  created_at: string;
}
