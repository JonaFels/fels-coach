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
import { trackCTAClick } from "@/lib/tracking";

const faqItems = [
  {
    q: "Was ist der Unterschied zu einer Familienaufstellung?",
    a: "In der Aufstellung betrachten wir oft das gesamte Familiensystem. In der psychologischen Beratung bleiben wir ganz nah an deiner aktuellen Situation und erarbeiten konkrete Lösungswege für das, was dich gerade belastet.",
  },
  {
    q: "Ist das eine Therapie?",
    a: "Nein. Ich arbeite ausschließlich beratend und präventiv – außerhalb der Heilkunde. Meine Begleitung richtet sich an Menschen in belastenden Lebensphasen, ersetzt aber keine medizinische oder heilkundliche Versorgung.",
  },
  {
    q: "Geht das auch online?",
    a: "Ja, diese tiefe emotionale Gesprächsarbeit lässt sich hervorragend via Video-Call durchführen.",
  },
  {
    q: "Wie funktioniert die Buchung von Folgeterminen?",
    a: "Nach unserem Erstgespräch erhältst du Zugang zu meinem digitalen Buchungssystem. Dort kannst du Folgetermine flexibel verwalten und erhältst alle Rechnungen bequem digital.",
  },
];

const SystemischeBeratung = () => {

  const cards = [
    {
      Icon: Heart,
      title: "Krisen bewältigen",
      text: "Wir beginnen genau da, wo du dich aktuell belastet und orientierungslos fühlst. Im geschützten Rahmen sortieren wir, was gerade zu viel ist – und was als Erstes Entlastung bringt.",
    },
    {
      Icon: Link,
      title: "Muster und Konflikte verstehen",
      text: "Gemeinsam schauen wir auf die Beziehungsebene: Welche Dynamiken, Rollen und Konflikte wirken im Hintergrund – in Partnerschaft, Familie oder Beruf – und halten dich in der Belastung fest?",
    },
    {
      Icon: Shield,
      title: "Konkrete Lösungswege erarbeiten",
      text: "Aus dem Verstehen wird Handeln: Wir entwickeln alltagstaugliche Schritte für Stressbewältigung, Abgrenzung und Neuorientierung – damit du wieder handlungsfähig wirst.",
    },
  ];

  const checkItems = [
    "Du steckst in einer belastenden Lebensphase und suchst Orientierung und Entlastung.",
    "Dauerhafter Stress, Überforderung oder Konflikte bestimmen deinen Alltag.",
    "Du stehst vor einer Neuorientierung – beruflich, familiär oder in deiner Partnerschaft.",
    "Du suchst keine oberflächlichen Ratschläge, sondern eine fundierte 1:1 Begleitung mit konkreten Lösungswegen.",
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
            <p className="eyebrow mb-6">Psychologische Beratung · 1:1 in Freiburg &amp; Online</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Psychologische Beratung &amp; Lebensberatung – fundierte 1:1 Begleitung in Freiburg
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic font-serif leading-relaxed">
              Klarheit in schwierigen Lebensphasen: Stress vorbeugen, Konflikte lösen und gemeinsam
              tragfähige Wege aus der Belastung finden.
            </p>
          </div>
        </section>

        {/* Einleitung */}
        <section className="pt-6 md:pt-10 pb-14 md:pb-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground leading-[1.9] text-lg">
              Kennst du dieses Gefühl von Unklarheit, Überforderung und dem ständigen Nicht-Wissen,
              wie es weitergehen soll? In meiner psychologischen Beratung und Lebensberatung
              begleite ich dich im 1:1 – in meiner Praxis in der Karlstraße in Freiburg oder
              flexibel online. Wir schauen gemeinsam auf deine aktuelle Situation, ordnen
              Belastungen ein und erarbeiten konkrete Lösungswege für Stressbewältigung,
              Konfliktlösung und Neuorientierung. Meine Arbeit ist beratend und präventiv und
              ersetzt keine medizinische Versorgung.
            </p>
          </div>
        </section>

        {/* Wie wir arbeiten */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
              So sieht die Beratung aus
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {cards.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
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

        {/* Stimmen aus der Praxis */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10">
              Stimmen aus der Praxis
            </h2>
            <blockquote className="bg-card border border-border/50 rounded-md p-8 md:p-10 shadow-sm">
              <p className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-6">
                „Jona hat ein super Gespür, den eigenen Prozess genau dorthin zu begleiten, wo es hängt. Es werden einem Dynamiken klar, die vorher so nicht bewusst waren. Absolute Empfehlung.“
              </p>
              <footer className="text-muted-foreground text-sm">
                – Johannes, 39
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Für wen ist diese Form der Beratung? */}
        <section className="py-14 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
              Für wen ist diese Beratung geeignet?
            </h2>
            <ul className="space-y-4" role="list">
              {checkItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-card border border-border/50 rounded-lg px-5 py-4"
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

        {/* So unkompliziert starten wir */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
              So unkompliziert starten wir
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center mx-auto mb-5">
                  <span className="font-serif text-xl font-semibold text-secondary">1</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Termin wählen
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sichere dir über den Button einen passenden Termin für das kostenlose,
                  30-minütige Erstgespräch.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center mx-auto mb-5">
                  <span className="font-serif text-xl font-semibold text-secondary">2</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Kennenlernen
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir telefonieren oder sehen uns per Video. Du schilderst dein Anliegen und wir
                  klären in Ruhe, ob meine Beratung zu dir passt.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center mx-auto mb-5">
                  <span className="font-serif text-xl font-semibold text-secondary">3</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Prozessarbeit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wenn alles passt, vereinbaren wir dein erstes 1:1 Beratungsgespräch – vor Ort in
                  Freiburg oder online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
              Häufige Fragen
            </h2>
            <div className="bg-card rounded-md border border-border/50 shadow-sm p-6 md:p-10">
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
              Lass uns gemeinsam den ersten Schritt aus der Belastung gehen.
            </h2>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-6 sm:px-10 py-5 sm:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <a href="/kontakt" onClick={() => trackCTAClick("beratung_page_cta", "systemische_beratung", "link")}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Kostenloses Erstgespräch vereinbaren
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
