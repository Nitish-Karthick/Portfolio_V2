"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const blurAmount = useTransform(scrollY, [0, 100], [0, 16]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  return (
    <motion.nav
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(39, 39, 42, ${v})`), // surface-container-high
        backdropFilter: useTransform(blurAmount, (v) => `blur(${v}px)`),
        borderColor: useTransform(borderOpacity, (v) => `rgba(255, 255, 255, ${v})`),
      }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-auto rounded-full border border-transparent flex items-center gap-8 lg:gap-16 px-4 py-3 sm:px-6 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-white/10 bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg">
          N
        </div>
        <span className="font-title-md text-[18px] font-bold text-on-surface whitespace-nowrap">
          Nitish Karthick
        </span>
      </div>
      <div className="hidden md:flex items-center gap-2 font-body-md text-[16px] whitespace-nowrap">
        <a className="text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#profile">
          Profile
        </a>
        <a className="text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#project">
          Project
        </a>
        <a className="text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#skills">
          Skills
        </a>
        <a className="text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#about">
          About me
        </a>
      </div>
      <a href="https://www.linkedin.com/in/nitish-karthick-v-446036328/" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-3 rounded-full text-[16px] font-bold hover:scale-105 transition-transform duration-200 flex items-center gap-2 whitespace-nowrap">
        <span>Let&apos;s talk</span>
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
    </motion.nav>
  );
}
