import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://spotlight.com.br"),
  title: {
    default: "Spotlight - Descubra seu próximo filme favorito",
    template: "%s | Spotlight",
  },
  description:
    "Spotlight é um sistema de descoberta de filmes com Inteligência Artificial. Descreva o que você quer assistir e receba recomendações precisas e personalizadas.",
  keywords: [
    "filmes",
    "recomendação de filmes",
    "inteligência artificial",
    "IA",
    "streaming",
    "descoberta de filmes",
    "NLP",
    "TMDB",
  ],
  authors: [
    { name: "Andrei Silva de Oliveira" },
    { name: "Joel João de Araujo Neto" },
    { name: "Luan Henrique Ferreira" },
    { name: "Miguel Vinhado" },
  ],
  creator: "Equipe Spotlight - COTIL/UNICAMP 2026",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://spotlight.com.br",
    siteName: "Spotlight",
    title: "Spotlight - Descubra seu próximo filme favorito",
    description: "Descreva o que você quer assistir. A IA encontra o filme perfeito para você.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spotlight - Sistema de Descoberta de Filmes com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spotlight - Descubra seu próximo filme favorito",
    description: "Descreva o que você quer assistir. A IA encontra o filme perfeito para você.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-sp-base flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4 focus:text-black"
        >
          Pular para o conteúdo principal
        </a>

        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
