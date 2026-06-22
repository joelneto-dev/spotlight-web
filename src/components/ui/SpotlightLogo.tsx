"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightLogoProps {
  variant?: "dark" | "light";
  size?: number;
  className?: string;
  animated?: boolean;
  alt?: string;
}

const iconByVariant = {
  dark: "/assets/brand/spotlight-icon-light.png",
  light: "/assets/brand/spotlight-icon-dark.png",
} as const;

export function SpotlightLogo({
  variant = "dark",
  size = 40,
  className,
  animated = false,
  alt = "Spotlight",
}: SpotlightLogoProps) {
  const src = iconByVariant[variant];
  const classes = cn("block shrink-0", className);
  const image = (
    <Image
      src={src}
      width={size}
      height={size}
      alt={alt}
      draggable={false}
      className="h-full w-full select-none object-contain"
    />
  );

  if (animated) {
    return (
      <motion.span
        className={classes}
        style={{ width: size, height: size }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.92, 1, 0.92] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {image}
      </motion.span>
    );
  }

  return <span className={classes}>{image}</span>;
}
