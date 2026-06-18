"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Clock, Layers, Repeat2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GlassCard, GradientText } from "@/components/ui";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.62, ease: "easeOut" },
  }),
};

export function ProblemSection() {
  const stats = [
    {
      icon: Clock,
      value: "21 min",
      label: "para escolher",
      description: "Tempo médio desperdiçado navegando em catálogos antes de apertar play.",
    },
    {
      icon: Layers,
      value: "73%",
      label: "sobrecarga",
      description: "Usuários sentem frustração com excesso de opções e plataformas fragmentadas.",
    },
    {
      icon: Repeat2,
      value: "82%",
      label: "repetição",
      description: "Recomendações tradicionais ignoram o humor e o contexto do momento.",
    },
  ];

  return (
    <Section id="problema" className="border-t border-white/[0.04] py-24">
      <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex max-w-xl flex-col gap-5">
          <h2 className="font-display text-4xl leading-tight font-semibold text-white sm:text-5xl">
            O streaming ficou infinito. A decisão ficou{" "}
            <GradientText>cansativa.</GradientText>
          </h2>
          <p className="text-base leading-8 text-neutral-400">
            O Spotlight nasce para reduzir fricção: menos filtros, menos rolagem, mais intenção.
            Em vez de pedir gênero, ano e plataforma, ele entende o tipo de experiência que você
            quer viver.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-blue-600/[0.08] blur-3xl" />
          <div className="relative grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
              >
                <GlassCard hover className="flex h-full flex-col gap-5 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-blue-200">
                    <stat.icon size={18} />
                  </div>
                  <div>
                    <p className="font-display text-4xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-neutral-400">{stat.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
