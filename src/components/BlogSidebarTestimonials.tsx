import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { miriam, translatedNote } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";

export const BlogSidebarTestimonials = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-lg font-semibold text-foreground">
        {t("testimonials.title")}
      </h3>

      <Card className="bg-muted/30 border-border/50">
        <CardContent className="p-5">
          <Quote className="h-5 w-5 text-secondary/30 mb-3" aria-hidden="true" />
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            „{miriam[language].map((part, i) =>
              part.bold ? (
                <strong key={i} className="text-foreground font-semibold not-italic">{part.text}</strong>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}"
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">
            – {miriam.name}
            {language === "en" && <span className="block text-xs font-normal text-muted-foreground">{translatedNote}</span>}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
