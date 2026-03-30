import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Instagram, Camera, Calendar, TrendingUp, Users, Palette, CheckCircle2 } from "lucide-react";

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
    description: "Frequência consistente de publicações para manter seu perfil sempre ativo e relevante.",
  },
  {
    icon: TrendingUp,
    title: "Análise de Métricas",
    description: "Relatórios mensais com insights sobre o que funciona e ajustes para melhorar seus resultados.",
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

const GestaoRedesPage = () => {
  const heroRef = useScrollReveal();
  const problemRef = useScrollReveal();
  const servicesRef = useScrollReveal();
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

        {/* Problem */}
        <section className="border-t border-border/50 bg-card/30 py-20 md:py-28">
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
        <section className="border-t border-border/50 py-20 md:py-28">
          <div className="section-fade-in container" ref={servicesRef}>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">O que fazemos</p>
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
                Gestão completa de <span className="text-gradient">redes sociais</span>
              </h2>
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
                <a href="https://wa.me/5500000000000?text=Quero%20reativar%20minhas%20redes" target="_blank" rel="noopener noreferrer">
                  Falar com um Especialista
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

export default GestaoRedesPage;
