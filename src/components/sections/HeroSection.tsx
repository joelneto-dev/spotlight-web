"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge, Button, GradientText } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <Section className="flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Dynamic Background Spotlight Beam */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        {/* Spotlight Beam Element */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="spotlight-glow animate-spotlight-pulse absolute -top-[20%] h-[800px] w-[800px] opacity-40 blur-3xl"
        />
        {/* Extra glowing beam */}
        <div className="pointer-events-none absolute top-0 h-[500px] w-full bg-gradient-to-b from-white/[0.02] to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex max-w-4xl flex-col items-center gap-6 px-4 text-center md:gap-8"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants}>
          <Badge variant="outline" className="flex items-center gap-1.5 px-4 py-1 text-[10px]">
            <Sparkles size={12} className="text-neutral-400" />
            TCC {SITE_CONFIG.tcc.institution} &middot; {SITE_CONFIG.tcc.year}
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Descubra. Avalie. <GradientText className="block sm:inline">Compartilhe.</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-sans text-base leading-relaxed font-light text-neutral-400 sm:text-xl"
        >
          O {SITE_CONFIG.name} é a plataforma inteligente que redefine como você encontra e avalia filmes e séries.
          Descubra novos títulos com IA, crie listas personalizadas e receba recomendações baseadas no seu perfil.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <Button
            href={SITE_CONFIG.appUrl}
            external
            variant="primary"
            size="lg"
            className="group w-full sm:w-auto"
          >
            Acessar o App
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button href="/como-funciona" variant="secondary" size="lg" className="w-full sm:w-auto">
            Como Funciona
          </Button>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={itemVariants}
          className="mt-6 grid w-full max-w-3xl grid-cols-1 gap-6 rounded-2xl border border-white/5 bg-white/[0.01] p-6 backdrop-blur-sm sm:grid-cols-3 sm:gap-4 md:mt-10"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-display text-3xl font-bold text-white sm:text-4xl">10.000+</span>
            <span className="mt-1 text-xs text-neutral-400">Títulos no catálogo</span>
          </div>
          <div className="flex flex-col items-center justify-center border-y border-white/5 py-4 sm:border-y-0 sm:border-x sm:border-white/5 sm:py-0">
            <span className="font-display text-3xl font-bold text-[#3B82F6] sm:text-4xl">IA Generativa</span>
            <span className="mt-1 text-xs text-neutral-400">Recomendações semânticas</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-display text-3xl font-bold text-white sm:text-4xl">iOS & Android</span>
            <span className="mt-1 text-xs text-neutral-400">Desenvolvido em Flutter</span>
          </div>
        </motion.div>

        {/* Social Proof / Credits */}
        <motion.div
          variants={itemVariants}
          className="mt-8 font-mono text-xs tracking-widest text-neutral-500 uppercase md:mt-12"
        >
          Desenvolvido por 4 estudantes &middot; {SITE_CONFIG.tcc.institution} &middot;{" "}
          {SITE_CONFIG.tcc.class}
        </motion.div>
      </motion.div>
    </Section>
  );
}
