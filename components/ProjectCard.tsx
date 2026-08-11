"use client";

import { motion } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  imageSrc: string;
  badge?: string;
  projectType?: string;
  liveStatus?: string;
  liveLink?: string;
  apiLink?: string;
  credentials?: { username: string; password: string };
  date?: string;
  description?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={() => onClick(project)}
      className="group cursor-pointer p-6 -mx-6 rounded-[44px] hover:bg-surface-container-highest/40 transition-colors duration-300 border border-transparent hover:border-white/5"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface-container/50 mb-6 aspect-[4/3] drop-shadow-sm group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-shadow">
        <img
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={project.imageSrc}
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-title-md text-body-lg font-bold text-on-surface mb-1">
            {project.title}
          </h3>
          {project.date && (
            <p className="font-body-sm text-sm text-on-surface-variant font-medium">
              {project.date}
            </p>
          )}
        </div>
        {project.badge && (
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-sm ${
              project.badge.toLowerCase() === "working on"
                ? "bg-red-950 text-red-400 border-red-800"
                : "bg-[#2a4030] text-[#8cebaf] border-[#487053]"
            }`}
          >
            {project.badge}
          </span>
        )}
      </div>
    </motion.div>
  );
}
