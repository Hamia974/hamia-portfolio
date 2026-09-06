"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";
import DataFlowCanvas from "./DataFlowCanvas";
import SignatureFlow from "./SignatureFlow";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.15]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const canvasOpacity = prefersReducedMotion ? 0.7 : rawOpacity;
  const canvasScale = prefersReducedMotion ? 1 : rawScale;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0">
        <motion.div style={{ opacity: canvasOpacity, scale: canvasScale }} className="h-full w-full">
          <DataFlowCanvas className="h-full w-full" />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/40 to-transparent md:via-[var(--bg)]/25 md:to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
      </div>

      <motion.div
        variants={stagger(0.1, 0.05)}
        initial="hidden"
        animate="show"
        className="container-content relative z-10"
      >
        <motion.span
          variants={fadeUp}
          className="relative inline-block font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]"
        >
          {profile.education.institution.split(",")[0]} &middot; {profile.tagline}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-[var(--accent)] to-transparent"
          />
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-6 max-w-4xl font-display text-[13vw] leading-[0.95] text-[var(--fg)] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl font-display text-2xl italic leading-snug text-[var(--fg-muted)] md:text-3xl"
        >
          {profile.role} & {profile.roleSecondary}.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-[var(--fg-muted)] md:text-lg"
        >
          Building intelligent systems from data, models and code — one pipeline, one model,
          one product at a time.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group relative overflow-hidden rounded-full bg-[var(--fg)] px-7 py-3.5 font-mono text-sm uppercase tracking-wide text-[var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explore My Work
          </a>
          <a
            href={profile.resumeUrl}
            download="Hamia-Khalil-Resume.pdf"
            className="rounded-full border border-[var(--border-strong)] px-7 py-3.5 font-mono text-sm uppercase tracking-wide text-[var(--fg)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
        className="pointer-events-none absolute bottom-16 right-6 z-10 hidden w-[280px] lg:block xl:right-16 xl:w-[340px]"
      >
        <SignatureFlow reduced={!!prefersReducedMotion} />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-0 right-0 z-10 hidden justify-center md:flex"
      >
        <div className="flex flex-col items-center gap-2 text-[var(--fg-faint)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-[var(--border-strong)]" />
        </div>
      </motion.div>
    </section>
  );
}
