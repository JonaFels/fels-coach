import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = {
  de: [
    {
      name: "Anna M.",
      location: "München",
      text: "Die Arbeit mit Jona hat mir geholfen, ein jahrelanges Muster zu durchbrechen. Seine ruhige und präzise Art hat mir Sicherheit gegeben, mich auf tiefe Themen einzulassen.",
      rating: 5,
    },
    {
      name: "Thomas K.",
      location: "Berlin",
      text: "Ich war skeptisch gegenüber Online-Coaching, aber die Sessions waren genauso wirkungsvoll wie erwartet. Jona schafft einen sicheren Raum für intensive Arbeit.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      location: "Hamburg",
      text: "Endlich verstehe ich, warum bestimmte Situationen in meinem Leben immer wieder auftreten. Die Familienaufstellung war ein echter Wendepunkt für mich.",
      rating: 5,
    },
  ],
  en: [
    {
      name: "Anna M.",
      location: "Munich",
      text: "Working with Jona helped me break through a years-long pattern. His calm and precise manner gave me the security to engage with deep topics.",
      rating: 5,
    },
    {
      name: "Thomas K.",
      location: "Berlin",
      text: "I was skeptical about online coaching, but the sessions were just as effective as expected. Jona creates a safe space for intensive work.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      location: "Hamburg",
      text: "I finally understand why certain situations keep recurring in my life. The family constellation was a real turning point for me.",
      rating: 5,
    },
  ],
  fr: [
    {
      name: "Anna M.",
      location: "Munich",
      text: "Travailler avec Jona m'a aidée à briser un schéma de plusieurs années. Sa manière calme et précise m'a donné la sécurité de m'engager dans des sujets profonds.",
      rating: 5,
    },
    {
      name: "Thomas K.",
      location: "Berlin",
      text: "J'étais sceptique envers le coaching en ligne, mais les séances étaient aussi efficaces qu'attendu. Jona crée un espace sûr pour un travail intensif.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      location: "Hambourg",
      text: "Je comprends enfin pourquoi certaines situations se reproduisent dans ma vie. La constellation familiale a été un vrai tournant pour moi.",
      rating: 5,
    },
  ],
};

export const TestimonialsSection = () => {
  const { language, t } = useLanguage();
  const reviews = testimonials[language];

  return (
    <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <h2 id="testimonials-heading" className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
          {t("testimonials.title")}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {t("testimonials.subtitle")}
        </p>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4" aria-label={`${review.rating} von 5 Sternen`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                  "{review.text}"
                </blockquote>
                <footer className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
