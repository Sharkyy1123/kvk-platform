"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Wheat, Fish, Beef, Milk, Leaf, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Fresh Crops",
    description: "Seasonal vegetables, fruits & grains",
    icon: Wheat,
    count: "3,200+",
    gradient: "from-green-400 to-emerald-600",
    bgLight: "bg-green-50",
    href: "/marketplace?category=crops",
  },
  {
    name: "Fresh Fish",
    description: "River & pond farmed fish",
    icon: Fish,
    count: "850+",
    gradient: "from-cyan-400 to-blue-600",
    bgLight: "bg-cyan-50",
    href: "/marketplace?category=fish",
  },
  {
    name: "Quality Meat",
    description: "Free-range poultry & livestock",
    icon: Beef,
    count: "1,100+",
    gradient: "from-orange-400 to-red-500",
    bgLight: "bg-orange-50",
    href: "/marketplace?category=meat",
  },
  {
    name: "Dairy Products",
    description: "Fresh milk, curd, ghee & more",
    icon: Milk,
    count: "2,000+",
    gradient: "from-amber-300 to-yellow-500",
    bgLight: "bg-amber-50",
    href: "/marketplace?category=dairy",
  },
  {
    name: "Organic Manure",
    description: "Vermicompost & natural fertilizers",
    icon: Leaf,
    count: "600+",
    gradient: "from-lime-400 to-green-600",
    bgLight: "bg-lime-50",
    href: "/marketplace?category=manure",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function CategoriesSection() {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-50/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Farm Categories"
          description="From fresh crops to organic manure — explore the full spectrum of authentic agricultural produce."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={itemVariants}>
              <Link href={cat.href}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 20px 40px -12px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative p-6 rounded-2xl bg-white border border-gray-100 cursor-pointer group overflow-hidden h-full"
                >
                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${cat.bgLight} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <cat.icon className="w-7 h-7 text-forest-700" />
                  </div>

                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-forest-900 mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-forest-600/70 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Count + arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-forest-500 bg-forest-50 px-2.5 py-1 rounded-full">
                      {cat.count} products
                    </span>
                    <motion.div
                      className="w-7 h-7 rounded-full bg-forest-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-forest-600" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
