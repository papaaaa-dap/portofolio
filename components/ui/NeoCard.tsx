/**
 * NeoCard.tsx
 * Reusable card component dengan style Neobrutalism.
 * Mendukung 4 varian shadow: dark (default), yellow, coral, tosca.
 */

"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type CardVariant = "dark" | "yellow" | "coral" | "tosca";

interface NeoCardProps extends HTMLMotionProps<"div"> {
  variant?: CardVariant;
  /** Nonaktifkan hover effect jika diperlukan */
  noHover?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Mapping variant ke class
const variantClasses: Record<CardVariant, string> = {
  dark: "border-3 border-dark shadow-neo",
  yellow: "border-3 border-dark shadow-neo-yellow",
  coral: "border-3 border-dark shadow-neo-coral",
  tosca: "border-3 border-dark shadow-neo-tosca",
};

// Mapping variant ke hover shadow color
const hoverShadow: Record<CardVariant, string> = {
  dark: "8px 8px 0px #0A0A0A",
  yellow: "8px 8px 0px #FFE135",
  coral: "8px 8px 0px #FF6B6B",
  tosca: "8px 8px 0px #4ECDC4",
};

const baseShadow: Record<CardVariant, string> = {
  dark: "5px 5px 0px #0A0A0A",
  yellow: "5px 5px 0px #FFE135",
  coral: "5px 5px 0px #FF6B6B",
  tosca: "5px 5px 0px #4ECDC4",
};

export default function NeoCard({
  variant = "dark",
  noHover = false,
  className,
  children,
  ...props
}: NeoCardProps) {
  return (
    <motion.div
      style={{ boxShadow: baseShadow[variant] }}
      whileHover={
        noHover
          ? {}
          : {
              x: -3,
              y: -3,
              boxShadow: hoverShadow[variant],
            }
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "border-[3px] border-dark bg-cream",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
