import React from "react";
import Link from "next/link";
import { SpotlightLogo } from "@/components/ui";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-sp-surface relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          {/* Logo and Disclaimer */}
          <div className="col-span-1 flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <SpotlightLogo variant="dark" size={28} />
              <span className="font-display text-base font-semibold tracking-wider text-white">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500">
              Este projeto é um trabalho acadêmico (TCC) desenvolvido para fins educacionais e de
              demonstração.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">Navegação</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/"
                  className="text-xs text-neutral-400 transition-colors hover:text-white"
                >
                  Início
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">Projeto</h3>
            <ul className="flex flex-col gap-2 text-xs leading-relaxed text-neutral-400">
              <li>
                <span className="text-neutral-500">Instituição:</span> {SITE_CONFIG.tcc.institution}
              </li>
              <li>
                <span className="text-neutral-500">Curso:</span> {SITE_CONFIG.tcc.course}
              </li>
              <li>
                <span className="text-neutral-500">Turma:</span> {SITE_CONFIG.tcc.class} (
                {SITE_CONFIG.tcc.year})
              </li>
              <li className="mt-2">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:underline"
                >
                  Ver no GitHub →
                </a>
              </li>
            </ul>
          </div>

          {/* Team Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Desenvolvido por
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SITE_CONFIG.team.map((member) => (
                <li key={member.ra} className="flex flex-col text-xs">
                  <span className="font-medium text-neutral-300">{member.name}</span>
                  <span className="text-[10px] text-neutral-500">RA {member.ra}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-8 h-px bg-white/5 md:my-10" />

        {/* Bottom Line */}
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] tracking-wide text-neutral-500 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.tcc.institution} ·
            TCC {SITE_CONFIG.tcc.class}
          </span>
          <span className="text-neutral-600">Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
