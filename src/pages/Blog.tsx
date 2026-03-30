import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "como-aparecer-topo-google-maps",
    title: "Como Aparecer no Topo do Google Maps em 2025",
    excerpt:
      "Descubra as estratégias comprovadas para posicionar sua empresa no Top 1 do Google Maps e atrair clientes locais todos os dias. Aprenda sobre otimização de perfil, avaliações e palavras-chave locais.",
    category: "Google Maps",
    date: "28 Mar 2026",
    readTime: "5 min",
  },
  {
    slug: "seo-local-negocios-oeste-sc",
    title: "SEO Local: O Guia Definitivo para Negócios no Oeste de SC",
    excerpt:
      "Aprenda como otimizar sua presença online para dominar as buscas locais em Concórdia, Chapecó e região. Estratégias específicas para o mercado catarinense.",
    category: "SEO Local",
    date: "20 Mar 2025",
    readTime: "7 min",
  },
  {
    slug: "geo-inteligencia-artificial-negocios",
    title: "GEO: Como a Inteligência Artificial Está Mudando o Marketing Local",
    excerpt:
      "Entenda o que é Generative Engine Optimization e por que sua empresa precisa estar preparada para as buscas por IA. O futuro do SEO já chegou.",
    category: "GEO",
    date: "12 Mar 2025",
    readTime: "6 min",
  },
  {
    slug: "redes-sociais-negocios-locais",
    title: "Redes Sociais para Negócios Locais: Guia Prático 2025",
    excerpt:
      "Como usar Instagram, Facebook e WhatsApp Business para atrair clientes da sua região. Estratégias que funcionam para empresas no interior de SC.",
    category: "Redes Sociais",
    date: "5 Mar 2025",
    readTime: "8 min",
  },
  {
    slug: "site-profissional-pequenas-empresas",
    title: "Por Que Sua Empresa Precisa de um Site Profissional em 2025",
    excerpt:
      "Ainda depende só de redes sociais? Entenda por que um site próprio é essencial para credibilidade, SEO e conversão de clientes locais.",
    category: "Criação de Sites",
    date: "25 Fev 2025",
    readTime: "4 min",
  },
  {
    slug: "avaliacoes-google-importancia",
    title: "Avaliações no Google: Como Conseguir Mais Reviews e Subir no Ranking",
    excerpt:
      "As avaliações são o fator #1 para ranquear no Google Maps. Aprenda técnicas éticas para aumentar suas reviews e melhorar sua reputação online.",
    category: "Google Maps",
    date: "18 Fev 2025",
    readTime: "5 min",
  },
];

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
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)]"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {article.category}
                    </span>
                    <h2 className="mb-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                      {article.title}
                    </h2>
                    <p className="mb-4 flex-1 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>
                  </div>
                </article>
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
