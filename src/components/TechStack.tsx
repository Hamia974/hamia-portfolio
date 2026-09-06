"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/skills";
import { fadeUp, viewportOnce, stagger } from "@/lib/motion";

export default function TechStack() {
  return (
    <section id="stack" className="section-edge py-20 md:py-28">
      <div className="container-content">
        <SectionHeading kicker="Ecosystem" title="Tech I build with" />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.id} variants={fadeUp}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] px-3.5 py-1.5 text-sm text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--fg)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
