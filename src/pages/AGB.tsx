import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const AGB = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            {t("terms.title")}
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>Klienteninformation</h2>
            <p>Mir ist es wichtig, dass du dich von Anfang an gut informiert fühlst – auch was die Rahmenbedingungen unserer Zusammenarbeit betrifft. Deshalb findest du hier alles Wesentliche übersichtlich zusammengefasst.</p>

            <h3>1. Geltungsbereich</h3>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Vereinbarungen zwischen Jona Fels – Fels-Coach (nachfolgend „Coach") und dir als Klient:in. Sie bilden die Grundlage unserer Zusammenarbeit, sofern wir nicht individuell etwas anderes schriftlich vereinbaren.</p>

            <h3>2. Leistungsangebot & Abgrenzung zur Therapie</h3>
            <p>Ich biete systemisches Coaching und Familienaufstellungen an. Dabei geht es darum, dir einen geschützten Raum zu geben, in dem du Klarheit über deine Themen gewinnen kannst – sei es in familiären Zusammenhängen, persönlichen Entscheidungen oder inneren Prozessen.</p>
            <p><strong>Wichtiger Hinweis:</strong> Mein Coaching ist keine Psychotherapie und ersetzt keine ärztliche oder psychiatrische Behandlung. Wenn du dich aktuell in einer psychischen Krise befindest oder in therapeutischer Behandlung bist, sprich mich bitte offen darauf an – gemeinsam schauen wir, ob und wie eine Zusammenarbeit für dich sinnvoll ist.</p>

            <h3>3. Vertragsschluss & Terminbuchung</h3>
            <p>Unsere Zusammenarbeit beginnt ganz unkompliziert: Du buchst einen Termin über mein Online-Buchungssystem, per E-Mail oder über Telegram. Mit der Buchung bzw. meiner Bestätigung kommt der Vertrag zustande.</p>

            <h3>4. Vergütung & Zahlungsbedingungen</h3>
            <p>Es gelten die Preise, die zum Zeitpunkt deiner Buchung auf meiner Webseite veröffentlicht sind. Nach der Sitzung erhältst du eine Rechnung, die innerhalb von 14 Tagen zu begleichen ist.</p>
            <p><strong>Hinweis zum Kleinunternehmerstatus:</strong> Gemäß § 19 UStG bin ich als Kleinunternehmer tätig und weise daher keine Umsatzsteuer aus. Die genannten Preise sind Endpreise.</p>

            <h3>5. Stornierungsbedingungen</h3>
            <p>Ich verstehe, dass sich Pläne ändern können. Bitte beachte dabei folgende Regelung:</p>
            <ul>
              <li>Bis <strong>24 Stunden vor dem Termin</strong> kannst du kostenfrei absagen oder verschieben.</li>
              <li>Bei späterer Absage oder Nichterscheinen berechne ich das volle Honorar als Ausfallentschädigung, da ich den Termin für dich freigehalten habe.</li>
              <li>Die Absage kann per E-Mail oder über das Buchungssystem erfolgen.</li>
            </ul>

            <h3>6. Absage durch den Coach</h3>
            <p>Sollte ich einen Termin aus wichtigem Grund (z.&nbsp;B. Krankheit) absagen müssen, biete ich dir selbstverständlich einen zeitnahen Ersatztermin an. Darüber hinausgehende Ansprüche sind ausgeschlossen.</p>

            <h3>7. Eigenverantwortung & Haftung</h3>
            <p>Im Coaching begleite ich dich mit Methoden und Impulsen – die Verantwortung für deine Entscheidungen und Handlungen liegt aber bei dir. Das ist ein wichtiger Grundsatz systemischer Arbeit: Du bist Expert:in für dein eigenes Leben.</p>
            <p>Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, sofern keine wesentlichen Vertragspflichten betroffen sind.</p>

            <h3>8. Verschwiegenheit & Datenschutz</h3>
            <p>Alles, was du mir in unseren Sitzungen anvertraust, bleibt vertraulich. Ich verpflichte mich zur absoluten Verschwiegenheit über alle Inhalte unserer Zusammenarbeit. Das ist für mich selbstverständlich und die Grundlage für einen sicheren Rahmen.</p>
            

            <h3>9. Widerrufsrecht für Verbraucher</h3>
            <p>Als Verbraucher:in steht dir ein gesetzliches Widerrufsrecht von 14 Tagen zu. Das bedeutet, du kannst den Vertrag innerhalb von 14 Tagen nach Vertragsschluss ohne Angabe von Gründen widerrufen. Der Widerruf kann formlos per E-Mail an <a href="mailto:info@fels-coach.de">info@fels-coach.de</a> erfolgen. Bitte beachte, dass das Widerrufsrecht erlischt, wenn die Sitzung vor Ablauf der Frist stattgefunden hat und du dem ausdrücklich zugestimmt hast.</p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AGB;
