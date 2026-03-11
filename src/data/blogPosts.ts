import blogEinzelaufstellung from "@/assets/blog-einzelaufstellung.jpg";

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
      de: "Familienstellen in einer Einzelsitzung",
      en: "Family Constellations in an Individual Session",
      fr: "Constellations familiales en séance individuelle",
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
];
