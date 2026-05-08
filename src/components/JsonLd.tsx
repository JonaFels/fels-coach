import { useEffect } from "react";

export const JsonLd = () => {
  useEffect(() => {
    const existing = document.querySelector('script[data-main-schema="true"]');
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["ProfessionalService", "LocalBusiness"],
          "@id": "https://fels-coach.de/#service",
          name: "Systemisches Coaching & Familienaufstellung in Freiburg – Jona Fels",
          alternateName: [
            "Jona Fels – Familienaufstellung Freiburg",
            "Jona Fels – Systemischer Coach Freiburg",
            "Familienstellen Freiburg – Jona Fels",
          ],
          url: "https://fels-coach.de",
          telephone: "+4917667608617",
          email: "jona@fels-coach.de",
          description:
            "Systemische Familienaufstellung und Coaching in Freiburg im Breisgau. Unbewusste Muster erkennen, Blockaden lösen und persönliche Veränderung anstoßen – in Einzelsitzungen mit Bodenankern.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Karlstraße 51",
            addressLocality: "Freiburg im Breisgau",
            addressRegion: "Baden-Württemberg",
            postalCode: "79104",
            addressCountry: "DE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 47.9977,
            longitude: 7.8581,
          },
          image: "https://fels-coach.de/web-app-manifest-512x512.png",
          logo: "https://fels-coach.de/web-app-manifest-512x512.png",
          priceRange: "40 €–70 €",
          currenciesAccepted: "EUR",
          paymentAccepted: "Cash, Bank Transfer",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "14:00",
              closes: "20:00",
            },
          ],
          areaServed: [
            { "@type": "City", name: "Freiburg im Breisgau" },
            { "@type": "City", name: "Emmendingen" },
            { "@type": "City", name: "Bad Krozingen" },
            { "@type": "City", name: "Breisach am Rhein" },
            { "@type": "City", name: "Müllheim" },
            { "@type": "City", name: "Waldkirch" },
            { "@type": "City", name: "Lörrach" },
            { "@type": "City", name: "Offenburg" },
            {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 47.9977,
                longitude: 7.8581,
              },
              geoRadius: "50000",
            },
          ],
          sameAs: [
            "https://www.facebook.com/profile.php?id=61562014600393",
            "https://www.instagram.com/jona.fels/",
            "https://www.linkedin.com/in/jona-fels-coach/",
          ],
          keywords: [
            "Familienaufstellung Freiburg",
            "Familienstellen Freiburg",
            "Familienstellen",
            "Familienstellen Einzelsitzung",
            "Familienstellen Einzelsetting",
            "Familienstellen Einzelsitzung Freiburg",
            "Familienstellen Einzelsetting Freiburg",
            "Familienaufstellung Einzelsitzung",
            "Familienaufstellung Einzelsetting",
            "Einzelaufstellung Freiburg",
            "Familienstellen 1 zu 1",
            "Familienstellen mit Bodenankern",
            "systemische Aufstellung Freiburg",
            "systemischer Coach Freiburg",
            "systemischer Coach",
            "systemisches Coaching Freiburg",
            "Coach Freiburg",
            "Coaching Freiburg",
            "Familientherapie Freiburg",
            "innere Blockaden lösen",
            "unbewusste Muster auflösen",
            "persönliche Entwicklung Coaching",
          ],
          founder: {
            "@id": "https://fels-coach.de/#person",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Coaching-Angebote",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://fels-coach.de/#service-kennenlernen",
                  name: "Kennenlernen – Systemisches Coaching",
                  description:
                    "Erstes Kennenlernen und Einstieg in die systemische Arbeit. Wir klären Ihr Anliegen und schauen, ob die Chemie stimmt.",
                  provider: { "@id": "https://fels-coach.de/#service" },
                  areaServed: "Freiburg im Breisgau",
                  serviceType: "Systemisches Coaching",
                },
                price: "40.00",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "40.00",
                  priceCurrency: "EUR",
                  unitText: "Sitzung",
                },
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://fels-coach.de/#service-familienaufstellung",
                  name: "Coaching mit Einzelaufstellung",
                  description:
                    "Tiefgreifende Einzelsitzung mit systemischer Aufstellungsarbeit und Bodenankern. Unbewusste Familienmuster und Blockaden erkennen und nachhaltig lösen.",
                  provider: { "@id": "https://fels-coach.de/#service" },
                  areaServed: "Freiburg im Breisgau",
                  serviceType: "Systemische Familienaufstellung",
                },
                price: "70.00",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "70.00",
                  priceCurrency: "EUR",
                  unitText: "80 Minuten",
                },
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Book",
                  "@id": "https://fels-coach.de/#ebook",
                  name: "Der Weg zum Ganz-Sein",
                  description:
                    "Kostenloses E-Book über systemische Familienaufstellungen und persönliche Transformation.",
                  author: { "@id": "https://fels-coach.de/#person" },
                  inLanguage: "de",
                  bookFormat: "https://schema.org/EBook",
                },
                price: "0.00",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
              },
            ],
          },
        },
        {
          "@type": "Person",
          "@id": "https://fels-coach.de/#person",
          name: "Jona Fels",
          givenName: "Jona",
          familyName: "Fels",
          jobTitle: "Systemischer Coach & Familienaufsteller",
          description:
            "Systemischer Coach und Familienaufsteller in Freiburg. Spezialisiert auf Einzelaufstellungen mit Bodenankern, lösungsorientiertes Coaching und persönliche Entwicklung.",
          url: "https://fels-coach.de/ueber-mich",
          image: "https://fels-coach.de/assets/jona-fels-systemisches-coaching.webp",
          email: "jona@fels-coach.de",
          telephone: "+4917667608617",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Karlstraße 51",
            addressLocality: "Freiburg im Breisgau",
            addressRegion: "Baden-Württemberg",
            postalCode: "79104",
            addressCountry: "DE",
          },
          sameAs: [
            "https://www.facebook.com/profile.php?id=61562014600393",
            "https://www.instagram.com/jona.fels/",
            "https://www.linkedin.com/in/jona-fels-coach/",
          ],
          knowsAbout: [
            "Systemische Familienaufstellung",
            "Familienaufstellung mit Bodenankern",
            "Systemisches Coaching",
            "Lösungsorientiertes Coaching",
            "Persönlichkeitsentwicklung",
            "Unbewusste Familienmuster",
            "Innere Blockaden lösen",
          ],
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Ausbildung",
              name: "Systemischer Familienaufsteller (in Ausbildung)",
            },
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Ausbildung",
              name: "Heilpraktiker-Ausbildung",
            },
          ],
          worksFor: { "@id": "https://fels-coach.de/#service" },
        },
        {
          "@type": "WebSite",
          "@id": "https://fels-coach.de/#website",
          name: "Systemisches Coaching & Familienaufstellung in Freiburg – Jona Fels",
          alternateName: "Jona Fels – Familienaufstellung Freiburg",
          url: "https://fels-coach.de",
          description:
            "Systemische Familienaufstellungen und Coaching in Freiburg im Breisgau. Unbewusste Muster erkennen und innere Blockaden lösen.",
          publisher: { "@id": "https://fels-coach.de/#service" },
          inLanguage: ["de", "en"],
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Start",
              item: "https://fels-coach.de",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Angebote",
              item: "https://fels-coach.de/angebote",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Familienaufstellung Freiburg",
              item: "https://fels-coach.de/systemische-familienaufstellung-freiburg",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Über mich",
              item: "https://fels-coach.de/ueber-mich",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Kontakt",
              item: "https://fels-coach.de/kontakt",
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Muss ich meine Familie zur Aufstellung mitbringen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein – und das ist für viele eine große Erleichterung. Wir arbeiten ausschließlich im geschützten 1:1 Setting in meinem Praxisraum in Freiburg. Statt mit fremden Stellvertretern nutzen wir Bodenanker (z. B. kleine Tücher oder Karten), die wir im Raum positionieren. So entsteht ein klares Bild deines Systems – ohne dass jemand außer dir und mir anwesend ist.",
              },
            },
            {
              "@type": "Question",
              name: "Was ist, wenn während der Sitzung starke Emotionen hochkommen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Das darf sein – und ich halte den Rahmen für dich. Mein Job ist es, präsent und ruhig dabei zu sein, dich zu begleiten und dafür zu sorgen, dass du am Ende nicht aufgewühlt, sondern geerdet wieder rausgehst. Wir arbeiten in deinem Tempo, nichts wird erzwungen.",
              },
            },
            {
              "@type": "Question",
              name: "Wie viele Sitzungen brauche ich, bis sich etwas verändert?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Das ist sehr individuell. Manche Klient:innen spüren bereits nach einer Aufstellung eine deutliche Entlastung, andere kommen über mehrere Monate in lockerer Folge. Häufig sind 3 bis 6 Sitzungen ein guter Rahmen, um ein Thema wirklich in die Tiefe zu bearbeiten – ich dränge dich aber zu nichts.",
              },
            },
            {
              "@type": "Question",
              name: "Übernimmt die Krankenkasse die Kosten?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein. Coaching und Familienaufstellung sind keine Heilbehandlung im Sinne der gesetzlichen Krankenkassen und werden daher als Selbstzahlerleistung angeboten. Eine Sitzung (80 Min.) kostet 70 €. Dafür bist du frei in der Wahl deines Wegs – ohne Diagnose, ohne Aktenvermerk.",
              },
            },
            {
              "@type": "Question",
              name: "Wie kann ich starten und ist ein Vorgespräch möglich?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Der erste Schritt ist einfach: Frag über den Button auf der Webseite ein kostenloses 30-minütiges Vorgespräch an. So schauen wir, ob die Chemie stimmt und wie ich dich am besten unterstützen kann – völlig unverbindlich.",
              },
            },
            {
              "@type": "Question",
              name: "Wo findet das Coaching statt und gibt es Wochenend-Termine?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Mein Praxisraum liegt zentral in der Karlstraße 51, 79104 Freiburg im Breisgau (Tram 3). Da viele Klient:innen berufstätig sind, biete ich meine Sitzungen schwerpunktmäßig samstags zwischen 14:00 und 20:00 Uhr an – mit Ruhe und ohne Alltagsstress.",
              },
            },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-main-schema", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};
