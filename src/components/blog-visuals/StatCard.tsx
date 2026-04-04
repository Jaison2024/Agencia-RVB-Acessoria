import { type LucideIcon } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import ScrollReveal from "./ScrollReveal";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: string;
}

const parseStatValue = (value: string) => {
  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return null;
  const prefix = match[1];
  const num = parseFloat(match[2]);
  const suffix = match[3];
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { prefix, num, suffix, decimals };
};

const AnimatedStatCard = ({ icon: Icon, value, label, color = "text-primary" }: StatCardProps) => {
  const parsed = parseStatValue(value);
  const countUp = useCountUp({
    end: parsed?.num ?? 0,
    prefix: parsed?.prefix ?? "",
    suffix: parsed?.suffix ?? "",
    decimals: parsed?.decimals ?? 0,
  });

  if (!parsed) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card p-5 text-center">
        <Icon size={24} className={color} />
        <span className={`text-3xl font-extrabold ${color}`}>{value}</span>
        <span className="text-xs text-muted-foreground leading-tight">{label}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card p-5 text-center" ref={countUp.ref as React.RefObject<HTMLDivElement>}>
      <Icon size={24} className={color} />
      <span className={`text-3xl font-extrabold ${color}`}>{countUp.display}</span>
      <span className="text-xs text-muted-foreground leading-tight">{label}</span>
    </div>
  );
};

interface StatGridProps {
  stats: StatCardProps[];
}

export const StatGrid = ({ stats }: StatGridProps) => (
  <ScrollReveal>
    <div className={`my-8 grid gap-4 ${stats.length === 2 ? "grid-cols-2" : stats.length === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}>
      {stats.map((s, i) => (
        <AnimatedStatCard key={i} {...s} />
      ))}
    </div>
  </ScrollReveal>
);

export default AnimatedStatCard;
