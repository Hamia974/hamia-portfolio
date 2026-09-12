"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";
import { featuredProjects, categoryLabels } from "@/data/projects";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function FeaturedProjects() {
  return (
    <section id="work" className="section-edge py-20 md:py-28">
      <div className="container-content">
        <SectionHeading
          kicker="Featured Work"
          title="Case studies, not screenshots"
          description="Nine projects that best show the range — from business intelligence dashboards to deep learning, cloud infrastructure and full stack systems people can actually use."
        />

        <div className="mt-16 flex flex-col gap-20 md:gap-24">
          {featuredProjects.map((p, i) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="group"
            >
              <div className="flex items-center gap-4 border-t border-[var(--border)] pt-6">
                <span className="font-mono text-xs text-[var(--fg-faint)] transition-colors duration-500 group-hover:text-[var(--accent)]">
                  Case 0{i + 1}
                </span>
                <span className="h-px flex-1 bg-[var(--border)]" />
                <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-[var(--fg-muted)]">
                  {categoryLabels[p.category]}
                </span>
              </div>

              <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <ProjectVisual visual={p.visual} />
                </motion.div>

                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="font-display text-3xl leading-tight text-[var(--fg)] md:text-4xl">
                    {p.name}
                  </h3>

                  <p className="mt-4 text-[var(--fg-muted)]">{p.problem}</p>
                  <p className="mt-3 text-lg leading-relaxed text-[var(--fg)]">{p.built}</p>

                  <ul className="mt-5 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-[var(--fg-muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-sm italic text-[var(--fg-faint)]">{p.contribution}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--bg-subtle)] px-3 py-1 font-mono text-xs text-[var(--fg-muted)]"
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
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-4 py-2 font-mono text-xs uppercase tracking-wide text-[var(--accent)] transition-colors duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                    >
                      {p.linkLabel ?? "View project"}
                      <span aria-hidden>&rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
