import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Badge, GlassCard, GradientText, Button } from "@/components/ui";
import { Code, Layout, Server, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça os desenvolvedores por trás do Spotlight — TCC COTIL/UNICAMP 2026",
};

export default function EquipePage() {
  const membersDetail = [
    {
      name: "Joel João de Araujo Neto",
      ra: "204244",
      role: "Arquiteto & Dev Full Stack",
      icon: Server,
      description:
        "Líder técnico do projeto. Responsável pela arquitetura geral do sistema, configuração e modelagem do Supabase, desenvolvimento das APIs do backend com FastAPI, design patterns e coordenação de CI/CD.",
      github: "https://github.com/joeljoao",
      linkedin: "#", // TODO: Preencher com LinkedIn real (ex: https://linkedin.com/in/nome)
    },
    {
      name: "Andrei Silva de Oliveira",
      ra: "204010",
      role: "Dev Mobile & UI/UX",
      icon: Layout,
      description:
        "Responsável pelo desenvolvimento da interface do aplicativo principal em Flutter, prototipagem de UI/UX, criação do design system móvel e refinamento de transições e micro-animações.",
      github: "https://github.com/joeljoao/spotlight", // Fallback para repo do projeto
      linkedin: "#", // TODO: Preencher com LinkedIn real
    },
    {
      name: "Luan Henrique Ferreira",
      ra: "204267",
      role: "Dev Backend & Banco de Dados",
      icon: Database,
      description:
        "Responsável pelo desenvolvimento de endpoints auxiliares no FastAPI, lógica de cacheamento local dos filmes no Flutter, tratamento de exceções de conexão e integração com o TMDb.",
      github: "https://github.com/joeljoao/spotlight",
      linkedin: "#", // TODO: Preencher com LinkedIn real
    },
    {
      name: "Miguel Vinhado",
      ra: "204572",
      role: "Dev IA & NLP Specialist",
      icon: Code,
      description:
        "Responsável pela engenharia de prompts (Prompt Engineering) para as LLMs (Gemini e Groq), sintonia do scoring de relevância semântica e limpeza de dados retornados pela IA.",
      github: "https://github.com/joeljoao/spotlight",
      linkedin: "#", // TODO: Preencher com LinkedIn real
    },
  ];

  return (
    <div className="bg-sp-base relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Background Spotlight Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="spotlight-glow absolute -top-[10%] h-[600px] w-[600px] opacity-35 blur-3xl" />
      </div>

      <Section className="relative z-10">
        {/* Header */}
        <div className="mb-16 flex max-w-3xl flex-col gap-4">
          <Badge variant="outline">Os Autores</Badge>
          <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight text-white sm:text-6xl">
            Quem constrói o <GradientText>futuro do Spotlight.</GradientText>
          </h1>
          <p className="mt-2 font-sans text-lg leading-relaxed font-light text-neutral-400 sm:text-xl">
            Equipe de desenvolvimento unindo infraestrutura backend, interfaces fluidas e
            inteligência artificial.
          </p>
        </div>

        {/* Members Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {membersDetail.map((member) => {
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
              member.name
            )}&background=2563EB&color=fff&size=128&bold=true`;

            return (
              <GlassCard
                key={member.ra}
                className="flex h-full flex-col justify-between gap-6 border border-white/5 bg-white/[0.01] p-8"
              >
                <div className="flex flex-col gap-5">
                  {/* Header card info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={avatarUrl}
                      alt={member.name}
                      className="h-14 w-14 rounded-full border border-white/10 select-none pointer-events-none"
                    />
                    <div className="flex flex-col">
                      <h2 className="font-display text-lg font-medium tracking-wide text-white">
                        {member.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                          RA {member.ra}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-white/10" />
                        <span className="flex items-center gap-1 text-[10px] text-[#3B82F6] font-mono uppercase font-semibold">
                          <member.icon size={10} />
                          {member.role.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/5" />

                  {/* Role and details */}
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
                      {member.role}
                    </span>
                    <p className="text-sm leading-relaxed font-light text-neutral-400">
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="font-mono text-[10px] text-neutral-500">COTIL / UNICAMP</span>
                  <div className="flex items-center gap-2">
                    <Button
                      href={member.linkedin}
                      external
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1.5 text-neutral-400 hover:text-[#3B82F6]"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </Button>
                    <Button
                      href={member.github}
                      external
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </Button>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
