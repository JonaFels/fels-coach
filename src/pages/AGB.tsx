import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const AGB = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-24 md:py-36">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            {t("terms.title")}
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>Allgemeine Geschäftsbedingungen (AGB) & Klienteninformation</h2>

            <h3>1. Geltungsbereich</h3>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Jona Fels – Fels-Coach (nachfolgend „Coach") und seinen Klienten (nachfolgend „Klient"), sofern nichts anderes schriftlich vereinbart wurde.</p>

            <h3>2. Leistungsangebot & Abgrenzung zur Therapie</h3>
            <p>Der Coach bietet psychologische Beratung, systemisches Coaching und Familienaufstellungen an.</p>
            <p><strong>Wichtiger Hinweis:</strong> Das Coaching ist keine Psychotherapie und ersetzt keine medizinische oder psychiatrische Behandlung.</p>

            <h3>3. Vertragsschluss & Terminbuchung</h3>
            <p>Ein Vertrag kommt durch die Buchung eines Termins über das Online-Tool, per E-Mail oder durch schriftliche Bestätigung eines Angebots zustande.</p>

            <h3>4. Vergütung & Zahlungsbedingungen</h3>
            <ul>
              <li>Es gelten die zum Zeitpunkt der Buchung veröffentlichten Preise.</li>
              <li>Honorar ist innerhalb von 14 Tagen nach Rechnungsstellung fällig.</li>
              <li><strong>Kleinunternehmerstatus:</strong> Gemäß § 19 UStG wird keine Umsatzsteuer erhoben.</li>
            </ul>

            <h3>5. Stornierungsbedingungen</h3>
            <ul>
              <li>Kostenfreie Absage bis <strong>24 Stunden</strong> vor Beginn.</li>
              <li>Bei späterer Absage oder Nichterscheinen: 100 % Ausfallentschädigung.</li>
              <li>Absage per E-Mail oder Buchungssystem.</li>
            </ul>

            <h3>6. Absage durch den Coach</h3>
            <p>Bei Absage aus wichtigem Grund wird ein Ersatztermin vereinbart. Weitergehende Ansprüche sind ausgeschlossen.</p>

            <h3>7. Eigenverantwortung & Haftung</h3>
            <ul>
              <li>Der Klient trägt die volle Verantwortung für seine Handlungen und Entscheidungen.</li>
              <li>Haftung für leichte Fahrlässigkeit wird ausgeschlossen.</li>
            </ul>

            <h3>8. Verschwiegenheit & Datenschutz</h3>
            <ul>
              <li>Der Coach verpflichtet sich zur absoluten Verschwiegenheit.</li>
              <li>Details regelt die <a href="/datenschutz">Datenschutzerklärung</a>.</li>
            </ul>

            <h3>9. Widerrufsrecht für Verbraucher</h3>
            <p>Klienten, die Verbraucher sind, steht ein gesetzliches 14-tägiges Widerrufsrecht zu.</p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AGB;
