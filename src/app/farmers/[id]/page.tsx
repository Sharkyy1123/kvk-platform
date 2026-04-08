"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  MapPin,
  Star,
  ShoppingBag,
  Phone,
  Mail,
  Calendar,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Award,
  Leaf,
} from "lucide-react";

// Sample farmer detail data
const farmerData = {
  id: "1",
  name: "Rajesh Kumar Patel",
  farmName: "Green Valley Organic Farm",
  location: "Nashik, Maharashtra",
  description:
    "Third-generation organic farmer specializing in rice, wheat, and seasonal fruits. Our farm spans 25 acres in the fertile valleys of Nashik, using zero chemicals, natural irrigation from nearby streams, and traditional composting methods passed down through generations. We believe in agriculture that nourishes both the land and the consumer.",
  categories: ["Crops", "Dairy"],
  rating: 4.8,
  totalOrders: 342,
  totalReviews: 89,
  totalProducts: 24,
  farmSize: "25 acres",
  certifications: ["Organic India Certified", "FSSAI Registered", "KVK Verified"],
  phone: "+91 98765 XXXXX",
  email: "rajesh@greenvalley.in",
  joinedDate: "March 2023",
  image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&h=600&fit=crop",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  gallery: [
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  ],
  products: [
    {
      id: "1",
      name: "Organic Basmati Rice",
      price: 120,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    },
    {
      id: "6",
      name: "Alphonso Mangoes",
      price: 450,
      unit: "dozen",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop",
    },
    {
      id: "9",
      name: "Organic Wheat Flour",
      price: 65,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
    },
    {
      id: "10",
      name: "Fresh Cow Milk",
      price: 60,
      unit: "litre",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
    },
  ],
};

export default function FarmerDetailPage() {
  const farmer = farmerData;

  return (
    <div className="pt-20">
      {/* Cover Image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={farmer.image}
          alt={farmer.farmName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-6">
          <Link href="/farmers">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-20 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-forest-100/50"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src={farmer.avatar}
                    alt={farmer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-forest-900">
                    {farmer.farmName}
                  </h1>
                  <Badge variant="verified" animated>
                    KVK Verified
                  </Badge>
                </div>
                <p className="text-forest-600 text-lg mb-2">{farmer.name}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-forest-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {farmer.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Member since {farmer.joinedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Leaf className="w-4 h-4" />
                    {farmer.farmSize}
                  </span>
                </div>
              </div>

              {/* Quick stats */}
              <div className="shrink-0 flex flex-row md:flex-col gap-4 md:gap-2 md:text-right">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-xl font-bold text-forest-900 font-[family-name:var(--font-display)]">
                    {farmer.rating}
                  </span>
                  <span className="text-sm text-forest-500">
                    ({farmer.totalReviews})
                  </span>
                </div>
                <p className="text-sm text-forest-500">
                  <span className="font-semibold text-forest-700">
                    {farmer.totalOrders}
                  </span>{" "}
                  orders completed
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-forest-100/50"
            >
              <h2 className="text-xl font-bold font-[family-name:var(--font-display)] text-forest-900 mb-4">
                About the Farm
              </h2>
              <p className="text-forest-600 leading-relaxed">
                {farmer.description}
              </p>

              {/* Categories */}
              <div className="mt-6 flex flex-wrap gap-2">
                {farmer.categories.map((cat) => (
                  <Badge key={cat} variant="category">
                    {cat}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-forest-100/50"
            >
              <h2 className="text-xl font-bold font-[family-name:var(--font-display)] text-forest-900 mb-4">
                Farm Gallery
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {farmer.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl overflow-hidden aspect-[4/3]"
                  >
                    <img
                      src={img}
                      alt={`${farmer.farmName} - ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-forest-100/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold font-[family-name:var(--font-display)] text-forest-900">
                  Products ({farmer.products.length})
                </h2>
                <Link
                  href="/marketplace"
                  className="text-sm text-forest-600 hover:text-forest-800 font-medium flex items-center gap-1"
                >
                  View All
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {farmer.products.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -4 }}
                    className="flex gap-4 p-3 rounded-xl bg-forest-50/50 border border-forest-100/50 hover:bg-forest-50 transition-colors cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-forest-900 text-sm truncate">
                        {product.name}
                      </h4>
                      <p className="text-lg font-bold text-forest-700 font-[family-name:var(--font-display)] mt-1">
                        ₹{product.price}
                        <span className="text-xs font-normal text-forest-500">
                          /{product.unit}
                        </span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl p-6 border border-forest-100/50 sticky top-28"
            >
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-forest-900 mb-4">
                Contact Farmer
              </h3>
              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${farmer.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-forest-50 hover:bg-forest-100 transition-colors text-sm text-forest-700"
                >
                  <Phone className="w-4 h-4 text-forest-500" />
                  {farmer.phone}
                </a>
                <a
                  href={`mailto:${farmer.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-forest-50 hover:bg-forest-100 transition-colors text-sm text-forest-700"
                >
                  <Mail className="w-4 h-4 text-forest-500" />
                  {farmer.email}
                </a>
              </div>

              <Button className="w-full" size="lg">
                <ShoppingBag className="w-5 h-5" />
                Place Order
              </Button>

              {/* Certifications */}
              <div className="mt-6 pt-6 border-t border-forest-100">
                <h4 className="text-sm font-semibold font-[family-name:var(--font-display)] text-forest-800 mb-3">
                  Certifications
                </h4>
                <div className="space-y-2">
                  {farmer.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-2 text-sm text-forest-600"
                    >
                      <Award className="w-4 h-4 text-forest-500 shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
