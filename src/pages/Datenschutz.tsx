import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("privacy.title")}
          </h1>

          <Card>
            <CardContent className="pt-8 prose prose-slate dark:prose-invert max-w-none">
              <p>Willkommen bei meiner Datenschutzerklärung. Der Schutz deiner persönlichen Daten liegt mir sehr am Herzen, und ich möchte, dass du dich beim Besuch meiner Webseite fels-coach.de sicher fühlst.</p>
              <p>Deshalb erkläre ich hier transparent, welche Daten ich erhebe und wofür ich sie nutze. Es ist mir wichtig, dass du nicht nur die rechtlichen Bestimmungen verstehst, sondern auch, warum ich bestimmte Informationen benötige, um den bestmöglichen Service anzubieten.</p>

              <hr />

              <h2>1. Verantwortlicher</h2>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:</p>
              <p>
                Jona Fels<br />
                Egonstraße 91<br />
                79106 Freiburg<br />
                E-Mail: <a href="mailto:info@fels-coach.de">info@fels-coach.de</a>
              </p>

              <hr />

              <h2>2. Allgemeine Informationen zur Datenverarbeitung</h2>
              <p>Ich behandle deine Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO). Personenbezogene Daten sind alle Informationen, die sich auf dich als Person beziehen, wie Name, Adresse oder deine E-Mail-Adresse.</p>
              <p>Meine Webseite nutzt eine SSL- bzw. TLS-Verschlüsselung, die man am "https://" in der Adresszeile erkennt. Das schützt die Daten, die du an mich sendest.</p>

              <hr />

              <h2>3. Datenverarbeitung auf meiner Webseite</h2>

              <h3>Server-Logfiles</h3>
              <p>Wenn du meine Webseite besuchst, erfasst mein System automatisch technische Informationen, die dein Browser übermittelt. Das sind sogenannte Server-Logfiles, die zur Sicherstellung der Webseiten-Funktionalität und Sicherheit benötigt werden.</p>
              <ul>
                <li>Ihre IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der aufgerufenen Datei</li>
                <li>Informationen zu Ihrem Browser und Betriebssystem</li>
              </ul>
              <p>Diese automatisch erhobenen Daten dienen der Optimierung meiner Webseite und dem Schutz vor Angriffen. Sie werden nach spätestens sieben Tagen gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>

              <h3>Cookies</h3>
              <p>Ich verwende Cookies, um die Nutzung meiner Webseite einfacher und angenehmer zu gestalten. Cookies sind kleine Textdateien, die in deinem Browser gespeichert werden.</p>
              <ul>
                <li>Notwendige Cookies sind wichtig für die Grundfunktionen der Webseite. Ohne sie könnte die Seite nicht richtig funktionieren.</li>
                <li>Andere Cookies, zum Beispiel für die Webseiten-Analyse, nutze ich nur, wenn du dem über mein Cookie-Consent-Management-Tool zustimmst.</li>
              </ul>

              <hr />

              <h2>4. Externe Dienste und Tools</h2>

              <h3>Google Analytics 4 (GA4)</h3>
              <p>Ich nutze Google Analytics 4, um zu verstehen, wie meine Webseite genutzt wird. So kann ich mein Angebot stetig verbessern. GA4 verwendet Cookies, um Daten zu sammeln, die dann an Google übertragen werden. Dabei wird deine IP-Adresse anonymisiert, bevor sie gespeichert wird.</p>

              <h3>E-Mail-Versand (Postmark)</h3>
              <p>Für den Versand des E-Books nach erfolgreicher Anmeldung sowie für sonstige transaktionale E-Mails nutze ich den externen Dienstleister Postmark (Acorn Technologies, Inc., USA).</p>

              <h3>Terminbuchungstool (Acuity Scheduling)</h3>
              <p>Zur Online-Terminbuchung nutze ich den externen Dienst Acuity Scheduling (Squarespace Ireland Ltd., Irland). Wenn du einen Termin buchst, verarbeitet Acuity in meinem Auftrag deine Daten.</p>

              <hr />

              <h2>5. Aktualität der Datenschutzerklärung</h2>
              <p>Diese Datenschutzerklärung ist aktuell gültig. Ich behalte mir vor, diese Erklärung bei Bedarf anzupassen. Die neueste Version findest du immer auf dieser Webseite.</p>
              <p>Stand: Januar 2025</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Datenschutz;
