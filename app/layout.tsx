import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dawn of Aquarius — Find the Path You Were Born to Walk",
  description:
    "Dawn of Aquarius blends astrology, numerology, and modern career science to reveal your true professional purpose. Discover your Celestial Path, develop your potential, and deploy into work that fits your soul.",
  keywords: "astrology career, numerology, career path, soul map, celestial paths, purpose-led career",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
