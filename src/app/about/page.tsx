"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Sprout,
  Target,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle2,
  Building2,
  Scale,
  Eye,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Every step from farm to table is visible. No hidden middlemen, no inflated prices.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Government-backed verification ensures only genuine farmers reach your table.",
  },
  {
    icon: Handshake,
    title: "Fair Trade",
    description:
      "Farmers get fair prices. Customers get authentic produce. Everyone wins.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description:
      "Promoting organic and sustainable farming practices across India.",
  },
];

const timeline = [
  { year: "2022", title: "KVK Founded", description: "Launched with 50 farmers in Maharashtra" },
  { year: "2023", title: "Nationwide Expansion", description: "Expanded to 12 states with 800+ farmers" },
  { year: "2024", title: "Government Partnership", description: "Official recognition and agricultural ministry tie-up" },
  { year: "2025", title: "50K+ Customers", description: "Crossed 50,000 satisfied customers milestone" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-forest-500/8 rounded-full blur-[120px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="verified" animated className="mb-6">
              Government Backed Initiative
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-white tracking-tight leading-tight mb-6">
              Building India&apos;s Most{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-forest-400">
                Trusted
              </span>{" "}
              Agricultural Platform
            </h1>
            <p className="text-lg text-forest-200/70 leading-relaxed max-w-2xl">
              KVK (Krishi Vikas Kendra) is a government-backed initiative to
              connect verified farmers directly with consumers, eliminating
              middlemen and ensuring authenticity in every transaction.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Verified Farmers", value: 2400, suffix: "+" },
              { label: "States Covered", value: 18 },
              { label: "Products Listed", value: 15000, suffix: "+" },
              { label: "Happy Customers", value: 50000, suffix: "+" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-forest-800/40 border border-forest-700/30"
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix || ""}
                  duration={2 + i * 0.3}
                  className="text-3xl font-bold text-white font-[family-name:var(--font-display)]"
                />
                <p className="text-sm text-forest-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <Section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold font-[family-name:var(--font-display)] text-forest-600 bg-forest-50 rounded-full border border-forest-200">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-forest-900 tracking-tight mb-6">
                Empowering Farmers,
                <br />
                <span className="text-gradient-green">
                  Nourishing Communities
                </span>
              </h2>
              <p className="text-forest-600/80 leading-relaxed mb-6">
                India&apos;s agricultural sector has been plagued by middlemen,
                fake organic claims, and lack of transparency. KVK was born to
                change that. We provide a platform where every farmer is
                personally verified, every product is traceable, and every
                transaction is fair.
              </p>
              <ul className="space-y-3">
                {[
                  "Direct farmer-to-consumer connection",
                  "Government-backed verification process",
                  "Fair pricing with no middleman margins",
                  "Support for sustainable farming",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-forest-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=500&fit=crop"
                  alt="Indian farmland"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-4 bg-white rounded-2xl shadow-xl border border-forest-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900 font-[family-name:var(--font-display)]">
                      Govt. of India
                    </p>
                    <p className="text-xs text-forest-500">
                      Official Partner
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Core Values"
            description="Every decision we make is guided by these principles"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-forest-50/50 border border-forest-100/50 hover:bg-forest-50 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-forest-500 to-forest-600 flex items-center justify-center shadow-lg"
                >
                  <val.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-forest-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-forest-600/80 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="The KVK Story"
            description="From a small pilot in Maharashtra to a nationwide platform"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-forest-200" />

            <div className="space-y-10">
              {timeline.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 items-start"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-forest-500 to-forest-600 flex items-center justify-center text-white text-xs font-bold z-10 shadow-lg">
                    {event.year.slice(2)}
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-forest-500 font-medium mb-1">
                      {event.year}
                    </p>
                    <h4 className="text-lg font-bold font-[family-name:var(--font-display)] text-forest-900 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-sm text-forest-600/80">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 md:py-32 bg-gradient-to-br from-forest-900 to-forest-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
              Be Part of the Change
            </h2>
            <p className="text-forest-200/70 text-lg max-w-xl mx-auto mb-8">
              Join KVK today — whether you&apos;re a farmer looking for fair
              trade or a consumer seeking authentic produce.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/auth/register?role=farmer">
                <Button size="lg" iconRight={<ArrowRight className="w-5 h-5" />}>
                  Register as Farmer
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-forest-500/30 text-forest-200 hover:bg-forest-800/50"
                >
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
