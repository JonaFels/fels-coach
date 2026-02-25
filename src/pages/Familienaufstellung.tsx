import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";

import { trackCTAClick } from "@/lib/tracking";
import { useLanguage } from "@/contexts/LanguageContext";

const Familienaufstellung = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Title */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              {t("family.title")}
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
              {t("family.intro.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("family.intro.text")}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-5">
              {t("family.benefits.title")}
            </h2>
            <ul className="space-y-3 text-muted-foreground" role="list">
              {["family.benefit1", "family.benefit2", "family.benefit3", "family.benefit4"].map((key) => (
                <li key={key} className="flex items-start gap-2">
                  <span className="text-secondary mt-1" aria-hidden="true">•</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
              {t("family.process.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("family.process.intro")}
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-5 bg-background rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">{t(`family.step${i}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`family.step${i}.text`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Button size="lg" className="min-h-[44px]" asChild>
              <a href="/kontakt" onClick={() => trackCTAClick("familienaufstellung_cta", "familienaufstellung", "link")}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("cta.bookNow")}
              </a>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">{t("cta.bookNowMicrocopy")}</p>
          </div>
        </section>

        {/* Links */}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Familienaufstellung;
