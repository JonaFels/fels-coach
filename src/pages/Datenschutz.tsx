import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            {t("privacy.title")}
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>{t("privacy.intro")}</p>

            <hr />

            <h2>{t("privacy.s1.heading")}</h2>
            <p>{t("privacy.s1.intro")}</p>
            <p>
              Jona Fels – {t("imprint.address")}<br />
              {t("privacy.s1.owner")}<br />
              Egonstraße 91<br />
              79106 Freiburg<br />
              E-Mail: <a href="mailto:jona@fels-coach.de">jona@fels-coach.de</a>
            </p>

            <hr />

            <h2>{t("privacy.s2.heading")}</h2>
            <p>{t("privacy.s2.p1")}</p>
            <p>{t("privacy.s2.p2")}</p>

            <hr />

            <h2>{t("privacy.s3.heading")}</h2>
            <p>{t("privacy.s3.intro")}</p>
            <ul>
              <li><strong>{language === "de" ? "Auskunftsrecht (Art. 15 DSGVO):" : "Right of access (Art. 15 GDPR):"}</strong> {t("privacy.s3.access")}</li>
              <li><strong>{language === "de" ? "Berichtigungsrecht (Art. 16 DSGVO):" : "Right to rectification (Art. 16 GDPR):"}</strong> {t("privacy.s3.rectification")}</li>
              <li><strong>{language === "de" ? "Löschungsrecht (Art. 17 DSGVO):" : "Right to erasure (Art. 17 GDPR):"}</strong> {t("privacy.s3.erasure")}</li>
              <li><strong>{language === "de" ? "Einschränkung der Verarbeitung (Art. 18 DSGVO):" : "Right to restriction of processing (Art. 18 GDPR):"}</strong> {t("privacy.s3.restriction")}</li>
              <li><strong>{language === "de" ? "Datenübertragbarkeit (Art. 20 DSGVO):" : "Right to data portability (Art. 20 GDPR):"}</strong> {t("privacy.s3.portability")}</li>
              <li><strong>{language === "de" ? "Widerspruchsrecht (Art. 21 DSGVO):" : "Right to object (Art. 21 GDPR):"}</strong> {t("privacy.s3.objection")}</li>
            </ul>
            <p>{t("privacy.s3.outro")} <a href="mailto:jona@fels-coach.de">jona@fels-coach.de</a>. {t("privacy.s3.complaint")}</p>

            <hr />

            <h2>{t("privacy.s4.heading")}</h2>
            <p>{t("privacy.s4.p1")}</p>
            <p>{t("privacy.s4.p2")}</p>
            <p>{t("privacy.s4.p3")}</p>

            <hr />

            <h2>{t("privacy.s5.heading")}</h2>
            <p>{t("privacy.s5.p1")}</p>
            <p>{t("privacy.s5.p2")}</p>
            <p>{t("privacy.s5.p3")}</p>

            <hr />

            <h2>{t("privacy.s6.heading")}</h2>
            <p>{t("privacy.s6.p1")}</p>
            <p>{t("privacy.s6.p2")}</p>
            <p>{t("privacy.s6.p3")}</p>

            <hr />

            <h2>{t("privacy.s7.heading")}</h2>
            <p>{t("privacy.s7.p1")}</p>
            <p>{t("privacy.s7.p2")}</p>
            <p>{t("privacy.s7.p3")}</p>
            <p>{t("privacy.s7.p4")}</p>
            <p>{t("privacy.s7.p5")}</p>
            <p>{t("privacy.s7.p6")}</p>

            <hr />

            <h2>{t("privacy.s8.heading")}</h2>
            <p>{t("privacy.s8.p1")}</p>
            <p>{t("privacy.s8.p2")}</p>
            <p>{t("privacy.s8.p3")}</p>
            <p>{t("privacy.s8.p4")}</p>

            <hr />

            <h2>{t("privacy.s9.heading")}</h2>
            <p>{t("privacy.s9.p1")}</p>
            <p><strong>{language === "de" ? "Besonderer Schutz von Gesundheitsdaten:" : "Special protection of health data:"}</strong> {t("privacy.s9.p2")}</p>
            <p>{t("privacy.s9.p3")}</p>

            <hr />

            <h2>{t("privacy.s10.heading")}</h2>
            <p>{t("privacy.s10.p1")}</p>
            <p>{t("privacy.s10.p2")}</p>

            <hr />

            <h2>{t("privacy.s11.heading")}</h2>
            <p>{t("privacy.s11.text")}</p>

            <hr />

            <h2>{t("privacy.s12.heading")}</h2>
            <p>{t("privacy.s12.text")}</p>

            <hr />

            <h2>Datenschutzhinweise zum Systemischen Selbsttest</h2>
            <p>
              Auf dieser Website biete ich einen freiwilligen systemischen Selbsttest („Rollencheck") an,
              mit dem du dein persönliches systemisches Muster reflektieren kannst. Im Folgenden informiere
              ich dich über die Verarbeitung deiner Daten im Rahmen dieses Tests.
            </p>
            <p>
              <strong>Zweck der Verarbeitung:</strong> Die von dir im Test gegebenen Antworten werden
              ausschließlich dazu verarbeitet, dein individuelles Ergebnis zu berechnen und dir auf der
              Seite anzuzeigen. Eine darüber hinausgehende Auswertung, Profilbildung oder Weitergabe an
              Dritte findet nicht statt.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Rechtsgrundlage der Verarbeitung ist deine Einwilligung
              durch die aktive Teilnahme am Test (Art. 6 Abs. 1 lit. a DSGVO) sowie mein berechtigtes
              Interesse an einer qualitativen Verbesserung meines Coaching-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              <strong>Art der verarbeiteten Daten:</strong> Während du den Test durchläufst, werden deine
              Antworten zunächst lokal in deinem Browser verarbeitet. Nach Abschluss des Tests werden die
              anonymen Auswertungsdaten (gewählte Lebensbereiche sowie die kategorisierten Punktwerte und
              dein dominanter Ergebnistyp) in pseudonymisierter Form auf einem durch mich beauftragten
              Server (Auftragsverarbeiter: Supabase, Hosting innerhalb der EU) gespeichert. Diese Daten
              enthalten <strong>keine personenbezogenen Identifikatoren</strong> wie Name, E-Mail-Adresse
              oder IP-Adresse und können dir nicht zugeordnet werden.
            </p>
            <p>
              <strong>Verknüpfung mit personenbezogenen Daten:</strong> Eine Verknüpfung der Test-Antworten
              mit deiner Person erfolgt ausschließlich dann, wenn du dich im Anschluss aus eigener Initiative
              über ein Kontaktformular meldest oder ein Erstgespräch buchst. In diesem Fall gelten zusätzlich
              die Informationen in den vorstehenden Abschnitten dieser Datenschutzerklärung.
            </p>
            <p>
              <strong>Speicherdauer:</strong> Die anonymen Auswertungsdaten werden so lange gespeichert,
              wie sie zur statistischen Verbesserung des Angebots benötigt werden, und in regelmäßigen
              Abständen aggregiert bzw. gelöscht.
            </p>
            <p>
              <strong>Widerruf:</strong> Da die Speicherung anonymisiert erfolgt, ist eine nachträgliche
              Zuordnung und damit auch eine Einzellöschung deiner Test-Antworten technisch nicht möglich.
              Du kannst die Teilnahme am Test jederzeit abbrechen, bevor du das Endergebnis anzeigen lässt.
            </p>
            <p>
              <strong>Hinweis zum Charakter des Tests:</strong> Der Selbsttest dient ausschließlich der
              persönlichen Selbstreflexion und psychoedukativen Zwecken. Er stellt ausdrücklich keine
              psychologische oder medizinische Diagnose dar und ersetzt keine professionelle Therapie,
              heilkundliche Behandlung oder ärztliche Beratung.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Datenschutz;
