import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const faqData = {
  de: [
    {
      question: "Wie finde ich heraus, ob systemisches Coaching das Richtige für mich ist?",
      answer: "Systemisches Coaching ist für Sie geeignet, wenn Sie bereit sind, neue Perspektiven einzunehmen. Ob persönliche Krisen, berufliche Blockaden oder das Gefühl, 'festzustecken' – wir arbeiten gezielt an Lösungen, die in Ihrem individuellen Umfeld funktionieren. Das Kennenlern-Angebot bietet den idealen Rahmen, um dies unverbindlich zu prüfen.",
    },
    {
      question: "Was ist der Unterschied zwischen Coaching und Familienaufstellung?",
      answer: "Das Coaching konzentriert sich auf Ihre bewussten Ziele und Handlungsstrategien im Hier und Jetzt. Die Familienaufstellung macht tieferliegende, oft unbewusste Verstrickungen innerhalb Ihres Familiensystems sichtbar. Beide Methoden ergänzen sich perfekt, um sowohl emotionale Heilung als auch praktische Veränderung zu bewirken.",
    },
    {
      question: "Findet das Coaching vor Ort oder online statt?",
      answer: "Sie haben die Wahl: Ich empfange Sie in meinem zentralen Praxisraum in Freiburg (Karlstraße 51, 79104 Freiburg im Breisgau) für eine persönliche Sitzung. Alternativ biete ich ortsunabhängige Online-Termine an. Beide Formate sind auch in englischer Sprache verfügbar.",
    },
    {
      question: "Muss ich für eine Familienaufstellung meine Angehörigen mitbringen?",
      answer: "Nein. Die Aufstellungsarbeit findet im Einzelsetting (1:1) statt. Wir nutzen Stellvertreter-Objekte oder Bodenanker, um Dynamiken im Raum sichtbar zu machen. Diese Form der Arbeit ist sehr intensiv und ermöglicht es Ihnen, sich vollkommen sicher und frei zu öffnen.",
    },
    {
      question: "Wie transparent ist die Preisgestaltung?",
      answer: "Integrität ist die Basis meiner Arbeit. Da ich mich in der fortgeschrittenen Ausbildung befinde, biete ich professionelle Begleitung zu Sonderkonditionen an: Das erste Kennenlern-Coaching kostet 20 €, reguläre Einzelsitzungen 50 €. Zudem stehen Ihnen preisvorteilhafte 5er- und 10er-Pakete zur Verfügung.",
    },
    {
      question: "Wie buche ich einen Termin und wie wird bezahlt?",
      answer: "Die Buchung erfolgt einfach und diskret über den Online-Kalender auf dieser Webseite. Sie wählen Ihre Option (Einzelstunde oder Paket) und Ihren Wunschtermin aus. Die Bezahlung wird direkt im Buchungsprozess sicher abgewickelt.",
    },
    {
      question: "Ersetzt das Coaching eine Psychotherapie?",
      answer: "Nein. Systemisches Coaching und Familienaufstellungen sind Formate der professionellen Beratung und Persönlichkeitsentwicklung. Sie sind keine Heilbehandlung und ersetzen bei psychischen Erkrankungen keine ärztliche oder psychotherapeutische Therapie. Sie dienen der Klärung und Stärkung gesunder Anteile und Ressourcen.",
    },
  ],
  en: [
    {
      question: "How do I find out if systemic coaching is right for me?",
      answer: "Systemic coaching is suitable for you if you're ready to embrace new perspectives. Whether it's personal crises, professional blocks, or the feeling of being 'stuck' – we work specifically on solutions that function in your individual environment. The introductory offer provides the ideal framework to explore this without obligation.",
    },
    {
      question: "What is the difference between coaching and family constellation?",
      answer: "Coaching focuses on your conscious goals and action strategies in the here and now. Family constellation reveals deeper, often unconscious entanglements within your family system. Both methods complement each other perfectly to achieve both emotional healing and practical change.",
    },
    {
      question: "Does coaching take place on-site or online?",
      answer: "You have the choice: I welcome you in my central practice room in Freiburg (Karlstraße 51, 79104 Freiburg im Breisgau) for a personal session. Alternatively, I offer location-independent online appointments. Both formats are also available in English.",
    },
    {
      question: "Do I need to bring my relatives for a family constellation?",
      answer: "No. The constellation work takes place in an individual setting (1:1). We use representative objects or floor anchors to make dynamics visible in the room. This form of work is very intensive and allows you to open up completely safely and freely.",
    },
    {
      question: "How transparent is the pricing?",
      answer: "Integrity is the foundation of my work. Since I am in advanced training, I offer professional support at special rates: The first introductory coaching costs €20, regular individual sessions €50. Additionally, cost-effective 5- and 10-session packages are available.",
    },
    {
      question: "How do I book an appointment and how is payment handled?",
      answer: "Booking is simple and discreet via the online calendar on this website. You select your option (single session or package) and your preferred appointment. Payment is processed securely directly in the booking process.",
    },
    {
      question: "Does coaching replace psychotherapy?",
      answer: "No. Systemic coaching and family constellations are formats of professional counseling and personal development. They are not medical treatment and do not replace medical or psychotherapeutic therapy for mental illnesses. They serve to clarify and strengthen healthy aspects and resources.",
    },
  ],
};

export const FAQSection = () => {
  const { language, t } = useLanguage();
  const faqs = faqData[language];

  useEffect(() => {
    // Add FAQ structured data
    const existing = document.querySelector('script[data-faq="true"]');
    if (existing) existing.remove();

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq", "true");
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [faqs]);

  return (
    <section className="py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
          {t("faq.title")}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
