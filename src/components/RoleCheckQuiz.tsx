import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, ArrowRight, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useErstgespraech } from "@/components/HashBookingTrigger";

type Category = "lastentraeger" | "anpasser" | "anklaeger";

interface Question {
  id: number;
  category: Category;
  text: string;
}

const questions: Question[] = [
  { id: 1, category: "lastentraeger", text: "Ich übernehme oft Verantwortung für Aufgaben oder Emotionen, die eigentlich anderen gehören." },
  { id: 2, category: "lastentraeger", text: "Es fällt mir schwer, einfach zuzusehen, wenn jemand einen Fehler macht – ich greife lieber ein." },
  { id: 3, category: "lastentraeger", text: "Mein Selbstwert ist stark daran geknüpft, dass ich gebraucht werde und verlässlich bin." },
  { id: 4, category: "lastentraeger", text: "Oft fühle ich mich am Ende des Tages erschöpft, weil ich die Lasten von mehreren Schultern getragen habe." },
  { id: 5, category: "anpasser", text: "Bei Konflikten stecke ich meistens zurück, weil mir Harmonie wichtiger ist als mein eigener Standpunkt." },
  { id: 6, category: "anpasser", text: "Ich habe oft das Gefühl, dass andere besser wissen, was das Richtige für mich ist." },
  { id: 7, category: "anpasser", text: "Wenn ich vor großen Entscheidungen stehe, fühle ich mich schnell ohnmächtig oder wie gelähmt." },
  { id: 8, category: "anpasser", text: "Ich ordne meine eigenen Bedürfnisse oft unter, um niemanden zu enttäuschen." },
  { id: 9, category: "anklaeger", text: "Wenn Dinge schiefgehen, sehe ich meistens sofort, wer im Umfeld den Fehler gemacht hat." },
  { id: 10, category: "anklaeger", text: "Ich reagiere schnell ungeduldig oder hart, wenn andere Schwäche zeigen." },
  { id: 11, category: "anklaeger", text: "Um mich zu schützen, baue ich lieber Druck auf oder gehe auf Distanz, anstatt Verletzlichkeit zu zeigen." },
  { id: 12, category: "anklaeger", text: "Ich habe das Gefühl, wenn ich nicht hart durchgreife und kontrolliere, bricht Chaos aus." },
];

const scaleLabels = [
  { value: 1, label: "Trifft gar nicht zu" },
  { value: 2, label: "Trifft eher nicht zu" },
  { value: 3, label: "Teils, teils" },
  { value: 4, label: "Trifft eher zu" },
  { value: 5, label: "Trifft voll zu" },
];

const typeDetails: Record<Category, { title: string; subtitle: string; description: string }> = {
  lastentraeger: {
    title: "Der Lastenträger",
    subtitle: "Du trägst, was andere nicht tragen wollen.",
    description:
      "Du hast früh gelernt, Verantwortung für das emotionale Gleichgewicht in deinem System zu übernehmen. Diese Stärke macht dich verlässlich – fordert aber auch ihren Preis: Erschöpfung, das Gefühl, nie wirklich anzukommen, und ein Selbstwert, der an Funktion geknüpft ist. In der systemischen Arbeit schauen wir, wem die Last ursprünglich gehört – und wie du sie achtsam zurückgeben kannst.",
  },
  anpasser: {
    title: "Der Anpasser",
    subtitle: "Du machst dich klein, damit die Welt um dich herum groß bleibt.",
    description:
      "Du hast früh verstanden, dass Sicherheit darin liegt, möglichst wenig anzuecken. Du spürst feinfühlig, was andere brauchen – verlierst dabei aber den Zugang zu deiner eigenen Wahrheit. In der Aufstellung machen wir sichtbar, welche unsichtbaren Loyalitäten dich klein halten – und wie du wieder eigenständig im Leben stehen kannst.",
  },
  anklaeger: {
    title: "Der Ankläger",
    subtitle: "Du schützt deine Verletzlichkeit hinter einer Mauer aus Kontrolle.",
    description:
      "Hinter Härte und Distanz steht oft ein zutiefst verletztes Inneres. Du hast gelernt, dass Angriff die beste Verteidigung ist – aber diese Strategie hält Nähe fern und verstärkt das, was du eigentlich überwinden möchtest. In der systemischen Arbeit darf der Ursprung dieser Härte zur Sprache kommen – und etwas Weicheres darf wachsen.",
  },
};

export const RoleCheckQuiz = () => {
  const booking = useErstgespraech();
  const [step, setStep] = useState<"start" | "quiz" | "loading" | "result">("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [dominantType, setDominantType] = useState<Category | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const start = () => {
    setAnswers({});
    setCurrentIndex(0);
    setDominantType(null);
    setStep("quiz");
    setAnimKey((k) => k + 1);
  };

  const handleAnswer = async (value: number) => {
    const q = questions[currentIndex];
    const next = { ...answers, [q.id]: value };
    setAnswers(next);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setAnimKey((k) => k + 1);
      return;
    }

    // Auswertung
    setStep("loading");
    const scores: Record<Category, number> = { lastentraeger: 0, anpasser: 0, anklaeger: 0 };
    for (const q of questions) {
      scores[q.category] += next[q.id] ?? 0;
    }
    const order: Category[] = ["lastentraeger", "anklaeger", "anpasser"];
    let dom: Category = "lastentraeger";
    let max = -1;
    for (const cat of order) {
      if (scores[cat] > max) {
        max = scores[cat];
        dom = cat;
      }
    }
    setDominantType(dom);

    try {
      await supabase.from("quiz_submissions").insert({
        dominant_type: dom,
        score_lastentraeger: scores.lastentraeger,
        score_anpasser: scores.anpasser,
        score_anklaeger: scores.anklaeger,
      });
    } catch (e) {
      // still show result on error
      console.error("Quiz submission failed", e);
    }

    setStep("result");
  };

  const progress = ((currentIndex + (step === "quiz" ? 0 : 1)) / questions.length) * 100;

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
        {/* START */}
        {step === "start" && (
          <div className="text-center max-w-xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-5">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
            </div>
            <p className="text-secondary font-medium uppercase tracking-wider text-xs md:text-sm mb-3">
              Selbsttest · 2 Minuten
            </p>
            <h2 id="rollencheck-heading" className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-4">
              Der systemische Rollen-Check
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In jedem Familiensystem übernehmen wir unbewusst Rollen – oft schon als Kind.
              Finde in 12 kurzen Fragen heraus, welches Muster heute am stärksten in dir wirkt.
            </p>
            <Button size="lg" onClick={start} className="min-h-[52px] px-8 text-base">
              Test starten
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-xs text-muted-foreground/80 mt-5">
              Anonym · keine E-Mail nötig
            </p>
          </div>
        )}

        {/* QUIZ */}
        {step === "quiz" && (
          <div className="max-w-2xl mx-auto">
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
                <div
                  className="h-full bg-secondary transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${(currentIndex / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Frage */}
            <div key={animKey} className="animate-fade-in-up">
              <p className="font-serif text-xl md:text-2xl lg:text-[1.65rem] leading-snug text-foreground text-center mb-8 md:mb-10 min-h-[5rem]">
                {questions[currentIndex].text}
              </p>

              {/* Antworten */}
              <div className="grid gap-2.5">
                {scaleLabels.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleAnswer(opt.value)}
                    className="group w-full flex items-center gap-4 rounded-xl border border-border bg-background hover:border-secondary hover:bg-secondary/5 hover:-translate-y-0.5 transition-all duration-200 px-4 md:px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  >
                    <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-muted group-hover:bg-secondary group-hover:text-secondary-foreground flex items-center justify-center font-serif text-base md:text-lg font-semibold transition-colors">
                      {opt.value}
                    </span>
                    <span className="text-sm md:text-base text-foreground/90 font-medium">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LOADING */}
        {step === "loading" && (
          <div className="text-center py-16 animate-fade-in-up">
            <Loader2 className="w-10 h-10 text-secondary animate-spin mx-auto mb-5" aria-hidden="true" />
            <p className="font-serif text-lg md:text-xl text-foreground">
              Dein Ergebnis wird vorbereitet …
            </p>
          </div>
        )}

        {/* RESULT */}
        {step === "result" && dominantType && (
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <p className="text-secondary font-medium uppercase tracking-wider text-xs md:text-sm mb-3">
              Dein Profil
            </p>
            <h3 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-4">
              {typeDetails[dominantType].title}
            </h3>
            <p className="font-serif italic text-lg md:text-xl text-secondary mb-6">
              {typeDetails[dominantType].subtitle}
            </p>

            <div className="h-px w-16 bg-border mx-auto mb-6" />

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-10 text-left md:text-center">
              {typeDetails[dominantType].description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={() => booking?.openErstgespraech()}
                className="min-h-[52px] px-8 text-base w-full sm:w-auto"
              >
                Kostenloses Erstgespräch buchen
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
          </div>
        )}
      </div>
    </section>
  );
};
