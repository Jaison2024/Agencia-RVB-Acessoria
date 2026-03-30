import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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

          {/* Trust bar */}
          <div className="mt-16 border-t border-border/50 pt-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Especialistas em
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-muted-foreground md:gap-10">
              <span>Google Maps</span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>SEO Técnico</span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>WordPress</span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>Meta Ads</span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>GEO / IA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
