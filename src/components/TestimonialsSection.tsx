import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials: { name: string; age?: number; text: string }[] = [
  {
    name: "Miriam",
    age: 29,
    text: "Ich hatte eine 1:1 Aufstellung bei Jona und habe mich von Anfang an durch seine tiefgehende Präsenz sehr wohl gefühlt. Ich konnte mich in einem gut gehaltenen Rahmen mit meinem familiären Thema auseinandersetzen und gewann an Klarheit und Sicherheit. Ich bin sehr dankbar für die tiefen Erkenntnisse und die aufmerksame und einfühlsame Begleitung.",
  },
  {
    name: "Johannes",
    age: 39,
    text: "Jona hat ein super Gespür den eigenen Prozess genau da hin zu begleiten, wo es hängt. Es werden einem Dynamiken klar, die vorher so nicht bewusst waren. Dies führt zu einem tieferen Verständnis und einem Loslassen. Absolute Empfehlung. Ich komme gerne wieder.",
  },
];

export const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-muted/30 scroll-mt-24" aria-label={t("testimonials.title")}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
          {t("testimonials.title")}
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          {t("testimonials.subtitle")}
        </p>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="relative bg-card rounded-xl p-8 shadow-sm border border-border"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-secondary/20" aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed text-lg italic pl-8">
                „{testimonial.text}"
              </p>
              <footer className="mt-6 pl-8">
                <span className="font-medium text-foreground">
                  – {testimonial.name}
                  {testimonial.age ? <span className="text-muted-foreground font-normal">, {testimonial.age}</span> : null}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
