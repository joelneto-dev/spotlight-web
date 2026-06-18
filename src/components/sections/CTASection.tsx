"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button, SpotlightLogo } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export function CTASection() {
  return (
    <Section className="relative border-t border-white/[0.04] py-28">
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.7, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.12] blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/60">
          <SpotlightLogo variant="dark" size={36} animated />
        </div>
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight font-semibold text-white sm:text-6xl">
          Descreva o clima. Deixe o Spotlight encontrar o filme.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400">
          Acesse o app, escreva com suas próprias palavras e transforme indecisão em uma lista de
          recomendações prontas para assistir.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={SITE_CONFIG.appUrl} external variant="primary" size="lg" className="group">
            Acessar o Spotlight
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-600">
          Projeto acadêmico · {SITE_CONFIG.tcc.institution} · {SITE_CONFIG.tcc.year}
        </p>
      </div>
    </Section>
  );
}
