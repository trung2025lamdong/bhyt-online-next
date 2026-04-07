"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all focus:outline-none disabled:opacity-50 gap-2 cursor-pointer";
    const variants = {
      primary: "bg-primary text-white hover:brightness-110",
      outline: "border border-outline-variant text-primary hover:bg-surface-container-low",
      ghost: "text-on-surface-variant hover:bg-surface-container-low",
    };
    const sizes = { sm: "h-9 px-4 text-xs", md: "h-11 px-6 text-sm", lg: "h-14 px-8 text-base uppercase tracking-widest" };
    
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
