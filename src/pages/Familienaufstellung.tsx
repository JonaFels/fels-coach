import { useRef, useEffect } from "react";
import { Phone, Sparkles, Heart, Compass, Leaf, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";

import { trackCTAClick } from "@/lib/tracking";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCMS } from "@/contexts/CMSContext";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import praxisAufstellung from "@/assets/praxis-aufstellung.webp";
import { useHalfHeroHashScroll } from "@/hooks/useHalfHeroHashScroll";

const Familienaufstellung = () => {
  const { t, language } = useLanguage();
  const { getImage } = useCMS();
  const familyImage = getImage("family.image", praxisAufstellung);
  const heroRef = useRef<HTMLDivElement>(null);

  useHalfHeroHashScroll("#methode", heroRef);

  // Page-specific FAQ JSON-LD (in addition to global JsonLd)
  useEffect(() => {
    const faqs = [1, 2, 3, 4, 5].map((i) => ({
      "@type": "Question",
      name: t(`family.faq.q${i}`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`family.faq.a${i}`),
      },
    }));

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page-faq", "family");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [language, t]);

  const benefits = [
    { key: "family.benefit1", Icon: Sparkles },
    { key: "family.benefit2", Icon: Heart },
    { key: "family.benefit3", Icon: Leaf },
    { key: "family.benefit4", Icon: Compass },
  ];

  const steps = [1, 2, 3, 4];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <JsonLd />
      <Header />
      <div ref={heroRef}>
        <PraxisHeroBanner variant="sitzbereich" />
      </div>

      <main id="main-content" className="flex-1">
        {/* Title + Subline */}
        <section id="methode" className="pt-20 md:pt-28 pb-14 md:pb-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              {t("family.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic font-serif leading-relaxed">
              {t("family.subtitle")}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-6 md:pt-10 pb-14 md:pb-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
              {t("family.intro.title")}
            </h2>
            <p className="text-muted-foreground leading-[1.9] text-lg">
              {t("family.intro.text")}
            </p>
          </div>
        </section>

        {/* Benefits with icons */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
              {t("family.benefits.title")}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4" role="list">
              {benefits.map(({ key, Icon }) => (
                <li
                  key={key}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-full bg-secondary/10">
                    <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground leading-relaxed pt-1">
                    {t(key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mid-page MicroCTA */}
        <section className="py-14 md:py-20 bg-secondary/5">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <p className="text-muted-foreground mb-4 italic">
              {t("family.midCta.text")}
            </p>
            <Button asChild variant="outline" className="min-h-[44px]">
              <Link
                to="/kontakt"
                onClick={() => trackCTAClick("familienaufstellung_mid_cta", "familienaufstellung", "link")}
              >
                {t("cta.bookNow")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-10">
              {/* Text */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  {t("family.process.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("family.process.intro")}
                </p>
              </div>

              {/* Aufstellungsbild mit Bodenankern */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={familyImage}
                  alt="Systemische Familienaufstellung in der Praxis – farbige Bodenanker markieren die Positionen der Familienmitglieder im Raum"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground italic px-4 py-3 bg-muted/60">
                  {t("family.imageCaption")}
                </p>
              </div>
            </div>

            {/* 4 Step ablauf */}
            <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-6 mt-12 text-center">
              {t("family.process.stepsTitle")}
            </h3>
            <ol className="grid sm:grid-cols-2 gap-5" role="list">
              {steps.map((n) => (
                <li
                  key={n}
                  className="relative pl-14 pr-5 py-5 rounded-xl bg-card border border-border/60 shadow-sm"
                >
                  <span
                    className="absolute left-4 top-5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-serif font-semibold text-sm"
                    aria-hidden="true"
                  >
                    {n}
                  </span>
                  <h4 className="font-serif text-base font-semibold text-foreground mb-1">
                    {t(`family.step${n}.title`).replace(/^\d+\.\s*/, "")}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`family.step${n}.text`)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-14 md:py-20"
          aria-labelledby="family-faq-heading"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <h2
              id="family-faq-heading"
              className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10"
            >
              {t("family.faq.title")}
            </h2>
            <div className="bg-card rounded-md border border-border/50 shadow-sm p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {[1, 2, 3, 4, 5].map((i) => (
                  <AccordionItem key={i} value={`family-faq-${i}`}>
                    <AccordionTrigger className="hover:no-underline text-left">
                      {t(`family.faq.q${i}`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {t(`family.faq.a${i}`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Social Proof – echte Stimme zur Aufstellungsarbeit */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground text-center mb-8">
              {t("family.proof.title")}
            </h2>
            <blockquote className="relative bg-card rounded-lg p-8 md:p-10 shadow-sm border border-border/60">
              <Quote className="absolute top-6 left-6 h-7 w-7 text-secondary/25" aria-hidden="true" />
              <p className="text-muted-foreground italic leading-relaxed text-base md:text-lg pl-8">
                „Ich hatte eine 1:1 Aufstellung bei Jona und habe mich von Anfang an durch seine tiefgehende Präsenz sehr wohl gefühlt. Ich konnte mich in einem gut gehaltenen Rahmen mit meinem familiären Thema auseinandersetzen und gewann an Klarheit und Sicherheit."
              </p>
              <footer className="mt-5 pl-8">
                <span className="font-medium text-foreground text-sm">– Miriam</span>
              </footer>
            </blockquote>
          </div>
        </section>




        {/* Final CTA */}
        <section className="py-14 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-6 sm:px-10 py-5 sm:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <a
                href="/kontakt"
                onClick={() => trackCTAClick("familienaufstellung_cta", "familienaufstellung", "link")}
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("cta.bookNow")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("cta.bookNowMicrocopy")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Familienaufstellung;
