"use client";

import { useState } from "react";
import { projects, experiences } from "@/lib/data";
import Modal from "./Modal";
import ProjectCard, { Project } from "./ProjectCard";
import ExperienceCard, { Experience } from "./ExperienceCard";

export default function ExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [showReport, setShowReport] = useState<boolean>(false);

  return (
    <>
      <section id="project" className="max-w-[1440px] mx-auto px-margin-desktop mb-32">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </section>

      <section className="section-bg w-full py-32 px-margin-desktop rounded-[44px] max-w-[1440px] mx-auto mb-32 border border-white/10">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-xl font-bold text-on-surface tracking-tight">
            Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              exp={exp as Experience}
              onClick={(experience) => {
                setSelectedExperience(experience);
                setShowReport(false);
              }}
            />
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <>
            <div className="w-full aspect-[21/9] rounded-[32px] overflow-hidden mb-10 relative border border-white/10">
              <img
                src={selectedProject.imageSrc}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="font-display-lg text-headline-lg font-bold text-on-surface mb-2">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.date && (
                      <p className="font-body-md text-on-surface-variant font-medium">
                        {selectedProject.date}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.badge && (
                      <span
                        className={`text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border ${
                          selectedProject.badge.toLowerCase() === "working on"
                            ? "bg-red-950 text-red-400 border-red-800"
                            : "bg-[#2a4030] text-[#8cebaf] border-[#487053]"
                        }`}
                      >
                        {selectedProject.badge}
                      </span>
                    )}
                    {selectedProject.projectType && (
                      <span className="text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border bg-white/5 text-on-surface border-white/10">
                        {selectedProject.projectType}
                      </span>
                    )}
                    {selectedProject.liveStatus && (
                      <span className="text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border bg-white/5 text-on-surface border-white/10">
                        {selectedProject.liveStatus}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {selectedProject.description && (
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
                    About the Project
                  </h3>
                  <p className="font-body-lg text-on-surface-variant leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              )}

              {selectedProject.credentials && (
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
                    Demo Credentials
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="bg-surface-variant/50 rounded-xl px-4 py-3 flex-1 border border-white/5">
                      <span className="text-on-surface-variant text-xs uppercase tracking-wider block mb-1">
                        Username
                      </span>
                      <span className="font-mono text-on-surface font-medium">
                        {selectedProject.credentials.username}
                      </span>
                    </div>
                    <div className="bg-surface-variant/50 rounded-xl px-4 py-3 flex-1 border border-white/5">
                      <span className="text-on-surface-variant text-xs uppercase tracking-wider block mb-1">
                        Password
                      </span>
                      <span className="font-mono text-on-surface font-medium">
                        {selectedProject.credentials.password}
                      </span>
                    </div>
                  </div>
                  {selectedProject.apiLink && (
                    <p className="text-sm text-on-surface-variant flex items-start gap-2 bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                      <span className="material-symbols-outlined text-amber-500 text-[20px]">
                        info
                      </span>
                      <span>
                        The backend API is hosted on a free tier.{" "}
                        <a
                          href={selectedProject.apiLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400 font-bold hover:underline"
                        >
                          Click here to wake it up
                        </a>{" "}
                        (it may take 30-60s) before logging into the Web App.
                      </span>
                    </p>
                  )}
                </div>
              )}

              {selectedProject.liveLink && (
                <div className="pt-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-full text-[16px] font-bold hover:scale-105 transition-transform duration-200"
                  >
                    <span>Launch Web App</span>
                    <span className="material-symbols-outlined text-[18px]">
                      rocket_launch
                    </span>
                  </a>
                </div>
              )}
            </div>
          </>
        )}
      </Modal>

      {/* Experience Details Modal */}
      <Modal
        isOpen={!!selectedExperience}
        onClose={() => {
          setSelectedExperience(null);
          setShowReport(false);
        }}
      >
        {selectedExperience && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-display-lg text-headline-lg font-bold text-on-surface mb-2">
                  {selectedExperience.role}
                </h2>
                <p className="font-body-lg text-primary font-bold">
                  {selectedExperience.companyLink ? (
                    <a
                      href={selectedExperience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {selectedExperience.company}
                    </a>
                  ) : (
                    selectedExperience.company
                  )}
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                {selectedExperience.period}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div>
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
                  Key Projects
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  {selectedExperience.keyProjects}
                </p>
              </div>
              <div>
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
                  Scope
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  {selectedExperience.scope}
                </p>
              </div>
            </div>

            {selectedExperience.description && !showReport && (
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
                  About the Role
                </h3>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  {selectedExperience.description}
                </p>
              </div>
            )}

            {!showReport && selectedExperience.reportLink && (
              <div className="pt-4 border-t border-white/10 mt-2">
                <button
                  onClick={() => setShowReport(true)}
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-6 py-3 rounded-full text-[15px] font-bold hover:bg-primary hover:text-on-primary hover:scale-105 transition-all duration-200"
                >
                  <span>View Internship Report</span>
                  <span className="material-symbols-outlined text-[18px]">
                    description
                  </span>
                </button>
              </div>
            )}

            {showReport && selectedExperience.reportLink && (
              <div className="pt-6 border-t border-white/10 flex flex-col h-full animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-primary font-bold uppercase tracking-wider text-sm">
                    Internship Report
                  </h3>
                  <div className="flex items-center gap-6">
                    <a
                      href={selectedExperience.reportLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        open_in_new
                      </span>
                      Open in New Tab
                    </a>
                    <button
                      onClick={() => setShowReport(false)}
                      className="text-on-surface-variant hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_back
                      </span>
                      Back to Details
                    </button>
                  </div>
                </div>
                <div className="w-full h-[60vh] rounded-2xl overflow-hidden border border-white/10">
                  <iframe
                    src={selectedExperience.reportLink}
                    className="w-full h-full bg-white"
                    title={`${selectedExperience.company} Internship Report`}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
