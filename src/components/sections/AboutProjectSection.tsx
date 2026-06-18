"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { BrainCircuit, Database, Film, Smartphone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GlassCard, GradientText } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

const techVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

export function AboutProjectSection() {
  const techs = [
    {
      icon: Smartphone,
      name: "Flutter",
      desc: "Aplicativo mobile fluido para Android e iOS.",
    },
    {
      icon: Database,
      name: "Supabase",
      desc: "Autenticação, dados persistentes e base do usuário.",
    },
    {
      icon: Film,
      name: "TMDb",
      desc: "Metadados, capas, elenco e informações de streaming.",
    },
    {
      icon: BrainCircuit,
      name: "Gemini AI",
      desc: "Interpretação semântica de pedidos em linguagem natural.",
    },
  ];

  return (
    <Section id="sobre-projeto" className="relative border-t border-white/[0.04] py-24">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <h2 className="font-display max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
            Uma ponte entre desejo, catálogo e{" "}
            <GradientText>inteligência artificial.</GradientText>
          </h2>
          <p className="max-w-2xl text-base leading-8 text-neutral-400">
            Desenvolvido como TCC no <strong>{SITE_CONFIG.tcc.institution}</strong> em parceria com
            o SENAI, o Spotlight organiza a descoberta de filmes em torno de intenção: o usuário
            descreve o clima, a IA estrutura a busca e o app entrega recomendações acionáveis.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {["Busca semântica", "Listas personalizadas", "Onde assistir", "Notas da comunidade"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-neutral-200"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <GlassCard className="p-0">
          <div className="border-b border-white/10 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-blue-200">
              Pipeline Spotlight
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Da frase livre até uma recomendação verificável com dados reais de catálogo.
            </p>
          </div>

          <div className="space-y-1 p-4">
            {["Entrada do usuário", "NLP + ranking semântico", "Consulta TMDb", "Cards no app"].map(
              (step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-lg p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                    {index + 1}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/[0.18] to-transparent" />
                  <span className="min-w-36 text-right text-sm font-medium text-white">{step}</span>
                </div>
              )
            )}
          </div>
        </GlassCard>
      </div>

      <div className="relative z-10 mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={techVariants}
          >
            <GlassCard hover className="flex h-full flex-col gap-4 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/[0.12] text-blue-200">
                <tech.icon size={19} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{tech.name}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{tech.desc}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
