"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce, stagger } from "@/lib/motion";
import { research } from "@/data/experience";

export default function Research() {
  return (
    <section id="research" className="section-edge py-20 md:py-28">
      <div className="container-content">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl rounded-3xl border border-[var(--gold)]/40 bg-[var(--card)] p-8 md:p-14"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="rounded-full border border-[var(--gold)] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-[var(--gold)]">
              Published Research
            </span>
            <span className="font-mono text-xs text-[var(--fg-faint)]">
              {research.venue} &middot; {research.year}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-2xl italic leading-snug text-[var(--fg)] md:text-3xl"
          >
            {research.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]"
          >
            {research.summary}
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-6 space-y-2">
            {research.contributions.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-[var(--fg-muted)]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
                {c}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8">
            <a
              href={research.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)] px-6 py-3 font-mono text-sm text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--bg-inverse)]"
            >
              Read on IEEE Xplore
              <span aria-hidden>&rarr;</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
