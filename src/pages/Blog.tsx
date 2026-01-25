import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { de, enUS, fr } from "date-fns/locale";

const Blog = () => {
  const { language, t } = useLanguage();

  const getLocale = () => {
    switch (language) {
      case "de":
        return de;
      case "fr":
        return fr;
      default:
        return enUS;
    }
  };

  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), "d. MMMM yyyy", { locale: getLocale() });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("blog.title")}
          </h1>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="bg-card/95 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="flex flex-col md:flex-row">
                    {post.image && (
                      <div className="md:w-1/3 aspect-video md:aspect-square">
                        <img
                          src={post.image}
                          alt={post.title[language]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="flex-1 p-6 flex flex-col justify-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        {formatDate(post.publishedAt)}
                      </p>
                      <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                        {post.title[language]}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt[language]}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Blog;
