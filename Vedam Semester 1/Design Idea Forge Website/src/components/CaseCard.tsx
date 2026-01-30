import { motion } from "motion/react";
import { DifficultyBadge } from "./DifficultyBadge";
import { Badge } from "./ui/badge";
import { Users } from "lucide-react";

export interface CaseCardProps {
  id: string;
  company: string;
  logo: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  attempts: number;
  onClick?: () => void;
}

export function CaseCard({
  company,
  logo,
  title,
  description,
  difficulty,
  category,
  attempts,
  onClick,
}: CaseCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      className="glass-surface rounded-[16px] p-6 cursor-pointer transition-all hover:shadow-lavender group"
    >
      <div className="flex gap-4 mb-4">
        <img
          src={logo}
          alt={company}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="flex-1 min-w-0">
          <h3 className="mb-1 truncate">{title}</h3>
          <p className="text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <DifficultyBadge difficulty={difficulty} />
        <Badge variant="outline" className="text-xs">
          {category}
        </Badge>
        <div className="flex items-center gap-1 text-muted-foreground text-sm ml-auto">
          <Users className="h-4 w-4" />
          <span>{attempts} attempts</span>
        </div>
      </div>
    </motion.div>
  );
}
