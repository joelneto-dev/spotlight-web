"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button, GradientText } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function HeroSection() {
  return (
    <Section className="flex min-h-screen items-center pb-16 pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="spotlight-glow absolute inset-x-0 top-0 h-[680px]"
        />
        <motion.div
          animate={{ x: ["-12%", "8%", "-12%"], opacity: [0.22, 0.38, 0.22] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-20 h-[520px] w-[180px] -translate-x-1/2 rotate-12 bg-blue-500/[0.18] blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col items-start gap-7"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display max-w-4xl text-5xl leading-[0.98] font-semibold text-white sm:text-6xl lg:text-7xl"
          >
            Encontre o filme certo para o seu{" "}
            <GradientText className="block">momento.</GradientText>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg"
          >
            O Spotlight transforma uma descrição livre em recomendações precisas de filmes e séries,
            combinando IA, catálogo do TMDb e uma experiência mobile feita para decidir rápido.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Button href={SITE_CONFIG.appUrl} external variant="primary" size="lg" className="group">
              Acessar o app
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/como-funciona" variant="secondary" size="lg">
              Ver arquitetura
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid w-full max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10"
          >
            {[
              ["10k+", "títulos mapeados"],
              ["NLP", "busca semântica"],
              ["Flutter", "app mobile"],
            ].map(([value, label]) => (
              <div key={value} className="bg-black/[0.55] p-4 backdrop-blur-md sm:p-5">
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-neutral-500 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
