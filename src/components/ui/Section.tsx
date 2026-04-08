"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold font-[family-name:var(--font-display)] text-forest-600 bg-forest-50 rounded-full border border-forest-200"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-forest-900 tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-lg text-forest-600/80 leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
