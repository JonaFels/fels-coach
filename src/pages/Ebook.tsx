import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Ebook = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("ebook.title")}
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Form Section */}
            <Card>
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
                      <Button type="submit" className="w-full">
                        {t("ebook.download")}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Features Section */}
            <Card>
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
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Ebook;
