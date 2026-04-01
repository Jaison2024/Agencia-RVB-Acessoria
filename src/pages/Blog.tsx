import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { blogArticles, formatDate } from "@/data/blogArticles";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import BlogArticleIcon from "@/components/BlogArticleIcon";

const Blog = () => {
  const ref = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div ref={ref} className="container fade-section">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                Blog
              </span>
              <h1 className="text-3xl font-extrabold md:text-5xl">
                Artigos sobre{" "}
                <span className="text-primary">Marketing Local</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Conteúdo prático sobre SEO local, Google Maps, GEO e estratégias
                digitais para negócios do Oeste de SC.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)]"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <BlogArticleIcon iconName={article.icon} gradientClass={article.iconBg} />
                      <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="mb-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                      {article.title}
                    </h2>
                    <p className="mb-4 flex-1 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
