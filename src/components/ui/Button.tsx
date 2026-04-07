"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** 
 * Reusable Animated Button Component 
 * Omit conflicting props between React and Framer Motion (onDrag, etc.)
 */
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer gap-2";
    
    const variants = {
      primary: "bg-primary text-white hover:brightness-110",
      outline: "bg-transparent border border-outline-variant text-primary hover:bg-surface-container-low hover:border-primary",
      ghost: "bg-transparent text-on-surface-variant hover:bg-surface-container-low",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-10 text-lg",
    };

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
