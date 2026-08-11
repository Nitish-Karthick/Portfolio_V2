"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="hero-bg w-full rounded-t-[44px] max-w-[1440px] mx-auto px-margin-desktop py-32 flex flex-col items-center gap-12 border-t border-l border-r border-white/10"
    >
      <div className="font-headline-xl text-headline-xl font-black text-on-surface tracking-tight">
        Nitish Karthick V
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a className="flex items-center gap-3 bg-surface-container-high px-8 py-4 rounded-full hover:opacity-80 transition-opacity duration-300 border border-white/10" href="https://www.linkedin.com/in/nitish-karthick-v-446036328/" target="_blank" rel="noopener noreferrer">
          <span className="font-body-lg text-body-lg text-primary font-bold">LinkedIn</span>
          <span className="bg-primary-container text-on-primary-container text-xs px-3 py-1 rounded-full font-bold">Connect</span>
        </a>
        <a className="flex items-center gap-3 bg-surface-container-high px-8 py-4 rounded-full hover:opacity-80 transition-opacity duration-300 border border-white/10" href="https://github.com/Nitish-Karthick" target="_blank" rel="noopener noreferrer">
          <span className="font-body-lg text-body-lg text-on-surface-variant font-bold">GitHub</span>
          <span className="bg-secondary-container text-on-secondary-container text-xs px-3 py-1 rounded-full font-bold">Code</span>
        </a>
      </div>
      <div className="text-center mt-12">
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">Built with Next.js, React, and Tailwind CSS.</p>
        <p className="font-body-md text-body-md text-outline">© 2026 Nitish Karthick V. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
