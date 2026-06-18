import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "article" | "aside";
}

export function Section({ id, className, children, as: Component = "section" }: SectionProps) {
  return (
    <Component
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn("section-base relative w-full", className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Component>
  );
}
