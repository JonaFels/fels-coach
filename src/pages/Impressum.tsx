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
              Jona Fels<br />
              Systemisches Coaching & Familienaufstellungen<br />
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
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE460965814
            </p>

            <h3>Angaben zur Berufshaftpflichtversicherung</h3>
            <p>
              Name und Sitz des Versicherers:<br />
              Continentale Sachversicherung AG<br />
              Sitz der Gesellschaft: Dortmund<br />
              Räumlicher Geltungsbereich: Deutschland und europäisches Ausland
            </p>

            <h3>Verantwortlich für redaktionelle Inhalte (gem. § 18 Abs. 2 MStV)</h3>
            <p>
              Jona Fels<br />
              Egonstraße 91<br />
              79106 Freiburg
            </p>

            <h3>EU-Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a><br />
              Meine E-Mail-Adresse findest du oben im Impressum.
            </p>

            <h3>Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h3>
            <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <h3>Berufsrechtlicher Hinweis zum Coaching</h3>
            <p>Mein Angebot im Rahmen des Systemischen Coachings und der Familienaufstellungen dient der Persönlichkeitsentwicklung, der Gesundheitsprävention und der Lösungsfindung. Es stellt keine Heilbehandlung dar und ist kein Ersatz für eine medizinische, psychiatrische oder psychotherapeutische Diagnose oder Behandlung. Bei gesundheitlichen oder psychischen Beschwerden wende dich bitte an einen Arzt oder Psychotherapeuten.</p>

            <h3>Geltungsbereich</h3>
            <p>Dieses Impressum gilt auch für meine Social-Media-Präsenzen und Profile auf Drittplattformen (z.&nbsp;B. Instagram, LinkedIn).</p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Impressum;
