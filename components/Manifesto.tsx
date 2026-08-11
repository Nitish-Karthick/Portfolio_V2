"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section id="about" className="section-bg text-on-surface w-full py-40 px-margin-desktop rounded-[44px] max-w-[1440px] mx-auto mb-32 border border-white/10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="max-w-4xl mx-auto text-center space-y-12"
      >
        <span className="material-symbols-outlined text-5xl mb-6 block text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
          format_quote
        </span>
        <p className="font-headline-lg text-[36px] font-medium leading-tight text-on-surface tracking-tight">
          When a system is granted unlimited scope, it achieves nothing. Constraint breeds true innovation. I believe in speed of execution paired with deep structural thinking. Great products are built by teams, not individuals.
        </p>
        <span className="material-symbols-outlined text-5xl mt-6 block text-primary rotate-180" style={{ fontVariationSettings: "'FILL' 1" }}>
          format_quote
        </span>
      </motion.div>
    </section>
  );
}
