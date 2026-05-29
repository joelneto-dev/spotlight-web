"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SpotlightLogo, Button } from "@/components/ui";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useScrollProgress();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-black/60 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo and Branding */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none"
          aria-label="Ir para a página inicial"
        >
          <SpotlightLogo variant="dark" size={32} animated />
          <span className="font-display text-lg font-semibold tracking-wider text-white">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors duration-200 hover:text-white ${
                  isActive ? "font-medium text-white" : "text-neutral-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <Button href="/login" variant="ghost" size="sm">
            Entrar
          </Button>
          <Button
            href={SITE_CONFIG.appUrl}
            external
            variant="primary"
            size="sm"
            className="group/btn"
          >
            Acessar App
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={toggleMenu}
          className="rounded-lg p-2 text-neutral-400 hover:text-white focus:ring-1 focus:ring-white focus:outline-none md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-white/5 bg-black/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-6 p-6" aria-label="Navegação móvel">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-base tracking-wide transition-colors ${
                      isActive ? "font-medium text-white" : "text-neutral-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="my-2 h-px bg-white/5" />
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 transition-colors hover:text-white"
              >
                Entrar
              </Link>
              <Button
                href={SITE_CONFIG.appUrl}
                external
                variant="primary"
                size="md"
                className="w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Acessar App
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
