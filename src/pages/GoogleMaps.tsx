import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
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
import { MapPin, Star, Search, BarChart3, Image, MessageSquare, CheckCircle2, TrendingUp, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Auditoria de 25 Pontos",
    description: "Análise completa do seu perfil no Google Meu Negócio: categorias, atributos, descrição, fotos, horários e muito mais.",
  },
  {
    icon: Image,
    title: "Otimização de Imagens Geolocalizadas",
    description: "Inserimos metadados de geolocalização nas fotos do seu negócio para reforçar a relevância local nos resultados do Maps.",
  },
  {
    icon: Star,
    title: "Gestão de Avaliações Estratégicas",
    description: "Estratégias para aumentar avaliações positivas genuínas e responder reviews de forma profissional.",
  },
  {
    icon: BarChart3,
    title: "Monitoramento de Ranking Local",
    description: "Acompanhamento contínuo da sua posição no Maps para as principais palavras-chave da sua região.",
  },
  {
    icon: MessageSquare,
    title: "Google Posts & Atualizações",
    description: "Publicações periódicas no Google Meu Negócio para manter seu perfil ativo e relevante.",
  },
  {
    icon: MapPin,
    title: "Citações Locais (NAP)",
    description: "Padronização do Nome, Endereço e Telefone em diretórios online para reforçar sua autoridade local.",
  },
];

const steps = [
  { number: "01", title: "Diagnóstico", description: "Analisamos como o Google enxerga seu negócio hoje, mapeamos oportunidades e identificamos seus concorrentes locais." },
  { number: "02", title: "Otimização", description: "Aplicamos todas as otimizações técnicas: categorias, atributos, fotos geolocalizadas, descrição com keywords e muito mais." },
  { number: "03", title: "Autoridade", description: "Construímos citações em diretórios, incentivamos avaliações genuínas e publicamos Google Posts relevantes." },
  { number: "04", title: "Monitoramento", description: "Acompanhamos rankings semanalmente, ajustamos a estratégia e geramos relatórios mensais de performance." },
];

const stats = [
  { value: "46%", label: "das buscas no Google são locais" },
  { value: "76%", label: "visitam um negócio em 24h após busca local" },
  { value: "28%", label: "das buscas locais resultam em compra" },
];

const faqs = [
  {
    question: "Quanto tempo leva para aparecer no Topo 1 do Google Maps?",
    answer: "Depende do nível de concorrência na sua região e categoria. Em cidades como Concórdia e Ipumirim, resultados iniciais aparecem entre 30 a 60 dias. Em Chapecó, pode levar de 60 a 120 dias. Nosso trabalho é contínuo para manter e consolidar sua posição.",
  },
  {
    question: "Preciso ter um endereço físico para aparecer no Maps?",
    answer: "Sim, o Google Meu Negócio exige um endereço verificável. Se você atende clientes em domicílio, é possível configurar como 'área de atendimento' sem exibir o endereço publicamente.",
  },
  {
    question: "Vocês garantem a primeira posição?",
    answer: "Nenhuma agência séria pode garantir posições específicas — o Google controla o algoritmo. O que garantimos é aplicar 100% das melhores práticas e estratégias comprovadas que aumentam drasticamente suas chances de ranquear no topo.",
  },
  {
    question: "Qual a diferença entre SEO e Google Maps (SEO Local)?",
    answer: "SEO tradicional foca em posicionar seu site nos resultados orgânicos. SEO Local (Google Maps) foca em posicionar seu negócio no 'pacote local' — aquele mapa com 3 resultados que aparece nas buscas com intenção local. São estratégias complementares.",
  },
  {
    question: "Funciona para qualquer tipo de negócio?",
    answer: "Sim! Clínicas, restaurantes, escritórios de advocacia, oficinas, salões de beleza, lojas — qualquer negócio que atende clientes localmente se beneficia enormemente de uma presença forte no Google Maps.",
  },
];

const GoogleMapsPage = () => {
  const heroRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const stat1 = useCountUp({ end: 46, suffix: "%" });
  const stat2 = useCountUp({ end: 76, suffix: "%" });
  const stat3 = useCountUp({ end: 28, suffix: "%" });
  const benefitsRef = useScrollReveal();
  const stepsRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => {
    document.title = "Google Maps Top 1 em Concórdia e Chapecó | RVB Assessoria";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Coloque sua empresa no Topo 1 do Google Maps em Concórdia, Chapecó e toda região Oeste de SC. Auditoria técnica, otimização avançada e gestão contínua.");
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Otimização Google Maps — Local Domination",
      provider: {
        "@type": "ProfessionalService",
        name: "RVB Assessoria",
        areaServed: [
          { "@type": "City", name: "Concórdia" },
          { "@type": "City", name: "Chapecó" },
          { "@type": "City", name: "Ipumirim" },
        ],
      },
      description: "Serviço de otimização e gestão do Google Meu Negócio para posicionar empresas no Topo 1 do Google Maps na região Oeste de SC.",
      serviceType: "SEO Local / Google Maps Optimization",
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
                <MapPin size={16} /> Local Domination
              </span>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Coloque sua empresa no{" "}
                <span className="text-gradient">Topo 1 do Google Maps</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Quando alguém busca pelo seu serviço no Google, é o concorrente que aparece primeiro? Nós mudamos isso. Auditoria técnica de 25 pontos, otimização avançada e gestão contínua para dominar as buscas locais em Concórdia, Chapecó e toda a região Oeste de SC.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="glow-border text-base font-bold" asChild>
                  <a href="https://wa.me/5500000000000?text=Quero%20dominar%20o%20Google%20Maps%20na%20minha%20região" target="_blank" rel="noopener noreferrer">
                    Quero o Topo 1 do Maps
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
          <div className="section-fade-in container" ref={statsRef}>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              {[
                { stat: stat1, label: "das buscas no Google são locais" },
                { stat: stat2, label: "visitam um negócio em 24h após busca local" },
                { stat: stat3, label: "das buscas locais resultam em compra" },
              ].map((s, i) => (
                <div key={s.label} className="text-center" ref={i === 0 ? stat1.ref as React.RefObject<HTMLDivElement> : i === 1 ? stat2.ref as React.RefObject<HTMLDivElement> : stat3.ref as React.RefObject<HTMLDivElement>}>
                  <p className="text-4xl font-extrabold text-primary md:text-5xl">{s.stat.display}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={benefitsRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">O que fazemos</p>
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
                Engenharia de <span className="text-gradient">Rankeamento Local</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Não fazemos "o básico". Aplicamos engenharia reversa nos fatores de ranking do Google Maps para colocar seu negócio à frente da concorrência.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="group rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(152_100%_50%/0.08)]">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                    <b.icon size={26} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
          <div className="container">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Por que a RVB</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Resultados que <span className="text-gradient">falam por si</span>
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {[
                { icon: TrendingUp, title: "Ranking Comprovado", desc: "Clientes posicionados no Top 3 do Maps em Concórdia e região em menos de 90 dias." },
                { icon: Shield, title: "Sem Atalhos", desc: "Zero técnicas black-hat. Construímos autoridade local genuína que o Google recompensa." },
                { icon: Award, title: "Especialistas Locais", desc: "Conhecemos cada detalhe do mercado Oeste Catarinense. Sua vantagem competitiva." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/50 bg-background p-7 text-center">
                  <item.icon className="mx-auto mb-4 text-primary" size={32} />
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={stepsRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Nosso Processo</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Do invisível ao <span className="text-gradient">Topo 1</span>
              </h2>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8">
              {steps.map((s) => (
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
                Perguntas sobre <span className="text-gradient">Google Maps</span>
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
                Pronto para dominar o Maps?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Solicite um diagnóstico gratuito e descubra exatamente o que falta para sua empresa conquistar o Topo 1 na sua região.
              </p>
              <Button size="lg" className="glow-border text-base font-bold" asChild>
                <a href="https://wa.me/5500000000000?text=Quero%20um%20diagnóstico%20gratuito%20do%20meu%20Google%20Maps" target="_blank" rel="noopener noreferrer">
                  Diagnóstico Gratuito
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

export default GoogleMapsPage;