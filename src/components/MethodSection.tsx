import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Wrench, Share2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico de Visibilidade",
    description:
      "Analisamos como o Google e as IAs enxergam o seu negócio hoje. Mapeamos concorrentes locais e identificamos o que falta para você assumir o Top 1.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Engenharia de Busca",
    description:
      "Otimizamos seu Google Meu Negócio com técnicas avançadas e construímos seu site com foco em velocidade extrema, SEO e GEO.",
  },
  {
    icon: Share2,
    number: "03",
    title: "Social Recovery",
    description:
      "Reativamos suas redes sociais com padrão estético de alto nível. Conteúdo intencional que gera confiança imediata no cliente.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Expansão e Performance",
    description:
      "Implementamos blog, palavras-chave de intenção local e monitoramento contínuo para garantir crescimento orgânico constante.",
  },
];

const MethodSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="metodo" className="border-t border-border/50 py-24 md:py-32">
      <div className="section-fade-in container" ref={ref}>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Nosso Método
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
            O Método RVB de{" "}
            <span className="text-gradient">Crescimento Estruturado</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Timeline line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-gradient-to-b from-primary/40 to-border/30" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <step.icon size={20} />
              </div>

              {/* Content */}
              <div>
                <span className="text-xs font-bold tracking-widest text-primary">{step.number}</span>
                <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
