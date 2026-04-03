import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const HeroSection = () => {
  const stat1 = useCountUp({ end: 46, suffix: "%" });
  const stat2 = useCountUp({ end: 76, suffix: "%" });
  const stat3 = useCountUp({ end: 300, suffix: "+", duration: 2500 });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background grid effect */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(152 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(152 100% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orb */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(152 100% 50% / 0.4), transparent 70%)" }}
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <MapPin size={14} />
            Assessoria de Performance Local — Oeste de SC
          </div>

          <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Sua empresa no{" "}
            <span className="text-gradient">Topo 1 do Google</span>
            {" "}ou ela não existe para o seu cliente.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Dominamos o SEO Local e o GEO para que o seu negócio seja a única resposta quando
            o cliente perguntar ao Google, ao Maps ou à IA. Concórdia, Chapecó, Ipumirim e
            toda região Oeste de SC.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="glow-border px-8 text-base font-bold">
              <a href="#contato">
                Quero Dominar meu Mercado
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 text-base font-semibold">
              <a href="#metodo">Ver como funciona</a>
            </Button>
          </div>

          {/* Animated stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border/50 pt-8">
            <div className="text-center" ref={stat1.ref as React.RefObject<HTMLDivElement>}>
              <p className="text-3xl font-extrabold text-primary md:text-4xl">{stat1.display}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">buscas locais no Google</p>
            </div>
            <div className="text-center" ref={stat2.ref as React.RefObject<HTMLDivElement>}>
              <p className="text-3xl font-extrabold text-primary md:text-4xl">{stat2.display}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">visitam em 24h após busca</p>
            </div>
            <div className="text-center" ref={stat3.ref as React.RefObject<HTMLDivElement>}>
              <p className="text-3xl font-extrabold text-primary md:text-4xl">{stat3.display}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">empresas já atendidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
