"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Badge, GlassCard, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function TeamSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Section id="equipe" className="border-t border-white/[0.02] py-24">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <Badge variant="outline">A Equipe</Badge>
        <h2 className="font-display max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
          Desenvolvido por estudantes do 3ºDSN.
        </h2>
        <p className="mt-2 max-w-lg text-sm text-neutral-400 sm:text-base">
          Conheça os alunos responsáveis pela modelagem, desenvolvimento e implantação do
          ecossistema Spotlight.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4"
      >
        {SITE_CONFIG.team.map((member) => {
          const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            member.name
          )}&background=2563EB&color=fff&size=128&bold=true`;

          return (
            <motion.div key={member.ra} variants={cardVariants}>
              <GlassCard
                hover
                className="flex h-full flex-col items-center gap-5 border border-white/5 bg-white/[0.01] p-6 text-center"
              >
                {/* Avatar Initial Placeholder */}
                <img
                  src={avatarUrl}
                  alt={member.name}
                  className="h-16 w-16 rounded-full border border-white/10 select-none pointer-events-none"
                />

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm leading-snug font-semibold tracking-wide text-white">
                    {member.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                    RA {member.ra}
                  </span>
                  <span className="mt-2 block text-xs text-neutral-400">{member.role}</span>
                </div>

                {/* Social Links */}
                <div className="mt-auto pt-3 flex items-center justify-center gap-3 border-t border-white/5 w-full">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-[#3B82F6] transition-colors p-1"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <svg className="w-4 h-4 fill-current text-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors p-1"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <svg className="w-4 h-4 fill-current text-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <Button href="/equipe" variant="secondary" className="group">
          Ver Perfil Completo
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </Section>
  );
}
