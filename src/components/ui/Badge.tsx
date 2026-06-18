import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
}

export function Badge({ children, variant = "outline", className }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-300 select-none";

  const variants = {
    outline: "border border-white/10 bg-white/[0.035] text-neutral-300 backdrop-blur-md",
    solid: "bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.14)]",
  };

  return <span className={cn(baseStyles, variants[variant], className)}>{children}</span>;
}
