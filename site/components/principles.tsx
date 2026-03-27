"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { principles } from "@/lib/data";

export function Principles() {
  return (
    <section id="principles" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="03 — Thesis" title="How I Think" />

        <div className="space-y-12">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group"
            >
              <div className="mb-3 flex items-baseline gap-4">
                <span className="font-mono text-sm text-text-muted">
                  {p.number}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                  {p.title}
                </h3>
              </div>
              <p className="pl-10 text-text-secondary">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
