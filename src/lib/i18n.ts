/**
 * TODO v2.0: Internacionalização (i18n) com next-intl
 *
 * Estrutura de arquivos planejada:
 * - src/messages/pt-BR.json (Traduções em Português)
 * - src/messages/en.json    (Traduções em Inglês)
 *
 * Implementação planejada:
 * 1. Instalar `next-intl`
 * 2. Criar `src/middleware.ts` com o locale detector.
 * 3. Envolver a aplicação com `NextIntlClientProvider` no layout.
 * 4. Mover a estrutura de rotas para `src/app/[locale]/...`
 */

export const i18nConfig = {
  locales: ["pt-BR", "en"],
  defaultLocale: "pt-BR",
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
