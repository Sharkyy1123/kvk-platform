"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { clsx } from "clsx";

interface BadgeProps {
  variant?: "verified" | "pending" | "organic" | "category" | "new";
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

const badgeStyles = {
  verified:
    "bg-gradient-to-r from-forest-500 to-forest-600 text-white",
  pending:
    "bg-amber-glow/10 text-amber-glow border border-amber-glow/30",
  organic:
    "bg-forest-50 text-forest-700 border border-forest-200",
  category:
    "bg-earth-100 text-earth-700 border border-earth-200",
  new:
    "bg-gradient-to-r from-berry to-sunset text-white",
};

export function Badge({
  variant = "verified",
  children,
  className,
  animated = false,
}: BadgeProps) {
  const Component = animated ? motion.span : "span";
  const animationProps = animated
    ? {
        animate: {
          boxShadow: [
            "0 0 8px rgba(34, 197, 94, 0.3)",
            "0 0 20px rgba(34, 197, 94, 0.5)",
            "0 0 8px rgba(34, 197, 94, 0.3)",
          ],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      }
    : {};

  return (
    <Component
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-[family-name:var(--font-display)] tracking-wide",
        badgeStyles[variant],
        className
      )}
      {...animationProps}
    >
      {variant === "verified" && <ShieldCheck className="w-3.5 h-3.5" />}
      {children}
    </Component>
  );
}
