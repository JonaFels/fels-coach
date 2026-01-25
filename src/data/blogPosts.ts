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

// Füge hier deine eigenen Blog-Artikel hinzu:
// Beispiel:
// {
//   id: "1",
//   slug: "mein-erster-artikel",
//   title: {
//     de: "Mein erster Artikel",
//     en: "My first article",
//     fr: "Mon premier article",
//   },
//   excerpt: {
//     de: "Kurze Beschreibung...",
//     en: "Short description...",
//     fr: "Brève description...",
//   },
//   content: {
//     de: "Vollständiger Artikeltext...",
//     en: "Full article text...",
//     fr: "Texte complet de l'article...",
//   },
//   image: "/placeholder.svg",
//   publishedAt: "2025-01-25",
// },
export const blogPosts: BlogPost[] = [];
