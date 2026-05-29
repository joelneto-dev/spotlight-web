"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightLogoProps {
  variant?: "dark" | "light";
  size?: number;
  className?: string;
  animated?: boolean;
}

export function SpotlightLogo({
  variant = "dark",
  size = 40,
  className,
  animated = false,
}: SpotlightLogoProps) {
  // dark variant (default): dark background -> outer white, inner black
  // light variant: light background -> outer black, inner white
  const outerColor = variant === "dark" ? "#FFFFFF" : "#000000";
  const innerColor = variant === "dark" ? "#000000" : "#FFFFFF";

  if (animated) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("select-none", className)}
      >
        <motion.circle
          cx="512"
          cy="512"
          r="420"
          fill={outerColor}
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="512"
          cy="512"
          r="170"
          fill={innerColor}
          initial={{ scale: 1.1 }}
          animate={{ scale: 0.9 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none", className)}
    >
      <circle cx="512" cy="512" r="420" fill={outerColor} />
      <circle cx="512" cy="512" r="170" fill={innerColor} />
    </svg>
  );
}
