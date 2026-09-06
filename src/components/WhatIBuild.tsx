"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { whatIBuild } from "@/data/profile";
import { fadeUp } from "@/lib/motion";

export default function WhatIBuild() {
  const [active, setActive] = useState(0);
  const current = whatIBuild[active];

  return (
    <section className="section-edge py-20 md:py-28">
      <div className="container-content">
        <SectionHeading
          kicker="Technical Focus"
          title="What I build"
          description="Six areas that keep showing up across my projects — not a list of buzzwords, a description of how I actually work."
        />

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-4">
            <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {whatIBuild.map((item, i) => (
                <li key={item.id}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
                    aria-pressed={active === i}
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[var(--fg-faint)]">
                        0{i + 1}
                      </span>
                      <span
                        className={`font-display text-xl transition-colors md:text-2xl ${
                          active === i ? "text-[var(--accent)]" : "text-[var(--fg)]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                    <span
                      className={`hidden h-2 w-2 rounded-full bg-[var(--accent)] transition-opacity md:block ${
                        active === i ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>

                  <div className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-500 ease-signature md:hidden data-[open=true]:grid-rows-[1fr]" data-open={active === i}>
                    <div className="overflow-hidden pb-5">
                      <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:col-span-7 md:block lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10"
              >
                <p className="max-w-lg text-xl leading-relaxed text-[var(--fg)]">
                  {current.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--fg-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
