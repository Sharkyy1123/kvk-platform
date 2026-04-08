"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Leaf, ShieldCheck, Sprout } from "lucide-react";

export function CTASection() {
  return (
    <Section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950" />

          {/* Animated orbs */}
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-forest-500/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-forest-400/8 rounded-full blur-[80px]"
          />

          {/* Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              {/* Floating icons */}
              <div className="flex justify-center gap-3 mb-8">
                {[Leaf, ShieldCheck, Sprout].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                    className="w-10 h-10 rounded-xl bg-forest-800/60 border border-forest-700/30 flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-forest-400" />
                  </motion.div>
                ))}
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-white tracking-tight mb-4"
              >
                Ready to experience
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-forest-400">
                  real, verified produce?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-forest-200/70 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
              >
                Join thousands of conscious consumers and farmers building a
                more transparent agricultural ecosystem. It starts with one
                click.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/marketplace">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    iconRight={<ArrowRight className="w-5 h-5" />}
                  >
                    Start Shopping
                  </Button>
                </Link>
                <Link href="/auth/register?role=farmer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-forest-500/30 text-forest-200 hover:bg-forest-800/50 hover:text-white"
                  >
                    Register Your Farm
                  </Button>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-sm text-forest-400/60"
              >
                Free to join • No hidden fees • Government backed
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
