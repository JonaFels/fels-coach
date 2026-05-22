import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

/**
 * Manuell kuratiertes Mapping: pro Artikel-Slug die 3 thematisch passendsten
 * weiteren Artikel. So bleibt die Logik vorhersehbar und SEO-relevant
 * (Topical Cluster), ohne dass wir Tags pflegen müssen.
 */
const RELATED_MAP: Record<string, string[]> = {
  "familienstellen-in-einer-einzelsitzung": [
    "von-freud-bis-hellinger-woher-das-familienstellen-kommt",
    "das-wissende-feld-wahrnehmung-beim-familienstellen",
    "gefangen-im-alten-drehbuch-warum-das-glueck-oft-ausbleibt",
  ],
  "von-freud-bis-hellinger-woher-das-familienstellen-kommt": [
    "das-wissende-feld-wahrnehmung-beim-familienstellen",
    "familienstellen-in-einer-einzelsitzung",
    "wahres-selbst-finden-familiaere-praegung-loesen",
  ],
  "das-wissende-feld-wahrnehmung-beim-familienstellen": [
    "familienstellen-in-einer-einzelsitzung",
    "von-freud-bis-hellinger-woher-das-familienstellen-kommt",
    "gefangen-im-alten-drehbuch-warum-das-glueck-oft-ausbleibt",
  ],
  "gefangen-im-alten-drehbuch-warum-das-glueck-oft-ausbleibt": [
    "wahres-selbst-finden-familiaere-praegung-loesen",
    "fremdbestimmt-oder-frei-umfeld-wahres-ich",
    "im-meerestraum-gefangen",
  ],
  "wahres-selbst-finden-familiaere-praegung-loesen": [
    "warum-bin-ich-nicht-ich-selbst-suche-nach-dem-wahren-ich",
    "fremdbestimmt-oder-frei-umfeld-wahres-ich",
    "im-meerestraum-gefangen",
  ],
  "warum-bin-ich-nicht-ich-selbst-suche-nach-dem-wahren-ich": [
    "fremdbestimmt-oder-frei-umfeld-wahres-ich",
    "wahres-selbst-finden-familiaere-praegung-loesen",
    "im-meerestraum-gefangen",
  ],
  "fremdbestimmt-oder-frei-umfeld-wahres-ich": [
    "wahres-selbst-finden-familiaere-praegung-loesen",
    "warum-bin-ich-nicht-ich-selbst-suche-nach-dem-wahren-ich",
    "im-meerestraum-gefangen",
  ],
  "warum-nicht-ueber-vergangenes-reden-im-vorgespraech": [
    "familienstellen-in-einer-einzelsitzung",
    "gefangen-im-alten-drehbuch-warum-das-glueck-oft-ausbleibt",
    "wahres-selbst-finden-familiaere-praegung-loesen",
  ],
  "im-meerestraum-gefangen": [
    "wahres-selbst-finden-familiaere-praegung-loesen",
    "warum-bin-ich-nicht-ich-selbst-suche-nach-dem-wahren-ich",
    "gefangen-im-alten-drehbuch-warum-das-glueck-oft-ausbleibt",
  ],
};

interface RelatedPostsProps {
  currentSlug: string;
}

export const RelatedPosts = ({ currentSlug }: RelatedPostsProps) => {
  const relatedSlugs = RELATED_MAP[currentSlug] ?? [];
  const related = relatedSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <aside
      aria-labelledby="related-posts-heading"
      className="mt-16 pt-10 border-t border-border/60"
    >
      <h2
        id="related-posts-heading"
        className="font-serif text-2xl font-semibold text-foreground mb-6 text-center"
      >
        Das könnte dich auch interessieren
      </h2>

      <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block h-full bg-card rounded-2xl border border-border/60 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title.de}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold text-foreground leading-snug mb-2 group-hover:text-secondary transition-colors">
                  {post.title.de}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.excerpt.de}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-secondary font-medium mt-3">
                  Weiterlesen
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
