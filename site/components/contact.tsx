"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm tracking-widest uppercase text-text-muted">
            06 — Contact
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            Let&rsquo;s Talk
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-text-secondary">
            I&rsquo;m interested in conversations with founders building
            ambitious technical companies, research engineers working on hard
            problems, and exceptional people who want to build together.
          </p>

          <p className="mt-2 text-sm text-text-muted">
            Not looking for generic outreach. If you have something specific in
            mind, I&rsquo;ll respond.
          </p>

          <div className="mt-12">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block border border-text-primary bg-text-primary px-8 py-3.5 font-mono text-xs font-medium tracking-wide text-bg transition-colors hover:bg-transparent hover:text-text-primary"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8">
            {Object.entries(siteConfig.links).map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-text-primary"
              >
                {name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-3xl border-t border-border pt-8 text-center">
        <p className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Mingeon Kim. Built with intention.
        </p>
      </div>
    </section>
  );
}
