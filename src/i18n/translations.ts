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
    de: "Coaching & Aufstellungen",
    en: "Coaching & Constellations",
  },
  "nav.ebook": {
    de: "Gratis E-Book",
    en: "Free E-Book",
  },
  "nav.kontakt": {
    de: "Kontakt & Anfahrt",
    en: "Contact & Directions",
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
    de: "Lass uns sprechen",
    en: "Let's Talk",
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
    de: "Endlich ankommen, wo der Sturm aufhört.",
    en: "Finally arriving where the storm ends.",
  },
  "hero.subtitle": {
    de: "Du sehnst dich danach, das ‚Müssen' hinter dir zu lassen? In meinem Coaching schaffst du den Raum, um endlich bei dir selbst anzukommen. Ein sicherer Ort und eine Begleitung, die dir mit Aufrichtigkeit zur Seite steht.",
    en: "Do you long to leave the 'having to' behind? In my coaching, you create the space to finally arrive at yourself. A safe place and guidance that stands by you with sincerity.",
  },
  "hero.cta": {
    de: "Kostenloses Vorgespräch vereinbaren",
    en: "Schedule Free Consultation",
  },
  "hero.microcopy": {
    de: "Völlig unverbindlich & persönlich – 30 Minuten, die Klarheit schaffen.",
    en: "Completely non-binding & personal – 30 minutes that create clarity.",
  },
  "hero.ctaConsultation": {
    de: "Lass uns einfach mal reden",
    en: "Let's just talk",
  },
  "hero.ctaMicrocopy": {
    de: "Unverbindlich & persönlich – 30 Min., die Klarheit schaffen.",
    en: "Non-binding & personal – 30 min. that create clarity.",
  },
  "hero.socialProof": {
    de: "Über 100 begleitete Klienten auf dem Weg zu sich selbst.",
    en: "Over 100 clients guided on their path to themselves.",
  },
  "hero.ctaAngebote": {
    de: "Meine Angebote entdecken",
    en: "Discover My Offers",
  },
  "hero.ctaEbook": {
    de: "Kostenloses E-Book",
    en: "Free E-Book",
  },

  // Coaching Description (Homepage) – Pain Point
  "coaching.title": {
    de: "Endlich ankommen, wo der Sturm aufhört.",
    en: "Finally arriving where the storm ends.",
  },
  "coaching.intro": {
    de: "",
    en: "",
  },
  "coaching.text1": {
    de: "Du sehnst dich danach, das ‚Müssen' hinter dir zu lassen?",
    en: "Do you long to leave the 'having to' behind?",
  },
  "coaching.text2": {
    de: "In meinem Coaching schaffst du den Raum, um endlich bei dir selbst anzukommen. Ein sicherer Ort und eine Begleitung, die dir mit Aufrichtigkeit zur Seite steht.",
    en: "In my coaching, you create the space to finally arrive at yourself. A safe place and guidance that stands by you with sincerity.",
  },
  "coaching.details.title": {
    de: "Das Muster erkennen",
    en: "Recognizing the pattern",
  },
  "coaching.detail1": {
    de: "Immer wieder die gleichen Konflikte",
    en: "The same conflicts over and over",
  },
  "coaching.detail2": {
    de: "Innere Blockaden trotz Wissen",
    en: "Inner blockages despite knowledge",
  },
  "coaching.detail3": {
    de: "Gefühl der Fremdbestimmung",
    en: "Feeling of being externally controlled",
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
    de: "Die Aufstellung – Mithilfe von Bodenankern stellen wir dein System auf und machen sichtbar, was im Verborgenen wirkt. Dabei zeigen sich oft überraschende Zusammenhänge und tiefe Einsichten, die allein durch Gespräche nicht erreichbar wären.",
    en: "The constellation – Using floor anchors, we set up your system and make visible what has been working beneath the surface. Often surprising connections and deep insights emerge that wouldn't be reachable through conversation alone.",
  },
  "offerings.step3": {
    de: "Kurze Integration & Nachwirkung – Wir schließen die Sitzung mit einer kurzen Einordnung ab. Die eigentliche Wirkung entfaltet sich danach – eine Aufstellung arbeitet in den Tagen und Wochen nach der Sitzung in dir weiter.",
    en: "Brief integration & aftereffect – We close the session with a short reflection. The real effect unfolds afterwards – a constellation continues to work within you in the days and weeks following the session.",
  },
  "offerings.preiseTitle": {
    de: "Klare Konditionen",
    en: "Clear Conditions",
  },
  "offerings.preiseIntro": {
    de: "Jede Sitzung dauert 80 Minuten – genug Zeit für echte Tiefe. Präsenz in Freiburg. Termine kannst du direkt über die beiden untenstehenden Optionen online buchen – oder per E-Mail und Telegram vereinbaren.",
    en: "Each session lasts 80 minutes – enough time for real depth. In-person in Freiburg. You can book directly via the two options below – or arrange an appointment by email or Telegram.",
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
    de: "Systemisches Coaching mit Familienaufstellung",
    en: "Systemic Coaching with Family Constellation",
  },
  "offerings.coaching.desc": {
    de: "80 Minuten fokussierte Arbeit an dem, was gerade dran ist – systemisch, lösungsorientiert und mit konkreten nächsten Schritten.",
    en: "80 minutes of focused work on what matters most right now – systemic, solution-oriented, and with concrete next steps.",
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
    de: "In der Einzelarbeit nutzen wir Bodenanker, die für Familienmitglieder, relevante Personen oder innere Aspekte Deines Themas stehen. Diese Anker werden auf dem Boden platziert und repräsentieren die räumliche und energetische Beziehung im System. Gemeinsam ergründen wir die Dynamiken, die sich zeigen, und verschieben die Bodenanker im Raum. Dabei gehe ich als Coach in die verschiedenen Rollen und spüre nach, was sich auf den einzelnen Positionen zeigt – und auch Du darfst in Rollen gehen und so Dein System aus verschiedenen Perspektiven erleben. So entsteht Schritt für Schritt mehr Klarheit über die verborgenen Zusammenhänge.",
    en: "In individual work, we use floor anchors that represent family members, relevant persons, or inner aspects of your topic. These anchors are placed on the floor and represent the spatial and energetic relationship in the system. Together we explore the dynamics that emerge and rearrange the floor anchors in the room. As the therapist, I step into the different roles and sense what reveals itself at each position – and you are also welcome to step into roles and experience your system from different perspectives. Step by step, more clarity about hidden connections emerges.",
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
    de: "Kostenlos anfordern",
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
    de: "Buche dir weiter unten direkt einen kostenlosen Telefontermin mit mir – oder schreib mir eine Nachricht. Ich freue mich, von dir zu hören!",
    en: "Book a free phone call with me below – or send me a message. I look forward to hearing from you!",
  },

  // Über mich Page
  "about.title": {
    de: "Über mich",
    en: "About me",
  },
  "about.subtitle": {
    de: "Wie ich mein eigenes Muster durchbrochen habe",
    en: "How I broke through my own pattern",
  },
  "about.intro1": {
    de: "Meine eigene Erfahrung hat mich dorthin gebracht, wo ich heute bin und warum ich behaupte, dass jeder im Kern ganz ist.",
    en: "My own experience brought me to where I am today and why I believe that everyone is whole at their core.",
  },
  "about.intro2": {
    de: "2017 kehrte ich aus einem fluchtartigen Auslandsjahr zurück. In der Ferne hatte ich ein unglaubliches Hoch erlebt, doch kaum war ich wieder in der Heimat, spürte ich den Rückschlag: Alte Umgebungen drängten mich unweigerlich wieder in alte Verhaltensweisen. In dieser Zeit fühlte ich mich, als bestünde ich zu weniger als fünf Prozent aus meinem wahren Selbst. Alles andere war reine Überlebensanpassung. Mir wurde bewusst, dass ich mir Charaktereigenschaften angeeignet hatte, nur um bestimmte Phasen meiner Kindheit zu überstehen.",
    en: "In 2017, I returned from a year abroad that felt like an escape. In the distance, I had experienced an incredible high, but as soon as I was back home, I felt the backlash: Old environments inevitably pushed me back into old behaviors. During this time, I felt as if less than five percent of me was my true self. Everything else was pure survival adaptation. I realized that I had adopted character traits just to survive certain phases of my childhood.",
  },
  "about.guidance.title": {
    de: "Der Wendepunkt",
    en: "The turning point",
  },
  "about.guidance1": {
    de: "Ich wollte dieses befreite Gefühl aus dem Ausland unbedingt wieder in meinen Alltag integrieren und suchte intensiv nach Wegen. Zuletzt war es das Familienstellen, das mich inspirierte, ganz genau zu verstehen, was in mir wirklich passierte. Ich lernte zu erkennen: Es sind Gedanken und emotionale Muster, die in der frühen Kindheit auf uns übertragen wurden, die uns steuern.",
    en: "I desperately wanted to integrate that liberated feeling from abroad back into my everyday life and searched intensively for ways. Ultimately, it was family constellation work that inspired me to understand precisely what was really happening inside me. I learned to recognize: It is thoughts and emotional patterns transferred to us in early childhood that control us.",
  },
  "about.guidance2": {
    de: "In den Aufstellungen durfte ich erleben, wie heilsam es ist, wenn das Unterbewusste klar werden kann und sich der Raum öffnet, in dem das Muster durchbrochen wird. Dadurch konnte ich meine Erfahrungen loslassen und ein unbeschwerteres Leben beginnen. Heute lebe ich zu über 95 Prozent mein wahres Selbst – und das nicht nur für Momente, sondern die ganze Zeit.",
    en: "In the constellations, I was able to experience how healing it is when the subconscious can become clear and the space opens in which the pattern is broken. Through this, I was able to let go of my experiences and begin a more carefree life. Today, I live over 95 percent as my true self – and not just for moments, but all the time.",
  },
  "about.guidance3": {
    de: "Wir alle haben die Wahl: Du kannst entscheiden, ob du deine inneren Muster löst oder ob dein Leben passiert, wie es deine Eltern und dein Umfeld dir gesagt haben. Ich habe mich für das innere Wachstum entschieden.",
    en: "We all have a choice: You can decide whether to resolve your inner patterns or whether your life happens as your parents and environment told you. I chose inner growth.",
  },
  "about.core.title": {
    de: "Meine Aufgabe heute",
    en: "My mission today",
  },
  "about.core1": {
    de: "Heute ist es eine Aufgabe für mich, Räume zu schaffen, in denen wir das Bewusstsein für unsere Tiefe eröffnen und innere Wachstumsprozesse anstoßen.",
    en: "Today, my mission is to create spaces where we can open awareness for our depth and initiate inner growth processes.",
  },
  "about.core2": {
    de: "Gemeinsam schauen wir uns an, wo deine größten Schätze vergraben sind, damit du Frieden mit deiner Vergangenheit schließen kannst und nachhaltig Gelassenheit entsteht.",
    en: "Together, we look at where your greatest treasures are buried, so that you can make peace with your past and lasting serenity arises.",
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
    de: "Der Weg zum eigenen Ganz-Sein",
    en: "The path to your own wholeness",
  },
  "aboutPreview.text1": {
    de: "Ich habe selbst erfahren, wie wir unbewusst in alten Dynamiken gefangen sein können. Als ich 2017 aus einem fluchtartigen Auslandsjahr zurückkehrte, brachten mich alte Umgebungen sofort wieder in meine alten Verhaltensweisen zurück. Ich erkannte schmerzhaft: Ich war zu weniger als fünf Prozent ich selbst – alles andere war reine Überlebensanpassung. Es waren Gedanken und emotionale Muster, die früh auf mich übertragen wurden.",
    en: "I have experienced firsthand how we can be unconsciously trapped in old dynamics. When I returned from a year abroad in 2017, old environments immediately pulled me back into old behaviors. I painfully realized: I was less than five percent myself – everything else was pure survival adaptation. These were thoughts and emotional patterns that were transferred to me early on.",
  },
  "aboutPreview.text2": {
    de: "Das Familienstellen hat mich schließlich inspiriert, ganz genau zu verstehen, was in mir wirklich passiert. In Momenten, wo Unterbewusstes klar werden kann, konnte ich diese Muster durchbrechen. Heute lebe ich zu über 95 Prozent mein wahres Selbst. Ich begleite dich dabei, die Tiefe deiner immer wieder kehrenden Muster aus dem Alltag zu finden und zu lösen, damit in deinem Leben nachhaltig Gelassenheit entsteht.",
    en: "Family constellation work ultimately inspired me to understand precisely what was really happening inside me. In moments where the subconscious can become clear, I was able to break through these patterns. Today, I live over 95 percent as my true self. I accompany you in finding and resolving the depth of your recurring everyday patterns, so that lasting serenity arises in your life.",
  },
  "aboutPreview.cta": {
    de: "Mehr über meinen Weg lesen",
    en: "Read more about my journey",
  },

  // Method Section (Homepage)
  "method.intro": {
    de: "Wie machen wir das konkret?",
    en: "How do we do this concretely?",
  },
  "method.title": {
    de: "Familienaufstellung – dein System-Audit",
    en: "Family Constellation – Your System Audit",
  },
  "method.description": {
    de: "In Einzelsessions schauen wir uns an, welche unsichtbaren Dynamiken dich steuern. Keine endlose Gesprächstherapie – sondern ein präziser Blick auf die Wurzel deiner Muster.",
    en: "In individual sessions, we look at which invisible dynamics are controlling you. No endless talk therapy – but a precise look at the root of your patterns.",
  },
  "method.step1.title": {
    de: "Ankommen & Fokus finden",
    en: "Arrive & Find Focus",
  },
  "method.step1.desc": {
    de: "Was beschäftigt dich? Gemeinsam finden wir das Thema, das gerade am meisten Energie bindet.",
    en: "What's on your mind? Together we find the theme that currently binds the most energy.",
  },
  "method.step2.title": {
    de: "Muster sichtbar machen",
    en: "Making Patterns Visible",
  },
  "method.step2.desc": {
    de: "Durch Aufstellungsarbeit wird sichtbar, was im Unterbewussten wirkt – die unsichtbare Architektur deiner inneren Blockaden.",
    en: "Through constellation work, what operates in the subconscious becomes visible – the invisible architecture of your inner blockages.",
  },
  "method.step3.title": {
    de: "Integration & Lösung",
    en: "Integration & Resolution",
  },
  "method.step3.desc": {
    de: "Du erlebst, wie heilsam es ist, wenn sich der Raum öffnet, in dem alte Muster durchbrochen werden – für nachhaltige Gelassenheit.",
    en: "You experience how healing it is when the space opens in which old patterns are broken – for lasting serenity.",
  },
  "method.cta": {
    de: "Mehr über die Methode erfahren",
    en: "Learn more about the method",
  },

  // Final CTA (Homepage)
  "finalCta.title": {
    de: "Bereit für den ersten Schritt?",
    en: "Ready for the first step?",
  },
  "finalCta.description": {
    de: "In einem kostenlosen 30-minütigen Erstgespräch klären wir, ob die Chemie stimmt und wie ich dich am besten begleiten kann.",
    en: "In a free 30-minute initial conversation, we'll see if the chemistry is right and how I can best accompany you.",
  },
  "finalCta.button": {
    de: "Sichere dir jetzt deinen Termin",
    en: "Secure your appointment now",
  },
  "finalCta.microcopy": {
    de: "Kostenlos · 30 Minuten · Unverbindlich",
    en: "Free · 30 minutes · Non-binding",
  },

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
    de: "Kostenloses 30-Min. Vorgespräch",
    en: "Free 30-Min. Consultation",
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
      de: "Kostenloses 30-Min. Vorgespräch anfragen",
      en: "Request Free 30-Min. Consultation",
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
      de: "Lass uns sprechen.",
      en: "Let's talk.",
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
