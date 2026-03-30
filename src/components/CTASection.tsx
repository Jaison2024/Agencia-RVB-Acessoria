import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const services = [
  "Google Maps Top 1",
  "Criação de Site",
  "Gestão de Redes Sociais",
  "SEO & Blog",
  "Pacote Completo",
];

const CTASection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", company: "", whatsapp: "", city: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Sou ${form.name} da empresa ${form.company} em ${form.city}. Tenho interesse em: ${form.service}. Meu WhatsApp: ${form.whatsapp}`
    );
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp!", description: "Em instantes você será atendido." });
  };

  return (
    <section id="contato" className="border-t border-border/50 bg-card/50 py-24 md:py-32">
      <div className="section-fade-in container" ref={ref}>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            Sua empresa será o nosso próximo{" "}
            <span className="text-gradient">grande Case?</span>
          </h2>
          <p className="mb-10 text-muted-foreground">
            Nossa assessoria atende um número limitado de parceiros para garantir excelência
            e foco total no Top 1. Solicite seu diagnóstico gratuito.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Seu nome</Label>
                <Input
                  id="name"
                  placeholder="Ex: João Silva"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  placeholder="Nome da empresa"
                  required
                  maxLength={100}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  placeholder="(49) 99999-9999"
                  required
                  maxLength={20}
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  placeholder="Ex: Concórdia"
                  required
                  maxLength={100}
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Serviço de interesse</Label>
              <select
                id="service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Selecione um serviço</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <Button type="submit" size="lg" className="glow-border w-full text-base font-bold">
              <Send size={18} />
              Solicitar Diagnóstico Gratuito
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
