"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button, SpotlightLogo } from "@/components/ui";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useScrollProgress();
  const pathname = usePathname();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between border px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "w-[min(94%,76rem)] rounded-full border-white/10 bg-black/[0.72] shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "w-full border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-3 py-2 focus-visible:outline-none"
          aria-label="Ir para a página inicial"
        >
          <SpotlightLogo variant="dark" size={34} animated />
          <span className="font-display text-base font-semibold text-white sm:text-lg">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav
          className="hidden items-center rounded-full border border-white/[0.08] bg-white/[0.035] p-1 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                  isActive ? "text-black" : "text-neutral-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="/login" variant="ghost" size="sm">
            Entrar
          </Button>
          <Button href={SITE_CONFIG.appUrl} external variant="primary" size="sm" className="group">
            Acessar app
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-neutral-300 transition-colors hover:text-white focus:outline-none md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 w-[min(92%,28rem)] overflow-hidden rounded-lg border border-white/10 bg-black/[0.92] shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 p-3" aria-label="Navegação móvel">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-md px-3 py-3 text-sm transition-colors ${
                      isActive ? "bg-white text-black" : "text-neutral-300 hover:bg-white/[0.07]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="my-2 h-px bg-white/10" />
              <Button href="/login" variant="ghost" className="justify-start rounded-md">
                Entrar
              </Button>
              <Button href={SITE_CONFIG.appUrl} external variant="primary" className="mt-1 w-full">
                Acessar app
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
