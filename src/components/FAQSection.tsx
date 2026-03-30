import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como aparecer no topo do Google Maps?",
    answer:
      "Para aparecer no topo do Google Maps é necessário otimizar completamente o perfil do Google Meu Negócio, incluindo informações precisas, fotos geolocalizadas, gestão ativa de avaliações e SEO local técnico. A RVB Assessoria aplica uma auditoria de 25 pontos para garantir o posicionamento Top 1.",
  },
  {
    question: "Quanto custa uma assessoria de marketing local?",
    answer:
      "O investimento varia conforme o escopo dos serviços (Google Maps, site, redes sociais). Oferecemos um diagnóstico gratuito para avaliar as necessidades específicas do seu negócio e apresentar um plano personalizado com valores transparentes.",
  },
  {
    question: "O que é GEO (Generative Engine Optimization)?",
    answer:
      "GEO é a otimização para motores de busca generativos como ChatGPT, Gemini e Perplexity. Enquanto o SEO tradicional foca no Google, o GEO prepara seu negócio para ser recomendado por Inteligências Artificiais quando clientes perguntam sobre serviços na sua região.",
  },
  {
    question: "Como reativar redes sociais paradas da minha empresa?",
    answer:
      "Nosso serviço Social Recovery começa com uma auditoria do perfil, definição de identidade visual profissional, criação de conteúdo estratégico e gestão de frequência de postagens. Transformamos perfis abandonados em canais de autoridade e prova social.",
  },
  {
    question: "Vocês atendem quais cidades?",
    answer:
      "Atendemos negócios locais em toda a região Oeste de Santa Catarina, incluindo Concórdia, Chapecó, Ipumirim, Arabutã e cidades vizinhas. Também trabalhamos remotamente com negócios de outras regiões.",
  },
  {
    question: "Qual a diferença entre a RVB e outras agências de marketing?",
    answer:
      "Enquanto agências tradicionais focam em 'likes' e posts bonitos, nós focamos em posicionamento e faturamento. Aplicamos SEO Local técnico, preparamos seu negócio para a Era da IA (GEO) e criamos sites que realmente convertem visitantes em clientes.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="border-t border-border/50 py-24 md:py-32">
      <div className="section-fade-in container" ref={ref}>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Perguntas Frequentes
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Tire suas <span className="text-gradient">dúvidas</span>
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/50 bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
