"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MessageSquare, Sparkles, Film } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui";

export function HowItWorksSection() {
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const steps = [
    {
      icon: MessageSquare,
      title: "1. Descreva seu desejo",
      description:
        'Digite o que você quer assistir. Frases como "um filme tenso de ficção científica dos anos 80 com reviravoltas no final" são suficientes.',
    },
    {
      icon: Sparkles,
      title: "2. A IA processa",
      description:
        "Nosso modelo de linguagem interpreta o contexto da sua mensagem, analisando sinopse, sentimentos e gênero semântico.",
    },
    {
      icon: Film,
      title: "3. Descubra e assista",
      description:
        "Receba uma lista de recomendações personalizadas integradas à base do TMDB, contendo sinopse, elenco e em quais streamings assistir.",
    },
  ];

  return (
    <Section id="como-funciona" className="border-t border-white/[0.02] py-24">
      <div className="mb-20 flex flex-col items-center gap-4 text-center">
        <Badge variant="outline">Como Funciona</Badge>
        <h2 className="font-display max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
          Simples como descrever um sentimento.
        </h2>
        <p className="mt-2 max-w-lg text-sm text-neutral-400 sm:text-base">
          Elimine a burocracia dos filtros tradicionais. Apenas fale com a Inteligência Artificial.
        </p>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {/* Connection Line (Desktop) */}
        <div className="absolute top-[44px] right-[15%] left-[15%] z-0 hidden h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stepVariants}
            className="group relative z-10 flex flex-col items-center gap-6 px-4 text-center"
          >
            {/* Icon Bubble */}
            <div className="bg-sp-surface relative flex h-[88px] w-[88px] items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all duration-300 group-hover:border-white/20 group-hover:text-white">
              {/* Glow Behind Icon on hover */}
              <div className="absolute inset-0 rounded-full bg-white/[0.01] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              <step.icon size={32} className="relative z-10" />
            </div>

            {/* Content */}
            <div className="flex max-w-sm flex-col gap-2.5">
              <h3 className="font-display text-lg font-medium tracking-wide text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed font-light text-neutral-400">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
