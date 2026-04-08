"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  ShieldCheck,
  Sprout,
  Users,
  TrendingUp,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { label: "Verified Farmers", value: 2400, suffix: "+", icon: Users },
  { label: "Products Listed", value: 15000, suffix: "+", icon: Sprout },
  { label: "Happy Customers", value: 50000, suffix: "+", icon: TrendingUp },
];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />

        {/* Animated orbs */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-forest-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-forest-400/8 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-forest-300/5 rounded-full blur-[100px]"
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />

        {/* Gradient bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fafdf8] to-transparent" />
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Verified badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="verified" animated className="mb-8">
                Government Backed & Verified
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-display)] text-white leading-[1.1] tracking-tight"
            >
              From Verified
              <br />
              Farms to{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-forest-400">
                  Your Table
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-forest-500/20 rounded-full origin-left"
                />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-lg md:text-xl text-forest-200/80 leading-relaxed max-w-xl"
            >
              Connect directly with KVK-certified farmers. Every product is
              traceable, every farmer is verified. Experience agriculture
              the way it should be — transparent and trustworthy.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/marketplace">
                <Button size="lg" iconRight={<ArrowRight className="w-5 h-5" />}>
                  Explore Farmers
                </Button>
              </Link>
              <Link href="/auth/register?role=farmer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-forest-400/40 text-forest-100 hover:bg-forest-800/50 hover:text-white"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Join as Farmer
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-16 flex flex-wrap gap-8 md:gap-12"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-forest-800/50 flex items-center justify-center border border-forest-700/30">
                    <stat.icon className="w-5 h-5 text-forest-400" />
                  </div>
                  <div>
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2 + i * 0.3}
                      className="text-2xl font-bold text-white font-[family-name:var(--font-display)]"
                    />
                    <p className="text-xs text-forest-400 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating illustration on right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 h-80"
            >
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-forest-700/30 animate-[leaf-spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-forest-600/20" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-forest-700/30 to-forest-800/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Sprout className="w-16 h-16 text-forest-400 mx-auto mb-3" />
                  <p className="text-forest-300 text-sm font-medium">
                    100% Organic
                  </p>
                  <p className="text-forest-400/60 text-xs mt-1">
                    Certified & Traceable
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 right-8 px-3 py-1.5 bg-forest-800/60 backdrop-blur-lg rounded-full border border-forest-600/30"
              >
                <span className="text-xs text-forest-300 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-forest-400" />
                  KVK Certified
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-2 left-4 px-3 py-1.5 bg-forest-800/60 backdrop-blur-lg rounded-full border border-forest-600/30"
              >
                <span className="text-xs text-forest-300">
                  🌾 Farm Fresh Daily
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-forest-400/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 bg-forest-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
