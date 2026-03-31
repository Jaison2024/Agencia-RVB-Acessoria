import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Google Maps", href: "/google-maps" },
  { label: "Criação de Sites", href: "/criacao-de-sites" },
  { label: "Redes Sociais", href: "/gestao-de-redes-sociais" },
  { label: "Hospedagem", href: "/hospedagem-cloud" },
  { label: "Blog", href: "/blog" },
  { label: "Cases", href: "/#cases" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#" className="text-xl font-extrabold tracking-tight md:text-2xl">
          <span className="text-foreground">RVB</span>
          <span className="text-primary"> Assessoria</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="glow-border font-semibold">
            <a href="#contato">Diagnóstico Gratuito</a>
          </Button>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="glow-border mt-2 w-full font-semibold">
              <a href="#contato" onClick={() => setMobileOpen(false)}>
                Diagnóstico Gratuito
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
