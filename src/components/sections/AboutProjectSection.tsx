"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Badge, GlassCard, GradientText } from "@/components/ui";
import { Smartphone, Database, Film, BrainCircuit } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function AboutProjectSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techs = [
    {
      icon: Smartphone,
      name: "Flutter",
      desc: "Interface mobile rápida e fluida desenvolvida com Dart, garantindo compatibilidade multiplataforma nativa.",
    },
    {
      icon: Database,
      name: "Supabase",
      desc: "Banco de dados em tempo real, autenticação integrada e armazenamento persistente e seguro das suas listas.",
    },
    {
      icon: Film,
      name: "TMDb API",
      desc: "Integração com a maior base de metadados de cinema do mundo para disponibilizar elenco, capas e streamings.",
    },
    {
      icon: BrainCircuit,
      name: "Gemini AI",
      desc: "Processamento de linguagem natural (NLP) de última geração para interpretar buscas semânticas em linguagem natural.",
    },
  ];

  return (
    <Section id="sobre-projeto" className="border-t border-white/[0.02] py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute -left-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 mb-16 flex flex-col items-center gap-4 text-center">
        <Badge variant="outline">O Projeto</Badge>
        <h2 className="font-display max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
          Como nasceu o <GradientText>Spotlight.</GradientText>
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-400 sm:text-base font-light">
          Desenvolvido como projeto integrador no <strong>{SITE_CONFIG.tcc.institution}</strong> em parceria com o <strong>SENAI</strong>,
          o Spotlight foi idealizado para acabar com o tempo perdido decidindo o que assistir.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mb-16">
        <GlassCard className="flex flex-col gap-4 border border-white/5 bg-white/[0.01] p-8 sm:p-10">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#3B82F6] uppercase">O Problema que resolvemos</span>
          <h3 className="font-display text-xl font-medium text-white sm:text-2xl">A fadiga de decisão no streaming</h3>
          <p className="text-sm leading-relaxed font-light text-neutral-400">
            Com dezenas de plataformas de streaming e milhares de títulos disponíveis, encontrar o que assistir tornou-se uma tarefa exaustiva. Algoritmos tradicionais baseiam-se em filtros genéricos e comerciais, ignorando o humor, sentimentos ou o que o usuário realmente deseja ver naquele exato momento.
          </p>
        </GlassCard>

        <GlassCard className="flex flex-col gap-4 border border-white/5 bg-white/[0.01] p-8 sm:p-10">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#3B82F6] uppercase">A nossa Solução</span>
          <h3 className="font-display text-xl font-medium text-white sm:text-2xl">Catálogo inteligente e centralizado</h3>
          <p className="text-sm leading-relaxed font-light text-neutral-400">
            O Spotlight centraliza os dados de múltiplos catálogos em uma interface limpa. Por meio do processamento de linguagem natural, interpretamos buscas livres, permitindo que você simplesmente diga o que deseja e obtenha recomendações precisas, elenco, onde assistir e notas da comunidade.
          </p>
        </GlassCard>
      </div>

      <div className="relative z-10 mb-8">
        <h3 className="font-display text-center text-lg font-medium text-white mb-8 tracking-wider uppercase">Tecnologias Utilizadas</h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {techs.map((tech, index) => (
            <motion.div key={index} variants={cardVariants}>
              <GlassCard hover className="flex h-full flex-col gap-4 border border-white/5 bg-white/[0.01] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                  <tech.icon size={20} className="text-[#3B82F6]" />
                </div>
                <h4 className="font-display text-base font-semibold text-white">{tech.name}</h4>
                <p className="text-xs leading-relaxed font-light text-neutral-400">{tech.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
