"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button, GlassCard } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

const memberVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function GithubMark() {
  return (
    <svg className="h-[15px] w-[15px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.05.13 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function LinkedinMark() {
  return (
    <svg className="h-[15px] w-[15px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5ZM8 19H5V8h3v11ZM6.5 6.73c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75ZM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.47V19Z" />
    </svg>
  );
}

export function TeamSection() {
  return (
    <Section id="equipe" className="border-t border-white/[0.04] py-24">
      <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <h2 className="font-display text-4xl leading-tight font-semibold text-white sm:text-5xl">
            Construído por estudantes do {SITE_CONFIG.tcc.class}.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-neutral-400 lg:justify-self-end">
          Um projeto de TCC que combina desenvolvimento mobile, backend, dados, IA e produto em uma
          experiência única de recomendação.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SITE_CONFIG.team.map((member, index) => (
          <motion.div
            key={member.ra}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={memberVariants}
          >
            <GlassCard hover className="flex h-full flex-col gap-5 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white font-display text-sm font-semibold text-black">
                  {initials(member.name)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-white">{member.name}</h3>
                  <p className="font-mono text-[10px] text-neutral-500">RA {member.ra}</p>
                </div>
              </div>

              <p className="text-sm leading-6 text-neutral-400">{member.role}</p>

              <div className="mt-auto flex items-center gap-2 border-t border-white/[0.08] pt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:text-blue-200"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <LinkedinMark />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:text-white"
                  aria-label={`GitHub de ${member.name}`}
                >
                  <GithubMark />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/equipe" variant="secondary" className="group">
          Ver perfil completo
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </Section>
  );
}
