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
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-white text-black shadow-[0_0_28px_rgba(255,255,255,0.16)] hover:bg-blue-50 hover:shadow-[0_0_34px_rgba(37,99,235,0.35)] active:scale-[0.98]",
    secondary:
      "border border-white/[0.12] bg-white/[0.055] text-white hover:border-white/[0.24] hover:bg-white/[0.09] active:scale-[0.98]",
    ghost: "text-neutral-400 hover:bg-white/[0.06] hover:text-white active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
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
