import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { de, enUS } from "date-fns/locale";

const Blog = () => {
  const { language, t } = useLanguage();

  const getLocale = () => language === "de" ? de : enUS;

  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), "d. MMMM yyyy", { locale: getLocale() });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              {t("blog.title")}
            </h1>

            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow group">
                    <div className="flex flex-col md:flex-row">
                      {post.image && (
                        <div className="md:w-1/3 aspect-video md:aspect-square">
                          <img
                            src={post.image}
                            alt={`Blogbeitrag: ${post.title[language]}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <CardContent className="flex-1 p-6 flex flex-col justify-center">
                        <p className="text-sm text-muted-foreground mb-2">{formatDate(post.publishedAt)}</p>
                        <h2 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {post.title[language]}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt[language]}</p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Blog;
