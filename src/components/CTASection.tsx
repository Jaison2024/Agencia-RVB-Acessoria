import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Send, Check, AlertCircle } from "lucide-react";

const services = [
  "Google Maps Top 1",
  "Criação de Site",
  "Gestão de Redes Sociais",
  "SEO & Blog",
  "Pacote Completo",
];

const formatWhatsApp = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const isValidPhone = (value: string) => value.replace(/\D/g, "").length >= 10;

const CTASection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", company: "", whatsapp: "", city: "", service: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = useCallback((field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const isFieldValid = (field: string, value: string) => {
    if (field === "whatsapp") return isValidPhone(value);
    return value.trim().length > 0;
  };

  const allValid =
    form.name.trim() &&
    form.company.trim() &&
    isValidPhone(form.whatsapp) &&
    form.city.trim() &&
    form.service;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Sou ${form.name.trim()} da empresa ${form.company.trim()} em ${form.city.trim()}. Tenho interesse em: ${form.service}. Meu WhatsApp: ${form.whatsapp}`
    );
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp!", description: "Em instantes você será atendido." });
  };

  const fieldStatus = (field: string, value: string) => {
    if (!touched[field]) return null;
    return isFieldValid(field, value) ? "valid" : "invalid";
  };

  const inputClass = (field: string, value: string) => {
    const status = fieldStatus(field, value);
    if (status === "valid") return "border-primary/50 focus-visible:ring-primary/50";
    if (status === "invalid") return "border-destructive/50 focus-visible:ring-destructive/50";
    return "";
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
                <Label htmlFor="name" className="flex items-center gap-1.5">
                  Seu nome
                  {fieldStatus("name", form.name) === "valid" && <Check size={12} className="text-primary" />}
                </Label>
                <Input
                  id="name"
                  placeholder="Ex: João Silva"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => handleBlur("name")}
                  className={inputClass("name", form.name)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-1.5">
                  Empresa
                  {fieldStatus("company", form.company) === "valid" && <Check size={12} className="text-primary" />}
                </Label>
                <Input
                  id="company"
                  placeholder="Nome da empresa"
                  required
                  maxLength={100}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  onBlur={() => handleBlur("company")}
                  className={inputClass("company", form.company)}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="flex items-center gap-1.5">
                  WhatsApp
                  {fieldStatus("whatsapp", form.whatsapp) === "valid" && <Check size={12} className="text-primary" />}
                  {fieldStatus("whatsapp", form.whatsapp) === "invalid" && <AlertCircle size={12} className="text-destructive" />}
                </Label>
                <Input
                  id="whatsapp"
                  placeholder="(49) 99999-9999"
                  required
                  maxLength={16}
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: formatWhatsApp(e.target.value) })}
                  onBlur={() => handleBlur("whatsapp")}
                  className={inputClass("whatsapp", form.whatsapp)}
                />
                {fieldStatus("whatsapp", form.whatsapp) === "invalid" && (
                  <p className="text-xs text-destructive">Informe um número válido com DDD.</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="flex items-center gap-1.5">
                  Cidade
                  {fieldStatus("city", form.city) === "valid" && <Check size={12} className="text-primary" />}
                </Label>
                <Input
                  id="city"
                  placeholder="Ex: Concórdia"
                  required
                  maxLength={100}
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  onBlur={() => handleBlur("city")}
                  className={inputClass("city", form.city)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="flex items-center gap-1.5">
                Serviço de interesse
                {form.service && <Check size={12} className="text-primary" />}
              </Label>
              <select
                id="service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  form.service ? "border-primary/50" : "border-input"
                }`}
              >
                <option value="">Selecione um serviço</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              size="lg"
              className="glow-border w-full text-base font-bold"
              disabled={!allValid}
            >
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
