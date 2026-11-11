import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <main id="main-content" className="flex-1 py-32 md:py-36">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            {t("privacy.title")}
          </h1>
          {language === "en" && (
            <p className="text-center text-sm text-muted-foreground -mt-8 mb-12">
              This is a courtesy translation. In case of doubt, the German version is legally binding.
            </p>
          )}

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
              {language === "de" ? "E-Mail" : "Email"}: <a href="mailto:jona@fels-coach.de">jona@fels-coach.de</a>
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
            <p>{t("privacy.s4.p4")}</p>

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

            <h2>{t("privacy.s9.heading")}</h2>
            <p>{t("privacy.s9.p1")}</p>
            <p><strong>{language === "de" ? "Besonderer Schutz von Gesundheitsdaten:" : "Special protection of health data:"}</strong> {t("privacy.s9.p2")}</p>
            <p>{t("privacy.s9.p4")}</p>
            <p>{t("privacy.s9.p5")}</p>
            <p>{t("privacy.s9.p3")}</p>

            <hr />

            <h2>{t("privacy.s10.heading")}</h2>
            <p>{t("privacy.s10.p1")}</p>
            <p>{t("privacy.s10.p2")}</p>

            <hr />

            <h2>{t("privacy.s11.heading")}</h2>
            <p>{t("privacy.s11.text")}</p>

            <hr />

            <h2>{t("privacy.maps.heading")}</h2>
            <p>{t("privacy.maps.p1")}</p>
            <p>{t("privacy.maps.p2")}</p>

            <hr />

{language === "de" ? (
          <>
            <h2>Einbindung von YouTube-Videos (erweiterter Datenschutzmodus)</h2>
            <p>
              Auf einzelnen Seiten dieser Website binde ich Videos der Plattform YouTube ein. Betreiber
              der Plattform ist die Google Ireland Limited („Google"), Gordon House, Barrow Street,
              Dublin 4, Irland.
            </p>
            <p>
              <strong>Zwei-Klick-Lösung &amp; erweiterter Datenschutz:</strong> Beim Aufruf einer Seite
              mit eingebettetem Video wird zunächst <strong>kein</strong> Inhalt von YouTube geladen.
              Stattdessen siehst du nur ein lokal von meinem Server ausgeliefertes Vorschaubild sowie
              einen Abspiel-Button. Erst wenn du aktiv auf den Abspiel-Button klickst, wird eine
              Verbindung zu den Servern von YouTube aufgebaut. Ich nutze dabei den von YouTube
              angebotenen „erweiterten Datenschutzmodus" (Domain <em>youtube-nocookie.com</em>), bei dem
              laut Anbieter keine Cookies zur Profilbildung über dein Nutzungsverhalten gesetzt werden,
              solange du das Video nicht abspielst.
            </p>
            <p>
              <strong>Verarbeitete Daten nach dem Start des Videos:</strong> Sobald du das Video startest,
              kann YouTube/Google u.&nbsp;a. deine IP-Adresse, Datum und Uhrzeit des Aufrufs, Informationen
              zu deinem Browser und Betriebssystem, Referrer-URL, ggf. deine Geräte-ID sowie
              Interaktionsdaten mit dem Player erhalten. Wenn du gleichzeitig in deinem Google-Konto
              eingeloggt bist, kann Google diese Informationen direkt deinem persönlichen Konto zuordnen.
              Dies kannst du verhindern, indem du dich vor dem Klick auf das Video aus deinem
              Google-Konto ausloggst.
            </p>
            <p>
              <strong>Zweck und Rechtsgrundlage:</strong> Die Einbindung erfolgt, um dir Inhalte über
              mein Aufstellungsangebot ansprechend und barrierearm zu präsentieren. Rechtsgrundlage für die
              Einbindung ist mein berechtigtes Interesse an einer attraktiven Darstellung meines Angebots
              gemäß Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Soweit durch das Starten des Videos auf
              deinem Endgerät Informationen gespeichert oder ausgelesen werden, erfolgt dies auf
              Grundlage deiner Einwilligung durch den aktiven Klick auf den Abspiel-Button
              (§&nbsp;25 Abs.&nbsp;1 TDDDG i.&nbsp;V.&nbsp;m. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO).
              Diese Einwilligung kannst du jederzeit für die Zukunft widerrufen, indem du das Video
              nicht mehr abspielst bzw. die Seite verlässt.
            </p>
            <p>
              <strong>Datenübermittlung in Drittländer:</strong> Eine Übermittlung deiner Daten in die
              USA bzw. in andere Drittländer kann nicht ausgeschlossen werden. Google LLC ist nach dem
              EU-US Data Privacy Framework zertifiziert, sodass für die Übermittlung in die USA ein
              Angemessenheitsbeschluss der EU-Kommission besteht. Ergänzend kommen
              Standardvertragsklauseln der EU-Kommission zur Anwendung.
            </p>
            <p>
              <strong>Speicherdauer:</strong> Die konkrete Speicherdauer der durch YouTube/Google
              erhobenen Daten ist mir nicht bekannt und wird durch Google bestimmt. Weitere Informationen
              findest du in der Datenschutzerklärung von Google unter{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>{" "}
              sowie in den ergänzenden Hinweisen von YouTube unter{" "}
              <a
                href="https://www.youtube.com/howyoutubeworks/user-settings/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/howyoutubeworks/user-settings/privacy/
              </a>.
            </p>
          </>
          ) : (
          <>
            <h2>Embedded YouTube videos (privacy-enhanced mode)</h2>
            <p>
              On some pages of this website I embed videos from the YouTube platform. The platform is
              operated by Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.
            </p>
            <p>
              <strong>Two-click solution &amp; privacy-enhanced mode:</strong> When you open a page with an
              embedded video, <strong>no</strong> content is loaded from YouTube at first. You only see a
              preview image served from my own server and a play button. A connection to YouTube's servers
              is only established once you actively click the play button. I use YouTube's
              "privacy-enhanced mode" (domain <em>youtube-nocookie.com</em>), in which, according to the
              provider, no cookies for profiling your usage behaviour are set as long as you do not play
              the video.
            </p>
            <p>
              <strong>Data processed after starting the video:</strong> Once you start the video,
              YouTube/Google may receive, among other things, your IP address, the date and time of access,
              information about your browser and operating system, the referrer URL, possibly your device
              ID and data on your interaction with the player. If you are logged into your Google account
              at the same time, Google can assign this information directly to your personal account. You
              can prevent this by logging out of your Google account before clicking the video.
            </p>
            <p>
              <strong>Purpose and legal basis:</strong> The videos are embedded to present information about
              my constellation work in an appealing and accessible way. The legal basis is my legitimate
              interest in an attractive presentation of my services under Art.&nbsp;6(1)(f) GDPR. Insofar as
              starting the video stores or reads information on your device, this is based on your consent
              given by actively clicking the play button (§&nbsp;25(1) TDDDG in conjunction with
              Art.&nbsp;6(1)(a) GDPR). You can withdraw this consent at any time for the future by no longer
              playing the video or leaving the page.
            </p>
            <p>
              <strong>Transfers to third countries:</strong> A transfer of your data to the USA or other
              third countries cannot be ruled out. Google LLC is certified under the EU-US Data Privacy
              Framework, so an adequacy decision of the European Commission applies to transfers to the USA.
              In addition, the European Commission's standard contractual clauses apply.
            </p>
            <p>
              <strong>Storage period:</strong> I do not know the exact storage period of the data collected
              by YouTube/Google; it is determined by Google. Further information can be found in Google's
              privacy policy at{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>{" "}
              and in YouTube's additional information at{" "}
              <a
                href="https://www.youtube.com/howyoutubeworks/user-settings/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/howyoutubeworks/user-settings/privacy/
              </a>.
            </p>
          </>
          )}

            <p className="text-sm text-muted-foreground">{t("privacy.updated")}</p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Datenschutz;
