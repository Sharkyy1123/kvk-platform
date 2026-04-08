"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Hash,
  PlayCircle,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Browse Farmers", href: "/farmers" },
    { label: "Categories", href: "/marketplace#categories" },
    { label: "How It Works", href: "/#how-it-works" },
  ],
  "For Farmers": [
    { label: "Register as Farmer", href: "/auth/register?role=farmer" },
    { label: "Verification Process", href: "/about#verification" },
    { label: "Farmer Dashboard", href: "/dashboard" },
    { label: "Success Stories", href: "/about#stories" },
  ],
  Support: [
    { label: "About KVK", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Hash, href: "#", label: "Instagram" },
  { icon: PlayCircle, href: "#", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="relative bg-forest-950 text-white overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-12 md:h-16 fill-[#fafdf8]"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-500 to-forest-400 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold font-[family-name:var(--font-display)] tracking-tight">
                  KVK
                </span>
                <span className="block text-[10px] text-forest-300 font-medium -mt-0.5 tracking-wider uppercase">
                  Verified Farms
                </span>
              </div>
            </Link>
            <p className="text-forest-300 leading-relaxed max-w-sm mb-6">
              India&apos;s most trusted platform connecting government-verified
              farmers directly with customers. Fresh, organic, authentic.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:support@kvk.gov.in"
                className="flex items-center gap-2.5 text-sm text-forest-300 hover:text-forest-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@kvk.gov.in
              </a>
              <a
                href="tel:+911800XXXX"
                className="flex items-center gap-2.5 text-sm text-forest-300 hover:text-forest-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                1800-XXX-XXXX (Toll Free)
              </a>
              <span className="flex items-center gap-2.5 text-sm text-forest-300">
                <MapPin className="w-4 h-4" />
                New Delhi, India
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold font-[family-name:var(--font-display)] text-white uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-forest-300 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-forest-800/50" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-forest-400 flex items-center gap-1">
            © {new Date().getFullYear()} KVK. Made with{" "}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for
            Indian farmers.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-forest-800/50 flex items-center justify-center text-forest-300 hover:bg-forest-700 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
