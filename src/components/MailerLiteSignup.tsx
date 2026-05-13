import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";

const ENDPOINT =
  "https://assets.mailerlite.com/jsonp/1636736/forms/187371615369037675/subscribe";

export const MailerLiteSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (website) {
      setSuccess(true);
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }

    setLoading(true);

    try {
      const body = new URLSearchParams();
      body.append("fields[email]", email);
      if (name) body.append("fields[name]", name);
      body.append("ml-submit", "1");
      body.append("anticsrf", "true");

      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      setSuccess(true);
    } catch (err) {
      console.error("MailerLite signup error:", err);
      setError("Etwas ist schiefgelaufen. Bitte versuche es später erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 max-w-2xl">
        {success ? (
          <div className="text-center" role="status" aria-live="polite">
            <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-3">
              Schön, dass du dabei bist
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight">
              Danke für dein Vertrauen.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Bitte schaue jetzt in dein Postfach und bestätige deine
              E-Mail-Adresse, damit unsere gemeinsame Reise beginnen kann.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-10 md:mb-12">
              <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-3">
                42-Tage-Impulsreise
              </p>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
                Trägst du Lasten, die gar nicht dir gehören?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Begleite mich auf einer leisen Reise zu dir selbst. Alle
                sieben Tage erreicht dich ein tiefer Impuls zu Familienmustern,
                Emotionsarbeit und gesunder Abgrenzung – direkt in dein
                Postfach.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="sr-only"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="ml-name" className="sr-only">
                  Vorname
                </label>
                <input
                  id="ml-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dein Vorname"
                  autoComplete="given-name"
                  maxLength={100}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/60 transition-all"
                />
              </div>

              <div>
                <label htmlFor="ml-email" className="sr-only">
                  E-Mail-Adresse
                </label>
                <input
                  id="ml-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail-Adresse"
                  autoComplete="email"
                  maxLength={255}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/60 transition-all"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full min-h-[48px]"
              >
                {loading ? "Wird gesendet…" : "Ja, ich möchte starten"}
              </Button>

              <p className="text-xs text-muted-foreground/80 text-center pt-2 leading-relaxed">
                Kostenfrei. Du kannst dich jederzeit mit einem Klick wieder
                abmelden.
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
};
