import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Spotlight palette mapeada para Tailwind
        "sp-base": "#09090B",
        "sp-surface": "#111113",
        "sp-elevated": "#18181B",
        "sp-border": "#27272A",
        "sp-muted": "#52525B",
        "sp-secondary": "#A1A1AA",
        "sp-primary": "#FAFAFA",
      },
      fontFamily: {
        display: ["var(--font-clash-display)", "sans-serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s var(--ease-cinematic) forwards",
        "fade-in": "fadeIn 0.5s var(--ease-smooth) forwards",
        "spotlight-pulse": "spotlightPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        spotlightPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
