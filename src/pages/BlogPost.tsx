import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { AuthorBox } from "@/components/AuthorBox";


import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";
import { format, parseISO } from "date-fns";
import { de } from "date-fns/locale";
import DOMPurify from "dompurify";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), "d. MMMM yyyy", { locale: de });
  };

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ol key={`list-${elements.length}`} className="list-decimal list-inside space-y-2 my-4 text-muted-foreground" role="list">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </ol>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      const listMatch = trimmedLine.match(/^\d+\.\s+(.+)/);
      if (listMatch) {
        const processedItem = listMatch[1]
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-secondary font-medium underline underline-offset-2 decoration-secondary/40 hover:decoration-secondary transition-colors">$1</a>');
        listItems.push(processedItem);
        return;
      } else if (listItems.length > 0 && trimmedLine !== "") {
        flushList();
      }

      if (trimmedLine.startsWith("### ")) {
        flushList();
        elements.push(<h3 key={index} className="font-serif text-xl font-semibold text-foreground mt-8 mb-3">{trimmedLine.replace("### ", "")}</h3>);
      } else if (trimmedLine.startsWith("## ")) {
        flushList();
        elements.push(<h2 key={index} className="font-serif text-2xl font-semibold text-foreground mt-8 mb-3">{trimmedLine.replace("## ", "")}</h2>);
      } else if (trimmedLine.startsWith("> ")) {
        flushList();
        elements.push(
          <blockquote key={index} className="border-l-4 border-secondary pl-4 py-2 my-6 italic text-muted-foreground bg-muted/30 rounded-r">
            {trimmedLine.replace("> ", "")}
          </blockquote>
        );
      } else if (trimmedLine === "") {
        flushList();
      } else if (!trimmedLine.startsWith("#")) {
        flushList();
        const processedLine = trimmedLine
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-secondary font-medium underline underline-offset-2 decoration-secondary/40 hover:decoration-secondary transition-colors">$1</a>');
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(processedLine) }} />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title={`${post.title.de} | Jona Fels`} description={post.excerpt.de} image={post.image} type="article" />
      <Header />
      <main id="main-content" className="flex-1 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article>
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 min-h-[44px]">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t("blog.backToList")}
              </Link>

              {post.image && (
                <div className="aspect-video rounded-xl overflow-hidden mb-8">
                  <img src={post.image} alt={`Titelbild: ${post.title.de}`} className="w-full h-full object-cover" loading="lazy" decoding="async" fetchPriority="high" />
                </div>
              )}

              <header className="mb-8">
                <p className="text-sm text-muted-foreground mb-3">{formatDate(post.publishedAt)}</p>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">{post.title.de}</h1>
              </header>

              <div className="prose prose-lg max-w-none">{renderContent(post.content.de)}</div>

              <AuthorBox />
            </article>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default BlogPost;
