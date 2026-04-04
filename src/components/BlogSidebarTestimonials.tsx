import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const sidebarTestimonials = [
  {
    name: "Miriam",
    text: {
      de: "Ich hatte eine 1:1 Aufstellung bei Jona und habe mich von Anfang an durch seine tiefgehende Präsenz sehr wohl gefühlt. Ich bin sehr dankbar für die tiefen Erkenntnisse und die einfühlsame Begleitung.",
      en: "I had a 1:1 constellation session with Jona and felt very comfortable from the start thanks to his profound presence. I am very grateful for the deep insights and empathetic guidance.",
    },
  },
];

export const BlogSidebarTestimonials = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-lg font-semibold text-foreground">
        {t("testimonials.title")}
      </h3>

      {sidebarTestimonials.map((testimonial, index) => (
        <Card key={index} className="bg-muted/30 border-border/50">
          <CardContent className="p-5">
            <Quote className="h-5 w-5 text-secondary/30 mb-3" aria-hidden="true" />
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              „{testimonial.text[language]}"
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">
              – {testimonial.name}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
