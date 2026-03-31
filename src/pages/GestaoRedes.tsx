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
import { Instagram, Camera, Calendar, TrendingUp, Users, Palette, CheckCircle2, Heart, Eye, Megaphone } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Conteúdo Estratégico",
    description: "Posts, stories e reels planejados com foco em gerar confiança e atrair o público certo para o seu negócio.",
  },
  {
    icon: Palette,
    title: "Design Premium",
    description: "Identidade visual profissional que tira a cara de 'perfil abandonado' e transmite autoridade imediata.",
  },
  {
    icon: Calendar,
    title: "Calendário Editorial",
    description: "Frequência consistente de publicações para manter seu perfil sempre ativo e relevante para o algoritmo.",
  },
  {
    icon: TrendingUp,
    title: "Análise de Métricas",
    description: "Relatórios mensais com insights sobre o que funciona e ajustes data-driven para maximizar resultados.",
  },
  {
    icon: Users,
    title: "Engajamento e Comunidade",
    description: "Estratégias para aumentar interações genuínas e construir uma audiência fiel à sua marca.",
  },
  {
    icon: Instagram,
    title: "Integração Google + Social",
    description: "Alinhamento entre o que o cliente vê no Instagram e o que encontra no Google, criando confiança total.",
  },
];

const problems = [
  "Perfil sem posts há semanas ou meses",
  "Visual amador que afasta clientes",
  "Sem estratégia: postando 'qualquer coisa'",
  "Concorrentes ganhando espaço online",
  "Clientes encontram você no Google mas veem um perfil abandonado",
];

const process = [
  { number: "01", title: "Diagnóstico do Perfil", description: "Analisamos seu perfil atual, identificamos pontos fracos e mapeamos o que seus concorrentes estão fazendo." },
  { number: "02", title: "Estratégia & Calendário", description: "Definimos pilares de conteúdo, tom de voz e criamos um calendário editorial mensal sob medida." },
  { number: "03", title: "Produção & Publicação", description: "Criamos os conteúdos (design + copy), aprovamos com você e publicamos nos melhores horários." },
  { number: "04", title: "Análise & Evolução", description: "Todo mês analisamos métricas, ajustamos a estratégia e apresentamos relatório de resultados." },
];

const faqs = [
  {
    question: "Quantos posts por mês estão inclusos?",
    answer: "Nossos planos variam de 12 a 20 posts mensais, incluindo carrosséis, reels e stories. Definimos a frequência ideal no briefing estratégico, considerando seu segmento e objetivos.",
  },
  {
    question: "Vocês criam os textos e as artes?",
    answer: "Sim! A produção é completa: pesquisa, copywriting persuasivo, design profissional e agendamento. Você só precisa aprovar antes da publicação.",
  },
  {
    question: "Preciso fornecer fotos e vídeos?",
    answer: "Fotos e vídeos reais do seu negócio geram muito mais resultado. Orientamos você sobre o que capturar e, se necessário, indicamos fotógrafos parceiros na região.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Os primeiros sinais de engajamento aparecem em 30 dias. Resultados consistentes em seguidores, alcance e mensagens de clientes potenciais surgem a partir de 60-90 dias de trabalho contínuo.",
  },
  {
    question: "Vocês gerenciam apenas Instagram?",
    answer: "Nosso foco principal é Instagram por ser a rede mais relevante para negócios locais. Mas também trabalhamos com Facebook e Google Meu Negócio de forma integrada.",
  },
];

const GestaoRedesPage = () => {
  const heroRef = useScrollReveal();
  const problemRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const processRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => {
    document.title = "Gestão de Redes Sociais em Concórdia e Chapecó | RVB Assessoria";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Gestão profissional de redes sociais para empresas de Concórdia, Chapecó e Oeste de SC. Conteúdo estratégico, design premium e resultados reais.");
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Gestão de Redes Sociais — Social Recovery",
      provider: {
        "@type": "ProfessionalService",
        name: "RVB Assessoria",
        areaServed: [
          { "@type": "City", name: "Concórdia" },
          { "@type": "City", name: "Chapecó" },
          { "@type": "City", name: "Ipumirim" },
        ],
      },
      description: "Serviço de gestão profissional de redes sociais com conteúdo estratégico, design premium e foco em resultados para negócios locais.",
      serviceType: "Social Media Management",
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
                <Instagram size={16} /> Social Recovery
              </span>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Redes sociais paradas?{" "}
                <span className="text-gradient">Nós reativamos.</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Um perfil abandonado transmite insegurança e afasta clientes. Transformamos suas redes sociais em uma vitrine de autoridade com conteúdo estratégico, design premium e frequência que gera confiança imediata.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="glow-border text-base font-bold" asChild>
                  <a href="https://wa.me/5500000000000?text=Quero%20reativar%20minhas%20redes%20sociais" target="_blank" rel="noopener noreferrer">
                    Reativar Minhas Redes
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold" asChild>
                  <a href="/#solucoes">Ver todos os serviços</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-border/50 bg-card/30 py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              {[
                { icon: Heart, value: "3.5x", label: "Mais engajamento com conteúdo estratégico" },
                { icon: Eye, value: "80%", label: "Dos consumidores pesquisam redes antes de comprar" },
                { icon: Megaphone, value: "12-20", label: "Posts profissionais por mês" },
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

        {/* Problem */}
        <section className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={problemRef}>
            <div className="mx-auto max-w-3xl">
              <div className="mb-14 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">O Problema</p>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                  Se identificou com algum <span className="text-gradient">desses cenários?</span>
                </h2>
              </div>
              <div className="space-y-4">
                {problems.map((p) => (
                  <div key={p} className="flex items-center gap-4 rounded-xl border border-destructive/20 bg-destructive/5 p-5">
                    <span className="text-xl">⚠️</span>
                    <p className="font-medium">{p}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-lg text-muted-foreground">
                Se algum desses pontos é a sua realidade, a <strong className="text-primary">Social Recovery</strong> da RVB foi feita para você.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
          <div className="section-fade-in container" ref={servicesRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">O que fazemos</p>
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
                Gestão completa de <span className="text-gradient">redes sociais</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Da estratégia ao design, do calendário aos relatórios. Cuidamos de tudo para que você foque no que faz de melhor: atender seus clientes.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="group rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(152_100%_50%/0.08)]">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                    <s.icon size={26} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={processRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Nosso Processo</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Do perfil parado ao <span className="text-gradient">perfil que vende</span>
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

        {/* FAQ */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
          <div className="section-fade-in container" ref={faqRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Dúvidas Frequentes</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Perguntas sobre <span className="text-gradient">Gestão de Redes</span>
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
                Chega de perfil parado.
              </h2>
              <p className="mb-8 text-muted-foreground">
                Entre em contato e descubra como reativar suas redes sociais com estratégia e design profissional.
              </p>
              <Button size="lg" className="glow-border text-base font-bold" asChild>
                <a href="https://wa.me/5500000000000?text=Quero%20reativar%20minhas%20redes%20sociais" target="_blank" rel="noopener noreferrer">
                  Falar com um Especialista
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

export default GestaoRedesPage;