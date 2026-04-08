"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  Leaf,
  ShieldCheck,
  ChevronDown,
  Store,
  Users,
  Info,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  {
    label: "Marketplace",
    href: "/marketplace",
    icon: <Store className="w-4 h-4" />,
  },
  {
    label: "Farmers",
    href: "/farmers",
    icon: <Users className="w-4 h-4" />,
  },
  {
    label: "About KVK",
    href: "/about",
    icon: <Info className="w-4 h-4" />,
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgba(11,61,46,0.1)] border-b border-forest-100/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-500 to-forest-800 flex items-center justify-center shadow-lg shadow-forest-500/20">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-forest-400 rounded-full"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-[family-name:var(--font-display)] text-forest-900 tracking-tight">
                  KVK
                </span>
                <span className="text-[10px] text-forest-500 font-medium -mt-0.5 tracking-wider uppercase">
                  Verified Farms
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-forest-700 hover:text-forest-900 rounded-lg transition-colors group"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.icon}
                    {link.label}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-forest-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="nav-hover"
                  />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">
                  <ShieldCheck className="w-4 h-4" />
                  Join KVK
                </Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg text-forest-700 hover:bg-forest-50"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 text-lg font-medium text-forest-800 rounded-xl hover:bg-forest-50 transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 space-y-3 border-t border-forest-100 mt-4">
                <Link href="/auth/login" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Button size="lg" className="w-full">
                    <ShieldCheck className="w-5 h-5" />
                    Join KVK
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
