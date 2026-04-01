import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getArticleBySlug, formatDate, blogArticles } from "@/data/blogArticles";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import BlogArticleIcon from "@/components/BlogArticleIcon";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const ref = useScrollReveal();
  const article = getArticleBySlug(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex min-h-[60vh] items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold">Artigo não encontrado</h1>
            <p className="mb-6 text-muted-foreground">O artigo que você procura não existe.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ArrowLeft size={16} /> Voltar ao Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "RVB Assessoria",
      url: "https://rvbassessoria.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "RVB Assessoria",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rvbassessoria.com.br/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Meta tags via document.title */}
      {(() => {
        document.title = `${article.title} | RVB Assessoria`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", article.metaDescription);
        return null;
      })()}

      <main className="pt-20 md:pt-24">
        <article ref={ref} className="fade-section">
          {/* Breadcrumb */}
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="transition-colors hover:text-primary">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground">{article.category}</span>
            </nav>
          </div>

          {/* Header */}
          <div className="container pb-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <BlogArticleIcon iconName={article.icon} gradientClass={article.iconBg} size="lg" />
                <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  {article.category}
                </span>
              </div>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {article.readTime} de leitura
                </span>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="container pb-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                  Neste artigo
                </h2>
                <ul className="space-y-2">
                  {article.headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        → {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container pb-16">
            <div className="prose prose-invert mx-auto max-w-3xl prose-headings:text-foreground prose-headings:font-extrabold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:border-border/50 prose-th:text-foreground prose-td:text-muted-foreground">
              {article.content.map((section, i) => {
                const headingId = article.headings[i]?.id;
                return (
                  <div key={i} id={headingId} className="scroll-mt-24" dangerouslySetInnerHTML={{ __html: markdownToHtml(section) }} />
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="container pb-16">
            <div className="mx-auto max-w-3xl rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
              <h3 className="mb-2 text-xl font-bold">Quer resultados como esses para sua empresa?</h3>
              <p className="mb-6 text-muted-foreground">
                Solicite um diagnóstico gratuito da sua presença digital e descubra como dominar seu mercado local.
              </p>
              <a
                href="https://wa.me/5549999999999?text=Olá!%20Vim%20do%20blog%20e%20gostaria%20de%20um%20diagnóstico%20gratuito."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              >
                Diagnóstico Gratuito
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="container pb-16">
            <div className="mx-auto flex max-w-3xl items-stretch gap-4">
              {prevArticle ? (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="flex flex-1 flex-col rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-primary/40"
                >
                  <span className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <ArrowLeft size={12} /> Anterior
                  </span>
                  <span className="text-sm font-semibold leading-tight">{prevArticle.title}</span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextArticle ? (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="flex flex-1 flex-col items-end rounded-xl border border-border/50 bg-card p-5 text-right transition-all hover:border-primary/40"
                >
                  <span className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                    Próximo <ArrowRight size={12} />
                  </span>
                  <span className="text-sm font-semibold leading-tight">{nextArticle.title}</span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

/** Simple markdown-to-HTML converter for blog content */
function markdownToHtml(md: string): string {
  return md
    // Tables
    .replace(/\n\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)+)/g, (_match, header, body) => {
      const ths = header.split("|").filter(Boolean).map((h: string) => `<th>${h.trim()}</th>`).join("");
      const rows = body.trim().split("\n").map((row: string) => {
        const tds = row.split("|").filter(Boolean).map((d: string) => `<td>${d.trim()}</td>`).join("");
        return `<tr>${tds}</tr>`;
      }).join("");
      return `<table><thead><tr>${ths}</tr></thead><tbody>${rows}</tbody></table>`;
    })
    // Headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
    // Ordered lists
    .replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/^(?!<[hulbtq])((?!<).+)$/gm, '<p>$1</p>')
    // Clean up
    .replace(/<\/blockquote>\n<blockquote>/g, '<br/>');
}

export default BlogArticle;
