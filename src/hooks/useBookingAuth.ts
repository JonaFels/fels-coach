import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { bookingSupabase } from "@/integrations/booking/client";

interface BookingAuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

export const useBookingAuth = (): BookingAuthState => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {
      data: { subscription },
    } = bookingSupabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
    });

    bookingSupabase.auth.getSession().then(({ data: { session: existing } }) => {
      setSession(existing);
      setUser(existing?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, session, loading };
};
