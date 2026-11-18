const PILLARS = [
  "Quantitative Markets",
  "Agentic AI & Systems",
  "Global Ventures & Luxury",
  "Essays & Media",
];

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-between px-6 py-10 sm:px-10 sm:py-14">
      {/* Top Bar */}
      <header className="flex items-center justify-between border-b border-zinc-800/80 pb-6">
        <span className="font-mono text-xs tracking-[0.2em] text-zinc-200 uppercase">
          Insaf Idris
        </span>
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 font-mono text-[11px] tracking-wider text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>EST. 18 NOV 2026</span>
        </div>
      </header>

      {/* Core Thesis */}
      <main className="my-16 space-y-8">
        <p className="font-mono text-xs tracking-[0.18em] text-zinc-500 uppercase">
          Genesis // Personal Archive &amp; Platform
        </p>

        <h1 className="text-3xl leading-tight font-medium tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.15]">
          Building enduring systems across capital markets, technology, and
          craftsmanship.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          The permanent digital home for my research, engineering builds,
          ventures, and field notes. Full architecture deploying in phases.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {PILLARS.map((pillar) => (
            <span
              key={pillar}
              className="rounded-md border border-zinc-800/90 bg-zinc-900/40 px-3 py-1.5 font-mono text-xs text-zinc-400"
            >
              {pillar}
            </span>
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
            href="mailto:hello@insafidris.com"
            className="transition-colors hover:text-zinc-200"
          >
            hello@insafidris.com
          </a>
        </div>
        <span>insafidris.com · Est. November 18, 2026</span>
      </footer>
    </div>
  );
}
