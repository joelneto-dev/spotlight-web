import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpotlightLogo } from "@/components/ui";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-black/[0.45]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.7fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <SpotlightLogo variant="dark" size={30} />
              <span className="font-display text-lg font-semibold text-white">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              Projeto acadêmico desenvolvido para demonstrar uma experiência de descoberta de filmes
              mais inteligente, humana e direta.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/" className="text-sm text-neutral-400 transition-colors hover:text-white">
                  Início
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">Projeto</h3>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed text-neutral-400">
              <li>
                <span className="text-neutral-500">Instituição:</span>{" "}
                {SITE_CONFIG.tcc.institution}
              </li>
              <li>
                <span className="text-neutral-500">Curso:</span> {SITE_CONFIG.tcc.course}
              </li>
              <li>
                <span className="text-neutral-500">Turma:</span> {SITE_CONFIG.tcc.class} (
                {SITE_CONFIG.tcc.year})
              </li>
              <li className="pt-2">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-blue-200"
                >
                  Ver no GitHub
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Desenvolvido por
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {SITE_CONFIG.team.map((member) => (
                <li key={member.ra} className="flex flex-col">
                  <span className="font-medium text-neutral-300">{member.name}</span>
                  <span className="font-mono text-[10px] text-neutral-500">RA {member.ra}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-8 h-px bg-white/[0.08] md:my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-neutral-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.tcc.institution} · TCC{" "}
            {SITE_CONFIG.tcc.class}
          </span>
          <span className="text-neutral-600">Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
