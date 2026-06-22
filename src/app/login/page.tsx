import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Info } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button, GlassCard, GradientText, SpotlightLogo } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Login",
  description: "Acesse sua conta no ecossistema Spotlight",
};

export default function LoginPage() {
  return (
    <div className="bg-sp-base relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-24">
      <div className="spotlight-glow pointer-events-none absolute inset-0" />

      <Section className="relative z-10 px-4">
        <div className="flex w-full justify-center">
          <GlassCard className="w-full max-w-md p-8 text-center sm:p-10">
            <SpotlightLogo variant="dark" size={64} animated className="mx-auto" />

            <h1 className="font-display mt-6 text-3xl font-semibold text-white">
              Acesse o <GradientText>Spotlight</GradientText>
            </h1>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Na versão atual, a autenticação do ecossistema é centralizada no aplicativo mobile
              oficial.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-left">
              <Info size={17} className="mt-0.5 shrink-0 text-blue-200" />
              <p className="text-xs leading-6 text-neutral-400">
                <strong className="block font-semibold text-white">Versão 1.0</strong>O painel web
                nativo está planejado para a próxima etapa. Por enquanto, o acesso leva para a
                plataforma do app.
              </p>
            </div>

            <Button
              href={SITE_CONFIG.appUrl}
              external
              variant="primary"
              className="group mt-7 w-full"
            >
              Ir para o aplicativo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="mt-5 font-mono text-[10px] tracking-[0.16em] text-neutral-600 uppercase">
              Supabase Auth · v1 bridge
            </p>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}
