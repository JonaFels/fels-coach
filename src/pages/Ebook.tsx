import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Loader2, Check } from "lucide-react";
import ebookMockup from "@/assets/ebook-tablet-mockup.jpg";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";

import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ebookSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  website: z.string().max(0).optional(),
});

const benefits = [
  "Das Gummiband-Prinzip: Warum du trotz Talent immer wieder in alte Muster zurückfällst.",
  "Die Eltern-Dynamik: Wie ungelöste Vorwürfe deine Beziehungen und deinen Erfolg blockieren.",
  "Die innere Erlaubnis: Wie du aufhörst, Zuschauer deines Lebens zu sein.",
  "Systemischer Quick-Check: Erste Schritte, um deine innere Statik zu analysieren.",
];

const Ebook = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (website && website.length > 0) {
      setSubmitted(true);
      return;
    }

    const result = ebookSchema.safeParse({ name, email, website });
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as "name" | "email";
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    toast({
      title: "E-Book wird gesendet...",
      description: "Bitte warte einen Moment, dein E-Book ist unterwegs!",
    });

    try {
      const { data, error } = await supabase.functions.invoke("send-ebook-email", {
        body: { name, email },
      });

      if (error) {
        console.error("Edge function error:", error);
        toast({ title: "Fehler beim Senden", description: "Bitte versuche es später erneut.", variant: "destructive" });
        return;
      }

      if (data?.error) {
        toast({ title: "Fehler beim Senden", description: data.error, variant: "destructive" });
        return;
      }

      setSubmitted(true);
      toast({ title: "E-Book erfolgreich gesendet!", description: "Prüfe dein E-Mail-Postfach für den Download-Link." });
    } catch (error) {
      console.error("Error:", error);
      toast({ title: "Verbindungsfehler", description: "Bitte überprüfe deine Internetverbindung.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Header */}
        <section className="pt-10 pb-6 md:pt-16 md:pb-8">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-3">
              Kostenloses E-Book
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
              {t("ebook.headline")}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Lade dir diesen kompakten 6-seitigen Guide herunter und lerne systemische Fragen kennen, die du sofort im Alltag anwenden kannst.
            </p>
          </div>
        </section>

        {/* Content – Bild + Benefits/Form nebeneinander */}
        <section className="pb-16 md:pb-20 bg-muted/40">
          <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
            <div className="grid gap-10 md:gap-12 md:grid-cols-2 items-start">

              {/* Left: Mockup + Benefits */}
              <div className="space-y-8">
                <div className="flex justify-center">
                  <img
                    src={ebookMockup}
                    alt="E-Book 'Der Weg zum Ganz-Sein' von Jona Fels auf einem Tablet"
                    className="w-full max-w-sm h-auto rounded-lg shadow-xl"
                    loading="eager"
                    width="400"
                    height="300"
                  />
                </div>

                {/* Benefits */}
                <ul className="space-y-3" role="list">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-secondary/15 flex items-center justify-center">
                        <Check className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                      </span>
                      <span className="text-foreground text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Form */}
              <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
                <h2 className="font-serif text-lg font-medium text-foreground mb-4">
                  {t("ebook.title")}
                </h2>
                {submitted ? (
                  <div className="text-center py-6">
                    <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-3" aria-hidden="true" />
                    <p className="text-foreground font-medium mb-1">Geschafft!</p>
                    <p className="text-muted-foreground text-sm">{t("ebook.success")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                    <div className="space-y-1.5">
                      <Label htmlFor="ebook-name" className="text-sm">{t("ebook.name")}</Label>
                      <Input
                        id="ebook-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={errors.name ? "border-destructive" : ""}
                        aria-invalid={!!errors.name}
                        autoComplete="name"
                        placeholder="Dein Vorname"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="ebook-email" className="text-sm">{t("ebook.email")} *</Label>
                      <Input
                        id="ebook-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={errors.email ? "border-destructive" : ""}
                        aria-invalid={!!errors.email}
                        autoComplete="email"
                        placeholder="deine@email.de"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">Bitte gib eine gültige E-Mail-Adresse ein.</p>
                      )}
                    </div>
                    {/* Honeypot */}
                    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                      <Label htmlFor="ebook-website">Website (nicht ausfüllen)</Label>
                      <Input
                        id="ebook-website"
                        type="text"
                        name="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {t("ebook.privacyNote")}{" "}
                      <Link to="/datenschutz" className="text-secondary hover:underline">
                        {t("ebook.here")}
                      </Link>
                    </p>
                    <Button type="submit" className="w-full min-h-[44px]" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                          E-Book wird gesendet...
                        </>
                      ) : (
                        t("ebook.download")
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Ebook;
