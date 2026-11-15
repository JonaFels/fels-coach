import { useEffect } from "react";
import { BookingPageLayout, type BookingPageTexts } from "@/components/BookingPageLayout";

const texts: BookingPageTexts = {
  lang: "en",
  brand: "Jona Fels · Systemic Constellation Facilitator",
  eyebrow: "Book a session",
  title: "Book your 1:1 Systemic Constellation",
  subtitle: "90 minutes · €110 · in person in Freiburg or online via video",
  trust: "Pay after the session – no prepayment",
  groupLabel: "Choose session type",
  onsite: {
    label: "In person in Freiburg",
    hint: "Practice room, Karlstraße 51, 79104 Freiburg, Germany",
    url: "https://cal.meetergo.com/jona/aufstellung-freiburg?lang=en",
    iframeTitle: "Booking – 1:1 Systemic Constellation in person",
  },
  online: {
    label: "Online via video",
    hint: "Video call – from wherever you are",
    url: "https://cal.meetergo.com/jona/aufstellung-online?lang=en",
    iframeTitle: "Booking – 1:1 Systemic Constellation online",
  },
  discoveryPrompt: "Not sure yet whether a constellation is right for you?",
  discoveryLink: "Book a free 20-minute discovery call",
  discoveryUrl: "https://cal.meetergo.com/jona/discovery-call",
  footer: "Jona Fels · Systemic Constellation Work",
};

const Appointment = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Book your session – 1:1 Systemic Constellation | Jona Fels";
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

export default Appointment;
