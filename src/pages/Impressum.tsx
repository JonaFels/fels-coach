import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            {t("imprint.title")}
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h3>{t("imprint.according")}</h3>
            <p>
              Jona Fels<br />
              {t("imprint.address")}<br />
              Egonstraße 91<br />
              79106 Freiburg
            </p>

            <h3>{t("imprint.contactHeading")}</h3>
            <p>
              {t("imprint.phone")}: 0176 67608617<br />
              E-Mail: <a href="mailto:jona@fels-coach.de">jona@fels-coach.de</a>
            </p>

            <h3>{t("imprint.vatHeading")}</h3>
            <p>
              {t("imprint.vatText")}<br />
              DE460965814
            </p>

            <h3>{t("imprint.insuranceHeading")}</h3>
            <p>
              {t("imprint.insuranceName")}<br />
              Continentale Sachversicherung AG<br />
              Sitz der Gesellschaft: Dortmund<br />
              {t("imprint.insuranceNumber")} 536387517<br />
              {t("imprint.insuranceScope")}
            </p>

            <h3>{t("imprint.editorialHeading")}</h3>
            <p>
              Jona Fels<br />
              Egonstraße 91<br />
              79106 Freiburg
            </p>

            <h3>{t("imprint.disputeHeading")}</h3>
            <p>
              {t("imprint.disputeText")}<br />
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a><br />
              {t("imprint.disputeEmail")}
            </p>

            <h3>{t("imprint.arbitrationHeading")}</h3>
            <p>{t("imprint.arbitrationText")}</p>

            <h3>{t("imprint.coachingHeading")}</h3>
            <p>{t("imprint.coachingText")}</p>

            <h3>{t("imprint.scopeHeading")}</h3>
            <p>{t("imprint.scopeText")}</p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Impressum;
