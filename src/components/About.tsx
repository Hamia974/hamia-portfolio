"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce, stagger } from "@/lib/motion";
import { profile } from "@/data/profile";

const flow = ["Data", "Process", "Systems", "Intelligence", "Products"];

export default function About() {
  return (
    <section id="about" className="section-edge py-20 md:py-28">
      <div className="container-content grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            About
          </motion.span>

          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 flex flex-col gap-1"
          >
            {flow.map((step, i) => (
              <motion.div key={step} variants={fadeUp} className="flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--fg-faint)]">
                  0{i + 1}
                </span>
                <span
                  className={`font-display text-xl ${
                    i === flow.length - 1 ? "text-[var(--accent)]" : "text-[var(--fg-muted)]"
                  }`}
                >
                  {step}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="md:col-span-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="font-display text-3xl leading-snug text-[var(--fg)] md:text-4xl"
          >
            I don&rsquo;t just learn technologies — I build systems with them.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-[var(--border)] pt-8"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-wide text-[var(--fg-faint)]">
                Education
              </div>
              <div className="mt-1 text-[var(--fg)]">{profile.education.degree}</div>
              <div className="text-sm text-[var(--fg-muted)]">
                {profile.education.institution} &middot; {profile.education.period}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wide text-[var(--fg-faint)]">
                CGPA
              </div>
              <div className="mt-1 font-display text-2xl text-[var(--fg)]">
                {profile.education.cgpa}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
