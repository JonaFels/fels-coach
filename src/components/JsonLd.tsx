import { useEffect } from "react";

export const JsonLd = () => {
  useEffect(() => {
    // Remove any existing JSON-LD scripts (except FAQ which is handled separately)
    const existing = document.querySelector('script[data-main-schema="true"]');
    if (existing) {
      existing.remove();
    }

    // LocalBusiness Schema mit E-E-A-T Optimierung
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.fels-coach.de/#business",
      name: "Fels-Coach - Systemische Familienaufstellungen",
      alternateName: "Jona Fels Coaching",
      description: "Systemische Familienaufstellungen und 1:1 Coaching in Freiburg. Professionelle Begleitung bei der Auflösung unbewusster Muster und Familiendynamiken durch lösungsorientiertes Coaching.",
      url: "https://www.fels-coach.de",
      telephone: "+4917667608617",
      email: "info@fels-coach.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Egonstraße 91",
        addressLocality: "Freiburg im Breisgau",
        addressRegion: "Baden-Württemberg",
        postalCode: "79106",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.9990,
        longitude: 7.8421,
      },
      image: [
        "https://www.fels-coach.de/web-app-manifest-512x512.png",
        "https://www.fels-coach.de/web-app-manifest-192x192.png",
      ],
      logo: "https://www.fels-coach.de/web-app-manifest-512x512.png",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Bank Transfer",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 47.9990,
          longitude: 7.8421,
        },
        geoRadius: "50000",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61562014600393",
        "https://www.instagram.com/jona.fels/",
        "https://www.linkedin.com/in/jona-fels-coach/",
      ],
      founder: {
        "@id": "https://www.fels-coach.de/#person",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Coaching-Angebote",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Familienaufstellungen",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://www.fels-coach.de/#service-familienaufstellung",
                  name: "Systemische Familienaufstellung",
                  description: "Tiefgreifende Aufstellungsarbeit zur Auflösung unbewusster Familienmuster und Verstrickungen. Mit Bodenankern werden Beziehungsdynamiken sichtbar gemacht und neue Lösungsbilder entwickelt.",
                  provider: {
                    "@id": "https://www.fels-coach.de/#business",
                  },
                  areaServed: "Freiburg im Breisgau",
                  serviceType: "Systemische Familienaufstellung",
                },
                price: "120.00",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "120.00",
                  priceCurrency: "EUR",
                  unitText: "60 Minuten",
                },
                availability: "https://schema.org/InStock",
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Einzelcoaching",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://www.fels-coach.de/#service-kennenlern",
                  name: "Kennenlern-Coaching",
                  description: "Erste vollwertige Coaching-Session zum Kennenlernen. Ideal für den Einstieg in die systemische Arbeit mit persönlicher Begleitung.",
                  provider: {
                    "@id": "https://www.fels-coach.de/#business",
                  },
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
                  "@type": "Service",
                  "@id": "https://www.fels-coach.de/#service-einzelcoaching",
                  name: "Systemisches Einzelcoaching",
                  description: "Intensive 1:1 Coaching-Session mit systemischen Methoden. Persönliche Begleitung bei der Auflösung von Blockaden und der Entwicklung neuer Perspektiven.",
                  provider: {
                    "@id": "https://www.fels-coach.de/#business",
                  },
                  areaServed: "Freiburg im Breisgau",
                  serviceType: "Lösungsorientiertes Coaching",
                },
                price: "120.00",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "120.00",
                  priceCurrency: "EUR",
                  unitText: "60 Minuten",
                },
                availability: "https://schema.org/InStock",
              },
            ],
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Book",
              "@id": "https://www.fels-coach.de/#ebook",
              name: "Der Weg zum Ganz-Sein",
              description: "Kostenloses E-Book über systemische Familienaufstellungen und den Weg zur inneren Ganzheit.",
              author: {
                "@id": "https://www.fels-coach.de/#person",
              },
              inLanguage: "de",
              bookFormat: "https://schema.org/EBook",
            },
            price: "0.00",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        ],
      },
    };

    // Person Schema mit E-E-A-T Expertise
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.fels-coach.de/#person",
      name: "Jona Fels",
      givenName: "Jona",
      familyName: "Fels",
      jobTitle: "Systemischer Coach & Familienaufsteller i.A.",
      description: "Familienaufsteller in Ausbildung und Coach mit Spezialisierung auf systemische Familienaufstellungen und lösungsorientiertes Coaching. Begleitet Menschen bei der Auflösung unbewusster Muster und Familiendynamiken.",
      url: "https://www.fels-coach.de/ueber-mich",
      image: "https://www.fels-coach.de/web-app-manifest-512x512.png",
      email: "info@fels-coach.de",
      telephone: "+4917667608617",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Freiburg im Breisgau",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61562014600393",
        "https://www.instagram.com/jona.fels/",
        "https://www.linkedin.com/in/jona-fels-coach/",
      ],
      // E-E-A-T: Expertise & Erfahrung
      knowsAbout: [
        "Systemische Familienaufstellungen",
        "Lösungsorientiertes Coaching",
        "Systemische Therapie",
        "Persönlichkeitsentwicklung",
        "Traumaheilung",
        "Familiendynamiken",
        "Innere Kind Arbeit",
        "Beziehungsarbeit",
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
      worksFor: {
        "@id": "https://www.fels-coach.de/#business",
      },
      makesOffer: [
        {
          "@id": "https://www.fels-coach.de/#service-familienaufstellung",
        },
        {
          "@id": "https://www.fels-coach.de/#service-einzelcoaching",
        },
      ],
    };

    // WebSite Schema für Sitelinks
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.fels-coach.de/#website",
      name: "Fels-Coach",
      alternateName: "Jona Fels - Systemische Familienaufstellungen",
      url: "https://www.fels-coach.de",
      description: "Systemische Familienaufstellungen und Coaching in Freiburg",
      publisher: {
        "@id": "https://www.fels-coach.de/#business",
      },
      inLanguage: ["de", "en", "fr"],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.fels-coach.de/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };

    // BreadcrumbList für bessere Navigation in SERPs
    const breadcrumbSchema = {
      "@context": "https://schema.org",
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
          name: "Familienaufstellung",
          item: "https://www.fels-coach.de/familienaufstellung",
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
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-main-schema", "true");
    script.textContent = JSON.stringify([
      localBusinessSchema,
      personSchema,
      websiteSchema,
      breadcrumbSchema,
    ]);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};
