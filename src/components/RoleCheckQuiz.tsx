import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, ArrowRight, ArrowLeft, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useErstgespraech } from "@/components/HashBookingTrigger";

type Category = "lastentraeger" | "anpasser" | "anklaeger";
type ResultType = Category | "integriert" | "ambivalent";

interface Question {
  id: number;
  category: Category;
  text: string;
  /** Gewichtung der Frage (1 = Standard, 1.5 = Schlüsselfrage / tiefes Identitäts- bzw. Loyalitätsmuster) */
  weight: number;
}

// Schlüsselfragen (Identität / unbewusste Loyalität) wiegen stärker als Verhaltens-Indikatoren.
const questions: Question[] = [
  { id: 1, category: "lastentraeger", weight: 1.0, text: "Wenn jemand in meinem nahen Umfeld ein Problem hat, empfinde ich sofort einen inneren Druck, die Lösung finden oder zumindest lindern zu müssen." },
  { id: 2, category: "anklaeger",     weight: 1.0, text: "Wenn Dinge nicht nach Plan laufen, ist meine erste innere Reaktion oft Frustration über die Inkompetenz oder Ineffizienz der anderen." },
  { id: 3, category: "anpasser",      weight: 1.5, text: "Ich ertappe mich oft dabei, dass ich meine eigenen Bedürfnisse kaum spüren kann, solange die Bedürfnisse der anderen im Raum nicht geklärt sind." },
  { id: 4, category: "lastentraeger", weight: 1.5, text: "Mein eigener Erfolg oder ein Moment echter Ruhe fühlt sich für mich oft erst dann 'erlaubt' an, wenn ich weiß, dass es allen in meinem System gut geht." },
  { id: 5, category: "anklaeger",     weight: 1.5, text: "Ich zeige selten echte Verletzlichkeit, da ich tief im Inneren davon ausgehe, dass Schwäche letztendlich gegen mich verwendet wird." },
  { id: 6, category: "anpasser",      weight: 1.0, text: "In Konflikten oder emotional angespannten Situationen neige ich dazu, innerlich zu 'verstummen' oder mich unsichtbar zu machen, um die Lage nicht zu verschlimmern." },
  { id: 7, category: "lastentraeger", weight: 1.0, text: "Unter extremem Stress neige ich dazu, noch mehr Verantwortung an mich zu reißen und Aufgaben anderer zu übernehmen, anstatt um Hilfe zu bitten." },
  { id: 8, category: "anpasser",      weight: 1.5, text: "Es fällt mir extrem schwer, klare Grenzen zu setzen und 'Nein' zu sagen, weil die unterschwellige Angst vor Ablehnung übermächtig ist." },
  { id: 9, category: "anklaeger",     weight: 1.5, text: "Bevor ich das Risiko eingehe, von jemandem enttäuscht zu werden, gehe ich lieber auf Distanz und mache Dinge mit mir selbst aus." },
  { id: 10, category: "lastentraeger", weight: 1.5, text: "Ich ziehe unbewusst viel von meiner Identität und meinem Selbstwert aus der Tatsache, dass ich für andere der 'Fels in der Brandung' bin." },
  { id: 11, category: "anpasser",      weight: 1.0, text: "Wenn der Druck im Außen zu groß wird, ziehe ich mich innerlich komplett zurück und hoffe einfach, dass der Sturm an mir vorbeizieht." },
  { id: 12, category: "anklaeger",     weight: 1.5, text: "In extremen Krisensituationen werde ich oft zynisch, weise anderen hart die Schuld zu und regele die Dinge emotionslos im Alleingang." },
  { id: 13, category: "lastentraeger", weight: 1.5, text: "Ich habe häufig das Gefühl, emotionale 'Altlasten' oder eine Schwere aus meiner Herkunftsfamilie zu tragen, die eigentlich gar nicht meine eigene ist." },
  { id: 14, category: "anpasser",      weight: 1.5, text: "Ich habe oft das unbestimmte Gefühl, dass ich mich anstrengen oder anpassen muss, um meine Daseinsberechtigung im System zu rechtfertigen." },
  { id: 15, category: "anklaeger",     weight: 1.0, text: "Ich reguliere meinen Stress meistens dadurch, dass ich die Kontrolle übernehme und Härte zeige, anstatt mein Umfeld um Unterstützung zu bitten." },
];

const scaleLabels = [
  { value: 1, label: "Trifft gar nicht zu" },
  { value: 2, label: "Trifft eher nicht zu" },
  { value: 3, label: "Trifft eher zu" },
  { value: 4, label: "Trifft voll zu" },
];

type LifeArea = "beruf" | "partnerschaft" | "familie" | "gesundheit";

const lifeAreaOptions: { value: LifeArea; label: string; hint: string }[] = [
  { value: "beruf", label: "Beruf & Business", hint: "Karriere, Führung, Verantwortung" },
  { value: "partnerschaft", label: "Partnerschaft & Liebe", hint: "Nähe, Beziehung, Bindung" },
  { value: "familie", label: "Herkunftsfamilie", hint: "Eltern, Geschwister, Generationen" },
  { value: "gesundheit", label: "Gesundheit & Energie", hint: "Körper, Erschöpfung, Vitalität" },
];

const resultContent: Record<ResultType, {
  title: string;
  surface: string;
  loyalty: string;
  blindSpot: string;
  wayOut: string;
}> = {
  lastentraeger: {
    title: "Dein primäres Profil: Der Lastenträger (Der Fels)",
    surface:
      "Du funktionierst. Du bist der Mensch, zu dem andere kommen, wenn es brennt. Du übernimmst Verantwortung – beruflich wie privat – und sorgst dafür, dass das System nicht zusammenbricht. Das gibt dir Kraft und eine gewisse Unersetzbarkeit. Doch der Preis dafür ist hoch: Eine schleichende, tiefe Erschöpfung und das leise Gefühl, dass für deine eigenen Bedürfnisse kein Raum mehr übrig ist.",
    loyalty:
      "Dieses Verhalten ist kein Charakterzug, es ist eine alte Überlebensstrategie. Systemisch gesehen hast du sehr früh gelernt, dass du stark sein musst, um dein Herkunftssystem zu stabilisieren. Deine unbewusste Loyalität lautet: 'Ich trage es für euch, damit das System sicher bleibt.' Du hast dich unbewusst über die anderen gestellt, um sie zu retten.",
    blindSpot:
      "Solange du die Lasten der anderen trägst, sprichst du ihnen unbewusst ihre eigene Kraft ab – und brennst dich selbst dabei aus. Du verwechselst gebraucht zu werden mit echter, freier Zugehörigkeit.",
    wayOut:
      "Kognitiv weißt du längst, dass du mehr loslassen müsstest. Aber das System in dir wehrt sich, weil Loslassen sich wie Verrat anfühlt. In einer 1:1 Familienaufstellung machen wir genau diese Dynamik sichtbar und geben die Verantwortung ehrenvoll zurück.",
  },
  anpasser: {
    title: "Dein primäres Profil: Der Anpasser (Der Ausharrende)",
    surface:
      "Du bist ein Meister darin, die emotionale Temperatur in einem Raum zu lesen. Du spürst sofort, was andere brauchen, und formst dich so, dass du nirgends aneckst. Du vermeidest Konflikte und stellst eigene Wünsche zurück. Im Inneren fühlst du dich jedoch oft orientierungslos, übersehen oder hast das Gefühl, dein Leben auf einer Art 'Warteschleife' zu verbringen.",
    loyalty:
      "Deine Anpassung ist ein brillanter, unbewusster Schutzmechanismus. In deinem System hast du gelernt, dass Sichtbarkeit oder das Einfordern von Raum gefährlich ist. Vielleicht gab es schon genug Konflikte oder Schwere. Deine unbewusste Loyalität lautet: 'Ich mache keine Umstände. Ich nehme keinen Raum ein, damit das System nicht noch weiter belastet wird.'",
    blindSpot:
      "Indem du wartest, bis alle anderen versorgt sind, klammerst du dich aus deinem eigenen Leben aus. Du hoffst unbewusst, dass jemand kommt und dir die Erlaubnis gibt, endlich du selbst zu sein.",
    wayOut:
      "Diese Erlaubnis wird von außen nicht kommen – du musst dir deinen rechtmäßigen Platz im System zurückerobern. In einer Aufstellung lösen wir die unsichtbare Bremse, damit du aufhörst, das Leben anderer auszuhalten, und beginnst, dein eigenes zu gestalten.",
  },
  anklaeger: {
    title: "Dein primäres Profil: Der autonome Distanzierer",
    surface:
      "Du wirkst nach außen hin extrem unabhängig, stark und oft hart. Wenn Dinge nicht funktionieren, siehst du sofort, wer die Verantwortung trägt, und baust Druck auf. Du regelst Beziehungen und berufliche Herausforderungen oft durch Leistung, Kontrolle und Abgrenzung. Gleichzeitig spürst du eine innere Isolation, weil echte Nähe dir schwerfällt.",
    loyalty:
      "Dein Autonomiestreben ist ein massiver Schutzpanzer. In deinem System hast du die Erfahrung gemacht, dass du dich auf andere letztendlich nicht verlassen kannst. Deine unbewusste Loyalität lautet: 'Ich brauche niemanden. Bevor ich verletzt oder enttäuscht werde, gehe ich selbst auf Distanz und übernehme die Kontrolle.'",
    blindSpot:
      "Deine Härte schützt dich vor Enttäuschung, aber sie isoliert dich auch von echter Verbundenheit. Du kämpfst einen alten Krieg weiter, der längst vorbei ist, und verwechselst dabei emotionale Kälte mit wahrer Unabhängigkeit.",
    wayOut:
      "Es geht nicht darum, deine Schutzmechanismen einzureißen. Es geht darum, die alte Wut oder den Schmerz im System dorthin zurückzugeben, wo er entstanden ist. In einer Aufstellung entsteht Raum für eine Stärke, die nicht mehr aus Härte, sondern aus innerer Klarheit kommt.",
  },
  integriert: {
    title: "Dein systemisches Profil: In deiner Kraft (Das integrierte System)",
    surface:
      "Deine Antworten zeigen eine bemerkenswerte systemische Reife und eine gesunde innere Balance. Es gelingt dir im Alltag hervorragend, Verantwortung dort zu lassen, wo sie hingehört, ohne in die Überlastung des Lastenträgers zu kippen. Du nimmst dir deinen Raum, ohne dich anzupassen, und bleibst weich und nahbar, ohne Schutzmauern hochzuziehen.",
    loyalty:
      "Systemisch gesehen stehst du stabil an deinem eigenen, rechtmäßigen Platz im Leben. Du hast unbewusste Verstrickungen deiner Herkunftsfamilie entweder bereits erfolgreich gelöst oder trägst ein gesundes Urvertrauen in dir. Deine Energie steht dir für dein eigenes Leben frei zur Verfügung.",
    blindSpot:
      "Dein potenzieller 'blinder Fleck' ist lediglich die Gewohnheit: Erlaubst du dir wirklich schon, diese ungebundene Freiheit und Größe in all deinen Lebensbereichen voll auszuleben?",
    wayOut:
      "Für Menschen mit einem integrierten Profil geht es im 1:1 Coaching nicht mehr um das Heilen alter Wunden, sondern um reine Potenzialentfaltung. Wie nutzt du diese freie Kraft für deine nächsten großen Visionen? Lass uns im Erstgespräch genau diesen Hebel ansetzen.",
  },
  ambivalent: {
    title: "Dein systemisches Profil: Das ambivalente Spektrum",
    surface:
      "Deine Antworten zeigen kein einzelnes dominantes Muster – sondern eine fein austarierte Mischung aus allen drei systemischen Dynamiken. Du wechselst situativ zwischen Verantwortung-Tragen, Anpassen und Distanzieren. Nach außen wirkst du oft flexibel und vielseitig. Innerlich kann sich das jedoch anfühlen wie eine ständige Unruhe: Du weißt selbst nicht mehr, welcher Teil von dir gerade 'echt' ist und welcher Teil nur reagiert.",
    loyalty:
      "Systemisch gesehen hast du gelernt, dich an die emotionale Lage deines Umfelds anzupassen – mal als Lastenträger, mal als Anpasser, mal als Distanzierer. Diese Beweglichkeit war früh deine Überlebensstrategie in einem System, das keine klare Rolle für dich bereithielt. Deine unbewusste Loyalität lautet: 'Ich passe mich der Dynamik an, die gerade gebraucht wird, damit ich überall dazugehören kann.'",
    blindSpot:
      "Weil du in allen drei Mustern zuhause bist, fehlt dir oft das klare Gespür: Wer bin ich eigentlich, wenn ich nicht reagiere? Deine Stärke – die Flexibilität – wird dann zur Falle, wenn sie verhindert, dass du einen eigenen, stabilen Platz einnimmst.",
    wayOut:
      "Der erste Schritt ist nicht, eines der Muster zu 'beheben', sondern den Punkt in dir zu finden, von dem aus du nicht mehr reagieren musst. In einer 1:1 Familienaufstellung machen wir sichtbar, wo dein eigener Platz im System ist – jenseits aller übernommenen Rollen.",
  },
};

const categoryLabels: Record<Category, string> = {
  lastentraeger: "Der Lastenträger",
  anpasser: "Der Anpasser",
  anklaeger: "Der Distanzierer",
};

const intensityFor = (percent: number): { label: string; tone: string } => {
  if (percent <= 25) return { label: "Kaum ausgeprägt · Gesundes Fundament", tone: "text-muted-foreground" };
  if (percent <= 55) return { label: "Leichte Ausprägung · Situative Tendenz", tone: "text-secondary/80" };
  if (percent <= 80) return { label: "Moderate Ausprägung · Aktive Dynamik", tone: "text-secondary" };
  return { label: "Starke Ausprägung · Dominante Verstrickung", tone: "text-primary" };
};

export const RoleCheckQuiz = () => {
  const booking = useErstgespraech();
  const [step, setStep] = useState<"start" | "quiz" | "lifearea" | "loading" | "result">("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [primaryType, setPrimaryType] = useState<ResultType | null>(null);
  const [percentages, setPercentages] = useState<Record<Category, number>>({
    lastentraeger: 0,
    anpasser: 0,
    anklaeger: 0,
  });
  const [selected, setSelected] = useState<number | null>(null);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [lifeArea, setLifeArea] = useState<LifeArea | null>(null);

  const start = () => {
    setAnswers({});
    setCurrentIndex(0);
    setPrimaryType(null);
    setPercentages({ lastentraeger: 0, anpasser: 0, anklaeger: 0 });
    setSelected(null);
    setIsAdvancing(false);
    setLifeArea(null);
    setStep("quiz");
  };

  const handleAnswer = (value: number) => {
    if (isAdvancing) return;
    const q = questions[currentIndex];
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    setSelected(value);
    setIsAdvancing(true);

    window.setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        const nextIdx = currentIndex + 1;
        setCurrentIndex(nextIdx);
        setSelected(next[questions[nextIdx].id] ?? null);
      } else {
        setStep("lifearea");
      }
      setIsAdvancing(false);
    }, 300);
  };

  const handleBack = () => {
    if (isAdvancing || currentIndex === 0) return;
    const prevIdx = currentIndex - 1;
    setCurrentIndex(prevIdx);
    setSelected(answers[questions[prevIdx].id] ?? null);
  };

  const handleLifeAreaBack = () => {
    setLifeArea(null);
    setSelected(answers[questions[questions.length - 1].id] ?? null);
    setStep("quiz");
  };

  const handleLifeArea = (area: LifeArea) => {
    if (lifeArea !== null) return;
    setLifeArea(area);
    window.setTimeout(() => {
      finalize(answers, area);
    }, 250);
  };

  const finalize = async (allAnswers: Record<number, number>, area: LifeArea) => {
    setStep("loading");

    // 1) Rohwerte je Kategorie für DB-Speicherung (unweighted Summe).
    const rawScores: Record<Category, number> = { lastentraeger: 0, anpasser: 0, anklaeger: 0 };
    // 2) Gewichtete Summen für die Auswertung.
    const weightedScores: Record<Category, number> = { lastentraeger: 0, anpasser: 0, anklaeger: 0 };
    const weightTotals: Record<Category, number> = { lastentraeger: 0, anpasser: 0, anklaeger: 0 };

    for (const q of questions) {
      const ans = allAnswers[q.id] ?? 0;
      rawScores[q.category] += ans;
      weightedScores[q.category] += ans * q.weight;
      weightTotals[q.category] += q.weight;
    }

    // Skala 1–4, normalisiert per Kategorie über deren Gewichtssumme.
    const computePercent = (cat: Category) => {
      const w = weightTotals[cat];
      const min = w * 1;
      const max = w * 4;
      const range = max - min;
      if (range <= 0) return 0;
      return Math.max(0, Math.min(100, Math.round(((weightedScores[cat] - min) / range) * 100)));
    };

    const pct: Record<Category, number> = {
      lastentraeger: computePercent("lastentraeger"),
      anpasser: computePercent("anpasser"),
      anklaeger: computePercent("anklaeger"),
    };
    setPercentages(pct);

    // Deterministisches Ranking: zuerst nach Prozent, bei Gleichstand nach gewichtetem Rohwert.
    const cats: Category[] = ["lastentraeger", "anpasser", "anklaeger"];
    const sorted = [...cats].sort((a, b) => {
      if (pct[b] !== pct[a]) return pct[b] - pct[a];
      return weightedScores[b] - weightedScores[a];
    });
    const topCategory = sorted[0];

    const maxPct = pct[sorted[0]];
    const minPct = pct[sorted[2]];
    const spread = maxPct - minPct;

    // 1) Integriertes Profil: alle drei Dynamiken niedrig.
    const isIntegrated = pct.lastentraeger < 30 && pct.anpasser < 30 && pct.anklaeger < 30;

    // 2) Ambivalentes Profil: alle drei ähnlich stark ausgeprägt – keine klare Dominanz.
    //    Gleichstand (Spread ≤ 7 Prozentpunkte) bei mittlerem bis hohem Niveau.
    const isAmbivalent = !isIntegrated && spread <= 7 && maxPct >= 35;

    const primary: ResultType = isIntegrated
      ? "integriert"
      : isAmbivalent
      ? "ambivalent"
      : topCategory;
    setPrimaryType(primary);

    try {
      await supabase.from("quiz_submissions").insert({
        dominant_type: primary,
        secondary_type: isIntegrated || isAmbivalent ? null : sorted[1],
        score_lastentraeger: rawScores.lastentraeger,
        score_anpasser: rawScores.anpasser,
        score_anklaeger: rawScores.anklaeger,
        life_area: area,
      });
    } catch (e) {
      console.error("Quiz submission failed", e);
    }

    setStep("result");
  };

  return (
    <section
      aria-labelledby="rollencheck-heading"
      className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10"
      />

      <div className="relative p-6 md:p-12">
        <AnimatePresence mode="wait">
          {step === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center max-w-xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-5">
                <Sparkles className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="text-secondary font-medium uppercase tracking-wider text-xs md:text-sm mb-3">
                Selbsttest · 3 Minuten
              </p>
              <h2 id="rollencheck-heading" className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Was wäre, wenn dein Problem eine unbewusste Loyalität ist?
              </h2>
              <p className="font-serif italic text-lg md:text-xl text-secondary mb-6">
                Der systemische Rollen-Check.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                15 ehrliche Fragen. Eine klare Antwort darauf, welches unbewusste Muster
                heute in dir wirkt – und wo dein Weg zurück zu dir beginnt.
              </p>
              <Button size="lg" onClick={start} className="min-h-[52px] px-8 text-base">
                Test starten
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <p className="text-xs text-muted-foreground/80 mt-5">
                Anonym · keine E-Mail nötig
              </p>
            </motion.div>
          )}

          {step === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3 text-xs md:text-sm">
                  <span className="text-muted-foreground font-medium">
                    Frage {currentIndex + 1} von {questions.length}
                  </span>
                  <span className="text-secondary font-medium">
                    {Math.round(((currentIndex) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full bg-secondary rounded-full"
                    initial={false}
                    animate={{ width: `${(currentIndex / questions.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <p className="font-serif text-xl md:text-2xl lg:text-[1.6rem] leading-snug text-foreground text-center mb-8 md:mb-10 min-h-[6rem]">
                    {questions[currentIndex].text}
                  </p>

                  <div className="grid gap-2.5">
                    {scaleLabels.map((opt) => {
                      const isSelected = selected === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleAnswer(opt.value)}
                          disabled={isAdvancing}
                          className={`group w-full flex items-center gap-4 rounded-xl border bg-background transition-all duration-200 px-4 md:px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                            isSelected
                              ? "border-secondary bg-secondary/10 shadow-sm"
                              : "border-border hover:border-secondary hover:bg-secondary/5 hover:-translate-y-0.5"
                          } ${isAdvancing && !isSelected ? "opacity-50" : ""}`}
                        >
                          <span
                            className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-serif text-base md:text-lg font-semibold transition-colors ${
                              isSelected
                                ? "bg-secondary text-secondary-foreground"
                                : "bg-muted group-hover:bg-secondary group-hover:text-secondary-foreground"
                            }`}
                          >
                            {opt.value}
                          </span>
                          <span className="text-sm md:text-base text-foreground/90 font-medium">
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleBack}
                      disabled={currentIndex === 0 || isAdvancing}
                      className="text-muted-foreground hover:text-foreground disabled:opacity-40"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                      Zurück
                    </Button>
                    {selected !== null && (
                      <span className="text-xs text-muted-foreground">
                        Antwort kann jederzeit geändert werden
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {step === "lifearea" && (
            <motion.div
              key="lifearea"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-secondary font-medium uppercase tracking-wider text-xs md:text-sm mb-3">
                Nur noch eine letzte Sache …
              </p>
              <h3 className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
                In welchem Lebensbereich spürst du aktuell die stärksten Auswirkungen oder Blockaden?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10">
                Wähle den Bereich, in dem die Schwere gerade am deutlichsten ist.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4 text-left">
                {lifeAreaOptions.map((opt) => {
                  const isSelected = lifeArea === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleLifeArea(opt.value)}
                      disabled={lifeArea !== null}
                      className={`group rounded-2xl border bg-background transition-all duration-200 px-5 py-5 md:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                        isSelected
                          ? "border-secondary bg-secondary/10 shadow-sm"
                          : "border-border hover:border-secondary hover:bg-secondary/5 hover:-translate-y-0.5"
                      } ${lifeArea !== null && !isSelected ? "opacity-50" : ""}`}
                    >
                      <p className="font-serif text-lg md:text-xl text-foreground font-semibold mb-1">
                        {opt.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{opt.hint}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleLifeAreaBack}
                  disabled={lifeArea !== null}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Zurück zu den Fragen
                </Button>
              </div>
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center py-16"
            >
              <Loader2 className="w-10 h-10 text-secondary animate-spin mx-auto mb-5" aria-hidden="true" />
              <p className="font-serif text-lg md:text-xl text-foreground">
                Dein Ergebnis wird vorbereitet …
              </p>
            </motion.div>
          )}

          {step === "result" && primaryType && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-secondary font-medium uppercase tracking-wider text-xs md:text-sm mb-3 text-center">
                Dein systemisches Spektrum
              </p>

              {/* Progress Bars für alle 3 Kategorien */}
              <div className="mb-10 md:mb-12 space-y-5 md:space-y-6">
                {(["lastentraeger", "anpasser", "anklaeger"] as Category[]).map((cat, idx) => {
                  const value = percentages[cat];
                  const intensity = intensityFor(value);
                  const isDominant = primaryType !== "integriert" && primaryType !== "ambivalent" && primaryType === cat;
                  return (
                    <motion.div
                      key={cat}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <p className={`font-serif text-base md:text-lg ${isDominant ? "text-foreground font-semibold" : "text-foreground/85"}`}>
                          {categoryLabels[cat]}
                        </p>
                        <p className={`text-sm md:text-base font-medium tabular-nums ${isDominant ? "text-secondary" : "text-muted-foreground"}`}>
                          {value}%
                        </p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${isDominant ? "bg-secondary" : "bg-secondary/40"}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ delay: 0.25 + idx * 0.1, duration: 0.9, ease: "easeOut" }}
                        />
                      </div>
                      <p className={`mt-1.5 text-xs md:text-[0.78rem] ${intensity.tone}`}>
                        {intensity.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <h3 className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-6 leading-tight text-center">
                {resultContent[primaryType].title}
              </h3>

              <div className="h-px w-16 bg-border mx-auto mb-8" />

              <div className="space-y-7 text-foreground/85 text-base md:text-[1.05rem] leading-[1.8]">
                <p>{resultContent[primaryType].surface}</p>

                <div>
                  <h4 className="font-serif text-lg md:text-xl text-foreground font-semibold mb-2">
                    Die unbewusste Loyalität dahinter
                  </h4>
                  <p>{resultContent[primaryType].loyalty}</p>
                </div>

                <div>
                  <h4 className="font-serif text-lg md:text-xl text-foreground font-semibold mb-2">
                    Dein blinder Fleck
                  </h4>
                  <p>{resultContent[primaryType].blindSpot}</p>
                </div>

                <div>
                  <h4 className="font-serif text-lg md:text-xl text-foreground font-semibold mb-2">
                    Der Weg hinaus
                  </h4>
                  <p>{resultContent[primaryType].wayOut}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  onClick={() => booking?.openErstgespraech()}
                  className="min-h-[52px] px-8 text-base w-full sm:w-auto"
                >
                  {primaryType === "integriert"
                    ? "Potenzial-Gespräch buchen"
                    : primaryType === "ambivalent"
                    ? "Klarheits-Gespräch buchen"
                    : "Jetzt Erstgespräch buchen"}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={start}
                  className="min-h-[52px] text-muted-foreground hover:text-foreground"
                >
                  <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
                  Test wiederholen
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
