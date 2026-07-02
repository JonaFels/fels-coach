import { Phone, LayoutGrid, Users, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import { useErstgespraech } from "@/components/HashBookingTrigger";
import { trackCTAClick } from "@/lib/tracking";

const SystemischeBeratung = () => {
  const booking = useErstgespraech();

  const handleCTA = (e: React.MouseEvent) => {
    if (booking) {
      e.preventDefault();
      booking.openErstgespraech();
    }
    trackCTAClick("beratung_page_cta", "systemische_beratung", "link");
  };

  const items = [
    {
      Icon: LayoutGrid,
      title: "Das Systembrett",
      text: "Komplexe Situationen visuell darstellen und greifbar machen.",
    },
    {
      Icon: Users,
      title: "Anteile-Arbeit",
      text: "Widersprüchliche Gefühle (z. B. der innere Kritiker vs. der Wunsch nach Freiheit) erkennen und integrieren.",
    },
    {
      Icon: Compass,
      title: "Lösungsorientierter Dialog",
      text: "Fokus auf deine Ressourcen und konkrete, umsetzbare nächste Schritte.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <JsonLd />
      <Header />
      <PraxisHeroBanner variant="sitzbereich" />

      <main id="main-content" className="flex-1">
        {/* Title */}
        <section className="pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="eyebrow mb-6">1:1 in Freiburg &amp; Online</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Systemische Beratung &amp; 1:1 Coaching in Freiburg
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic font-serif leading-relaxed">
              Klarheit finden, wenn im Kopf vieles gleichzeitig läuft.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-8 md:pt-12 pb-20 md:pb-28 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground leading-[1.9] text-lg">
              In meiner systemischen Beratung (oft auch als Coaching bezeichnet) nutzen wir das
              Systembrett und die Arbeit mit inneren Anteilen, um deine aktuelle Lebenssituation im
              geschützten 1:1 Setting zu ordnen. Nicht jedes Thema erfordert eine tiefe
              Familienaufstellung – oft reicht ein klarer Blick von außen, um wieder handlungsfähig
              zu werden: im Beruf, in Beziehungen oder bei wichtigen Entscheidungen.
            </p>
          </div>
        </section>

        {/* Wie wir arbeiten */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
              Wie wir arbeiten
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {items.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/60 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Lass uns einfach mal reden.
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              Kostenloses 30-Minuten Vorgespräch, um zu schauen, ob die Chemie stimmt.
            </p>
            <Button
              size="lg"
              className="text-base px-10 py-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
