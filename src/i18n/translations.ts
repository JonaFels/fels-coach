export type Language = "de" | "en" | "fr";

export type Translations = {
  [key: string]: {
    de: string;
    en: string;
    fr: string;
  };
};

export const translations: Translations = {
  // Navigation
  "nav.coaching": {
    de: "Coaching",
    en: "Coaching",
    fr: "Coaching",
  },
  "nav.familienaufstellung": {
    de: "Familienaufstellung",
    en: "Family Constellation",
    fr: "Constellation Familiale",
  },
  "nav.ebook": {
    de: "E-Book",
    en: "E-Book",
    fr: "E-Book",
  },
  "nav.kontakt": {
    de: "Kontakt",
    en: "Contact",
    fr: "Contact",
  },
  "nav.ueber": {
    de: "Über mich",
    en: "About me",
    fr: "À propos",
  },
  "nav.termin": {
    de: "Termin ausmachen",
    en: "Book Appointment",
    fr: "Prendre RDV",
  },
  "nav.angebote": {
    de: "Angebote",
    en: "Offers",
    fr: "Offres",
  },
  "nav.blog": {
    de: "Blog",
    en: "Blog",
    fr: "Blog",
  },

  // Blog
  "blog.title": {
    de: "Blog",
    en: "Blog",
    fr: "Blog",
  },
  "blog.backToList": {
    de: "Zurück zur Übersicht",
    en: "Back to overview",
    fr: "Retour à l'aperçu",
  },

  // Hero Section
  "hero.title": {
    de: "Systemische Familienaufstellungen",
    en: "Systemic Family Constellations",
    fr: "Constellations Familiales Systémiques",
  },
  "hero.subtitle": {
    de: "Entdecke die verborgenen Dynamiken deiner Familie und finde deinen Weg zu innerem Frieden",
    en: "Discover the hidden dynamics of your family and find your path to inner peace",
    fr: "Découvrez les dynamiques cachées de votre famille et trouvez votre chemin vers la paix intérieure",
  },
  "hero.cta": {
    de: "Jetzt Termin buchen",
    en: "Book Now",
    fr: "Réserver maintenant",
  },

  // Coaching Description (Homepage)
  "coaching.title": {
    de: "Systemisches 1:1 Coaching",
    en: "Systemic 1:1 Coaching",
    fr: "Coaching Systémique 1:1",
  },
  "coaching.intro": {
    de: "Individuelle Begleitung für Deine Transformation",
    en: "Individual guidance for your transformation",
    fr: "Accompagnement individuel pour votre transformation",
  },
  "coaching.text1": {
    de: "Ich biete 1:1 Coachings mit einem systemischen Ansatz an, um die Wurzeln von Blockaden zu finden und festgefahrene Energie wieder in Fluss zu bringen. Gemeinsam nutzen wir die transformative Kraft von Familienaufstellungen, um dich weiter zu bringen, wo du weiter gehen möchtest.",
    en: "I offer 1:1 coaching with a systemic approach to find the roots of blockages and get stagnant energy flowing again. Together we use the transformative power of family constellations to take you further where you want to go.",
    fr: "Je propose des coachings 1:1 avec une approche systémique pour trouver les racines des blocages et remettre en mouvement l'énergie stagnante. Ensemble, nous utilisons le pouvoir transformateur des constellations familiales pour vous amener plus loin là où vous souhaitez aller.",
  },
  "coaching.text2": {
    de: "Wenn du bereit bist innezuhalten und einen Veränderungsprozess zu starten, begleite ich dich dabei, deine inneren Ressourcen zu stärken und Klarheit für die nächsten Schritte zu finden.",
    en: "If you are ready to pause and start a process of change, I will accompany you in strengthening your inner resources and finding clarity for the next steps.",
    fr: "Si vous êtes prêt à faire une pause et à entamer un processus de changement, je vous accompagne pour renforcer vos ressources intérieures et trouver de la clarté pour les prochaines étapes.",
  },
  "coaching.details.title": {
    de: "Termin-Details",
    en: "Session Details",
    fr: "Détails de la séance",
  },
  "coaching.detail1": {
    de: "60 min pro Termin",
    en: "60 min per session",
    fr: "60 min par séance",
  },
  "coaching.detail2": {
    de: "Tiefgehende Selbsterkenntnis und Auflösung alter Muster",
    en: "Deep self-awareness and dissolution of old patterns",
    fr: "Conscience de soi profonde et dissolution des anciens schémas",
  },
  "coaching.detail3": {
    de: "Lösung tiefgreifender Konflikte",
    en: "Resolution of deep-rooted conflicts",
    fr: "Résolution des conflits profonds",
  },
  "coaching.learnMore": {
    de: "Mehr über Familienaufstellungen erfahren",
    en: "Learn more about Family Constellations",
    fr: "En savoir plus sur les Constellations Familiales",
  },

  // Offerings Section
  "offerings.title": {
    de: "Buchungsoptionen",
    en: "Booking Options",
    fr: "Options de réservation",
  },
  "offerings.kennenlernen.title": {
    de: "Kennenlernen Coaching",
    en: "Introduction Coaching",
    fr: "Coaching Découverte",
  },
  "offerings.kennenlernen.desc": {
    de: "Diese erste Sitzung ist eine vollwertige Einheit. Wir steigen direkt in dein Anliegen ein, wobei die Gestaltung offen ist und sich nach deinem individuellen Tempo und Bedarf richtet.",
    en: "This first session is a complete unit. We dive directly into your concern, with the design being open and tailored to your individual pace and needs.",
    fr: "Cette première séance est une unité complète. Nous plongeons directement dans votre préoccupation, avec une conception ouverte et adaptée à votre rythme et à vos besoins individuels.",
  },
  "offerings.coaching.title": {
    de: "Systemisches Coaching",
    en: "Systemic Coaching",
    fr: "Coaching Systémique",
  },
  "offerings.coaching.desc": {
    de: "Die tiefgreifende Arbeit beginnt: Wir fokussieren uns auf konkrete Herausforderungen, lösen Muster und erarbeiten systemische Lösungen für deine nachhaltige Veränderung.",
    en: "The profound work begins: We focus on specific challenges, dissolve patterns, and develop systemic solutions for your lasting transformation.",
    fr: "Le travail profond commence : Nous nous concentrons sur des défis concrets, dissolvons les schémas et développons des solutions systémiques pour votre transformation durable.",
  },
  "offerings.paket5.title": {
    de: "5er-Paket",
    en: "5-Session Package",
    fr: "Forfait 5 séances",
  },
  "offerings.paket5.desc": {
    de: "Fünf Sitzungen, ideal für einen intensiven Prozess: Erziele konkrete, messbare Fortschritte und festige neue Verhaltens- und Denkmuster.",
    en: "Five sessions, ideal for an intensive process: Achieve concrete, measurable progress and consolidate new behavioral and thought patterns.",
    fr: "Cinq séances, idéales pour un processus intensif : Atteignez des progrès concrets et mesurables et consolidez de nouveaux schémas comportementaux et de pensée.",
  },
  "offerings.paket10.title": {
    de: "10er-Paket",
    en: "10-Session Package",
    fr: "Forfait 10 séances",
  },
  "offerings.paket10.desc": {
    de: "Zehn Sitzungen für eine umfassende Transformation: Begleite größere persönliche Entwicklungsprozesse und erreiche tiefgreifende, dauerhafte Klarheit.",
    en: "Ten sessions for comprehensive transformation: Accompany larger personal development processes and achieve profound, lasting clarity.",
    fr: "Dix séances pour une transformation complète : Accompagnez des processus de développement personnel plus importants et atteignez une clarté profonde et durable.",
  },
  "offerings.book": {
    de: "Termin buchen",
    en: "Book Session",
    fr: "Réserver",
  },
  "offerings.allDates": {
    de: "Alle verfügbaren Termine ansehen",
    en: "View all available dates",
    fr: "Voir toutes les dates disponibles",
  },
  "offerings.duration": {
    de: "Dauer",
    en: "Duration",
    fr: "Durée",
  },
  "offerings.minutes": {
    de: "Minuten",
    en: "minutes",
    fr: "minutes",
  },
  "offerings.popular": {
    de: "Beliebt",
    en: "Popular",
    fr: "Populaire",
  },
  "offerings.onlinePayment": {
    de: "Nur online bezahlbar.",
    en: "Online payment only.",
    fr: "Paiement en ligne uniquement.",
  },
  "offerings.oldPrice": {
    de: "statt",
    en: "instead of",
    fr: "au lieu de",
  },
  "offerings.paketEinloesen.title": {
    de: "Paket einlösen",
    en: "Redeem Package",
    fr: "Utiliser le forfait",
  },
  "offerings.paketEinloesen.desc": {
    de: "Du hast bereits ein 5er oder 10er Paket erworben? Dann wähle hier deinen nächsten Termin aus.",
    en: "Already purchased a 5 or 10 session package? Choose your next appointment here.",
    fr: "Vous avez déjà acheté un forfait 5 ou 10 séances ? Choisissez votre prochain rendez-vous ici.",
  },

  // Cookie Banner
  "cookie.title": {
    de: "Cookie-Einstellungen",
    en: "Cookie Settings",
    fr: "Paramètres des cookies",
  },
  "cookie.text": {
    de: "Wir nutzen Cookies, um deine Erfahrung zu verbessern.",
    en: "We use cookies to improve your experience.",
    fr: "Nous utilisons des cookies pour améliorer votre expérience.",
  },
  "cookie.accept": {
    de: "Alle annehmen",
    en: "Accept All",
    fr: "Tout accepter",
  },
  "cookie.reject": {
    de: "Ablehnen",
    en: "Reject",
    fr: "Refuser",
  },
  "cookie.settings": {
    de: "Einstellungen",
    en: "Settings",
    fr: "Paramètres",
  },
  "cookie.necessary": {
    de: "Notwendige Cookies",
    en: "Necessary Cookies",
    fr: "Cookies nécessaires",
  },
  "cookie.necessary.desc": {
    de: "Erforderlich für die Grundfunktion der Website.",
    en: "Required for basic website functionality.",
    fr: "Nécessaires au fonctionnement de base du site.",
  },
  "cookie.analytics": {
    de: "Google Analytics",
    en: "Google Analytics",
    fr: "Google Analytics",
  },
  "cookie.analytics.desc": {
    de: "Hilft uns, das Nutzererlebnis zu verbessern.",
    en: "Helps us understand how visitors use the website.",
    fr: "Nous aide à comprendre comment les visiteurs utilisent le site.",
  },
  "cookie.save": {
    de: "Auswahl speichern",
    en: "Save Settings",
    fr: "Enregistrer",
  },

  // Footer
  "footer.rights": {
    de: "Alle Rechte vorbehalten",
    en: "All rights reserved",
    fr: "Tous droits réservés",
  },
  "footer.privacy": {
    de: "Datenschutz",
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
  },
  "footer.imprint": {
    de: "Impressum",
    en: "Imprint",
    fr: "Mentions légales",
  },
  "footer.terms": {
    de: "AGB",
    en: "Terms",
    fr: "CGV",
  },

  // Familienaufstellung Page
  "family.title": {
    de: "Familienaufstellung",
    en: "Family Constellation",
    fr: "Constellation Familiale",
  },
  "family.intro.title": {
    de: "Was ist eine Familienaufstellung?",
    en: "What is a Family Constellation?",
    fr: "Qu'est-ce qu'une constellation familiale ?",
  },
  "family.intro.text": {
    de: "Familienaufstellung ist eine kraftvolle Methode des systemischen Coachings, um unbewusste Dynamiken und Verstrickungen innerhalb Deines Familiensystems aufzudecken. Oftmals tragen wir Lasten oder Muster unserer Vorfahren in uns, die uns in unserem aktuellen Leben blockieren, ohne dass wir uns dessen bewusst sind. Eine Aufstellung kann diese tief verwurzelten Ursachen sichtbar machen und den Weg für Heilung und Veränderung ebnen.",
    en: "Family constellation is a powerful method of systemic coaching to uncover unconscious dynamics and entanglements within your family system. Often we carry burdens or patterns of our ancestors within us that block us in our current life without being aware of it. A constellation can make these deep-rooted causes visible and pave the way for healing and change.",
    fr: "La constellation familiale est une méthode puissante de coaching systémique pour découvrir les dynamiques inconscientes et les enchevêtrements au sein de votre système familial. Souvent, nous portons en nous des fardeaux ou des schémas de nos ancêtres qui nous bloquent dans notre vie actuelle sans en être conscients. Une constellation peut rendre ces causes profondément enracinées visibles et ouvrir la voie à la guérison et au changement.",
  },
  "family.benefits.title": {
    de: "Welchen Nutzen bringt eine Aufstellung?",
    en: "What are the benefits of a constellation?",
    fr: "Quels sont les avantages d'une constellation ?",
  },
  "family.benefit1": {
    de: "Verstrickungen zu lösen und neue Perspektiven zu gewinnen.",
    en: "Dissolve entanglements and gain new perspectives.",
    fr: "Dissoudre les enchevêtrements et gagner de nouvelles perspectives.",
  },
  "family.benefit2": {
    de: "Beziehungen zu Angehörigen zu klären und zu heilen.",
    en: "Clarify and heal relationships with family members.",
    fr: "Clarifier et guérir les relations avec les membres de la famille.",
  },
  "family.benefit3": {
    de: "Mehr innere Freiheit, Zufriedenheit und Lebensenergie zu gewinnen.",
    en: "Gain more inner freedom, satisfaction and life energy.",
    fr: "Gagner plus de liberté intérieure, de satisfaction et d'énergie vitale.",
  },
  "family.benefit4": {
    de: "Blockaden aufzulösen und neue Wege zu beschreiten.",
    en: "Dissolve blockages and embark on new paths.",
    fr: "Dissoudre les blocages et emprunter de nouveaux chemins.",
  },
  "family.process.title": {
    de: "Der Ablauf einer Einzelaufstellung mit Bodenankern",
    en: "The process of an individual constellation with floor anchors",
    fr: "Le processus d'une constellation individuelle avec des ancres au sol",
  },
  "family.process.intro": {
    de: "In der Einzelarbeit nutzen wir Bodenanker, die für Familienmitglieder, relevante Personen oder innere Aspekte Deines Themen stehen. Diese Anker werden auf dem Boden platziert und repräsentieren die räumliche und energetische Beziehung im System.",
    en: "In individual work, we use floor anchors that represent family members, relevant persons or inner aspects of your topic. These anchors are placed on the floor and represent the spatial and energetic relationship in the system.",
    fr: "Dans le travail individuel, nous utilisons des ancres au sol qui représentent les membres de la famille, les personnes pertinentes ou les aspects intérieurs de votre sujet. Ces ancres sont placées au sol et représentent la relation spatiale et énergétique dans le système.",
  },
  "family.step1.title": {
    de: "1. Vorgespräch & Anliegen klären",
    en: "1. Preliminary talk & clarify concerns",
    fr: "1. Entretien préliminaire & clarification des préoccupations",
  },
  "family.step1.text": {
    de: "Wir nehmen uns Zeit, Dein spezifisches Anliegen und das Ziel der Aufstellung genau zu besprechen.",
    en: "We take time to discuss your specific concern and the goal of the constellation in detail.",
    fr: "Nous prenons le temps de discuter en détail de votre préoccupation spécifique et de l'objectif de la constellation.",
  },
  "family.step2.title": {
    de: "2. Aufstellung mit Bodenankern",
    en: "2. Constellation with floor anchors",
    fr: "2. Constellation avec des ancres au sol",
  },
  "family.step2.text": {
    de: "Du wählst intuitiv Bodenanker aus und platzierst diese im Raum, um die Beziehungen Deines Systems darzustellen.",
    en: "You intuitively select floor anchors and place them in the room to represent the relationships of your system.",
    fr: "Vous sélectionnez intuitivement des ancres au sol et les placez dans la pièce pour représenter les relations de votre système.",
  },
  "family.step3.title": {
    de: "3. Lösungsfindung & Abschluss",
    en: "3. Finding solutions & conclusion",
    fr: "3. Recherche de solutions & conclusion",
  },
  "family.step3.text": {
    de: "Durch das Bewegen der Anker und das Erspüren der neuen Ordnungen entwickeln wir ein stimmiges Lösungsbild.",
    en: "By moving the anchors and sensing the new orders, we develop a coherent solution image.",
    fr: "En déplaçant les ancres et en ressentant les nouveaux ordres, nous développons une image de solution cohérente.",
  },

  // E-Book Page
  "ebook.title": {
    de: "E-Book",
    en: "E-Book",
    fr: "E-Book",
  },
  "ebook.subtitle": {
    de: "Der Weg zum Ganz-Sein - zum kostenlosen Download",
    en: "The Path to Wholeness - Free Download",
    fr: "Le chemin vers la plénitude - Téléchargement gratuit",
  },
  "ebook.intro": {
    de: "Lade Dein kostenloses E-Book herunter und starte Deine Transformation. Wenn Du Dir auf diesem Weg persönliche Begleitung wünschst, findest Du alle Informationen hier.",
    en: "Download your free e-book and start your transformation. If you would like personal support on this journey, you can find all information here.",
    fr: "Téléchargez votre e-book gratuit et commencez votre transformation. Si vous souhaitez un accompagnement personnel sur ce chemin, vous trouverez toutes les informations ici.",
  },
  "ebook.name": {
    de: "Name",
    en: "Name",
    fr: "Nom",
  },
  "ebook.email": {
    de: "E-Mail-Adresse",
    en: "Email Address",
    fr: "Adresse e-mail",
  },
  "ebook.privacyNote": {
    de: "Die Datenschutzerklärung findest du",
    en: "You can find the privacy policy",
    fr: "Vous trouverez la politique de confidentialité",
  },
  "ebook.here": {
    de: "hier",
    en: "here",
    fr: "ici",
  },
  "ebook.download": {
    de: "E-Book herunterladen",
    en: "Download E-Book",
    fr: "Télécharger l'E-Book",
  },
  "ebook.infoTitle": {
    de: "In diesem E-Book zeige ich dir:",
    en: "In this e-book I show you:",
    fr: "Dans cet e-book, je vous montre :",
  },
  "ebook.feature1": {
    de: "Wie du das Skript deines Lebens neu schreibst.",
    en: "How to rewrite the script of your life.",
    fr: "Comment réécrire le scénario de votre vie.",
  },
  "ebook.feature2": {
    de: "Warum deine größten Schätze oft tief vergraben sind.",
    en: "Why your greatest treasures are often deeply buried.",
    fr: "Pourquoi vos plus grands trésors sont souvent profondément enfouis.",
  },
  "ebook.feature3": {
    de: "Wie du unbewusste Muster durchbrichst.",
    en: "How to break through unconscious patterns.",
    fr: "Comment briser les schémas inconscients.",
  },
  "ebook.success": {
    de: "Vielen Dank! Das E-Book wurde per E-Mail an dich gesendet. Bitte überprüfe auch deinen Spam-Ordner.",
    en: "Thank you! The e-book has been sent to your email. Please also check your spam folder.",
    fr: "Merci ! L'e-book a été envoyé à votre adresse e-mail. Veuillez également vérifier votre dossier spam.",
  },

  // Kontakt Page
  "contact.title": {
    de: "Kontakt",
    en: "Contact",
    fr: "Contact",
  },
  "contact.text": {
    de: "Hast du Fragen oder möchtest ein kostenloses, telefonisches Erstgespräch ausmachen? Dann kannst du mich per Email, WhatsApp oder Telegram erreichen. Ich freue mich auf Deine Nachricht!",
    en: "Do you have questions or would you like to arrange a free initial phone consultation? You can reach me via email, WhatsApp or Telegram. I look forward to your message!",
    fr: "Avez-vous des questions ou souhaitez-vous organiser une première consultation téléphonique gratuite ? Vous pouvez me joindre par e-mail, WhatsApp ou Telegram. J'attends votre message avec impatience !",
  },

  // Über mich Page
  "about.title": {
    de: "Über mich",
    en: "About me",
    fr: "À propos de moi",
  },
  "about.subtitle": {
    de: "Ich führe dich in die Tiefe.",
    en: "I guide you into the depths.",
    fr: "Je vous guide dans les profondeurs.",
  },
  "about.intro1": {
    de: "Fühlst du Dich manchmal, als würdest Du eine Last tragen, die nicht Dir gehört? Kämpfst Du mit dem tiefsitzenden Gefühl, dass unbewusste Erwartungen Dein Leben beeinflussen oder Du Dich nicht vollständig von den Mustern, die dich immer in deinem Leben begleiten, lösen kannst?",
    en: "Do you sometimes feel like you are carrying a burden that does not belong to you? Are you struggling with the deep-seated feeling that unconscious expectations are influencing your life or that you cannot fully detach from the patterns that always accompany you in life?",
    fr: "Avez-vous parfois l'impression de porter un fardeau qui ne vous appartient pas ? Luttez-vous avec le sentiment profond que des attentes inconscientes influencent votre vie ou que vous ne pouvez pas vous détacher complètement des schémas qui vous accompagnent toujours dans la vie ?",
  },
  "about.intro2": {
    de: 'Genau diese übernommenen Strukturen sind es, die uns oft daran hindern, unser eigenes Sein vollständig zu leben – selbst dort, wo wir bereits Erfolge erreicht haben. Mein eigener Weg der Tiefenarbeit und des Familienstellen war der "Komplett-Check", um diese fremden Muster zu erkennen und abzulösen.',
    en: 'It is precisely these inherited structures that often prevent us from fully living our own being - even where we have already achieved success. My own path of deep work and family constellation was the "complete check" to recognize and detach from these foreign patterns.',
    fr: "Ce sont précisément ces structures héritées qui nous empêchent souvent de vivre pleinement notre propre être - même là où nous avons déjà obtenu du succès. Mon propre chemin de travail en profondeur et de constellation familiale a été le « contrôle complet » pour reconnaître et me détacher de ces schémas étrangers.",
  },
  "about.guidance.title": {
    de: "Deine Begleitung in die Tiefe – Präzision und Mitgefühl",
    en: "Your guidance into the depths – Precision and Compassion",
    fr: "Votre accompagnement dans les profondeurs – Précision et Compassion",
  },
  "about.guidance1": {
    de: "Meine Arbeit ist präzise und zutiefst mitfühlend, aber immer zielorientiert.",
    en: "My work is precise and deeply compassionate, but always goal-oriented.",
    fr: "Mon travail est précis et profondément compatissant, mais toujours orienté vers un objectif.",
  },
  "about.guidance2": {
    de: "Ich bringe eine geschulte Wahrnehmung mit, um die unsichtbaren Fäden und Verstrickungen in Deinem System aufzuspüren. Ich erkenne die tiefsten Wunden und begleite Dich achtsam dorthin, wo die Ursache beleuchtet werden muss, damit Deine Entscheidungen wieder ganz von Dir bestimmt werden. Mein tiefstes Mitgefühl ist dabei Deine sichere Basis.",
    en: "I bring a trained perception to track down the invisible threads and entanglements in your system. I recognize the deepest wounds and accompany you mindfully to where the cause needs to be illuminated, so that your decisions are again completely determined by you. My deepest compassion is your safe foundation.",
    fr: "J'apporte une perception entraînée pour traquer les fils invisibles et les enchevêtrements dans votre système. Je reconnais les blessures les plus profondes et vous accompagne avec attention là où la cause doit être éclairée, afin que vos décisions soient à nouveau entièrement déterminées par vous. Ma compassion la plus profonde est votre fondation sûre.",
  },
  "about.guidance3": {
    de: "Wir arbeiten schnell und klar strukturiert, um Dein Ziel zu erreichen: Klarheit und die eigene Lebensrichtung zu finden, indem Du Dich von übernommenen Mustern abgrenzt und zu Deinem wahrhaftigen, eigenen Ja findest.",
    en: "We work quickly and clearly structured to achieve your goal: Finding clarity and your own direction in life by distancing yourself from inherited patterns and finding your true, own yes.",
    fr: "Nous travaillons rapidement et de manière clairement structurée pour atteindre votre objectif : Trouver la clarté et votre propre direction de vie en vous distanciant des schémas hérités et en trouvant votre vrai oui personnel.",
  },
  "about.core.title": {
    de: "Dein unversehrter Kern wird sichtbar",
    en: "Your intact core becomes visible",
    fr: "Votre noyau intact devient visible",
  },
  "about.core1": {
    de: "Meine langjährige Meditationserfahrung bildet das Fundament unserer Arbeit. Sie ermöglicht uns die tiefe Ruhe während der Session, die essenziell ist, um dein Systems klar sehen zu können und Deinen unversehrten Kern freizulegen.",
    en: "My many years of meditation experience forms the foundation of our work. It enables us to achieve the deep calm during the session that is essential to clearly see your system and uncover your intact core.",
    fr: "Mes nombreuses années d'expérience de méditation forment le fondement de notre travail. Elles nous permettent d'atteindre le calme profond pendant la séance qui est essentiel pour voir clairement votre système et découvrir votre noyau intact.",
  },
  "about.core2": {
    de: "Ich bin zutiefst davon überzeugt: In Dir ist ein Kern unversehrter Kraft – rein und unerschütterlich. Und ich weiß, dass wir jeden Umstand in eine heilsame Erfahrung umwandeln können. Wir in der Lage sind unser Leben Schritt für Schritt wahrhaftiger selbst zu gestalten.",
    en: "I am deeply convinced: Within you is a core of intact power - pure and unshakeable. And I know that we can transform every circumstance into a healing experience. We are able to shape our lives step by step more authentically.",
    fr: "Je suis profondément convaincu : En vous se trouve un noyau de pouvoir intact - pur et inébranlable. Et je sais que nous pouvons transformer chaque circonstance en une expérience de guérison. Nous sommes capables de façonner notre vie pas à pas de manière plus authentique.",
  },
  "about.cv.title": {
    de: "Lebenslauf",
    en: "Resume",
    fr: "Curriculum Vitae",
  },
  "about.cv1": {
    de: "Seit April 2024 | Ausbildung zum Familiensteller: Ausbildung im Bereich Familienaufstellungen.",
    en: "Since April 2024 | Family Constellation Training: Training in family constellations.",
    fr: "Depuis avril 2024 | Formation en constellations familiales : Formation dans le domaine des constellations familiales.",
  },
  "about.cv2": {
    de: "2022 - 2023 | Allgemeiner Heilpraktiker: Studium an der Paracelsus Heilpraktikerschule Freiburg im Breisgau.",
    en: "2022 - 2023 | General Naturopath: Studies at the Paracelsus Heilpraktikerschule Freiburg im Breisgau.",
    fr: "2022 - 2023 | Naturopathe général : Études à la Paracelsus Heilpraktikerschule Freiburg im Breisgau.",
  },
  "about.cv3": {
    de: "2016 - 2017 | Auslandsjahr: Auslandsjahr in Neuseeland.",
    en: "2016 - 2017 | Year abroad: Year abroad in New Zealand.",
    fr: "2016 - 2017 | Année à l'étranger : Année à l'étranger en Nouvelle-Zélande.",
  },

  // Legal Pages
  "privacy.title": {
    de: "Datenschutzerklärung",
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
  },
  "imprint.title": {
    de: "Impressum",
    en: "Imprint",
    fr: "Mentions légales",
  },
  "terms.title": {
    de: "Buchungs- und Stornierungsregeln",
    en: "Booking and Cancellation Terms",
    fr: "Conditions de réservation et d'annulation",
  },
};
