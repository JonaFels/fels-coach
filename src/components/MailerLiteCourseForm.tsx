import { useState, FormEvent } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
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
        <div className="flex flex-col items-center gap-3 py-6 text-foreground">
          <CheckCircle2 className="w-10 h-10 text-primary" aria-hidden="true" />
          <p className="font-serif text-lg">Vielen Dank!</p>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Bitte bestätige deine Anmeldung über den Link, den ich dir gerade per E-Mail
            geschickt habe.
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
            className="h-12 flex-1"
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
            className="h-12 min-h-[48px] sm:w-auto"
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
