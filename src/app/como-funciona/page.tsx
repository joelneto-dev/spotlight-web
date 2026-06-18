import React from "react";
import type { Metadata } from "next";
import { Database, Film, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GlassCard, GradientText } from "@/components/ui";

export const metadata: Metadata = {
  title: "Como Funciona",
  description:
    "Entenda a arquitetura técnica, fluxo de recomendação e processamento de IA por trás do Spotlight",
};

export default function ComoFuncionaPage() {
  const flow = [
    { icon: MessageSquare, title: "Mensagem livre", text: "O usuário descreve o que quer assistir." },
    { icon: Sparkles, title: "Interpretação por IA", text: "A intenção vira sinais semânticos." },
    { icon: Database, title: "Consulta de catálogo", text: "A API cruza dados com o TMDb." },
    { icon: Film, title: "Resposta visual", text: "O app exibe cards prontos para decidir." },
  ];

  return (
    <div className="bg-sp-base relative min-h-screen overflow-hidden pb-24 pt-32">
      <div className="spotlight-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" />

      <Section className="relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-7xl">
            Por dentro da <GradientText>arquitetura do Spotlight.</GradientText>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            O fluxo transforma linguagem natural em recomendações úteis, combinando backend,
            modelos de linguagem, catálogo externo e persistência de usuário.
          </p>
        </div>

        <GlassCard className="mt-14 p-6 sm:p-8">
          <div className="grid gap-4 lg:grid-cols-4">
            {flow.map((step, index) => (
              <div key={step.title} className="relative rounded-lg bg-white/[0.035] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black">
                  <step.icon size={20} />
                </div>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-blue-200">
                  etapa {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-white">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{step.text}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            [
              ShieldCheck,
              "Persistência e autenticação",
              "O Supabase centraliza autenticação planejada, dados de usuário e listas salvas para o ecossistema.",
            ],
            [
              Sparkles,
              "Recomendação contextual",
              "A IA considera atmosfera, intenção, gênero, período e preferências implícitas em vez de depender só de filtros.",
            ],
          ].map(([Icon, title, text]) => (
            <GlassCard key={String(title)} hover className="p-7">
              <Icon className="text-blue-200" size={22} />
              <h2 className="mt-5 font-display text-2xl font-semibold text-white">{String(title)}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-400">{String(text)}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
