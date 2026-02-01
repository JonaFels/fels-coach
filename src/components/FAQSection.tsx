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
      question: "Was ist eine systemische Familienaufstellung?",
      answer: "Eine systemische Familienaufstellung ist eine therapeutische Methode, die unbewusste Dynamiken und Verstrickungen innerhalb deines Familiensystems sichtbar macht. Mit Bodenankern werden Beziehungen räumlich dargestellt, um verborgene Muster zu erkennen und aufzulösen.",
    },
    {
      question: "Wie läuft eine Coaching-Session ab?",
      answer: "Die Session findet persönlich in Freiburg statt. Wir beginnen mit einem Vorgespräch zu deinem Anliegen, arbeiten dann mit systemischen Methoden und Bodenankern und entwickeln gemeinsam ein Lösungsbild. Die Sessions dauern 60 Minuten.",
    },
    {
      question: "Für wen ist systemisches Coaching geeignet?",
      answer: "Systemisches Coaching eignet sich für Menschen, die sich von wiederkehrenden Mustern befreien möchten, Beziehungsprobleme klären wollen, nach Orientierung suchen oder das Gefühl haben, Lasten zu tragen, die nicht ihnen gehören.",
    },
    {
      question: "Wie viele Sessions brauche ich?",
      answer: "Das ist individuell unterschiedlich. Manche Themen lassen sich in wenigen Sessions klären, andere benötigen längere Begleitung. Im Kennenlern-Coaching können wir gemeinsam einschätzen, was für dich sinnvoll ist.",
    },
    {
      question: "Was kostet ein Coaching bei dir?",
      answer: "Die aktuellen Preise und Paketoptionen findest du auf der Angebote-Seite. Ich biete ein vergünstigtes Kennenlern-Coaching an, damit du die Arbeit kennenlernen kannst.",
    },
    {
      question: "Wo finden die Sessions statt?",
      answer: "Alle Coaching-Sessions finden persönlich in Freiburg statt. Die Arbeit vor Ort ermöglicht eine tiefere Verbindung und die Nutzung von Bodenankern für die Aufstellungsarbeit.",
    },
  ],
  en: [
    {
      question: "What is a systemic family constellation?",
      answer: "A systemic family constellation is a therapeutic method that reveals unconscious dynamics and entanglements within your family system. Floor anchors are used to spatially represent relationships to recognize and dissolve hidden patterns.",
    },
    {
      question: "How does a coaching session work?",
      answer: "The session takes place in person in Freiburg. We start with a preliminary discussion of your concern, then work with systemic methods and floor anchors, and together develop a solution image. Sessions last 60 minutes.",
    },
    {
      question: "Who is systemic coaching suitable for?",
      answer: "Systemic coaching is suitable for people who want to free themselves from recurring patterns, clarify relationship issues, seek orientation, or feel they are carrying burdens that don't belong to them.",
    },
    {
      question: "How many sessions do I need?",
      answer: "This varies individually. Some topics can be clarified in a few sessions, others require longer support. In the introduction coaching, we can assess together what makes sense for you.",
    },
    {
      question: "What does coaching with you cost?",
      answer: "You can find current prices and package options on the Offers page. I offer a discounted introduction coaching so you can get to know the work.",
    },
    {
      question: "Where do the sessions take place?",
      answer: "All coaching sessions take place in person in Freiburg. Working on-site enables a deeper connection and the use of floor anchors for constellation work.",
    },
  ],
  fr: [
    {
      question: "Qu'est-ce qu'une constellation familiale systémique ?",
      answer: "Une constellation familiale systémique est une méthode thérapeutique qui révèle les dynamiques inconscientes au sein de votre système familial. Des ancres au sol sont utilisées pour représenter spatialement les relations afin de reconnaître et dissoudre les schémas cachés.",
    },
    {
      question: "Comment se déroule une séance de coaching ?",
      answer: "La séance se déroule en personne à Fribourg. Nous commençons par un entretien préliminaire, puis travaillons avec des méthodes systémiques et des ancres au sol. Les séances durent 60 minutes.",
    },
    {
      question: "Pour qui le coaching systémique est-il adapté ?",
      answer: "Le coaching systémique convient aux personnes qui veulent se libérer de schémas récurrents, clarifier des problèmes relationnels ou qui ont l'impression de porter des fardeaux qui ne leur appartiennent pas.",
    },
    {
      question: "Combien de séances me faut-il ?",
      answer: "Cela varie selon les personnes. Certains sujets peuvent être clarifiés en quelques séances, d'autres nécessitent un accompagnement plus long.",
    },
    {
      question: "Combien coûte un coaching avec vous ?",
      answer: "Vous trouverez les prix actuels et les options de forfait sur la page Offres. Je propose un coaching découverte à prix réduit.",
    },
    {
      question: "Où se déroulent les séances ?",
      answer: "Toutes les séances de coaching se déroulent en personne à Fribourg. Le travail sur place permet une connexion plus profonde et l'utilisation d'ancres au sol pour le travail de constellation.",
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
    <section className="py-10 md:py-14" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 id="faq-heading" className="font-serif text-xl md:text-2xl font-semibold text-foreground text-center mb-6">
          {t("faq.title")}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-muted">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
