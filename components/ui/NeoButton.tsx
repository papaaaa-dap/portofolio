/**
 * NeoButton.tsx
 * Reusable button component dengan style Neobrutalism.
 * Mendukung variant: primary (kuning), secondary (putih), dark, coral, tosca.
 * Bisa dipakai sebagai <button> atau <a> (dengan prop href).
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "coral" | "tosca";
type ButtonSize = "sm" | "md" | "lg";

interface NeoButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  /** Buka link di tab baru */
  external?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-yellow text-dark hover:bg-yellow",
  secondary: "bg-cream text-dark hover:bg-cream",
  dark: "bg-dark text-cream hover:bg-dark",
  coral: "bg-coral text-dark hover:bg-coral",
  tosca: "bg-tosca text-dark hover:bg-tosca",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function NeoButton({
  variant = "primary",
  size = "md",
  href,
  external = false,
  onClick,
  className,
  children,
  disabled = false,
  type = "button",
}: NeoButtonProps) {
  const baseClasses = cn(
    "neo-btn font-heading font-bold inline-flex items-center gap-2 select-none",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const motionProps = {
    whileHover: disabled
      ? {}
      : { x: -2, y: -2, boxShadow: "6px 6px 0px #0A0A0A" },
    whileTap: disabled
      ? {}
      : { x: 1, y: 1, boxShadow: "2px 2px 0px #0A0A0A" },
    transition: { duration: 0.15, ease: "easeOut" },
    style: { boxShadow: "4px 4px 0px #0A0A0A", borderRadius: "0px" },
  };

  // Render sebagai link jika ada href
  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses} style={{ boxShadow: "none" }}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
