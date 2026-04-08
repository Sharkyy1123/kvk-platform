"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Star, ShoppingBag, ArrowRight } from "lucide-react";

const farmers = [
  {
    id: "1",
    name: "Rajesh Kumar Patel",
    farmName: "Green Valley Organic Farm",
    location: "Nashik, Maharashtra",
    categories: ["Crops", "Dairy"],
    rating: 4.8,
    totalOrders: 342,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "2",
    name: "Lakshmi Devi",
    farmName: "Sunrise Organic Gardens",
    location: "Coimbatore, Tamil Nadu",
    categories: ["Crops", "Manure"],
    rating: 4.9,
    totalOrders: 518,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "3",
    name: "Abdul Rahman",
    farmName: "Fresh Catch Fish Farm",
    location: "Alappuzha, Kerala",
    categories: ["Fish"],
    rating: 4.7,
    totalOrders: 267,
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "4",
    name: "Priya Sharma",
    farmName: "Himalayan Dairy Co-op",
    location: "Dehradun, Uttarakhand",
    categories: ["Dairy", "Meat"],
    rating: 4.6,
    totalOrders: 189,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    verified: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FeaturedFarmers() {
  return (
    <Section className="py-24 md:py-32 bg-gradient-to-b from-white to-forest-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Trusted by Thousands"
            title="Featured Farmers"
            description="Meet some of our most loved KVK-verified farmers, handpicked for their exceptional quality and commitment."
            align="left"
          />
          <Link
            href="/farmers"
            className="flex items-center gap-2 text-forest-600 hover:text-forest-800 font-semibold font-[family-name:var(--font-display)] transition-colors group mt-4 md:mt-0 shrink-0"
          >
            View All Farmers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {farmers.map((farmer) => (
            <motion.div key={farmer.id} variants={cardVariants}>
              <Link href={`/farmers/${farmer.id}`}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 24px 48px -12px rgba(11, 61, 46, 0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl overflow-hidden border border-forest-100/50 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={farmer.image}
                      alt={farmer.farmName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />

                    {/* Verified badge */}
                    {farmer.verified && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="verified" animated>
                          KVK Verified
                        </Badge>
                      </div>
                    )}

                    {/* Avatar */}
                    <div className="absolute -bottom-5 left-5">
                      <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden shadow-lg">
                        <img
                          src={farmer.avatar}
                          alt={farmer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 pt-8">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-forest-900 mb-0.5">
                      {farmer.farmName}
                    </h3>
                    <p className="text-sm text-forest-600 mb-1">
                      {farmer.name}
                    </p>
                    <p className="text-xs text-forest-500 flex items-center gap-1 mb-3">
                      <MapPin className="w-3 h-3" />
                      {farmer.location}
                    </p>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {farmer.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs px-2 py-0.5 bg-forest-50 text-forest-600 rounded-full font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-3 border-t border-forest-100">
                      <span className="flex items-center gap-1 text-sm font-semibold text-amber-600">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {farmer.rating}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-forest-500">
                        <ShoppingBag className="w-3 h-3" />
                        {farmer.totalOrders} orders
                      </span>
                    </div>
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
