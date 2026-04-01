import { Check, X, Minus } from "lucide-react";

interface Row {
  feature: string;
  values: ("yes" | "no" | "partial" | string)[];
}

interface ComparisonTableProps {
  headers: string[];
  rows: Row[];
  title?: string;
}

const CellValue = ({ val }: { val: string }) => {
  if (val === "yes") return <Check size={18} className="text-primary mx-auto" />;
  if (val === "no") return <X size={18} className="text-destructive/60 mx-auto" />;
  if (val === "partial") return <Minus size={18} className="text-yellow-500 mx-auto" />;
  return <span className="text-sm text-muted-foreground">{val}</span>;
};

export const ComparisonTable = ({ headers, rows, title }: ComparisonTableProps) => (
  <div className="my-8 overflow-hidden rounded-xl border border-border/50">
    {title && (
      <div className="border-b border-border/50 bg-card px-5 py-3">
        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">{title}</h4>
      </div>
    )}
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50 bg-muted/30">
            {headers.map((h, i) => (
              <th key={i} className={`px-4 py-3 font-bold text-foreground ${i === 0 ? "text-left" : "text-center"}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/30 last:border-0">
              <td className="px-4 py-3 font-medium text-foreground">{row.feature}</td>
              {row.values.map((v, j) => (
                <td key={j} className="px-4 py-3 text-center">
                  <CellValue val={v} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
