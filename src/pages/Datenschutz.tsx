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
            <p>Willkommen bei meiner Datenschutzerklärung. Der Schutz deiner persönlichen Daten liegt mir sehr am Herzen. Ich möchte, dass du dich beim Besuch meiner Webseite fels-coach.de absolut sicher fühlst. Deshalb erkläre ich dir hier transparent, verständlich und ohne kompliziertes Fachchinesisch, welche Daten ich erhebe, wofür ich sie nutze und welche Rechte du hast.</p>

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
            <p>Ich behandle deine Daten streng vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften, insbesondere der europäischen Datenschutz-Grundverordnung (DSGVO). Personenbezogene Daten sind alle Informationen, die sich auf dich als Person beziehen lassen (z.&nbsp;B. Name, E-Mail-Adresse oder IP-Adresse).</p>
            <p>Um deine Daten bei der Übertragung zu schützen, nutzt diese Webseite eine SSL- bzw. TLS-Verschlüsselung. Du erkennst dies an dem "https://" und dem Schloss-Symbol in der Adresszeile deines Browsers. Mit allen externen Dienstleistern, die Daten in meinem Auftrag verarbeiten, habe ich sogenannte Auftragsverarbeitungsverträge (AVV) geschlossen, um den Schutz deiner Daten gesetzlich abzusichern.</p>

            <hr />

            <h2>3. Deine Rechte als Betroffener</h2>
            <p>Du hast jederzeit das Recht, die Kontrolle über deine Daten zu behalten. Deine Rechte umfassen:</p>
            <ul>
              <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Du kannst erfragen, welche Daten ich von dir verarbeite.</li>
              <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Du kannst die Korrektur falscher Daten verlangen.</li>
              <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Du kannst die Löschung deiner Daten verlangen, sofern keine gesetzlichen Aufbewahrungsfristen dagegen sprechen.</li>
              <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Du kannst die Sperrung deiner Daten verlangen.</li>
              <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Du kannst deine Daten in einem gängigen Format anfordern.</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Du kannst der Verarbeitung deiner Daten widersprechen.</li>
            </ul>
            <p>Um eines dieser Rechte auszuüben, schreib mir einfach eine E-Mail an <a href="mailto:info@fels-coach.de">info@fels-coach.de</a>. Zudem hast du das Recht, dich bei einer Aufsichtsbehörde zu beschweren, zum Beispiel beim Landesbeauftragten für den Datenschutz Baden-Württemberg.</p>

            <hr />

            <h2>4. Hosting und Server-Logfiles</h2>
            <p>Meine Webseite wird von dem Anbieter Vercel, Inc. (USA) gehostet. Bei jedem Aufruf der Webseite erfasst das System automatisch Daten, die dein Browser übermittelt (Server-Logfiles). Dazu gehören: IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs sowie die aufgerufene Seite.</p>
            <p>Diese Daten sind technisch zwingend notwendig, um dir die Webseite fehlerfrei anzuzeigen und die Sicherheit der Systeme zu gewährleisten. Sie werden nicht mit anderen Datenquellen zusammengeführt.</p>
            <p>Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Speicherdauer: In der Regel 7 Tage.</p>

            <hr />

            <h2>5. Cookies und Webanalyse (Google Analytics 4)</h2>
            <p>Meine Webseite verwendet technisch notwendige Cookies, die für den Betrieb der Seite unerlässlich sind (z.&nbsp;B. für das Speichern deiner Cookie-Einstellungen).</p>
            <p>Zur Verbesserung meines Angebots nutze ich zudem Google Analytics 4 (Anbieter: Google Ireland Limited). Hierbei werden pseudonymisierte Nutzungsdaten (z.&nbsp;B. besuchte Seiten, Verweildauer) erhoben. Analyse-Cookies werden nur gesetzt, wenn du dem über den Cookie-Banner ausdrücklich zustimmst. Du kannst deine Einwilligung jederzeit über die Einstellungen widerrufen.</p>
            <p>Rechtsgrundlage: Notwendige Cookies über berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO); Analytics über deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>

            <hr />

            <h2>6. Kontaktaufnahme, Kontaktformular &amp; Datenbank (Lovable)</h2>
            <p>Wenn du mich über das Kontaktformular, per E-Mail oder über Telegram kontaktierst, speichere ich deine Angaben (Name, E-Mail-Adresse, Inhalt der Nachricht), um deine Anfrage zu beantworten.</p>
            <p>Die Daten aus dem Kontaktformular werden über die Plattform Lovable (Lovable AB, Schweden) verarbeitet, die als technische Infrastruktur für die Datenbank Supabase, Inc. (USA) einsetzt. Für den eigentlichen E-Mail-Versand nutze ich den Dienst Resend, Inc. (USA). Bei der Nutzung von Telegram weise ich darauf hin, dass Daten auf den Servern des Anbieters (ggf. außerhalb der EU) verarbeitet werden.</p>
            <p>Rechtsgrundlage: Anbahnung oder Erfüllung eines Vertrages (Art. 6 Abs. 1 lit. b DSGVO) sowie berechtigtes Interesse an der Kommunikation (Art. 6 Abs. 1 lit. f DSGVO).</p>

            <hr />

            <h2>7. KI-Chatbot (Chatbase)</h2>
            <p>Für schnelle Antworten auf häufige Fragen biete ich einen KI-gestützter Chatbot von Chatbase, Inc. (USA) an. Der Chatbot wird erst aktiv, wenn du ihn nutzt. Bitte gib in den Chat keine sensiblen persönlichen Daten (wie z.&nbsp;B. gesundheitliche Details) ein. Deine Eingaben werden zur Verarbeitung der Antwort an den Anbieter übermittelt.</p>
            <p>Rechtsgrundlage: Deine Einwilligung durch Nutzung des Chats (Art. 6 Abs. 1 lit. a DSGVO).</p>

            <hr />

            <h2>8. Kostenloses E-Book</h2>
            <p>Wenn du mein kostenloses E-Book anforderst, speichere ich deinen Namen und deine E-Mail-Adresse über die Plattform Lovable (Lovable AB, Schweden) und nutze den Dienst Resend, um dir das E-Book zuzusenden. Die Daten werden ausschließlich für diese Zustellung verwendet. Wenn du keinen weiteren Kontakt wünschst, werden die Daten nach dem Versand gelöscht und nicht für Werbezwecke missbraucht.</p>
            <p>Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).</p>

            <hr />

            <h2>9. Terminbuchung und Anamnese (Orbnet)</h2>
            <p>Für die einfache Online-Terminbuchung nutze ich den deutschen Anbieter orbnet GmbH. Wenn du einen Termin buchst, werden deine angegebenen Kontaktdaten an Orbnet übermittelt.</p>
            <p><strong>Besonderer Schutz von Gesundheitsdaten:</strong> Wenn du bei der Terminbuchung im Formular vorab Anamnesefragen beantwortest, die deine psychische oder physische Gesundheit betreffen, handelt es sich um besonders schützenswerte Daten. Diese verarbeite ich streng vertraulich und ausschließlich zur optimalen Vorbereitung auf unser Coaching.</p>
            <p>Rechtsgrundlage: Für die Buchung: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Für die Anamnesedaten: Deine ausdrückliche Einwilligung (Art. 9 Abs. 2 lit. a DSGVO), die du bei der Eingabe der Daten erteilst.</p>

            <hr />

            <h2>10. Buchhaltung und Finanzen (Lexoffice)</h2>
            <p>Um meine steuerlichen und buchhalterischen Pflichten zu erfüllen, nutze ich die Software lexoffice (Haufe-Lexware GmbH &amp; Co. KG, Deutschland). Wenn es zu einer kostenpflichtigen Coaching-Zusammenarbeit kommt, werden deine rechnungsrelevanten Daten (Name, Adresse, Betrag) dort verarbeitet und entsprechend der gesetzlichen Aufbewahrungsfristen (in der Regel 10 Jahre) gespeichert.</p>
            <p>Rechtsgrundlage: Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO).</p>

            <hr />

            <h2>11. Datenübermittlung in Drittländer (USA)</h2>
            <p>Einige der von mir eingesetzten Dienstleister (oder deren Unterauftragnehmer wie bei Supabase) haben ihren Hauptsitz in den USA (z.&nbsp;B. Google, Vercel, Resend, Chatbase). Wenn Daten in die USA übertragen werden, stütze ich mich auf den Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework) für zertifizierte Unternehmen. Sollte ein Unternehmen nicht zertifiziert sein, nutze ich hilfsweise EU-Standardvertragsklauseln (SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO, um ein Datenschutzniveau zu gewährleisten, das dem europäischen Standard entspricht. Die Plattform Lovable (Lovable AB) hat ihren Sitz in Schweden und unterliegt somit direkt der europäischen DSGVO.</p>

          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Datenschutz;
