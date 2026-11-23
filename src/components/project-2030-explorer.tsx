"use client";

import { useState } from "react";
import {
  PROJECT_2030_CLUSTERS,
  PROJECT_2030_INITIATIVES,
  type ProjectCluster,
} from "@/data/project-2030";

export function Project2030Explorer() {
  const [selectedCluster, setSelectedCluster] = useState<ProjectCluster | "All">("All");

  const visibleItems =
    selectedCluster === "All"
      ? PROJECT_2030_INITIATIVES
      : PROJECT_2030_INITIATIVES.filter((item) => item.cluster === selectedCluster);

  return (
    <section aria-label="Project 2030 Roadmap Pillars">
      {/* Cluster Filter Bar */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-6 dark:border-neutral-800">
        <button
          type="button"
          onClick={() => setSelectedCluster("All")}
          className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition ${
            selectedCluster === "All"
              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950"
              : "border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-300 dark:hover:text-white"
          }`}
        >
          All Pillars ({PROJECT_2030_INITIATIVES.length})
        </button>

        {PROJECT_2030_CLUSTERS.map((cluster) => {
          const count = PROJECT_2030_INITIATIVES.filter(
            (i) => i.cluster === cluster
          ).length;
          const isActive = selectedCluster === cluster;

          return (
            <button
              key={cluster}
              type="button"
              onClick={() => setSelectedCluster(cluster)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition ${
                isActive
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950"
                  : "border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-300 dark:hover:text-white"
              }`}
            >
              {cluster} ({count})
            </button>
          );
        })}
      </div>

      {/* 18-Card Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600"
          >
            <div>
              {/* Top Meta Row */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-neutral-400">
                  {item.number} / 18
                </span>
                <span className="rounded-md bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                  {item.stage}
                </span>
              </div>

              {/* Sector & Primary Entity */}
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {item.sector}
              </p>
              <h2 className="mt-1.5 text-lg font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
                {item.headline}
              </h2>

              {/* Sub-Items */}
              {item.subItems && item.subItems.length > 0 && (
                <ul className="mt-4 space-y-1.5 border-t border-neutral-100 pt-3 text-sm text-neutral-600 dark:border-neutral-900 dark:text-neutral-400">
                  {item.subItems.map((sub) => (
                    <li key={sub} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer Cluster Tag & External Link */}
            <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs dark:border-neutral-900">
              <span className="text-neutral-400">{item.cluster}</span>

              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:hover:decoration-white"
                >
                  {item.link.label} ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
