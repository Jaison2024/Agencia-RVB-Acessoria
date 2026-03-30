import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Globe, Zap, Search, Smartphone, PenTool, BarChart3, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Design Mobile-First",
    description: "Sites projetados primeiro para celular — onde 80% dos seus clientes estão navegando.",
  },
  {
    icon: Zap,
    title: "Velocidade Máxima",
    description: "Carregamento em menos de 2 segundos. Sites lentos perdem clientes e posições no Google.",
  },
  {
    icon: Search,
    title: "SEO Técnico On-Page",
    description: "Arquitetura de URLs, meta tags, heading hierarchy e schema markup integrados desde o início.",
  },
  {
    icon: PenTool,
    title: "Blog Estratégico",
    description: "Estrutura de blog otimizada para capturar buscas orgânicas e posicionar você como autoridade.",
  },
  {
    icon: BarChart3,
    title: "Foco em Conversão",
    description: "CTAs estratégicos, formulários otimizados e integração com WhatsApp para converter visitantes em clientes.",
  },
  {
    icon: Globe,
    title: "Preparado para IAs",
    description: "Dados estruturados (Schema JSON-LD) para que IAs como Google AI e ChatGPT recomendem seu negócio.",
  },
];

const comparisons = [
  { feature: "Velocidade de carregamento", common: "5-10 segundos", rvb: "Menos de 2 segundos" },
  { feature: "SEO técnico", common: "Básico ou inexistente", rvb: "Arquitetura completa" },
  { feature: "Responsividade", common: "Adaptado depois", rvb: "Mobile-First nativo" },
  { feature: "Schema Markup (GEO)", common: "Não implementado", rvb: "JSON-LD avançado" },
  { feature: "Blog integrado", common: "Opcional e genérico", rvb: "Estratégico com SEO" },
];

const CriacaoSitesPage = () => {
  const heroRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const compRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_70%)]" />
          <div className="section-fade-in container relative" ref={heroRef}>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <Globe size={16} /> High-Performance Web
              </span>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Sites profissionais que{" "}
                <span className="text-gradient">vendem de verdade</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Um site bonito que não aparece no Google é apenas um cartão de visitas caro. Criamos sites com design premium, velocidade extrema e SEO agressivo para transformar visitantes em clientes reais em Concórdia, Chapecó e região.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="glow-border text-base font-bold" asChild>
                  <a href="https://wa.me/5500000000000?text=Quero%20um%20site%20profissional" target="_blank" rel="noopener noreferrer">
                    Quero um Site que Vende
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold" asChild>
                  <a href="/#solucoes">Ver todos os serviços</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={featuresRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">O que entregamos</p>
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
                Sites construídos para <span className="text-gradient">performance</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="group rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(152_100%_50%/0.08)]">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                    <f.icon size={26} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
          <div className="section-fade-in container" ref={compRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Comparativo</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Site comum vs. <span className="text-gradient">Site RVB</span>
              </h2>
            </div>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border/50">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/50 bg-card">
                    <th className="p-4 text-sm font-semibold text-muted-foreground">Característica</th>
                    <th className="p-4 text-sm font-semibold text-muted-foreground">Sites Comuns</th>
                    <th className="p-4 text-sm font-semibold text-primary">RVB Assessoria</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((c) => (
                    <tr key={c.feature} className="border-b border-border/30 last:border-0">
                      <td className="p-4 text-sm font-medium">{c.feature}</td>
                      <td className="p-4 text-sm text-muted-foreground">{c.common}</td>
                      <td className="p-4 text-sm font-semibold text-primary">{c.rvb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={ctaRef}>
            <div className="mx-auto max-w-2xl rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center md:p-14">
              <CheckCircle2 className="mx-auto mb-4 text-primary" size={40} />
              <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
                Pronto para ter um site que converte?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Solicite um orçamento e descubra como um site de alta performance pode transformar seu negócio local.
              </p>
              <Button size="lg" className="glow-border text-base font-bold" asChild>
                <a href="https://wa.me/5500000000000?text=Quero%20um%20orçamento%20de%20site" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CriacaoSitesPage;
