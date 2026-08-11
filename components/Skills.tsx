"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1440px] mx-auto px-margin-desktop mb-40 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-surface-container-high rounded-[44px] p-16 flex flex-col justify-between border border-white/10 min-h-[560px]"
        >
          <div>
            <h3 className="font-display-xl text-headline-xl font-bold text-on-surface mb-6 tracking-tighter">Languages & Tools</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Proficient in multiple programming languages and standard development tools.
            </p>
            <div className="space-y-6">
              <div>
                <span className="font-label-sm text-primary uppercase tracking-wider mb-2 block">Languages</span>
                <span className="font-title-md text-on-surface">{skills.languages}</span>
              </div>
              <div>
                <span className="font-label-sm text-primary uppercase tracking-wider mb-2 block">Tools & Platforms</span>
                <span className="font-title-md text-on-surface">{skills.tools}</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Dark Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
          className="hero-bg rounded-[44px] p-16 flex flex-col justify-between border border-white/10 min-h-[560px]"
        >
          <div>
            <h3 className="font-display-xl text-headline-xl font-bold text-on-surface mb-6 tracking-tighter">Frameworks</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Experienced with modern full-stack web and desktop frameworks.
            </p>
            <div className="space-y-6">
              <div>
                <span className="font-label-sm text-primary uppercase tracking-wider mb-2 block">Libraries & Frameworks</span>
                <span className="font-title-md text-on-surface">{skills.frameworks}</span>
              </div>
              <div>
                <span className="font-label-sm text-primary uppercase tracking-wider mb-2 block">Spoken Languages</span>
                <span className="font-title-md text-on-surface">{skills.spoken}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
