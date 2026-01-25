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
    slug: "kraft-der-veraenderung",
    title: {
      de: "Die Kraft der Veränderung",
      en: "The Power of Change",
      fr: "Le pouvoir du changement",
    },
    excerpt: {
      de: "Veränderung beginnt mit dem ersten Schritt. Erfahre, wie du den Mut findest, neue Wege zu gehen.",
      en: "Change begins with the first step. Learn how to find the courage to explore new paths.",
      fr: "Le changement commence par le premier pas. Découvrez comment trouver le courage d'explorer de nouvelles voies.",
    },
    content: {
      de: `## Die Kraft der Veränderung

Veränderung ist ein natürlicher Teil des Lebens. Doch oft fällt es uns schwer, den ersten Schritt zu wagen.

### Warum fällt Veränderung so schwer?

Unser Gehirn ist darauf programmiert, uns vor dem Unbekannten zu schützen. Das war früher überlebenswichtig, kann uns heute aber davon abhalten, zu wachsen.

### Der erste Schritt

Der wichtigste Moment ist der Entschluss, etwas zu verändern. Nicht morgen, nicht nächste Woche – sondern jetzt.

> "Der beste Zeitpunkt, einen Baum zu pflanzen, war vor 20 Jahren. Der zweitbeste Zeitpunkt ist jetzt."

### Meine Einladung an dich

Wenn du bereit bist, den ersten Schritt zu gehen, begleite ich dich gerne auf diesem Weg.`,
      en: `## The Power of Change

Change is a natural part of life. Yet we often find it difficult to take the first step.

### Why is change so hard?

Our brain is programmed to protect us from the unknown. This was essential for survival in the past, but today it can prevent us from growing.

### The first step

The most important moment is the decision to change something. Not tomorrow, not next week – but now.

> "The best time to plant a tree was 20 years ago. The second best time is now."

### My invitation to you

If you're ready to take the first step, I'd be happy to accompany you on this journey.`,
      fr: `## Le pouvoir du changement

Le changement fait naturellement partie de la vie. Pourtant, nous avons souvent du mal à faire le premier pas.

### Pourquoi le changement est-il si difficile ?

Notre cerveau est programmé pour nous protéger de l'inconnu. C'était essentiel pour la survie dans le passé, mais aujourd'hui cela peut nous empêcher de grandir.

### Le premier pas

Le moment le plus important est la décision de changer quelque chose. Pas demain, pas la semaine prochaine – mais maintenant.

> "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant."

### Mon invitation

Si vous êtes prêt à faire le premier pas, je serai heureux de vous accompagner dans ce voyage.`,
    },
    image: "/placeholder.svg",
    publishedAt: "2025-01-20",
  },
  {
    id: "2",
    slug: "selbstfuersorge-im-alltag",
    title: {
      de: "Selbstfürsorge im Alltag",
      en: "Self-Care in Daily Life",
      fr: "Prendre soin de soi au quotidien",
    },
    excerpt: {
      de: "Kleine Rituale können Großes bewirken. Entdecke einfache Wege, gut für dich selbst zu sorgen.",
      en: "Small rituals can make a big difference. Discover simple ways to take good care of yourself.",
      fr: "Les petits rituels peuvent faire une grande différence. Découvrez des moyens simples de prendre soin de vous.",
    },
    content: {
      de: `## Selbstfürsorge im Alltag

In unserem hektischen Alltag vergessen wir oft, auf uns selbst zu achten. Dabei ist Selbstfürsorge kein Luxus, sondern eine Notwendigkeit.

### Drei einfache Rituale

1. **Morgenroutine**: Beginne den Tag mit 5 Minuten Stille
2. **Bewegung**: Ein kurzer Spaziergang kann Wunder wirken
3. **Abendreflexion**: Notiere drei Dinge, für die du dankbar bist

### Es geht nicht um Perfektion

Selbstfürsorge muss nicht perfekt sein. Es geht darum, dir selbst Mitgefühl zu schenken.`,
      en: `## Self-Care in Daily Life

In our hectic daily lives, we often forget to take care of ourselves. Yet self-care is not a luxury, but a necessity.

### Three simple rituals

1. **Morning routine**: Start the day with 5 minutes of silence
2. **Movement**: A short walk can work wonders
3. **Evening reflection**: Write down three things you're grateful for

### It's not about perfection

Self-care doesn't have to be perfect. It's about showing yourself compassion.`,
      fr: `## Prendre soin de soi au quotidien

Dans notre vie quotidienne trépidante, nous oublions souvent de prendre soin de nous-mêmes. Pourtant, prendre soin de soi n'est pas un luxe, mais une nécessité.

### Trois rituels simples

1. **Routine matinale**: Commencez la journée avec 5 minutes de silence
2. **Mouvement**: Une courte promenade peut faire des merveilles
3. **Réflexion du soir**: Notez trois choses pour lesquelles vous êtes reconnaissant

### Il ne s'agit pas de perfection

Prendre soin de soi n'a pas besoin d'être parfait. Il s'agit de vous montrer de la compassion.`,
    },
    image: "/placeholder.svg",
    publishedAt: "2025-01-15",
  },
];
