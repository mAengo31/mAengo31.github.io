"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="02 — Selected Work" title="What I've Built" />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-sm border border-border bg-bg-card p-8 transition-colors hover:border-border-hover md:p-10"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                  {project.title}
                </h3>
                <span className="whitespace-nowrap font-mono text-xs text-text-muted">
                  {project.status}
                </span>
              </div>

              <p className="mb-6 text-sm italic text-accent-dim">
                &ldquo;{project.thesis}&rdquo;
              </p>

              <p className="mb-4 text-text-secondary">{project.description}</p>

              <p className="mb-6 text-sm text-text-muted">
                <span className="font-medium text-text-secondary">
                  Impact:
                </span>{" "}
                {project.impact}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border px-2.5 py-1 font-mono text-xs text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
