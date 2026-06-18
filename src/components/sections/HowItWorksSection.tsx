"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Film, MessageSquare, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GlassCard } from "@/components/ui";

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.65, ease: "easeOut" },
  }),
};

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Descreva",
      eyebrow: "linguagem natural",
      description:
        "Você escreve algo do seu jeito: clima, gênero, época, ritmo, sensação ou referência.",
    },
    {
      icon: Sparkles,
      title: "A IA interpreta",
      eyebrow: "contexto e intenção",
      description:
        "O modelo transforma a frase em sinais semânticos e procura relações além de palavras-chave.",
    },
    {
      icon: Film,
      title: "Assista",
      eyebrow: "resultado acionável",
      description:
        "O app retorna filmes com sinopse, dados do TMDb, nota e caminho para salvar ou assistir.",
    },
  ];

  return (
    <Section id="como-funciona" className="border-t border-white/[0.04] py-24">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <h2 className="font-display max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
          Três passos, uma decisão mais rápida.
        </h2>
        <p className="max-w-xl text-base leading-7 text-neutral-400">
          O app troca formulários por conversa e transforma intenção em uma lista de filmes pronta
          para usar.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        <motion.div
          aria-hidden
          className="absolute left-[12%] right-[12%] top-14 hidden h-px bg-gradient-to-r from-transparent via-blue-300/[0.45] to-transparent lg:block"
          animate={{ opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stepVariants}
          >
            <GlassCard hover className="flex h-full flex-col gap-6 p-7 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black text-white shadow-[0_0_28px_rgba(37,99,235,0.18)]">
                <step.icon size={26} />
              </div>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-200">
                  {String(index + 1).padStart(2, "0")} · {step.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">{step.description}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
