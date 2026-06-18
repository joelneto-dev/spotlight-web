import React from "react";
import type { Metadata } from "next";
import { BrainCircuit, Database, Film, Smartphone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GlassCard, GradientText } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, motivação acadêmica e tecnologias do projeto Spotlight - TCC COTIL/UNICAMP 2026",
};

export default function SobrePage() {
  const stack = [
    ["Mobile", "Flutter", "Aplicativo multiplataforma com experiência fluida."],
    ["Backend", "FastAPI", "Camada de API para IA, validação e integração externa."],
    ["Dados", "Supabase", "Autenticação e persistência do ecossistema."],
    ["Catálogo", "TMDb API", "Metadados, imagens e informações de filmes."],
  ];

  const pillars = [
    { icon: Smartphone, label: "Mobile first" },
    { icon: BrainCircuit, label: "NLP e IA" },
    { icon: Film, label: "Cinema e séries" },
    { icon: Database, label: "Dados reais" },
  ];

  return (
    <div className="bg-sp-base relative min-h-screen overflow-hidden pb-24 pt-32">
      <div className="spotlight-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" />

      <Section className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="flex max-w-4xl flex-col gap-5">
            <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-7xl">
              Iluminando escolhas no mar de{" "}
              <GradientText>opções cinematográficas.</GradientText>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-neutral-400">
              Spotlight é o TCC desenvolvido por alunos do {SITE_CONFIG.tcc.class} do
              COTIL/UNICAMP em cooperação com o SENAI. A proposta é reduzir a fadiga de decisão em
              streamings usando busca em linguagem natural e recomendações com IA.
            </p>
          </div>

          <GlassCard className="p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-blue-200">
              essência do produto
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="rounded-lg bg-white/[0.04] p-4">
                  <pillar.icon size={20} className="text-blue-200" />
                  <p className="mt-3 text-sm font-semibold text-white">{pillar.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassCard className="p-7 sm:p-9">
            <h2 className="font-display text-3xl font-semibold text-white">História e motivação</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-neutral-400">
              <p>
                A ideia surgiu de uma frustração comum: abrir um serviço de streaming, percorrer
                fileiras infinitas e ainda assim não saber o que assistir. Esse excesso de opções
                cria uma experiência lenta, repetitiva e pouco conectada ao momento do usuário.
              </p>
              <p>
                O Spotlight propõe uma alternativa mais humana. Em vez de começar por filtros
                rígidos, o usuário descreve o que quer sentir, lembrar ou explorar. A IA interpreta
                essa intenção e transforma a frase em recomendações acionáveis.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-7 sm:p-9">
            <h2 className="font-display text-3xl font-semibold text-white">Stack técnica</h2>
            <div className="mt-6 space-y-4">
              {stack.map(([area, tech, description]) => (
                <div key={area} className="border-l border-white/10 pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    {area}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{tech}</p>
                  <p className="mt-1 text-sm leading-6 text-neutral-400">{description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}
