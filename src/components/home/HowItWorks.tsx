"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { UserPlus, ShieldCheck, ShoppingBag, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Farmers Register",
    description:
      "Local farmers sign up and submit their farm details, certifications, and produce info for KVK review.",
    color: "from-forest-500 to-forest-600",
    accent: "bg-forest-50",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "KVK Verifies",
    description:
      "Our team conducts thorough verification — farm visits, quality checks, and organic certification validation.",
    color: "from-forest-600 to-forest-700",
    accent: "bg-forest-100",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "You Buy Fresh",
    description:
      "Browse verified farmers, order authentic produce, and get farm-fresh goods delivered to your doorstep.",
    color: "from-forest-700 to-forest-800",
    accent: "bg-forest-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="py-24 md:py-32 bg-white relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simple & Transparent"
          title="How KVK Works"
          description="Three simple steps from farm to your table. No middlemen, no guesswork — just pure, verified goodness."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-forest-300 via-forest-400 to-forest-500 origin-left rounded-full"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative group"
            >
              <div className="text-center">
                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mx-auto w-20 h-20 mb-6"
                >
                  <div
                    className={`w-full h-full rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-forest-700 shadow-md border border-forest-100 font-[family-name:var(--font-display)]">
                    {step.number}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-forest-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-forest-600/80 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps (mobile) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6 md:hidden">
                  <ArrowRight className="w-5 h-5 text-forest-300 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
