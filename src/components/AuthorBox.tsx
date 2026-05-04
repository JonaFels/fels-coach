import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

export const AuthorBox = () => {
  const { t } = useLanguage();

  return (
    <Card className="bg-card/95 backdrop-blur-sm mt-12">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <Link to="/ueber-mich" className="flex-shrink-0">
            <img
              src={profilBild}
              alt="Jona Fels - Systemischer Coach und Prozessbegleiter in Freiburg"
              className="w-24 h-24 rounded-full object-cover object-center border-2 border-secondary/30 hover:border-secondary transition-colors"
              loading="lazy"
            />
          </Link>
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
              {t("author.writtenBy")}
            </p>
            <Link to="/ueber-mich" className="hover:text-secondary transition-colors">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Jona Fels
              </h3>
            </Link>
            <p className="text-sm text-secondary font-medium mt-1">
              {t("author.title")}
            </p>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-lg">
              {t("author.bio")}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start items-center">
              <span className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                {t("author.credential1")}
              </span>
              <Link
                to="/impulse"
                className="inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
              >
                ✨ Impulse entdecken
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
