import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

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
            <p>Mir ist es wichtig, dass du dich von Anfang an gut und sicher informiert fühlst – auch was die Rahmenbedingungen unserer Zusammenarbeit betrifft. Deshalb findest du hier alles Wesentliche transparent und verständlich zusammengefasst.</p>

            <h3>1. Geltungsbereich</h3>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Vereinbarungen und Dienstleistungen zwischen Jona Fels – Systemisches Coaching &amp; Familienaufstellungen (nachfolgend „Coach") und dir als Klient:in. Sie bilden die vertragliche Grundlage unserer Zusammenarbeit, sofern wir nicht individuell etwas anderes schriftlich vereinbaren.</p>

            <h3>2. Leistungsangebot &amp; Abgrenzung zur Heilkunde</h3>
            <p>Ich biete systemisches Coaching und Familienaufstellungen an. Dabei geht es darum, dir einen geschützten Raum zu geben, in dem du Klarheit über deine Themen gewinnen kannst – sei es in familiären Zusammenhängen, persönlichen Entscheidungen oder inneren Prozessen.</p>
            <p><strong>Wichtiger Hinweis:</strong> Mein Coaching dient der Persönlichkeitsentwicklung und Lösungsfindung. Es ist keine Psychotherapie und ersetzt keine medizinische, ärztliche oder psychiatrische Diagnose und Behandlung. Wenn du dich aktuell in einer psychischen Krise befindest oder in therapeutischer Behandlung bist, sprich mich bitte vor der Buchung offen darauf an. Gemeinsam schauen wir, ob ein Coaching für dich sinnvoll und machbar ist.</p>

            <h3>3. Vertragsschluss &amp; Terminbuchung</h3>
            <p>Unsere Zusammenarbeit beginnt ganz unkompliziert: Du buchst einen Termin über mein Online-Buchungssystem (Orbnet), per E-Mail oder über Telegram. Mit deiner Buchung und meiner anschließenden Terminbestätigung kommt der verbindliche Vertrag zwischen uns zustande.</p>

            <h3>4. Vergütung &amp; Zahlungsbedingungen</h3>
            <p>Es gelten die Preise, die zum Zeitpunkt deiner Buchung auf meiner Webseite oder im Buchungssystem veröffentlicht sind. Nach unserer Sitzung erhältst du eine Rechnung (z.&nbsp;B. via lexoffice), die innerhalb von 14 Tagen ohne Abzug zu begleichen ist.</p>
            <p><strong>Hinweis zum Kleinunternehmerstatus:</strong> Gemäß § 19 UStG bin ich als Kleinunternehmer tätig und weise auf meinen Rechnungen daher keine Umsatzsteuer aus. Die aufgerufenen Preise sind Endpreise.</p>

            <h3>5. Stornierungsbedingungen</h3>
            <p>Ich verstehe, dass das Leben manchmal dazwischenkommt und sich Pläne ändern können. Für meine Planungssicherheit beachte bitte folgende Regelung:</p>
            <ul>
              <li>Bis <strong>48 Stunden vor dem vereinbarten Termin</strong> kannst du kostenfrei absagen oder verschieben.</li>
              <li>Bei einer späteren Absage oder bei Nichterscheinen berechne ich das volle Honorar als Ausfallentschädigung, da ich diese Zeit exklusiv für dich freigehalten und vorbereitet habe.</li>
              <li><strong>Gesetzlicher Hinweis:</strong> Es steht dir frei nachzuweisen, dass mir durch den Ausfall kein oder ein wesentlich geringerer Schaden entstanden ist.</li>
              <li>Deine Absage kann formlos per E-Mail, Telegram oder direkt über das Buchungssystem erfolgen.</li>
            </ul>

            <h3>6. Absage durch den Coach</h3>
            <p>Sollte ich einen Termin aus wichtigem Grund (z.&nbsp;B. Krankheit oder höhere Gewalt) absagen müssen, informiere ich dich so schnell wie möglich und biete dir selbstverständlich einen zeitnahen Ersatztermin an. Darüber hinausgehende Ansprüche (z.&nbsp;B. Ersatz von Reisekosten) sind ausgeschlossen.</p>

            <h3>7. Eigenverantwortung &amp; Haftung</h3>
            <p>Im Coaching begleite ich dich mit professionellen Methoden und Impulsen. Die Verantwortung für deine Entscheidungen, Handlungen und deren Konsequenzen liegt jedoch stets bei dir. Ein bestimmter Erfolg oder ein konkretes Ziel kann nicht garantiert werden – du bist der/die Expert:in für dein eigenes Leben.</p>
            <p>Die Haftung für leicht fahrlässige Pflichtverletzungen ist ausgeschlossen, sofern keine wesentlichen Vertragspflichten (Kardinalpflichten) verletzt werden. Dieser Haftungsausschluss gilt jedoch nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Für meine Coaching-Tätigkeit bin ich zudem über eine branchenübliche Berufshaftpflichtversicherung abgesichert.</p>

            <h3>8. Verschwiegenheit &amp; Datenschutz</h3>
            <p>Alles, was du mir in unseren Sitzungen anvertraust, bleibt streng vertraulich. Ich verpflichte mich zur absoluten Verschwiegenheit über alle Inhalte unserer Zusammenarbeit. Das ist für mich selbstverständlich und die wichtigste Grundlage für einen sicheren und vertrauensvollen Raum. Alle Regelungen zur Verarbeitung deiner persönlichen Daten findest du in meiner <Link to="/datenschutz" className="underline hover:text-secondary">Datenschutzerklärung</Link>.</p>

            <h3>9. Widerrufsrecht für Verbraucher</h3>
            <p>Wenn du das Coaching als Verbraucher:in (Privatperson) buchst, steht dir ein gesetzliches Widerrufsrecht von 14 Tagen zu. Du kannst den Vertrag innerhalb von 14 Tagen nach Vertragsschluss ohne Angabe von Gründen widerrufen (z.&nbsp;B. per E-Mail an <a href="mailto:info@fels-coach.de" className="underline hover:text-secondary">info@fels-coach.de</a>).</p>
            <p><strong>Wichtiger Hinweis zum vorzeitigen Erlöschen:</strong> Wenn du wünschst, dass unsere Coaching-Sitzung bereits vor Ablauf dieser 14-tägigen Frist stattfindet, erklärst du dich ausdrücklich damit einverstanden, dass ich vor Ablauf der Widerrufsfrist mit der Leistung beginne. Dir ist bekannt, dass dein Widerrufsrecht bei vollständiger Vertragserfüllung (nach der durchgeführten Sitzung) vorzeitig erlischt.</p>

            <h3>10. Schlussbestimmungen</h3>
            <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung. Es gilt das Recht der Bundesrepublik Deutschland.</p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AGB;
