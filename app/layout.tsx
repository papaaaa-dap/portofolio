/**
 * layout.tsx
 * Root layout — setup font, metadata, Lenis smooth scroll
 */

import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import NeoCursor from "@/components/ui/NeoCursor";
import NeoNavbar from "@/components/ui/NeoNavbar";

// === FONT SETUP ===
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// === METADATA ===
export const metadata: Metadata = {
  title: "Portfolio — Library Science meets AI",
  description:
    "Mahasiswa Ilmu Perpustakaan & Informasi yang passionate di bidang Prompt Engineering, AI Tools, dan Vibe Coding.",
  keywords: [
    "portfolio",
    "prompt engineering",
    "AI tools",
    "ilmu perpustakaan",
    "information science",
    "next.js",
  ],
  authors: [{ name: "Muhammad Fajar Dafa" }],
  openGraph: {
    title: "Portfolio — Library Science meets AI",
    description:
      "Mengelola pengetahuan, membangun dengan prompt.",
    type: "website",
    locale: "id_ID",
  },
};

// Viewport terpisah sesuai Next.js 14+
export const viewport: Viewport = {
  themeColor: "#FFFBF0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-cream text-dark font-body antialiased">
        {/* Neo cursor */}
        <NeoCursor />
        {/* Sticky navbar */}
        <NeoNavbar />
        {/* Lenis smooth scroll wraps seluruh halaman */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
