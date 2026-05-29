"use client";

import React from "react";
import Script from "next/script";

/**
 * TODO v2.0: Analytics (Google Analytics / PostHog)
 *
 * Implementação planejada:
 * 1. Descomentar IDs de analytics no arquivo `.env.local`
 * 2. Carregar o script do GA4 de forma assíncrona após a página se tornar interativa.
 * 3. Capturar transições de rota virtuais para Single Page Applications (SPA).
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
