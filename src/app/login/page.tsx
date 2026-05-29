import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { GlassCard, Button, SpotlightLogo, GradientText } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Login",
  description: "Acesse sua conta no ecossistema Spotlight",
};

/**
 * ============================================================================
 * ESTRUTURA E ARQUITETURA DE AUTENTICAÇÃO PLANEJADA PARA A VERSÃO 2.0 (TODO)
 * ============================================================================
 *
 * Atualmente na v1.0, o login do ecossistema é centralizado no aplicativo móvel.
 * O fluxo de autenticação futura na Web (v2.0) está planejado da seguinte forma:
 *
 * 1. SUPABASE SSR:
 *    Utilizaremos o pacote `@supabase/ssr` (já instalado no package.json).
 *    - No Server Components e rotas do Next:
 *      Instanciaremos `createServerClient` para ler/escrever cookies de sessão.
 *    - No Client Components:
 *      Utilizaremos `createBrowserClient` para disparar logins sociais.
 *
 * 2. COMPARTILHAMENTO DE CONTAS:
 *    Como os projetos `spotlight` (Flutter) e `spotlight-web` (Next.js) apontam
 *    para o mesmo projeto no Supabase (configurado no .env.local), a sessão
 *    do usuário será unificada através dos tokens JWT padrão do Supabase Auth.
 *
 * 3. MIDDLEWARE:
 *    Um arquivo `middleware.ts` na raiz do Next.js monitorará e atualizará
 *    periodicamente a expiração dos tokens nos cookies, protegendo rotas web
 *    como `/dashboard` ou `/favoritos`.
 * ============================================================================
 */

export default function LoginPage() {
  return (
    <div className="bg-sp-base relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Background Spotlight Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="spotlight-glow absolute h-[500px] w-[500px] opacity-30 blur-3xl" />
      </div>

      <Section className="relative z-10 flex items-center justify-center px-4">
        <GlassCard className="flex w-full max-w-md flex-col items-center gap-6 border border-white/5 bg-white/[0.01] p-8 text-center shadow-2xl sm:p-10">
          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.02]">
            <SpotlightLogo variant="dark" size={32} animated />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Acesse o <GradientText>Spotlight</GradientText>
            </h1>
            <p className="text-xs leading-relaxed font-light text-neutral-400 sm:text-sm">
              A autenticação do ecossistema é atualmente gerenciada de forma centralizada no nosso
              aplicativo oficial.
            </p>
          </div>

          <div className="h-px w-full bg-white/5" />

          {/* Info Banner */}
          <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left">
            <Info size={16} className="mt-0.5 shrink-0 text-neutral-400" />
            <p className="text-[11px] leading-relaxed font-light text-neutral-400">
              <strong className="mb-0.5 block font-medium text-white">Versão 1.0 (Atual)</strong>O
              ambiente web institucional ainda não possui painel de usuário nativo. Você será
              redirecionado para a plataforma Flutter.
            </p>
          </div>

          {/* Action Button */}
          <Button
            href={SITE_CONFIG.appUrl}
            external
            variant="primary"
            className="group mt-2 w-full"
          >
            Ir para o Aplicativo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Footer note */}
          <span className="font-mono text-[9px] tracking-wider text-neutral-600 uppercase">
            Supabase Auth &middot; v1.0 Bridge
          </span>
        </GlassCard>
      </Section>
    </div>
  );
}
