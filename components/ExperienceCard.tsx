"use client";

import { motion } from "framer-motion";

export interface Experience {
  id: number;
  company: string;
  companyLink?: string;
  reportLink?: string;
  period: string;
  role: string;
  keyProjects: string;
  scope: string;
  description?: string;
  colSpan?: number;
}

interface ExperienceCardProps {
  exp: Experience;
  onClick: (exp: Experience) => void;
}

export default function ExperienceCard({ exp, onClick }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={() => onClick(exp)}
      className={`group cursor-pointer bg-surface-container/50 hover:bg-surface-container-highest/40 backdrop-blur-sm rounded-[32px] p-10 border border-white/10 hover:border-white/20 shadow-sm transition-all duration-300 drop-shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] ${
        exp.colSpan === 2 ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-10">
        <h3 className="font-title-md text-title-md font-bold text-on-surface">
          {exp.companyLink ? (
            <a
              href={exp.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:underline transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {exp.company}
            </a>
          ) : (
            exp.company
          )}
        </h3>
        <span className="font-body-md text-body-md text-on-surface-variant">
          {exp.period}
        </span>
      </div>

      {exp.colSpan === 2 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col md:border-r border-white/10 md:pr-8">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">
              Role
            </span>
            <span className="font-body-lg text-body-lg text-on-surface">
              {exp.role}
            </span>
          </div>
          <div className="flex flex-col md:border-r border-white/10 md:pr-8">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">
              Key Projects
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              {exp.keyProjects}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">
              Scope
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              {exp.scope}
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex flex-col border-b border-white/10 pb-5">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">
              Role
            </span>
            <span className="font-body-lg text-body-lg text-on-surface">
              {exp.role}
            </span>
          </div>
          <div className="flex flex-col border-b border-white/10 pb-5">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">
              Key Projects
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              {exp.keyProjects}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">
              Scope
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              {exp.scope}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
