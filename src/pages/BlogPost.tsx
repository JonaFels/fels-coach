import { useEffect, useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { AuthorBox } from "@/components/AuthorBox";
import { RelatedPosts } from "@/components/RelatedPosts";

import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts, clampMeta, slugify } from "@/data/blogPosts";
import { ArrowLeft, Clock, List } from "lucide-react";
import { format, parseISO } from "date-fns";
import { de } from "date-fns/locale";
import DOMPurify from "dompurify";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const post = blogPosts.find((p) => p.slug === slug);

  // Article JSON-LD pro Blogpost (dynamisch je Slug)
  useEffect(() => {
    if (!post) return;
    const url = `https://fels-coach.de/blog/${post.slug}`;
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title.de,
      description: post.metaDescription ?? post.excerpt.de,
      image: post.image
        ? `https://fels-coach.de${post.image.startsWith("/") ? "" : "/"}${post.image}`
        : undefined,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      inLanguage: "de",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      author: { "@type": "Person", name: "Jona Fels", url: "https://fels-coach.de/ueber-mich" },
      publisher: {
        "@type": "Organization",
        name: "Systemisches Coaching & Familienaufstellung",
        logo: { "@type": "ImageObject", url: "https://fels-coach.de/web-app-manifest-512x512.png" },
      },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [post]);

  // Optionales FAQPage-Schema – nur ausspielen wenn der Post FAQs definiert
  useEffect(() => {
    if (!post?.faq?.length) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-faq-schema", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [post]);

  // TOC + Lesezeit aus Content ableiten
  const { toc, readingTime } = useMemo(() => {
    if (!post) return { toc: [] as TocItem[], readingTime: 0 };
    const lines = post.content.de.split("\n");
    const tocItems: TocItem[] = [];
    const usedIds = new Set<string>();
    lines.forEach((raw) => {
      const line = raw.trim();
      let level: 2 | 3 | null = null;
      let text = "";
      if (line.startsWith("### ")) {
        level = 3;
        text = line.replace("### ", "");
      } else if (line.startsWith("## ")) {
        level = 2;
        text = line.replace("## ", "");
      }
      if (level && text) {
        let id = slugify(text);
        let i = 2;
        while (usedIds.has(id)) {
          id = `${slugify(text)}-${i++}`;
        }
        usedIds.add(id);
        tocItems.push({ id, text, level });
      }
    });
    const words = post.content.de.split(/\s+/).filter(Boolean).length;
    return { toc: tocItems, readingTime: Math.max(1, Math.round(words / 200)) };
  }, [post]);

  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (toc.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );
    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc, post]);

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
    let firstParagraphRendered = false;
    const usedIds = new Set<string>();
    const makeId = (text: string) => {
      let id = slugify(text);
      let i = 2;
      while (usedIds.has(id)) id = `${slugify(text)}-${i++}`;
      usedIds.add(id);
      return id;
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ol
            key={`list-${elements.length}`}
            className="list-decimal list-outside ml-6 space-y-3 my-8 text-foreground/85 marker:text-secondary/60 leading-[1.8] text-[1.075rem]"
            role="list"
          >
            {listItems.map((item, i) => (
              <li key={i} className="pl-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </ol>,
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      const imgMatch = trimmedLine.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imgMatch) {
        flushList();
        const altText = imgMatch[1].trim();
        const src = imgMatch[2].trim();
        if (!altText && import.meta.env.DEV) {
          console.warn(`[Blog] Bild ohne alt-Attribut: ${src}`);
        }
        elements.push(
          <figure key={index} className="my-14 -mx-4 sm:mx-0">
            <img
              src={src}
              alt={altText}
              className="w-full h-auto sm:rounded-2xl"
              loading="lazy"
              decoding="async"
            />
            {altText && (
              <figcaption className="mt-4 text-center text-xs text-muted-foreground italic px-4 tracking-wide">
                {altText}
              </figcaption>
            )}
          </figure>,
        );
        return;
      }

      const listMatch = trimmedLine.match(/^\d+\.\s+(.+)/);
      if (listMatch) {
        const processedItem = listMatch[1]
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(
            /\[(.+?)\]\((.+?)\)/g,
            '<a href="$2" class="text-secondary font-medium underline underline-offset-2 decoration-secondary/40 hover:decoration-secondary transition-colors">$1</a>',
          );
        listItems.push(processedItem);
        return;
      } else if (listItems.length > 0 && trimmedLine !== "") {
        flushList();
      }

      if (trimmedLine.startsWith("### ")) {
        flushList();
        const text = trimmedLine.replace("### ", "");
        const id = makeId(text);
        elements.push(
          <h3
            key={index}
            id={id}
            className="font-serif text-xl md:text-2xl font-semibold text-foreground mt-14 mb-4 scroll-mt-24 leading-snug"
          >
            {text}
          </h3>,
        );
      } else if (trimmedLine.startsWith("## ")) {
        flushList();
        const text = trimmedLine.replace("## ", "");
        const id = makeId(text);
        elements.push(
          <h2
            key={index}
            id={id}
            className="font-serif text-2xl md:text-[2rem] font-semibold text-foreground mt-20 mb-6 scroll-mt-24 leading-[1.2] relative pl-5 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:bg-secondary/50 before:rounded-full"
          >
            {text}
          </h2>,
        );
      } else if (trimmedLine.startsWith("> ")) {
        flushList();
        elements.push(
          <blockquote
            key={index}
            className="my-12 px-6 md:px-8 py-6 border-l-2 border-secondary/60 bg-muted/40 rounded-r-xl font-serif text-xl md:text-2xl italic text-foreground/85 leading-[1.5]"
          >
            {trimmedLine.replace("> ", "")}
          </blockquote>,
        );
      } else if (trimmedLine === "") {
        flushList();
      } else if (!trimmedLine.startsWith("#")) {
        flushList();
        const processedLine = trimmedLine
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(
            /\[(.+?)\]\((.+?)\)/g,
            '<a href="$2" class="text-secondary font-medium underline underline-offset-2 decoration-secondary/40 hover:decoration-secondary transition-colors">$1</a>',
          );
        const isFirst = !firstParagraphRendered;
        firstParagraphRendered = true;
        elements.push(
          <p
            key={index}
            className={`text-foreground/85 leading-[1.85] my-7 text-[1.075rem] md:text-[1.1rem] ${
              isFirst
                ? "first-letter:font-serif first-letter:text-6xl md:first-letter:text-7xl first-letter:font-semibold first-letter:text-secondary first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-[0.9]"
                : ""
            }`}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(processedLine) }}
          />,
        );
      }
    });

    flushList();
    return elements;

  };

  const metaTitle = clampMeta(post.metaTitle ?? `${post.title.de} | Jona Fels`, 60);
  const metaDescription = clampMeta(post.metaDescription ?? post.excerpt.de, 150);
  const imageAlt = post.imageAlt?.trim() || `Titelbild: ${post.title.de}`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title={metaTitle} description={metaDescription} image={post.image} type="article" />
      <Header />
      <main id="main-content" className="flex-1 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 md:mb-14 min-h-[44px] text-sm"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t("blog.backToList")}
            </Link>

            <header className="mb-14 md:mb-20 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-secondary/80 font-medium mb-6">
                Journal
              </p>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-[3.25rem] font-semibold text-foreground leading-[1.1] mb-7 tracking-tight">
                {post.title.de}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-[1.55] mb-8 font-serif italic">
                {post.excerpt.de}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground border-t border-border/60 pt-6">
                <span className="font-medium text-foreground">Jona Fels</span>
                <span className="text-border">·</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {readingTime} Min Lesezeit
                </span>
              </div>
            </header>

            {post.image && (
              <figure className="mb-16 md:mb-20 max-w-4xl">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={post.image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </figure>
            )}

            <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16 xl:gap-24">
              <article className="max-w-[680px]">
                <div className="prose-content">{renderContent(post.content.de)}</div>
                <div className="mt-16 md:mt-20">
                  <AuthorBox />
                </div>
              </article>


              {toc.length > 1 && (
                <aside className="hidden lg:block" aria-label="Inhaltsverzeichnis">
                  <div className="sticky top-28">
                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium mb-4">
                      <List className="h-3.5 w-3.5" aria-hidden="true" />
                      In diesem Artikel
                    </p>
                    <nav>
                      <ul className="space-y-2.5 text-sm border-l border-border/60">
                        {toc.map((item) => {
                          const isActive = activeId === item.id;
                          return (
                            <li
                              key={item.id}
                              className={item.level === 3 ? "pl-6" : "pl-4"}
                            >
                              <a
                                href={`#${item.id}`}
                                className={`block -ml-px border-l-2 pl-3 py-1 leading-snug transition-colors ${
                                  isActive
                                    ? "border-secondary text-foreground font-medium"
                                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                                }`}
                              >
                                {item.text}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                </aside>
              )}
            </div>

            <div className="max-w-3xl">
              <RelatedPosts currentSlug={post.slug} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default BlogPost;
