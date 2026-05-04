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
      question: "Muss ich meine Familie zur Aufstellung mitbringen?",
      answer: "Nein – und das ist für viele eine große Erleichterung. Wir arbeiten ausschließlich im geschützten 1:1 Setting in meinem Praxisraum in Freiburg. Statt mit fremden Stellvertretern nutzen wir Bodenanker (z. B. kleine Tücher oder Karten), die wir im Raum positionieren. So entsteht ein klares Bild deines Systems – ohne dass jemand außer dir und mir anwesend ist.",
    },
    {
      question: "Was ist, wenn während der Sitzung starke Emotionen hochkommen?",
      answer: "Das darf sein – und ich halte den Rahmen für dich. Mein Job ist es, präsent und ruhig dabei zu sein, dich zu begleiten und dafür zu sorgen, dass du am Ende nicht aufgewühlt, sondern geerdet wieder rausgehst. Wir arbeiten in deinem Tempo, nichts wird erzwungen.",
    },
    {
      question: "Wie viele Sitzungen brauche ich, bis sich etwas verändert?",
      answer: "Das ist sehr individuell. Manche Klient:innen spüren bereits nach einer Aufstellung eine deutliche Entlastung, andere kommen über mehrere Monate in lockerer Folge. Häufig sind 3 bis 6 Sitzungen ein guter Rahmen, um ein Thema wirklich in die Tiefe zu bearbeiten – ich dränge dich aber zu nichts.",
    },
    {
      question: "Übernimmt die Krankenkasse die Kosten?",
      answer: "Nein. Coaching und Familienaufstellung sind keine Heilbehandlung im Sinne der gesetzlichen Krankenkassen und werden daher als Selbstzahlerleistung angeboten. Eine Sitzung (80 Min.) kostet 70 €. Dafür bist du frei in der Wahl deines Wegs – ohne Diagnose, ohne Aktenvermerk.",
    },
    {
      question: "Wie kann ich starten und ist ein Vorgespräch möglich?",
      answer: "Der erste Schritt ist einfach: Frag über den Button auf der Webseite ein kostenloses 30-minütiges Vorgespräch an. So schauen wir, ob die Chemie stimmt und wie ich dich am besten unterstützen kann – völlig unverbindlich.",
    },
    {
      question: "Wo findet das Coaching statt und gibt es Wochenend-Termine?",
      answer: "Mein Praxisraum liegt zentral in der Karlstraße 51, 79104 Freiburg im Breisgau (Tram 3). Da viele Klient:innen berufstätig sind, biete ich meine Sitzungen schwerpunktmäßig samstags zwischen 14:00 und 20:00 Uhr an – mit Ruhe und ohne Alltagsstress.",
    },
  ],
  en: [
    {
      question: "Do I need to bring my family to the constellation?",
      answer: "No – and for many people that's a huge relief. We work exclusively in a protected 1-on-1 setting in my practice in Freiburg. Instead of using strangers as representatives, we use floor anchors (small cloths or cards) that we position in the room. This creates a clear picture of your system – with no one present but you and me.",
    },
    {
      question: "What if strong emotions come up during the session?",
      answer: "They're allowed to – and I hold the space for you. My job is to be present and calm, to accompany you, and to make sure you leave grounded rather than overwhelmed. We work at your pace; nothing is forced.",
    },
    {
      question: "How many sessions will I need before something changes?",
      answer: "That's very individual. Some clients feel noticeable relief after a single constellation, others come back over several months. 3 to 6 sessions are often a good frame for going deeply into a topic – but I won't push you in any direction.",
    },
    {
      question: "Does health insurance cover the costs?",
      answer: "No. Coaching and family constellation are not considered medical treatment, so they are offered as self-pay services. One session (80 min.) is €70. In return, you're free to choose your own path – with no diagnosis and no medical record.",
    },
    {
      question: "How can I get started and is a preliminary consultation possible?",
      answer: "The first step is simple: Request a free 30-minute preliminary consultation via the button on the website. This way we can see if the chemistry is right and how I can best support you – completely non-binding.",
    },
    {
      question: "Where does coaching take place and are there weekend appointments?",
      answer: "My practice is centrally located at Karlstraße 51, 79104 Freiburg im Breisgau (tram 3). Since many of my clients work during the week, I mainly offer sessions on Saturdays between 2:00 PM and 8:00 PM – calm, and without everyday stress.",
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
