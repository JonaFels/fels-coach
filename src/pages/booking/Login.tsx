import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Lock } from "lucide-react";
import { bookingSupabase } from "@/integrations/booking/client";
import { useBookingAuth } from "@/hooks/useBookingAuth";

const BookingLogin = () => {
  const navigate = useNavigate();
  const { user, loading } = useBookingAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate("/buchungen", { replace: true });
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { error: signInError } = await bookingSupabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setSubmitting(false);
    if (signInError) {
      setError("Anmeldung fehlgeschlagen. Bitte E-Mail und Passwort prüfen.");
      return;
    }
    navigate("/buchungen", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <title>Buchungsverwaltung – Login</title>
      <meta name="robots" content="noindex, nofollow" />
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-row items-center gap-2 space-y-0">
          <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
          <CardTitle className="font-serif text-lg font-medium">Buchungsverwaltung</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="booking-email">E-Mail</Label>
              <Input
                id="booking-email"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="booking-password">Passwort</Label>
              <Input
                id="booking-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full min-h-[44px]" disabled={submitting}>
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : "Anmelden"}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Eigener Zugang der Buchungs-Datenbank – unabhängig vom CMS-Admin.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingLogin;
