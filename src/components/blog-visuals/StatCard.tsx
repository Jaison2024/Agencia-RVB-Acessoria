import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: string;
}

const StatCard = ({ icon: Icon, value, label, color = "text-primary" }: StatCardProps) => (
  <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card p-5 text-center">
    <Icon size={24} className={color} />
    <span className={`text-3xl font-extrabold ${color}`}>{value}</span>
    <span className="text-xs text-muted-foreground leading-tight">{label}</span>
  </div>
);

interface StatGridProps {
  stats: StatCardProps[];
}

export const StatGrid = ({ stats }: StatGridProps) => (
  <div className={`my-8 grid gap-4 ${stats.length === 2 ? "grid-cols-2" : stats.length === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}>
    {stats.map((s, i) => (
      <StatCard key={i} {...s} />
    ))}
  </div>
);

export default StatCard;
