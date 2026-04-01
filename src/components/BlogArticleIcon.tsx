import { MapPin, Search, Brain, Share2, Globe, Star, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Search,
  Brain,
  Share2,
  Globe,
  Star,
};

interface BlogArticleIconProps {
  iconName: string;
  gradientClass: string;
  size?: "sm" | "lg";
}

const BlogArticleIcon = ({ iconName, gradientClass, size = "sm" }: BlogArticleIconProps) => {
  const Icon = iconMap[iconName] || MapPin;
  const dimensions = size === "lg" ? "h-20 w-20" : "h-12 w-12";
  const iconSize = size === "lg" ? 36 : 20;

  return (
    <div
      className={`${dimensions} flex items-center justify-center rounded-xl bg-gradient-to-br ${gradientClass} ring-1 ring-white/10`}
    >
      <Icon size={iconSize} className="text-primary" />
    </div>
  );
};

export default BlogArticleIcon;
