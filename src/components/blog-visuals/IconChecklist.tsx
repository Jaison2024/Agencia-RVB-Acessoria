import { CheckCircle2, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ChecklistItem {
  icon?: LucideIcon;
  text: string;
  done?: boolean;
}

interface IconChecklistProps {
  title: string;
  items: ChecklistItem[];
}

export const IconChecklist = ({ title, items }: IconChecklistProps) => (
  <ScrollReveal>
    <div className="my-8 rounded-xl border border-border/50 bg-card p-6">
      <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{title}</h4>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => {
          const Icon = item.icon || CheckCircle2;
          return (
            <div key={i} className="flex items-start gap-3 rounded-lg bg-muted/20 p-3">
              <Icon size={18} className={item.done !== false ? "text-primary mt-0.5 shrink-0" : "text-muted-foreground mt-0.5 shrink-0"} />
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  </ScrollReveal>
);
