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
      question: "Wie läuft eine Online-Coaching-Session ab?",
      answer: "Die Session findet per Videocall statt. Wir beginnen mit einem Vorgespräch zu deinem Anliegen, arbeiten dann mit systemischen Methoden und Bodenankern, die du zuhause platzierst, und entwickeln gemeinsam ein Lösungsbild. Die Sessions dauern 60 Minuten.",
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
      question: "Warum nur Online-Sessions?",
      answer: "Ich biete ausschließlich Online-Sessions an, da sie dir ermöglichen, in deiner vertrauten Umgebung zu arbeiten. Die Wirksamkeit ist dabei genauso hoch wie bei persönlichen Sessions – oft sogar höher, weil du dich sicherer fühlst.",
    },
  ],
  en: [
    {
      question: "What is a systemic family constellation?",
      answer: "A systemic family constellation is a therapeutic method that reveals unconscious dynamics and entanglements within your family system. Floor anchors are used to spatially represent relationships to recognize and dissolve hidden patterns.",
    },
    {
      question: "How does an online coaching session work?",
      answer: "The session takes place via video call. We start with a preliminary discussion of your concern, then work with systemic methods and floor anchors that you place at home, and together develop a solution image. Sessions last 60 minutes.",
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
      question: "Why only online sessions?",
      answer: "I exclusively offer online sessions because they allow you to work in your familiar environment. The effectiveness is just as high as in-person sessions – often even higher, because you feel safer.",
    },
  ],
  fr: [
    {
      question: "Qu'est-ce qu'une constellation familiale systémique ?",
      answer: "Une constellation familiale systémique est une méthode thérapeutique qui révèle les dynamiques inconscientes au sein de votre système familial. Des ancres au sol sont utilisées pour représenter spatialement les relations afin de reconnaître et dissoudre les schémas cachés.",
    },
    {
      question: "Comment se déroule une séance de coaching en ligne ?",
      answer: "La séance se déroule par appel vidéo. Nous commençons par un entretien préliminaire, puis travaillons avec des méthodes systémiques et des ancres au sol que vous placez chez vous. Les séances durent 60 minutes.",
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
      question: "Pourquoi uniquement des séances en ligne ?",
      answer: "Je propose exclusivement des séances en ligne car elles vous permettent de travailler dans votre environnement familier. L'efficacité est tout aussi élevée – souvent même plus, car vous vous sentez plus en sécurité.",
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
