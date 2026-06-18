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
  const classes = cn("glass relative overflow-hidden rounded-lg p-6", className);

  if (hover) {
    return (
      <motion.div
        whileHover={{
          y: -6,
          borderColor: "rgba(255, 255, 255, 0.18)",
          boxShadow: "0 26px 80px rgba(0, 0, 0, 0.52), 0 0 34px rgba(37, 99, 235, 0.09)",
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className={classes}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
}
