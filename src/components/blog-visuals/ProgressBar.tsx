interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
}

export const ProgressBar = ({ label, value, max = 100, color = "bg-primary" }: ProgressBarProps) => (
  <div className="space-y-1.5">
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}%</span>
    </div>
    <div className="h-2.5 w-full rounded-full bg-muted/50">
      <div
        className={`h-full rounded-full ${color} transition-all duration-1000`}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  </div>
);

interface MiniDashboardProps {
  title: string;
  bars: ProgressBarProps[];
}

export const MiniDashboard = ({ title, bars }: MiniDashboardProps) => (
  <div className="my-8 rounded-xl border border-border/50 bg-card p-6">
    <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{title}</h4>
    <div className="space-y-4">
      {bars.map((bar, i) => (
        <ProgressBar key={i} {...bar} />
      ))}
    </div>
  </div>
);
