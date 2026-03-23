import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-16 md:py-20">
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
            <p>Beim Besuch meiner Webseite werden automatisch technische Daten erhoben, die dein Browser übermittelt – z.&nbsp;B. IP-Adresse, Browsertyp, Betriebssystem, die aufgerufene Seite und der Zeitpunkt des Zugriffs. Diese Daten sind notwendig, um die Webseite technisch bereitzustellen und die Sicherheit zu gewährleisten. Sie werden nicht mit anderen Daten zusammengeführt.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: 7 Tage.</p>

            <h3>Cookies</h3>
            <p>Meine Webseite verwendet technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind (z.&nbsp;B. für die Sprachauswahl oder den Cookie-Banner-Status). Analyse-Cookies, die dein Nutzungsverhalten auswerten, werden nur gesetzt, wenn du dem über den Cookie-Banner ausdrücklich zustimmst. Du kannst deine Einwilligung jederzeit widerrufen.</p>
            <p>Rechtsgrundlage: Notwendige Cookies – Art. 6 Abs. 1 lit. f DSGVO; Analyse-Cookies – Art. 6 Abs. 1 lit. a DSGVO.</p>

            <hr />

            <h2>5. E-Book Download</h2>
            <p>Wenn du mein kostenloses E-Book herunterlädst, gibst du deinen Namen und deine E-Mail-Adresse an. Diese Daten verwende ich ausschließlich, um dir das E-Book per E-Mail zuzusenden. Nach dem erfolgreichen Versand werden die Daten gelöscht und nicht für weitere Zwecke wie Newsletter oder Marketing verwendet.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>

            <hr />

            <h2>6. Kontaktaufnahme</h2>
            <p>Wenn du mich über das Kontaktformular, per E-Mail oder über Telegram kontaktierst, werden die von dir mitgeteilten Daten (Name, E-Mail-Adresse, Nachrichteninhalt) gespeichert, um deine Anfrage zu bearbeiten und bei Rückfragen antworten zu können. Die Daten werden nicht ohne deine Einwilligung an Dritte weitergegeben und nach Abschluss der Kommunikation bzw. spätestens nach 3 Jahren gelöscht – es sei denn, gesetzliche Aufbewahrungspflichten stehen dem entgegen.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>

            <hr />

            <h2>7. Externe Dienste</h2>
            <p>Für bestimmte Funktionen meiner Webseite nutze ich externe Dienstleister. Im Folgenden erkläre ich, welche Dienste eingesetzt werden, wozu sie dienen und auf welcher Rechtsgrundlage die Datenverarbeitung erfolgt.</p>

            <h3>Google Analytics 4</h3>
            <p>Zur Auswertung der Webseitennutzung verwende ich Google Analytics 4. Dabei werden pseudonymisierte Nutzungsdaten (z.&nbsp;B. besuchte Seiten, Verweildauer, Gerätetyp) erhoben, um mein Angebot zu verbessern. Die Datenverarbeitung erfolgt ausschließlich nach deiner Einwilligung über den Cookie-Banner. Du kannst die Einwilligung jederzeit widerrufen.</p>
            <p>Anbieter: Google Ireland Limited. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>

            <h3>E-Mail-Versand (Resend)</h3>
            <p>Für den Versand von E-Mails (z.&nbsp;B. E-Book-Zustellung, Kontaktformular-Bestätigungen) nutze ich den Dienst Resend. Dabei werden dein Name und deine E-Mail-Adresse an Resend übermittelt, soweit dies zur Vertragserfüllung erforderlich ist.</p>
            <p>Anbieter: Resend, Inc., USA. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>

            <h3>Datenbank und Backend</h3>
            <p>Kontaktanfragen und Formulardaten werden in einer sicheren Datenbank gespeichert, um deine Anfragen zuverlässig bearbeiten zu können. Die Daten werden verschlüsselt übertragen und nur für den angegebenen Zweck verwendet.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b/f DSGVO.</p>

            <h3>KI-Chatbot (Chatbase)</h3>
            <p>Auf meiner Webseite steht dir ein KI-gestützter Chatbot zur Verfügung, der häufig gestellte Fragen beantwortet. Der Chatbot wird nur geladen, wenn du ihn aktiv öffnest. Dabei können eingegebene Nachrichten an den Anbieter übermittelt werden.</p>
            <p>Anbieter: Chatbase, Inc., USA. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>

            <h3>Terminbuchung (Orbnet)</h3>
            <p>Für die Online-Terminbuchung nutze ich den deutschen Anbieter Orbnet. Wenn du einen Termin buchst, werden die von dir eingegebenen Daten (Name, E-Mail, gewünschter Termin) an Orbnet übermittelt und dort verarbeitet.</p>
            <p>Anbieter: orbnet GmbH, Deutschland. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>

            <hr />

            <h2>8. Datenübermittlung in Drittländer</h2>
            <p>Einige der genannten Dienstleister haben ihren Sitz in den USA. Die Datenübermittlung erfolgt auf Grundlage von EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO, die ein angemessenes Datenschutzniveau sicherstellen.</p>

            <hr />

            <h2>9. Aktualität</h2>
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
