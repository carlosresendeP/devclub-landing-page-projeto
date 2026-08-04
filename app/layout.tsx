import type { Metadata } from "next";
import { Manrope, Albert_Sans, Urbanist, Inter } from "next/font/google";
import { GlobalBackground } from "@/components/ui/global-background";
import { Header } from "@/components/layout/header";
import { Preloader } from "@/components/layout/preloader";
import { PreloaderProvider } from "@/components/layout/preloader-context";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
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
  title: "DevClub — Programação",
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
        <PreloaderProvider>
          <Preloader />
          <SmoothScroll />
          <GlobalBackground />
          <Header />
          <div className="relative z-10">{children}</div>
        </PreloaderProvider>
      </body>
    </html>
  );
}
