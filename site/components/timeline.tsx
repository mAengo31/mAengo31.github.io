"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section id="background" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="04 — Background" title="Where I've Been" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />

          <div className="space-y-10">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.period}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative md:pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] items-center justify-center md:flex">
                  <div className="h-[7px] w-[7px] rounded-full bg-text-muted" />
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-text-muted">
                    {entry.period}
                  </span>
                  <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    {entry.tag}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-semibold text-text-primary">
                  {entry.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
