"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";
import { fadeUp, viewportOnce, stagger } from "@/lib/motion";

const typeLabel: Record<string, string> = {
  role: "Role",
  simulation: "Job Simulation",
  volunteer: "Volunteer",
};

export default function Experience() {
  return (
    <section id="experience" className="section-edge py-20 md:py-28">
      <div className="container-content">
        <SectionHeading
          kicker="Experience"
          title="Where I've put it to work"
          description="Real mentorship, applied job simulations, and community work."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 flex flex-col"
        >
          {experience.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="grid gap-3 border-t border-[var(--border)] py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-wide text-[var(--fg-faint)]">
                  {typeLabel[item.type]}
                </span>
                <div className="mt-1 font-mono text-sm text-[var(--fg-muted)]">{item.period}</div>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-2xl text-[var(--fg)]">{item.role}</h3>
                <div className="mt-1 text-[var(--accent)]">{item.organization}</div>
                <ul className="mt-4 space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--border-strong)]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[var(--border)]" />
        </motion.div>
      </div>
    </section>
  );
}
