"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Cpu, Database, Heart, MessageSquare, Moon, Search } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GlassCard } from "@/components/ui";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

export function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: "Base TMDb",
      description: "Metadados, sinopses, elenco, capas e informações de catálogo.",
    },
    {
      icon: Cpu,
      title: "IA inteligente",
      description: "Interpretação de nuances, atmosfera e intenção do pedido.",
    },
    {
      icon: Heart,
      title: "Favoritos",
      description: "Listas pessoais para guardar o que você quer assistir depois.",
    },
    {
      icon: MessageSquare,
      title: "Chat conversacional",
      description: "Refine a busca sem reiniciar o processo de descoberta.",
    },
    {
      icon: Moon,
      title: "Dark por padrão",
      description: "Interface pensada para uso confortável à noite.",
    },
  ];

  return (
    <Section id="funcionalidades" className="border-t border-white/[0.04] py-24">
      <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight font-semibold text-white sm:text-5xl">
            Ferramentas para sair da dúvida e ir para o play.
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-neutral-400">
          Cada recurso foi pensado para remover uma pequena fricção da experiência de escolher algo
          para assistir.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        <GlassCard className="relative min-h-[420px] overflow-hidden p-7 sm:p-9">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(37,99,235,0.24),transparent_34%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black">
              <Search size={26} />
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                recurso central
              </p>
              <h3 className="mt-3 font-display text-4xl font-semibold text-white">
                Busca semântica
              </h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-neutral-300">
                Escreva como se estivesse falando com alguém que entende cinema: “quero algo
                melancólico, bonito, com mistério e final marcante”. O Spotlight entende o contexto
                e entrega sugestões coerentes.
              </p>
            </div>
          </div>
        </GlassCard>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
            >
              <GlassCard hover className="flex h-full flex-col gap-4 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-blue-200">
                  <feature.icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{feature.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
