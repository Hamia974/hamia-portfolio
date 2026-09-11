"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";

const filters: Array<{ id: "all" | ProjectCategory; label: string }> = [
  { id: "all", label: "All" },
  { id: "data-engineering", label: categoryLabels["data-engineering"] },
  { id: "business-intelligence", label: categoryLabels["business-intelligence"] },
  { id: "machine-learning", label: categoryLabels["machine-learning"] },
  { id: "full-stack", label: categoryLabels["full-stack"] },
  { id: "cloud", label: categoryLabels.cloud },
  { id: "academic", label: categoryLabels.academic },
];

export default function Archive() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const archiveProjects = useMemo(() => projects.filter((p) => !p.featured), []);

  const list = useMemo(
    () =>
      filter === "all"
        ? archiveProjects
        : archiveProjects.filter((p) => p.category === filter),
    [filter, archiveProjects],
  );

  return (
    <section id="archive" className="section-edge py-20 md:py-28">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Project Archive"
            title="The rest of the build log"
            description="Every project is real and comes from my own coursework and independent builds — filter by focus area."
          />

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                  filter === f.id
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--border-strong)]"
              >
                <span className="font-mono text-[11px] uppercase tracking-wide text-[var(--accent)]">
                  {categoryLabels[p.category]}
                </span>
                <h3 className="mt-3 font-display text-xl leading-snug text-[var(--fg)]">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {p.built}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-[11px] text-[var(--fg-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-[var(--border-strong)] px-3 py-1.5 font-mono text-xs text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                  >
                    {p.linkLabel ?? "View project"}
                    <span aria-hidden>&rarr;</span>
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
