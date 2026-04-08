"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  ShieldCheck,
  Fingerprint,
  MapPinCheck,
  FlaskConical,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";

const trustPoints = [
  {
    icon: Fingerprint,
    title: "Identity Verified",
    description: "Every farmer's identity is verified against government databases.",
  },
  {
    icon: MapPinCheck,
    title: "Farm Inspected",
    description: "Physical farm inspections ensure genuine agricultural practices.",
  },
  {
    icon: FlaskConical,
    title: "Quality Tested",
    description: "Regular soil and produce quality testing by certified labs.",
  },
  {
    icon: FileCheck2,
    title: "Certification Validated",
    description: "Organic and quality certifications are cross-verified with authorities.",
  },
];

export function TrustSection() {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-forest-900 to-forest-950 p-8 md:p-12">
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-forest-500 to-forest-400 flex items-center justify-center shadow-2xl shadow-forest-500/30">
                  <ShieldCheck className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-white mb-3">
                  KVK Verified
                </h3>
                <p className="text-forest-300 max-w-sm mx-auto leading-relaxed mb-8">
                  The gold standard for agricultural trust. When you see this
                  badge, you know it&apos;s authentic.
                </p>

                {/* Badge preview */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(34, 197, 94, 0.2)",
                      "0 0 40px rgba(34, 197, 94, 0.4)",
                      "0 0 20px rgba(34, 197, 94, 0.2)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-forest-500 to-forest-600 rounded-full text-white font-semibold font-[family-name:var(--font-display)]"
                >
                  <ShieldCheck className="w-5 h-5" />
                  KVK Certified Farm
                </motion.div>
              </motion.div>

              {/* Stats inside card */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { label: "Rejection Rate", value: "23%" },
                  { label: "Re-verified Yearly", value: "100%" },
                  { label: "Avg. Score", value: "4.7/5" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl bg-forest-800/50 border border-forest-700/30"
                  >
                    <p className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-forest-400 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Points */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold font-[family-name:var(--font-display)] text-forest-600 bg-forest-50 rounded-full border border-forest-200">
                Why Trust KVK
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-forest-900 tracking-tight mb-4">
                Rigorous Verification,
                <br />
                <span className="text-gradient-green">Absolute Trust</span>
              </h2>
              <p className="text-forest-600/80 leading-relaxed mb-8 max-w-lg">
                Every farmer on KVK goes through a multi-step verification
                process. We don&apos;t just check papers — we visit farms, test
                quality, and ensure everything is genuine.
              </p>
            </motion.div>

            <div className="space-y-5">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center group-hover:bg-forest-100 transition-colors">
                    <point.icon className="w-5 h-5 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-[family-name:var(--font-display)] text-forest-900 mb-1 flex items-center gap-2">
                      {point.title}
                      <CheckCircle2 className="w-4 h-4 text-forest-500" />
                    </h4>
                    <p className="text-sm text-forest-600/70 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
