"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export function CTASection() {
  return (
    <Section className="relative overflow-hidden border-t border-white/[0.02] py-32">
      {/* Dynamic Background Spotlight Beam (Amplified) */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1.1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute h-[1000px] w-[1000px] opacity-30 blur-3xl"
          style={{
            background: "var(--gradient-cta)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center md:gap-8">
        {/* Headline */}
        <h2 className="font-display text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-6xl">
          Pronto para descobrir seu próximo favorito?
        </h2>

        {/* Subheadline */}
        <p className="max-w-xl font-sans text-sm leading-relaxed text-neutral-400 sm:text-base">
          Acesse o Spotlight agora mesmo e descreva com as suas próprias palavras o tipo de
          experiência que está buscando.
        </p>

        {/* CTA Button */}
        <div className="mt-2 w-full sm:w-auto">
          <Button
            href={SITE_CONFIG.appUrl}
            external
            variant="primary"
            size="lg"
            className="group w-full sm:w-auto"
          >
            Acessar o Spotlight
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Disclaimer */}
        <span className="mt-4 font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
          Projeto Acadêmico &middot; {SITE_CONFIG.tcc.institution} &middot; Não requer cadastro para
          experimentar
        </span>
      </div>
    </Section>
  );
}
