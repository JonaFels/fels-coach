export type Language = "de" | "en";

export type Translations = {
  [key: string]: {
    de: string;
    en: string;
  };
};

export const translations: Translations = {
  // Navigation
  "nav.coaching": {
    de: "Coaching",
    en: "Coaching",
  },
  "nav.familienaufstellung": {
    de: "Aufstellungen",
    en: "Constellations",
  },
  "nav.ebook": {
    de: "E-Book",
    en: "E-Book",
  },
  "nav.kontakt": {
    de: "Kontakt",
    en: "Contact",
  },
  "nav.ueber": {
    de: "Über mich",
    en: "About me",
  },
  "nav.termin": {
    de: "Termin buchen",
    en: "Book Appointment",
  },
  "nav.contact": {
    de: "Kostenloses Erstgespräch",
    en: "Free Initial Consultation",
  },
  "nav.angebote": {
    de: "Ablauf & Preise",
    en: "Process & Pricing",
  },
  "nav.blog": {
    de: "Blog",
    en: "Blog",
  },

  // Blog
  "blog.title": {
    de: "Blog",
    en: "Blog",
  },
  "blog.backToList": {
    de: "Zurück zur Übersicht",
    en: "Back to overview",
  },

  // Hero Section
  "hero.title": {
    de: "Schluss mit der unbewussten Selbstsabotage",
    en: "End the Unconscious Self-Sabotage",
  },
  "hero.subtitle": {
    de: "Gib dir endlich selbst die Erlaubnis, deinen eigenen Stand einzunehmen – frei von lähmender Scham und den unsichtbaren Fesseln alter Familienmuster.",
    en: "Finally give yourself permission to claim your own ground – free from paralyzing shame and the invisible chains of old family patterns.",
  },
  "hero.cta": {
    de: "Kostenloses Vorgespräch vereinbaren",
    en: "Schedule Free Consultation",
  },
  "hero.microcopy": {
    de: "Völlig unverbindlich & persönlich – 15 Minuten, die Klarheit schaffen.",
    en: "Completely non-binding & personal – 15 minutes that create clarity.",
  },
  "hero.ctaConsultation": {
    de: "Kostenloses Erstgespräch vereinbaren",
    en: "Schedule Free Initial Consultation",
  },
  "hero.ctaMicrocopy": {
    de: "Unverbindlich & persönlich – 15 Min., die Klarheit schaffen.",
    en: "Non-binding & personal – 15 min. that create clarity.",
  },
  "hero.ctaAngebote": {
    de: "Meine Angebote entdecken",
    en: "Discover My Offers",
  },
  "hero.ctaEbook": {
    de: "Kostenloses E-Book",
    en: "Free E-Book",
  },

  // Coaching Description (Homepage)
  "coaching.title": {
    de: "Der chirurgische Weg zur Ursache",
    en: "The Surgical Path to the Root Cause",
  },
  "coaching.intro": {
    de: "Strukturelles System-Audit statt endloser Selbstoptimierung",
    en: "Structural System Audit instead of endless self-optimization",
  },
  "coaching.text1": {
    de: "Kennst du den Gummiband-Effekt? Du arbeitest an dir, machst Fortschritte – und wirst trotzdem immer wieder in alte Muster zurückgezogen. Du sabotierst Beziehungen, die dir wichtig sind. Verschenkst Talente, die du hast. Fühlst dich wie ein Fremder im eigenen Leben, während Jahre in unsichtbaren Familiendynamiken verschwinden.",
    en: "Do you know the rubber band effect? You work on yourself, make progress – yet get pulled back into old patterns again and again. You sabotage relationships that matter. Waste talents you have. Feel like a stranger in your own life while years disappear into invisible family dynamics.",
  },
  "coaching.text2": {
    de: "Familienaufstellungen in Einzelsessions sind keine endlose Gesprächstherapie. Es ist ein präzises Mapping deines inneren Systems – die Abkürzung zur Wurzel. Wir identifizieren die Stelle, an der deine innere Statik kippt, und korrigieren sie. Das Ergebnis: Du wirst vom inneren Zuschauer zur souveränen Autorität in deinem eigenen Leben.",
    en: "Family constellations in individual sessions are not endless talk therapy. It's a precise mapping of your inner system – the shortcut to the root. We identify the point where your inner statics collapse and correct it. The result: You transform from inner bystander to sovereign authority in your own life.",
  },
  "coaching.details.title": {
    de: "Dein System-Audit",
    en: "Your System Audit",
  },
  "coaching.detail1": {
    de: "80 min präzise Ursachenarbeit",
    en: "80 min precise root cause work",
  },
  "coaching.detail2": {
    de: "Strukturelles Mapping deiner inneren Dynamik",
    en: "Structural mapping of your inner dynamics",
  },
  "coaching.detail3": {
    de: "Korrektur der inneren Statik",
    en: "Correction of inner statics",
  },
  "coaching.learnMore": {
    de: "Methode verstehen",
    en: "Understand the Method",
  },
  "coaching.microcopy": {
    de: "Völlig unverbindlich & persönlich",
    en: "Completely non-binding & personal",
  },
  "coaching.ebookLink": {
    de: "Kostenloses E-Book lesen",
    en: "Read Free E-Book",
  },

  // Offerings Section
  "offerings.title": {
    de: "So arbeiten wir zusammen",
    en: "How We Work Together",
  },
  "offerings.pageIntro": {
    de: "Gute Veränderung braucht einen klaren Rahmen und echtes Vertrauen. Hier siehst du, wie unsere Zusammenarbeit aufgebaut ist – strukturiert, persönlich und auf Augenhöhe.",
    en: "Meaningful change needs a clear framework and genuine trust. Here you can see how our collaboration is structured – organized, personal, and on equal footing.",
  },
  "offerings.ablaufTitle": {
    de: "So läuft eine Sitzung ab",
    en: "How a Session Works",
  },
  "offerings.step1": {
    de: "Ankommen & Anliegen klären – Wir starten mit einem kurzen Check-in: Was beschäftigt dich gerade? Was möchtest du heute mitnehmen? So finden wir gemeinsam den Fokus für die Sitzung.",
    en: "Arriving & clarifying your concern – We start with a brief check-in: What's on your mind? What would you like to take away today? Together we find the focus for the session.",
  },
  "offerings.step2": {
    de: "Vertiefung & Arbeit am Thema – Mit systemischen Methoden gehen wir deinem Anliegen auf den Grund – durch Aufstellungsarbeit oder gezielte Fragen, je nachdem, was sich zeigt.",
    en: "Deepening & working on your topic – Using systemic methods, we get to the root of your concern – through constellation work or targeted questions, depending on what emerges.",
  },
  "offerings.step3": {
    de: "Integration & Abschluss – Wir nehmen uns Zeit, das Erlebte einzuordnen, damit du es gut in deinen Alltag mitnehmen kannst. Gemeinsam besprechen wir offen, ob und wie es weitergehen kann.",
    en: "Integration & closing – We take time to process what emerged so you can carry it into your everyday life. Together we openly discuss if and how to continue.",
  },
  "offerings.preiseTitle": {
    de: "Klare Konditionen",
    en: "Clear Conditions",
  },
  "offerings.preiseIntro": {
    de: "Jede Sitzung dauert 80 Minuten – genug Zeit für echte Tiefe. Präsenz in Freiburg oder Online-Video-Call, faire Preise ohne Verstecktes.",
    en: "Each session lasts 80 minutes – enough time for real depth. In-person in Freiburg or online video call, fair prices with nothing hidden.",
  },
  "offerings.kennenlernen.title": {
    de: "Kennenlernen-Sitzung",
    en: "Getting-to-Know Session",
  },
  "offerings.kennenlernen.desc": {
    de: "Dein Einstieg zum reduzierten Preis: Eine vollwertige Sitzung, in der wir dein Anliegen systemisch einordnen und erste Lösungsansätze erarbeiten.",
    en: "Your start at a reduced price: A full session where we place your concern in a systemic context and develop initial approaches.",
  },
  "offerings.coaching.title": {
    de: "Coaching-Sitzung",
    en: "Coaching Session",
  },
  "offerings.coaching.desc": {
    de: "80 Minuten fokussierte Arbeit an dem, was gerade dran ist – systemisch, lösungsorientiert und mit konkreten nächsten Schritten. Präsenz oder Online.",
    en: "80 minutes of focused work on what matters most right now – systemic, solution-oriented, and with concrete next steps. In-person or online.",
  },
  "offerings.paket5.title": {
    de: "5er-Paket",
    en: "5-Session Package",
  },
  "offerings.paket5.desc": {
    de: "Fünf reguläre Coaching-Termine zum Vorteilspreis. Ideal für einen intensiven Prozess mit messbaren Fortschritten.",
    en: "Five regular coaching sessions at a discounted rate. Ideal for an intensive process with measurable progress.",
  },
  "offerings.paket10.title": {
    de: "10er-Paket",
    en: "10-Session Package",
  },
  "offerings.paket10.desc": {
    de: "Zehn reguläre Coaching-Termine für eine umfassende Transformation. Begleitung größerer Entwicklungsprozesse mit tiefgreifender Klarheit.",
    en: "Ten regular coaching sessions for comprehensive transformation. Accompaniment of larger development processes with profound clarity.",
  },
  "offerings.book": {
    de: "Jetzt Termin anfragen",
    en: "Request Appointment",
  },
  "offerings.allDates": {
    de: "Alle verfügbaren Termine ansehen",
    en: "View all available dates",
  },
  "offerings.duration": {
    de: "Dauer",
    en: "Duration",
  },
  "offerings.minutes": {
    de: "Minuten",
    en: "minutes",
  },
  "offerings.popular": {
    de: "Beliebt",
    en: "Popular",
  },
  "offerings.onlinePayment": {
    de: "Nur online bezahlbar.",
    en: "Online payment only.",
  },
  "offerings.oldPrice": {
    de: "statt",
    en: "instead of",
  },
  "offerings.paketEinloesen.title": {
    de: "Paket einlösen",
    en: "Redeem Package",
  },
  "offerings.paketEinloesen.desc": {
    de: "Du hast bereits ein 5er oder 10er Paket erworben? Dann wähle hier deinen nächsten Termin aus.",
    en: "Already purchased a 5 or 10 session package? Choose your next appointment here.",
  },

  // Cookie Banner
  "cookie.title": {
    de: "Cookie-Einstellungen",
    en: "Cookie Settings",
  },
  "cookie.text": {
    de: "Wir nutzen Cookies, um deine Erfahrung zu verbessern.",
    en: "We use cookies to improve your experience.",
  },
  "cookie.accept": {
    de: "Alle annehmen",
    en: "Accept All",
  },
  "cookie.reject": {
    de: "Ablehnen",
    en: "Reject",
  },
  "cookie.settings": {
    de: "Einstellungen",
    en: "Settings",
  },
  "cookie.necessary": {
    de: "Notwendige Cookies",
    en: "Necessary Cookies",
  },
  "cookie.necessary.desc": {
    de: "Erforderlich für die Grundfunktion der Website.",
    en: "Required for basic website functionality.",
  },
  "cookie.analytics": {
    de: "Google Analytics",
    en: "Google Analytics",
  },
  "cookie.analytics.desc": {
    de: "Hilft uns, das Nutzererlebnis zu verbessern.",
    en: "Helps us understand how visitors use the website.",
  },
  "cookie.save": {
    de: "Auswahl speichern",
    en: "Save Settings",
  },

  // Footer
  "footer.rights": {
    de: "Alle Rechte vorbehalten",
    en: "All rights reserved",
  },
  "footer.privacy": {
    de: "Datenschutz",
    en: "Privacy Policy",
  },
  "footer.imprint": {
    de: "Impressum",
    en: "Imprint",
  },
  "footer.terms": {
    de: "AGB",
    en: "Terms",
  },

  // Familienaufstellung Page
  "family.title": {
    de: "Systemische Aufstellung & Familienaufstellung in Freiburg",
    en: "Systemic Constellation & Family Constellation in Freiburg",
  },
  "family.intro.title": {
    de: "Was ist eine Familienaufstellung?",
    en: "What is a Family Constellation?",
  },
  "family.intro.text": {
    de: "Familienaufstellung ist eine kraftvolle Methode des systemischen Coachings, um unbewusste Dynamiken und Verstrickungen innerhalb Deines Familiensystems aufzudecken. Oftmals tragen wir Lasten oder Muster unserer Vorfahren in uns, die uns in unserem aktuellen Leben blockieren, ohne dass wir uns dessen bewusst sind. Eine Aufstellung kann diese tief verwurzelten Ursachen sichtbar machen und den Weg für Heilung und Veränderung ebnen.",
    en: "Family constellation is a powerful method of systemic coaching to uncover unconscious dynamics and entanglements within your family system. Often we carry burdens or patterns of our ancestors within us that block us in our current life without being aware of it. A constellation can make these deep-rooted causes visible and pave the way for healing and change.",
  },
  "family.benefits.title": {
    de: "Welchen Nutzen bringt eine Aufstellung?",
    en: "What are the benefits of a constellation?",
  },
  "family.benefit1": {
    de: "Verstrickungen zu lösen und neue Perspektiven zu gewinnen.",
    en: "Dissolve entanglements and gain new perspectives.",
  },
  "family.benefit2": {
    de: "Beziehungen zu Angehörigen zu klären und zu heilen.",
    en: "Clarify and heal relationships with family members.",
  },
  "family.benefit3": {
    de: "Mehr innere Freiheit, Zufriedenheit und Lebensenergie zu gewinnen.",
    en: "Gain more inner freedom, satisfaction and life energy.",
  },
  "family.benefit4": {
    de: "Blockaden aufzulösen und neue Wege zu beschreiten.",
    en: "Dissolve blockages and embark on new paths.",
  },
  "family.process.title": {
    de: "Der Ablauf einer Einzelaufstellung mit Bodenankern",
    en: "The process of an individual constellation with floor anchors",
  },
  "family.process.intro": {
    de: "In der Einzelarbeit nutzen wir Bodenanker, die für Familienmitglieder, relevante Personen oder innere Aspekte Deines Themen stehen. Diese Anker werden auf dem Boden platziert und repräsentieren die räumliche und energetische Beziehung im System.",
    en: "In individual work, we use floor anchors that represent family members, relevant persons or inner aspects of your topic. These anchors are placed on the floor and represent the spatial and energetic relationship in the system.",
  },
  "family.step1.title": {
    de: "1. Vorgespräch & Anliegen klären",
    en: "1. Preliminary talk & clarify concerns",
  },
  "family.step1.text": {
    de: "Wir nehmen uns Zeit, Dein spezifisches Anliegen und das Ziel der Aufstellung genau zu besprechen.",
    en: "We take time to discuss your specific concern and the goal of the constellation in detail.",
  },
  "family.step2.title": {
    de: "2. Aufstellung mit Bodenankern",
    en: "2. Constellation with floor anchors",
  },
  "family.step2.text": {
    de: "Du wählst intuitiv Bodenanker aus und platzierst diese im Raum, um die Beziehungen Deines Systems darzustellen.",
    en: "You intuitively select floor anchors and place them in the room to represent the relationships of your system.",
  },
  "family.step3.title": {
    de: "3. Lösungsfindung & Abschluss",
    en: "3. Finding solutions & conclusion",
  },
  "family.step3.text": {
    de: "Durch das Bewegen der Anker und das Erspüren der neuen Ordnungen entwickeln wir ein stimmiges Lösungsbild.",
    en: "By moving the anchors and sensing the new orders, we develop a coherent solution image.",
  },

  // E-Book Page
  "ebook.title": {
    de: "Der Weg zum Ganzsein",
    en: "The Path to Wholeness",
  },
  "ebook.headline": {
    de: "Warum du dich unbewusst selbst sabotierst – und wie du die Erlaubnis findest, endlich ganz du selbst zu sein.",
    en: "Why you unconsciously sabotage yourself – and how to find permission to finally be wholly yourself.",
  },
  "ebook.subheadline": {
    de: "Auf 6 kompakten Seiten erfährst du, wie die unsichtbare Architektur deiner inneren Blockaden funktioniert – und wie du den Weg zum Ganzsein findest.",
    en: "In 6 concise pages, discover how the invisible architecture of your inner blockages works – and how to find the path to wholeness.",
  },
  "ebook.name": {
    de: "Name",
    en: "Name",
  },
  "ebook.email": {
    de: "E-Mail-Adresse",
    en: "Email Address",
  },
  "ebook.privacyNote": {
    de: "Die Datenschutzerklärung findest du",
    en: "You can find the privacy policy",
  },
  "ebook.here": {
    de: "hier",
    en: "here",
  },
  "ebook.download": {
    de: "Jetzt kostenlos anfordern & Klarheit gewinnen",
    en: "Request for Free & Gain Clarity",
  },
  "ebook.infoTitle": {
    de: "Was du in diesem E-Book erfährst:",
    en: "What you'll discover in this e-book:",
  },
  "ebook.feature1.title": {
    de: "Das Gummiband-Prinzip",
    en: "The Rubber Band Principle",
  },
  "ebook.feature1.text": {
    de: "Warum du trotz Talent immer wieder in alte Muster zurückfällst und dich wertlos fühlst.",
    en: "Why despite your talents you keep falling back into old patterns and feel worthless.",
  },
  "ebook.feature2.title": {
    de: "Die Eltern-Dynamik",
    en: "The Parent Dynamic",
  },
  "ebook.feature2.text": {
    de: "Wie ungelöste Vorwürfe an Vater oder Mutter deinen heutigen Erfolg und deine Beziehungen blockieren.",
    en: "How unresolved grievances toward father or mother are blocking your current success and relationships.",
  },
  "ebook.feature3.title": {
    de: "Die innere Erlaubnis",
    en: "The Inner Permission",
  },
  "ebook.feature3.text": {
    de: "Der Prozess, wie du aufhörst, ein Zuschauer deines Lebens zu sein, und zum stabilen Mittelpunkt deiner Existenz wirst.",
    en: "The process of how to stop being a spectator of your life and become the stable center of your existence.",
  },
  "ebook.feature4.title": {
    de: "Systemischer Quick-Check",
    en: "Systemic Quick-Check",
  },
  "ebook.feature4.text": {
    de: "Erste Schritte, um deine 'innere Statik' zu analysieren.",
    en: "First steps to analyze your 'inner statics'.",
  },
  "ebook.success": {
    de: "Vielen Dank! Das E-Book wurde per E-Mail an dich gesendet. Bitte überprüfe auch deinen Spam-Ordner.",
    en: "Thank you! The e-book has been sent to your email. Please also check your spam folder.",
  },

  // Kontakt Page
  "contact.title": {
    de: "Kontakt",
    en: "Contact",
  },
  "contact.text": {
    de: "Hast du Fragen oder möchtest ein kostenloses, telefonisches Erstgespräch ausmachen? Dann kannst du mich per Email, WhatsApp oder Telegram erreichen. Ich freue mich auf Deine Nachricht!",
    en: "Do you have questions or would you like to arrange a free initial phone consultation? You can reach me via email, WhatsApp or Telegram. I look forward to your message!",
  },

  // Über mich Page
  "about.title": {
    de: "Über mich",
    en: "About me",
  },
  "about.subtitle": {
    de: "Vom Überlebensmodus zur systemischen Freiheit.",
    en: "From survival mode to systemic freedom.",
  },
  "about.intro1": {
    de: "Mein Weg zum Systemischen Coaching war kein Zufall, sondern eine Notwendigkeit. 2017 kehrte ich nach einem fluchtartigen Auslandsjahr zurück und erlebte den Gummiband-Effekt in seiner extremsten Form. Trotz der räumlichen Weite zuvor, prallte ich zu Hause ungebremst gegen die unsichtbare Wand meiner Herkunftsdynamiken.",
    en: "My path to systemic coaching was no coincidence, but a necessity. In 2017, I returned from a year abroad that felt like an escape and experienced the rubber band effect in its most extreme form. Despite the spatial distance before, I crashed head-on into the invisible wall of my family dynamics back home.",
  },
  "about.intro2": {
    de: "In diesem Moment wurde mir klar: Ich war zu weniger als fünf Prozent ich selbst. Der Rest war eine hochgradig effiziente, aber fremdbestimmte Überlebensanpassung an ein System, das mich in alten Rollen gefangen hielt.",
    en: "In that moment, I realized: I was less than five percent myself. The rest was a highly efficient but externally determined survival adaptation to a system that kept me trapped in old roles.",
  },
  "about.guidance.title": {
    de: "Warum ich tue, was ich tue",
    en: "Why I do what I do",
  },
  "about.guidance1": {
    de: "Erst durch die tiefgreifend präzise Arbeit der Familienaufstellung gelang es mir, die inneren Fesseln zu identifizieren und zu lösen. Ich habe die Werkzeuge gesucht und gefunden, um die innere Statik dauerhaft zu korrigieren.",
    en: "Only through the profoundly precise work of family constellation did I manage to identify and release my inner bonds. I searched for and found the tools to permanently correct my inner structure.",
  },
  "about.guidance2": {
    de: "Heute lebe ich zu 95 Prozent meine eigene Identität – nicht als flüchtiger Zustand, sondern als stabiles Fundament. Diese Klarheit ist kein Glück, sondern das Ergebnis einer bewussten System-Korrektur, die ich heute an meine Klienten weitergebe.",
    en: "Today, I live 95 percent of my own identity – not as a fleeting state, but as a stable foundation. This clarity is not luck, but the result of a conscious system correction that I now pass on to my clients.",
  },
  "about.guidance3": {
    de: "Ich bringe eine geschulte Wahrnehmung mit, um die unsichtbaren Fäden und Verstrickungen in deinem System aufzuspüren. Mein tiefstes Mitgefühl ist dabei deine sichere Basis.",
    en: "I bring a trained perception to track down the invisible threads and entanglements in your system. My deepest compassion is your safe foundation.",
  },
  "about.core.title": {
    de: "Dein unversehrter Kern wird sichtbar",
    en: "Your intact core becomes visible",
  },
  "about.core1": {
    de: "Tiefe Präsenz und Achtsamkeit bilden das Fundament unserer Arbeit. Sie ermöglichen uns die Ruhe während der Session, die essenziell ist, um dein System klar sehen zu können und deinen unversehrten Kern freizulegen.",
    en: "Deep presence and mindfulness form the foundation of our work. They enable us to achieve the calm during the session that is essential to clearly see your system and uncover your intact core.",
  },
  "about.core2": {
    de: "Ich bin zutiefst davon überzeugt: In dir ist ein Kern unversehrter Kraft – rein und unerschütterlich. Und ich weiß, dass wir jeden Umstand in eine heilsame Erfahrung umwandeln können.",
    en: "I am deeply convinced: Within you is a core of intact power – pure and unshakeable. And I know that we can transform every circumstance into a healing experience.",
  },
  "about.cv.title": {
    de: "Lebenslauf",
    en: "Resume",
  },
  "about.cv1": {
    de: "Seit April 2024 | Ausbildung zum Familiensteller: Ausbildung im Bereich Familienaufstellungen.",
    en: "Since April 2024 | Family Constellation Training: Training in family constellations.",
  },
  "about.cv2": {
    de: "2022 - 2023 | Allgemeiner Heilpraktiker: Studium an der Paracelsus Heilpraktikerschule Freiburg im Breisgau.",
    en: "2022 - 2023 | General Naturopath: Studies at the Paracelsus Heilpraktikerschule Freiburg im Breisgau.",
  },
  "about.cv3": {
    de: "2016 - 2017 | Auslandsjahr in Neuseeland – der Wendepunkt meiner persönlichen Transformation.",
    en: "2016 - 2017 | Year abroad in New Zealand – the turning point of my personal transformation.",
  },

  // Legal Pages
  "privacy.title": {
    de: "Datenschutzerklärung",
    en: "Privacy Policy",
  },
  "imprint.title": {
    de: "Impressum",
    en: "Imprint",
  },
  "terms.title": {
    de: "Buchungs- und Stornierungsregeln",
    en: "Booking and Cancellation Terms",
  },

  // FAQ Section
  "faq.title": {
    de: "Häufig gestellte Fragen",
    en: "Frequently Asked Questions",
  },

  // Testimonials Section
  "testimonials.title": {
    de: "Das sagen meine Klienten",
    en: "What my clients say",
  },
  "testimonials.subtitle": {
    de: "Erfahrungen aus der Zusammenarbeit",
    en: "Experiences from working together",
  },

  // About Preview (Landing Page)
  "aboutPreview.title": {
    de: "\u201EIch kenne das System von innen.\u201C",
    en: '"I know the system from the inside."',
  },
  "aboutPreview.text1": {
    de: "Lange Zeit fühlte ich mich wie ein Fremder im eigenen Leben. Nach meiner Rückkehr aus dem Ausland 2017 realisierte ich: Ich war zu weniger als 5\u00A0% ich selbst – der Rest war reine Überlebensanpassung an alte Familienmuster.",
    en: "For a long time, I felt like a stranger in my own life. After returning from abroad in 2017, I realized: I was less than 5% myself – the rest was pure survival adaptation to old family patterns.",
  },
  "aboutPreview.text2": {
    de: "Erst durch systemische Aufstellungen konnte ich diese unsichtbare Statik korrigieren. Heute begleite ich Menschen dabei, diese Fremdbestimmung abzulegen und ihre eigene, souveräne Autorität zurückzugewinnen.",
    en: "Only through systemic constellations was I able to correct this invisible structure. Today, I help people shed this external determination and reclaim their own sovereign authority.",
  },
  "aboutPreview.cta": {
    de: "Mehr über meinen Weg lesen",
    en: "Read more about my journey",
  },

  // Author Box
  "author.writtenBy": {
    de: "Geschrieben von",
    en: "Written by",
  },
  "author.title": {
    de: "Systemischer Coach & Familienaufsteller",
    en: "Systemic Coach & Family Constellation Facilitator",
  },
  "author.bio": {
    de: "Ich begleite Menschen dabei, unbewusste Muster zu erkennen und aufzulösen. Mit Präzision und tiefem Mitgefühl unterstütze ich dich auf deinem Weg zu mehr Klarheit und innerem Frieden.",
    en: "I accompany people in recognizing and dissolving unconscious patterns. With precision and deep compassion, I support you on your path to more clarity and inner peace.",
  },
  "author.credential1": {
    de: "Familienaufsteller i.A.",
    en: "Family Constellation Facilitator in Training",
  },
  "author.credential3": {
    de: "Achtsame Begleitung",
    en: "Mindful Guidance",
  },

  // Trust Badges
  "trust.ariaLabel": {
    de: "Vertrauensmerkmale",
    en: "Trust features",
  },
  "trust.certified": {
    de: "In Ausbildung",
    en: "In Training",
  },
  "trust.certifiedDesc": {
    de: "Familienaufsteller i.A.",
    en: "Family constellation facilitator in training",
  },
  "trust.location": {
    de: "Präsenz in Freiburg",
    en: "In-Person in Freiburg",
  },
  "trust.locationDesc": {
    de: "Persönliche Sessions vor Ort",
    en: "Personal sessions on-site",
  },
  "trust.flexible": {
    de: "Flexible Termine",
    en: "Flexible Appointments",
  },
  "trust.flexibleDesc": {
    de: "Termine nach Absprache",
    en: "Appointments by arrangement",
  },
  "trust.experience": {
    de: "Empathisch",
    en: "Empathetic",
  },
  "trust.experienceDesc": {
    de: "Achtsame Begleitung",
    en: "Mindful guidance",
  },

  // Micro CTAs
  "cta.bookNow": {
    de: "Kostenloses 15-Min. Vorgespräch",
    en: "Free 15-Min. Consultation",
  },
  "cta.bookNowMicrocopy": {
    de: "Lass uns schauen, ob die Chemie stimmt.",
    en: "Let's see if we're a good fit.",
  },
  "cta.freeConsultation": {
    de: "Oder: Rückruf anfordern",
    en: "Or: Request a callback",
  },
  "cta.learnMore": {
    de: "Methode verstehen",
    en: "Understand the method",
  },

  // 404 Page
  "notFound.title": {
    de: "Seite nicht gefunden",
    en: "Page not found",
  },
  "notFound.text": {
    de: "Die gesuchte Seite existiert leider nicht.",
    en: "The page you are looking for does not exist.",
  },
  "notFound.backHome": {
    de: "Zurück zur Startseite",
    en: "Back to homepage",
  },

  // Contact Form
  "contactForm.title": {
    de: "Nachricht senden",
    en: "Send Message",
  },
  "contactForm.name": {
    de: "Name",
    en: "Name",
  },
  "contactForm.email": {
    de: "E-Mail",
    en: "Email",
  },
  "contactForm.message": {
    de: "Nachricht",
    en: "Message",
  },
  "contactForm.submit": {
    de: "Absenden",
    en: "Submit",
  },
  "contactForm.success": {
    de: "Vielen Dank! Deine Nachricht wurde gesendet.",
    en: "Thank you! Your message has been sent.",
  },
  "contactForm.error": {
    de: "Fehler beim Senden. Bitte versuche es erneut.",
    en: "Error sending. Please try again.",
  },
  "contactForm.required": {
    de: "Pflichtfeld",
    en: "Required",
  },
  "contactForm.invalidEmail": {
    de: "Ungültige E-Mail-Adresse",
    en: "Invalid email address",
  },
  "contactForm.privacyNotice": {
    de: "Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß unserer",
    en: "By submitting, you agree to the processing of your data according to our",
  },
  "contactForm.privacyLink": {
    de: "Datenschutzerklärung",
    en: "Privacy Policy",
  },
 
   // Quick Contact CTA (Landing Page)
   "quickCTA.headline": {
     de: "Lass uns kurz sprechen.",
     en: "Let's have a quick chat.",
   },
   "quickCTA.subheadline": {
     de: "Noch unsicher, ob dein Thema passt? Lass uns in einem kurzen Vorgespräch klären, ob mein Ansatz für dein Anliegen passt.",
     en: "Still unsure if your topic fits? Let's clarify in a brief preliminary call whether my approach suits your concern.",
   },
    "quickCTA.button": {
      de: "Kostenloses 15-Min. Vorgespräch anfragen",
      en: "Request Free 15-Min. Consultation",
    },
    "quickCTA.microcopy": {
      de: "Völlig unverbindlich – lass uns schauen, ob die Chemie stimmt.",
      en: "Completely non-binding – let's see if we're a good fit.",
    },
 
   // Quick Request Form (Contact Page)
   "quickRequest.title": {
     de: "Schneller Rückruf",
     en: "Quick Callback",
   },
    "quickRequest.description": {
      de: "Hinterlasse mir deine E-Mail oder Telefonnummer. Ich melde mich in Kürze für ein unverbindliches Vorgespräch per Telefon.",
      en: "Leave your email or phone number. I'll get back to you shortly for a non-binding preliminary phone call.",
    },
   "quickRequest.placeholder": {
     de: "E-Mail oder Telefonnummer...",
     en: "Email or phone number...",
   },
   "quickRequest.button": {
     de: "Rückruf anfordern",
     en: "Request Callback",
   },
   "quickRequest.success": {
     de: "Vielen Dank! Ich melde mich schnellstmöglich bei dir.",
     en: "Thank you! I'll get back to you as soon as possible.",
   },
   "quickRequest.error.required": {
     de: "Bitte gib deine E-Mail oder Telefonnummer ein.",
     en: "Please enter your email or phone number.",
   },
   "quickRequest.error.send": {
     de: "Fehler beim Senden. Bitte versuche es erneut.",
     en: "Error sending. Please try again.",
   },
 
   // Contact Page Redesign
   "contact.headline": {
     de: "Der direkte Weg zu deinem neuen Stand.",
     en: "The direct path to your new ground.",
   },
   "contact.optionA.title": {
     de: "Option A: Rückruf anfordern",
     en: "Option A: Request Callback",
   },
   "contact.optionB.title": {
     de: "Option B: Direkt buchen",
     en: "Option B: Book Directly",
   },
   "contact.optionB.text": {
     de: "Möchtest du lieber direkt einen Termin vereinbaren?",
     en: "Would you prefer to book an appointment directly?",
   },
   "contact.optionB.button": {
     de: "Kennenlernen-Session buchen",
     en: "Book Introduction Session",
   },
};
