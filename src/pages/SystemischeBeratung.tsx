import { Phone, Heart, Link, Shield, Check, ArrowRight } from "lucide-react";
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
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import { useErstgespraech } from "@/components/HashBookingTrigger";
import { trackCTAClick } from "@/lib/tracking";

const faqItems = [
  {
    q: "Was ist der Unterschied zu einer großen Familienaufstellung?",
    a: "Die große Aufstellung fokussiert sich oft auf das gesamte Familiensystem über Generationen. In der Beratung bleiben wir ganz nah an deinem aktuellen Gefühl im Hier und Jetzt und schauen gezielt auf die Beziehungen, die diesen konkreten Schmerz gerade in dir auslösen.",
  },
  {
    q: "Bietest du die Beratung auch online an?",
    a: "Ja. Diese tiefe Prozess- und Gesprächsarbeit lässt sich auch hervorragend online via Video-Call durchführen. So kannst du in deinem eigenen, sicheren Umfeld bleiben.",
  },
  {
    q: "Muss ich mich auf die Sitzung vorbereiten?",
    a: "Nein. Du musst vorher nichts analysieren oder wissen. Es reicht völlig, wenn du deine aktuelle Unklarheit und deine Gefühle mitbringst. Den Rest erarbeiten wir gemeinsam im Kontakt.",
  },
];

const SystemischeBeratung = () => {
  const booking = useErstgespraech();

  const handleCTA = (e: React.MouseEvent) => {
    if (booking) {
      e.preventDefault();
      booking.openErstgespraech();
    }
    trackCTAClick("beratung_page_cta", "systemische_beratung", "link");
  };

  const cards = [
    {
      Icon: Heart,
      title: "Das Gefühl in Kontakt bringen",
      text: "Wir beginnen genau da, wo du dich aktuell schlecht und orientierungslos fühlst. Anstatt das Gefühl wegzudrücken, geben wir ihm im geschützten Raum die Erlaubnis, da zu sein.",
    },
    {
      Icon: Link,
      title: "Verstrickungen aufdecken",
      text: "Gemeinsam ergründen wir die Beziehungsebene. Wir decken unbewusste Dynamiken auf – wie etwa Identifikationen, Vereinnahmung oder tiefe Verstrickungen mit Personen, die dir nahestehen.",
    },
    {
      Icon: Shield,
      title: "Den Schmerz annehmen",
      text: "Heilung entsteht durch Fühlen. Wir gehen gemeinsam durch den Schmerz und die Akzeptanz, dass eine nahe Person diese Gefühle in dir erzeugt hat. Wenn wir da hindurchgehen, entsteht echte, nachhaltige Befreiung.",
    },
  ];

  const checkItems = [
    "Du spürst eine tiefe innere Verzweiflung, kannst sie aber nicht logisch greifen.",
    "Du fühlst dich in Beziehungen (Partnerschaft oder Familie) vereinnahmt oder verstrickt.",
    "Du hast das Gefühl, das Leben anderer zu leben (Identifikation) und dich selbst verloren zu haben.",
    "Du suchst keine oberflächlichen Ratschläge, sondern bist bereit, den Ursprung deines Schmerzes wirklich anzuschauen.",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <JsonLd />
      <Header />
      <PraxisHeroBanner variant="sitzbereich" />

      <main id="main-content" className="flex-1">
        {/* Hero / Intro */}
        <section className="pt-12 md:pt-20 pb-10 md:pb-14">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="eyebrow mb-6">1:1 in Freiburg &amp; Online</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Systemische Beratung &amp; 1:1 Coaching in Freiburg
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic font-serif leading-relaxed">
              Aus der inneren Verzweiflung zurück in die Klarheit.
            </p>
          </div>
        </section>

        {/* Einleitung */}
        <section className="pt-6 md:pt-10 pb-14 md:pb-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground leading-[1.9] text-lg">
              Kennst du dieses Gefühl von massiver Unklarheit, innerer Verzweiflung und dem
              ständigen Nicht-Wissen, wie es weitergehen soll? In meiner systemischen Beratung
              (oft auch als Coaching bezeichnet) weichen wir diesem Zustand nicht aus, sondern
              gehen genau dort hinein. Im 1:1 Gespräch bringen wir deine Gefühle in Kontakt und
              finden heraus, welche Beziehungsdynamiken zu nahestehenden Personen eigentlich
              hinter deinem Schmerz stecken.
            </p>
          </div>
        </section>

        {/* Wie wir arbeiten */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
              Wie wir arbeiten
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {cards.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/60 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Für wen ist diese Form der Beratung? */}
        <section className="py-14 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
              Für wen ist diese Form der Beratung?
            </h2>
            <ul className="space-y-4" role="list">
              {checkItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-card border border-border/50 rounded-2xl px-5 py-4"
                >
                  <Check
                    className="h-5 w-5 text-secondary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-foreground text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
              Häufige Fragen
            </h2>
            <div className="bg-card rounded-3xl border border-border/50 shadow-sm p-6 md:p-10">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="hover:no-underline text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Lass uns den ersten Schritt durch die Unklarheit gemeinsam gehen.
            </h2>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-6 sm:px-10 py-5 sm:py-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <a href="/kontakt#erstgespraech" onClick={handleCTA}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default SystemischeBeratung;
