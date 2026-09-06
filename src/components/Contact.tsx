"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce, stagger } from "@/lib/motion";
import { profile } from "@/data/profile";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="section-edge py-24 md:py-32">
      <div className="container-content">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            Contact
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-[var(--fg)] md:text-6xl"
          >
            Have a system worth building? Let&rsquo;s talk data.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--fg-muted)]"
          >
            Open to opportunities in data engineering, machine learning and full stack
            development. Reach out directly — I read everything myself.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label === "Email" ? undefined : "_blank"}
                rel={l.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between py-5 transition-colors hover:text-[var(--accent)]"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-[var(--fg-faint)]">
                  {l.label}
                </span>
                <span className="font-display text-lg text-[var(--fg)] transition-colors group-hover:text-[var(--accent)] md:text-2xl">
                  {l.value}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
