import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export const BlogSidebarTestimonials = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-lg font-semibold text-foreground">
        {t("testimonials.title")}
      </h3>

      <Card className="bg-muted/30 border-border/50">
        <CardContent className="p-5">
          <Quote className="h-5 w-5 text-secondary/30 mb-3" aria-hidden="true" />
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            „Ich hatte eine 1:1 Aufstellung bei Jona und habe mich von Anfang an durch seine <strong className="text-foreground font-semibold not-italic">tiefgehende Präsenz</strong> sehr wohl gefühlt. Ich bin sehr dankbar für die <strong className="text-foreground font-semibold not-italic">tiefen Erkenntnisse</strong> und die <strong className="text-foreground font-semibold not-italic">einfühlsame Begleitung</strong>."
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">
            – Miriam
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
