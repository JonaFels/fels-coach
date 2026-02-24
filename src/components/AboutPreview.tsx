import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";

export const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            {t("aboutPreview.title")}
          </h2>
          <div className="space-y-5 text-muted-foreground leading-[1.9] text-lg">
            <p>{t("aboutPreview.text1")}</p>
            <p>{t("aboutPreview.text2")}</p>
          </div>
          <div className="mt-10">
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
