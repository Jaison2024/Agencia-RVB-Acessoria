import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Dr. Ricardo Mendes",
    company: "Odontologia Vitalícia",
    city: "Concórdia, SC",
    text: "Em menos de 2 meses, saímos do zero para o Top 1 do Google Maps. Hoje recebemos ligações diárias de pacientes novos que nos encontram pelo Google.",
    stars: 5,
  },
  {
    name: "Camila Ferreira",
    company: "Studio Beleza & Arte",
    city: "Chapecó, SC",
    text: "A RVB transformou nossas redes sociais. Passamos de um perfil parado para uma máquina de agendamentos. O investimento se pagou no primeiro mês.",
    stars: 5,
  },
  {
    name: "Eduardo Santos",
    company: "Santos Advocacia",
    city: "Ipumirim, SC",
    text: "O site que criaram para nosso escritório trouxe mais clientes do que qualquer outra estratégia que já tentamos. SEO local realmente funciona.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
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
    <section className="border-t border-border/50 py-24 md:py-32">
      <div className="section-fade-in container" ref={ref}>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
            O que nossos <span className="text-gradient">parceiros</span> dizem
          </h2>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`group relative flex flex-col rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(152_100%_50%/0.06)] ${
                visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Quote size={24} className="mb-4 text-primary/30" />

              <p className="mb-6 flex-1 text-muted-foreground leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-primary">{t.company}</p>
                <p className="text-xs text-muted-foreground">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
