"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Leaf, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-500 to-forest-800 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-display)] text-forest-900">
              KVK
            </span>
          </Link>

          <h1 className="text-3xl font-bold font-[family-name:var(--font-display)] text-forest-900 mb-2">
            Welcome back
          </h1>
          <p className="text-forest-600 mb-8">
            Sign in to your account to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-forest-300 text-forest-600 focus:ring-forest-500"
                />
                <span className="text-sm text-forest-600">Remember me</span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-sm text-forest-600 hover:text-forest-800 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
              iconRight={<ArrowRight className="w-5 h-5" />}
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-forest-100" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#fafdf8] px-4 text-sm text-forest-400">
                or continue with
              </span>
            </div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-forest-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-forest-700 font-semibold hover:text-forest-900"
            >
              Sign up for free
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-500/10 rounded-full blur-[120px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center px-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-forest-500 to-forest-400 flex items-center justify-center shadow-2xl shadow-forest-500/30"
          >
            <Leaf className="w-12 h-12 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
            Trusted by 50,000+
          </h2>
          <p className="text-forest-200/70 max-w-sm mx-auto leading-relaxed">
            Join the growing community of farmers and consumers building a
            transparent agricultural ecosystem.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
