"use client";

import { faqs } from "@/lib/data";
import { motion, Variants } from "framer-motion";

export default function FAQ() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="max-w-[1440px] mx-auto px-margin-desktop mb-32">
      <div className="mb-16">
        <h2 className="font-headline-lg text-headline-xl font-bold text-on-surface tracking-tight">Common Questions</h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {faqs.map((faq) => (
          <motion.div
            variants={item}
            key={faq.id}
            className="bg-surface-container/50 backdrop-blur-sm rounded-[32px] p-10 border border-white/10 shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <span className={`inline-block ${faq.categoryColorClass} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6`}>
              {faq.category}
            </span>
            <h3 className="font-headline-lg text-title-md font-bold text-on-surface mb-4 tracking-tight">
              {faq.question}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
