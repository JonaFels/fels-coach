import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Loader2, Check } from "lucide-react";
import ebookMockup from "@/assets/ebook-tablet-mockup.webp";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const ebookSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  website: z.string().max(0).optional(),
});

const Ebook = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const newsletterConsent = true;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const benefits = [
    t("ebook.benefit1"),
    t("ebook.benefit2"),
    t("ebook.benefit3"),
    t("ebook.benefit4"),
  ];

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

    if (!newsletterConsent) {
      toast({
        title: t("ebook.newsletterRequiredTitle"),
        description: t("ebook.newsletterRequiredDesc"),
      });
      return;
    }

    setIsSubmitting(true);

    toast({
      title: t("ebook.toastSendingTitle"),
      description: t("ebook.toastSendingDesc"),
    });

    try {
      // 1) Lead in Supabase speichern (Best-effort)
      try {
        const { error: leadError } = await supabase
          .from("ebook_leads")
          .insert({ name, email });
        if (leadError) console.error("ebook_leads insert error:", leadError);
      } catch (leadErr) {
        console.error("ebook_leads invoke error:", leadErr);
      }

      // 2) Newsletter-Anmeldung via Brevo.
      //    Der Versand des E-Books erfolgt über eine Brevo-Automatisierung
      //    (Trigger: Kontakt wird zur Liste "Webseite Leads" hinzugefügt).
      let mlOk = true;
      try {
        const { error: mlError } = await supabase.functions.invoke("subscribe-mailerlite", {
          body: { email, name, consent: true, website: "" },
        });
        if (mlError) {
          mlOk = false;
          console.error("Brevo error:", mlError);
        }
      } catch (mlErr) {
        mlOk = false;
        console.error("Brevo invoke error:", mlErr);
      }

      setSubmitted(true);
      if (!mlOk) {
        toast({
          title: t("ebook.toastConnectionTitle"),
          description: t("ebook.toastConnectionDesc"),
          variant: "destructive",
        });
      } else {
        toast({ title: t("ebook.toastSuccessTitle"), description: t("ebook.toastSuccessDesc") });
      }

    } catch (error) {
      console.error("Error:", error);
      toast({
        title: t("ebook.toastConnectionTitle"),
        description: t("ebook.toastConnectionDesc"),
        variant: "destructive",
      });
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
        <section className="pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-3">
              {t("ebook.freeEbook")}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
              {t("ebook.headline")}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("ebook.subheadline")}
            </p>
          </div>
        </section>

        {/* Content – Bild + Benefits/Form nebeneinander */}
        <section className="pb-20 md:pb-28 bg-muted/40">
          <div className="container mx-auto px-4 py-14 md:py-20 max-w-4xl">
            <div className="grid gap-10 md:gap-12 md:grid-cols-2 items-start">

              {/* Left: Mockup + Benefits */}
              <div className="space-y-8">
                <div className="flex justify-center">
                  <img
                    src={ebookMockup}
                    alt="E-Book 'Der Weg zum Ganz-Sein' von Jona Fels auf einem Tablet"
                    className="w-full max-w-sm h-auto rounded-lg shadow-xl"
                    loading="lazy"
                    decoding="async"
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
                    <p className="text-foreground font-medium mb-1">{t("ebook.done")}</p>
                    <p className="text-muted-foreground text-sm">{t("ebook.success")}</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3"
                    noValidate
                    name="ebook"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="website"
                  >
                    <input type="hidden" name="form-name" value="ebook" />
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
                        placeholder={t("ebook.namePlaceholder")}
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
                        placeholder={t("ebook.emailPlaceholder")}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{t("ebook.emailError")}</p>
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

                    <Button type="submit" className="w-full min-h-[44px]" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                          {t("ebook.sending")}
                        </>
                      ) : (
                        t("ebook.download")
                      )}
                    </Button>

                    {/* Einwilligung direkt unter dem Button (DSGVO – implizit per Klick) */}
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                      {t("ebook.privacyNote")}{" "}
                      <Link to="/datenschutz" className="text-secondary hover:underline">
                        {t("ebook.here")}
                      </Link>
                      {" "}{t("ebook.privacyNoteAfter")}
                    </p>
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
