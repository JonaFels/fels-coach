import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Loader2 } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  const features = [
    { titleKey: "ebook.feature1.title", textKey: "ebook.feature1.text" },
    { titleKey: "ebook.feature2.title", textKey: "ebook.feature2.text" },
    { titleKey: "ebook.feature3.title", textKey: "ebook.feature3.text" },
    { titleKey: "ebook.feature4.title", textKey: "ebook.feature4.text" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Header */}
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-4">
              Kostenloses E-Book
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-5">
              {t("ebook.headline")}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              {t("ebook.subheadline")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="grid gap-10 lg:grid-cols-2 min-w-0">
              {/* Left Column */}
              <div className="space-y-6 min-w-0">
                <div className="flex justify-center">
                  <img
                    src={ebookCover}
                    alt="E-Book Cover: Der Weg zum Ganz-Sein von Jona Fels"
                    className="w-44 h-auto rounded-lg shadow-xl"
                    style={{ boxShadow: '10px 10px 25px rgba(0,0,0,0.3), -2px 0 8px rgba(0,0,0,0.15)' }}
                  />
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">{t("ebook.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-14 w-14 text-secondary mx-auto mb-4" aria-hidden="true" />
                        <p className="text-foreground font-medium mb-2">Geschafft!</p>
                        <p className="text-muted-foreground">{t("ebook.success")}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div className="space-y-2">
                          <Label htmlFor="ebook-name">{t("ebook.name")}</Label>
                          <Input id="ebook-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={errors.name ? "border-destructive" : ""} aria-invalid={!!errors.name} autoComplete="name" placeholder="Dein Vorname" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ebook-email">{t("ebook.email")} *</Label>
                          <Input id="ebook-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={errors.email ? "border-destructive" : ""} aria-invalid={!!errors.email} autoComplete="email" placeholder="deine@email.de" />
                          {errors.email && <p className="text-sm text-destructive">Bitte gib eine gültige E-Mail-Adresse ein.</p>}
                        </div>
                        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                          <Label htmlFor="ebook-website">Website (nicht ausfüllen)</Label>
                          <Input id="ebook-website" type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {t("ebook.privacyNote")}{" "}
                          <Link to="/datenschutz" className="text-secondary hover:underline">{t("ebook.here")}</Link>
                        </p>
                        <Button type="submit" className="w-full min-h-[44px]" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />E-Book wird gesendet...</>
                          ) : (
                            t("ebook.download")
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{t("ebook.infoTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-5" role="list">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-medium text-foreground">{t(feature.titleKey)}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{t(feature.textKey)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Links & Author */}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Ebook;
