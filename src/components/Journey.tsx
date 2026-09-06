"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { dataJourney } from "@/data/skills";
import { fadeUp, viewportOnce, stagger } from "@/lib/motion";

export default function Journey() {
  return (
    <section className="section-edge py-20 md:py-28">
      <div className="container-content">
        <SectionHeading
          kicker="Engineering Journey"
          title="From queries to infrastructure"
          description="The progression that got me here — each stage still shows up in the projects above."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12"
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)] md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-7 md:gap-8">
            {dataJourney.map((stage, i) => (
              <motion.div
                key={stage.stage}
                variants={fadeUp}
                className={`relative flex gap-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:self-start md:text-right" : "md:pl-12 md:self-end"
                }`}
              >
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] md:top-1.5 ${
                    i % 2 === 0 ? "md:-right-[7px] md:left-auto" : "md:-left-[7px]"
                  }`}
                />
                <div className="pl-10 md:pl-0">
                  <div className="font-mono text-xs uppercase tracking-wide text-[var(--accent)]">
                    Stage 0{i + 1}
                  </div>
                  <div className="mt-1 font-display text-2xl text-[var(--fg)]">{stage.stage}</div>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-[var(--fg-muted)] md:ml-auto">
                    {stage.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
