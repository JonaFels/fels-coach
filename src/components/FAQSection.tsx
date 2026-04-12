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
      question: "Was ist eine systemische Familienaufstellung und wie läuft sie bei mir in Freiburg ab?",
      answer: "Eine systemische Familienaufstellung macht verborgene Dynamiken in Systemen sichtbar. In meinem Praxisraum in der Karlstraße 51 (Freiburg) schauen wir uns in geschützter Atmosphäre an, was im Argen liegt, und erarbeiten gemeinsam nachhaltige Lösungswege für Ihre Blockaden.",
    },
    {
      question: "Was kostet ein Coaching oder eine Familienaufstellung?",
      answer: "Transparenz ist mir wichtig: Eine reguläre Coaching-Sitzung kostet 70 € pro Einheit (80 Minuten). Mein Ziel ist es, Ihnen effiziente und wirkungsvolle Impulse zu geben, die Sie wirklich weiterbringen.",
    },
    {
      question: "Bietest du auch Termine am Wochenende an?",
      answer: "Ja, absolut. Da viele meiner Klienten berufstätig sind, biete ich meine Sitzungen spezialisiert am Samstag zwischen 14:00 und 20:00 Uhr an. So haben Sie die nötige Ruhe, um sich ohne Alltagsstress auf den Prozess einzulassen.",
    },
    {
      question: "Wo findet das Coaching statt?",
      answer: "Sie finden mich zentral in der Karlstraße 51, 79104 Freiburg im Breisgau. Mein Praxisraum bietet eine ruhige, geschützte Atmosphäre für Ihre Coaching-Sitzungen.",
    },
    {
      question: "Wie kann ich starten und ist ein Vorgespräch möglich?",
      answer: "Der erste Schritt ist ganz einfach: Frag über den Button auf der Webseite ein kostenloses 30-minütiges Vorgespräch an. So können wir schauen, ob die Chemie stimmt und wie ich dich am besten unterstützen kann – völlig unverbindlich.",
    },
  ],
  en: [
    {
      question: "What is a systemic family constellation and how does it work with me in Freiburg?",
      answer: "A systemic family constellation makes hidden dynamics in systems visible. In my practice at Karlstraße 51 (Freiburg), we explore what needs attention in a safe atmosphere and develop sustainable solutions for your blockages together.",
    },
    {
      question: "What does a coaching session or family constellation cost?",
      answer: "Transparency is important to me: A regular coaching session costs €70 per unit (80 minutes). My goal is to give you efficient and effective impulses that truly move you forward.",
    },
    {
      question: "Do you also offer appointments on weekends?",
      answer: "Yes, absolutely. Since many of my clients work during the week, I specialize in offering sessions on Saturdays between 2:00 PM and 8:00 PM. This gives you the peace needed to engage in the process without everyday stress.",
    },
    {
      question: "Where does coaching take place?",
      answer: "You can find me centrally located at Karlstraße 51, 79104 Freiburg im Breisgau. My practice offers a calm, safe atmosphere for your coaching sessions.",
    },
    {
      question: "How can I get started and is a preliminary consultation possible?",
      answer: "The first step is simple: Request a free 30-minute preliminary consultation via the button on the website. This way we can see if the chemistry is right and how I can best support you – completely non-binding.",
    },
  ],
};

export const FAQSection = () => {
  const { language, t } = useLanguage();
  const faqs = faqData[language];

  return (
    <section className="py-16 md:py-20" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-secondary font-medium uppercase tracking-wider text-sm text-center mb-4">
          {t("faq.subtitle")}
        </p>
        <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
          {t("faq.title")}
        </h2>
        <div className="bg-card rounded-3xl border border-border/50 shadow-sm p-6 md:p-8">
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
