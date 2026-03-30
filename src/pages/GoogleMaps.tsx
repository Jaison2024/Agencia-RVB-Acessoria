import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Search, BarChart3, Image, MessageSquare, CheckCircle2 } from "lucide-react";

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
  { number: "01", title: "Diagnóstico", description: "Analisamos como o Google enxerga seu negócio hoje e mapeamos oportunidades." },
  { number: "02", title: "Otimização", description: "Aplicamos todas as otimizações técnicas no seu perfil e presença local." },
  { number: "03", title: "Autoridade", description: "Construímos citações, avaliações e conteúdo que consolidam seu domínio." },
  { number: "04", title: "Monitoramento", description: "Acompanhamos rankings e ajustamos a estratégia continuamente." },
];

const GoogleMapsPage = () => {
  const heroRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const stepsRef = useScrollReveal();
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
                <MapPin size={16} /> Local Domination
              </span>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Coloque sua empresa no{" "}
                <span className="text-gradient">Topo 1 do Google Maps</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Quando o seu cliente busca pelo serviço que você oferece no Google Maps, é o seu concorrente que aparece primeiro? Nós mudamos isso. Auditoria técnica, otimização avançada e gestão contínua para dominar as buscas locais em Concórdia, Chapecó e toda a região Oeste de SC.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="glow-border text-base font-bold" asChild>
                  <a href="https://wa.me/5500000000000?text=Quero%20dominar%20o%20Google%20Maps" target="_blank" rel="noopener noreferrer">
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

        {/* Benefits */}
        <section className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={benefitsRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">O que fazemos</p>
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
                Engenharia de <span className="text-gradient">Rankeamento Local</span>
              </h2>
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

        {/* Steps */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
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
                <a href="https://wa.me/5500000000000?text=Quero%20um%20diagnóstico%20do%20meu%20Google%20Maps" target="_blank" rel="noopener noreferrer">
                  Diagnóstico Gratuito
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

export default GoogleMapsPage;
