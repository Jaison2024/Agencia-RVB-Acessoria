import { TrendingUp, type LucideIcon } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import ScrollReveal from "./ScrollReveal";

interface MetricHighlightProps {
  icon?: LucideIcon;
  metric: string;
  description: string;
  trend?: string;
}

const parseMetric = (value: string) => {
  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return null;
  const prefix = match[1];
  const num = parseFloat(match[2]);
  const suffix = match[3];
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { prefix, num, suffix, decimals };
};

export const MetricHighlight = ({ icon: Icon = TrendingUp, metric, description, trend }: MetricHighlightProps) => {
  const parsed = parseMetric(metric);
  const countUp = useCountUp({
    end: parsed?.num ?? 0,
    prefix: parsed?.prefix ?? "",
    suffix: parsed?.suffix ?? "",
    decimals: parsed?.decimals ?? 0,
  });

  return (
    <ScrollReveal>
      <div className="my-8 flex items-center gap-5 rounded-xl border border-primary/20 bg-primary/5 p-6" ref={parsed ? countUp.ref as React.RefObject<HTMLDivElement> : undefined}>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Icon size={28} className="text-primary" />
        </div>
        <div>
          <div className="text-2xl font-extrabold text-primary">{parsed ? countUp.display : metric}</div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {trend && <span className="mt-1 inline-block text-xs font-semibold text-primary/80">↑ {trend}</span>}
        </div>
      </div>
    </ScrollReveal>
  );
};
