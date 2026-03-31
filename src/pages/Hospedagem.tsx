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
import { Zap, Shield, Wrench, Mail, Bot, Server, CheckCircle2, ArrowRight, Crown } from "lucide-react";

const features = [
  {
    icon: Zap,
    emoji: "⚡",
    title: "Ultra Velocidade (SSD/NVMe)",
    description: "Hospedagem em servidores KVM de alta performance. Carregamento instantâneo que o Google ama e o seu cliente agradece.",
  },
  {
    icon: Shield,
    emoji: "🔒",
    title: "Segurança Blindada",
    description: "Certificado SSL (o cadeado verde) incluso, monitoramento contra ataques e backups diários automáticos.",
  },
  {
    icon: Wrench,
    emoji: "🛠️",
    title: "Manutenção Ativa",
    description: "Nós cuidamos de todas as atualizações de sistema e segurança. Seu site nunca fica \"velho\" ou vulnerável.",
  },
  {
    icon: Mail,
    emoji: "📧",
    title: "E-mails Profissionais",
    description: "Contas personalizadas (voce@suaempresa.com.br) para passar autoridade imediata.",
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "SEO & GEO Ready",
    description: "Configurações de servidor otimizadas para que robôs de busca e IAs indexem seu conteúdo com prioridade.",
  },
  {
    icon: Server,
    emoji: "🖥️",
    title: "Uptime 99.9%",
    description: "Monitoramento 24/7. Se algo sair do ar, sabemos antes de você — e resolvemos na hora.",
  },
];

const planEssencial = [
  "Site Profissional High-End",
  "Hospedagem de Alta Performance",
  "Suporte Técnico Local",
  "Backups e Segurança",
  "Certificado SSL Incluso",
  "E-mails Profissionais",
];

const planDominio = [
  "Tudo do plano Essencial",
  "Gestão de Google Maps (Foco Top 1)",
  "SEO Avançado e Gestão de Blog",
  "Reativação de Redes Sociais",
  "Relatórios Mensais de Performance",
  "Suporte Prioritário via WhatsApp",
];

const stats = [
  { value: "53%", label: "dos visitantes abandonam sites que demoram mais de 3s" },
  { value: "99.9%", label: "de uptime garantido nos nossos servidores" },
  { value: "3x", label: "mais chances de ranquear com site rápido" },
];

const faqs = [
  {
    question: "O que está incluso na hospedagem?",
    answer: "Espaço em SSD/NVMe de alta performance, certificado SSL, backups diários, monitoramento 24/7, atualizações de sistema, suporte técnico e e-mails profissionais personalizados.",
  },
  {
    question: "Posso migrar meu site atual para a RVB?",
    answer: "Sim! Fazemos a migração completa sem custo adicional e sem tempo de inatividade. Cuidamos de tudo: arquivos, banco de dados, DNS e e-mails.",
  },
  {
    question: "O que acontece se meu site for hackeado?",
    answer: "Com nossa segurança ativa, as chances são mínimas. Mas se acontecer, restauramos o backup mais recente e aplicamos as correções necessárias sem custo extra.",
  },
  {
    question: "Qual a diferença entre hospedagem comum e a da RVB?",
    answer: "Hospedagens baratas usam servidores compartilhados lentos. Nós usamos servidores KVM com SSD NVMe dedicados, otimizados para SEO e com configurações específicas para que IAs e buscadores indexem seu conteúdo com prioridade.",
  },
  {
    question: "Vocês oferecem suporte técnico?",
    answer: "Sim, suporte direto via WhatsApp com a equipe RVB. Sem robôs, sem fila. Atendimento humano e local, de quem entende o seu negócio.",
  },
];

const HospedagemPage = () => {
  const heroRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const plansRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => {
    document.title = "Hospedagem Cloud e Manutenção de Sites | RVB Assessoria";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Hospedagem de alta performance com SSD/NVMe, SSL, backups diários e manutenção ativa. Infraestrutura otimizada para SEO e IA em Concórdia, Chapecó e Oeste de SC.");
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Hospedagem Cloud e Manutenção de Sites",
      provider: {
        "@type": "ProfessionalService",
        name: "RVB Assessoria",
        areaServed: [
          { "@type": "City", name: "Concórdia" },
          { "@type": "City", name: "Chapecó" },
          { "@type": "City", name: "Ipumirim" },
        ],
      },
      description: "Hospedagem de alta performance em servidores KVM com SSD NVMe, segurança blindada, manutenção ativa e otimização para SEO e GEO.",
      serviceType: "Cloud Hosting / Website Maintenance",
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

    const scriptService = document.createElement("script");
    scriptService.type = "application/ld+json";
    scriptService.text = JSON.stringify(schema);
    document.head.appendChild(scriptService);

    const scriptFaq = document.createElement("script");
    scriptFaq.type = "application/ld+json";
    scriptFaq.text = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    return () => {
      document.head.removeChild(scriptService);
      document.head.removeChild(scriptFaq);
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
                <Server size={16} /> Cloud Management
              </span>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Não é apenas hospedagem. É o{" "}
                <span className="text-gradient">motor do seu crescimento</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Deixe a lentidão e as quedas constantes para a concorrência. Na RVB, seu site roda em infraestrutura de elite, otimizada para buscadores e inteligências artificiais.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="glow-border text-base font-bold" asChild>
                  <a href="https://wa.me/5500000000000?text=Quero%20saber%20mais%20sobre%20a%20hospedagem%20cloud%20da%20RVB" target="_blank" rel="noopener noreferrer">
                    Quero Performance Real
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold" asChild>
                  <a href="#planos">Ver Planos</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="border-t border-border/50 bg-card/30 py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-2xl border border-destructive/20 bg-destructive/5 p-8 md:p-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-destructive">O problema que ninguém fala</p>
              <p className="text-lg text-foreground/90 md:text-xl">
                Muitas empresas economizam na hospedagem e <strong className="text-foreground">pagam o preço com sites lentos que afastam clientes</strong>. Se o site é lento, o Google e o Gemini não recomendam. Nosso serviço de Cloud Management foi desenhado para quem não quer se preocupar com técnica — apenas com <strong className="text-foreground">resultados</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-border/50 py-14 md:py-20">
          <div className="section-fade-in container" ref={statsRef}>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-4xl font-extrabold text-primary md:text-5xl">{s.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
          <div className="section-fade-in container" ref={featuresRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">O que está incluso</p>
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
                Gestão de <span className="text-gradient">Infraestrutura</span> Completa
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tudo que seu site precisa para carregar rápido, ficar seguro e ser encontrado por buscadores e IAs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="group rounded-2xl border border-border/50 bg-background p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(152_100%_50%/0.08)]">
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

        {/* Plans */}
        <section id="planos" className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={plansRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Planos</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Escolha o seu <span className="text-gradient">próximo nível</span>
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {/* Essencial */}
              <div className="flex flex-col rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                <div className="mb-6">
                  <div className="mb-3 inline-flex rounded-xl bg-secondary p-3 text-foreground">
                    <Server size={24} />
                  </div>
                  <h3 className="mb-1 text-2xl font-extrabold">Presença Essencial</h3>
                  <p className="text-sm text-muted-foreground">Site + Hospedagem</p>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {planEssencial.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-4 text-xs text-muted-foreground">
                  Ideal para: Quem precisa de uma vitrine impecável e rápida.
                </p>
                <Button variant="outline" size="lg" className="w-full text-base font-semibold" asChild>
                  <a href="https://wa.me/5500000000000?text=Quero%20saber%20mais%20sobre%20o%20plano%20Presença%20Essencial" target="_blank" rel="noopener noreferrer">
                    Falar sobre este plano <ArrowRight size={18} />
                  </a>
                </Button>
              </div>

              {/* Domínio Local */}
              <div className="relative flex flex-col rounded-2xl border-2 border-primary/40 bg-card p-8 shadow-[0_0_40px_hsl(152_100%_50%/0.08)] md:p-10">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    <Crown size={14} /> Mais Popular
                  </span>
                </div>
                <div className="mb-6">
                  <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Crown size={24} />
                  </div>
                  <h3 className="mb-1 text-2xl font-extrabold">Domínio Local</h3>
                  <p className="text-sm text-muted-foreground">Assessoria Completa</p>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {planDominio.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-4 text-xs text-muted-foreground">
                  Ideal para: Quem quer dominar a cidade e escalar faturamento.
                </p>
                <Button size="lg" className="glow-border w-full text-base font-bold" asChild>
                  <a href="https://wa.me/5500000000000?text=Quero%20saber%20mais%20sobre%20o%20plano%20Domínio%20Local" target="_blank" rel="noopener noreferrer">
                    Quero Dominar Minha Cidade <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
          <div className="section-fade-in container" ref={faqRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Dúvidas Frequentes</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Perguntas sobre <span className="text-gradient">Hospedagem Cloud</span>
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
                Chega de site lento e inseguro
              </h2>
              <p className="mb-8 text-muted-foreground">
                Migre para a infraestrutura da RVB e tenha um site que carrega rápido, fica seguro e é recomendado por buscadores e IAs.
              </p>
              <Button size="lg" className="glow-border text-base font-bold" asChild>
                <a href="https://wa.me/5500000000000?text=Quero%20migrar%20meu%20site%20para%20a%20hospedagem%20cloud%20da%20RVB" target="_blank" rel="noopener noreferrer">
                  Quero Migrar Agora
                </a>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">Migração gratuita. Sem compromisso. Resposta em até 24h.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HospedagemPage;
