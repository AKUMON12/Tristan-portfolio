'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '../../data/projectsData';
import { Project } from '../../types';
import { SkeletonCard } from '../ui/SkeletonCard';
import {
  ExternalLink,
  Github,
  BookOpen,
  FolderGit2,
  Lock,
  GitBranch,
  ArrowUpRight,
  Globe,
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Freelance', 'Capstone', 'Personal', 'Academic', 'IoT/AI'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Deployed Systems & Applications</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            Live production web applications, academic capstones, and engineering case studies with verified deployments.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Skeletal loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <SkeletonCard key={n} type="project" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-[#0E131F]/85 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_16px_40px_rgba(0,240,255,0.12)] backdrop-blur-xl"
              >
                {/* Vercel-Style Browser Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/90 px-3.5 py-2.5">
                  {/* Window Control Dots */}
                  <div className="flex items-center space-x-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex max-w-[200px] sm:max-w-[220px] items-center space-x-1.5 truncate rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-0.5 font-mono text-[11px] text-slate-300">
                    <Lock className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">
                      {project.deploymentDomain || 'deployment.live'}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center space-x-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="hidden sm:inline font-mono text-[10px] text-emerald-400 font-semibold">
                      {project.deploymentStatus || 'Production'}
                    </span>
                  </div>
                </div>

                {/* System Preview Viewport (Vercel deployment pane style) */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-80" />

                  {/* Platform & Category Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="rounded-full border border-white/10 bg-[#0A0D14]/80 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.deploymentPlatform && (
                      <span className="rounded-full border border-white/10 bg-[#0A0D14]/80 px-2 py-0.5 font-mono text-[10px] font-medium text-purple-300 backdrop-blur-md">
                        {project.deploymentPlatform}
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Visit Overlay */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-black shadow-lg hover:bg-cyan-400 transition-transform hover:scale-105">
                        <span>Visit Preview</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  )}
                </div>

                {/* Card Information Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-1 font-mono text-xs text-purple-400 font-medium">
                    {project.tagline}
                  </p>

                  <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Vercel-Style Deployment Metadata & Action Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/20 px-3 py-1.5 text-xs font-bold text-cyan-300 transition-all hover:bg-cyan-500 hover:text-black"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Case Study</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-700 bg-slate-800/80 p-2 text-slate-300 transition-colors hover:border-cyan-400 hover:text-white"
                          title="Open Live Preview"
                          aria-label={`Open Live Preview for ${project.title}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-700 bg-slate-800/80 p-2 text-slate-300 transition-colors hover:border-cyan-400 hover:text-white"
                          title="View Source on GitHub"
                          aria-label={`View Source on GitHub for ${project.title}`}
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
