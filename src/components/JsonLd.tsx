import { useEffect } from "react";

export const JsonLd = () => {
  useEffect(() => {
    const existing = document.querySelector('script[data-main-schema="true"]');
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://fels-coach.de/#service",
          name: "Jona Fels - Systemisches Coaching & Familienaufstellungen",
          url: "https://fels-coach.de",
          telephone: "+4917667608617",
          email: "info@fels-coach.de",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Karlstraße 51",
            addressLocality: "Freiburg im Breisgau",
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
          priceRange: "80€",
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
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 47.9977,
              longitude: 7.8581,
            },
            geoRadius: "50000",
          },
          sameAs: [
            "https://www.facebook.com/profile.php?id=61562014600393",
            "https://www.instagram.com/jona.fels/",
            "https://www.linkedin.com/in/jona-fels-coach/",
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
                  "@id": "https://fels-coach.de/#service-familienaufstellung",
                  name: "Systemische Familienaufstellung",
                  description:
                    "Tiefgreifende Aufstellungsarbeit zur Auflösung unbewusster Familienmuster und Verstrickungen.",
                  provider: { "@id": "https://fels-coach.de/#service" },
                  areaServed: "Freiburg im Breisgau",
                  serviceType: "Systemische Familienaufstellung",
                },
                price: "80.00",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "80.00",
                  priceCurrency: "EUR",
                  unitText: "60 Minuten",
                },
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://fels-coach.de/#service-einzelcoaching",
                  name: "Systemisches Einzelcoaching",
                  description:
                    "Intensive 1:1 Coaching-Session mit systemischen Methoden.",
                  provider: { "@id": "https://fels-coach.de/#service" },
                  areaServed: "Freiburg im Breisgau",
                  serviceType: "Lösungsorientiertes Coaching",
                },
                price: "80.00",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "80.00",
                  priceCurrency: "EUR",
                  unitText: "60 Minuten",
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
                    "Kostenloses E-Book über systemische Familienaufstellungen.",
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
          jobTitle: "Systemischer Coach & Familienaufsteller i.A.",
          description:
            "Familienaufsteller in Ausbildung und Coach mit Spezialisierung auf systemische Familienaufstellungen und lösungsorientiertes Coaching.",
          url: "https://fels-coach.de/ueber-mich",
          image: "https://fels-coach.de/assets/jona-fels-systemisches-coaching.webp",
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
            "Systemische Familienaufstellungen",
            "Lösungsorientiertes Coaching",
            "Systemische Therapie",
            "Persönlichkeitsentwicklung",
            "Familiendynamiken",
            "Innere Kind Arbeit",
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
          name: "Fels-Coach",
          alternateName: "Jona Fels - Systemisches Coaching & Familienaufstellungen",
          url: "https://fels-coach.de",
          description:
            "Systemische Familienaufstellungen und Coaching in Freiburg",
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
              name: "Aufstellungen",
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
              name: "Was ist eine systemische Familienaufstellung und wie läuft sie bei Jona Fels in Freiburg ab?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Eine systemische Familienaufstellung macht verborgene Dynamiken sichtbar. In meiner Praxis in der Karlstraße 51, Freiburg, arbeiten wir in geschützter Atmosphäre an nachhaltigen Lösungswegen für Ihre persönlichen Blockaden.",
              },
            },
            {
              "@type": "Question",
              name: "Was kostet ein Coaching oder eine Familienaufstellung bei Jona Fels?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Der reguläre Preis für eine Coaching-Stunde beträgt 80 €. Aktuell biete ich zur Praxiseröffnung in Freiburg ein begrenztes Kontingent an Kennenlern-Sitzungen für nur 50 € pro Stunde an.",
              },
            },
            {
              "@type": "Question",
              name: "Bietest du auch Coaching-Termine am Wochenende in Freiburg an?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, ich biete meine Sitzungen spezialisiert am Samstag zwischen 14:00 und 20:00 Uhr an. Dies ermöglicht Berufstätigen eine entspannte Atmosphäre ohne Zeitdruck unter der Woche.",
              },
            },
            {
              "@type": "Question",
              name: "Wo genau in Freiburg findet das Coaching statt und gibt es Online-Optionen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Meine Praxis liegt zentral in der Karlstraße 51, 79104 Freiburg. Ergänzend biete ich alle Sitzungen ortsunabhängig als Online-Coaching per Video-Call an.",
              },
            },
            {
              "@type": "Question",
              name: "Wie kann ich ein Coaching starten und gibt es ein Vorgespräch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sie können direkt über die Website ein kostenloses, 15-minütiges Vorgespräch anfragen. So klären wir unverbindlich Ihr Anliegen und schauen, ob die Chemie für eine Zusammenarbeit stimmt.",
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
