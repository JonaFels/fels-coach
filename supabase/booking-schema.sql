-- ─────────────────────────────────────────────────────────────
--  Buchungssystem – Schema für die EIGENE Supabase-Datenbank
--  (Projekt bavfevdcmyeytwvtnhag)
--
--  Einmalig im Supabase SQL-Editor deines eigenen Projekts ausführen.
--  Danach unter Authentication → Users einen Nutzer anlegen
--  (E-Mail + Passwort, "Auto Confirm User" aktivieren).
-- ─────────────────────────────────────────────────────────────

-- 1) Klientenakten -------------------------------------------------
CREATE TABLE public.booking_clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL DEFAULT auth.uid(),
  name text NOT NULL,
  email text,
  phone text,
  format text DEFAULT 'Praxis Freiburg',
  status text DEFAULT 'Neu',
  first_contact date,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.booking_clients TO authenticated;
GRANT ALL ON public.booking_clients TO service_role;
ALTER TABLE public.booking_clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owner manages own clients"
  ON public.booking_clients FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- 2) Termine -------------------------------------------------------
CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL DEFAULT auth.uid(),
  client_id uuid NOT NULL REFERENCES public.booking_clients(id) ON DELETE CASCADE,
  starts_at timestamptz NOT NULL,
  service text NOT NULL DEFAULT 'Coaching mit Einzelaufstellung',
  price_cents integer,
  status text NOT NULL DEFAULT 'gebucht',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owner manages own bookings"
  ON public.bookings FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- 3) Sitzungsnotizen ----------------------------------------------
CREATE TABLE public.session_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL DEFAULT auth.uid(),
  client_id uuid NOT NULL REFERENCES public.booking_clients(id) ON DELETE CASCADE,
  booking_id uuid REFERENCES public.bookings(id) ON DELETE SET NULL,
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.session_notes TO authenticated;
GRANT ALL ON public.session_notes TO service_role;
ALTER TABLE public.session_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owner manages own notes"
  ON public.session_notes FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- 4) updated_at automatisch pflegen --------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER booking_clients_updated_at BEFORE UPDATE ON public.booking_clients
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER bookings_updated_at BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER session_notes_updated_at BEFORE UPDATE ON public.session_notes
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
