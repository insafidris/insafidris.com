import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Upcoming global experiential ventures shared with you across AI & Technology, Finance & Markets, Politics & Religion, Sports & Health, and Media & Culture.",
};

type ProjectDomain = {
  number: string;
  category: string;
  status: string;
  summary: string;
  focusAreas: string[];
};

const UPCOMING_PROJECTS: ProjectDomain[] = [
  {
    number: "01",
    category: "Politics",
    status: "In Research",
    summary:
      "Geopolitical analysis, institutional policy tracking, and probabilistic forecasting across global election cycles.",
    focusAreas: ["Election Calibration", "Policy & Macro", "Geopolitics"],
  },
  {
    number: "02",
    category: "Finance",
    status: "In Development",
    summary:
      "Quantitative market research, mid-frequency prediction market models, and cross-border capital allocation.",
    focusAreas: ["Prediction Markets & Event Contracts", "Quantitative & Systematic Strategies", "Private Markets & Alternative Investments"],
  },
  {
    number: "03",
    category: "AI",
    status: "Active Build",
    summary:
      "Autonomous agentic workflows, applied machine learning systems, and decision-support infrastructure.",
    focusAreas: ["Agentic Systems", "Applied ML", "Automation"],
  },
  {
    number: "04",
    category: "Sports",
    status: "In Development",
    summary:
      "Statistical performance modeling, probabilistic sports pricing, and competitive football analytics.",
    focusAreas: ["Sports Analytics", "Event Pricing", "Football"],
  },
  {
    number: "05",
    category: "Culture",
    status: "Upcoming",
    summary:
      "Field notes across 30+ countries, heritage horology and gemstones, design systems, and recorded interviews.",
    focusAreas: ["Travel & Lifestyle", "Business", "Podcasts & Blogs"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-between px-6 py-10 sm:px-10 sm:py-14">
      {/* Top Bar */}
      <header className="flex items-center justify-between border-b border-zinc-800/80 pb-6">
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.2em] text-zinc-200 uppercase transition-colors hover:text-white"
        >
          Insaf Idris
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs">
          <Link
            href="/"
            className="text-zinc-500 transition-colors hover:text-zinc-200"
          >
            Home
          </Link>
          <span className="text-zinc-100">Projects</span>
        </nav>
      </header>

      {/* Page Header & Domain Grid */}
      <main className="my-14 space-y-10">
        <div className="space-y-4">
          <p className="font-mono text-xs tracking-[0.18em] text-zinc-500 uppercase">
            Roadmap // 05 Core Domains
          </p>
          <h1 className="text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
            Upcoming Projects
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-zinc-400">
            Active builds, research tracks, and publications currently in
            development across five primary verticals.
          </p>
        </div>

        {/* Vertical Cards */}
        <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {UPCOMING_PROJECTS.map((item) => (
            <article key={item.category} className="py-7 first:pt-6 last:pb-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-zinc-500">
                    {item.number}
                  </span>
                  <h2 className="text-xl font-medium text-zinc-100">
                    {item.category}
                  </h2>
                </div>
                <span className="rounded-full border border-zinc-800 bg-zinc-900/70 px-2.5 py-0.5 font-mono text-[11px] text-zinc-400">
                  {item.status}
                </span>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                {item.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.focusAreas.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-800/90 bg-zinc-900/40 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col justify-between gap-4 border-t border-zinc-800/80 pt-6 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/insafidris"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href="mailto:insaf.idris@insafidris.com"
            className="transition-colors hover:text-zinc-200"
          >
            insaf.idris@insafidris.com
          </a>
        </div>
        <span>insafidris.com · est. 18 November</span>
      </footer>
    </div>
  );
}
