"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <span className="font-mono text-sm tracking-widest uppercase text-text-muted">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
