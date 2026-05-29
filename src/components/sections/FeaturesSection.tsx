"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Search, Database, Cpu, Heart, MessageSquare, Moon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge, GlassCard } from "@/components/ui";

export function FeaturesSection() {
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

  const features = [
    {
      icon: Search,
      title: "Busca Semântica",
      description:
        "Escreva de forma natural, como se estivesse conversando com um atendente de locadora experiente.",
    },
    {
      icon: Database,
      title: "Base de Dados TMDB",
      description:
        "Integração instantânea com dados atualizados de mais de 800 mil títulos de filmes do The Movie Database.",
    },
    {
      icon: Cpu,
      title: "IA Inteligente",
      description:
        "Modelos avançados interpretam as nuances do seu pedido e buscam correlações e significados ocultos.",
    },
    {
      icon: Heart,
      title: "Lista de Favoritos",
      description:
        "Salve as melhores recomendações direto no seu perfil para organizar o que quer assistir depois.",
    },
    {
      icon: MessageSquare,
      title: "Chat Conversacional",
      description:
        "Converse ativamente com o Spotlight para refinar buscas ou sugerir filmes com dinâmicas de feedback.",
    },
    {
      icon: Moon,
      title: "Dark Mode por Padrão",
      description:
        "Estética refinada e interface adaptada para telas escuras, ideal para o consumo de cinema à noite.",
    },
  ];

  return (
    <Section id="funcionalidades" className="border-t border-white/[0.02] py-24">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <Badge variant="outline">Funcionalidades</Badge>
        <h2 className="font-display max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
          Tudo o que você precisa para decidir o que ver.
        </h2>
        <p className="mt-2 max-w-lg text-sm text-neutral-400 sm:text-base">
          Ferramentas modernas projetadas especificamente para resolver a fadiga de decisão dos
          cinéfilos.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={cardVariants}>
            <GlassCard
              hover
              className="flex h-full flex-col gap-4 border border-white/5 bg-white/[0.02] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 transition-colors duration-300 group-hover:text-white">
                <feature.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-medium tracking-wide text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed font-light text-neutral-400">
                {feature.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
