"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export type ButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  };

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:shadow-[0_0_20px_rgba(37,99,235,0.35)] active:scale-[0.98]",
    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 active:scale-[0.98]",
    ghost: "text-neutral-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
