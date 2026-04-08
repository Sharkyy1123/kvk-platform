"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Star,
  ShoppingBag,
  Wheat,
  Fish,
  Beef,
  Milk,
  Leaf,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const categories = [
  { name: "All", icon: null, value: "all" },
  { name: "Crops", icon: Wheat, value: "crops" },
  { name: "Fish", icon: Fish, value: "fish" },
  { name: "Meat", icon: Beef, value: "meat" },
  { name: "Dairy", icon: Milk, value: "dairy" },
  { name: "Manure", icon: Leaf, value: "manure" },
];

const products = [
  {
    id: "1",
    name: "Organic Basmati Rice",
    farmer: "Green Valley Organic Farm",
    farmerId: "1",
    category: "crops",
    price: 120,
    unit: "kg",
    rating: 4.8,
    orders: 234,
    isOrganic: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    location: "Nashik, MH",
  },
  {
    id: "2",
    name: "Farm Fresh Eggs",
    farmer: "Sunrise Organic Gardens",
    farmerId: "2",
    category: "meat",
    price: 85,
    unit: "dozen",
    rating: 4.9,
    orders: 567,
    isOrganic: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=400&h=300&fit=crop",
    location: "Coimbatore, TN",
  },
  {
    id: "3",
    name: "Fresh Rohu Fish",
    farmer: "Fresh Catch Fish Farm",
    farmerId: "3",
    category: "fish",
    price: 280,
    unit: "kg",
    rating: 4.7,
    orders: 189,
    isOrganic: false,
    verified: true,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    location: "Alappuzha, KL",
  },
  {
    id: "4",
    name: "Pure A2 Cow Milk",
    farmer: "Himalayan Dairy Co-op",
    farmerId: "4",
    category: "dairy",
    price: 70,
    unit: "litre",
    rating: 4.6,
    orders: 890,
    isOrganic: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
    location: "Dehradun, UK",
  },
  {
    id: "5",
    name: "Vermicompost Premium",
    farmer: "Sunrise Organic Gardens",
    farmerId: "2",
    category: "manure",
    price: 15,
    unit: "kg",
    rating: 4.5,
    orders: 145,
    isOrganic: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    location: "Coimbatore, TN",
  },
  {
    id: "6",
    name: "Organic Mangoes (Alphonso)",
    farmer: "Green Valley Organic Farm",
    farmerId: "1",
    category: "crops",
    price: 450,
    unit: "dozen",
    rating: 4.9,
    orders: 312,
    isOrganic: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop",
    location: "Nashik, MH",
  },
  {
    id: "7",
    name: "Country Chicken",
    farmer: "Himalayan Dairy Co-op",
    farmerId: "4",
    category: "meat",
    price: 350,
    unit: "kg",
    rating: 4.7,
    orders: 201,
    isOrganic: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop",
    location: "Dehradun, UK",
  },
  {
    id: "8",
    name: "Pure Desi Ghee",
    farmer: "Himalayan Dairy Co-op",
    farmerId: "4",
    category: "dairy",
    price: 650,
    unit: "litre",
    rating: 4.8,
    orders: 456,
    isOrganic: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1631209121750-a9f656ddd5ab?w=400&h=300&fit=crop",
    location: "Dehradun, UK",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.farmer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -right-20 top-0 w-96 h-96 bg-forest-500/10 rounded-full blur-[120px]"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="verified" animated className="mb-4">
              All Products Verified
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-white mb-4 tracking-tight">
              Fresh From The Farm
            </h1>
            <p className="text-forest-200/70 text-lg max-w-xl mx-auto">
              Browse authentic produce from KVK-verified farmers across India
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, farmers, categories..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-forest-600/30 text-white placeholder-forest-300/50 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-forest-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.value)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-display)] transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-forest-900 text-white shadow-lg shadow-forest-900/20"
                    : "bg-forest-50 text-forest-600 hover:bg-forest-100"
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <Section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-forest-600 font-medium">
              Showing{" "}
              <span className="text-forest-900 font-bold">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory + searchQuery}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px -12px rgba(11, 61, 46, 0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl overflow-hidden border border-forest-100/50 group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {product.isOrganic && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="organic">🌿 Organic</Badge>
                      </div>
                    )}
                    {product.verified && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="verified">Verified</Badge>
                      </div>
                    )}

                    {/* Price tag */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                      <span className="text-lg font-bold text-forest-900 font-[family-name:var(--font-display)]">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-forest-500">
                        /{product.unit}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold font-[family-name:var(--font-display)] text-forest-900 mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <Link
                      href={`/farmers/${product.farmerId}`}
                      className="text-sm text-forest-500 hover:text-forest-700 transition-colors"
                    >
                      {product.farmer}
                    </Link>

                    <div className="flex items-center gap-2 mt-2 text-xs text-forest-500">
                      <MapPin className="w-3 h-3" />
                      {product.location}
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-forest-50">
                      <span className="flex items-center gap-1 text-sm text-amber-600 font-medium">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {product.rating}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-forest-400">
                        <ShoppingBag className="w-3 h-3" />
                        {product.orders} sold
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-forest-50 flex items-center justify-center">
                <Search className="w-8 h-8 text-forest-300" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800 font-[family-name:var(--font-display)] mb-2">
                No products found
              </h3>
              <p className="text-forest-500">
                Try adjusting your search or category filter
              </p>
            </motion.div>
          )}
        </div>
      </Section>
    </div>
  );
}
