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
    de: "Familienaufstellung",
    en: "Family Constellation",
  },
  "nav.ebook": {
    de: "Impulse",
    en: "Impulses",
  },
  "nav.kontakt": {
    de: "Kontakt",
    en: "Contact",
  },
  "nav.anfahrt": {
    de: "Anfahrt",
    en: "Directions",
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
    en: "Free Consultation",
  },
  "nav.angebote": {
    de: "Termine & Preise",
    en: "Appointments & Prices",
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
  "hero.eyebrow": {
    de: "Systemisches Coaching & Familienaufstellung in Freiburg",
    en: "Systemic Coaching & Family Constellation in Freiburg",
  },
  "hero.title": {
    de: "Finde zurück zu dir – und werde zum Fels in deinem eigenen Leben.",
    en: "Find your way back to yourself – and become the rock in your own life.",
  },
  "hero.subtitle": {
    de: "Du spürst, dass etwas nicht stimmt – aber kannst es nicht greifen? Wer in vereinnahmenden Familienstrukturen aufgewachsen ist, trägt oft Lasten und Rollen, die nie die eigenen waren. Im 1:1-Coaching machen wir sichtbar, was zu wem gehört – damit du zurückfindest zu dir, zu deinen Grenzen und zu innerer Klarheit.",
    en: "You sense something isn't right – but can't quite grasp it? Those who grew up in engulfing family structures often carry burdens and roles that were never their own. In 1-on-1 coaching, we make visible what belongs to whom – so you find your way back to yourself, your boundaries, and inner clarity.",
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
    de: "Unverbindlich & persönlich – 30 Min., die zeigen, ob du dich gesehen fühlst.",
    en: "Non-binding & personal – 30 min. to see if you feel understood.",
  },
  "hero.socialProof": {
    de: "Über 100 Menschen begleitet – auf dem Weg zu gesunden Grenzen und sich selbst.",
    en: "Over 100 people guided – on their path to healthy boundaries and themselves.",
  },
  "hero.ctaAngebote": {
    de: "Meine Angebote entdecken",
    en: "Discover My Offers",
  },
  "hero.ctaEbook": {
    de: "Impulse entdecken",
    en: "Discover Impulses",
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
    de: "Impulse für deinen Weg",
    en: "Impulses for your journey",
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
    de: "So buchst du deinen Termin",
    en: "How to book your appointment",
  },
  "offerings.step1": {
    de: "Kostenloses Erstgespräch – In 30 Minuten am Telefon klären wir dein Anliegen und schauen, ob die Chemie stimmt. Völlig unverbindlich.",
    en: "Free first call – In 30 minutes by phone we clarify your concern and see if the chemistry fits. Completely non-binding.",
  },
  "offerings.step2": {
    de: "Termin wählen & buchen – Such dir online direkt einen passenden Termin aus oder schreib mir per E-Mail bzw. Telegram – ganz wie es dir lieber ist.",
    en: "Choose & book your slot – Pick an appointment directly online or write me via email or Telegram – whatever you prefer.",
  },
  "offerings.step3": {
    de: "In die Praxis kommen – Du kommst in meinen Praxisraum in der Karlstraße 51 in Freiburg. Den genauen Ablauf der Sitzung selbst findest du auf der Familienaufstellung-Seite.",
    en: "Come to the practice – You visit my practice room at Karlstraße 51 in Freiburg. You'll find the exact session flow on the Family Constellation page.",
  },
  "offerings.preiseTitle": {
    de: "Klare Konditionen",
    en: "Clear Conditions",
  },
  "offerings.preiseIntro": {
    de: "Jede Sitzung dauert 80 Minuten – genug Zeit für echte Tiefe. Präsenz in Freiburg. Termine kannst du direkt über die beiden untenstehenden Optionen online buchen – oder per E-Mail und Telegram vereinbaren.\n\nUnterstützung soll nicht am Geld scheitern: Wenn du dir die regulären Preise gerade nicht leisten kannst, sprich mich gerne offen darauf an – wir finden eine vergünstigte Lösung, die für dich passt.",
    en: "Each session lasts 80 minutes – enough time for real depth. In-person in Freiburg. You can book directly via the two options below – or arrange an appointment by email or Telegram.\n\nSupport shouldn't fail because of money: If you can't currently afford the regular prices, please reach out openly – we'll find a reduced rate that works for you.",
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
    de: "Coaching mit Einzelaufstellung",
    en: "Coaching with Individual Constellation",
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
    de: "Familienaufstellung Einzelsitzung in Freiburg",
    en: "Family Constellation 1:1 Session in Freiburg",
  },
  "family.intro.title": {
    de: "Was in einer Aufstellung wirklich passiert",
    en: "What really happens in a constellation",
  },
  "family.aboutLink": {
    de: "Mehr über meinen Weg als Coach erfahren",
    en: "Learn more about my path as a coach",
  },
  "family.suitedFor.title": {
    de: "Diese Arbeit passt zu dir, wenn …",
    en: "This work fits you if …",
  },
  "family.suitedFor.1": {
    de: "… du dich in alten Familienrollen gefangen fühlst.",
    en: "… you feel trapped in old family roles.",
  },
  "family.suitedFor.2": {
    de: "… sich Beziehungsmuster bei dir immer wieder wiederholen.",
    en: "… relationship patterns keep repeating in your life.",
  },
  "family.suitedFor.3": {
    de: "… du eine innere Last spürst, die sich nicht ganz wie deine eigene anfühlt.",
    en: "… you feel an inner burden that doesn't quite feel like your own.",
  },
  "family.suitedFor.4": {
    de: "… du bereit bist, ehrlich hinzuschauen und dich auf einen tiefen Prozess einzulassen.",
    en: "… you are ready to look honestly and engage in a deep process.",
  },
  "family.proof.title": {
    de: "Eine Stimme aus der Aufstellungsarbeit",
    en: "A voice from constellation work",
  },
  "family.proof.text": {
    de: "Was Menschen über die Arbeit mit mir sagen, kannst du auf der Startseite lesen.",
    en: "You can read what people say about working with me on the homepage.",
  },
  "family.proof.link": {
    de: "Weitere Erfahrungen ansehen",
    en: "View more experiences",
  },
  "family.ebookHint.title": {
    de: "Noch nicht bereit für ein Gespräch?",
    en: "Not ready for a conversation yet?",
  },
  "family.ebookHint.text": {
    de: "In meinem kostenlosen E-Book „Der Weg zum Ganzsein“ zeige ich dir, wie alte Familienmuster dich heute noch beeinflussen – und wie du den ersten Schritt zur Veränderung gehst.",
    en: "In my free e-book „The Path to Wholeness“ I show you how old family patterns still influence you today – and how to take the first step toward change.",
  },
  "family.ebookHint.cta": {
    de: "Impulse jetzt entdecken",
    en: "Discover impulses now",
  },
  "family.intro.text": {
    de: "Familienaufstellung ist eine kraftvolle Methode des systemischen Coachings, um unbewusste Dynamiken und Verstrickungen innerhalb deines Familiensystems aufzudecken. Oftmals tragen wir Lasten oder Muster unserer Vorfahren in uns, die uns in unserem aktuellen Leben blockieren, ohne dass wir uns dessen bewusst sind. Eine Aufstellung kann diese tief verwurzelten Ursachen sichtbar machen und den Weg für Klärung und nachhaltige Veränderung ebnen.",
    en: "Family constellation is a powerful method of systemic coaching to uncover unconscious dynamics and entanglements within your family system. Often we carry burdens or patterns of our ancestors within us that block us in our current life without being aware of it. A constellation can make these deep-rooted causes visible and pave the way for clarity and lasting change.",
  },
  "family.subtitle": {
    de: "Wenn alte Familienmuster dich blockieren – mach das Unsichtbare sichtbar.",
    en: "When old family patterns block you – make the invisible visible.",
  },
  "family.midCta.text": {
    de: "Klingt das nach dem, wonach du suchst?",
    en: "Sounds like what you're looking for?",
  },
  "family.step4.title": {
    de: "4. Integration im Alltag",
    en: "4. Integration into daily life",
  },
  "family.step4.text": {
    de: "Das Lösungsbild wirkt nach – wir besprechen, wie du die neuen Impulse in deinem Alltag verankern kannst.",
    en: "The solution image continues to work – we discuss how you can anchor the new impulses in your daily life.",
  },
  "family.process.stepsTitle": {
    de: "So läuft eine Sitzung ab",
    en: "How a session unfolds",
  },
  "family.faq.title": {
    de: "Häufige Fragen zur Familienaufstellung",
    en: "Frequently asked questions about family constellation",
  },
  "family.faq.q1": {
    de: "Muss ich vorher viel über meine Familie erzählen?",
    en: "Do I have to share a lot about my family beforehand?",
  },
  "family.faq.a1": {
    de: "Nein. Wir klären gemeinsam dein Anliegen, aber du musst keine Familiengeschichte ausbreiten. Die Bodenanker und dein Spüren tragen den Prozess – nicht das Erzählen.",
    en: "No. We clarify your concern together, but you don't need to lay out your family history. The floor anchors and your sensing carry the process – not the storytelling.",
  },
  "family.faq.q2": {
    de: "Sind andere Personen oder Stellvertreter dabei?",
    en: "Are other people or stand-ins involved?",
  },
  "family.faq.a2": {
    de: "Nein – wir arbeiten in der Einzelaufstellung ausschließlich zu zweit. Statt Stellvertretern nutzen wir Bodenanker, die für die Mitglieder deines Systems stehen. Das schafft einen geschützten, intimen Rahmen.",
    en: "No – in individual constellation work we work strictly one-on-one. Instead of stand-ins, we use floor anchors representing members of your system. This creates a protected, intimate setting.",
  },
  "family.faq.q3": {
    de: "Wie lange dauert eine Sitzung?",
    en: "How long does a session last?",
  },
  "family.faq.a3": {
    de: "Eine Sitzung mit Einzelaufstellung dauert 80 Minuten. Wir nehmen uns die Zeit, die dein Thema braucht, ohne unter Druck zu geraten.",
    en: "A session with individual constellation lasts 80 minutes. We take the time your topic needs, without pressure.",
  },
  "family.faq.q4": {
    de: "Ist das eine Therapie?",
    en: "Is this therapy?",
  },
  "family.faq.a4": {
    de: "Nein. Familienaufstellung ist eine Form des systemischen Coachings und ersetzt keine Psychotherapie. Wenn du dich aktuell in einer akuten psychischen Krise befindest oder in psychotherapeutischer Behandlung bist, sprich bitte vorher mit deinem Therapeuten – wir schauen dann gemeinsam, ob und wann eine Aufstellung sinnvoll ist.",
    en: "No. Family constellation is a form of systemic coaching and does not replace psychotherapy. If you are currently in an acute psychological crisis or in psychotherapeutic treatment, please speak with your therapist first – we'll then look together whether and when a constellation makes sense.",
  },
  "family.faq.q5": {
    de: "Was, wenn ich emotional werde?",
    en: "What if I become emotional?",
  },
  "family.faq.a5": {
    de: "Gefühle sind willkommen – sie zeigen, dass etwas in Bewegung kommt. Mein Praxisraum ist ein geschützter Ort, und ich begleite dich achtsam durch jeden Moment.",
    en: "Emotions are welcome – they show that something is moving. My practice is a safe space, and I accompany you mindfully through every moment.",
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
  "family.imageCaption": {
    de: "Die farbigen Bodenanker markieren die Positionen von Familienmitgliedern, relevanten Personen oder inneren Anteilen im Raum – sie machen Dynamiken sichtbar und erlebbar.",
    en: "The colored floor anchors mark the positions of family members, relevant persons, or inner parts in the room – they make dynamics visible and tangible.",
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
    de: "Der Weg zum Ganzsein – Jetzt gratis herunterladen",
    en: "The Path to Wholeness – Download for free now",
  },
  "ebook.headline": {
    de: "Frei von alten Familienmustern: Wie du wieder zu dir selbst findest",
    en: "Free from old family patterns: How to find your way back to yourself",
  },
  "ebook.subheadline": {
    de: "Auf 6 kompakten Seiten erfährst du, warum du immer wieder in vertraute Familiendynamiken zurückrutschst – und wie du Schritt für Schritt in ein selbstbestimmtes Leben findest, ohne ständige Schuldgefühle. Das E-Book ‚Der Weg zum Ganzsein‘ zeigt dir die unsichtbare Architektur deiner familiären Verstrickungen.",
    en: "In 6 concise pages, you'll learn why you keep slipping back into familiar family dynamics – and how to step by step find your way into a self-determined life, without constant guilt. The e-book 'The Path to Wholeness' reveals the invisible architecture of your family entanglements.",
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
    de: "Mit dem Klick auf den Button bist du damit einverstanden, dass Jona Fels dir das kostenlose E-Book zusendet und dich in den E-Mail-Newsletter aufnimmt. Deine Daten werden gemäß der",
    en: "By clicking the button, you agree that Jona Fels sends you the free e-book and adds you to the email newsletter. Your data is processed according to the",
  },
  "ebook.here": {
    de: "Datenschutzerklärung",
    en: "privacy policy",
  },
  "ebook.privacyNoteAfter": {
    de: "verarbeitet. Du kannst diese Einwilligung jederzeit mit nur einem Klick am Ende jeder E-Mail widerrufen.",
    en: "You can revoke this consent at any time with just one click at the end of every email.",
  },
  "ebook.download": {
    de: "Jetzt Impulse sichern",
    en: "Get my impulses now",
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
    de: "Warum dich alte Familiendynamiken immer wieder zurückziehen, sobald du eigene Wege gehen willst.",
    en: "Why old family dynamics keep pulling you back as soon as you try to walk your own path.",
  },
  "ebook.feature2.title": {
    de: "Die Familien-Dynamik",
    en: "The Family Dynamic",
  },
  "ebook.feature2.text": {
    de: "Wie vereinnahmende oder grenzüberschreitende Familienstrukturen bis heute deine Beziehungen und dein Selbstgefühl prägen.",
    en: "How engulfing or boundary-crossing family structures still shape your relationships and sense of self today.",
  },
  "ebook.feature3.title": {
    de: "Zurück zu dir selbst",
    en: "Back to Yourself",
  },
  "ebook.feature3.text": {
    de: "Wie du unterscheidest, was wirklich zu dir gehört – und was du nur aus deinem Familiensystem mitträgst.",
    en: "How to distinguish what truly belongs to you – and what you only carry from your family system.",
  },
  "ebook.feature4.title": {
    de: "Systemischer Quick-Check",
    en: "Systemic Quick-Check",
  },
  "ebook.feature4.text": {
    de: "Erste Schritte, um deine inneren Verstrickungen zu erkennen und Klarheit zu gewinnen.",
    en: "First steps to recognise your inner entanglements and gain clarity.",
  },
  "ebook.success": {
    de: "In wenigen Minuten findest du eine E-Mail mit dem Betreff „Bitte bestätige deine Anmeldung\" in deinem Postfach. Klicke darin auf den Bestätigungs-Button – im Anschluss bekommst du eine zweite E-Mail von mir mit dem Download-Link für dein E-Book. Schau bitte auch im Spam-Ordner nach.",
    en: "In a few minutes you'll find an email titled \"Please confirm your subscription\" in your inbox. Click the confirmation button – right after, you'll receive a second email from me with the download link for your e-book. Please also check your spam folder.",
  },
  "ebook.freeEbook": {
    de: "Impulse",
    en: "Impulses",
  },
  "ebook.done": {
    de: "Geschafft!",
    en: "Done!",
  },
  "ebook.namePlaceholder": {
    de: "Dein Vorname",
    en: "Your first name",
  },
  "ebook.emailPlaceholder": {
    de: "deine@email.de",
    en: "your@email.com",
  },
  "ebook.emailError": {
    de: "Bitte gib eine gültige E-Mail-Adresse ein.",
    en: "Please enter a valid email address.",
  },
  "ebook.sending": {
    de: "Wird gesendet...",
    en: "Sending...",
  },
  "ebook.toastSendingTitle": {
    de: "Anmeldung läuft...",
    en: "Submitting...",
  },
  "ebook.toastSendingDesc": {
    de: "Einen Moment bitte.",
    en: "One moment please.",
  },
  "ebook.toastSuccessTitle": {
    de: "Fast geschafft!",
    en: "Almost done!",
  },
  "ebook.toastSuccessDesc": {
    de: "Bitte bestätige in der ersten E-Mail kurz deine Anmeldung – danach kommt eine zweite Mail mit dem Download-Link.",
    en: "Please confirm your subscription in the first email – a second email with the download link will follow.",
  },
  "ebook.toastErrorTitle": {
    de: "Fehler beim Senden",
    en: "Error sending",
  },
  "ebook.toastErrorDesc": {
    de: "Bitte versuche es später erneut.",
    en: "Please try again later.",
  },
  "ebook.toastConnectionTitle": {
    de: "Verbindungsfehler",
    en: "Connection error",
  },
  "ebook.toastConnectionDesc": {
    de: "Bitte überprüfe deine Internetverbindung.",
    en: "Please check your internet connection.",
  },
  "ebook.benefit1": {
    de: "Das Gummiband-Prinzip: Warum du dich immer wieder von manipulativen Dynamiken einfangen lässt, obwohl du dir eigentlich vorgenommen hattest, auf Distanz zu gehen.",
    en: "The Rubber Band Principle: Why you keep getting caught up in manipulative dynamics, even though you'd resolved to keep your distance.",
  },
  "ebook.benefit2": {
    de: "Die Eltern-Dynamik: Wie unsichtbare familiäre Verstrickungen dich daran hindern, deine eigenen Bedürfnisse zu spüren und zu leben.",
    en: "The Parental Dynamic: How invisible family entanglements prevent you from sensing and living your own needs.",
  },
  "ebook.benefit3": {
    de: "Wahre Grenzen setzen: Wie du lernst, emotionalen Abstand zu wahren und Manipulationen an dir abprallen zu lassen – ganz ohne schlechtes Gewissen.",
    en: "Setting true boundaries: How to keep emotional distance and let manipulation bounce off you – without any guilt.",
  },
  "ebook.benefit4": {
    de: "Systemischer Quick-Check: Die ersten Schritte, um deinen eigenen Willen wiederzufinden und endlich der Fels in deiner eigenen Brandung zu werden.",
    en: "Systemic Quick-Check: The first steps to rediscover your own will and finally become the rock in your own storm.",
  },
  "ebook.newsletterConsent": {
    de: "Ja, ich möchte den Newsletter mit Impulsen erhalten. Bestätigung per E-Mail (Double-Opt-In), Abmeldung jederzeit möglich.",
    en: "Yes, I'd like to receive the newsletter with impulses. Confirmation via email (double opt-in), unsubscribe anytime.",
  },
  "ebook.newsletterError": {
    de: "Newsletter-Anmeldung fehlgeschlagen, dein E-Book ist aber unterwegs.",
    en: "Newsletter signup failed, but your e-book is on its way.",
  },
  "ebook.newsletterRequiredTitle": {
    de: "Einwilligung erforderlich",
    en: "Consent required",
  },
  "ebook.newsletterRequiredDesc": {
    de: "Bitte bestätige die Newsletter-Anmeldung, um das kostenlose E-Book zu erhalten.",
    en: "Please confirm the newsletter signup to receive the free e-book.",
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
    de: "Dein systemischer Coach in Freiburg",
    en: "Your systemic coach in Freiburg",
  },
  "about.subtitle": {
    de: "Wie ich aus alten Familienmustern herausgefunden habe",
    en: "How I found my way out of old family patterns",
  },
  "about.intro1": {
    de: "Meine eigene Erfahrung hat mich dorthin gebracht, wo ich heute bin – und sie ist der Grund, warum ich überzeugt bin: In jedem von uns ist ein Kern, der ganz und klar ist, auch wenn er lange unter fremden Lasten verschüttet war.",
    en: "My own experience brought me to where I am today – and it is the reason I am convinced: within each of us is a core that is whole and clear, even when it has long been buried under burdens that aren't our own.",
  },
  "about.intro2": {
    de: "2017 kehrte ich aus einem fluchtartigen Auslandsjahr zurück. In der Ferne hatte ich erlebt, wie sich Leichtigkeit anfühlen kann – doch kaum war ich wieder zu Hause, drängten mich vertraute Familienstrukturen unweigerlich in alte Rollen und Verhaltensweisen zurück. In dieser Zeit fühlte ich mich, als bestünde ich zu weniger als fünf Prozent aus meinem wahren Selbst. Alles andere war Anpassung, um in einem Umfeld zu funktionieren, das wenig Raum für mich ließ.",
    en: "In 2017, I returned from a year abroad that felt like an escape. Far from home, I had experienced what lightness can feel like – but as soon as I was back, familiar family structures inevitably pulled me into old roles and behaviors again. During this time, I felt as if less than five percent of me was my true self. Everything else was adaptation, just to function in surroundings that left little room for me.",
  },
  "about.guidance.title": {
    de: "Der Wendepunkt",
    en: "The turning point",
  },
  "about.guidance1": {
    de: "Ich wollte dieses freie Gefühl unbedingt zurück in meinen Alltag holen und suchte nach Wegen. Schließlich war es das Familienstellen, das mir half, klar zu sehen, was eigentlich in mir wirkt: Es sind Gefühle, Gedanken und Rollen aus dem Familiensystem, die früh übernommen wurden – und uns als Erwachsene noch immer steuern, ohne dass wir es merken.",
    en: "I really wanted to bring that free feeling back into my everyday life and searched for ways. In the end, it was family constellation work that helped me see clearly what was actually at work inside me: feelings, thoughts and roles from the family system, taken on early in life – and still steering us as adults without us noticing.",
  },
  "about.guidance2": {
    de: "In den Aufstellungen durfte ich erleben, wie befreiend es ist, wenn sichtbar wird, was zu mir gehört – und was nicht. Ich konnte alte Lasten zurückgeben und ein leichteres Leben beginnen. Heute stehe ich in meinem eigenen Leben – mit klaren Grenzen, innerer Ruhe und einem festen Fels in mir, an dem alte Dynamiken abprallen können.",
    en: "In the constellations, I was able to experience how freeing it is when it becomes visible what truly belongs to me – and what doesn't. I could give old burdens back and begin a lighter life. Today I stand in my own life – with clear boundaries, inner calm and a solid rock inside me where old dynamics can simply bounce off.",
  },
  "about.guidance3": {
    de: "Wir alle haben die Wahl: Du kannst entscheiden, ob du alte Familienmuster löst – oder ob dein Leben weiter so verläuft, wie es dein Umfeld dir vorgegeben hat. Ich habe mich für den Weg nach innen entschieden.",
    en: "We all have a choice: You can decide whether to release old family patterns – or whether your life continues to unfold the way your surroundings have shaped it. I chose the path inward.",
  },
  "about.core.title": {
    de: "Meine Aufgabe heute",
    en: "My mission today",
  },
  "about.core1": {
    de: "Heute schaffe ich Räume, in denen Menschen erkennen können, was wirklich zu ihnen gehört – und was sie aus ihrem Familiensystem mittragen, ohne es bestellt zu haben. So entsteht der Boden, auf dem du wieder zu dir selbst zurückfindest.",
    en: "Today, I create spaces where people can recognize what truly belongs to them – and what they carry from their family system without ever having asked for it. This is the ground on which you can find your way back to yourself.",
  },
  "about.core2": {
    de: "Gemeinsam schauen wir hin, was dich heute klein hält oder verstrickt – damit du Frieden mit deiner Vergangenheit schließen, gesunde Grenzen entwickeln und nachhaltig Gelassenheit finden kannst.",
    en: "Together, we look at what is holding you small or entangled today – so that you can make peace with your past, develop healthy boundaries and find lasting serenity.",
  },
  "about.cv.title": {
    de: "Lebenslauf",
    en: "Resume",
  },
  "about.cv1.year": {
    de: "2025 – 2026",
    en: "2025 – 2026",
  },
  "about.cv1.title": {
    de: "Zertifizierter Familiensteller (Wolfgang Bracht)",
    en: "Certified Family Constellation Facilitator (Wolfgang Bracht)",
  },
  "about.cv1.desc": {
    de: "Umfassende Ausbildung in systemischer Aufstellungsarbeit, Trauma-Therapie, NLP, Transaktionsanalyse und Pesso-Arbeit (203 Stunden).",
    en: "Comprehensive training in systemic constellation work, trauma therapy, NLP, transactional analysis, and Pesso work (203 hours).",
  },
  "about.cv1.badge": {
    de: "Abschluss: sehr gut",
    en: "Graduated: very good",
  },
  "about.cv2.year": {
    de: "2022 – 2023",
    en: "2022 – 2023",
  },
  "about.cv2.title": {
    de: "Allgemeiner Heilpraktiker",
    en: "General Naturopath",
  },
  "about.cv2.desc": {
    de: "Studium an der Paracelsus Heilpraktikerschule Freiburg im Breisgau (700 Stunden).",
    en: "Studies at the Paracelsus Heilpraktikerschule Freiburg im Breisgau (700 hours).",
  },
  "about.cv3.year": {
    de: "2016 – 2017",
    en: "2016 – 2017",
  },
  "about.cv3.title": {
    de: "Auslandsjahr in Neuseeland",
    en: "Year abroad in New Zealand",
  },
  "about.cv3.desc": {
    de: "Der Wendepunkt meiner persönlichen Transformation.",
    en: "The turning point of my personal transformation.",
  },
  "about.cv4.year": {
    de: "seit Mai 2026",
    en: "since May 2026",
  },
  "about.cv4.title": {
    de: "Gestalttherapie-Ausbildung",
    en: "Gestalt Therapy Training",
  },
  "about.cv4.desc": {
    de: "Mehrjährige Ausbildung in Gestalttherapie bei Damiano Nöthen (Freiburg & Italien) – Vertiefung in Präsenz, Prozessarbeit und der bewussten Wahrnehmung des, was im Moment lebendig ist.",
    en: "Multi-year training in Gestalt therapy with Damiano Nöthen (Freiburg & Italy) – deepening presence, process work, and conscious awareness of what is alive in the moment.",
  },
  "about.cv4.badge": {
    de: "laufend",
    en: "ongoing",
  },
  "about.praxinode": {
    de: "Neben dem Coaching begleite ich auch Kolleg:innen in die digitale Welt – mit [Praxinode](https://praxinode.com), Webseiten für Therapeuten & Coaches.",
    en: "Besides coaching, I also help colleagues enter the digital world – with [Praxinode](https://praxinode.com), websites for therapists & coaches.",
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
    de: "Vom inneren Sturm zum eigenen Fels",
    en: "From inner storm to your own rock",
  },
  "aboutPreview.text1": {
    de: "Ich habe selbst erfahren, wie es ist, wenn die Grenzen in der Familie verschwimmen und man unbewusst fremde Lasten mitträgt. Lange habe ich gespürt, dass etwas nicht stimmt – ohne greifen zu können, was eigentlich zu mir gehört und was nicht.",
    en: "I know from my own experience what it's like when boundaries within a family blur and you unknowingly carry burdens that aren't yours. For a long time I sensed something was off – without being able to grasp what actually belonged to me and what didn't.",
  },
  "aboutPreview.text2": {
    de: "Das Familienstellen hat mir geholfen, klar zu unterscheiden: Was gehört zu mir – und was zu wem anders? Heute stehe ich in meinem eigenen Leben, mit gesunden Grenzen und innerer Ruhe. Genau diesen Weg gehe ich mit dir: behutsam, klar und in deinem Tempo.",
    en: "Family constellation work helped me clearly distinguish: what belongs to me – and what belongs to whom else? Today I stand in my own life, with healthy boundaries and inner calm. This is exactly the path I walk with you: gently, clearly and at your pace.",
  },
  "aboutPreview.cta": {
    de: "Mehr über meinen Weg lesen",
    en: "Read more about my journey",
  },

  // Method Section (Homepage)
  "method.intro": {
    de: "Wie machen wir das konkret? – Geschützt im 1:1 Setting",
    en: "How do we do this concretely? – Safely in a 1-on-1 setting",
  },
  "method.title": {
    de: "Familienaufstellung – alte Muster verstehen und lösen",
    en: "Family Constellation – understand and release old patterns",
  },
  "method.description": {
    de: "In Einzelsessions schauen wir gemeinsam, welche Familiendynamiken bis heute in dir wirken. Kein Aufrechnen, keine Schuldzuweisung – ein behutsamer Blick auf die Wurzel deiner Themen, damit du wieder klar bei dir ankommst.",
    en: "In individual sessions, we look together at which family dynamics still resonate within you today. No score-keeping, no blame – a gentle look at the root of your themes, so you can arrive clearly with yourself again.",
  },
  "method.step1.title": {
    de: "Ankommen & Thema benennen",
    en: "Arrive & name the issue",
  },
  "method.step1.desc": {
    de: "Was beschäftigt dich gerade? Wir benennen das Thema, das dir aktuell am meisten Energie kostet – ohne Druck, ohne Bewertung.",
    en: "What's on your mind right now? We name the topic that currently costs you the most energy – without pressure, without judgment.",
  },
  "method.step2.title": {
    de: "Dynamiken sichtbar machen",
    en: "Make dynamics visible",
  },
  "method.step2.desc": {
    de: "Mit Bodenankern wird sichtbar, welche Rollen und Bindungen noch in dir wirken – und wo alte Muster deinen Alltag mitsteuern.",
    en: "With floor anchors, the roles and bonds still at work within you become visible – and where old patterns are co-steering your everyday life.",
  },
  "method.step3.title": {
    de: "Grenzen & Standfestigkeit",
    en: "Boundaries & steadiness",
  },
  "method.step3.desc": {
    de: "Du erlebst, wie es sich anfühlt, an deinem eigenen Platz zu stehen – mit gesunden Grenzen und mehr Ruhe in dir.",
    en: "You experience what it feels like to stand in your own place – with healthy boundaries and more calm within you.",
  },
  "method.cta": {
    de: "Mehr über die Methode erfahren",
    en: "Learn more about the method",
  },

  // Final CTA (Homepage)
  "finalCta.title": {
    de: "Werde zum Fels in deinem eigenen Leben.",
    en: "Become the rock in your own life.",
  },
  "finalCta.description": {
    de: "In einem kostenlosen 30-minütigen Erstgespräch klären wir, ob die Chemie stimmt – und wie du Schritt für Schritt zu mehr Klarheit, gesunden Grenzen und deiner eigenen Standfestigkeit findest.",
    en: "In a free 30-minute initial conversation, we'll see if the chemistry is right – and how you can step by step find more clarity, healthy boundaries and your own steadiness.",
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
    de: "Ich begleite Menschen dabei, unbewusste Muster zu erkennen und aufzulösen. Mit Präzision und tiefem Mitgefühl unterstütze ich dich auf deinem Weg zu mehr Klarheit.",
    en: "I accompany people in recognizing and dissolving unconscious patterns. With precision and deep compassion, I support you on your path to more clarity.",
  },
  "author.credential1": {
    de: "Familienaufsteller",
    en: "Family Constellation Facilitator",
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
    de: "Ausgebildet",
    en: "Certified",
  },
  "trust.certifiedDesc": {
    de: "Familienaufsteller",
    en: "Family constellation facilitator",
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
  "contactForm.error.notConfigured": {
    de: "Das Kontaktformular ist noch nicht vollständig eingerichtet. Bitte versuche es später erneut.",
    en: "The contact form is not fully configured yet. Please try again later.",
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

  // Kontakt Page – Kalender
  "contact.calendarHeadline": {
    de: "Lass uns kurz sprechen – unverbindlich und kostenfrei.",
    en: "Let's have a quick talk – non-binding and free of charge.",
  },
  "contact.calendarMicrocopy": {
    de: "Buche dir hier einen 30-minütigen Termin für ein erstes Telefonat. Wir klären in Ruhe dein Anliegen und schauen gemeinsam, ob mein Ansatz der richtige für dich ist. Hinterlasse bei der Buchung einfach deine Telefonnummer – ich rufe dich zur gebuchten Zeit an.",
    en: "Book a 30-minute slot here for a first phone call. We'll calmly explore your concern and see together whether my approach is the right fit for you. Just leave your phone number when booking – I'll call you at the scheduled time.",
  },
  "contact.altTitle": {
    de: "Oder schreib mir direkt",
    en: "Or write to me directly",
  },
  "contact.directTitle": {
    de: "Direkter Kontakt",
    en: "Direct Contact",
  },
  "contact.emailLabel": {
    de: "E-Mail",
    en: "Email",
  },
  "contact.telegramLabel": {
    de: "Telegram",
    en: "Telegram",
  },

  // Kontakt Page – Anfahrt
  "contact.directions.title": {
    de: "Anfahrt & Ankommen",
    en: "Directions & Arriving",
  },
  "contact.directions.intro": {
    de: "Mein Praxisraum befindet sich in der Karlstraße 51 im Stadtteil Herdern/Neuburg.",
    en: "My practice is located at Karlstraße 51 in the Herdern/Neuburg district.",
  },
  "contact.directions.tram": {
    de: "Straßenbahn",
    en: "Tram",
  },
  "contact.directions.tramLine": {
    de: "Linie 3 Richtung Zähringen",
    en: "Line 3 towards Zähringen",
  },
  "contact.directions.tramStop": {
    de: "Haltestelle Tennenbacher Straße",
    en: "Stop: Tennenbacher Straße",
  },
  "contact.directions.tramWalk": {
    de: "4 Minuten zu Fuß",
    en: "4 minutes on foot",
  },
  "contact.directions.car": {
    de: "Auto & Parken",
    en: "Car & Parking",
  },
  "contact.directions.carParking": {
    de: "Parkplätze mit Automaten in der Karlstraße",
    en: "Metered parking on Karlstraße",
  },
  "contact.directions.carTip": {
    de: "Tipp: ~10 Min. extra einplanen",
    en: "Tip: plan ~10 min. extra",
  },
  "contact.directions.onSite": {
    de: "Vor Ort",
    en: "On Site",
  },
  "contact.directions.onSite1": {
    de: "Praxisraum im Erdgeschoss",
    en: "Practice room on the ground floor",
  },
  "contact.directions.onSite2": {
    de: "Es gibt einen kleinen Wartebereich",
    en: "There is a small waiting area",
  },
  "contact.directions.onSite3": {
    de: "Ich komme direkt zur Tür",
    en: "I come directly to the door",
  },
  "contact.directions.address": {
    de: "Karlstraße 51, 79104 Freiburg im Breisgau",
    en: "Karlstraße 51, 79104 Freiburg im Breisgau",
  },

  // Angebote Page – hardcoded texts
  "offerings.badge.einstieg": {
    de: "Einstieg",
    en: "Intro",
  },
  "offerings.value.empathetic": {
    de: "Einfühlsam",
    en: "Empathetic",
  },
  "offerings.value.empatheticDesc": {
    de: "Ich höre dir zu – ohne Bewertung, mit echtem Interesse.",
    en: "I listen to you – without judgment, with genuine interest.",
  },
  "offerings.value.safe": {
    de: "Geschützter Rahmen",
    en: "Safe Space",
  },
  "offerings.value.safeDesc": {
    de: "Alles bleibt vertraulich. Dein Tempo bestimmt den Weg.",
    en: "Everything stays confidential. Your pace sets the path.",
  },
  "offerings.value.lasting": {
    de: "Nachhaltig",
    en: "Lasting",
  },
  "offerings.value.lastingDesc": {
    de: "Wir arbeiten an Lösungen, die in deinem Alltag wirken.",
    en: "We work on solutions that make a difference in your daily life.",
  },
  "offerings.ablaufIntro": {
    de: "In drei einfachen Schritten von deiner ersten Anfrage bis in meinen Praxisraum in Freiburg.",
    en: "In three simple steps from your first inquiry to my practice in Freiburg.",
  },
  "offerings.perUnit": {
    de: "/ 80 Min.",
    en: "/ 80 min.",
  },
  "offerings.location": {
    de: "Präsenz in Freiburg",
    en: "In-person in Freiburg",
  },
  "offerings.unsure": {
    de: "Noch unsicher?",
    en: "Still unsure?",
  },
  "offerings.unsureTitle": {
    de: "Lass uns kurz sprechen",
    en: "Let's have a quick chat",
  },
  "offerings.unsureText": {
    de: "Du weißt noch nicht, welches Angebot zu dir passt? In einem kostenlosen 30-Minuten-Vorgespräch finden wir es gemeinsam heraus – ganz ohne Verpflichtung.",
    en: "Not sure which offer suits you? In a free 30-minute preliminary talk, we'll figure it out together – no obligation at all.",
  },
  "offerings.unsureCta": {
    de: "Erstgespräch vereinbaren",
    en: "Schedule Consultation",
  },
  "offerings.unsureMicrocopy": {
    de: "völlig unverbindlich & persönlich",
    en: "completely non-binding & personal",
  },

  // Footer
  "footer.contact": {
    de: "Kontakt",
    en: "Contact",
  },

  // FAQ subtitle
  "faq.subtitle": {
    de: "Häufige Fragen",
    en: "Common Questions",
  },

  // ── Impressum ──
  "imprint.according": { de: "Angaben gemäß § 5 DDG", en: "Information pursuant to § 5 DDG" },
  "imprint.address": { de: "Systemisches Coaching & Familienaufstellung in Freiburg", en: "Systemic Coaching & Family Constellation in Freiburg" },
  "imprint.contactHeading": { de: "Kontakt", en: "Contact" },
  "imprint.phone": { de: "Telefon", en: "Phone" },
  "imprint.vatHeading": { de: "Umsatzsteuer-ID", en: "VAT ID" },
  "imprint.vatText": { de: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:", en: "VAT identification number pursuant to § 27a of the German VAT Act:" },
  "imprint.insuranceHeading": { de: "Angaben zur Berufshaftpflichtversicherung", en: "Professional liability insurance" },
  "imprint.insuranceName": { de: "Name und Sitz des Versicherers:", en: "Name and registered office of the insurer:" },
  "imprint.insuranceNumber": { de: "Versicherungsnummer:", en: "Insurance number:" },
  "imprint.insuranceScope": { de: "Räumlicher Geltungsbereich: Deutschland und europäisches Ausland", en: "Territorial scope: Germany and European countries" },
  "imprint.editorialHeading": { de: "Verantwortlich für redaktionelle Inhalte (gem. § 18 Abs. 2 MStV)", en: "Responsible for editorial content (pursuant to § 18 para. 2 MStV)" },
  "imprint.disputeHeading": { de: "EU-Streitschlichtung", en: "EU dispute resolution" },
  "imprint.disputeText": { de: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:", en: "The European Commission provides a platform for online dispute resolution (ODR):" },
  "imprint.disputeEmail": { de: "Meine E-Mail-Adresse findest du oben im Impressum.", en: "You can find my email address above in the imprint." },
  "imprint.arbitrationHeading": { de: "Verbraucher­streit­beilegung / Universal­schlichtungs­stelle", en: "Consumer dispute resolution / Universal arbitration board" },
  "imprint.arbitrationText": { de: "Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.", en: "I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board." },
  "imprint.coachingHeading": { de: "Berufsrechtlicher Hinweis zum Coaching", en: "Legal notice regarding coaching" },
  "imprint.coachingText": { de: "Mein Angebot im Rahmen des Systemischen Coachings und der Familienaufstellungen dient der Persönlichkeitsentwicklung, der Gesundheitsprävention und der Lösungsfindung. Es stellt keine Heilbehandlung dar und ist kein Ersatz für eine medizinische, psychiatrische oder psychotherapeutische Diagnose oder Behandlung. Bei gesundheitlichen oder psychischen Beschwerden wende dich bitte an einen Arzt oder Psychotherapeuten.", en: "My services in the area of systemic coaching and family constellations are intended for personal development, health prevention, and finding solutions. They do not constitute medical treatment and are not a substitute for medical, psychiatric, or psychotherapeutic diagnosis or treatment. If you have health or psychological concerns, please consult a doctor or psychotherapist." },
  "imprint.scopeHeading": { de: "Geltungsbereich", en: "Scope" },
  "imprint.scopeText": { de: "Dieses Impressum gilt auch für meine Social-Media-Präsenzen und Profile auf Drittplattformen (z.\u00a0B. Instagram, LinkedIn).", en: "This imprint also applies to my social media presences and profiles on third-party platforms (e.g. Instagram, LinkedIn)." },

  // ── AGB ──
  "terms.intro": { de: "Mir ist es wichtig, dass du dich von Anfang an gut und sicher informiert fühlst – auch was die Rahmenbedingungen unserer Zusammenarbeit betrifft. Deshalb findest du hier alles Wesentliche transparent und verständlich zusammengefasst.", en: "It is important to me that you feel well and securely informed from the very beginning – including the framework of our collaboration. That is why you will find all the essentials summarised here in a transparent and understandable way." },
  "terms.clientInfo": { de: "Klienteninformation", en: "Client Information" },
  "terms.s1.heading": { de: "1. Geltungsbereich", en: "1. Scope" },
  "terms.s1.text": { de: "Diese Allgemeinen Gesch\u00e4ftsbedingungen gelten f\u00fcr alle Vereinbarungen und Dienstleistungen zwischen Systemisches Coaching & Familienaufstellung in Freiburg \u2013 Jona Fels (nachfolgend \u201ECoach\u201C) und dir als Klient:in. Sie bilden die vertragliche Grundlage unserer Zusammenarbeit, sofern wir nicht individuell etwas anderes schriftlich vereinbaren.", en: "These General Terms and Conditions apply to all agreements and services between Systemic Coaching & Family Constellation in Freiburg \u2013 Jona Fels (hereinafter \u201CCoach\u201D) and you as a client. They form the contractual basis of our collaboration unless we individually agree otherwise in writing." },
  "terms.s2.heading": { de: "2. Leistungsangebot & Abgrenzung zur Heilkunde", en: "2. Services & Distinction from Medical Practice" },
  "terms.s2.p1": { de: "Ich biete systemisches Coaching und Familienaufstellungen an. Dabei geht es darum, dir einen geschützten Raum zu geben, in dem du Klarheit über deine Themen gewinnen kannst – sei es in familiären Zusammenhängen, persönlichen Entscheidungen oder inneren Prozessen.", en: "I offer systemic coaching and family constellations. The aim is to provide you with a safe space where you can gain clarity about your issues – be it in family contexts, personal decisions, or inner processes." },
  "terms.s2.p2": { de: "Mein Coaching dient der Persönlichkeitsentwicklung und Lösungsfindung. Es ist keine Psychotherapie und ersetzt keine medizinische, ärztliche oder psychiatrische Diagnose und Behandlung. Wenn du dich aktuell in einer psychischen Krise befindest oder in therapeutischer Behandlung bist, sprich mich bitte vor der Buchung offen darauf an. Gemeinsam schauen wir, ob ein Coaching für dich sinnvoll und machbar ist.", en: "My coaching serves personal development and finding solutions. It is not psychotherapy and does not replace medical or psychiatric diagnosis and treatment. If you are currently in a mental health crisis or undergoing therapeutic treatment, please let me know openly before booking. Together we will assess whether coaching is appropriate and feasible for you." },
  "terms.s3.heading": { de: "3. Vertragsschluss & Terminbuchung", en: "3. Contract Conclusion & Booking" },
  "terms.s3.text": { de: "Unsere Zusammenarbeit beginnt ganz unkompliziert: Du buchst einen Termin über mein Online-Buchungssystem (Orbnet), per E-Mail oder über Telegram. Mit deiner Buchung und meiner anschließenden Terminbestätigung kommt der verbindliche Vertrag zwischen uns zustande.", en: "Our collaboration begins very simply: You book an appointment through my online booking system (Orbnet), by email, or via Telegram. The binding contract between us is concluded with your booking and my subsequent appointment confirmation." },
  "terms.s4.heading": { de: "4. Vergütung & Zahlungsbedingungen", en: "4. Fees & Payment Terms" },
  "terms.s4.p1": { de: "Es gelten die Preise, die zum Zeitpunkt deiner Buchung auf meiner Webseite oder im Buchungssystem veröffentlicht sind. Nach unserer Sitzung erhältst du eine Rechnung (z.\u00a0B. via lexoffice), die innerhalb von 14 Tagen ohne Abzug zu begleichen ist.", en: "The prices published on my website or in the booking system at the time of your booking apply. After our session, you will receive an invoice (e.g. via lexoffice), which is to be paid within 14 days without deduction." },
  "terms.s4.p2": { de: "Gemäß § 19 UStG bin ich als Kleinunternehmer tätig und weise auf meinen Rechnungen daher keine Umsatzsteuer aus. Die aufgerufenen Preise sind Endpreise.", en: "Pursuant to § 19 UStG, I operate as a small business and therefore do not charge VAT on my invoices. The prices quoted are final prices." },
  "terms.s5.heading": { de: "5. Stornierungsbedingungen", en: "5. Cancellation Policy" },
  "terms.s5.intro": { de: "Ich verstehe, dass das Leben manchmal dazwischenkommt und sich Pläne ändern können. Für meine Planungssicherheit beachte bitte folgende Regelung:", en: "I understand that life sometimes gets in the way and plans can change. For my planning security, please note the following:" },
  "terms.s5.li1": { de: "Bis 48 Stunden vor dem vereinbarten Termin kannst du kostenfrei absagen oder verschieben.", en: "You can cancel or reschedule free of charge up to 48 hours before the agreed appointment." },
  "terms.s5.li2": { de: "Bei einer späteren Absage oder bei Nichterscheinen berechne ich das volle Honorar als Ausfallentschädigung, da ich diese Zeit exklusiv für dich freigehalten und vorbereitet habe.", en: "In case of a later cancellation or no-show, I will charge the full fee as compensation, as I reserved and prepared this time exclusively for you." },
  "terms.s5.li3": { de: "Es steht dir frei nachzuweisen, dass mir durch den Ausfall kein oder ein wesentlich geringerer Schaden entstanden ist.", en: "You are free to demonstrate that the cancellation caused me no or significantly less damage." },
  "terms.s5.li4": { de: "Deine Absage kann formlos per E-Mail, Telegram oder direkt über das Buchungssystem erfolgen.", en: "Your cancellation can be made informally by email, Telegram, or directly through the booking system." },
  "terms.s6.heading": { de: "6. Absage durch den Coach", en: "6. Cancellation by the Coach" },
  "terms.s6.text": { de: "Sollte ich einen Termin aus wichtigem Grund (z.\u00a0B. Krankheit oder höhere Gewalt) absagen müssen, informiere ich dich so schnell wie möglich und biete dir selbstverständlich einen zeitnahen Ersatztermin an. Darüber hinausgehende Ansprüche (z.\u00a0B. Ersatz von Reisekosten) sind ausgeschlossen.", en: "Should I need to cancel an appointment for an important reason (e.g. illness or force majeure), I will inform you as soon as possible and offer you a timely replacement appointment. Further claims (e.g. reimbursement of travel costs) are excluded." },
  "terms.s7.heading": { de: "7. Eigenverantwortung & Haftung", en: "7. Personal Responsibility & Liability" },
  "terms.s7.p1": { de: "Im Coaching begleite ich dich mit professionellen Methoden und Impulsen. Die Verantwortung für deine Entscheidungen, Handlungen und deren Konsequenzen liegt jedoch stets bei dir. Ein bestimmter Erfolg oder ein konkretes Ziel kann nicht garantiert werden – du bist der/die Expert:in für dein eigenes Leben.", en: "In coaching, I accompany you with professional methods and impulses. However, the responsibility for your decisions, actions, and their consequences always lies with you. A specific success or concrete goal cannot be guaranteed – you are the expert on your own life." },
  "terms.s7.p2": { de: "Die Haftung für leicht fahrlässige Pflichtverletzungen ist ausgeschlossen, sofern keine wesentlichen Vertragspflichten (Kardinalpflichten) verletzt werden. Dieser Haftungsausschluss gilt jedoch nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Für meine Coaching-Tätigkeit bin ich zudem über eine branchenübliche Berufshaftpflichtversicherung abgesichert.", en: "Liability for slightly negligent breaches of duty is excluded, provided that no essential contractual obligations (cardinal obligations) are violated. However, this exclusion of liability does not apply to damages resulting from injury to life, body, or health. I am also covered by a standard professional liability insurance for my coaching activities." },
  "terms.s8.heading": { de: "8. Verschwiegenheit & Datenschutz", en: "8. Confidentiality & Data Protection" },
  "terms.s8.text": { de: "Alles, was du mir in unseren Sitzungen anvertraust, bleibt streng vertraulich. Ich verpflichte mich zur absoluten Verschwiegenheit über alle Inhalte unserer Zusammenarbeit. Das ist für mich selbstverständlich und die wichtigste Grundlage für einen sicheren und vertrauensvollen Raum.", en: "Everything you entrust to me in our sessions remains strictly confidential. I commit to absolute confidentiality about all content of our collaboration. This is natural for me and the most important foundation for a safe and trusting space." },
  "terms.s8.privacyLink": { de: "Alle Regelungen zur Verarbeitung deiner persönlichen Daten findest du in meiner", en: "All regulations regarding the processing of your personal data can be found in my" },
  "terms.s8.privacyLinkText": { de: "Datenschutzerklärung", en: "Privacy Policy" },
  "terms.s9.heading": { de: "9. Widerrufsrecht für Verbraucher", en: "9. Right of Withdrawal for Consumers" },
  "terms.s9.p1": { de: "Wenn du das Coaching als Verbraucher:in (Privatperson) buchst, steht dir ein gesetzliches Widerrufsrecht von 14 Tagen zu. Du kannst den Vertrag innerhalb von 14 Tagen nach Vertragsschluss ohne Angabe von Gründen widerrufen (z.\u00a0B. per E-Mail an", en: "If you book the coaching as a consumer (private individual), you are entitled to a statutory right of withdrawal of 14 days. You can withdraw from the contract within 14 days of conclusion without giving reasons (e.g. by email to" },
  "terms.s9.p2": { de: "Wenn du wünschst, dass unsere Coaching-Sitzung bereits vor Ablauf dieser 14-tägigen Frist stattfindet, erklärst du dich ausdrücklich damit einverstanden, dass ich vor Ablauf der Widerrufsfrist mit der Leistung beginne. Dir ist bekannt, dass dein Widerrufsrecht bei vollständiger Vertragserfüllung (nach der durchgeführten Sitzung) vorzeitig erlischt.", en: "If you wish for our coaching session to take place before the expiry of this 14-day period, you expressly agree that I begin the service before the withdrawal period expires. You are aware that your right of withdrawal expires prematurely upon full performance of the contract (after the completed session)." },
  "terms.s10.heading": { de: "10. Schlussbestimmungen", en: "10. Final Provisions" },
  "terms.s10.text": { de: "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung. Es gilt das Recht der Bundesrepublik Deutschland.", en: "Should individual provisions of these terms be invalid, the contract shall remain valid in all other respects. The invalid provision shall be replaced by the statutory regulation. The law of the Federal Republic of Germany applies." },

  // ── Datenschutz ──
  "privacy.intro": { de: "Willkommen bei meiner Datenschutzerklärung. Der Schutz deiner persönlichen Daten liegt mir sehr am Herzen. Ich möchte, dass du dich beim Besuch meiner Webseite fels-coach.de absolut sicher fühlst. Deshalb erkläre ich dir hier transparent, verständlich und ohne kompliziertes Fachchinesisch, welche Daten ich erhebe, wofür ich sie nutze und welche Rechte du hast.", en: "Welcome to my privacy policy. The protection of your personal data is very important to me. I want you to feel completely safe when visiting my website fels-coach.de. That is why I explain here transparently and understandably what data I collect, what I use it for, and what rights you have." },
  "privacy.s1.heading": { de: "1. Verantwortlicher", en: "1. Data Controller" },
  "privacy.s1.intro": { de: "Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:", en: "The party responsible for data processing on this website is:" },
  "privacy.s1.owner": { de: "Inhaber: Jona Fels", en: "Owner: Jona Fels" },
  "privacy.s2.heading": { de: "2. Allgemeine Informationen zur Datenverarbeitung", en: "2. General Information on Data Processing" },
  "privacy.s2.p1": { de: "Ich behandle deine Daten streng vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften, insbesondere der europäischen Datenschutz-Grundverordnung (DSGVO). Personenbezogene Daten sind alle Informationen, die sich auf dich als Person beziehen lassen (z.\u00a0B. Name, E-Mail-Adresse oder IP-Adresse).", en: "I treat your data strictly confidentially and in accordance with legal data protection regulations, in particular the European General Data Protection Regulation (GDPR). Personal data is any information that can be related to you as a person (e.g. name, email address, or IP address)." },
  "privacy.s2.p2": { de: "Um deine Daten bei der Übertragung zu schützen, nutzt diese Webseite eine SSL- bzw. TLS-Verschlüsselung. Du erkennst dies an dem \"https://\" und dem Schloss-Symbol in der Adresszeile deines Browsers. Mit allen externen Dienstleistern, die Daten in meinem Auftrag verarbeiten, habe ich sogenannte Auftragsverarbeitungsverträge (AVV) geschlossen, um den Schutz deiner Daten gesetzlich abzusichern.", en: "To protect your data during transmission, this website uses SSL or TLS encryption. You can recognise this by the \"https://\" and the lock symbol in the address bar of your browser. I have concluded data processing agreements (DPA) with all external service providers that process data on my behalf." },
  "privacy.s3.heading": { de: "3. Deine Rechte als Betroffener", en: "3. Your Rights as a Data Subject" },
  "privacy.s3.intro": { de: "Du hast jederzeit das Recht, die Kontrolle über deine Daten zu behalten. Deine Rechte umfassen:", en: "You have the right to maintain control over your data at all times. Your rights include:" },
  "privacy.s3.access": { de: "Du kannst erfragen, welche Daten ich von dir verarbeite.", en: "You can request information about what data I process about you." },
  "privacy.s3.rectification": { de: "Du kannst die Korrektur falscher Daten verlangen.", en: "You can request the correction of incorrect data." },
  "privacy.s3.erasure": { de: "Du kannst die Löschung deiner Daten verlangen, sofern keine gesetzlichen Aufbewahrungsfristen dagegen sprechen.", en: "You can request the deletion of your data, provided no legal retention periods apply." },
  "privacy.s3.restriction": { de: "Du kannst die Sperrung deiner Daten verlangen.", en: "You can request the restriction of processing of your data." },
  "privacy.s3.portability": { de: "Du kannst deine Daten in einem gängigen Format anfordern.", en: "You can request your data in a common format." },
  "privacy.s3.objection": { de: "Du kannst der Verarbeitung deiner Daten widersprechen.", en: "You can object to the processing of your data." },
  "privacy.s3.outro": { de: "Um eines dieser Rechte auszuüben, schreib mir einfach eine E-Mail an", en: "To exercise any of these rights, simply send me an email to" },
  "privacy.s3.complaint": { de: "Zudem hast du das Recht, dich bei einer Aufsichtsbehörde zu beschweren, zum Beispiel beim Landesbeauftragten für den Datenschutz Baden-Württemberg.", en: "You also have the right to lodge a complaint with a supervisory authority, for example the State Commissioner for Data Protection of Baden-Württemberg." },
  "privacy.s4.heading": { de: "4. Hosting und Server-Logfiles", en: "4. Hosting and Server Log Files" },
  "privacy.s4.p1": { de: "Meine Webseite wird über GitHub Pages (GitHub, Inc., USA) ausgeliefert und durch Cloudflare, Inc. (USA) als CDN- und DNS-Dienstleister beschleunigt und abgesichert. Bei jedem Aufruf der Webseite erfasst das System automatisch Daten, die dein Browser übermittelt (Server-Logfiles). Dazu gehören: IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs sowie die aufgerufene Seite.", en: "My website is delivered via GitHub Pages (GitHub, Inc., USA) and accelerated and secured by Cloudflare, Inc. (USA) as CDN and DNS provider. Each time you access the website, the system automatically records data transmitted by your browser (server log files). These include: IP address, browser type, operating system, date and time of access, and the page visited." },
  "privacy.s4.p2": { de: "Diese Daten sind technisch zwingend notwendig, um dir die Webseite fehlerfrei anzuzeigen und die Sicherheit der Systeme zu gewährleisten. Sie werden nicht mit anderen Datenquellen zusammengeführt.", en: "This data is technically necessary to display the website correctly and to ensure system security. It is not merged with other data sources." },
  "privacy.s4.p3": { de: "Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Speicherdauer: In der Regel 7 Tage.", en: "Legal basis: Legitimate interest (Art. 6(1)(f) GDPR). Storage period: Usually 7 days." },
  "privacy.s5.heading": { de: "5. Cookies und Webanalyse (Google Analytics 4)", en: "5. Cookies and Web Analytics (Google Analytics 4)" },
  "privacy.s5.p1": { de: "Meine Webseite verwendet technisch notwendige Cookies, die für den Betrieb der Seite unerlässlich sind (z.\u00a0B. für das Speichern deiner Cookie-Einstellungen).", en: "My website uses technically necessary cookies that are essential for the operation of the site (e.g. for saving your cookie settings)." },
  "privacy.s5.p2": { de: "Zur Verbesserung meines Angebots nutze ich zudem Google Analytics 4 (Anbieter: Google Ireland Limited). Hierbei werden pseudonymisierte Nutzungsdaten (z.\u00a0B. besuchte Seiten, Verweildauer) erhoben. Analyse-Cookies werden nur gesetzt, wenn du dem über den Cookie-Banner ausdrücklich zustimmst. Du kannst deine Einwilligung jederzeit über die Einstellungen widerrufen.", en: "To improve my offerings, I also use Google Analytics 4 (provider: Google Ireland Limited). Pseudonymised usage data (e.g. pages visited, time spent) is collected. Analytics cookies are only set if you expressly consent via the cookie banner. You can revoke your consent at any time via the settings." },
  "privacy.s5.p3": { de: "Rechtsgrundlage: Notwendige Cookies über berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO); Analytics über deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).", en: "Legal basis: Necessary cookies via legitimate interest (Art. 6(1)(f) GDPR); Analytics via your consent (Art. 6(1)(a) GDPR)." },
  "privacy.s6.heading": { de: "6. Kontaktaufnahme, Kontaktformular & E-Mail-Versand (Cloudflare & Resend)", en: "6. Contact, Contact Form & Email Delivery (Cloudflare & Resend)" },
  "privacy.s6.p1": { de: "Wenn du mich über das Kontaktformular, per E-Mail oder über Telegram kontaktierst, verarbeite ich deine Angaben (Name, E-Mail-Adresse, Inhalt der Nachricht), um deine Anfrage zu beantworten. Pflichtfelder im Formular sind Name, E-Mail und Nachricht; weitere Angaben sind freiwillig. Deine Eingaben werden bereits im Browser validiert und TLS-verschlüsselt übertragen.", en: "If you contact me via the contact form, by email, or via Telegram, I process your details (name, email address, message content) in order to respond to your enquiry. Required fields in the form are name, email and message; any further information is voluntary. Your inputs are validated in the browser and transmitted via TLS encryption." },
  "privacy.s6.p2": { de: "Technische Verarbeitung: Deine Anfrage wird über eine serverlose Funktion (Cloudflare Worker) bei Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA) entgegengenommen. Es findet keine dauerhafte Speicherung in einer Datenbank statt – die Funktion verarbeitet deine Eingaben ausschließlich kurzzeitig im Arbeitsspeicher und löst unmittelbar eine Benachrichtigungs-E-Mail an mich (jona@fels-coach.de) über den E-Mail-Dienst Resend (Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA) aus. Resend verarbeitet dazu deinen Namen, deine E-Mail-Adresse und den Inhalt deiner Nachricht ausschließlich zur Zustellung dieser einen E-Mail. Die einzige dauerhafte Speicherung deiner Anfrage erfolgt damit in meinem E-Mail-Postfach. Zum Schutz vor Missbrauch wird deine IP-Adresse kurzfristig im Arbeitsspeicher der Funktion zur Rate-Limitierung (max. 5 Anfragen pro IP / 60 Minuten) verwendet und nicht dauerhaft gespeichert. Bei der Nutzung von Telegram weise ich darauf hin, dass Daten auf den Servern des Anbieters (ggf. außerhalb der EU) verarbeitet werden.", en: "Technical processing: Your request is received via a serverless function (Cloudflare Worker) operated by Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA). No permanent storage in a database takes place — the function processes your inputs only briefly in memory and immediately triggers a notification email to me (jona@fels-coach.de) via the email service Resend (Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA). Resend processes your name, email address and message content solely to deliver that single email. The only persistent storage of your enquiry is therefore in my email inbox. To prevent abuse, your IP address is briefly held in the function's memory for rate limiting (max. 5 requests per IP / 60 minutes) and is not permanently stored. When using Telegram, please note that data may be processed on the provider's servers (potentially outside the EU)." },
  "privacy.s6.p3": { de: "Rechtsgrundlage: Anbahnung oder Erfüllung eines Vertrages (Art. 6 Abs. 1 lit. b DSGVO) sowie berechtigtes Interesse an sicherer Kommunikation und Spam-Schutz (Art. 6 Abs. 1 lit. f DSGVO). Speicherdauer: Kontaktanfragen werden gelöscht, sobald sie zur Beantwortung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen; Rate-Limit-Einträge mit IP-Adresse werden nach max. 60 Minuten zurückgesetzt.", en: "Legal basis: Pre-contractual measures or contract performance (Art. 6(1)(b) GDPR) and legitimate interest in secure communication and spam protection (Art. 6(1)(f) GDPR). Storage period: Contact requests are deleted as soon as they are no longer required for response purposes and no statutory retention obligations apply; rate-limit entries containing IP addresses are reset after a maximum of 60 minutes." },
  "privacy.s7.heading": { de: "7. KI-Chatbot (Chatbase)", en: "7. AI Chatbot (Chatbase)" },
  "privacy.s7.p1": { de: "Auf meiner Website nutze ich den KI-gestützten Chatbot der Chatbase Inc. (2261 Market Street STE 85690, San Francisco, CA 94114, USA). Dieser Dienst unterstützt mich dabei, deine Anfragen effizient zu beantworten und Termine zu koordinieren.", en: "On my website I use the AI-powered chatbot from Chatbase Inc. (2261 Market Street STE 85690, San Francisco, CA 94114, USA). This service helps me to answer your inquiries efficiently and coordinate appointments." },
  "privacy.s7.p2": { de: "Verarbeitung & Zweck: Wenn du den Chat nutzt, werden deine Eingaben sowie technische Daten (z.\u00a0B. IP-Adresse) an die Server von Chatbase übertragen, um deine Anfrage KI-gestützt zu bearbeiten.", en: "Processing & purpose: When you use the chat, your inputs as well as technical data (e.g. IP address) are transmitted to Chatbase's servers in order to process your request with AI assistance." },
  "privacy.s7.p3": { de: "Wichtiger Hinweis: Der Chatbot ist ausschließlich für allgemeine Informationen und die Terminvorbereitung vorgesehen. Ich bitte dich ausdrücklich, keine sensiblen Daten (wie z.\u00a0B. Gesundheitsdaten, Krankengeschichten oder andere private Details nach Art. 9 DSGVO) in das Chatfenster einzugeben. Diese Inhalte sind einem geschützten Gespräch vorbehalten.", en: "Important note: The chatbot is intended exclusively for general information and appointment preparation. I expressly ask you not to enter any sensitive data (such as health data, medical histories or other private details under Art. 9 GDPR) into the chat window. Such content is reserved for a protected conversation." },
  "privacy.s7.p4": { de: "Rechtsgrundlage: Die Nutzung erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du über mein Consent-Management-Tool (Cookie-Banner) oder durch aktive Interaktion mit dem Chatbot erteilst.", en: "Legal basis: Use is based on your consent (Art. 6(1)(a) GDPR), which you grant via my consent management tool (cookie banner) or through active interaction with the chatbot." },
  "privacy.s7.p5": { de: "Drittlandtransfer (USA): Da Chatbase seinen Sitz in den USA hat, erfolgt ein Datentransfer in ein Drittland. Um ein angemessenes Datenschutzniveau zu garantieren, habe ich mit dem Anbieter EU-Standardvertragsklauseln (SCCs) abgeschlossen. Eine entsprechende Risikoabwägung (Transfer Impact Assessment) wurde durchgeführt.", en: "Third-country transfer (USA): As Chatbase is based in the USA, data is transferred to a third country. To guarantee an adequate level of data protection, I have concluded EU Standard Contractual Clauses (SCCs) with the provider. A corresponding risk assessment (Transfer Impact Assessment) has been carried out." },
  "privacy.s7.p6": { de: "Speicherdauer: Deine Daten werden nur so lange gespeichert, wie es für die Bearbeitung deiner Anfrage erforderlich ist oder bis du deine Einwilligung widerrufst.", en: "Retention period: Your data is only stored for as long as is necessary to process your request or until you withdraw your consent." },
  "privacy.s8.heading": { de: "8. Kostenloses E-Book & E-Mail-Kurs (MailerLite)", en: "8. Free E-Book & Email Course (MailerLite)" },
  "privacy.s8.p1": { de: "Das kostenlose E-Book „Der Weg zum Ganzsein\" wird direkt im Browser über einen öffentlichen Download-Link bereitgestellt – du kannst es ohne Eingabe persönlicher Daten herunterladen. Es findet bei Aufruf des Links keine Speicherung deines Namens oder deiner E-Mail-Adresse statt; es werden lediglich die unter Ziffer 4 beschriebenen technischen Server-Logfiles (z. B. IP-Adresse) verarbeitet.", en: "The free e-book \"Der Weg zum Ganzsein\" is provided directly in the browser via a public download link – you can download it without entering any personal data. When you open the link, your name and email address are not stored; only the technical server log files described in section 4 (e.g. IP address) are processed." },
  "privacy.s8.p2": { de: "Anmeldung zum kostenlosen E-Mail-Kurs (optional, Double-Opt-In): Wenn du dich aktiv für meinen kostenlosen E-Mail-Kurs anmeldest, übermittle ich deinen Namen und deine E-Mail-Adresse an meinen E-Mail-Dienstleister MailerLite (MailerLite Limited, Ground Floor, 71 Lower Baggot Street, Dublin 2, D02 P593, Irland). MailerLite sendet dir zunächst eine Bestätigungsmail; erst nach deinem Klick auf den Bestätigungslink erhältst du die einzelnen Kurs-E-Mails (Double-Opt-In). Der E-Mail-Kurs umfasst eine festgelegte Anzahl an Lektionen rund um Coaching und Familienaufstellungen und endet danach automatisch – es handelt sich ausdrücklich nicht um einen fortlaufenden Newsletter. Du kannst dich jederzeit über den Abmelde-Link in jeder E-Mail oder per Nachricht an jona@fels-coach.de abmelden; in diesem Fall werden deine Daten bei MailerLite gelöscht.", en: "Signup for the free email course (optional, double opt-in): If you actively sign up for my free email course, I transmit your name and email address to my email service provider MailerLite (MailerLite Limited, Ground Floor, 71 Lower Baggot Street, Dublin 2, D02 P593, Ireland). MailerLite first sends you a confirmation email; only after you click the confirmation link will you receive the individual course emails (double opt-in). The email course consists of a defined number of lessons around coaching and family constellations and ends automatically afterwards – it is explicitly not an ongoing newsletter. You can unsubscribe at any time via the unsubscribe link in every email or by sending a message to jona@fels-coach.de; in that case your data will be deleted at MailerLite." },
  "privacy.s8.p3": { de: "MailerLite verarbeitet die Daten innerhalb der EU (Irland). Mit MailerLite besteht ein Auftragsverarbeitungsvertrag (AVV). Zusätzlich werden Anmeldezeitpunkt und IP-Adresse gespeichert, um die Einwilligung im Sinne der DSGVO nachweisen zu können. Nach Abschluss des E-Mail-Kurses bzw. nach deiner Abmeldung werden die personenbezogenen Daten bei MailerLite gelöscht; Nachweisdaten zur Einwilligung werden bis zum Ablauf möglicher gesetzlicher Verjährungsfristen aufbewahrt.", en: "MailerLite processes data within the EU (Ireland). A data processing agreement (DPA) is in place with MailerLite. The time of subscription and the IP address are also stored in order to document your consent in accordance with the GDPR. After the email course is completed or after you unsubscribe, your personal data at MailerLite will be deleted; consent records are retained until any statutory limitation periods expire." },
  "privacy.s8.p4": { de: "Rechtsgrundlage: Für den Abruf des E-Books über den öffentlichen Download-Link: berechtigtes Interesse an der Bereitstellung der Inhalte (Art. 6 Abs. 1 lit. f DSGVO). Für den E-Mail-Kurs: deine ausdrückliche Einwilligung (Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 7 Abs. 2 UWG).", en: "Legal basis: For accessing the e-book via the public download link: legitimate interest in providing the content (Art. 6(1)(f) GDPR). For the email course: your explicit consent (Art. 6(1)(a) GDPR in conjunction with § 7(2) UWG)." },
  "privacy.s9.heading": { de: "9. Terminbuchung und Anamnese (Orbnet)", en: "9. Appointment Booking and Medical History (Orbnet)" },
  "privacy.s9.p1": { de: "Für die einfache Online-Terminbuchung nutze ich den deutschen Anbieter orbnet GmbH. Wenn du einen Termin buchst, werden deine angegebenen Kontaktdaten an Orbnet übermittelt.", en: "For convenient online appointment booking, I use the German provider orbnet GmbH. When you book an appointment, your contact details are transmitted to Orbnet." },
  "privacy.s9.p2": { de: "Wenn du bei der Terminbuchung im Formular vorab Anamnesefragen beantwortest, die deine psychische oder physische Gesundheit betreffen, handelt es sich um besonders schützenswerte Daten. Diese verarbeite ich streng vertraulich und ausschließlich zur optimalen Vorbereitung auf unser Coaching.", en: "If you answer preliminary medical history questions in the booking form that relate to your mental or physical health, these constitute particularly sensitive data. I process this data strictly confidentially and exclusively for optimal preparation for our coaching." },
  "privacy.s9.p3": { de: "Rechtsgrundlage: Für die Buchung: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Für die Anamnesedaten: Deine ausdrückliche Einwilligung (Art. 9 Abs. 2 lit. a DSGVO), die du bei der Eingabe der Daten erteilst.", en: "Legal basis: For booking: Contract performance (Art. 6(1)(b) GDPR). For medical history data: Your explicit consent (Art. 9(2)(a) GDPR), which you provide when entering the data." },
  "privacy.s10.heading": { de: "10. Buchhaltung und Finanzen (Lexoffice)", en: "10. Accounting and Finances (Lexoffice)" },
  "privacy.s10.p1": { de: "Um meine steuerlichen und buchhalterischen Pflichten zu erfüllen, nutze ich die Software lexoffice (Haufe-Lexware GmbH & Co. KG, Deutschland). Wenn es zu einer kostenpflichtigen Coaching-Zusammenarbeit kommt, werden deine rechnungsrelevanten Daten (Name, Adresse, Betrag) dort verarbeitet und entsprechend der gesetzlichen Aufbewahrungsfristen (in der Regel 10 Jahre) gespeichert.", en: "To fulfil my tax and accounting obligations, I use the software lexoffice (Haufe-Lexware GmbH & Co. KG, Germany). If a paid coaching collaboration occurs, your invoice-relevant data (name, address, amount) will be processed there and stored in accordance with legal retention periods (usually 10 years)." },
  "privacy.s10.p2": { de: "Rechtsgrundlage: Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO).", en: "Legal basis: Fulfilment of legal obligations (Art. 6(1)(c) GDPR)." },
  "privacy.s11.heading": { de: "11. Datenübermittlung in Drittländer (USA)", en: "11. Data Transfer to Third Countries (USA)" },
  "privacy.s11.text": { de: "Einige der von mir eingesetzten Dienstleister haben ihren Hauptsitz in den USA (z.\u00a0B. Google, GitHub, Cloudflare, Resend, Chatbase). Wenn Daten in die USA übertragen werden, stütze ich mich auf den Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework) für zertifizierte Unternehmen. Sollte ein Unternehmen nicht zertifiziert sein, nutze ich hilfsweise EU-Standardvertragsklauseln (SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO, um ein Datenschutzniveau zu gewährleisten, das dem europäischen Standard entspricht.", en: "Some of the service providers I use are headquartered in the USA (e.g. Google, GitHub, Cloudflare, Resend, Chatbase). When data is transferred to the USA, I rely on the EU Commission's adequacy decision (EU-US Data Privacy Framework) for certified companies. If a company is not certified, I use EU Standard Contractual Clauses (SCC) pursuant to Art. 46(2)(c) GDPR to ensure a level of data protection that corresponds to European standards." },
  "privacy.s12.heading": { de: "12. Systemischer Rollen-Check", en: "12. Systemic Role Check" },
  "privacy.s12.text": { de: "Auf unserer Webseite bieten wir einen interaktiven systemischen Rollen-Check an. Wenn du diesen Test nutzt, werden deine Antworten, die daraus resultierenden Auswertungsergebnisse sowie der von dir gewählte Lebensbereich in einer Datenbank gespeichert. Diese Speicherung dient der Bereitstellung der unmittelbaren Auswertung und der statistischen Optimierung meiner Coaching-Angebote. Die Daten werden ausschließlich für systemische Auswertungszwecke verwendet. Zur Speicherung und Verarbeitung der Ergebnisse nutzen wir den Datenbank-Dienst Supabase (Supabase Inc., USA). Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag (AVV), der die Einhaltung europäischer Datenschutzstandards garantiert. Eine Identifizierung deiner Person durch diese Daten findet nicht statt, sofern du am Ende des Tests keine freiwilligen Kontaktdaten angibst. Rechtsgrundlage: Berechtigtes Interesse an der Bereitstellung interaktiver Coaching-Tools (Art. 6 Abs. 1 lit. f DSGVO).", en: "On our website, we offer an interactive systemic role check. When you use this test, your answers, the resulting evaluation results, and your chosen life area are stored in a database. This storage serves to provide the immediate evaluation and to statistically optimize my coaching offerings. The data is used exclusively for systemic evaluation purposes. For storage and processing of the results, we use the database service Supabase (Supabase Inc., USA). A data processing agreement (DPA) is in place with the provider, guaranteeing compliance with European data protection standards. Your person cannot be identified from this data, provided you do not voluntarily provide contact details at the end of the test. Legal basis: Legitimate interest in providing interactive coaching tools (Art. 6(1)(f) GDPR)." },
};
