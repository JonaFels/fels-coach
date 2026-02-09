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
      question: "Was genau passiert bei einer systemischen Familienaufstellung?",
      answer: "In einer Aufstellung machen wir unbewusste Dynamiken innerhalb deines Familiensystems sichtbar. In meiner Praxis in Freiburg arbeiten wir im 1:1 Setting mit sogenannten Bodenankern oder Figuren. So kannst du Verstrickungen von außen betrachten und neue, lösende Bilder für dein System entwickeln.",
    },
    {
      question: "Für wen ist ein Coaching bei dir geeignet?",
      answer: "Mein Coaching richtet sich an Menschen, die immer wieder vor den gleichen emotionalen oder beruflichen Blockaden stehen. Wenn du das Gefühl hast, dass dich alte Muster oder familiäre Lasten zurückhalten, bietet die systemische Arbeit schnelle und tiefgreifende Klarheit.",
    },
    {
      question: "Wo findet das Coaching in Freiburg statt?",
      answer: "Die Sitzungen finden in einem ruhigen und geschützten Rahmen in der Egonstraße 91, 79106 Freiburg im Breisgau statt. Die Praxis ist zentral gelegen und gut erreichbar.",
    },
    {
      question: "Wie viele Termine sind notwendig?",
      answer: "Das Schöne an der systemischen Aufstellung ist ihre Effizienz. Oft bringt bereits eine einzige Sitzung (ca. 90 Minuten) den entscheidenden Durchbruch. Wir entscheiden nach dem ersten Kennenlernen gemeinsam, ob weitere Begleitung sinnvoll ist.",
    },
  ],
  en: [
    {
      question: "What exactly happens during a systemic family constellation?",
      answer: "In a constellation, we make unconscious dynamics within your family system visible. In my practice in Freiburg, we work in a 1:1 setting with so-called floor anchors or figures. This allows you to observe entanglements from the outside and develop new, resolving images for your system.",
    },
    {
      question: "Who is your coaching suitable for?",
      answer: "My coaching is aimed at people who repeatedly face the same emotional or professional blocks. If you feel that old patterns or family burdens are holding you back, systemic work offers quick and profound clarity.",
    },
    {
      question: "Where does coaching take place in Freiburg?",
      answer: "Sessions take place in a quiet and protected setting at Egonstraße 91, 79106 Freiburg im Breisgau. The practice is centrally located and easily accessible.",
    },
    {
      question: "How many sessions are necessary?",
      answer: "The beauty of systemic constellation is its efficiency. Often a single session (approx. 90 minutes) brings the decisive breakthrough. After the initial meeting, we decide together whether further support makes sense.",
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
    <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-secondary font-medium uppercase tracking-wider text-sm text-center mb-4">
          {language === 'de' ? 'Häufige Fragen' : 'Common Questions'}
        </p>
        <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center mb-12">
          {t("faq.title")}
        </h2>
        <div className="bg-card rounded-lg border border-border/50 shadow-sm p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
