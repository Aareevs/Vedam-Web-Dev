import { motion } from "motion/react";

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-4 py-2 rounded-full transition-all ${
        isActive
          ? "gradient-lavender text-white shadow-lavender"
          : "bg-muted/50 text-foreground hover:bg-muted"
      }`}
    >
      {label}
    </motion.button>
  );
}
