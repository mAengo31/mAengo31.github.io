"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="hero-grid relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mx-auto mb-8 h-28 w-28 overflow-hidden rounded-full border border-border md:h-36 md:w-36">
            <Image
              src="/profile.jpg"
              alt="Edward Kim"
              width={144}
              height={144}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <p className="mb-6 font-mono text-xs tracking-[0.3em] uppercase text-text-muted">
            Founder &middot; Research Engineer &middot; Builder
          </p>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-7xl">
            Edward Kim
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Building AI systems that work in production, not just in papers.
            <br className="hidden md:block" />
            Interested in inference infrastructure, agentic software, and the
            hard problems nobody wants to touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="border border-text-primary bg-text-primary px-6 py-3 font-mono text-xs font-medium tracking-wide text-bg transition-colors hover:bg-transparent hover:text-text-primary"
          >
            View Projects
          </a>
          <a
            href="#principles"
            className="border border-border px-6 py-3 font-mono text-xs font-medium tracking-wide text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary"
          >
            Read Thesis
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-3 font-mono text-xs font-medium tracking-wide text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-text-muted to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
