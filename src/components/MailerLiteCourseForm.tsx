import { useState, FormEvent } from "react";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MAILERLITE_ENDPOINT =
  "https://assets.mailerlite.com/jsonp/1636736/forms/187371615369037675/subscribe";

export const MailerLiteCourseForm = () => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (website) return;
    if (!email) return;

    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("fields[email]", email);
      formData.append("ml-submit", "1");
      formData.append("anticsrf", "true");

      await fetch(MAILERLITE_ENDPOINT, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("MailerLite subscribe error", err);
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/60 via-background to-secondary/10 blur-2xl opacity-70"
      />

      <div className="relative overflow-hidden rounded-[2.5rem] bg-card border border-border/60 shadow-[0_20px_60px_-30px_hsl(var(--primary)/0.35)]">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-primary to-secondary" />

        {/* Decorative corner ornaments */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="relative p-8 md:p-14">
          <div className="max-w-xl mx-auto text-center">
            {/* Icon medallion */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-md" />
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-card border border-border/70 shadow-sm">
                <Mail className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-secondary font-medium uppercase tracking-[0.2em] text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Kostenloser E-Mail-Kurs
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-5">
              Impulse für deinen Weg –<br className="hidden md:block" />
              <span className="italic text-secondary"> direkt in dein Postfach</span>
            </h2>

            <div className="mx-auto w-16 h-px bg-border mb-6" />

            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
              Erhalte über mehrere Wochen achtsam aufeinander aufbauende Impulse, um alte
              Familienmuster zu erkennen und Schritt für Schritt zu dir selbst zurückzufinden.
            </p>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-6 text-foreground">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent border border-border/70">
                  <CheckCircle2 className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <p className="font-serif text-xl">Vielen Dank!</p>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  Bitte bestätige deine Anmeldung über den Link, den ich dir gerade per
                  E-Mail geschickt habe.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                noValidate
              >
                <label htmlFor="ml-course-email" className="sr-only">
                  E-Mail-Adresse
                </label>
                <Input
                  id="ml-course-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Deine E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 flex-1 rounded-full px-5 bg-background/80 border-border/70 focus-visible:ring-primary/40"
                  disabled={status === "loading"}
                />
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="h-12 min-h-[48px] rounded-full px-7 shadow-md sm:w-auto"
                >
                  {status === "loading" ? "Wird gesendet…" : "Kurs starten"}
                </Button>
              </form>
            )}

            {status === "error" && (
              <p className="text-destructive text-sm mt-4">
                Etwas ist schiefgelaufen. Bitte versuche es später noch einmal.
              </p>
            )}

            <p className="text-xs text-muted-foreground mt-8 leading-relaxed max-w-sm mx-auto">
              Mit der Anmeldung erklärst du dich einverstanden, regelmäßig Impulse per E-Mail
              zu erhalten. Du kannst dich jederzeit abmelden. Details in der{" "}
              <a href="/datenschutz" className="underline hover:text-foreground">
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
