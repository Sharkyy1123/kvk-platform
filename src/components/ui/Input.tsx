"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({
  label,
  error,
  icon,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="relative">
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-400">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          placeholder=" "
          className={clsx(
            "peer w-full px-4 py-3.5 rounded-xl bg-white border border-forest-200 text-forest-900",
            "placeholder-transparent",
            "focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20",
            "transition-all duration-200",
            icon && "pl-12",
            error && "border-red-400 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={clsx(
            "absolute text-sm text-forest-500 transition-all duration-200 pointer-events-none",
            "peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5",
            "peer-focus:text-sm peer-focus:-top-2.5 peer-focus:bg-white peer-focus:px-1",
            "-top-2.5 bg-white px-1",
            icon
              ? "left-12 peer-placeholder-shown:left-12 peer-focus:left-3"
              : "left-3 peer-placeholder-shown:left-4 peer-focus:left-3"
          )}
        >
          {label}
        </label>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </motion.p>
      )}
    </div>
  );
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="relative">
      <textarea
        id={inputId}
        placeholder=" "
        className={clsx(
          "peer w-full px-4 py-3.5 rounded-xl bg-white border border-forest-200 text-forest-900 min-h-[120px] resize-y",
          "placeholder-transparent",
          "focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20",
          "transition-all duration-200",
          error && "border-red-400",
          className
        )}
        {...props}
      />
      <label
        htmlFor={inputId}
        className="absolute text-sm text-forest-500 transition-all duration-200 pointer-events-none -top-2.5 left-3 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:text-sm peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:px-1"
      >
        {label}
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
