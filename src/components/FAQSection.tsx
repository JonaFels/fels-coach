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
      answer: "Eine systemische Familienaufstellung macht verborgene Dynamiken in Systemen sichtbar. In meiner Praxis in der Karlstraße 51 (Freiburg) schauen wir uns in geschützter Atmosphäre an, was im Argen liegt, und erarbeiten gemeinsam nachhaltige Lösungswege für Ihre Blockaden.",
    },
    {
      question: "Was kostet ein Coaching oder eine Familienaufstellung?",
      answer: "Transparenz ist mir wichtig: Eine Sitzung (Coaching oder Aufstellung) kostet 80 € pro Stunde. Mein Ziel ist es, Ihnen effiziente und wirkungsvolle Impulse zu geben, die Sie wirklich weiterbringen.",
    },
    {
      question: "Bietest du auch Termine am Wochenende an?",
      answer: "Ja, absolut. Da viele meiner Klienten berufstätig sind, biete ich meine Sitzungen spezialisiert am Samstag zwischen 14:00 und 20:00 Uhr an. So haben Sie die nötige Ruhe, um sich ohne Alltagsstress auf den Prozess einzulassen.",
    },
    {
      question: "Wo findet das Coaching statt und gibt es auch Online-Optionen?",
      answer: "Sie finden mich zentral in der Karlstraße 51, 79104 Freiburg im Breisgau. Für Klienten, die nicht aus der Region kommen oder Flexibilität bevorzugen, biete ich alle Coaching-Sitzungen auch per Video-Call (Online-Coaching) an.",
    },
    {
      question: "Wie kann ich starten und ist ein Vorgespräch möglich?",
      answer: "Der erste Schritt ist ganz einfach: Fragen Sie über den Button auf der Webseite ein kostenloses 15-minütiges Vorgespräch an. So können wir schauen, ob die Chemie stimmt und wie ich Sie am besten unterstützen kann – völlig unverbindlich.",
    },
  ],
  en: [
    {
      question: "What is a systemic family constellation and how does it work with me in Freiburg?",
      answer: "A systemic family constellation makes hidden dynamics in systems visible. In my practice at Karlstraße 51 (Freiburg), we explore what needs attention in a safe atmosphere and develop sustainable solutions for your blockages together.",
    },
    {
      question: "What does a coaching session or family constellation cost?",
      answer: "Transparency is important to me: A session (coaching or constellation) costs €80 per hour. My goal is to give you efficient and effective impulses that truly move you forward.",
    },
    {
      question: "Do you also offer appointments on weekends?",
      answer: "Yes, absolutely. Since many of my clients work during the week, I specialize in offering sessions on Saturdays between 2:00 PM and 8:00 PM. This gives you the peace needed to engage in the process without everyday stress.",
    },
    {
      question: "Where does coaching take place and are there online options?",
      answer: "You can find me centrally located at Karlstraße 51, 79104 Freiburg im Breisgau. For clients who are not from the region or prefer flexibility, I offer all coaching sessions via video call (online coaching) as well.",
    },
    {
      question: "How can I get started and is a preliminary consultation possible?",
      answer: "The first step is simple: Request a free 15-minute preliminary consultation via the button on the website. This way we can see if the chemistry is right and how I can best support you – completely non-binding.",
    },
  ],
};

export const FAQSection = () => {
  const { language, t } = useLanguage();
  const faqs = faqData[language];

  return (
    <section className="py-24 md:py-36" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-secondary font-medium uppercase tracking-wider text-sm text-center mb-4">
          {language === 'de' ? 'Häufige Fragen' : 'Common Questions'}
        </p>
        <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center mb-16">
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
