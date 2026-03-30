import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogArticles, formatDate } from "@/data/blogArticles";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const ref = useScrollReveal();
  const posts = blogArticles.slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28">
      <div ref={ref} className="container fade-section">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Blog
          </span>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Conteúdo que{" "}
            <span className="text-primary">gera resultado</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Artigos práticos sobre SEO local, Google Maps e estratégias digitais
            para negócios da região Oeste de SC.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)]"
            >
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {post.category}
                </span>
                <h3 className="mb-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Ver todos os artigos <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
