import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Badge, GlassCard, GradientText } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, motivação acadêmica e tecnologias do projeto Spotlight — TCC COTIL/UNICAMP 2026",
};

export default function SobrePage() {
  return (
    <div className="bg-sp-base relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Background Spotlight Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="spotlight-glow absolute -top-[10%] h-[600px] w-[600px] opacity-35 blur-3xl" />
      </div>

      <Section className="relative z-10">
        {/* Header */}
        <div className="mb-16 flex max-w-3xl flex-col gap-4">
          <Badge variant="outline">O Projeto</Badge>
          <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight text-white sm:text-6xl">
            Iluminando caminhos no mar de <GradientText>opções cinematográficas.</GradientText>
          </h1>
          <p className="mt-2 font-sans text-lg leading-relaxed font-light text-neutral-400 sm:text-xl">
            Spotlight é o Trabalho de Conclusão de Curso (TCC) / projeto integrador desenvolvido pelos alunos da turma de 3ºDSN
            (Desenvolvimento de Sistemas Noturno) do Colégio Técnico de Limeira (COTIL/UNICAMP) em cooperação com o SENAI, 2026.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Main Story Column */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <GlassCard className="flex flex-col gap-6 border border-white/5 bg-white/[0.01] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-medium tracking-wide text-white">
                História & Motivação
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed font-light text-neutral-300 sm:text-base">
                <p>
                  A ideia do Spotlight surgiu a partir de uma frustração compartilhada por milhões
                  de pessoas diariamente: o tempo excessivo desperdiçado navegando pelas interfaces
                  dos serviços de streaming sem encontrar nada para assistir. Esse fenômeno,
                  conhecido cientificamente como a **fadiga de decisão**, diminui a qualidade da
                  experiência do usuário e gera frustração.
                </p>
                <p>
                  Sistemas tradicionais de recomendação são baseados em algoritmos colaborativos
                  (como histórico de navegação) ou em direcionamentos comerciais (filmes
                  patrocinados). Eles falham em responder à pergunta mais comum dos espectadores:
                  <em>
                    {" "}
                    &ldquo;Quero assistir a algo que corresponda ao que estou sentindo ou pensando
                    agora.&rdquo;
                  </em>
                </p>
                <p>
                  Com isso em mente, nossa equipe acadêmica projetou um ecossistema que utiliza
                  **Processamento de Linguagem Natural (NLP)** e Inteligência Artificial generativa
                  para interpretar descrições textuais livres e convertê-las em recomendações
                  altamente precisas do banco do TMDB.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col gap-6 border border-white/5 bg-white/[0.01] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-medium tracking-wide text-white">
                Referências Teóricas
              </h2>
              <div className="flex flex-col gap-4 text-xs leading-relaxed font-light text-neutral-300 sm:text-sm">
                <p>
                  A fundamentação científica do Spotlight se baseia em obras clássicas sobre o
                  comportamento humano na era digital, tais como:
                </p>
                <ul className="flex list-disc flex-col gap-3 pl-5 text-neutral-400">
                  <li>
                    <strong className="text-neutral-300">
                      O Paradoxo da Escolha (Barry Schwartz):
                    </strong>{" "}
                    Como o excesso de opções gera paralisia de decisão em vez de liberdade.
                  </li>
                  <li>
                    <strong className="text-neutral-300">
                      Sistemas de Recomendação Baseados em Conteúdo:
                    </strong>{" "}
                    Artigos científicos sobre a transição de filtragens colaborativas estáticas para
                    indexações semânticas dinâmicas.
                  </li>
                  <li>
                    <strong className="text-neutral-300">Modelos de Linguagem e Embeddings:</strong>{" "}
                    Pesquisas sobre o mapeamento vetorial de sentimentos e descrições qualitativas
                    de mídias audiovisuais.
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>

          {/* Sidebar Tech Stack Column */}
          <div className="flex flex-col gap-6">
            <GlassCard className="flex flex-col gap-6 border border-white/5 bg-white/[0.01] p-8">
              <h2 className="font-display text-xl font-medium tracking-wide text-white">
                Tecnologias Utilizadas
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 border-l-2 border-white/10 py-1 pl-4">
                  <span className="font-mono text-xs tracking-wide text-neutral-500 uppercase">
                    Mobile
                  </span>
                  <span className="text-sm font-semibold text-neutral-300">Flutter (Dart)</span>
                  <span className="text-[10px] font-light text-neutral-400">
                    Aplicativo multiplataforma para celulares e tablets.
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-white/10 py-1 pl-4">
                  <span className="font-mono text-xs tracking-wide text-neutral-500 uppercase">
                    Backend & IA
                  </span>
                  <span className="text-sm font-semibold text-neutral-300">FastAPI (Python)</span>
                  <span className="text-[10px] font-light text-neutral-400">
                    APIs REST rápidas integrando Gemini e Groq.
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-white/10 py-1 pl-4">
                  <span className="font-mono text-xs tracking-wide text-neutral-500 uppercase">
                    Banco de Dados
                  </span>
                  <span className="text-sm font-semibold text-neutral-300">
                    Supabase (PostgreSQL)
                  </span>
                  <span className="text-[10px] font-light text-neutral-400">
                    Autenticação, armazenamento persistente e dados.
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-white/10 py-1 pl-4">
                  <span className="font-mono text-xs tracking-wide text-neutral-500 uppercase">
                    Web / SEO
                  </span>
                  <span className="text-sm font-semibold text-neutral-300">Next.js 15 (React)</span>
                  <span className="text-[10px] font-light text-neutral-400">
                    Landing page estática e otimizada para motores de busca.
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-white/10 py-1 pl-4">
                  <span className="font-mono text-xs tracking-wide text-neutral-500 uppercase">
                    Metadados
                  </span>
                  <span className="text-sm font-semibold text-neutral-300">TMDb API</span>
                  <span className="text-[10px] font-light text-neutral-400">
                    A maior e mais confiável base de dados de cinema.
                  </span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col items-center gap-4 border border-white/5 bg-white/[0.01] p-8 text-center">
              <span className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
                Instituições de Ensino
              </span>
              <div className="h-px w-12 bg-white/5" />
              <span className="text-sm leading-relaxed font-semibold text-white">
                Colégio Técnico de Limeira
                <br />
                <span className="text-xs font-normal text-neutral-400">UNICAMP</span>
                <br />
                <span className="text-xs font-normal text-neutral-400">&</span>
                <br />
                SENAI Limeira
              </span>
              <span className="text-[10px] text-neutral-500">Limeira, São Paulo - Brasil</span>
            </GlassCard>
          </div>
        </div>
      </Section>
    </div>
  );
}
