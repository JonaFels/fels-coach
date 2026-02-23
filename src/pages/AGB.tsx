import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const AGB = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24 md:py-36 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-16">
            {t("terms.title")}
          </h1>

          <Card>
            <CardContent className="pt-8 prose prose-slate dark:prose-invert max-w-none">
              <h2>Allgemeine Geschäftsbedingungen (AGB) & Klienteninformation</h2>

              <h3>1. Geltungsbereich</h3>
              <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Jona Fels – Fels-Coach (nachfolgend „Coach") und seinen Klienten (nachfolgend „Klient"), sofern nichts anderes schriftlich vereinbart wurde. Mit der Buchung einer Leistung (online, telefonisch oder per E-Mail) erkennt der Klient diese AGB an.</p>

              <h3>2. Leistungsangebot & Abgrenzung zur Therapie</h3>
              <p>Der Coach bietet psychologische Beratung, systemisches Coaching und Familienaufstellungen an.</p>
              <p><strong>Wichtiger Hinweis:</strong> Das Coaching ist keine Psychotherapie und ersetzt keine medizinische oder psychiatrische Behandlung. Der Coach stellt keine Diagnosen und gibt keine Heilversprechen ab.</p>
              <p>Die Teilnahme setzt eine normale psychische und physische Belastbarkeit voraus. Klienten, die sich in psychiatrischer Behandlung befinden, sind verpflichtet, dies vorab mitzuteilen.</p>

              <h3>3. Vertragsschluss & Terminbuchung</h3>
              <p>Ein Vertrag kommt durch die Buchung eines Termins über das Online-Tool (z.&nbsp;B. Orbnet/Cal.com), per E-Mail oder durch schriftliche Bestätigung eines Angebots zustande.</p>
              <p>Bei Buchungen über externe Tools gelten ergänzend deren Nutzungsbedingungen, wobei diese AGB im Verhältnis zwischen Coach und Klient vorrangig sind.</p>

              <h3>4. Vergütung & Zahlungsbedingungen</h3>
              <ul>
                <li>Es gelten die zum Zeitpunkt der Buchung auf der Webseite <a href="https://www.fels-coach.de" target="_blank" rel="noopener noreferrer">fels-coach.de</a> veröffentlichten Preise.</li>
                <li>Das Honorar ist, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig.</li>
                <li><strong>Kleinunternehmerstatus:</strong> Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und folglich auch nicht auf der Rechnung ausgewiesen.</li>
              </ul>

              <h3>5. Stornierungsbedingungen (Absagen durch den Klienten)</h3>
              <ul>
                <li>Ein vereinbarter Termin kann bis zu <strong>24 Stunden</strong> vor Beginn kostenfrei abgesagt oder verschoben werden.</li>
                <li>Bei Absagen weniger als 24 Stunden vor dem Termin oder bei Nichterscheinen wird das Honorar in voller Höhe (100 %) als Ausfallentschädigung fällig, da der Termin kurzfristig nicht neu belegt werden kann.</li>
                <li>Die Absage muss schriftlich (E-Mail) oder über das Buchungssystem erfolgen.</li>
              </ul>

              <h3>6. Absage durch den Coach</h3>
              <p>Sollte der Coach einen Termin aus wichtigem Grund (z.&nbsp;B. Krankheit, höhere Gewalt) absagen müssen, wird der Klient schnellstmöglich informiert. In diesem Fall wird ein Ersatztermin vereinbart. Weitergehende Ansprüche (z.&nbsp;B. Reisekosten) sind ausgeschlossen.</p>

              <h3>7. Eigenverantwortung & Haftung</h3>
              <ul>
                <li>Das Coaching basiert auf Kooperation und gegenseitigem Vertrauen. Der Erfolg hängt maßgeblich von der Mitarbeit des Klienten ab.</li>
                <li>Der Klient trägt die volle Verantwortung für seine Handlungen und Entscheidungen während und nach den Sitzungen.</li>
                <li>Die Haftung des Coaches für leichte Fahrlässigkeit wird ausgeschlossen. Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.</li>
              </ul>

              <h3>8. Verschwiegenheit & Datenschutz</h3>
              <ul>
                <li>Der Coach verpflichtet sich zur absoluten Verschwiegenheit über alle im Rahmen des Coachings besprochenen Inhalte.</li>
                <li>Personenbezogene Daten werden ausschließlich zur Vertragserfüllung gespeichert und verarbeitet. Details regelt die <a href="/datenschutz">Datenschutzerklärung</a>.</li>
              </ul>

              <h3>9. Widerrufsrecht für Verbraucher</h3>
              <p>Klienten, die Verbraucher sind, steht ein gesetzliches 14-tägiges Widerrufsrecht zu.</p>
              <p><strong>Besonderer Hinweis:</strong> Wenn der Klient wünscht, dass die Dienstleistung bereits innerhalb der 14-tägigen Widerrufsfrist beginnt (z.&nbsp;B. bei kurzfristigen Terminen), verzichtet er bei vollständiger Erbringung der Leistung auf sein Widerrufsrecht.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AGB;
