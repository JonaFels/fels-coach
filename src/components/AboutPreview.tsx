import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";

export const AboutPreview = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-28 md:py-40 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Eyebrow */}
          <p className="text-center text-[0.72rem] md:text-xs uppercase tracking-[0.28em] text-secondary/80 font-medium mb-6">
            {language === "de" ? "Über mich" : "About"}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center leading-tight">
            {t("aboutPreview.title")}
          </h2>
          <div className="space-y-7 text-muted-foreground leading-[2] text-lg">
            <p>{t("aboutPreview.text1")}</p>
            <p>{t("aboutPreview.text2")}</p>
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/ueber-mich#portrait"
              onClick={() => trackCTAClick("about_preview_more", "homepage_about", "link")}
              className="inline-flex items-center gap-2 text-base font-medium text-secondary underline-offset-4 hover:underline transition-colors"
            >
              {t("aboutPreview.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
