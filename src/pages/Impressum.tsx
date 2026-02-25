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
            <h3>Angaben gemäß § 5 DDG</h3>
            <p>
              Jona Fels – Systemisches Coaching & Familienaufstellungen<br />
              Inhaber: Jona Fels<br />
              Egonstraße 91<br />
              79106 Freiburg
            </p>

            <h3>Kontakt</h3>
            <p>
              Telefon: 0176 67608617<br />
              E-Mail: <a href="mailto:info@fels-coach.de">info@fels-coach.de</a>
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: Entfällt.<br />
              Aufgrund des Kleinunternehmerstatus gemäß § 19 UStG erhebe ich keine Umsatzsteuer.
            </p>

            <h3>Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>
              Jona Fels<br />
              Egonstraße 91<br />
              79106 Freiburg
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Impressum;
