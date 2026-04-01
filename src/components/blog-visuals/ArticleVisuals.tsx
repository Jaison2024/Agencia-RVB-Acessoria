import { ReactNode } from "react";
import { StatGrid } from "./StatCard";
import { MiniDashboard } from "./ProgressBar";
import { ProcessFlow } from "./ProcessFlow";
import { ComparisonTable } from "./ComparisonTable";
import { IconChecklist } from "./IconChecklist";
import { MetricHighlight } from "./MetricHighlight";
import {
  MapPin, Search, Star, TrendingUp, Eye, MousePointer,
  Camera, MessageSquare, Users, FileText, Globe, Share2,
  Brain, Zap, BarChart3, Shield, Clock, Phone, CheckCircle2,
  Target, Smartphone, Instagram, Facebook, MessageCircle,
  Palette, Gauge, Code, Layout, DollarSign, CalendarDays,
  ThumbsUp, AlertTriangle, HeartHandshake,
} from "lucide-react";

// Maps: slug -> sectionIndex -> ReactNode[]
type VisualMap = Record<string, Record<number, ReactNode>>;

const articleVisuals: VisualMap = {
  // ===== ARTICLE 1: Google Maps =====
  "como-aparecer-topo-google-maps": {
    0: (
      <StatGrid stats={[
        { icon: Search, value: "46%", label: "Buscas com intenção local", color: "text-primary" },
        { icon: MapPin, value: "76%", label: "Visitam em até 24h", color: "text-emerald-400" },
        { icon: Eye, value: "Top 3", label: "Local Pack = visibilidade", color: "text-cyan-400" },
      ]} />
    ),
    1: (
      <IconChecklist
        title="Checklist de Otimização do Perfil"
        items={[
          { icon: FileText, text: "Nome oficial da empresa (sem keywords extras)" },
          { icon: Target, text: "Categoria principal específica e correta" },
          { icon: Search, text: "Descrição com palavras-chave naturais" },
          { icon: Clock, text: "Horário de funcionamento atualizado" },
          { icon: Phone, text: "Endereço e telefone consistentes (NAP)" },
          { icon: CheckCircle2, text: "Auditoria de 25 pontos RVB completa" },
        ]}
      />
    ),
    2: (
      <MiniDashboard
        title="Crescimento de Avaliações — Clientes RVB"
        bars={[
          { label: "Mês 1 — Implementação", value: 35, color: "bg-primary" },
          { label: "Mês 2 — Aceleração", value: 65, color: "bg-primary" },
          { label: "Mês 3 — Resultado (+300%)", value: 95, color: "bg-emerald-500" },
        ]}
      />
    ),
    4: (
      <StatGrid stats={[
        { icon: Camera, value: "+42%", label: "Mais pedidos de rota com fotos", color: "text-primary" },
        { icon: MousePointer, value: "+35%", label: "Mais cliques para o site", color: "text-cyan-400" },
      ]} />
    ),
  },

  // ===== ARTICLE 2: SEO Local =====
  "seo-local-negocios-oeste-sc": {
    0: (
      <StatGrid stats={[
        { icon: Search, value: "97%", label: "Buscam negócios online", color: "text-blue-400" },
        { icon: TrendingUp, value: "500%", label: "Aumento buscas 'perto de mim'", color: "text-primary" },
        { icon: DollarSign, value: "28%", label: "Compram no mesmo dia", color: "text-emerald-400" },
      ]} />
    ),
    1: (
      <>
        <MetricHighlight
          icon={Phone}
          metric="+180%"
          description="Aumento em ligações vindas do Google Maps para clientes RVB em Concórdia"
          trend="Resultado médio em 90 dias"
        />
        <IconChecklist
          title="Checklist Google Business Profile"
          items={[
            { icon: FileText, text: "Informações completas e atualizadas" },
            { icon: Target, text: "Categorias principal e secundárias corretas" },
            { icon: Search, text: "Descrição com palavras-chave locais" },
            { icon: CalendarDays, text: "Posts semanais com novidades" },
            { icon: Camera, text: "Fotos atualizadas mensalmente" },
            { icon: MessageSquare, text: "Perguntas e respostas preenchidas" },
          ]}
        />
      </>
    ),
    2: (
      <ComparisonTable
        title="Onde Cadastrar Sua Empresa (NAP)"
        headers={["Plataforma", "Prioridade", "Impacto SEO"]}
        rows={[
          { feature: "Google Business Profile", values: ["🔴 Alta", "Muito Alto"] },
          { feature: "Bing Places", values: ["🟡 Média", "Médio"] },
          { feature: "Apple Maps", values: ["🟡 Média", "Médio"] },
          { feature: "Facebook Business", values: ["🔴 Alta", "Alto"] },
          { feature: "Guias regionais SC", values: ["🟢 Complementar", "Alto (local)"] },
          { feature: "Associações (ACIC)", values: ["🟢 Complementar", "Alto (autoridade)"] },
        ]}
      />
    ),
    5: (
      <MiniDashboard
        title="Resultados Reais — Clientes RVB no Oeste de SC"
        bars={[
          { label: "Clínica Odontológica — Top 1 Maps", value: 100, color: "bg-primary" },
          { label: "Restaurante — Aumento Reservas", value: 85, color: "bg-blue-500" },
          { label: "Advocacia — Novos Clientes/Mês", value: 75, color: "bg-cyan-500" },
        ]}
      />
    ),
  },

  // ===== ARTICLE 3: GEO / IA =====
  "geo-inteligencia-artificial-negocios": {
    0: (
      <MetricHighlight
        icon={Brain}
        metric="GEO"
        description="Generative Engine Optimization — a nova fronteira do marketing digital para ser recomendado por IAs"
      />
    ),
    1: (
      <ProcessFlow steps={[
        { icon: Globe, title: "Google Business Profile", desc: "IAs coletam informações, avaliações e fotos do seu perfil" },
        { icon: FileText, title: "Conteúdo do Site", desc: "Blogs, páginas de serviço e FAQs são analisados" },
        { icon: Code, title: "Schema Markup (JSON-LD)", desc: "Dados estruturados que facilitam a leitura por máquinas" },
        { icon: Star, title: "Autoridade Online", desc: "Links, reviews e citações constroem confiança" },
        { icon: Zap, title: "Recomendação da IA", desc: "A IA prioriza negócios com dados completos e consistentes" },
      ]} />
    ),
    2: (
      <ComparisonTable
        title="SEO Tradicional vs GEO"
        headers={["Aspecto", "SEO", "GEO"]}
        rows={[
          { feature: "Objetivo", values: ["Ranquear em links", "Ser citado por IAs"] },
          { feature: "Formato", values: ["Lista de resultados", "Resposta conversacional"] },
          { feature: "Otimização", values: ["Keywords + backlinks", "Dados estruturados"] },
          { feature: "Medição", values: ["Posição e cliques", "Menções e recomendações"] },
          { feature: "Conteúdo", values: ["Para crawlers", "Para modelos de linguagem"] },
        ]}
      />
    ),
    3: (
      <ProcessFlow steps={[
        { icon: Code, title: "Schema Markup Completo", desc: "LocalBusiness, FAQPage, Review — a linguagem das IAs" },
        { icon: MessageSquare, title: "Formato Pergunta-Resposta", desc: "Crie FAQs que as IAs adoram citar" },
        { icon: Shield, title: "Consistência em Todas as Plataformas", desc: "Dados idênticos = confiança da IA" },
        { icon: Star, title: "Avaliações Reais", desc: "Volume e qualidade influenciam recomendações" },
        { icon: FileText, title: "Conteúdo de Valor Regular", desc: "Demonstre expertise que as IAs reconhecem" },
      ]} />
    ),
    4: (
      <StatGrid stats={[
        { icon: Brain, value: "40%", label: "Buscas via IA até 2027", color: "text-purple-400" },
        { icon: Zap, value: "Agora", label: "É hora de se preparar", color: "text-primary" },
      ]} />
    ),
  },

  // ===== ARTICLE 4: Redes Sociais =====
  "redes-sociais-negocios-locais": {
    0: (
      <StatGrid stats={[
        { icon: Users, value: "82%", label: "Brasileiros usam redes diariamente", color: "text-pink-400" },
        { icon: DollarSign, value: "71%", label: "Já compraram via redes sociais", color: "text-primary" },
        { icon: Smartphone, value: "#1", label: "Instagram + WhatsApp para negócios locais", color: "text-purple-400" },
      ]} />
    ),
    1: (
      <IconChecklist
        title="Checklist Instagram para Negócios Locais"
        items={[
          { icon: MapPin, text: "Geolocalização em todos os posts" },
          { icon: Search, text: "Hashtags locais (#ConcordiaSC #ChapecoSC)" },
          { icon: Camera, text: "Reels com bastidores e dia a dia" },
          { icon: MessageSquare, text: "Stories com enquetes e perguntas diárias" },
          { icon: Users, text: "Parcerias com micro-influenciadores locais" },
          { icon: CalendarDays, text: "4-5 posts/semana + Stories diários" },
        ]}
      />
    ),
    2: (
      <ComparisonTable
        title="Plataformas para Negócios Locais"
        headers={["Recurso", "Instagram", "Facebook", "WhatsApp"]}
        rows={[
          { feature: "Alcance jovem (18-34)", values: ["yes", "partial", "yes"] },
          { feature: "Público 35-65 anos", values: ["partial", "yes", "yes"] },
          { feature: "Vendas diretas", values: ["partial", "partial", "yes"] },
          { feature: "Segmentação local (Ads)", values: ["yes", "yes", "no"] },
          { feature: "Catálogo de produtos", values: ["yes", "partial", "yes"] },
          { feature: "Atendimento 1:1", values: ["partial", "partial", "yes"] },
        ]}
      />
    ),
    3: (
      <IconChecklist
        title="Funcionalidades WhatsApp Business"
        items={[
          { icon: Layout, text: "Catálogo de produtos/serviços" },
          { icon: Zap, text: "Respostas rápidas configuradas" },
          { icon: Target, text: "Etiquetas por estágio do cliente" },
          { icon: Eye, text: "Status com ofertas diárias" },
          { icon: Users, text: "Listas de transmissão segmentadas" },
          { icon: Globe, text: "Integração com Google Business Profile" },
        ]}
      />
    ),
    5: (
      <ProcessFlow steps={[
        { icon: AlertTriangle, title: "Postar sem frequência", desc: "Consistência é tudo — uma semana ativo, um mês sumido não funciona" },
        { icon: Users, title: "Comprar seguidores", desc: "Números inflados que não geram vendas reais" },
        { icon: MessageCircle, title: "Ignorar mensagens", desc: "Cada mensagem não respondida = cliente perdido" },
        { icon: FileText, title: "Copiar conteúdo genérico", desc: "Seu público quer ver VOCÊ, não templates" },
        { icon: Smartphone, title: "Não usar WhatsApp Business", desc: "Atender pelo WhatsApp pessoal é amador" },
        { icon: BarChart3, title: "Não medir resultados", desc: "Sem métricas = dinheiro jogado fora" },
      ]} />
    ),
  },

  // ===== ARTICLE 5: Sites =====
  "site-profissional-pequenas-empresas": {
    0: (
      <ProcessFlow steps={[
        { icon: AlertTriangle, title: "Mudança de algoritmo", desc: "Alcance pode cair 80% da noite para o dia" },
        { icon: Shield, title: "Conta hackeada", desc: "Pode ser desativada sem aviso prévio" },
        { icon: Search, title: "Invisível no Google", desc: "Sem site = sem aparecer nas buscas" },
        { icon: HeartHandshake, title: "Desconfiança", desc: "Clientes exigentes desconfiam de empresas sem site" },
      ]} />
    ),
    1: (
      <StatGrid stats={[
        { icon: Eye, value: "75%", label: "Julgam credibilidade pelo design do site", color: "text-amber-400" },
        { icon: TrendingUp, value: "+$$$", label: "Site profissional justifica preços maiores", color: "text-primary" },
      ]} />
    ),
    2: (
      <MetricHighlight
        icon={Globe}
        metric="24/7"
        description="Um artigo bem otimizado gera clientes por meses ou anos, diferente das redes sociais que exigem posts constantes"
        trend="SEO = geração passiva de clientes"
      />
    ),
    3: (
      <IconChecklist
        title="Características de um Site que Converte"
        items={[
          { icon: Gauge, text: "Velocidade: carregamento < 2 segundos" },
          { icon: Smartphone, text: "Design responsivo (70%+ tráfego mobile)" },
          { icon: Code, text: "SEO técnico: meta tags, Schema, sitemap" },
          { icon: Phone, text: "CTAs claros: WhatsApp, formulário, telefone" },
          { icon: Palette, text: "Conteúdo persuasivo e direcionado" },
          { icon: Star, text: "Prova social: avaliações e depoimentos" },
          { icon: FileText, text: "Blog para tráfego orgânico contínuo" },
        ]}
      />
    ),
    4: (
      <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
          ROI — Retorno Sobre Investimento
        </h4>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-card p-4 text-center border border-border/50">
            <div className="text-2xl font-extrabold text-primary">10</div>
            <div className="text-xs text-muted-foreground">Contatos/mês via site</div>
          </div>
          <div className="rounded-lg bg-card p-4 text-center border border-border/50">
            <div className="text-2xl font-extrabold text-primary">×30%</div>
            <div className="text-xs text-muted-foreground">Taxa de conversão</div>
          </div>
          <div className="rounded-lg bg-card p-4 text-center border border-border/50">
            <div className="text-2xl font-extrabold text-emerald-400">R$ 18k</div>
            <div className="text-xs text-muted-foreground">Retorno em 12 meses</div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Baseado em ticket médio de R$ 500 • 3 novos clientes/mês • Retorno contínuo por anos
        </p>
      </div>
    ),
  },

  // ===== ARTICLE 6: Avaliações =====
  "avaliacoes-google-importancia": {
    0: (
      <StatGrid stats={[
        { icon: Star, value: "93%", label: "Leem avaliações antes de escolher", color: "text-yellow-400" },
        { icon: MousePointer, value: "+28%", label: "Mais cliques com 4.5+ estrelas", color: "text-primary" },
        { icon: Clock, value: "6 meses", label: "Reviews perdem relevância após", color: "text-orange-400" },
        { icon: ThumbsUp, value: "20+", label: "Mínimo para credibilidade", color: "text-emerald-400" },
      ]} />
    ),
    1: (
      <>
        <ProcessFlow steps={[
          { icon: MessageSquare, title: "Peça pessoalmente após atendimento", desc: "O melhor momento é quando o cliente está satisfeito" },
          { icon: Smartphone, title: "Envie o link por WhatsApp", desc: "Facilite ao máximo — link direto para avaliação" },
          { icon: Layout, title: "Cartão com QR Code", desc: "QR Code físico que leva direto para a página" },
          { icon: CalendarDays, title: "Follow-up pós-venda (2-3 dias)", desc: "Mensagem agradecendo + pedido de avaliação" },
          { icon: Users, title: "Treine sua equipe", desc: "Todo o time deve saber pedir avaliações" },
        ]} />
        <MetricHighlight
          icon={TrendingUp}
          metric="8 → 47"
          description="Avaliações em apenas 3 meses — resultado real de clientes RVB em Concórdia"
          trend="+487% de crescimento"
        />
      </>
    ),
    2: (
      <MetricHighlight
        icon={HeartHandshake}
        metric="1.7x"
        description="Empresas que respondem avaliações são vistas como mais confiáveis pelos consumidores"
      />
    ),
    4: (
      <div className="my-8 rounded-xl border border-border/50 bg-card p-6">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
          Estratégia Mensal de Reviews
        </h4>
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            { week: "Sem 1-2", task: "Pedir avaliações", icon: Star, color: "text-yellow-400" },
            { week: "Sem 3", task: "Responder reviews", icon: MessageSquare, color: "text-blue-400" },
            { week: "Sem 4", task: "Analisar feedback", icon: BarChart3, color: "text-primary" },
            { week: "Contínuo", task: "Medir métricas", icon: TrendingUp, color: "text-emerald-400" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 rounded-lg bg-muted/20 p-4 text-center">
              <item.icon size={22} className={item.color} />
              <span className="text-xs font-bold text-foreground">{item.week}</span>
              <span className="text-xs text-muted-foreground">{item.task}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

/**
 * Returns the visual component to render after a given content section,
 * or null if none is mapped.
 */
export function getArticleVisual(slug: string, sectionIndex: number): ReactNode | null {
  return articleVisuals[slug]?.[sectionIndex] ?? null;
}
