import React from "react";
import type { Metadata } from "next";
import { Code, Database, Layout, Server } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button, GlassCard, GradientText } from "@/components/ui";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça os desenvolvedores por trás do Spotlight - TCC COTIL/UNICAMP 2026",
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function EquipePage() {
  const members = [
    {
      name: "Joel João de Araujo Neto",
      ra: "204244",
      role: "Arquiteto & Dev Full Stack",
      icon: Server,
      description:
        "Responsável pela arquitetura geral, Supabase, APIs em FastAPI, design patterns e coordenação técnica.",
      github: "https://github.com/joeljoao",
    },
    {
      name: "Andrei Silva de Oliveira",
      ra: "204010",
      role: "Dev Mobile & UI/UX",
      icon: Layout,
      description:
        "Responsável pela interface mobile em Flutter, prototipagem, design system e microinterações.",
      github: "https://github.com/joeljoao/spotlight",
    },
    {
      name: "Luan Henrique Ferreira",
      ra: "204267",
      role: "Dev Backend & Banco de Dados",
      icon: Database,
      description:
        "Responsável por endpoints auxiliares, tratamento de dados, cache e integração com o TMDb.",
      github: "https://github.com/joeljoao/spotlight",
    },
    {
      name: "Miguel Vinhado",
      ra: "204572",
      role: "Dev IA & NLP Specialist",
      icon: Code,
      description:
        "Responsável por engenharia de prompts, scoring semântico e limpeza dos retornos de IA.",
      github: "https://github.com/joeljoao/spotlight",
    },
  ];

  return (
    <div className="bg-sp-base relative min-h-screen overflow-hidden pb-24 pt-32">
      <div className="spotlight-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" />

      <Section className="relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-7xl">
            Quem constrói o <GradientText>futuro do Spotlight.</GradientText>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            Equipe de desenvolvimento unindo infraestrutura backend, interfaces fluidas, dados e
            inteligência artificial.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {members.map((member) => (
            <GlassCard key={member.ra} hover className="flex h-full flex-col gap-6 p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white font-display text-base font-semibold text-black">
                  {initials(member.name)}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-white">{member.name}</h2>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono text-neutral-500">RA {member.ra}</span>
                    <span className="rounded-full bg-blue-500/[0.12] px-2 py-1 font-mono uppercase tracking-[0.12em] text-blue-200">
                      <member.icon className="mr-1 inline" size={12} />
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-7 text-neutral-400">{member.description}</p>

              <div className="mt-auto border-t border-white/[0.08] pt-5">
                <Button href={member.github} external variant="secondary" size="sm">
                  GitHub
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
