import { useEffect } from "react";
import { BookingPageLayout, type BookingPageTexts } from "@/components/BookingPageLayout";

const texts: BookingPageTexts = {
  lang: "de",
  brand: "Jona Fels · Systemischer Aufsteller",
  eyebrow: "Termin buchen",
  title: "Buche deine systemische 1:1-Aufstellung",
  subtitle: "90 Minuten · 110 € · vor Ort in Freiburg oder online per Video",
  trust: "Bezahlung erst nach der Sitzung – keine Vorkasse",
  groupLabel: "Art des Termins wählen",
  onsite: {
    label: "Vor Ort in Freiburg",
    hint: "Praxisraum Karlstraße 51, 79104 Freiburg",
    url: "https://cal.meetergo.com/jona/aufstellung-freiburg?lang=de",
    iframeTitle: "Terminbuchung – systemische 1:1-Aufstellung vor Ort",
  },
  online: {
    label: "Online per Video",
    hint: "Per Videocall – bequem von zu Hause",
    url: "https://cal.meetergo.com/jona/aufstellung-online?lang=de",
    iframeTitle: "Terminbuchung – systemische 1:1-Aufstellung online",
  },
  discoveryPrompt: "Noch unsicher, ob eine Aufstellung das Richtige für dich ist?",
  discoveryLink: "Kostenloses Orientierungsgespräch (20 Min.) buchen",
  discoveryUrl: "https://cal.meetergo.com/jona/discovery-call?lang=de",
  footer: "Jona Fels · Systemische Aufstellungen & Familienaufstellung",
};

const Start = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Termin buchen – systemische 1:1-Aufstellung | Jona Fels";
    const meta = document.querySelector('meta[name="robots"]');
    const created = !meta;
    const tag = meta ?? document.createElement("meta");
    tag.setAttribute("name", "robots");
    tag.setAttribute("content", "noindex, nofollow");
    if (created) document.head.appendChild(tag);
    return () => {
      document.title = prev;
      if (created) tag.remove();
    };
  }, []);

  return <BookingPageLayout t={texts} />;
};

export default Start;
