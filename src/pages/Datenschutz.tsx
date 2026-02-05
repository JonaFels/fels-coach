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
      <main id="main-content" className="flex-1 py-16 md:py-24 bg-background">
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

              <h2>3. Deine Rechte als Betroffener</h2>
              <p>Du hast jederzeit folgende Rechte bezüglich deiner personenbezogenen Daten:</p>
              <ul>
                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Du kannst Auskunft über deine bei mir gespeicherten Daten verlangen.</li>
                <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Du kannst die Berichtigung unrichtiger Daten verlangen.</li>
                <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Du kannst die Löschung deiner Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Du kannst die Einschränkung der Verarbeitung deiner Daten verlangen.</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Du kannst verlangen, dass ich dir deine Daten in einem gängigen Format übermittle.</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Du kannst der Verarbeitung deiner Daten widersprechen, wenn diese auf berechtigten Interessen basiert.</li>
              </ul>
              <p>Um deine Rechte auszuüben, kontaktiere mich bitte unter <a href="mailto:info@fels-coach.de">info@fels-coach.de</a>.</p>

              <h3>Widerruf deiner Einwilligung</h3>
              <p>Sofern du mir eine Einwilligung zur Datenverarbeitung erteilt hast, kannst du diese jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.</p>

              <h3>Beschwerderecht bei der Aufsichtsbehörde</h3>
              <p>Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt, hast du das Recht, dich bei einer Aufsichtsbehörde zu beschweren. Die für mich zuständige Aufsichtsbehörde ist:</p>
              <p>
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                Lautenschlagerstraße 20<br />
                70173 Stuttgart<br />
                <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">www.baden-wuerttemberg.datenschutz.de</a>
              </p>

              <hr />

              <h2>4. Datenverarbeitung auf meiner Webseite</h2>

              <h3>Server-Logfiles</h3>
              <p>Wenn du meine Webseite besuchst, erfasst mein System automatisch technische Informationen, die dein Browser übermittelt. Das sind sogenannte Server-Logfiles, die zur Sicherstellung der Webseiten-Funktionalität und Sicherheit benötigt werden.</p>
              <ul>
                <li>Deine IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der aufgerufenen Datei</li>
                <li>Informationen zu deinem Browser und Betriebssystem</li>
              </ul>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Sicherheit und Stabilität der Webseite).</p>
              <p><strong>Speicherdauer:</strong> Diese Daten werden nach spätestens sieben Tagen automatisch gelöscht.</p>

              <h3>Cookies</h3>
              <p>Ich verwende Cookies, um die Nutzung meiner Webseite einfacher und angenehmer zu gestalten. Cookies sind kleine Textdateien, die in deinem Browser gespeichert werden.</p>
              <ul>
                <li><strong>Notwendige Cookies</strong> sind wichtig für die Grundfunktionen der Webseite. Ohne sie könnte die Seite nicht richtig funktionieren. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</li>
                <li><strong>Analyse-Cookies</strong> (z.B. für Google Analytics) nutze ich nur, wenn du dem über mein Cookie-Consent-Management-Tool zustimmst. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</li>
              </ul>
              <p>Du kannst deine Cookie-Einstellungen jederzeit über das Cookie-Symbol auf der Webseite ändern.</p>

              <hr />

              <h2>5. E-Book Download</h2>
              <p>Wenn du mein kostenloses E-Book herunterlädst, erhebe ich folgende Daten:</p>
              <ul>
                <li>Deinen Namen (optional)</li>
                <li>Deine E-Mail-Adresse (erforderlich)</li>
              </ul>
              <p><strong>Zweck:</strong> Zusendung des E-Books per E-Mail.</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung – du erhältst das gewünschte E-Book).</p>
              <p><strong>Speicherdauer:</strong> Deine Daten werden nach Versand des E-Books gelöscht, sofern du nicht separat in weitergehende Kommunikation eingewilligt hast.</p>

              <hr />

              <h2>6. Kontaktaufnahme</h2>
              <p>Wenn du mich per E-Mail, über das Kontaktformular oder das Rückruf-Formular kontaktierst, werden deine Angaben (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zur Bearbeitung deiner Anfrage verarbeitet.</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).</p>
              <p><strong>Speicherdauer:</strong> Deine Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind, spätestens jedoch nach 3 Jahren, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>

              <hr />

              <h2>7. Externe Dienste und Tools</h2>

              <h3>Google Analytics 4 (GA4)</h3>
              <p>Ich nutze Google Analytics 4, um zu verstehen, wie meine Webseite genutzt wird. So kann ich mein Angebot stetig verbessern.</p>
              <p><strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (deine Einwilligung über das Cookie-Banner).</p>
              <p><strong>Datenübermittlung in die USA:</strong> Google kann Daten in die USA übertragen. Die Übermittlung erfolgt auf Basis von EU-Standardvertragsklauseln.</p>
              <p><strong>IP-Anonymisierung:</strong> Deine IP-Adresse wird anonymisiert, bevor sie gespeichert wird.</p>
              <p>Mehr Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Datenschutzerklärung</a></p>

              <h3>E-Mail-Versand (Resend)</h3>
              <p>Für den Versand des E-Books sowie für sonstige transaktionale E-Mails nutze ich den externen Dienstleister Resend.</p>
              <p><strong>Anbieter:</strong> Resend, Inc., USA</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>
              <p><strong>Datenübermittlung in die USA:</strong> Die Übermittlung erfolgt auf Basis von EU-Standardvertragsklauseln.</p>
              <p>Mehr Informationen: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend Datenschutzerklärung</a></p>

              <h3>Datenbank und Backend (Supabase)</h3>
              <p>Zur Speicherung von Kontaktanfragen, Rückruf-Anfragen und E-Book-Anmeldungen nutze ich den Dienst Supabase.</p>
              <p><strong>Anbieter:</strong> Supabase, Inc., USA</p>
              <p><strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, Nachricht (bei Kontakt- und Rückruf-Anfragen).</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
              <p><strong>Datenübermittlung in die USA:</strong> Die Übermittlung erfolgt auf Basis von EU-Standardvertragsklauseln.</p>
              <p>Mehr Informationen: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Datenschutzerklärung</a></p>

              <h3>KI-Chatbot (Chatbase)</h3>
              <p>Auf meiner Webseite nutze ich einen KI-gestützten Chatbot von Chatbase, der dir bei Fragen zu meinen Angeboten behilflich sein kann.</p>
              <p><strong>Anbieter:</strong> Chatbase, Inc., USA</p>
              <p><strong>Verarbeitete Daten:</strong> Deine Chat-Nachrichten und ggf. weitere Informationen, die du im Chat teilst.</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (deine Einwilligung durch Nutzung des Chatbots).</p>
              <p><strong>Datenübermittlung in die USA:</strong> Die Übermittlung erfolgt auf Basis von EU-Standardvertragsklauseln.</p>
              <p>Mehr Informationen: <a href="https://www.chatbase.co/privacy-policy" target="_blank" rel="noopener noreferrer">Chatbase Datenschutzerklärung</a></p>

              <h3>Terminbuchungstool (Cal.com)</h3>
              <p>Zur Online-Terminbuchung nutze ich den Dienst Cal.com.</p>
              <p><strong>Anbieter:</strong> Cal.com, Inc., USA</p>
              <p><strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, gewählter Termin, ggf. Telefonnummer und Nachricht.</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).</p>
              <p><strong>Datenübermittlung in die USA:</strong> Die Übermittlung erfolgt auf Basis von EU-Standardvertragsklauseln.</p>
              <p>Mehr Informationen: <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">Cal.com Datenschutzerklärung</a></p>

              <hr />

              <h2>8. Datenübermittlung in Drittländer</h2>
              <p>Einige der von mir genutzten Dienste haben ihren Sitz in den USA oder anderen Ländern außerhalb der Europäischen Union. Die USA gelten als Drittland ohne angemessenes Datenschutzniveau.</p>
              <p>Ich stelle sicher, dass bei allen Übermittlungen geeignete Garantien bestehen, insbesondere durch:</p>
              <ul>
                <li>EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO</li>
                <li>Zusätzliche technische und organisatorische Maßnahmen</li>
              </ul>

              <hr />

              <h2>9. Speicherdauer im Überblick</h2>
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                  <tr>
                    <th style={{textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px'}}>Datenart</th>
                    <th style={{textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px'}}>Speicherdauer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>Server-Logfiles</td>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>7 Tage</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>E-Book-Anfragen</td>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>Nach Versand gelöscht</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>Kontaktanfragen</td>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>Max. 3 Jahre</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>Rückruf-Anfragen</td>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>Max. 3 Jahre</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>Terminbuchungen</td>
                    <td style={{padding: '8px', borderBottom: '1px solid #eee'}}>6 Monate nach Termin</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px'}}>Buchhaltungsrelevante Daten</td>
                    <td style={{padding: '8px'}}>10 Jahre (gesetzliche Pflicht)</td>
                  </tr>
                </tbody>
              </table>

              <hr />

              <h2>10. Aktualität der Datenschutzerklärung</h2>
              <p>Diese Datenschutzerklärung ist aktuell gültig. Ich behalte mir vor, diese Erklärung bei Bedarf anzupassen. Die neueste Version findest du immer auf dieser Webseite.</p>
              <p><strong>Stand: Januar 2025</strong></p>
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
