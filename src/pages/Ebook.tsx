import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Loader2, BookOpen, ArrowRight } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { AuthorBox } from "@/components/AuthorBox";
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
        toast({
          title: "Fehler beim Senden",
          description: "Bitte versuche es später erneut.",
          variant: "destructive",
        });
        return;
      }
      
      if (data?.error) {
        toast({
          title: "Fehler beim Senden",
          description: data.error,
          variant: "destructive",
        });
        return;
      }
      
      setSubmitted(true);
      toast({
        title: "E-Book erfolgreich gesendet!",
        description: "Prüfe dein E-Mail-Postfach für den Download-Link.",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Verbindungsfehler",
        description: "Bitte überprüfe deine Internetverbindung.",
        variant: "destructive",
      });
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
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead />
      <Header />
      
      {/* Hero Section - Dark & Grounded */}
      <main id="main-content" className="flex-1">
        <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]" />
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              
              {/* Left Column - Copy */}
              <div className="text-center lg:text-left">
                <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-4">
                  Kostenloses E-Book
                </p>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight mb-6">
                  {t("ebook.headline")}
                </h1>
                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                  {t("ebook.subheadline")}
                </p>
                
                {/* Mobile: Show form here */}
                <div className="lg:hidden">
                  <EbookForm 
                    submitted={submitted}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    website={website}
                    setWebsite={setWebsite}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    handleSubmit={handleSubmit}
                    t={t}
                  />
                </div>
              </div>
              
              {/* Right Column - 3D Book Mockup + Form on Desktop */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Book Mockup Container */}
                  <div className="flex justify-center mb-8">
                    <div className="relative perspective-1000">
                      <div 
                        className="w-56 h-72 bg-gradient-to-br from-secondary/90 to-secondary rounded-r-lg shadow-2xl transform rotate-y-[-15deg] hover:rotate-y-[-5deg] transition-transform duration-500"
                        style={{ 
                          transformStyle: 'preserve-3d',
                          boxShadow: '15px 15px 30px rgba(0,0,0,0.4), -2px 0 10px rgba(0,0,0,0.2)'
                        }}
                      >
                        {/* Book Spine */}
                        <div 
                          className="absolute left-0 top-0 w-4 h-full bg-secondary-foreground/20 rounded-l-sm"
                          style={{ transform: 'rotateY(90deg) translateX(-8px)' }}
                        />
                        {/* Book Cover Content */}
                        <div className="p-6 h-full flex flex-col justify-between">
                          <div>
                            <BookOpen className="h-10 w-10 text-secondary-foreground mb-4" />
                            <h3 className="font-serif text-xl font-semibold text-secondary-foreground leading-tight">
                              Der Weg zum Ganzsein
                            </h3>
                          </div>
                          <p className="text-secondary-foreground/80 text-sm">
                            Jona Fels
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Form Card */}
                  <EbookForm 
                    submitted={submitted}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    website={website}
                    setWebsite={setWebsite}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    handleSubmit={handleSubmit}
                    t={t}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
              {t("ebook.infoTitle")}
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-secondary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {t(feature.textKey)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Repeat */}
            <div className="text-center mt-12">
              <a href="#ebook-form" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors">
                <span>Jetzt E-Book sichern</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground" aria-label="Verwandte Seiten">
              <Link to="/familienaufstellung" className="hover:text-secondary underline underline-offset-4">
                Was ist Familienaufstellung?
              </Link>
              <span aria-hidden="true">•</span>
              <Link to="/angebote" className="hover:text-secondary underline underline-offset-4">
                System-Check buchen
              </Link>
            </nav>

            <AuthorBox />
          </div>
        </section>
      </main>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

interface EbookFormProps {
  submitted: boolean;
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  website: string;
  setWebsite: (value: string) => void;
  errors: { name?: string; email?: string };
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  t: (key: string) => string;
}

const EbookForm = ({ 
  submitted, 
  name, 
  setName, 
  email, 
  setEmail, 
  website, 
  setWebsite, 
  errors, 
  isSubmitting, 
  handleSubmit, 
  t 
}: EbookFormProps) => {
  if (submitted) {
    return (
      <Card id="ebook-form" className="bg-card/95 backdrop-blur-sm border-border/50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" aria-hidden="true" />
          <p className="text-foreground font-medium mb-2">Geschafft!</p>
          <p className="text-muted-foreground">
            {t("ebook.success")}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card id="ebook-form" className="bg-card/95 backdrop-blur-sm border-border/50">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="space-y-2">
            <Label htmlFor="ebook-name" className="text-foreground">{t("ebook.name")}</Label>
            <Input
              id="ebook-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
              aria-invalid={!!errors.name}
              autoComplete="name"
              placeholder="Dein Vorname"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ebook-email" className="text-foreground">{t("ebook.email")} *</Label>
            <Input
              id="ebook-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
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
          
          <Button 
            type="submit" 
            className="w-full min-h-[48px] text-base font-medium" 
            disabled={isSubmitting}
          >
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
      </CardContent>
    </Card>
  );
};

export default Ebook;
