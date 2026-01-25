import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";
import { format, parseISO } from "date-fns";
import { de, enUS, fr } from "date-fns/locale";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let inBlockquote = false;
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ol key={`list-${elements.length}`} className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ol>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle numbered lists
      const listMatch = trimmedLine.match(/^\d+\.\s+(.+)/);
      if (listMatch) {
        inList = true;
        // Handle bold text in list items
        const processedItem = listMatch[1].replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        listItems.push(processedItem);
        return;
      } else if (inList && trimmedLine !== "") {
        flushList();
      }

      // Handle headings
      if (trimmedLine.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      } else if (trimmedLine.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      }
      // Handle blockquotes
      else if (trimmedLine.startsWith("> ")) {
        flushList();
        elements.push(
          <blockquote
            key={index}
            className="border-l-4 border-secondary pl-4 py-2 my-6 italic text-muted-foreground bg-muted/30 rounded-r"
          >
            {trimmedLine.replace("> ", "")}
          </blockquote>
        );
      }
      // Handle empty lines
      else if (trimmedLine === "") {
        flushList();
        // Skip empty lines
      }
      // Handle regular paragraphs
      else if (!trimmedLine.startsWith("#") && !inList) {
        flushList();
        // Handle bold text
        const processedLine = trimmedLine.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        elements.push(
          <p
            key={index}
            className="text-muted-foreground leading-relaxed my-4"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("blog.backToList")}
          </Link>

          <article>
            {post.image && (
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <p className="text-sm text-muted-foreground mb-3">
              {formatDate(post.publishedAt)}
            </p>

            <div className="prose prose-lg max-w-none">
              {renderContent(post.content[language])}
            </div>
          </article>
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default BlogPost;
