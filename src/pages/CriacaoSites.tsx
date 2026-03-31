import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe, Zap, Search, Smartphone, PenTool, BarChart3, CheckCircle2, Clock, Eye, MousePointerClick } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Design Mobile-First",
    description: "Sites projetados primeiro para celular — onde 80% dos seus clientes estão navegando. Experiência impecável em qualquer tela.",
  },
  {
    icon: Zap,
    title: "Velocidade Máxima",
    description: "Carregamento em menos de 2 segundos. Sites lentos perdem 53% dos visitantes e posições no Google.",
  },
  {
    icon: Search,
    title: "SEO Técnico On-Page",
    description: "Arquitetura de URLs, meta tags, heading hierarchy e schema markup integrados desde o primeiro dia.",
  },
  {
    icon: PenTool,
    title: "Blog Estratégico",
    description: "Estrutura de blog otimizada para capturar buscas orgânicas e posicionar você como autoridade no seu segmento.",
  },
  {
    icon: BarChart3,
    title: "Foco em Conversão",
    description: "CTAs estratégicos, formulários otimizados e integração com WhatsApp para converter visitantes em clientes reais.",
  },
  {
    icon: Globe,
    title: "Preparado para IAs",
    description: "Dados estruturados (Schema JSON-LD) para que IAs como Google AI, Perplexity e ChatGPT recomendem seu negócio.",
  },
];

const comparisons = [
  { feature: "Velocidade de carregamento", common: "5-10 segundos", rvb: "Menos de 2 segundos" },
  { feature: "SEO técnico", common: "Básico ou inexistente", rvb: "Arquitetura completa" },
  { feature: "Responsividade", common: "Adaptado depois", rvb: "Mobile-First nativo" },
  { feature: "Schema Markup (GEO)", common: "Não implementado", rvb: "JSON-LD avançado" },
  { feature: "Blog integrado", common: "Opcional e genérico", rvb: "Estratégico com SEO" },
  { feature: "Integração WhatsApp", common: "Link simples", rvb: "CTA inteligente com mensagem pré-preenchida" },
];

const process = [
  { number: "01", title: "Briefing Estratégico", description: "Entendemos seu negócio, público, concorrentes e objetivos para definir a melhor estratégia de conversão." },
  { number: "02", title: "Wireframe & Design", description: "Criamos o layout com foco em UX e conversão, usando a identidade visual da sua marca." },
  { number: "03", title: "Desenvolvimento", description: "Codificamos com tecnologias modernas, garantindo velocidade, SEO técnico e responsividade perfeita." },
  { number: "04", title: "Lançamento & Otimização", description: "Publicamos, configuramos analytics e fazemos ajustes baseados em dados reais de performance." },
];

const faqs = [
  {
    question: "Quanto tempo leva para criar o site?",
    answer: "Um site institucional completo leva em média 15 a 25 dias úteis, dependendo da complexidade e do volume de conteúdo. Sites com blog e funcionalidades extras podem levar até 40 dias.",
  },
  {
    question: "Vocês usam WordPress ou qual plataforma?",
    answer: "Trabalhamos com tecnologias modernas como React e Next.js que oferecem velocidade superior, melhor SEO e mais segurança que plataformas tradicionais como WordPress. Seu site será mais rápido e mais difícil de hackear.",
  },
  {
    question: "O site vai aparecer no Google automaticamente?",
    answer: "Sim, todos os nossos sites já nascem otimizados para SEO. Mas 'aparecer' e 'dominar' são coisas diferentes. Para dominar as buscas, recomendamos combinar o site com nossa estratégia de SEO Local e Google Maps.",
  },
  {
    question: "Posso atualizar o conteúdo do site sozinho?",
    answer: "Sim! Entregamos o site com uma área administrativa intuitiva ou, se preferir, cuidamos das atualizações no plano de manutenção mensal.",
  },
  {
    question: "Vocês fazem sites para qualquer segmento?",
    answer: "Somos especializados em negócios locais da região Oeste de SC: clínicas, restaurantes, escritórios, lojas, prestadores de serviço. Conhecemos o mercado e sabemos o que converte.",
  },
];

const CriacaoSitesPage = () => {
  const heroRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const processRef = useScrollReveal();
  const compRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => {
    document.title = "Criação de Sites Profissionais em Concórdia e Chapecó | RVB Assessoria";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Sites profissionais com SEO, velocidade máxima e foco em conversão para empresas de Concórdia, Chapecó e Oeste de SC. Design premium e tecnologia moderna.");
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Criação de Sites de Alta Performance",
      provider: {
        "@type": "ProfessionalService",
        name: "RVB Assessoria",
        areaServed: [
          { "@type": "City", name: "Concórdia" },
          { "@type": "City", name: "Chapecó" },
          { "@type": "City", name: "Ipumirim" },
        ],
      },
      description: "Criação de sites profissionais com design mobile-first, SEO técnico, velocidade extrema e foco total em conversão para negócios locais.",
      serviceType: "Web Design / Desenvolvimento de Sites",
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.text = JSON.stringify(schema);
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.text = JSON.stringify(faqSchema);
    document.head.appendChild(s2);

    return () => {
      document.head.removeChild(s1);
      document.head.removeChild(s2);
    };
  }, []);

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
                  <a href="https://wa.me/5500000000000?text=Quero%20um%20site%20profissional%20para%20meu%20negócio" target="_blank" rel="noopener noreferrer">
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

        {/* Stats bar */}
        <section className="border-t border-border/50 bg-card/30 py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              {[
                { icon: Clock, value: "<2s", label: "Tempo de carregamento" },
                { icon: Eye, value: "100%", label: "Responsivo em todas as telas" },
                { icon: MousePointerClick, value: "+300%", label: "Mais conversões vs. sites comuns" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <s.icon className="mb-2 text-primary" size={28} />
                  <p className="text-3xl font-extrabold text-primary md:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
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
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Cada detalhe é pensado para que seu site não seja apenas bonito, mas uma máquina de gerar clientes.
              </p>
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

        {/* Process */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
          <div className="section-fade-in container" ref={processRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Nosso Processo</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Da ideia ao <span className="text-gradient">site no ar</span>
              </h2>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8">
              {process.map((s) => (
                <div key={s.number} className="flex items-start gap-6">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl font-extrabold text-primary">{s.number}</span>
                  <div>
                    <h3 className="mb-1 text-xl font-bold">{s.title}</h3>
                    <p className="text-muted-foreground">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-t border-border/50 py-20 md:py-28">
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

        {/* FAQ */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
          <div className="section-fade-in container" ref={faqRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Dúvidas Frequentes</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Perguntas sobre <span className="text-gradient">Criação de Sites</span>
              </h2>
            </div>
            <div className="mx-auto max-w-2xl">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border/50 bg-card px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                Solicite um orçamento sem compromisso e descubra como um site de alta performance pode transformar seu negócio local.
              </p>
              <Button size="lg" className="glow-border text-base font-bold" asChild>
                <a href="https://wa.me/5500000000000?text=Quero%20um%20orçamento%20para%20criação%20de%20site" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">Sem compromisso. Resposta em até 24h.</p>
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