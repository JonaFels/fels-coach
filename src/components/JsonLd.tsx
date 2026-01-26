import { useEffect } from "react";

export const JsonLd = () => {
  useEffect(() => {
    // Remove any existing JSON-LD scripts
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.fels-coach.de/#business",
      name: "Fels-Coach - Systemische Familienaufstellungen",
      alternateName: "Jona Fels Coaching",
      description: "Systemische Familienaufstellungen und 1:1 Coaching in Freiburg. Professionelle Begleitung bei der Auflösung unbewusster Muster und Familiendynamiken.",
      url: "https://www.fels-coach.de",
      telephone: "+4917667608617",
      email: "info@fels-coach.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Egonstraße 91",
        addressLocality: "Freiburg",
        postalCode: "79106",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.9990,
        longitude: 7.8421,
      },
      image: "https://www.fels-coach.de/android-icon-192x192.png",
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61562014600393",
        "https://www.instagram.com/jona.fels/",
        "https://www.linkedin.com/in/jona-fels-coach/",
      ],
      founder: {
        "@type": "Person",
        name: "Jona Fels",
        jobTitle: "Systemischer Coach & Familienaufsteller",
        description: "Zertifizierter Familienaufsteller mit Heilpraktiker-Ausbildung und langjähriger Meditationserfahrung.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Coaching-Angebote",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kennenlern-Coaching",
              description: "Erste vollwertige Coaching-Session zum Kennenlernen (60 Minuten)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Systemisches Coaching",
              description: "Tiefgreifende Coaching-Session mit Familienaufstellung (60 Minuten)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kostenloses E-Book",
              description: "Der Weg zum Ganz-Sein - E-Book zum kostenlosen Download",
            },
          },
        ],
      },
    };

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.fels-coach.de/#person",
      name: "Jona Fels",
      jobTitle: "Systemischer Coach & Familienaufsteller",
      description: "Zertifizierter Familienaufsteller und Coach mit Fokus auf systemische Arbeit und Tiefenarbeit.",
      url: "https://www.fels-coach.de/ueber-mich",
      image: "https://www.fels-coach.de/android-icon-192x192.png",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61562014600393",
        "https://www.instagram.com/jona.fels/",
        "https://www.linkedin.com/in/jona-fels-coach/",
      ],
      knowsAbout: [
        "Systemische Familienaufstellungen",
        "Coaching",
        "Persönliche Entwicklung",
        "Meditation",
        "Traumaheilung",
      ],
      worksFor: {
        "@id": "https://www.fels-coach.de/#business",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify([localBusinessSchema, personSchema]);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};
