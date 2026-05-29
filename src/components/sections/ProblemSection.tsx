"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Badge, GlassCard, GradientText } from "@/components/ui";

export function ProblemSection() {
  const cardVariants: Variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 50,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const stats = [
    {
      value: "21 min",
      label: "Fadiga de Catálogo",
      description:
        "Média diária que uma pessoa gasta navegando em catálogos infinitos de streaming antes de decidir o que assistir.",
      direction: -1, // slides in from left
    },
    {
      value: "73%",
      label: "Subscription Burnout",
      description:
        "Dos usuários sofrem com a sobrecarga de opções e sentem-se frustrados com a fragmentação de conteúdos.",
      direction: 0, // slides up from center
    },
    {
      value: "82%",
      label: "Sistemas Ineficientes",
      description:
        "Das recomendações de algoritmos tradicionais falham em captar o humor atual do espectador, sugerindo títulos repetitivos.",
      direction: 1, // slides in from right
    },
  ];

  return (
    <Section id="problema" className="relative border-t border-white/[0.02] py-24">
      {/* Background radial shade */}
      <div className="bg-gradient-section pointer-events-none absolute inset-0" />

      <div className="relative z-10 mb-16 flex flex-col items-center gap-4 text-center">
        <Badge variant="outline">O Problema</Badge>
        <h2 className="font-display max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
          Você passa mais tempo escolhendo do que assistindo.
        </h2>
        <p className="mt-2 max-w-lg text-sm text-neutral-400 sm:text-base">
          A fragmentação de serviços de streaming e o crescimento acelerado de catálogos criaram um
          paradoxo da escolha.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            custom={stat.direction}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <GlassCard
              hover
              className="flex h-full flex-col gap-4 border border-white/5 bg-white/[0.02] p-8"
            >
              <GradientText className="font-display text-4xl font-bold sm:text-5xl">
                {stat.value}
              </GradientText>
              <h3 className="font-display text-lg font-medium tracking-wide text-white">
                {stat.label}
              </h3>
              <p className="text-sm leading-relaxed font-light text-neutral-400">
                {stat.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
