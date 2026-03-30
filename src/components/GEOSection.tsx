import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bot, Check, X } from "lucide-react";

const comparisons = [
  { feature: "Foco", common: "Apenas 'likes' e visual", rvb: "Faturamento e Posicionamento" },
  { feature: "Google Maps", common: "Atualização básica", rvb: "Engenharia de Rankeamento Local" },
  { feature: "Sites", common: "Modelos prontos e lentos", rvb: "Código limpo, SEO e Conversão" },
  { feature: "Visão de Futuro", common: "Estagnada no Google antigo", rvb: "Pronta para a Era da IA (GEO)" },
];

const GEOSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="border-t border-border/50 bg-card/50 py-24 md:py-32">
      <div className="section-fade-in container" ref={ref}>
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Bot size={14} />
            Diferencial Exclusivo
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Enquanto outros fazem SEO de 2010, nós preparamos você para a{" "}
            <span className="text-gradient">Era da IA</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Aplicamos o <strong className="text-foreground">Generative Engine Optimization (GEO)</strong> para
            que seu negócio seja a resposta escolhida por assistentes de IA como ChatGPT, Gemini e Perplexity.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border/50">
          <div className="grid grid-cols-3 border-b border-border/50 bg-secondary/50 px-6 py-4 text-sm font-bold">
            <span>Característica</span>
            <span className="text-center text-muted-foreground">Agências Comuns</span>
            <span className="text-center text-primary">Consultoria RVB</span>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${
                i < comparisons.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <span className="font-semibold">{row.feature}</span>
              <span className="flex items-center justify-center gap-2 text-center text-muted-foreground">
                <X size={14} className="shrink-0 text-destructive" />
                <span className="hidden sm:inline">{row.common}</span>
              </span>
              <span className="flex items-center justify-center gap-2 text-center font-medium text-primary">
                <Check size={14} className="shrink-0" />
                <span className="hidden sm:inline">{row.rvb}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GEOSection;
