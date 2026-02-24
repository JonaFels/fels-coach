import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";

export const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            {t("aboutPreview.title")}
          </h2>
          <h3 className="font-serif text-lg md:text-xl text-muted-foreground mb-10">
            Systemischer Coach in Freiburg
          </h3>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>{t("aboutPreview.text1")}</p>
            <p>{t("aboutPreview.text2")}</p>
          </div>
          <div className="mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base"
              onClick={() => trackCTAClick("about_preview_more", "homepage_about", "link")}
            >
              <Link to="/ueber-mich">
                {t("aboutPreview.cta")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
