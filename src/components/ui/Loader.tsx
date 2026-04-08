"use client";

import { motion } from "framer-motion";

export function LeafSpinner({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center">
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <motion.path
          d="M20 2C20 2 32 8 32 20C32 32 20 38 20 38C20 38 8 32 8 20C8 8 20 2 20 2Z"
          fill="url(#leaf-gradient)"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <path
          d="M20 8V32M14 14C14 14 17 18 20 20M26 14C26 14 23 18 20 20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <defs>
          <linearGradient
            id="leaf-gradient"
            x1="8"
            y1="2"
            x2="32"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#22C55E" />
            <stop offset="1" stopColor="#0B3D2E" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest-50/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <LeafSpinner size={56} />
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-forest-700 font-medium font-[family-name:var(--font-display)]"
        >
          Growing something good...
        </motion.p>
      </motion.div>
    </div>
  );
}
