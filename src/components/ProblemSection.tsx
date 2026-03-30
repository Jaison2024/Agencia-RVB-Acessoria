import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div className="section-fade-in container" ref={ref}>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/5 px-4 py-2 text-sm font-medium text-destructive">
            <AlertTriangle size={14} />
            O Problema
          </div>

          <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-5xl">
            Sua empresa precisa de <span className="text-gradient">clientes</span>, não apenas de seguidores.
          </h2>

          <p className="mb-6 text-lg text-muted-foreground md:text-xl">
            Cansado de investir em marketing que só gera "likes", mas não traz pessoas
            para dentro da sua loja ou clínica?
          </p>

          <p className="text-lg text-muted-foreground md:text-xl">
            Ter um Instagram bonito <strong className="text-foreground">não adianta nada</strong> se,
            na hora que o seu cliente pesquisa pelo seu serviço no Google, é o{" "}
            <strong className="text-foreground">seu concorrente que aparece no Topo do Maps</strong>.
            Na RVB, nós estruturamos um ecossistema digital focado em{" "}
            <span className="text-primary font-semibold">posicionamento, buscas e conversão real</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
