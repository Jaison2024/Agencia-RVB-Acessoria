import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Stethoscope, Scissors, MapPinned } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const cases = [
  {
    icon: Stethoscope,
    title: "Odontologia Vitalícia",
    category: "SEO Local — Saúde",
    challenge: "Estabelecer presença digital de autoridade e capturar pacientes de alto valor na região.",
    strategy: "SEO Local agressivo, gestão do Google Meu Negócio e otimização de palavras-chave de intenção.",
    result: "Posicionamento de destaque nas buscas locais, transformando cliques orgânicos em agendamentos reais.",
  },
  {
    icon: Scissors,
    title: "CutFlow",
    category: "Sistema de Gestão — Tech",
    challenge: "Barbearias perdendo tempo e clientes com agendamentos manuais via WhatsApp.",
    strategy: "Desenvolvimento completo de aplicação web com reservas automatizadas em tempo real.",
    result: "Operação 100% digitalizada. O dono foca no serviço enquanto o sistema cuida da captação.",
  },
  {
    icon: MapPinned,
    title: "Expansão Regional",
    category: "Autoridade — Oeste SC",
    challenge: "Negócios invisíveis digitalmente, com redes paradas e perdendo o Top 1 do Maps.",
    strategy: "Auditoria de presença online, Social Recovery e implementação de GEO para recomendação por IAs.",
    result: "Cinturão de autoridade digital garantindo visibilidade em todas as etapas da jornada do cliente.",
  },
];

const CasesSection = () => {
  const ref = useScrollReveal();
  const cardsRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = container.children;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(cards).indexOf(entry.target as Element);
            setTimeout(() => {
              setVisibleCards((prev) => new Set(prev).add(index));
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    Array.from(cards).forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cases" className="border-t border-border/50 bg-card/50 py-24 md:py-32">
      <div className="section-fade-in container" ref={ref}>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Cases de Sucesso
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
            A prova de que o nosso método{" "}
            <span className="text-gradient">domina o mercado</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
          {cases.map((c, index) => (
            <div
              key={c.title}
              className={`group flex flex-col rounded-2xl border border-border/50 bg-background p-8 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(152_100%_50%/0.06)] ${
                visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-4 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary">
                <c.icon size={24} />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {c.category}
              </p>
              <h3 className="mb-4 text-xl font-bold">{c.title}</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-foreground">Desafio: </span>
                  <span className="text-muted-foreground">{c.challenge}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Estratégia: </span>
                  <span className="text-muted-foreground">{c.strategy}</span>
                </div>
                <div>
                  <span className="font-semibold text-primary">Resultado: </span>
                  <span className="text-muted-foreground">{c.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
