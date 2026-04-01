import { type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ProcessFlowProps {
  steps: Step[];
}

export const ProcessFlow = ({ steps }: ProcessFlowProps) => (
  <div className="my-8 space-y-0">
    {steps.map((step, i) => (
      <div key={i} className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30">
            <step.icon size={18} className="text-primary" />
          </div>
          {i < steps.length - 1 && <div className="h-full w-px bg-primary/20" />}
        </div>
        <div className="pb-6">
          <p className="font-bold text-foreground">{step.title}</p>
          <p className="text-sm text-muted-foreground">{step.desc}</p>
        </div>
      </div>
    ))}
  </div>
);
