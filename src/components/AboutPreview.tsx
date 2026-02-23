import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

export const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 md:py-44 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={profilBild}
                alt="Jona Fels – Systemischer Coach in Freiburg"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover object-center shadow-lg"
                loading="lazy"
                width="384"
                height="384"
              />
            </div>

            {/* Right: Text */}
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                {t("aboutPreview.title")}
              </h2>
              <h3 className="font-serif text-lg md:text-xl text-muted-foreground mb-8">
                Systemischer Coach in Freiburg
              </h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
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
        </div>
      </div>
    </section>
  );
};
