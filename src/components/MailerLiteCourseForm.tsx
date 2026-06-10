import { useState, FormEvent } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MAILERLITE_ENDPOINT =
  "https://assets.mailerlite.com/jsonp/1636736/forms/187371615369037675/subscribe";

export const MailerLiteCourseForm = () => {
  const [name, setName] = useState("");
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
      formData.append("fields[name]", name);
      formData.append("fields[email]", email);
      formData.append("ml-submit", "1");
      formData.append("anticsrf", "true");

      await fetch(MAILERLITE_ENDPOINT, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus("success");
      setName("");
      setEmail("");
    } catch (err) {
      console.error("MailerLite subscribe error", err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-6">
        <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
      </div>

      <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-3">
        Kostenloser E-Mail-Kurs
      </p>

      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-5">
        Impulse für deinen Weg
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
        Erhalte über mehrere Wochen achtsam aufeinander aufbauende Impulse, um alte
        Familienmuster zu erkennen und Schritt für Schritt zu dir selbst zurückzufinden.
      </p>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="relative max-w-md mx-auto bg-background/70 border border-border/60 rounded-2xl px-8 py-10 shadow-sm animate-fade-in"
        >
          <div className="flex flex-col items-center text-center">
            <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-5">
              <span className="absolute inset-0 rounded-full bg-primary/10 animate-ping" aria-hidden="true" />
              <CheckCircle2 className="relative w-7 h-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="font-serif text-2xl text-foreground mb-3">Vielen Dank!</h3>
            <div className="w-10 h-px bg-border mb-4" aria-hidden="true" />
            <p className="text-muted-foreground leading-relaxed">
              Bitte bestätige deine Anmeldung über den Link, den ich dir gerade per E-Mail
              geschickt habe.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-4 italic">
              Schau auch kurz in deinen Spam-Ordner.
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-w-md mx-auto"
          noValidate
        >
          <label htmlFor="ml-course-name" className="sr-only">
            Name
          </label>
          <Input
            id="ml-course-name"
            type="text"
            autoComplete="name"
            placeholder="Dein Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12"
            disabled={status === "loading"}
          />
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
            className="h-12"
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
            className="h-12 min-h-[48px]"
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
        Mit der Anmeldung erklärst du dich einverstanden, regelmäßig Impulse per E-Mail zu
        erhalten. Du kannst dich jederzeit abmelden. Details in der{" "}
        <a href="/datenschutz" className="underline hover:text-foreground">
          Datenschutzerklärung
        </a>
        .
      </p>
    </div>
  );
};
