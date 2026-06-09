import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const AGB = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-24 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            {t("terms.title")}
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>{t("terms.clientInfo")}</h2>
            <p>{t("terms.intro")}</p>

            <h3>{t("terms.s1.heading")}</h3>
            <p>{t("terms.s1.text")}</p>

            <h3>{t("terms.s2.heading")}</h3>
            <p>{t("terms.s2.p1")}</p>
            <p><strong>{t("terms.s2.heading").includes("Abgrenzung") ? "Wichtiger Hinweis:" : "Important note:"}</strong> {t("terms.s2.p2")}</p>

            <h3>{t("terms.s3.heading")}</h3>
            <p>{t("terms.s3.text")}</p>

            <h3>{t("terms.s4.heading")}</h3>
            <p>{t("terms.s4.p1")}</p>
            <p><strong>{t("terms.s4.heading").includes("Vergütung") ? "Hinweis zum Kleinunternehmerstatus:" : "Small business notice:"}</strong> {t("terms.s4.p2")}</p>

            <h3>{t("terms.s5.heading")}</h3>
            <p>{t("terms.s5.intro")}</p>
            <ul>
              <li><strong>{t("terms.s5.li1")}</strong></li>
              <li>{t("terms.s5.li2")}</li>
              <li><strong>{t("terms.s5.heading").includes("Stornierung") ? "Gesetzlicher Hinweis:" : "Legal notice:"}</strong> {t("terms.s5.li3")}</li>
              <li>{t("terms.s5.li4")}</li>
            </ul>

            <h3>{t("terms.s6.heading")}</h3>
            <p>{t("terms.s6.text")}</p>

            <h3>{t("terms.s7.heading")}</h3>
            <p>{t("terms.s7.p1")}</p>
            <p>{t("terms.s7.p2")}</p>

            <h3>{t("terms.s8.heading")}</h3>
            <p>{t("terms.s8.text")} {t("terms.s8.privacyLink")} <Link to="/datenschutz" className="underline hover:text-secondary">{t("terms.s8.privacyLinkText")}</Link>.</p>

            <h3>{t("terms.s9.heading")}</h3>
            <p>{t("terms.s9.p1")} <a href="mailto:jona@fels-coach.de" className="underline hover:text-secondary">jona@fels-coach.de</a>).</p>
            <p><strong>{t("terms.s9.heading").includes("Widerruf") ? "Wichtiger Hinweis zum vorzeitigen Erlöschen:" : "Important notice on early expiration:"}</strong> {t("terms.s9.p2")}</p>

            <h3>{t("terms.s10.heading")}</h3>
            <p>{t("terms.s10.text")}</p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AGB;
