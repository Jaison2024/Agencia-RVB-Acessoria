import { TrendingUp, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface MetricHighlightProps {
  icon?: LucideIcon;
  metric: string;
  description: string;
  trend?: string;
}

export const MetricHighlight = ({ icon: Icon = TrendingUp, metric, description, trend }: MetricHighlightProps) => (
  <ScrollReveal>
    <div className="my-8 flex items-center gap-5 rounded-xl border border-primary/20 bg-primary/5 p-6">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon size={28} className="text-primary" />
      </div>
      <div>
        <div className="text-2xl font-extrabold text-primary">{metric}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
        {trend && <span className="mt-1 inline-block text-xs font-semibold text-primary/80">↑ {trend}</span>}
      </div>
    </div>
  </ScrollReveal>
);
