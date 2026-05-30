import type { Metadata } from "next";
import { Manrope, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anand P — Full Stack Developer",
  description:
    "Computer Science Engineering student & Full Stack Developer specializing in MERN stack, React, and modern web technologies. Building premium digital experiences.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Anand P" }],
  openGraph: {
    title: "Anand P — Full Stack Developer",
    description: "Premium developer portfolio showcasing full stack projects and expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${syne.variable} ${jetbrainsMono.variable} bg-bg-primary text-slate-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
