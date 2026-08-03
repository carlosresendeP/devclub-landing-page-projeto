import type { Metadata } from "next";
import { Manrope, Albert_Sans, Urbanist, Inter } from "next/font/google";
import { GlobalBackground } from "@/components/ui/global-background";
import { Preloader } from "@/components/layout/preloader";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-albert-sans",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-urbanist",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevClub — Pare de estudar sem direção",
  description:
    "Formações completas em programação, inteligência artificial, automações e dados, com suporte humano, projetos reais e comunidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${albertSans.variable} ${urbanist.variable} ${inter.variable}`}>
      <body className="bg-ink font-sans text-white antialiased">
        <Preloader />
        <GlobalBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
