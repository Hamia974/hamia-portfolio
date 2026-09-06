"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { certifications, achievements } from "@/data/experience";
import { fadeUp, viewportOnce, stagger } from "@/lib/motion";

function Wall({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <motion.div
      variants={stagger(0.03)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex flex-wrap gap-2.5"
    >
      {items.map((item) => (
        <motion.span
          key={item}
          variants={fadeUp}
          className={`rounded-xl border px-4 py-2.5 text-sm leading-snug transition-colors hover:text-[var(--fg)] ${
            accent
              ? "border-[var(--accent)]/30 bg-[var(--accent-soft)] text-[var(--fg-muted)] hover:border-[var(--accent)]"
              : "border-[var(--border)] bg-[var(--card)] text-[var(--fg-muted)] hover:border-[var(--border-strong)]"
          }`}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function Achievements() {
  const highlights = achievements.filter((a) => !a.startsWith("Participation"));
  const participation = achievements.filter((a) => a.startsWith("Participation"));

  return (
    <section id="achievements" className="section-edge py-20 md:py-28">
      <div className="container-content">
        <SectionHeading
          kicker="Certifications & Achievements"
          title="The credential wall"
          description="Courses, competitions and recognition — earned, not aspirational."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--fg-faint)]">
              Certifications
            </h3>
            <div className="mt-5">
              <Wall items={certifications} accent />
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--fg-faint)]">
              Achievements
            </h3>
            <div className="mt-5">
              <Wall items={highlights} />
            </div>
          </div>
        </div>

        {participation.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 border-t border-[var(--border)] pt-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--fg-faint)]">
              Also on record
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--fg-faint)]">
              {participation.map((p) => p.replace(/^Participation in /, "")).join(" · ")}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
