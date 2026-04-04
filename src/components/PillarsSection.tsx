import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Globe, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: MapPin,
    title: "Local Domination",
    subtitle: "Google Maps Top 1",
    description:
      "Auditoria de 25 pontos de relevância, otimização de imagens com geolocalização e gestão de avaliações estratégicas. Sua empresa como a recomendação nº 1 em Concórdia, Chapecó e região.",
  },
  {
    icon: Globe,
    title: "High-Performance Web",
    subtitle: "Sites & SEO",
    description:
      "Sites com design moderno (Mobile-First), arquitetura de SEO técnico e blogs estruturados para capturar buscas orgânicas. Carregamento em menos de 2 segundos.",
  },
  {
    icon: Instagram,
    title: "Social Recovery",
    subtitle: "Gestão de Redes Sociais",
    description:
      "Reativamos perfis parados com conteúdo estratégico, design premium e frequência que gera confiança imediata. Transformamos redes sociais em prova social constante.",
  },
];

const PillarsSection = () => {
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
    <section id="solucoes" className="border-t border-border/50 py-24 md:py-32">
      <div className="section-fade-in container" ref={ref}>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos Pilares
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Dominação Digital em <span className="text-gradient">3 Frentes</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(152_100%_50%/0.08)] hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_hsl(152_100%_50%/0.15)]">
                <pillar.icon size={28} />
              </div>
              <h3 className="mb-1 text-xl font-bold">{pillar.title}</h3>
              <p className="mb-4 text-sm font-medium text-primary">{pillar.subtitle}</p>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
