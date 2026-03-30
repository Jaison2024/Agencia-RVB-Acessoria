const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <a href="#" className="text-xl font-extrabold">
              <span className="text-foreground">RVB</span>
              <span className="text-primary"> Assessoria</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Assessoria de Performance Local — Oeste de SC
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#solucoes" className="transition-colors hover:text-primary">Soluções</a>
            <a href="#metodo" className="transition-colors hover:text-primary">Método</a>
            <a href="#cases" className="transition-colors hover:text-primary">Cases</a>
            <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
            <a href="#contato" className="transition-colors hover:text-primary">Contato</a>
          </nav>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {year} RVB Assessoria. Todos os direitos reservados. Concórdia, Chapecó, Ipumirim — SC, Brasil.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
