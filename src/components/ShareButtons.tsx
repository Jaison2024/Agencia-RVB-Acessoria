import { Share2, Link2, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const fullUrl = `https://rvbassessoria.com.br${url}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast({ title: "Link copiado!", description: "O link foi copiado para a área de transferência." });
    } catch {
      toast({ title: "Erro ao copiar", description: "Não foi possível copiar o link.", variant: "destructive" });
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${title} — ${fullUrl}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const shareLinkedIn = () => {
    const encoded = encodeURIComponent(fullUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`, "_blank");
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Compartilhar</span>
      <button
        onClick={shareWhatsApp}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        aria-label="Compartilhar no WhatsApp"
      >
        <MessageCircle size={16} />
      </button>
      <button
        onClick={shareLinkedIn}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        aria-label="Compartilhar no LinkedIn"
      >
        <Share2 size={16} />
      </button>
      <button
        onClick={copyLink}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        aria-label="Copiar link"
      >
        <Link2 size={16} />
      </button>
    </div>
  );
};

export default ShareButtons;
