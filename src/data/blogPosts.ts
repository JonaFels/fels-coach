import praxisAufstellung from "@/assets/praxis-aufstellung.webp";
import blogFamilienstellenGeschichte from "@/assets/blog-familienstellen-geschichte.webp";
import blogWissendesFeld from "@/assets/blog-wissendes-feld.webp";
import blogAltesDrehbuch from "@/assets/blog-altes-drehbuch.webp";

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

Viele kennen Familienaufstellungen von Aufstellungsabenden in Gruppenform. Aber wie geht es in einem Einzelformat, mit zwei Personen? Erfahre mehr über die Möglichkeiten einer [Einzelsitzung](/angebote).

### Bodenanker als Stellvertreter

Es werden sogenannte **[Bodenanker](/systemische-familienaufstellung-freiburg)** verwendet, um die aufgestellten Personen darzustellen. Als Bodenanker können verschiedene Symbole genommen werden, z.B. ein Stück Papier mit dem Namen der Person drauf oder ein anderer gut repräsentierender Gegenstand.

Besonders gut sind **Filzmatten mit einem Pfeil** oder anderer Markierung für die Richtung, in die die Person oder das, was dort steht, hinschaut. Denn durch die Mattenform kann man sich genau auf das Feld stellen. So können beide – Coach oder Therapeut und Klient*in – die verschiedenen Plätze einnehmen und erleben.

### Vorteile gegenüber dem Gruppensetting

Im Gegensatz zum Aufstellen in Gruppen repräsentieren die Bodenanker die aufgestellten Personen im Raum und können von Coach und Klient*in jederzeit bezogen werden. Wodurch **mehr Möglichkeiten** als bei dem Aufstellen in Gruppen entstehen:

1. **Plätze einnehmen** – Klient*innen können Plätze von anderen Personen oder dem Ziel (gelebte Berufung, Traumhaus) einnehmen.
2. **Perspektivwechsel** – Auch der Coach kann sich gegenüber auf den Platz des Klienten stellen, wenn dieser dem zustimmt.
3. **Nachspüren** – Man kann jederzeit aus den Rollen herausgehen, Fragen beantworten oder nachspüren, wie es in der Rolle war.

### Worauf der Coach achten sollte

> Die neuen Möglichkeiten, die Rollen zu besetzen und zu erfahren, bringen dem Klienten Vorteile – auf der anderen Seite gibt es Variationen, die vom Coach vermieden werden sollten.

Zum einen das Phänomen der **„repräsentierenden Wahrnehmung"** also dass Person in der Aufstellung die Positionen der Familienmitglieder einnehmen und der eisernen Ordnung und Rollenbild, also der Hierarchie und dass nach Hellinger die Frau dem Mann folgt.

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
    image: praxisAufstellung,
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

Zuerst die 1920 publik gewordene **Tiefenpsychologie nach Freud**. Darauf folgte die **Verhaltenspsychologie**, die durch die wissenschaftliche Anerkennung als Kassenleistung ab Mitte der 1960er Jahre bis heute angeboten wird. Und die dritte Kraft, die **humanistische Psychologie**, die sich als Abgrenzung zur Tiefenpsychologie nicht mit der Vergangenheit beschäftigt, sondern den Klienten im Hier und Jetzt sieht, und die ihre Hochzeit in den 1970er Jahren bis zur Mitte der 1980er Jahre hatte.

### Bert Hellinger und die Familienaufstellung

**Bert Hellinger** (geb. Anton Hellinger 1925 in Leimen) hat die heute als Familienaufstellung bekannte Methode entwickelt, die heute ca. **50.000 aktive Familienaufsteller** in über **35 Ländern** (wie z.B. Brasilien, China, Deutschland, Mexiko und Russland) hervorgebracht hat.

1993 hatte er seinen großen Durchbruch mit seinem Buch **„Ordnung der Liebe"**. Und ungefähr zehn Jahre zuvor entwickelte er seine Methode. Faszinierenderweise durchlief er in seinem Leben quasi alle Schritte der psychologischen Entwicklung. Im Alter von 26 Jahren wurde er im Mariannhill Orden zum Priester geweiht, nachdem er Philosophie und Theologie studierte. Wurde danach als Missionar in eine Gemeinschaft in Südafrika entsandt und begann 16 Jahre später nach seiner Rückkehr seinen Weg, Therapeut zu werden mit einer **Psychoanalyse-Ausbildung in Wien**. Er reiste in die USA und machte in den folgenden sieben Jahren 4 Ausbildungen in dem Bereich der **Humanistischen Psychologie** (Ur-Schrei Therapie bei Arthur Janov, Gestalttherapie bei Ruth Cohen u. H. Petzold, Transaktionsanalyse bei Fanita English und Hypnotherapie & Familienskulptur bei Milton Erickson u. Virginia Satir).

### Einflüsse der Zulu und Virginia Satir

Mit dem Familienstellen verband er als Hauptgerüst die **Familienskulptur nach Virginia Satir**, die aus dem Psychodrama entstand, mit den Einflüssen aus seiner Zeit als Priester und Schulleiter bei den **Zulu in Afrika**. Die Ordnung, die so präsent ist in seiner Theorie, findet sich auch in der Gemeinschaft der Zulu. Eine Hierarchie/ Rangordnung, wo die Vorfahren die Deutungshoheit haben und die Ahnen (Verstorbenen) ein fester Teil der Gemeinschaft sind. Und auch die Zuerstgeborenen vor den später gekommenen Geschwistern die führende Rolle einnehmen. Und auch seine Vorstellung wie **„das Recht auf Zugehörigkeit"**, was bedeutet, dass jedes Mitglied der Familie seinen Platz braucht, stammt sehr wahrscheinlich aus dieser Zeit. Wie auch das Prinzip des **„Ausgleichs von Geben und Nehmen"**, das besagt, dass eine Beziehung, in der mehr gegeben als genommen wird, endet. Sobald eine dieser Ordnungen der Rangordnung, Zugehörigkeit oder des Geben und Nehmen gestört ist, wird nach seiner Ansicht, die **Sippenseele (Familiengewissen)** durch ein Familienteil dies bemerkbar machen.

### Der Durchbruch und die systemische Psychologie

Diese Theorie des systemischen Denkens und seine öffentliche Zurschaustellung des Familienstellens ließ ihn Hallen von hunderten Menschen auf der ganzen Welt füllen. Was durch **Virginia Satir** und **Gregory Bateson** noch recht theoretisch geblieben war und den Beginn der systemischen Psychologie ergab, wurde durch Bert Hellinger für jeden Interessierten zugänglich. Also mit der Systemik wird nicht mehr nur der Einzelne betrachtet, sondern das ganze System, in dem er ist, was sich von allen psychologischen Ansätzen davor unterscheidet.

### Kritik und kulturelle Einordnung

Und auch wenn die systemische Ansicht mittlerweile weit verbreitet ist, wird die Methode Familienstellen zumindest in der reinen Form von Hellinger im akademischen Zusammenhang nicht mehr positiv bewertet, was an zwei Punkten liegt. Zum einen das Phänomen der **„repräsentierenden Wahrnehmung"**, also dass Personen in der Aufstellung die Positionen der Familienmitglieder einnehmen, und der eisernen Ordnung und Rollenbild, also der Hierarchie und dass nach Hellinger die Frau dem Mann folgt.

Doch die kulturabhängig Einsortierung, dass im Westen die Individualisierung vor das System, bzw. Familie gesetzt wird, ist wahrscheinlich der Grund, warum die Theorie und Methode in z.B. südamerikanischen Ländern weiter verbreitet ist. Z.B. in Brasilien gibt es mehr als **fünfmal so viele aktive Familienaufsteller** wie in Deutschland. Aus philosophischer Sicht könnte man vermuten, dass mehr Ordnung bzw. Hierarchie eine größere System- oder Gruppen-Stabilität erzeugen und dafür den Individualismus einschränken. Wodurch klar wird, warum in Ländern in denen die Familie sehr wichtig ist und die Individualisierung der einzelnen Mitglieder untergeordnet ist, wie genau in Brasilien, China, Mexiko und Russland, das Familienstellen so populär geworden ist. In diesem Kontext von Individualisierung und Überordnung der Gruppe vor dem Individuum, stellt sich die Frage, wie einer sehr individualistischen Gesellschaft die Systemik weiter helfen kann – und bleibt bis heute spannend.`,
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
  {
    id: "3",
    slug: "das-wissende-feld-wahrnehmung-beim-familienstellen",
    title: {
      de: "Das wissende Feld: Wie funktioniert eigentlich die Wahrnehmung beim Familienstellen?",
      en: "The Knowing Field: How Does Perception Actually Work in Family Constellations?",
      fr: "Le champ sachant : Comment fonctionne la perception dans les constellations familiales ?",
    },
    excerpt: {
      de: "Wie kann es sein, dass fremde Menschen das Familiensystem eines anderen Menschen nachbilden können? Ein Blick auf das Phänomen der stellvertretenden Wahrnehmung und die Brücke zur Quantenphysik.",
      en: "How is it possible that strangers can replicate another person's family system? A look at the phenomenon of representative perception and the bridge to quantum physics.",
      fr: "Comment est-il possible que des étrangers puissent reproduire le système familial d'une autre personne ? Un regard sur le phénomène de la perception représentative et le lien avec la physique quantique.",
    },
    content: {
      de: `Wie kann es sein, dass fremde Menschen das Familiensystem eines anderen Menschen nachbilden können? Darauf gibt es auf jeden Fall keine Antwort, die alle sofort zu einem "Aha-Erlebnis" führen wird. Man kann Erklärungen versuchen über **Körpersprache** und darauf, dass Menschen, die in einer Aufstellung stehen, wissen, wie sie sich verhalten müssen, aufgrund **sozial gelerntem Verhalten**. So dass alle zusammen wie die gewohnten Familiensituationen – wie überall – die gewohnten Familiensituationen nachahmen und die körperlichen Signale, den Blick, die Haltung, intuitiv deuten und darauf reagieren, so dass alle Aufgestellten Personen zusammen ein eingestimmtes Bild erzeugen. Aber die Berichte von Teilnehmenden zeigen, dass **viel mehr Informationen** durch die stellvertretende Wahrnehmung der aufgestellten Personen offenbart werden. Informationen die dem Menschen, für den die Aufstellung ist, gar nicht bekannt sind.

## Spiegelung oder Intuition? Erklärungsversuche eines Phänomens

Man könnte vermuten, dass nicht Bekannte wäre zufällig oder von denen, die dort stellvertretend für die Familie eines anderen stehen, einfach so gespielt. Aber der Umstand, dass Familienstellen so lange, **seit ca. 1980**, und von so vielen Aufstellern praktiziert wird, zeigt, dass es funktioniert. Wenn man einen Teilnehmer fragt, wie es geht, wird die Antwort meistens auf die Erfahrung, **es selbst auszuprobieren**, verweisen. Denn das Stellvertreten ist auch möglich ohne seine eigene Familie aufstellen zu lassen. Und man kann genau beobachten ob jemand in der Rolle der Aufstellung ist oder nachdenkt. Denn die Bewegungen und auch Worte passieren **spontan ohne Denken**.

## Im Flow der Stellvertretung: Wenn Bewegungen spontan entstehen

Modern ausgedrückt **im Flow**. Man kann sogar – in dem Fall das man sonst auch das eigene Denken beobachten kann – wahrnehmen wie sich in dem Zeitraum in der Rolle als Stellvertreter auch je nach Rolle ganz andere Gedanken im Kopf abspielen. Alles das, was sich in einer Aufstellung zeigt, kommt aus einem **spontanen Flow**, einer Intuition. Jetzt liegt es nahe, es könnte von demjenigen ausgehen, der die Aufstellung leitet, aber da man verschiedene Aufstellungsleiter ausprobieren kann und die stellvertretenden Person die gleichen Situationen oder sogar auch Positionen räumlich (Abstände, Richtung) einnehmen, ist es durch die Beobachtung festgestellt, dass es sich um eine **andere Quelle** handelt, aus der die Bewegungen und Worte der Stellvertreter hervorgehen.

## Die Evolution der Methode: Von der Skulptur zur freien Bewegung

Diese Quelle wurde im Kontext der Weiterentwicklung des Familienstellens zum ersten Mal erkennbar. In dem Schritt der **Skulptur-Methode von Virginia Satir**, bei welcher der Klient selbst die stellvertretenden Personen hinstellte und sogar die Mimik und auch die Körperhaltung angesagt hat, zur Methode von **Thea Schönfelder**, die nun die Personen sich bewegen und sprechen ließ – und zwar nicht durch die Anordnung des Klienten, sondern durch eben diese Intuition.

## Das wissende Feld und die Brücke zur Quantenphysik

**Bert Hellinger**, der die Methode Familienstellen in der modernen Form entwickelte, und erstmals bei Thea Schönfelder damit in Kontakt gekommen war, beschrieb die stellvertretende oder **repräsentierende Wahrnehmung** als **„das wissende Feld"**. Das wissende Feld soll ein nicht sichtbares Feld sein, das all das Wissen zu einer Familie hat und mit dem jedes Mitglied verbunden ist. So lässt sich erklären, warum die stellvertretenden Personen auf einmal eine andere Person "spielen" die sie nicht kennen, aber der Klient schreibt die Worte und Verhalten zu, die durch die fremde Person dargestellt wird.

> Interessanterweise gibt es in der modernen Physik in der Quantenmechanik die Quantenverschränkung, was aussagt, dass sich quasi unendlich voneinander entfernte Photonen gleichzeitig miteinander verändern.

Sie verhalten sich also zu einander und reagieren auf das jeweils andere Photon egal wie weit sie von einander getrennt sind. Es erklärt also die grundsätzliche Möglichkeit, dass **Information** oder in der Physik hier der Zustand **unabhängig von Zeit** in identischer Weise an zwei Orten sein kann. Auch wenn die Physik das noch nicht bei größeren Systemen bestätigen kann.`,
      en: `How is it possible that strangers can replicate another person's family system? There is certainly no answer that will immediately lead everyone to an "aha moment." One can attempt explanations through **body language** and the idea that people standing in a constellation know how to behave based on **socially learned behavior**. So that together they imitate the familiar family situations – as everywhere – and intuitively interpret and react to the physical signals, the gaze, the posture, so that all the representatives together create a coherent picture. But reports from participants show that **much more information** is revealed through the representative perception of the positioned people. Information that the person for whom the constellation is being done doesn't even know.

## Mirroring or Intuition? Attempts to Explain a Phenomenon

One might assume that unknown details are random or simply acted out by those standing in as representatives for another's family. But the fact that family constellations have been practiced for so long, **since around 1980**, and by so many practitioners, shows that it works. When you ask a participant how it works, the answer usually refers to the experience of **trying it yourself**. Because acting as a representative is also possible without having your own family constellation done. And you can precisely observe whether someone is in the role of the constellation or thinking. Because the movements and words happen **spontaneously without thinking**.

## In the Flow of Representation: When Movements Arise Spontaneously

In modern terms, **in the flow**. You can even perceive – if you can otherwise observe your own thinking – how completely different thoughts play out in your head during the time in the role as representative, depending on the role. Everything that shows itself in a constellation comes from a **spontaneous flow**, an intuition. Now one might assume it could come from the person leading the constellation, but since you can try different constellation leaders and the representative people take the same situations or even the same spatial positions (distances, direction), observation has established that there is a **different source** from which the movements and words of the representatives emerge.

## The Evolution of the Method: From Sculpture to Free Movement

This source became recognizable for the first time in the context of the further development of family constellations. In the step from **Virginia Satir's Sculpture Method**, in which the client placed the representative people and even dictated the facial expressions and body posture, to the method of **Thea Schönfelder**, who now let the people move and speak – not through the client's arrangement, but through this very intuition.

## The Knowing Field and the Bridge to Quantum Physics

**Bert Hellinger**, who developed the modern form of family constellations and first encountered it through Thea Schönfelder, described the representative or **representative perception** as **"the knowing field."** The knowing field is said to be an invisible field that holds all the knowledge about a family and to which every member is connected. This explains why the representative people suddenly "play" another person they don't know, yet the client attributes the words and behavior displayed by the stranger.

> Interestingly, in modern physics, quantum mechanics describes quantum entanglement, which states that photons separated by virtually infinite distances change simultaneously with each other.

They behave in relation to each other and react to the other photon no matter how far apart they are. It therefore explains the fundamental possibility that **information** – or in physics, the state – can exist **independent of time** in an identical way in two places. Even if physics cannot yet confirm this in larger systems.`,
      fr: `Comment est-il possible que des étrangers puissent reproduire le système familial d'une autre personne ? Il n'y a certainement pas de réponse qui mènera tout le monde à un moment de révélation. On peut tenter des explications par le **langage corporel** et l'idée que les personnes dans une constellation savent comment se comporter grâce à un **comportement socialement appris**. Les rapports des participants montrent cependant que **beaucoup plus d'informations** sont révélées par la perception représentative.

## Miroir ou intuition ? Tentatives d'explication d'un phénomène

Le fait que les constellations familiales soient pratiquées depuis si longtemps, **depuis environ 1980**, montre que cela fonctionne. Les mouvements et les mots se produisent **spontanément, sans réflexion**.

## Dans le flow de la représentation

En termes modernes, **dans le flow**. Tout ce qui se montre dans une constellation provient d'un **flow spontané**, d'une intuition. L'observation a établi qu'il existe une **source différente** d'où émergent les mouvements et les paroles des représentants.

## L'évolution de la méthode

Cette source est devenue reconnaissable dans le passage de la **méthode de sculpture de Virginia Satir** à la méthode de **Thea Schönfelder**, qui a laissé les personnes bouger et parler librement.

## Le champ sachant et le pont vers la physique quantique

**Bert Hellinger** a décrit la perception représentative comme **« le champ sachant »**. Ce champ invisible contiendrait toute la connaissance d'une famille. La **mécanique quantique** avec l'intrication quantique offre une analogie fascinante : l'**information** peut exister **indépendamment du temps** de manière identique en deux endroits.`,
    },
    image: blogWissendesFeld,
    publishedAt: "2026-04-03",
  },
  {
    id: "4",
    slug: "gefangen-im-alten-drehbuch-warum-das-glueck-oft-ausbleibt",
    title: {
      de: "Gefangen im alten Drehbuch? Der wahre Grund, warum das Glück oft ausbleibt.",
      en: "Trapped in an Old Script? The Real Reason Happiness Often Stays Away.",
      fr: "Prisonnier d'un vieux scénario ? La vraie raison pour laquelle le bonheur reste souvent absent.",
    },
    excerpt: {
      de: "Was ist Glück an sich überhaupt? Psychologisch betrachtet macht nicht die Situation unglücklich, sondern die Bewertung der Situation. Wie wir aufhören, Glück zu opfern.",
      en: "What is happiness, really? Psychology tells us it's not the situation that makes us unhappy, but our evaluation of it. How we stop sacrificing happiness.",
      fr: "Qu'est-ce que le bonheur, au fond ? La psychologie nous dit que ce n'est pas la situation qui nous rend malheureux, mais notre évaluation. Comment arrêter de sacrifier le bonheur.",
    },
    content: {
      de: `## Gefangen im alten Drehbuch? Der wahre Grund, warum das Glück oft ausbleibt.

Was ist Glück an sich überhaupt? Manche denken an das Erreichen von Zielen oder bestimmte Dinge, die sie gerne tun. Aber eigentlich ist Glück nur in der Gegenwart im Hier und Jetzt da. Viele sprechen von Flow.

## Der Blick der Psychologie: Unsere Bewertung entscheidet

Psychologisch betrachtet gibt es dazu z.B. das Grundprinzip der Kognitiven Verhaltenstherapie, das aussagt, nicht die Situation macht unglücklich, sondern die Bewertung der Situation. Also die Gedanken und das Bild, das wir von der Welt haben, machen unglücklich oder eben glücklich.

Fast schon in diesem Sinne hat sich die moderne Positive Psychologie begründet und fragt danach, was das Leben eigentlich lebenswert macht. Dort gibt es das PERMA-Modell, wo es auch um eine höhere Bedeutung im Leben geht, also einen Sinn oder Aufgabe im Leben. Und auch die ACT (Akzeptanz- und Commitment-Therapie) sagt aus, dass Werte im Leben und deren Umsetzung eine positive Grundstimmung ins Leben bringen. Dazu gehört auch die Akzeptanz der negativen Zustände.

Mit all dem Wissen im Gepäck, was jetzt tun? Der schnellste Weg ist bestimmt sich jemanden zu suchen, der sich mit all dem auskennt, einen Psychologe, Therapeuten oder Coach. Oder Retreats zu Themen, die dazu passen. Viele machen das, aber mit all den Theorien und dem Wissen, wer blickt da durch?

## Die spirituelle Sicht: Der Schleier der Gedanken

Daneben gibt es auch noch die spirituelle Sicht auf die Dinge. Hier geht es um den Weg von der Ego-Identifikation zum Selbst. Wo die Gedanken, die zu einer negativen Weltsicht führen, dem Ego entsprechen. Also der Identität, die durch unser Denken entsteht.

Man stellt sich vor, dass all diese Gedanken zu einer quasi inneren Welt führen, die nicht der Wirklichkeit entspricht. Es wird auch Schleier oder Maya genannt, was quasi zwischen dem Blick oder Bild eines Menschen und der Wirklichkeit liegt.

## Der Einfluss unseres Umfelds: Warum wir unser Glück opfern

Nun neben der rein psychotherapeutischen oder spirituellen Sicht und den Methoden wie klassische Verhaltenstherapie oder die Praxis der Meditation, soll es um eine konkretere Herangehensweise gehen, die in diesem Fall eine Mischung aus beidem ist und hier unter die Kategorie Coaching fällt.

Was hält den Menschen davon ab glücklich zu sein? Gedanken, ja und der Glaube an das selbstgemachte Weltbild, ja. Aber ganz greifbar, die direkte Umwelt, Freunde, Familie und alle anderen, die uns begleiten oder begleitet haben.

Und natürlich machen sie uns auch glücklich. Doch liegt der jetzige Zustand an den Kontakte und Erfahrungen, die wir bis heute erlebt haben. Und wie sieht es mit diesen Kontakten aus? Im Kontakt, wo Glück oder Unglück erfahrbar wird und auch mit sich selbst? Wir wollen Kontakt und suchen ihn. Es gibt den Begriff Bindungsliebe, der beschreibt, dass wir den Kontakt nicht nur wollen, sondern brauchen und vor allem als Kinder dafür Opfer bringen. Also opfern wir z.B. Bedürfnisse, Glück oder Freiheiten für Liebe.

## Die Neuentscheidung: Das alte Skript umschreiben

Und jetzt die goldene Frage, wie hören wir auf, Glück zu opfern?

Zuerst die Erkenntnis, dass wir es tun und dann schauen, warum und wann wir es tun. Wo die Gefühle auftauchen? Und letztendlich eine neue Entscheidung treffen. Wie es in der Transaktionsanalyse durch die Theorie des „Skripts des Lebens" erklärt wird.

Wir finden einen Moment wie: „Wenn ich mich einlasse, werde ich zurück gelassen.". Und merken dort ist ein Schmerz und können sogar den Moment finden, als es mit soundso vielen Jahren mit Person soundso war, und wir nehmen ein Gefühl wahr und lassen es zu. Was vor vielleicht ein paar Tagen noch gar nicht möglich war. Und der Satz verschwindet, die nicht beendete Situation wurde beendet.

Die Gedanken um diesen Satz vom Anfang sind nicht mehr da und auch die Anhaftung an das Erlebnis ist nicht mehr da. Und auch die Verbindung zu dieser Person soundso ist um genau diesen Teil kleiner geworden. Diesen meist kindlichen Anteil, der sagt, oder sagte: „Ich brauche dich um zu leben".

## Fazit: Den Raum für sich selbst wieder öffnen

Alle Theorien und Methoden kommen letztlich darin zusammen, dass es um ein Gefühl geht, das noch in der Gegenwart ist, obwohl die Situation in der Vergangenheit ist. Es sorgt für bestimmte Gedanken, die sogar zu Konzepten zusammengeführt werden können.

Ob über die Gedanken oder das Gefühl, das Verarbeiten der nicht beendeten Situationen sorgt für Raum, sich selbst wieder mehr zu erkennen. Die Gefühle wieder zuzulassen, die Gedanken mit erwachsenem Bewusstsein neu einzuordnen und die Grundstimmung im Leben zu verändern.`,
      en: `## Trapped in an Old Script? The Real Reason Happiness Often Stays Away.

What is happiness in itself, really? Some think of achieving goals or certain things they enjoy doing. But actually, happiness only exists in the present, in the here and now. Many speak of flow.

## The Psychological Perspective: Our Evaluation Decides

From a psychological perspective, there is, for example, the basic principle of Cognitive Behavioral Therapy, which states that it is not the situation that makes us unhappy, but the evaluation of the situation. So the thoughts and the image we have of the world make us unhappy or indeed happy.

Almost in this very spirit, modern Positive Psychology was founded and asks what actually makes life worth living. There is the PERMA model, which also addresses a higher meaning in life, a purpose or mission. And ACT (Acceptance and Commitment Therapy) also states that values in life and their implementation bring a positive basic mood to life. This also includes the acceptance of negative states.

With all this knowledge in tow, what to do now? The fastest way is certainly to find someone who knows all about it — a psychologist, therapist, or coach. Or retreats on relevant topics. Many do this, but with all the theories and knowledge, who can see through it all?

## The Spiritual View: The Veil of Thoughts

Besides this, there is also the spiritual view of things. Here it is about the path from ego-identification to the Self. Where the thoughts that lead to a negative worldview correspond to the ego — the identity that arises through our thinking.

One imagines that all these thoughts lead to a kind of inner world that does not correspond to reality. It is also called the veil or Maya, which lies between a person's view or image and reality.

## The Influence of Our Environment: Why We Sacrifice Our Happiness

Now, alongside the purely psychotherapeutic or spiritual view and methods like classical behavioral therapy or the practice of meditation, let us turn to a more concrete approach — one that in this case is a mixture of both and falls under the category of coaching.

What keeps people from being happy? Thoughts, yes, and the belief in a self-made worldview, yes. But very tangibly, the immediate environment — friends, family, and everyone else who accompanies or has accompanied us.

And of course, they also make us happy. Yet the current state is due to the contacts and experiences we have had up to today. And how do these contacts look? In contact, where happiness or unhappiness becomes experienceable — and also with oneself? We want contact and seek it. There is the concept of bonding love, which describes that we not only want contact but need it, and especially as children, we make sacrifices for it. So we sacrifice, for example, needs, happiness, or freedoms for love.

## The New Decision: Rewriting the Old Script

And now the golden question: how do we stop sacrificing happiness?

First, the realization that we do it, and then looking at why and when we do it. Where the feelings emerge? And ultimately making a new decision. As explained in Transactional Analysis through the theory of the "Life Script."

We find a moment like: "If I open up, I will be abandoned." And we notice there is a pain, and we can even find the moment when it was at such-and-such an age with person such-and-such, and we perceive a feeling and allow it. Something that perhaps a few days ago was not even possible. And the sentence disappears — the unfinished situation was completed.

The thoughts around this initial sentence are no longer there, and the attachment to the experience is gone too. And the connection to that person has become smaller by exactly that part — this mostly childlike part that says, or said: "I need you to live."

## Conclusion: Reopening the Space for Yourself

All theories and methods ultimately come together in the fact that it is about a feeling that is still in the present, even though the situation is in the past. It creates certain thoughts that can even be combined into concepts.

Whether through thoughts or feelings, processing the unfinished situations creates space to recognize oneself again. To allow the feelings again, to reclassify the thoughts with adult awareness, and to change the basic mood in life.`,
      fr: `## Prisonnier d'un vieux scénario ? La vraie raison pour laquelle le bonheur reste souvent absent.

Qu'est-ce que le bonheur en soi ? Certains pensent à l'atteinte d'objectifs ou à certaines choses qu'ils aiment faire. Mais en réalité, le bonheur n'existe que dans le présent, dans l'ici et maintenant. Beaucoup parlent de flow.

## Le regard de la psychologie : Notre évaluation décide

D'un point de vue psychologique, il existe par exemple le principe fondamental de la thérapie cognitivo-comportementale, qui affirme que ce n'est pas la situation qui rend malheureux, mais l'évaluation de la situation. Ce sont donc les pensées et l'image que nous avons du monde qui nous rendent malheureux ou heureux.

C'est presque dans cet esprit que la psychologie positive moderne s'est fondée et pose la question de ce qui rend la vie digne d'être vécue. Il y a le modèle PERMA, qui traite aussi d'un sens plus élevé dans la vie. Et l'ACT (thérapie d'acceptation et d'engagement) affirme que les valeurs dans la vie et leur mise en œuvre apportent une humeur de base positive. Cela inclut aussi l'acceptation des états négatifs.

## La vue spirituelle : Le voile des pensées

Il y a aussi la vision spirituelle des choses. Ici, il s'agit du chemin de l'identification à l'ego vers le Soi. Les pensées qui mènent à une vision négative du monde correspondent à l'ego — l'identité qui naît de notre pensée.

On imagine que toutes ces pensées mènent à une sorte de monde intérieur qui ne correspond pas à la réalité. On l'appelle aussi le voile ou Maya.

## L'influence de notre environnement : Pourquoi nous sacrifions notre bonheur

Qu'est-ce qui empêche les gens d'être heureux ? Les pensées, oui, et la croyance en une vision du monde auto-construite, oui. Mais très concrètement, l'environnement direct — amis, famille et tous ceux qui nous accompagnent.

Il y a le concept de l'amour d'attachement, qui décrit que nous ne voulons pas seulement le contact mais en avons besoin, et surtout en tant qu'enfants, nous faisons des sacrifices pour cela. Nous sacrifions par exemple des besoins, du bonheur ou des libertés pour l'amour.

## La nouvelle décision : Réécrire l'ancien scénario

Et maintenant la question en or : comment arrêtons-nous de sacrifier le bonheur ?

D'abord la prise de conscience que nous le faisons, puis regarder pourquoi et quand nous le faisons. Comme l'explique l'analyse transactionnelle à travers la théorie du « scénario de vie ».

Nous trouvons un moment comme : « Si je m'ouvre, je serai abandonné. » Et nous remarquons qu'il y a une douleur, et la phrase disparaît — la situation inachevée a été terminée.

## Conclusion : Rouvrir l'espace pour soi-même

Toutes les théories et méthodes convergent finalement vers le fait qu'il s'agit d'un sentiment encore présent, bien que la situation soit dans le passé. Que ce soit par les pensées ou le sentiment, le traitement des situations inachevées crée de l'espace pour se reconnaître à nouveau.`,
    },
    image: blogAltesDrehbuch,
    publishedAt: "2026-04-04",
  },
];
