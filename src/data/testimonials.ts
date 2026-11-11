/**
 * Klientenstimmen (Originale auf Deutsch, englische Fassung übersetzt und
 * auf der Seite als Übersetzung gekennzeichnet).
 * Teile mit bold: true werden hervorgehoben.
 */
export type TestimonialPart = { text: string; bold?: boolean };

export interface Testimonial {
  name: string;
  age?: number;
  de: TestimonialPart[];
  en: TestimonialPart[];
}

export const miriam: Testimonial = {
  name: "Miriam",
  age: 29,
  de: [
    { text: "Ich hatte eine 1:1 Aufstellung bei Jona und habe mich von Anfang an durch seine " },
    { text: "tiefgehende Präsenz", bold: true },
    { text: " sehr wohl gefühlt. Ich konnte mich in einem gut gehaltenen Rahmen mit meinem familiären Thema auseinandersetzen und gewann an " },
    { text: "Klarheit und Sicherheit", bold: true },
    { text: ". Ich bin sehr dankbar für die tiefen Erkenntnisse und die aufmerksame, einfühlsame Begleitung." },
  ],
  en: [
    { text: "I had a 1:1 constellation with Jona and felt at ease from the very beginning thanks to his " },
    { text: "deep presence", bold: true },
    { text: ". In a well-held space I was able to work on my family topic and gained " },
    { text: "clarity and confidence", bold: true },
    { text: ". I'm very grateful for the deep insights and the attentive, empathetic guidance." },
  ],
};

export const johannes: Testimonial = {
  name: "Johannes",
  age: 39,
  de: [
    { text: "Jona hat ein " },
    { text: "super Gespür", bold: true },
    { text: " den eigenen Prozess genau da hin zu begleiten, wo es hängt. Es werden einem Dynamiken klar, die vorher so nicht bewusst waren. Dies führt zu einem " },
    { text: "tieferen Verständnis", bold: true },
    { text: " und einem Loslassen. Absolute Empfehlung. Ich komme gerne wieder." },
  ],
  en: [
    { text: "Jona has a " },
    { text: "great sense", bold: true },
    { text: " for guiding your process exactly to the point where it's stuck. Dynamics become clear that you weren't aware of before. This leads to a " },
    { text: "deeper understanding", bold: true },
    { text: " and to letting go. Highly recommended – I'll gladly come back." },
  ],
};

export const translatedNote = "Translated from German";
