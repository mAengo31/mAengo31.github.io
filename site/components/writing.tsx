"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { writings } from "@/lib/data";

export function Writing() {
  return (
    <section id="writing" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="05 — Writing" title="Ideas & Notes" />

        <div className="space-y-1">
          {writings.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group block border-b border-border px-2 py-6 transition-colors hover:bg-bg-elevated"
            >
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-text-muted">
                  {w.date}
                </span>
                <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  {w.tag}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary transition-colors group-hover:text-accent">
                {w.title}
              </h3>
              <p className="text-sm text-text-secondary">{w.excerpt}</p>
            </motion.a>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-text-muted">
          More coming. These are living notes, not finished pieces.
        </p>
      </div>
    </section>
  );
}
