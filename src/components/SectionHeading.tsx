"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        {kicker}
      </span>
      <h2 className="mt-4 font-display text-4xl leading-[1.1] text-[var(--fg)] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-[var(--fg-muted)]">{description}</p>
      )}
    </motion.div>
  );
}
