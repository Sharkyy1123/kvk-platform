"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-forest-600 to-forest-500 text-white shadow-lg shadow-forest-500/25 hover:shadow-xl hover:shadow-forest-500/30",
  secondary:
    "bg-forest-50 text-forest-800 border border-forest-200 hover:bg-forest-100 hover:border-forest-300",
  outline:
    "bg-transparent border-2 border-forest-500 text-forest-700 hover:bg-forest-50",
  ghost:
    "bg-transparent text-forest-700 hover:bg-forest-50 hover:text-forest-800",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-base rounded-xl gap-2",
  lg: "px-8 py-4 text-lg rounded-2xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  isLoading,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={clsx(
        "inline-flex items-center justify-center font-semibold font-[family-name:var(--font-display)] transition-all duration-200 cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || isLoading}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        icon
      )}
      {children}
      {iconRight}
    </motion.button>
  );
}
