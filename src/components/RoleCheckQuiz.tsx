import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, ArrowRight, ArrowLeft, RefreshCw } from "lucide-react";
import { useErstgespraech } from "@/components/HashBookingTrigger";
import { trackCTAClick } from "@/lib/tracking";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = "lastentraeger" | "anpasser" | "anklaeger";
type ResultType = Category | "integriert" | "ambivalent";
type Lang = "de" | "en";

interface Question {
  id: number;
  category: Category;
  weight: number;
  text: { de: string; en: string };
}

const questions: Question[] = [
  { id: 1, category: "lastentraeger", weight: 1.0, text: {
    de: "Wenn jemand in meinem nahen Umfeld ein Problem hat, empfinde ich sofort einen inneren Druck, die Lösung finden oder zumindest lindern zu müssen.",
    en: "When someone close to me has a problem, I immediately feel an inner pressure to find the solution or at least to ease it.",
  }},
  { id: 2, category: "anklaeger", weight: 1.0, text: {
    de: "Wenn Dinge nicht nach Plan laufen, ist meine erste innere Reaktion oft Frustration über die Inkompetenz oder Ineffizienz der anderen.",
    en: "When things don't go according to plan, my first inner reaction is often frustration about the incompetence or inefficiency of others.",
  }},
  { id: 3, category: "anpasser", weight: 1.5, text: {
    de: "Ich ertappe mich oft dabei, dass ich meine eigenen Bedürfnisse kaum spüren kann, solange die Bedürfnisse der anderen im Raum nicht geklärt sind.",
    en: "I often catch myself barely being able to feel my own needs as long as the needs of others in the room aren't resolved.",
  }},
  { id: 4, category: "lastentraeger", weight: 1.5, text: {
    de: "Mein eigener Erfolg oder ein Moment echter Ruhe fühlt sich für mich oft erst dann 'erlaubt' an, wenn ich weiß, dass es allen in meinem System gut geht.",
    en: "My own success or a moment of real calm only feels 'allowed' to me once I know that everyone in my system is doing well.",
  }},
  { id: 5, category: "anklaeger", weight: 1.5, text: {
    de: "Ich zeige selten echte Verletzlichkeit, da ich tief im Inneren davon ausgehe, dass Schwäche letztendlich gegen mich verwendet wird.",
    en: "I rarely show real vulnerability, because deep down I assume that weakness will ultimately be used against me.",
  }},
  { id: 6, category: "anpasser", weight: 1.0, text: {
    de: "In Konflikten oder emotional angespannten Situationen neige ich dazu, innerlich zu 'verstummen' oder mich unsichtbar zu machen, um die Lage nicht zu verschlimmern.",
    en: "In conflicts or emotionally tense situations, I tend to inwardly 'go silent' or make myself invisible so I don't make things worse.",
  }},
  { id: 7, category: "lastentraeger", weight: 1.0, text: {
    de: "Unter extremem Stress neige ich dazu, noch mehr Verantwortung an mich zu reißen und Aufgaben anderer zu übernehmen, anstatt um Hilfe zu bitten.",
    en: "Under extreme stress I tend to take on even more responsibility and tasks of others instead of asking for help.",
  }},
  { id: 8, category: "anpasser", weight: 1.5, text: {
    de: "Es fällt mir extrem schwer, klare Grenzen zu setzen und 'Nein' zu sagen, weil die unterschwellige Angst vor Ablehnung übermächtig ist.",
    en: "I find it extremely hard to set clear boundaries and say 'no' because the underlying fear of rejection is overwhelming.",
  }},
  { id: 9, category: "anklaeger", weight: 1.5, text: {
    de: "Bevor ich das Risiko eingehe, von jemandem enttäuscht zu werden, gehe ich lieber auf Distanz und mache Dinge mit mir selbst aus.",
    en: "Before I risk being disappointed by someone, I'd rather create distance and sort things out by myself.",
  }},
  { id: 10, category: "lastentraeger", weight: 1.5, text: {
    de: "Ich ziehe unbewusst viel von meiner Identität und meinem Selbstwert aus der Tatsache, dass ich für andere der 'Fels in der Brandung' bin.",
    en: "Unconsciously, I draw much of my identity and self-worth from being the 'rock in the surf' for others.",
  }},
  { id: 11, category: "anpasser", weight: 1.0, text: {
    de: "Wenn der Druck im Außen zu groß wird, ziehe ich mich innerlich komplett zurück und hoffe einfach, dass der Sturm an mir vorbeizieht.",
    en: "When external pressure gets too high, I withdraw inwardly completely and just hope the storm passes me by.",
  }},
  { id: 12, category: "anklaeger", weight: 1.5, text: {
    de: "In extremen Krisensituationen werde ich oft zynisch, weise anderen hart die Schuld zu und regele die Dinge emotionslos im Alleingang.",
    en: "In extreme crises I often become cynical, harshly blame others, and handle things on my own without emotion.",
  }},
  { id: 13, category: "lastentraeger", weight: 1.5, text: {
    de: "Ich habe häufig das Gefühl, emotionale 'Altlasten' oder eine Schwere aus meiner Herkunftsfamilie zu tragen, die eigentlich gar nicht meine eigene ist.",
    en: "I often have the feeling of carrying emotional 'baggage' or a heaviness from my family of origin that isn't actually my own.",
  }},
  { id: 14, category: "anpasser", weight: 1.5, text: {
    de: "Ich habe oft das unbestimmte Gefühl, dass ich mich anstrengen oder anpassen muss, um meine Daseinsberechtigung im System zu rechtfertigen.",
    en: "I often have the vague feeling that I have to work hard or adapt to justify my right to exist within the system.",
  }},
  { id: 15, category: "anklaeger", weight: 1.0, text: {
    de: "Ich reguliere meinen Stress meistens dadurch, dass ich die Kontrolle übernehme und Härte zeige, anstatt mein Umfeld um Unterstützung zu bitten.",
    en: "I usually regulate my stress by taking control and showing toughness rather than asking those around me for support.",
  }},
];

const scaleLabels: { value: number; label: { de: string; en: string } }[] = [
  { value: 1, label: { de: "Trifft gar nicht zu", en: "Does not apply at all" } },
  { value: 2, label: { de: "Trifft eher nicht zu", en: "Rather does not apply" } },
  { value: 3, label: { de: "Trifft eher zu", en: "Rather applies" } },
  { value: 4, label: { de: "Trifft voll zu", en: "Fully applies" } },
];

type LifeArea = "beruf" | "partnerschaft" | "familie" | "gesundheit";

const lifeAreaOptions: { value: LifeArea; label: { de: string; en: string }; hint: { de: string; en: string } }[] = [
  { value: "beruf", label: { de: "Beruf & Business", en: "Career & Business" }, hint: { de: "Karriere, Führung, Verantwortung", en: "Career, leadership, responsibility" } },
  { value: "partnerschaft", label: { de: "Partnerschaft & Liebe", en: "Partnership & Love" }, hint: { de: "Nähe, Beziehung, Bindung", en: "Closeness, relationship, bonding" } },
  { value: "familie", label: { de: "Herkunftsfamilie", en: "Family of Origin" }, hint: { de: "Eltern, Geschwister, Generationen", en: "Parents, siblings, generations" } },
  { value: "gesundheit", label: { de: "Gesundheit & Energie", en: "Health & Energy" }, hint: { de: "Körper, Erschöpfung, Vitalität", en: "Body, exhaustion, vitality" } },
];

type Profile = { title: string; surface: string; loyalty: string; blindSpot: string; wayOut: string };

const resultContent: Record<Lang, Record<ResultType, Profile>> = {
  de: {
    lastentraeger: {
      title: "Dein primäres Profil: Der Lastenträger (Der Fels)",
      surface: "Du funktionierst. Du bist der Mensch, zu dem andere kommen, wenn es brennt. Du übernimmst Verantwortung – beruflich wie privat – und sorgst dafür, dass das System nicht zusammenbricht. Das gibt dir Kraft und eine gewisse Unersetzbarkeit. Doch der Preis dafür ist hoch: Eine schleichende, tiefe Erschöpfung und das leise Gefühl, dass für deine eigenen Bedürfnisse kein Raum mehr übrig ist.",
      loyalty: "Dieses Verhalten ist kein Charakterzug, es ist eine alte Überlebensstrategie. Systemisch gesehen hast du sehr früh gelernt, dass du stark sein musst, um dein Herkunftssystem zu stabilisieren. Deine unbewusste Loyalität lautet: 'Ich trage es für euch, damit das System sicher bleibt.' Du hast dich unbewusst über die anderen gestellt, um sie zu retten.",
      blindSpot: "Solange du die Lasten der anderen trägst, sprichst du ihnen unbewusst ihre eigene Kraft ab – und brennst dich selbst dabei aus. Du verwechselst gebraucht zu werden mit echter, freier Zugehörigkeit.",
      wayOut: "Kognitiv weißt du längst, dass du mehr loslassen müsstest. Aber das System in dir wehrt sich, weil Loslassen sich wie Verrat anfühlt. In einer 1:1 Familienaufstellung machen wir genau diese Dynamik sichtbar und geben die Verantwortung ehrenvoll zurück.",
    },
    anpasser: {
      title: "Dein primäres Profil: Der Anpasser (Der Ausharrende)",
      surface: "Du bist ein Meister darin, die emotionale Temperatur in einem Raum zu lesen. Du spürst sofort, was andere brauchen, und formst dich so, dass du nirgends aneckst. Du vermeidest Konflikte und stellst eigene Wünsche zurück. Im Inneren fühlst du dich jedoch oft orientierungslos, übersehen oder hast das Gefühl, dein Leben auf einer Art 'Warteschleife' zu verbringen.",
      loyalty: "Deine Anpassung ist ein brillanter, unbewusster Schutzmechanismus. In deinem System hast du gelernt, dass Sichtbarkeit oder das Einfordern von Raum gefährlich ist. Vielleicht gab es schon genug Konflikte oder Schwere. Deine unbewusste Loyalität lautet: 'Ich mache keine Umstände. Ich nehme keinen Raum ein, damit das System nicht noch weiter belastet wird.'",
      blindSpot: "Indem du wartest, bis alle anderen versorgt sind, klammerst du dich aus deinem eigenen Leben aus. Du hoffst unbewusst, dass jemand kommt und dir die Erlaubnis gibt, endlich du selbst zu sein.",
      wayOut: "Diese Erlaubnis wird von außen nicht kommen – du musst dir deinen rechtmäßigen Platz im System zurückerobern. In einer Aufstellung lösen wir die unsichtbare Bremse, damit du aufhörst, das Leben anderer auszuhalten, und beginnst, dein eigenes zu gestalten.",
    },
    anklaeger: {
      title: "Dein primäres Profil: Der autonome Distanzierer",
      surface: "Du wirkst nach außen hin extrem unabhängig, stark und oft hart. Wenn Dinge nicht funktionieren, siehst du sofort, wer die Verantwortung trägt, und baust Druck auf. Du regelst Beziehungen und berufliche Herausforderungen oft durch Leistung, Kontrolle und Abgrenzung. Gleichzeitig spürst du eine innere Isolation, weil echte Nähe dir schwerfällt.",
      loyalty: "Dein Autonomiestreben ist ein massiver Schutzpanzer. In deinem System hast du die Erfahrung gemacht, dass du dich auf andere letztendlich nicht verlassen kannst. Deine unbewusste Loyalität lautet: 'Ich brauche niemanden. Bevor ich verletzt oder enttäuscht werde, gehe ich selbst auf Distanz und übernehme die Kontrolle.'",
      blindSpot: "Deine Härte schützt dich vor Enttäuschung, aber sie isoliert dich auch von echter Verbundenheit. Du kämpfst einen alten Krieg weiter, der längst vorbei ist, und verwechselst dabei emotionale Kälte mit wahrer Unabhängigkeit.",
      wayOut: "Es geht nicht darum, deine Schutzmechanismen einzureißen. Es geht darum, die alte Wut oder den Schmerz im System dorthin zurückzugeben, wo er entstanden ist. In einer Aufstellung entsteht Raum für eine Stärke, die nicht mehr aus Härte, sondern aus innerer Klarheit kommt.",
    },
    integriert: {
      title: "Dein systemisches Profil: In deiner Kraft (Das integrierte System)",
      surface: "Deine Antworten zeigen eine bemerkenswerte systemische Reife und eine gesunde innere Balance. Es gelingt dir im Alltag hervorragend, Verantwortung dort zu lassen, wo sie hingehört, ohne in die Überlastung des Lastenträgers zu kippen. Du nimmst dir deinen Raum, ohne dich anzupassen, und bleibst weich und nahbar, ohne Schutzmauern hochzuziehen.",
      loyalty: "Systemisch gesehen stehst du stabil an deinem eigenen, rechtmäßigen Platz im Leben. Du hast unbewusste Verstrickungen deiner Herkunftsfamilie entweder bereits erfolgreich gelöst oder trägst ein gesundes Urvertrauen in dir. Deine Energie steht dir für dein eigenes Leben frei zur Verfügung.",
      blindSpot: "Dein potenzieller 'blinder Fleck' ist lediglich die Gewohnheit: Erlaubst du dir wirklich schon, diese ungebundene Freiheit und Größe in all deinen Lebensbereichen voll auszuleben?",
      wayOut: "Für Menschen mit einem integrierten Profil geht es im 1:1 Coaching nicht mehr um das Heilen alter Wunden, sondern um reine Potenzialentfaltung. Wie nutzt du diese freie Kraft für deine nächsten großen Visionen? Lass uns im Erstgespräch genau diesen Hebel ansetzen.",
    },
    ambivalent: {
      title: "Dein systemisches Profil: Das ambivalente Spektrum",
      surface: "Deine Antworten zeigen kein einzelnes dominantes Muster – sondern eine fein austarierte Mischung aus allen drei systemischen Dynamiken. Du wechselst situativ zwischen Verantwortung-Tragen, Anpassen und Distanzieren. Nach außen wirkst du oft flexibel und vielseitig. Innerlich kann sich das jedoch anfühlen wie eine ständige Unruhe: Du weißt selbst nicht mehr, welcher Teil von dir gerade 'echt' ist und welcher Teil nur reagiert.",
      loyalty: "Systemisch gesehen hast du gelernt, dich an die emotionale Lage deines Umfelds anzupassen – mal als Lastenträger, mal als Anpasser, mal als Distanzierer. Diese Beweglichkeit war früh deine Überlebensstrategie in einem System, das keine klare Rolle für dich bereithielt. Deine unbewusste Loyalität lautet: 'Ich passe mich der Dynamik an, die gerade gebraucht wird, damit ich überall dazugehören kann.'",
      blindSpot: "Weil du in allen drei Mustern zuhause bist, fehlt dir oft das klare Gespür: Wer bin ich eigentlich, wenn ich nicht reagiere? Deine Stärke – die Flexibilität – wird dann zur Falle, wenn sie verhindert, dass du einen eigenen, stabilen Platz einnimmst.",
      wayOut: "Der erste Schritt ist nicht, eines der Muster zu 'beheben', sondern den Punkt in dir zu finden, von dem aus du nicht mehr reagieren musst. In einer 1:1 Familienaufstellung machen wir sichtbar, wo dein eigener Platz im System ist – jenseits aller übernommenen Rollen.",
    },
  },
  en: {
    lastentraeger: {
      title: "Your primary profile: The Burden-Bearer (The Rock)",
      surface: "You function. You're the person others come to when things are on fire. You take on responsibility – professionally and privately – and make sure the system doesn't collapse. That gives you strength and a certain irreplaceability. But the price is high: a creeping, deep exhaustion and the quiet feeling that there's no room left for your own needs.",
      loyalty: "This behavior isn't a character trait, it's an old survival strategy. Systemically, you learned very early that you have to be strong in order to stabilize your family of origin. Your unconscious loyalty says: 'I carry it for you so that the system stays safe.' You unconsciously placed yourself above the others to rescue them.",
      blindSpot: "As long as you carry others' burdens, you unconsciously deny them their own strength – and burn yourself out in the process. You confuse being needed with real, free belonging.",
      wayOut: "Cognitively you have long known you should let go more. But the system inside you resists, because letting go feels like betrayal. In a 1:1 family constellation we make exactly this dynamic visible and return responsibility with honor.",
    },
    anpasser: {
      title: "Your primary profile: The Adapter (The Endurer)",
      surface: "You are a master at reading the emotional temperature of a room. You sense immediately what others need and shape yourself so you never get in anyone's way. You avoid conflicts and put your own wishes aside. Inside, however, you often feel disoriented, overlooked, or as though you are spending your life in a kind of 'holding pattern'.",
      loyalty: "Your adaptation is a brilliant, unconscious protective mechanism. In your system you learned that visibility or claiming space is dangerous. Perhaps there was already enough conflict or heaviness. Your unconscious loyalty says: 'I won't cause any trouble. I won't take up space, so the system isn't burdened further.'",
      blindSpot: "By waiting until everyone else is taken care of, you exclude yourself from your own life. You unconsciously hope someone will come and give you permission to finally be yourself.",
      wayOut: "That permission won't come from outside – you have to reclaim your rightful place in the system. In a constellation we release the invisible brake, so you stop enduring other people's lives and begin to shape your own.",
    },
    anklaeger: {
      title: "Your primary profile: The Autonomous Distancer",
      surface: "Outwardly you appear extremely independent, strong, and often hard. When things don't work, you immediately see who is responsible and apply pressure. You handle relationships and professional challenges through performance, control, and demarcation. At the same time you sense an inner isolation because real closeness is difficult for you.",
      loyalty: "Your striving for autonomy is a massive protective armor. In your system you experienced that ultimately you cannot rely on others. Your unconscious loyalty says: 'I don't need anyone. Before I get hurt or disappointed, I create distance and take control myself.'",
      blindSpot: "Your toughness protects you from disappointment, but it also isolates you from real connection. You continue fighting an old war that ended long ago, mistaking emotional coldness for true independence.",
      wayOut: "It's not about tearing down your protective mechanisms. It's about returning the old anger or pain in the system to where it originated. In a constellation, space opens up for a strength that no longer comes from hardness, but from inner clarity.",
    },
    integriert: {
      title: "Your systemic profile: In your power (The integrated system)",
      surface: "Your answers show remarkable systemic maturity and a healthy inner balance. In everyday life, you do an excellent job of leaving responsibility where it belongs, without tipping into the burden-bearer's overload. You claim your space without adapting, and you stay soft and approachable without putting up protective walls.",
      loyalty: "Systemically you stand stably in your own rightful place in life. You have either already resolved unconscious entanglements of your family of origin, or you carry a healthy basic trust within you. Your energy is freely available for your own life.",
      blindSpot: "Your potential 'blind spot' is merely habit: do you already truly allow yourself to live this unbound freedom and greatness fully in all areas of life?",
      wayOut: "For people with an integrated profile, 1:1 coaching is no longer about healing old wounds, but about pure potential development. How do you use this free strength for your next big visions? Let's use the intro call to apply exactly this lever.",
    },
    ambivalent: {
      title: "Your systemic profile: The ambivalent spectrum",
      surface: "Your answers don't show a single dominant pattern – but a finely balanced mix of all three systemic dynamics. You switch situationally between bearing responsibility, adapting, and distancing. Outwardly you often seem flexible and versatile. Inwardly, however, this can feel like constant restlessness: you no longer know which part of you is 'real' right now and which is only reacting.",
      loyalty: "Systemically you learned to adapt to the emotional situation of your environment – sometimes as burden-bearer, sometimes as adapter, sometimes as distancer. This flexibility was your early survival strategy in a system that did not hold a clear role for you. Your unconscious loyalty says: 'I adapt to whatever dynamic is needed, so I can belong everywhere.'",
      blindSpot: "Because you are at home in all three patterns, you often lack a clear sense: who am I, actually, when I'm not reacting? Your strength – flexibility – becomes a trap when it prevents you from taking your own stable place.",
      wayOut: "The first step is not to 'fix' one of the patterns, but to find the point inside yourself from which you no longer have to react. In a 1:1 family constellation we make visible where your own place in the system is – beyond all the roles you've taken on.",
    },
  },
};

const categoryLabels: Record<Lang, Record<Category, string>> = {
  de: { lastentraeger: "Der Lastenträger", anpasser: "Der Anpasser", anklaeger: "Der Distanzierer" },
  en: { lastentraeger: "The Burden-Bearer", anpasser: "The Adapter", anklaeger: "The Distancer" },
};

const intensityLabels: Record<Lang, string[]> = {
  de: [
    "Kaum ausgeprägt · Gesundes Fundament",
    "Leichte Ausprägung · Situative Tendenz",
    "Moderate Ausprägung · Aktive Dynamik",
    "Starke Ausprägung · Dominante Verstrickung",
  ],
  en: [
    "Barely present · Healthy foundation",
    "Slight presence · Situational tendency",
    "Moderate presence · Active dynamic",
    "Strong presence · Dominant entanglement",
  ],
};

const intensityFor = (percent: number, lang: Lang): { label: string; tone: string } => {
  const labels = intensityLabels[lang];
  if (percent <= 25) return { label: labels[0], tone: "text-muted-foreground" };
  if (percent <= 55) return { label: labels[1], tone: "text-secondary/80" };
  if (percent <= 80) return { label: labels[2], tone: "text-secondary" };
  return { label: labels[3], tone: "text-primary" };
};

export const RoleCheckQuiz = () => {
  const { t, language } = useLanguage();
  const lang: Lang = language === "en" ? "en" : "de";
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

    const rawScores: Record<Category, number> = { lastentraeger: 0, anpasser: 0, anklaeger: 0 };
    const weightedScores: Record<Category, number> = { lastentraeger: 0, anpasser: 0, anklaeger: 0 };
    const weightTotals: Record<Category, number> = { lastentraeger: 0, anpasser: 0, anklaeger: 0 };

    for (const q of questions) {
      const ans = allAnswers[q.id] ?? 0;
      rawScores[q.category] += ans;
      weightedScores[q.category] += ans * q.weight;
      weightTotals[q.category] += q.weight;
    }

    const avgPer: Record<Category, number> = {
      lastentraeger: weightedScores.lastentraeger / weightTotals.lastentraeger,
      anpasser: weightedScores.anpasser / weightTotals.anpasser,
      anklaeger: weightedScores.anklaeger / weightTotals.anklaeger,
    };

    const userMean = (avgPer.lastentraeger + avgPer.anpasser + avgPer.anklaeger) / 3;
    const absolutePct = (cat: Category) => Math.max(0, Math.min(100, ((avgPer[cat] - 1) / 3) * 100));
    const relativePct = (cat: Category) => Math.max(0, Math.min(100, 50 + (avgPer[cat] - userMean) * 40));
    const hybrid = (cat: Category) => Math.round(absolutePct(cat) * 0.55 + relativePct(cat) * 0.45);

    const pct: Record<Category, number> = {
      lastentraeger: hybrid("lastentraeger"),
      anpasser: hybrid("anpasser"),
      anklaeger: hybrid("anklaeger"),
    };
    setPercentages(pct);

    const cats: Category[] = ["lastentraeger", "anpasser", "anklaeger"];
    const sorted = [...cats].sort((a, b) => {
      if (pct[b] !== pct[a]) return pct[b] - pct[a];
      return weightedScores[b] - weightedScores[a];
    });
    const topCategory = sorted[0];

    const maxPct = pct[sorted[0]];
    const minPct = pct[sorted[2]];
    const spread = maxPct - minPct;

    const isIntegrated = pct.lastentraeger < 30 && pct.anpasser < 30 && pct.anklaeger < 30;
    const isAmbivalent = !isIntegrated && spread <= 7 && maxPct >= 35;

    const primary: ResultType = isIntegrated ? "integriert" : isAmbivalent ? "ambivalent" : topCategory;
    setPrimaryType(primary);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
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

  const progressText = t("quiz.progressOf")
    .replace("{n}", String(currentIndex + 1))
    .replace("{total}", String(questions.length));

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
            <motion.div key="start" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.5, ease: "easeOut" }} className="text-center max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-5">
                <Sparkles className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="text-secondary font-medium uppercase tracking-wider text-xs md:text-sm mb-3">
                {t("quiz.eyebrow")}
              </p>
              <h2 id="rollencheck-heading" className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                {t("quiz.headline")}
              </h2>
              <p className="font-serif italic text-lg md:text-xl text-secondary mb-6">
                {t("quiz.subheadline")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("quiz.intro")}
              </p>
              <Button size="lg" onClick={start} className="min-h-[52px] px-8 text-base">
                {t("quiz.startButton")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <p className="text-xs text-muted-foreground/80 mt-5">{t("quiz.anonymousNote")}</p>
            </motion.div>
          )}

          {step === "quiz" && (
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3 text-xs md:text-sm">
                  <span className="text-muted-foreground font-medium">{progressText}</span>
                  <span className="text-secondary font-medium">
                    {Math.round((currentIndex / questions.length) * 100)}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <motion.div className="h-full bg-secondary rounded-full" initial={false} animate={{ width: `${(currentIndex / questions.length) * 100}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35, ease: "easeOut" }}>
                  <p className="font-serif text-xl md:text-2xl lg:text-[1.6rem] leading-snug text-foreground text-center mb-8 md:mb-10 min-h-[6rem]">
                    {questions[currentIndex].text[lang]}
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
                          <span className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-serif text-base md:text-lg font-semibold transition-colors ${
                            isSelected
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-muted group-hover:bg-secondary group-hover:text-secondary-foreground"
                          }`}>
                            {opt.value}
                          </span>
                          <span className="text-sm md:text-base text-foreground/90 font-medium">
                            {opt.label[lang]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <Button type="button" variant="ghost" size="sm" onClick={handleBack} disabled={currentIndex === 0 || isAdvancing} className="text-muted-foreground hover:text-foreground disabled:opacity-40">
                      <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                      {t("quiz.backButton")}
                    </Button>
                    {selected !== null && (
                      <span className="text-xs text-muted-foreground">{t("quiz.changeNote")}</span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {step === "lifearea" && (
            <motion.div key="lifearea" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45, ease: "easeOut" }} className="max-w-2xl mx-auto text-center">
              <p className="text-secondary font-medium uppercase tracking-wider text-xs md:text-sm mb-3">
                {t("quiz.lifeArea.eyebrow")}
              </p>
              <h3 className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
                {t("quiz.lifeArea.question")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10">
                {t("quiz.lifeArea.hint")}
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
                        {opt.label[lang]}
                      </p>
                      <p className="text-sm text-muted-foreground">{opt.hint[lang]}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <Button type="button" variant="ghost" size="sm" onClick={handleLifeAreaBack} disabled={lifeArea !== null} className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("quiz.backToQuestions")}
                </Button>
              </div>
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center py-16">
              <Loader2 className="w-10 h-10 text-secondary animate-spin mx-auto mb-5" aria-hidden="true" />
              <p className="font-serif text-lg md:text-xl text-foreground">{t("quiz.loading")}</p>
            </motion.div>
          )}

          {step === "result" && primaryType && (
            <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="max-w-2xl mx-auto">
              <p className="text-secondary font-medium uppercase tracking-wider text-xs md:text-sm mb-3 text-center">
                {t("quiz.result.eyebrow")}
              </p>

              <div className="mb-10 md:mb-12 space-y-5 md:space-y-6">
                {(["lastentraeger", "anpasser", "anklaeger"] as Category[]).map((cat, idx) => {
                  const value = percentages[cat];
                  const intensity = intensityFor(value, lang);
                  const isDominant = primaryType !== "integriert" && primaryType !== "ambivalent" && primaryType === cat;
                  return (
                    <motion.div key={cat} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: "easeOut" }}>
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <p className={`font-serif text-base md:text-lg ${isDominant ? "text-foreground font-semibold" : "text-foreground/85"}`}>
                          {categoryLabels[lang][cat]}
                        </p>
                        <p className={`text-sm md:text-base font-medium tabular-nums ${isDominant ? "text-secondary" : "text-muted-foreground"}`}>
                          {value}%
                        </p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <motion.div className={`h-full rounded-full ${isDominant ? "bg-secondary" : "bg-secondary/40"}`} initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ delay: 0.25 + idx * 0.1, duration: 0.9, ease: "easeOut" }} />
                      </div>
                      <p className={`mt-1.5 text-xs md:text-[0.78rem] ${intensity.tone}`}>
                        {intensity.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <h3 className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-6 leading-tight text-center">
                {resultContent[lang][primaryType].title}
              </h3>

              <div className="h-px w-16 bg-border mx-auto mb-8" />

              <div className="space-y-7 text-foreground/85 text-base md:text-[1.05rem] leading-[1.8]">
                <p>{resultContent[lang][primaryType].surface}</p>

                <div>
                  <h4 className="font-serif text-lg md:text-xl text-foreground font-semibold mb-2">
                    {t("quiz.result.loyaltyHeading")}
                  </h4>
                  <p>{resultContent[lang][primaryType].loyalty}</p>
                </div>

                <div>
                  <h4 className="font-serif text-lg md:text-xl text-foreground font-semibold mb-2">
                    {t("quiz.result.blindSpotHeading")}
                  </h4>
                  <p>{resultContent[lang][primaryType].blindSpot}</p>
                </div>

                <div>
                  <h4 className="font-serif text-lg md:text-xl text-foreground font-semibold mb-2">
                    {t("quiz.result.wayOutHeading")}
                  </h4>
                  <p>{resultContent[lang][primaryType].wayOut}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" asChild className="min-h-[52px] px-8 text-base w-full sm:w-auto">
                  <a
                    href="/kontakt#erstgespraech"
                    onClick={(e) => {
                      if (booking) {
                        e.preventDefault();
                        booking.openErstgespraech();
                      }
                      trackCTAClick("rollencheck_result", `quiz_${primaryType}`, "link");
                    }}
                  >
                    {primaryType === "integriert"
                      ? t("quiz.cta.integrated")
                      : primaryType === "ambivalent"
                      ? t("quiz.cta.ambivalent")
                      : t("quiz.cta.default")}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    start();
                    requestAnimationFrame(() => {
                      document.getElementById("rollencheck-quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    });
                  }}
                  className="min-h-[52px] text-muted-foreground hover:text-foreground"
                >
                  <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("quiz.retakeButton")}
                </Button>
              </div>

              <p className="mt-10 text-xs md:text-sm text-muted-foreground/80 leading-relaxed border-t border-border/60 pt-6 max-w-2xl mx-auto text-center">
                <strong className="font-medium text-muted-foreground">{t("quiz.disclaimer.label")}</strong>
                {t("quiz.disclaimer.text")}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
