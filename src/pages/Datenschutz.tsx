import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            {t("privacy.title")}
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>{t("privacy.intro")}</p>

            <hr />

            <h2>{t("privacy.s1.heading")}</h2>
            <p>{t("privacy.s1.intro")}</p>
            <p>
              Jona Fels – {t("imprint.address")}<br />
              {t("privacy.s1.owner")}<br />
              Egonstraße 91<br />
              79106 Freiburg<br />
              E-Mail: <a href="mailto:info@fels-coach.de">info@fels-coach.de</a>
            </p>

            <hr />

            <h2>{t("privacy.s2.heading")}</h2>
            <p>{t("privacy.s2.p1")}</p>
            <p>{t("privacy.s2.p2")}</p>

            <hr />

            <h2>{t("privacy.s3.heading")}</h2>
            <p>{t("privacy.s3.intro")}</p>
            <ul>
              <li><strong>{language === "de" ? "Auskunftsrecht (Art. 15 DSGVO):" : "Right of access (Art. 15 GDPR):"}</strong> {t("privacy.s3.access")}</li>
              <li><strong>{language === "de" ? "Berichtigungsrecht (Art. 16 DSGVO):" : "Right to rectification (Art. 16 GDPR):"}</strong> {t("privacy.s3.rectification")}</li>
              <li><strong>{language === "de" ? "Löschungsrecht (Art. 17 DSGVO):" : "Right to erasure (Art. 17 GDPR):"}</strong> {t("privacy.s3.erasure")}</li>
              <li><strong>{language === "de" ? "Einschränkung der Verarbeitung (Art. 18 DSGVO):" : "Right to restriction of processing (Art. 18 GDPR):"}</strong> {t("privacy.s3.restriction")}</li>
              <li><strong>{language === "de" ? "Datenübertragbarkeit (Art. 20 DSGVO):" : "Right to data portability (Art. 20 GDPR):"}</strong> {t("privacy.s3.portability")}</li>
              <li><strong>{language === "de" ? "Widerspruchsrecht (Art. 21 DSGVO):" : "Right to object (Art. 21 GDPR):"}</strong> {t("privacy.s3.objection")}</li>
            </ul>
            <p>{t("privacy.s3.outro")} <a href="mailto:info@fels-coach.de">info@fels-coach.de</a>. {t("privacy.s3.complaint")}</p>

            <hr />

            <h2>{t("privacy.s4.heading")}</h2>
            <p>{t("privacy.s4.p1")}</p>
            <p>{t("privacy.s4.p2")}</p>
            <p>{t("privacy.s4.p3")}</p>

            <hr />

            <h2>{t("privacy.s5.heading")}</h2>
            <p>{t("privacy.s5.p1")}</p>
            <p>{t("privacy.s5.p2")}</p>
            <p>{t("privacy.s5.p3")}</p>

            <hr />

            <h2>{t("privacy.s6.heading")}</h2>
            <p>{t("privacy.s6.p1")}</p>
            <p>{t("privacy.s6.p2")}</p>
            <p>{t("privacy.s6.p3")}</p>

            <hr />

            <h2>{t("privacy.s7.heading")}</h2>
            <p>{t("privacy.s7.p1")}</p>
            <p>{t("privacy.s7.p2")}</p>

            <hr />

            <h2>{t("privacy.s8.heading")}</h2>
            <p>{t("privacy.s8.p1")}</p>
            <p>{t("privacy.s8.p2")}</p>

            <hr />

            <h2>{t("privacy.s9.heading")}</h2>
            <p>{t("privacy.s9.p1")}</p>
            <p><strong>{language === "de" ? "Besonderer Schutz von Gesundheitsdaten:" : "Special protection of health data:"}</strong> {t("privacy.s9.p2")}</p>
            <p>{t("privacy.s9.p3")}</p>

            <hr />

            <h2>{t("privacy.s10.heading")}</h2>
            <p>{t("privacy.s10.p1")}</p>
            <p>{t("privacy.s10.p2")}</p>

            <hr />

            <h2>{t("privacy.s11.heading")}</h2>
            <p>{t("privacy.s11.text")}</p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Datenschutz;
