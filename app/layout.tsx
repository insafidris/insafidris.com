import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insafidris.com"),
  title: {
    default: "Insaf Idris",
    template: "%s — Insaf Idris",
  },
  description:
    "Official platform, research archive, and venture hub of Insaf Idris. Est. November 18, 2026.",
  openGraph: {
    title: "Insaf Idris",
    description:
      "Official platform, research archive, and venture hub of Insaf Idris. Est. November 18, 2026.",
    url: "https://insafidris.com",
    siteName: "Insaf Idris",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-dvh bg-zinc-950 font-sans text-zinc-100 selection:bg-zinc-200 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
