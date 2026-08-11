"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <header id="profile" className="hero-bg w-full rounded-b-[44px] pt-[240px] pb-32 px-margin-desktop mb-32 flex flex-col items-center justify-center relative overflow-hidden border-b border-white/5">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1440px] w-full text-center z-10 relative"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 bg-surface-container-highest/50 rounded-full px-4 py-2 mb-10 border border-white/10 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></div>
          <span className="font-label-sm text-label-sm text-on-surface">
            Open to opportunities
          </span>
        </motion.div>
        <motion.h1 variants={item} className="font-display-2xl text-display-2xl font-bold text-on-surface tracking-tighter leading-none mx-auto max-w-5xl">
          Software<br />Engineer.
        </motion.h1>
      </motion.div>
    </header>
  );
}
