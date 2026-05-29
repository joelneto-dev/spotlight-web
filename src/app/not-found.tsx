import React from "react";
import { SpotlightLogo, Button, GradientText } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="bg-sp-base relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Spotlight Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="spotlight-glow absolute h-[500px] w-[500px] opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 flex max-w-md flex-col items-center gap-6 text-center">
        {/* Logo */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02]">
          <SpotlightLogo variant="dark" size={24} />
        </div>

        {/* 404 Number */}
        <span className="font-display text-8xl leading-none font-bold tracking-tighter select-none sm:text-9xl">
          <GradientText>404</GradientText>
        </span>

        {/* Subtext */}
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-xl font-semibold tracking-wide text-white sm:text-2xl">
            Perdido no catálogo?
          </h1>
          <p className="text-xs leading-relaxed font-light text-neutral-400 sm:text-sm">
            Esta página não existe no nosso universo cinematográfico. Verifique o endereço ou
            retorne ao início.
          </p>
        </div>

        {/* Action Button */}
        <Button href="/" variant="secondary" size="md" className="mt-4">
          Voltar ao Início
        </Button>
      </div>
    </div>
  );
}
