import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Ebook = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    toast({
      title: "E-Book wird gesendet...",
      description: "Bitte warte einen Moment, dein E-Book ist unterwegs!",
    });
    
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      
      const response = await fetch("https://www.fels-coach.de/send_ebook.php", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "E-Book erfolgreich gesendet!",
          description: "Prüfe dein E-Mail-Postfach für den Download-Link.",
        });
      } else {
        toast({
          title: "Fehler beim Senden",
          description: "Bitte versuche es später erneut.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Verbindungsfehler",
        description: "Bitte überprüfe deine Internetverbindung.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("ebook.title")}
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Form Section */}
            <Card className="bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  {t("ebook.subtitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {t("ebook.success")}
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-muted-foreground mb-6">
                      {t("ebook.intro")}{" "}
                      <Link to="/" className="text-secondary hover:underline">
                        {t("ebook.here")}
                      </Link>
                      .
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="text"
                        placeholder={t("ebook.name")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <Input
                        type="email"
                        placeholder={t("ebook.email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        {t("ebook.privacyNote")}{" "}
                        <Link
                          to="/datenschutz"
                          className="text-secondary hover:underline"
                        >
                          {t("ebook.here")}
                        </Link>
                        .
                      </p>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            E-Book wird gesendet...
                          </>
                        ) : (
                          t("ebook.download")
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Features Section */}
            <Card className="bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  {t("ebook.infoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t("ebook.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t("ebook.feature2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t("ebook.feature3")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Ebook;
