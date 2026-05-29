"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  if (hover) {
    return (
      <motion.div
        whileHover={{
          scale: 1.02,
          borderColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.03)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "glass relative overflow-hidden rounded-2xl p-6 transition-colors duration-300",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cn("glass relative overflow-hidden rounded-2xl p-6", className)}>
      {children}
    </div>
  );
}
