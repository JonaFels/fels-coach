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
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("terms.title")}
          </h1>

          <Card>
            <CardContent className="pt-8 prose prose-slate dark:prose-invert max-w-none">
              <p>Die folgenden Regeln regeln die Buchung, Bezahlung und Absage von Coaching-Terminen bei Jona Fels - systemisches Coaching. Mit der Buchung eines Termins akzeptieren Sie diese Bedingungen.</p>

              <h3>1. Terminvereinbarung und Bezahlung</h3>
              <ul>
                <li><strong>Zustandekommen des Vertrags:</strong> Die Buchung eines Termins über unser System (Acuity Scheduling) stellt ein verbindliches Vertragsangebot dar. Der Vertrag kommt mit der Terminbestätigung zustande.</li>
                <li><strong>Bezahlung:</strong> Die vereinbarte Gebühr wird in der Regel sofort bei der Buchung fällig und ist für die Bestätigung des Termins erforderlich.</li>
              </ul>

              <h3>2. Stornierung und Umbuchung</h3>
              <p>Um eine effiziente Terminplanung zu gewährleisten und die Zeit für andere Klienten freigeben zu können, gelten folgende Regelungen für Stornierungen und Umbuchungen:</p>
              <ul>
                <li><strong>Kostenfreie Absage/Umbuchung:</strong> Eine Stornierung oder Umbuchung des Termins ist bis spätestens 48 Stunden vor dem vereinbarten Termin kostenfrei möglich. In diesem Fall wird der volle Betrag zurückerstattet bzw. für die Umbuchung gutgeschrieben.</li>
                <li><strong>Kurzfristige Absage (weniger als 48 Stunden):</strong> Erfolgt eine Stornierung oder Umbuchung nach Ablauf der 48-Stunden-Frist bis zum Terminbeginn, wird das volle vereinbarte Honorar fällig. Eine Rückerstattung des bereits gezahlten Betrags erfolgt in diesem Fall nicht.</li>
              </ul>

              <h3>3. Verschiebung aus wichtigem Grund</h3>
              <ul>
                <li>Bei einer Absage aufgrund plötzlich auftretender schwerer und unvorhersehbarer Umstände (z.B. schwere akute Krankheit, Familienunglück, o.ä.) kann der Termin in Absprache und gegen entsprechenden Nachweis (z.B. ärztliches Attest) kostenlos auf einen späteren Zeitpunkt verschoben werden.</li>
                <li>Die bereits geleistete Zahlung wird in diesem Fall für den Ersatztermin gutgeschrieben.</li>
              </ul>

              <h3>4. Nichterscheinen</h3>
              <ul>
                <li>Erscheint der Klient ohne vorherige Absage zum vereinbarten Termin nicht, wird das volle vereinbarte Honorar fällig. Eine Rückerstattung des bereits gezahlten Betrags erfolgt in diesem Fall nicht.</li>
              </ul>

              <h3>5. Verspätungen</h3>
              <ul>
                <li>Bei einer Verspätung des Klienten verkürzt sich die Dauer der Coachingsitzung entsprechend. Die vereinbarte Gebühr bleibt davon unberührt.</li>
              </ul>

              <h3>6. Haftungsausschluss</h3>
              <ul>
                <li>Das Coaching ersetzt keine Therapie oder ärztliche Behandlung. Die Teilnahme erfolgt in voller Eigenverantwortung und setzt eine normale psychische und physische Belastbarkeit voraus. Bei psychischen Erkrankungen oder Beschwerden ist vorab zwingend ein Arzt oder Therapeut zu konsultieren.</li>
                <li>Jona Fels - systemisches Coaching übernimmt keine Haftung für Schäden oder Verletzungen, die durch die Nichtbeachtung der Hinweise oder die Selbstüberschätzung des Klienten entstehen.</li>
              </ul>
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
