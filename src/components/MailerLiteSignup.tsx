import { useState, FormEvent } from "react";

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

    // Honeypot — silently succeed
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

      // no-cors: response is opaque — assume success unless network error
      setSuccess(true);
    } catch (err) {
      console.error("MailerLite signup error:", err);
      setError("Etwas ist schiefgelaufen. Bitte versuche es später erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F9F9F9] py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-2xl">
        {success ? (
          <div className="text-center" role="status" aria-live="polite">
            <h2 className="font-sans text-2xl md:text-3xl font-medium text-[#333333] mb-5 leading-tight">
              Danke für dein Vertrauen!
            </h2>
            <p className="text-[#333333]/80 leading-relaxed">
              Bitte schaue jetzt in dein Postfach und bestätige deine
              E-Mail-Adresse, damit wir starten können.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[#C5A059] uppercase tracking-[0.2em] text-xs font-medium mb-4">
                42-Tage-E-Mail-Kurs
              </p>
              <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-medium text-[#333333] mb-5 leading-tight">
                Trägst du Sachen, die gar nicht dir gehören?
              </h2>
              <p className="text-[#333333]/75 leading-relaxed max-w-xl mx-auto">
                Begleite mich 42 Tage lang auf einer Reise zu deinem wahren
                Selbst. Alle 6 Tage erhältst du einen tiefgehenden Impuls zu
                Themen wie Familienstellen, Emotionsarbeit und Abgrenzung –
                direkt in dein Postfach.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                  placeholder="Vorname"
                  autoComplete="given-name"
                  maxLength={100}
                  className="w-full bg-transparent border border-[#333333]/15 rounded-[4px] px-4 py-3.5 text-[#333333] placeholder:text-[#333333]/45 focus:outline-none focus:border-[#C5A059] transition-colors"
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
                  placeholder="E-Mail-Adresse"
                  autoComplete="email"
                  maxLength={255}
                  className="w-full bg-transparent border border-[#333333]/15 rounded-[4px] px-4 py-3.5 text-[#333333] placeholder:text-[#333333]/45 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C5A059] hover:bg-[#b18f4d] text-white font-medium tracking-wide py-4 rounded-[4px] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Wird gesendet…" : "Jetzt kostenfrei anmelden"}
              </button>

              <p className="text-xs text-[#333333]/55 text-center pt-2">
                Du kannst dich jederzeit mit einem Klick wieder abmelden.
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
};
