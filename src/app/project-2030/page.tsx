import type { Metadata } from "next";
import Link from "next/link";
import { Project2030Explorer } from "@/components/project-2030-explorer";

export const metadata: Metadata = {
  title: "Project 2030 — Career & Venture Blueprint | Insaf Idris",
  description:
    "Multi-decade career architecture across Agentic AI, FinTech, Research, Global Trade, Luxury, Football, Media, Civic Policy, and Enduring Community Institutions (2026–2030).",
};

export default function Project2030Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/"
          className="text-xs font-medium uppercase tracking-widest text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          ← insafidris.com
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-14 max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 font-mono text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          <span>HORIZON: 2026 — 2030</span>
          <span>•</span>
          <span>EST. 18 NOV 2026</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
          Project 2030
        </h1>

        <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
          A master blueprint unifying 18 interconnected tracks across artificial
          intelligence, quantitative finance, global commerce, heritage luxury,
          football performance, independent media, public service, and
          long-horizon community foundations.
        </p>
      </header>

      {/* Interactive 18-Pillar Explorer */}
      <Project2030Explorer />
    </main>
  );
}
