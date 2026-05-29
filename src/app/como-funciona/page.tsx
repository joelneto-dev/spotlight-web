import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Badge, GlassCard, GradientText } from "@/components/ui";
import { Sparkles, MessageSquare, ShieldCheck, Film } from "lucide-react";

export const metadata: Metadata = {
  title: "Como Funciona",
  description:
    "Entenda a arquitetura técnica, fluxo de recomendação e processamento de IA por trás do Spotlight",
};

export default function ComoFuncionaPage() {
  return (
    <div className="bg-sp-base relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Background Spotlight Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="spotlight-glow absolute -top-[10%] h-[600px] w-[600px] opacity-35 blur-3xl" />
      </div>

      <Section className="relative z-10">
        {/* Header */}
        <div className="mb-16 flex max-w-3xl flex-col gap-4">
          <Badge variant="outline">Funcionamento Técnico</Badge>
          <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight text-white sm:text-6xl">
            Por dentro da <GradientText>arquitetura do Spotlight.</GradientText>
          </h1>
          <p className="mt-2 font-sans text-lg leading-relaxed font-light text-neutral-400 sm:text-xl">
            Entenda como transformamos linguagem natural livre em sugestões precisas de filmes em
            menos de dois segundos.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="mb-16">
          <GlassCard className="flex flex-col gap-8 border border-white/5 bg-white/[0.01] p-8 sm:p-10">
            <h2 className="font-display text-center text-2xl font-medium tracking-wide text-white sm:text-left">
              Fluxo da Arquitetura
            </h2>

            {/* Visual SVG Diagram */}
            <div className="flex w-full justify-center py-6">
              <svg
                viewBox="0 0 800 320"
                className="h-auto w-full max-w-3xl font-sans text-neutral-400 select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Definitions for Glow Gradients */}
                <defs>
                  <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Nodes */}
                {/* Node 1: User Input */}
                <rect
                  x="20"
                  y="110"
                  width="140"
                  height="80"
                  rx="12"
                  fill="#18181B"
                  stroke="#27272A"
                  strokeWidth="1"
                />
                <text
                  x="90"
                  y="145"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  1. Usuário
                </text>
                <text x="90" y="165" fill="#A1A1AA" fontSize="10" textAnchor="middle">
                  Mensagem livre (NLP)
                </text>

                {/* Arrow 1 */}
                <path d="M 160 150 L 220 150" stroke="url(#glowGrad)" strokeWidth="2" />
                <polygon points="220,150 212,145 212,155" fill="#A1A1AA" />

                {/* Node 2: API Gateway */}
                <rect
                  x="220"
                  y="110"
                  width="160"
                  height="80"
                  rx="12"
                  fill="#18181B"
                  stroke="#27272A"
                  strokeWidth="1"
                />
                <text
                  x="300"
                  y="145"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  2. Backend FastAPI
                </text>
                <text x="300" y="165" fill="#A1A1AA" fontSize="10" textAnchor="middle">
                  Processamento / Validação
                </text>

                {/* Arrow 2 Up (to LLM) */}
                <path d="M 380 140 L 460 70" stroke="url(#glowGrad)" strokeWidth="2" />
                <polygon points="460,70 450,71 455,78" fill="#A1A1AA" />

                {/* Arrow 2 Down (to DB) */}
                <path d="M 380 160 L 460 230" stroke="url(#glowGrad)" strokeWidth="2" />
                <polygon points="460,230 455,222 450,229" fill="#A1A1AA" />

                {/* Node 3: LLM Engine (Top) */}
                <rect
                  x="460"
                  y="30"
                  width="150"
                  height="80"
                  rx="12"
                  fill="#18181B"
                  stroke="#27272A"
                  strokeWidth="1"
                />
                <text
                  x="535"
                  y="65"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  3. Inteligência Artificial
                </text>
                <text x="535" y="85" fill="#A1A1AA" fontSize="10" textAnchor="middle">
                  Gemini / Groq LLM
                </text>

                {/* Node 4: Metadata DB (Bottom) */}
                <rect
                  x="460"
                  y="190"
                  width="150"
                  height="80"
                  rx="12"
                  fill="#18181B"
                  stroke="#27272A"
                  strokeWidth="1"
                />
                <text
                  x="535"
                  y="225"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  4. TMDb API
                </text>
                <text x="535" y="245" fill="#A1A1AA" fontSize="10" textAnchor="middle">
                  Catálogos & Imagens
                </text>

                {/* Arrow 3 back from LLM */}
                <path d="M 610 70 L 680 140" stroke="url(#glowGrad)" strokeWidth="2" />
                <polygon points="680,140 679,131 672,137" fill="#A1A1AA" />

                {/* Arrow 4 back from DB */}
                <path d="M 610 230 L 680 160" stroke="url(#glowGrad)" strokeWidth="2" />
                <polygon points="680,160 672,163 679,169" fill="#A1A1AA" />

                {/* Node 5: Output */}
                <rect
                  x="680"
                  y="110"
                  width="100"
                  height="80"
                  rx="12"
                  fill="#18181B"
                  stroke="#27272A"
                  strokeWidth="1"
                />
                <text
                  x="730"
                  y="145"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  5. Resposta
                </text>
                <text x="730" y="165" fill="#A1A1AA" fontSize="10" textAnchor="middle">
                  Cards de Filme
                </text>
              </svg>
            </div>

            <p className="text-center text-xs leading-relaxed text-neutral-500">
              O fluxo de processamento integra de forma segura a interface (Flutter), nosso
              middleware (FastAPI), chaves de LLMs, e o banco do TMDb.
            </p>
          </GlassCard>
        </div>

        {/* Detailed Explanation Blocks */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <GlassCard className="flex flex-col gap-4 border border-white/5 bg-white/[0.01] p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
              <MessageSquare size={18} />
            </div>
            <h3 className="font-display text-lg font-medium text-white">
              1. Processamento de Linguagem Natural
            </h3>
            <p className="text-sm leading-relaxed font-light text-neutral-400">
              Quando você digita sua descrição, a frase passa por um processo de tokenização e
              análise semântica. A inteligência artificial lê além das palavras-chave estáticas: ela
              busca compreender a intenção, a atmosfera descrita (ex: &ldquo;claustrofóbico&rdquo;,
              &ldquo;empolgante&rdquo;) e a tonalidade emocional.
            </p>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4 border border-white/5 bg-white/[0.01] p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
              <Sparkles size={18} />
            </div>
            <h3 className="font-display text-lg font-medium text-white">
              2. Integração com Gemini e Groq
            </h3>
            <p className="text-sm leading-relaxed font-light text-neutral-400">
              Nossa API FastAPI do backend encaminha o payload limpo para LLMs de última geração. O
              modelo converte a descrição informal em parâmetros estruturados (filtros de data,
              diretores, tom da obra) e cria um índice semântico que localiza candidatos ideais na
              base.
            </p>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4 border border-white/5 bg-white/[0.01] p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
              <Film size={18} />
            </div>
            <h3 className="font-display text-lg font-medium text-white">
              3. Cruzamento de Dados (TMDb)
            </h3>
            <p className="text-sm leading-relaxed font-light text-neutral-400">
              Com as sugestões qualitativas geradas pelas IAs, consultamos a API do TMDb em tempo
              real para obter dados ricos e confiáveis: sinopses traduzidas, elencos completos,
              avaliações reais, data de lançamento, streamings disponíveis e imagens de capa de alta
              resolução.
            </p>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4 border border-white/5 bg-white/[0.01] p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
              <ShieldCheck size={18} />
            </div>
            <h3 className="font-display text-lg font-medium text-white">
              4. Persistência & Autenticação
            </h3>
            <p className="text-sm leading-relaxed font-light text-neutral-400">
              A autenticação do usuário e salvamento de listas de favoritos são tratados diretamente
              pelo Supabase, garantindo segurança de nível empresarial e latência extremamente
              reduzida no armazenamento persistente das escolhas do usuário.
            </p>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}
