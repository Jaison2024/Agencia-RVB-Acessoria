import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    slug: "como-aparecer-topo-google-maps",
    title: "Como Aparecer no Topo do Google Maps em 2025",
    excerpt: "Descubra as estratégias comprovadas para posicionar sua empresa no Top 1 do Google Maps e atrair clientes locais todos os dias.",
    category: "Google Maps",
    date: "28 Mar 2025",
    readTime: "5 min",
  },
  {
    slug: "seo-local-negocios-oeste-sc",
    title: "SEO Local: O Guia Definitivo para Negócios no Oeste de SC",
    excerpt: "Aprenda como otimizar sua presença online para dominar as buscas locais em Concórdia, Chapecó e região.",
    category: "SEO Local",
    date: "20 Mar 2025",
    readTime: "7 min",
  },
  {
    slug: "geo-inteligencia-artificial-negocios",
    title: "GEO: Como a Inteligência Artificial Está Mudando o Marketing Local",
    excerpt: "Entenda o que é Generative Engine Optimization e por que sua empresa precisa estar preparada para as buscas por IA.",
    category: "GEO",
    date: "12 Mar 2025",
    readTime: "6 min",
  },
];

const BlogSection = () => {
  const ref = useScrollReveal();

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
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
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
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Ver todos os artigos <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
