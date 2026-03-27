"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="01 — About" title="Who I Am" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-lg leading-relaxed text-text-secondary"
        >
          <p>
            I build systems at the boundary of AI research and production
            software. Not demos — things that run, scale, and solve problems
            that matter.
          </p>
          <p>
            My work spans inference infrastructure, multi-agent orchestration,
            video generation pipelines, and full-stack product engineering. I
            think about hardware acceleration paths for transformer workloads,
            design agentic systems for real business processes, and ship SaaS
            products in industries where software barely exists.
          </p>
          <p>
            I studied physics at Seoul National University — not because I
            planned to become a physicist, but because physics teaches you to
            reason from first principles under hard constraints. That training
            shapes how I approach every engineering and research problem.
          </p>
          <p>
            What drives me is the conviction that the most important technical
            systems of the next decade haven't been built yet — and that the
            people who build them will be those who combine deep technical
            understanding with the urgency to ship.
          </p>
          <p className="text-text-muted">
            3+ years of building. Multiple production systems. Research
            published. Products shipped. Still early.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
