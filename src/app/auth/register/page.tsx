"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  Leaf,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  ShieldCheck,
  Sprout,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState<"customer" | "farmer">("customer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Visual */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-forest-400/10 rounded-full blur-[100px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-12"
        >
          <div className="flex justify-center gap-4 mb-8">
            {[Leaf, ShieldCheck, Sprout].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="w-14 h-14 rounded-2xl bg-forest-800/60 border border-forest-700/30 flex items-center justify-center"
              >
                <Icon className="w-7 h-7 text-forest-400" />
              </motion.div>
            ))}
          </div>
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
            Join the Revolution
          </h2>
          <p className="text-forest-200/70 max-w-sm mx-auto leading-relaxed">
            Whether you&apos;re a farmer or a consumer, KVK brings you closer to
            authentic, verified agriculture.
          </p>
        </motion.div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-24">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-500 to-forest-800 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-display)] text-forest-900">
              KVK
            </span>
          </Link>

          <h1 className="text-3xl font-bold font-[family-name:var(--font-display)] text-forest-900 mb-2">
            Create Account
          </h1>
          <p className="text-forest-600 mb-8">
            Get started with fresh, verified produce today
          </p>

          {/* Role Selector */}
          <div className="flex gap-3 mb-8 p-1.5 bg-forest-50 rounded-xl">
            {(["customer", "farmer"] as const).map((r) => (
              <motion.button
                key={r}
                whileTap={{ scale: 0.98 }}
                onClick={() => setRole(r)}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold font-[family-name:var(--font-display)] transition-all cursor-pointer ${
                  role === r
                    ? "bg-white text-forest-900 shadow-md"
                    : "text-forest-500 hover:text-forest-700"
                }`}
              >
                {r === "customer" ? "🛒 Customer" : "🌾 Farmer"}
              </motion.button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              icon={<User className="w-5 h-5" />}
              required
            />

            <Input
              label="Email Address"
              type="email"
              icon={<Mail className="w-5 h-5" />}
              required
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                icon={<Lock className="w-5 h-5" />}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-forest-400 hover:text-forest-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {role === "farmer" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <Input label="Farm Name" type="text" required />
                <Input label="Location (District, State)" type="text" required />
                <Input label="Phone Number" type="tel" required />
              </motion.div>
            )}

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 rounded border-forest-300 text-forest-600 focus:ring-forest-500"
              />
              <label htmlFor="terms" className="text-sm text-forest-500">
                I agree to KVK&apos;s{" "}
                <Link
                  href="/terms"
                  className="text-forest-700 font-medium hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-forest-700 font-medium hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
              iconRight={<ArrowRight className="w-5 h-5" />}
            >
              {role === "farmer" ? "Apply as Farmer" : "Create Account"}
            </Button>
          </form>

          {role === "farmer" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200"
            >
              <p className="text-sm text-amber-700 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />
                Farmer accounts require KVK verification, which takes 3–5
                business days.
              </p>
            </motion.div>
          )}

          <p className="mt-8 text-center text-sm text-forest-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-forest-700 font-semibold hover:text-forest-900"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
