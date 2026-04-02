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
          "@id": "https://www.fels-coach.de/#service",
          name: "Jona Fels – Systemisches Coaching & Familienaufstellung Freiburg",
          alternateName: "Familienaufstellung Freiburg",
          url: "https://www.fels-coach.de",
          telephone: "+4917667608617",
          email: "info@fels-coach.de",
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
          image: "https://www.fels-coach.de/web-app-manifest-512x512.png",
          logo: "https://www.fels-coach.de/web-app-manifest-512x512.png",
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
            "systemische Aufstellung Freiburg",
            "systemisches Coaching Freiburg",
            "Coaching Freiburg",
            "Familientherapie Freiburg",
            "innere Blockaden lösen",
            "unbewusste Muster auflösen",
            "persönliche Entwicklung Coaching",
          ],
          founder: {
            "@id": "https://www.fels-coach.de/#person",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Coaching-Angebote",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://www.fels-coach.de/#service-kennenlernen",
                  name: "Kennenlernen – Systemisches Coaching",
                  description:
                    "Erstes Kennenlernen und Einstieg in die systemische Arbeit. Wir klären Ihr Anliegen und schauen, ob die Chemie stimmt.",
                  provider: { "@id": "https://www.fels-coach.de/#service" },
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
                  "@id": "https://www.fels-coach.de/#service-familienaufstellung",
                  name: "Systemisches Coaching mit Familienaufstellung",
                  description:
                    "Tiefgreifende Einzelsitzung mit systemischer Aufstellungsarbeit und Bodenankern. Unbewusste Familienmuster und Blockaden erkennen und nachhaltig lösen.",
                  provider: { "@id": "https://www.fels-coach.de/#service" },
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
                  "@id": "https://www.fels-coach.de/#ebook",
                  name: "Der Weg zum Ganz-Sein",
                  description:
                    "Kostenloses E-Book über systemische Familienaufstellungen und persönliche Transformation.",
                  author: { "@id": "https://www.fels-coach.de/#person" },
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
          "@id": "https://www.fels-coach.de/#person",
          name: "Jona Fels",
          givenName: "Jona",
          familyName: "Fels",
          jobTitle: "Systemischer Coach & Familienaufsteller",
          description:
            "Systemischer Coach und Familienaufsteller in Freiburg. Spezialisiert auf Einzelaufstellungen mit Bodenankern, lösungsorientiertes Coaching und persönliche Entwicklung.",
          url: "https://www.fels-coach.de/ueber-mich",
          image: "https://www.fels-coach.de/assets/jona-fels-systemisches-coaching.webp",
          email: "info@fels-coach.de",
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
          worksFor: { "@id": "https://www.fels-coach.de/#service" },
        },
        {
          "@type": "WebSite",
          "@id": "https://www.fels-coach.de/#website",
          name: "Jona Fels – Systemisches Coaching & Familienaufstellung Freiburg",
          alternateName: "Familienaufstellung Freiburg – Jona Fels",
          url: "https://www.fels-coach.de",
          description:
            "Systemische Familienaufstellungen und Coaching in Freiburg im Breisgau. Unbewusste Muster erkennen und innere Blockaden lösen.",
          publisher: { "@id": "https://www.fels-coach.de/#service" },
          inLanguage: ["de", "en"],
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Start",
              item: "https://www.fels-coach.de",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Angebote",
              item: "https://www.fels-coach.de/angebote",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Familienaufstellung Freiburg",
              item: "https://www.fels-coach.de/systemische-familienaufstellung-freiburg",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Über mich",
              item: "https://www.fels-coach.de/ueber-mich",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Kontakt",
              item: "https://www.fels-coach.de/kontakt",
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Was ist eine systemische Familienaufstellung und wie läuft sie bei mir in Freiburg ab?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Eine systemische Familienaufstellung macht verborgene Dynamiken in Systemen sichtbar. In meinem Praxisraum in der Karlstraße 51 (Freiburg) schauen wir uns in geschützter Atmosphäre an, was im Argen liegt, und erarbeiten gemeinsam nachhaltige Lösungswege für Ihre Blockaden.",
              },
            },
            {
              "@type": "Question",
              name: "Was kostet ein Coaching oder eine Familienaufstellung?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Transparenz ist mir wichtig: Eine reguläre Coaching-Sitzung kostet 70 € pro Einheit (80 Minuten). Mein Ziel ist es, Ihnen effiziente und wirkungsvolle Impulse zu geben, die Sie wirklich weiterbringen.",
              },
            },
            {
              "@type": "Question",
              name: "Bietest du auch Termine am Wochenende an?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, absolut. Da viele meiner Klienten berufstätig sind, biete ich meine Sitzungen spezialisiert am Samstag zwischen 14:00 und 20:00 Uhr an. So haben Sie die nötige Ruhe, um sich ohne Alltagsstress auf den Prozess einzulassen.",
              },
            },
            {
              "@type": "Question",
              name: "Wo findet das Coaching statt?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sie finden mich zentral in der Karlstraße 51, 79104 Freiburg im Breisgau. Mein Praxisraum bietet eine ruhige, geschützte Atmosphäre für Ihre Coaching-Sitzungen.",
              },
            },
            {
              "@type": "Question",
              name: "Wie kann ich starten und ist ein Vorgespräch möglich?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Der erste Schritt ist ganz einfach: Frag über den Button auf der Webseite ein kostenloses 30-minütiges Vorgespräch an. So können wir schauen, ob die Chemie stimmt und wie ich dich am besten unterstützen kann – völlig unverbindlich.",
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
