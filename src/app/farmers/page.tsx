"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  MapPin,
  Star,
  ShoppingBag,
  Filter,
  Grid3X3,
  List,
  ArrowRight,
} from "lucide-react";

const farmers = [
  {
    id: "1",
    name: "Rajesh Kumar Patel",
    farmName: "Green Valley Organic Farm",
    location: "Nashik, Maharashtra",
    description:
      "Third-generation organic farmer specializing in rice, wheat, and seasonal fruits. Our farm uses zero chemicals and fully natural irrigation.",
    categories: ["Crops", "Dairy"],
    rating: 4.8,
    totalOrders: 342,
    totalProducts: 24,
    joinedDate: "2023",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "2",
    name: "Lakshmi Devi",
    farmName: "Sunrise Organic Gardens",
    location: "Coimbatore, Tamil Nadu",
    description:
      "Award-winning organic farm known for premium vegetables and vermicompost. Practicing sustainable agriculture for over 15 years.",
    categories: ["Crops", "Manure"],
    rating: 4.9,
    totalOrders: 518,
    totalProducts: 32,
    joinedDate: "2022",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "3",
    name: "Abdul Rahman",
    farmName: "Fresh Catch Fish Farm",
    location: "Alappuzha, Kerala",
    description:
      "Sustainable aquaculture farm raising rohu, catla, and tilapia in natural ponds. Chemical-free fish, fed with organic feed.",
    categories: ["Fish"],
    rating: 4.7,
    totalOrders: 267,
    totalProducts: 12,
    joinedDate: "2023",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "4",
    name: "Priya Sharma",
    farmName: "Himalayan Dairy Co-op",
    location: "Dehradun, Uttarakhand",
    description:
      "Premium dairy cooperative with free-range A2 cows. Producing pure milk, ghee, and paneer with traditional methods in the foothills.",
    categories: ["Dairy", "Meat"],
    rating: 4.6,
    totalOrders: 189,
    totalProducts: 18,
    joinedDate: "2024",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "5",
    name: "Vikram Singh",
    farmName: "Punjab Heritage Farms",
    location: "Amritsar, Punjab",
    description:
      "Celebrating Punjab's agricultural heritage with organic wheat, mustard, and seasonal produce. Family farm since 1962.",
    categories: ["Crops"],
    rating: 4.8,
    totalOrders: 412,
    totalProducts: 20,
    joinedDate: "2023",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    verified: true,
  },
  {
    id: "6",
    name: "Anitha Reddy",
    farmName: "Deccan Naturals",
    location: "Hyderabad, Telangana",
    description:
      "Innovative urban farm growing exotic vegetables and microgreens using sustainable hydroponic and soil-based methods.",
    categories: ["Crops", "Manure"],
    rating: 4.5,
    totalOrders: 156,
    totalProducts: 28,
    joinedDate: "2024",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    verified: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FarmersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFarmers = farmers.filter(
    (f) =>
      !searchQuery ||
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.farmName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -left-20 bottom-0 w-80 h-80 bg-forest-500/10 rounded-full blur-[100px]"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="verified" animated className="mb-4">
              KVK Verified Network
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-white mb-4 tracking-tight">
              Our Verified Farmers
            </h1>
            <p className="text-forest-200/70 text-lg max-w-xl mx-auto mb-8">
              Every farmer you see here has been personally verified by the KVK
              team. Real farms, real people, real produce.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search farmers by name, farm, or location..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-forest-600/30 text-white placeholder-forest-300/50 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Farmers Grid */}
      <Section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-forest-600">
              <span className="text-forest-900 font-bold">
                {filteredFarmers.length}
              </span>{" "}
              verified farmers
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={searchQuery}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredFarmers.map((farmer) => (
              <motion.div key={farmer.id} variants={cardVariants}>
                <Link href={`/farmers/${farmer.id}`}>
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow:
                        "0 24px 48px -12px rgba(11, 61, 46, 0.15)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="bg-white rounded-2xl overflow-hidden border border-forest-100/50 group cursor-pointer h-full"
                  >
                    {/* Farm Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={farmer.image}
                        alt={farmer.farmName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />

                      {farmer.verified && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="verified" animated>
                            KVK Verified
                          </Badge>
                        </div>
                      )}

                      {/* Farmer info overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-end gap-3">
                          <div className="w-14 h-14 rounded-xl border-2 border-white/80 overflow-hidden shadow-lg shrink-0">
                            <img
                              src={farmer.avatar}
                              alt={farmer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-white leading-tight">
                              {farmer.farmName}
                            </h3>
                            <p className="text-sm text-forest-200">
                              {farmer.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-xs text-forest-500 flex items-center gap-1 mb-3">
                        <MapPin className="w-3 h-3" />
                        {farmer.location} · Since {farmer.joinedDate}
                      </p>

                      <p className="text-sm text-forest-600/80 leading-relaxed mb-4 line-clamp-2">
                        {farmer.description}
                      </p>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {farmer.categories.map((cat) => (
                          <Badge key={cat} variant="category">
                            {cat}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-3 border-t border-forest-50">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-sm font-semibold text-amber-600">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            {farmer.rating}
                          </span>
                          <span className="text-xs text-forest-400">
                            {farmer.totalProducts} products
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-forest-500">
                          <ShoppingBag className="w-3 h-3" />
                          {farmer.totalOrders}
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
    </div>
  );
}
