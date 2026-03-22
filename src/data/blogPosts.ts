import blogEinzelaufstellung from "@/assets/blog-einzelaufstellung.jpg";
import blogFamilienstellenGeschichte from "@/assets/blog-familienstellen-geschichte.jpg";

export interface BlogPost {
  id: string;
  slug: string;
  title: {
    de: string;
    en: string;
    fr: string;
  };
  excerpt: {
    de: string;
    en: string;
    fr: string;
  };
  content: {
    de: string;
    en: string;
    fr: string;
  };
  image?: string;
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "familienstellen-in-einer-einzelsitzung",
    title: {
      de: "Keine Gruppe nötig: Wie du Klarheit für dein Familiensystem im 1:1 Coaching findest",
      en: "No Group Needed: How to Find Clarity for Your Family System in 1:1 Coaching",
      fr: "Pas besoin de groupe : Comment trouver la clarté pour ton système familial en coaching individuel",
    },
    excerpt: {
      de: "Wie funktionieren Familienaufstellungen im 1:1 Format? Erfahre, welche Vorteile Bodenanker und der Perspektivwechsel in Einzelsitzungen bieten.",
      en: "How do family constellations work in a 1:1 format? Discover the benefits of floor anchors and perspective shifts in individual sessions.",
      fr: "Comment fonctionnent les constellations familiales en format individuel ? Découvrez les avantages des ancres au sol et du changement de perspective.",
    },
    content: {
      de: `## Familienstellen in einer Einzelsitzung

Viele kennen Familienaufstellungen von Aufstellungsabenden in Gruppenform. Aber wie geht es in einem Einzelformat, mit zwei Personen?

### Bodenanker als Stellvertreter

Es werden sogenannte **Bodenanker** verwendet, um die aufgestellten Personen darzustellen. Als Bodenanker können verschiedene Symbole genommen werden, z.B. ein Stück Papier mit dem Namen der Person drauf oder ein anderer gut repräsentierender Gegenstand.

Besonders gut sind **Filzmatten mit einem Pfeil** oder anderer Markierung für die Richtung, in die die Person oder das, was dort steht, hinschaut. Denn durch die Mattenform kann man sich genau auf das Feld stellen. So können beide – Coach oder Therapeut und Klient*in – die verschiedenen Plätze einnehmen und erleben.

### Vorteile gegenüber dem Gruppensetting

Im Gegensatz zum Aufstellen in Gruppen repräsentieren die Bodenanker die aufgestellten Personen im Raum und können von Coach und Klient*in jederzeit bezogen werden. Wodurch **mehr Möglichkeiten** als bei dem Aufstellen in Gruppen entstehen:

1. **Plätze einnehmen** – Klient*innen können Plätze von anderen Personen oder dem Ziel (gelebte Berufung, Traumhaus) einnehmen.
2. **Perspektivwechsel** – Auch der Coach kann sich gegenüber auf den Platz des Klienten stellen, wenn dieser dem zustimmt.
3. **Nachspüren** – Man kann jederzeit aus den Rollen herausgehen, Fragen beantworten oder nachspüren, wie es in der Rolle war.

### Worauf der Coach achten sollte

> Die neuen Möglichkeiten, die Rollen zu besetzen und zu erfahren, bringen dem Klienten Vorteile – auf der anderen Seite gibt es Variationen, die vom Coach vermieden werden sollten.

Gerade wenn es um **verletzte Anteile** geht und der Coach z.B. als Frau sich auf die Position der Mutter stellt und diese verletzend ist, kann es sein, dass der Coach von der Klientin – auch nach dem Herausgehen aus der Rolle – so wahrgenommen wird. Es gibt sehr wahrscheinlich einen inneren Anteil in dem Klienten, der zu einem Coaching bei einer Frau gegangen ist, weil er Unterstützung von seiner Mutter sucht. Genauso ist es natürlich auch, wenn der Coach ein Mann ist und in die Vaterrolle geht.

Der Coach hat bei Aufstellungen im 1:1 also noch ein bisschen mehr die Aufgabe, **in seiner Position in der Sitzung zu bleiben**.

### Fazit

Mit den Einzelaufstellungen lassen sich die **Dynamiken im Familiensystem** sehr detailliert aufzeigen und erleben lassen, um dann gelöst zu werden. Die Perspektiven können getauscht werden für mehr **Klarheit und Verständnis des Ganzen**.`,
      en: `## Family Constellations in an Individual Session

Many people know family constellations from group constellation evenings. But how does it work in an individual format, with just two people?

### Floor Anchors as Representatives

So-called **floor anchors** are used to represent the people in the constellation. Various symbols can be used as floor anchors, e.g. a piece of paper with the person's name on it or another well-representing object.

**Felt mats with an arrow** or other directional marking work particularly well, indicating the direction the person or what stands there is looking. Because of the mat shape, you can stand exactly on the field. This way, both coach or therapist and client can take and experience the different positions.

### Advantages Over Group Settings

Unlike constellations in groups, the floor anchors represent the people in the room and can be occupied by coach and client at any time. This creates **more possibilities** than group constellations:

1. **Taking positions** – Clients can take the positions of other people or the goal (lived vocation, dream house).
2. **Perspective shifts** – The coach can also stand on the client's position, if they agree.
3. **Sensing** – You can step out of roles at any time, answer questions, or sense how it felt in the role.

### What the Coach Should Be Aware Of

> The new possibilities of occupying and experiencing roles bring advantages to the client – on the other hand, there are variations that should be avoided by the coach.

Especially when it comes to **wounded parts** and the coach, for example as a woman, stands in the position of the mother who is hurtful, the client may perceive the coach that way even after stepping out of the role. There is very likely an inner part in the client that went to coaching with a woman because they are seeking support from their mother. The same applies when the coach is a man and steps into the father role.

The coach in 1:1 constellations therefore has an even greater task to **stay in their position within the session**.

### Conclusion

With individual constellations, the **dynamics in the family system** can be shown and experienced in great detail, in order to then be resolved. Perspectives can be exchanged for greater **clarity and understanding of the whole**.`,
      fr: `## Constellations familiales en séance individuelle

Beaucoup connaissent les constellations familiales des soirées de groupe. Mais comment cela fonctionne-t-il en format individuel, à deux personnes ?

### Les ancres au sol comme représentants

Des **ancres au sol** sont utilisées pour représenter les personnes dans la constellation. Divers symboles peuvent servir d'ancres, par exemple un morceau de papier avec le nom de la personne ou un autre objet représentatif.

Les **tapis en feutre avec une flèche** fonctionnent particulièrement bien, indiquant la direction dans laquelle la personne regarde. Grâce à la forme du tapis, on peut se placer exactement sur le champ. Ainsi, le coach et le client peuvent occuper et vivre les différentes positions.

### Avantages par rapport au format de groupe

Contrairement aux constellations en groupe, les ancres au sol représentent les personnes dans l'espace et peuvent être occupées à tout moment. Ce qui crée **plus de possibilités** :

1. **Prendre des positions** – Les clients peuvent occuper les places d'autres personnes ou de l'objectif.
2. **Changement de perspective** – Le coach peut également se placer à la position du client.
3. **Ressentir** – On peut sortir des rôles à tout moment pour répondre à des questions.

### Conclusion

Avec les constellations individuelles, les **dynamiques du système familial** peuvent être montrées et vécues en détail, pour ensuite être résolues.`,
    },
    image: blogEinzelaufstellung,
    publishedAt: "2026-03-11",
  },
  {
    id: "2",
    slug: "von-freud-bis-hellinger-woher-das-familienstellen-kommt",
    title: {
      de: "Von Freud bis Hellinger: Woher das Familienstellen wirklich kommt",
      en: "From Freud to Hellinger: Where Family Constellations Really Come From",
      fr: "De Freud à Hellinger : D'où viennent vraiment les constellations familiales",
    },
    excerpt: {
      de: "Vor allem ein Mann hat die Grundlage für das heutige Familienstellen gelegt. Bert Hellinger. Aber natürlich gehört diese therapeutische Methode in eine zeitliche Einordnung vieler gewachsener Theorien der psychologischen Welt.",
      en: "One man above all laid the foundation for today's family constellations: Bert Hellinger. But this therapeutic method belongs in a historical context of many evolving psychological theories.",
      fr: "Un homme en particulier a posé les bases des constellations familiales d'aujourd'hui : Bert Hellinger. Mais cette méthode thérapeutique s'inscrit dans un contexte historique de nombreuses théories psychologiques.",
    },
    content: {
      de: `## Von Freud bis Hellinger: Woher das Familienstellen wirklich kommt

Vor allem ein Mann hat die Grundlage für das heutige Familienstellen gelegt. **Bert Hellinger**. Aber natürlich gehört diese therapeutische Methode in eine zeitliche Einordnung vieler gewachsener Theorien der psychologischen Welt. Worum es zuerst gehen soll.

### Die drei Kräfte der Psychologie

Alle heute vorhandenen Therapien kommen quasi aus der Wende von geistiger Seelensorge und dem Beginn der modernen, damals nicht ernst genommenen, Psychologie mit der **Psychoanalyse**. Die um die Wende zu 1900 langsam beginnende Einsicht, das Unbewusste aufzunehmen in die wissenschaftlichen Theorien, führte zu vielen verschiedenen Strömungen bis heute. Es wurde unterteilt in drei Kräfte der Psychologie.

Zuerst die 1920 publik gewordene **Tiefenpsychologie nach Freud**. Darauf folgte die **Verhaltenspsychologie**, die durch die wissenschaftliche Anerkennung als Kassenleistung ab Mitte der 1960er Jahre bis heute angeboten wird. Und die dritte Kraft, die **humanistische Psychologie**, die ihre Hochzeit in den 1970ern bis zur Mitte der 1980er hatte.

### Bert Hellinger und die Familienaufstellung

**Bert Hellinger** (geb. Anton Hellinger 1925 in Leimen) hat die heute als Familienaufstellung bekannte Methode entwickelt, die heute ca. **50.000 aktive Familienaufsteller** in über **35 Ländern** (wie z.B. Brasilien, China, Deutschland, Mexiko und Russland) hervorgebracht hat.

1993 hatte er seinen großen Durchbruch mit seinem Buch **„Ordnung der Liebe"**. Und ungefähr zehn Jahre zuvor entwickelte er seine Methode. Faszinierenderweise durchlief er in seinem Leben quasi alle Schritte der psychologischen Entwicklung. Im Alter von 26 Jahren wurde er im Mariannhill Orden zum Priester geweiht, nachdem er Philosophie und Theologie studierte. Wurde danach als Missionar in eine Gemeinschaft in Südafrika entsandt und begann 16 Jahre später nach seiner Rückkehr seinen Weg, Therapeut zu werden mit einer **Psychoanalyse-Ausbildung in Wien**. Er reiste in die USA und machte in den folgenden sieben Jahren 4 Ausbildungen in dem Bereich der **Humanistischen Psychologie** (Ur-Schrei Therapie bei Arthur Janov, Gestalttherapie bei Ruth Cohen u. H. Petzold, Transaktionsanalyse bei Fanita English und Hypnotherapie & Familienskulptur bei Milton Erickson u. Virginia Satir).

### Die Einflüsse der Zulu und Virginia Satir

Mit dem Familienstellen verband er als Hauptgerüst die **Familienskulptur nach Virginia Satir**, die aus dem Psychodrama entstand, mit den Einflüssen die er von den **Zulu in Südafrika** erlebt hatte. Die Ordnung, die so präsent ist in seiner Theorie, findet sich auch in der Gemeinschaft der Zulu. Eine Hierarchie/ Rangordnung, wo die Vorfahren die Deutungshoheit haben und die Ahnen (Verstorbenen) ein fester Teil der Gemeinschaft sind. Und auch die Zuerstgeborenen vor den später gekommenen Geschwistern die führende Rolle einnehmen. Und auch seine Vorstellung wie **„das Recht auf Zugehörigkeit"**, was bedeutet, dass jedes Mitglied der Familie seinen Platz braucht, stammt sehr wahrscheinlich aus dieser Zeit. Wie auch das Prinzip des **„Ausgleichs von Geben und Nehmen"**, das besagt, dass eine Beziehung, in der mehr gegeben als genommen wird, endet. Sobald eine dieser Ordnungen der Rangordnung, Zugehörigkeit oder des Geben und Nehmen gestört ist, wird nach seiner Ansicht, die **Sippenseele (Familiengewissen)** durch ein Familienteil diese Störung bemerkbar machen.

### Der Durchbruch und die systemische Psychologie

Diese Theorie des systemischen Denkens und seine öffentliche Zurschaustellung des Familienstellens ließ ihn Hallen von hunderten Menschen auf der ganzen Welt füllen. Was durch **Virginia Satir** und **Gregory Bateson** noch recht theoretisch geblieben war und den Beginn der systemischen Psychologie ergab, wurde durch Bert Hellinger für jeden Interessierten zugänglich. Also mit der Systemik wird nicht mehr nur der Einzelne betrachtet, sondern das ganze System, in dem er ist, was sich von allen psychologischen Ansätzen davor unterscheidet.

### Kritik und kulturelle Einordnung

Und auch wenn die systemische Ansicht mittlerweile weit verbreitet ist, wird die Methode Familienstellen zumindest in der reinen Form von Hellinger im akademischen Zusammenhang nicht mehr positiv bewertet, was an zwei Punkten liegt. Zum einen das Phänomen der **„repräsentativen Wahrnehmung"** also dass Person in der Aufstellung die Positionen der Familienmitglieder einnehmen und der eisernen Ordnung und Rollen, also der Hierarchie und dass nach Hellinger die Frau dem Mann folgt.

Doch diese kulturabhängige Einsortierung, die das Individuum vor das System setzt, ist wahrscheinlich der Grund, warum die Theorie und Methode in z.B. südamerikanischen Ländern weiter verbreitet ist. Z.B. in Brasilien gibt es mehr als **fünfmal so viele aktive Familienaufsteller** wie in Deutschland. Aus philosophischer Sicht könnte man vermuten, dass mehr Ordnung bzw. Hierarchie eine größere System- oder Gruppen-Stabilität erzeugen und dafür den Individualismus einschränken. Wodurch klar wird, warum in Ländern in denen die Familie sehr wichtig ist und die Individualisierung der einzelnen Mitglieder untergeordnet ist, wie genau in Brasilien, China, Mexiko und Russland, das Familienstellen so populär geworden ist. Und auch die Frage, wie einer sehr individualistischen Gesellschaft die Systematik weiter helfen kann, bleibt spannend.`,
      en: `## From Freud to Hellinger: Where Family Constellations Really Come From

One man above all laid the foundation for today's family constellations. **Bert Hellinger**. But of course, this therapeutic method belongs in a historical context of many evolving theories in the psychological world. Which is where we'll start.

### The Three Forces of Psychology

All therapies that exist today essentially come from the transition from spiritual pastoral care to the beginning of modern psychology – which was not taken seriously at the time – with **psychoanalysis**. The slowly emerging insight around the turn of 1900 to incorporate the unconscious into scientific theories led to many different currents up to the present day. It was divided into three forces of psychology.

First, **Freudian depth psychology**, which became public in 1920. This was followed by **behavioral psychology**, which has been offered as a covered health service since the mid-1960s through scientific recognition. And the third force, **humanistic psychology**, which had its heyday from the 1970s to the mid-1980s.

### Bert Hellinger and Family Constellations

**Bert Hellinger** (born Anton Hellinger in 1925 in Leimen) developed the method known today as family constellations, which has produced approximately **50,000 active family constellation practitioners** in over **35 countries** (such as Brazil, China, Germany, Mexico, and Russia).

In 1993, he had his major breakthrough with his book **"Orders of Love"**. And approximately ten years before that, he developed his method. Fascinatingly, he went through virtually all stages of psychological development in his life. At the age of 26, he was ordained as a priest in the Mariannhill Order after studying philosophy and theology. He was then sent as a missionary to a community in South Africa and, 16 years later after his return, began his path to becoming a therapist with **psychoanalysis training in Vienna**. He traveled to the USA and over the following seven years completed 4 trainings in **Humanistic Psychology** (Primal Scream Therapy with Arthur Janov, Gestalt Therapy with Ruth Cohen and H. Petzold, Transactional Analysis with Fanita English, and Hypnotherapy & Family Sculpture with Milton Erickson and Virginia Satir).

### The Influences of the Zulu and Virginia Satir

For family constellations, he combined as its main framework the **Family Sculpture by Virginia Satir**, which emerged from psychodrama, with the influences he had experienced from the **Zulu in South Africa**. The order so present in his theory is also found in Zulu community. A hierarchy/ranking where ancestors hold interpretive authority and the deceased are a fixed part of the community. And the firstborn take the leading role over later-born siblings. His concept of **"the right to belonging"**, meaning every family member needs their place, most likely stems from this period. As does the principle of **"balance of giving and taking"**, which states that a relationship where more is given than taken will end. Whenever one of these orders of hierarchy, belonging, or giving and taking is disturbed, in his view, the **clan soul (family conscience)** will make this disturbance noticeable through a family member.

### The Breakthrough and Systemic Psychology

This theory of systemic thinking and his public demonstrations of family constellations filled halls of hundreds of people around the world. What had remained fairly theoretical through **Virginia Satir** and **Gregory Bateson** and marked the beginning of systemic psychology, became accessible to anyone interested through Bert Hellinger. With systemics, it is no longer just the individual who is considered, but the entire system they are part of, which differs from all previous psychological approaches.

### Criticism and Cultural Context

Even though the systemic perspective is now widespread, the method of family constellations – at least in Hellinger's pure form – is no longer positively evaluated in academic contexts, for two reasons. First, the phenomenon of **"representative perception"** – that people in the constellation take on the positions of family members – and the rigid order and roles, i.e., the hierarchy and Hellinger's view that the woman follows the man.

Yet this culture-dependent classification, which places the individual before the system, is probably the reason why the theory and method is more widespread in, for example, South American countries. In Brazil, there are more than **five times as many active family constellation practitioners** as in Germany. From a philosophical perspective, one could surmise that more order or hierarchy creates greater system or group stability while limiting individualism. This makes it clear why in countries where family is very important and the individualization of members is subordinate – precisely in Brazil, China, Mexico, and Russia – family constellations have become so popular. And the question of how systemics can further help a very individualistic society remains exciting.`,
      fr: `## De Freud à Hellinger : D'où viennent vraiment les constellations familiales

Un homme en particulier a posé les bases des constellations familiales d'aujourd'hui. **Bert Hellinger**. Mais bien sûr, cette méthode thérapeutique s'inscrit dans un contexte historique de nombreuses théories psychologiques en évolution. C'est par là que nous commencerons.

### Les trois forces de la psychologie

Toutes les thérapies existantes proviennent essentiellement de la transition entre la pastorale spirituelle et le début de la psychologie moderne avec la **psychanalyse**. La prise de conscience progressive autour de 1900 d'intégrer l'inconscient dans les théories scientifiques a conduit à de nombreux courants différents jusqu'à aujourd'hui. Elle a été divisée en trois forces de la psychologie.

D'abord la **psychologie des profondeurs selon Freud**, rendue publique en 1920. Puis la **psychologie comportementale**, proposée comme prestation de santé depuis le milieu des années 1960. Et la troisième force, la **psychologie humaniste**, qui a connu son apogée des années 1970 au milieu des années 1980.

### Bert Hellinger et les constellations familiales

**Bert Hellinger** (né Anton Hellinger en 1925 à Leimen) a développé la méthode connue aujourd'hui sous le nom de constellations familiales, qui compte environ **50 000 praticiens actifs** dans plus de **35 pays**.

En 1993, il a connu sa percée majeure avec son livre **« Les Ordres de l'Amour »**. Il a développé sa méthode environ dix ans auparavant. Il a combiné la **Sculpture Familiale de Virginia Satir** avec les influences des **Zoulous en Afrique du Sud**.

### Critique et contexte culturel

Même si la vision systémique est désormais répandue, la méthode des constellations familiales dans sa forme pure n'est plus évaluée positivement dans le contexte académique. Au Brésil, il y a plus de **cinq fois plus de praticiens actifs** qu'en Allemagne. La question de savoir comment la systémique peut aider une société très individualiste reste passionnante.`,
    },
    image: blogFamilienstellenGeschichte,
    publishedAt: "2026-03-22",
  },
];
