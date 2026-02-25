import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-24 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            {t("privacy.title")}
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>Willkommen bei meiner Datenschutzerklärung. Der Schutz deiner persönlichen Daten liegt mir sehr am Herzen, und ich möchte, dass du dich beim Besuch meiner Webseite fels-coach.de sicher fühlst.</p>
            <p>Deshalb erkläre ich hier transparent, welche Daten ich erhebe und wofür ich sie nutze.</p>

            <hr />

            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:</p>
            <p>
              Jona Fels – Systemisches Coaching & Familienaufstellungen<br />
              Inhaber: Jona Fels<br />
              Egonstraße 91<br />
              79106 Freiburg<br />
              E-Mail: <a href="mailto:info@fels-coach.de">info@fels-coach.de</a>
            </p>

            <hr />

            <h2>2. Allgemeine Informationen zur Datenverarbeitung</h2>
            <p>Ich behandle deine Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO). Personenbezogene Daten sind alle Informationen, die sich auf dich als Person beziehen, wie Name, Adresse oder deine E-Mail-Adresse.</p>
            <p>Meine Webseite nutzt eine SSL- bzw. TLS-Verschlüsselung, die man am "https://" in der Adresszeile erkennt.</p>

            <hr />

            <h2>3. Deine Rechte als Betroffener</h2>
            <p>Du hast jederzeit folgende Rechte bezüglich deiner personenbezogenen Daten:</p>
            <ul>
              <li><strong>Auskunftsrecht (Art. 15 DSGVO)</strong></li>
              <li><strong>Berichtigungsrecht (Art. 16 DSGVO)</strong></li>
              <li><strong>Löschungsrecht (Art. 17 DSGVO)</strong></li>
              <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong></li>
              <li><strong>Datenübertragbarkeit (Art. 20 DSGVO)</strong></li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO)</strong></li>
            </ul>
            <p>Kontaktiere mich unter <a href="mailto:info@fels-coach.de">info@fels-coach.de</a>.</p>

            <h3>Beschwerderecht bei der Aufsichtsbehörde</h3>
            <p>
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
              Lautenschlagerstraße 20, 70173 Stuttgart<br />
              <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">www.baden-wuerttemberg.datenschutz.de</a>
            </p>

            <hr />

            <h2>4. Datenverarbeitung auf meiner Webseite</h2>

            <h3>Server-Logfiles</h3>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: 7 Tage.</p>

            <h3>Cookies</h3>
            <p>Notwendige Cookies (Art. 6 Abs. 1 lit. f DSGVO) und Analyse-Cookies nur mit Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>

            <hr />

            <h2>5. E-Book Download</h2>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Daten werden nach Versand gelöscht.</p>

            <hr />

            <h2>6. Kontaktaufnahme</h2>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Speicherdauer: max. 3 Jahre.</p>

            <hr />

            <h2>7. Externe Dienste</h2>
            <h3>Google Analytics 4</h3>
            <p>Anbieter: Google Ireland Limited. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>

            <h3>E-Mail-Versand (Resend)</h3>
            <p>Anbieter: Resend, Inc., USA. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>

            <h3>Datenbank und Backend (Supabase)</h3>
            <p>Anbieter: Supabase, Inc., USA. Rechtsgrundlage: Art. 6 Abs. 1 lit. b/f DSGVO.</p>

            <h3>KI-Chatbot (Chatbase)</h3>
            <p>Anbieter: Chatbase, Inc., USA. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>

            <h3>Terminbuchung (Orbnet)</h3>
            <p>Anbieter: orbnet GmbH, Deutschland. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>

            <hr />

            <h2>8. Datenübermittlung in Drittländer</h2>
            <p>EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.</p>

            <hr />

            <h2>9. Speicherdauer im Überblick</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium">Datenart</th>
                    <th className="text-left py-2 font-medium">Speicherdauer</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Server-Logfiles</td><td className="py-2">7 Tage</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">E-Book-Anfragen</td><td className="py-2">Nach Versand gelöscht</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Kontaktanfragen</td><td className="py-2">Max. 3 Jahre</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Rückruf-Anfragen</td><td className="py-2">Max. 3 Jahre</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Terminbuchungen</td><td className="py-2">6 Monate nach Termin</td></tr>
                  <tr><td className="py-2 pr-4">Buchhaltungsrelevante Daten</td><td className="py-2">10 Jahre</td></tr>
                </tbody>
              </table>
            </div>

            <hr />

            <h2>10. Aktualität</h2>
            <p><strong>Stand: Februar 2026</strong></p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Datenschutz;
