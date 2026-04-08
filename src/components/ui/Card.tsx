"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow:
                "0 20px 40px -12px rgba(11, 61, 46, 0.15), 0 8px 16px -8px rgba(34, 197, 94, 0.1)",
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(
        "bg-white rounded-2xl overflow-hidden",
        "shadow-[0_4px_20px_-4px_rgba(11,61,46,0.08)]",
        "border border-forest-100/50",
        "transition-colors duration-300",
        hover && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export function CardImage({
  src,
  alt,
  overlay = true,
  className,
}: {
  src: string;
  alt: string;
  overlay?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
      )}
    </div>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx("p-5", className)}>{children}</div>;
}
