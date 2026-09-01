'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projectsData';
import { Project } from '../../types';
import { SkeletonCard } from '../ui/SkeletonCard';
import { ProjectPreviewMockup } from '../ui/ProjectPreviewMockup';
import {
  ExternalLink,
  Github,
  BookOpen,
  FolderGit2,
  Lock,
  ArrowUpRight,
  Eye,
  Sparkles,
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activePreviewModes, setActivePreviewModes] = useState<Record<string, 'live-ui' | 'snapshot'>>({
    'coop-sync': 'snapshot',
    'chrononav': 'snapshot',
    'skycast-os': 'snapshot',
    'nanoworld': 'snapshot',
    'biodiversity': 'snapshot',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const togglePreviewMode = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation();
    setActivePreviewModes((prev) => ({
      ...prev,
      [projectId]: prev[projectId] === 'live-ui' ? 'snapshot' : 'live-ui',
    }));
  };

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const categories = ['All', 'Freelance', 'Capstone', 'Personal', 'Academic'];

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
            <span>Deployed Systems & Showcases</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
            Click any project card to launch the live system, or toggle between actual screenshots and interactive mockups.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <SkeletonCard key={n} type="project" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => {
              const isLiveUIMode = activePreviewModes[project.id] === 'live-ui';

              return (
                <div
                  key={project.id}
                  onClick={() => handleCardClick(project.liveUrl)}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-[#0E131F]/85 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:shadow-[0_16px_40px_rgba(0,240,255,0.15)] backdrop-blur-xl cursor-pointer"
                  title={`Click to open live system: ${project.title}`}
                >
                  {/* Vercel-Style Browser Window Header */}
                  <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/90 px-3.5 py-2.5">
                    <div className="flex items-center space-x-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                    </div>

                    <div className="flex max-w-[180px] sm:max-w-[200px] items-center space-x-1.5 truncate rounded-md border border-slate-800 bg-slate-900/80 px-2 py-0.5 font-mono text-[11px] text-slate-300">
                      <Lock className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                      <span className="truncate">
                        {project.deploymentDomain || 'deployment.live'}
                      </span>
                    </div>

                    {/* Mode Toggle Button: Interactive UI vs Snapshot */}
                    <button
                      onClick={(e) => togglePreviewMode(e, project.id)}
                      className={`flex items-center gap-1 rounded px-2 py-0.5 font-mono text-[10px] font-semibold transition-colors ${
                        isLiveUIMode
                          ? 'border border-cyan-500/40 bg-cyan-950/40 text-cyan-300'
                          : 'border border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                      title="Toggle between Live Interactive UI Preview and Snapshot"
                    >
                      {isLiveUIMode ? (
                        <>
                          <Sparkles className="h-2.5 w-2.5 text-cyan-400" />
                          <span>Interactive</span>
                        </>
                      ) : (
                        <>
                          <Eye className="h-2.5 w-2.5 text-slate-400" />
                          <span>Image</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* System Preview Viewport: Screenshot Image or Interactive Simulator */}
                  <div
                    className="relative aspect-video w-full overflow-hidden bg-slate-950"
                    onClick={(e) => {
                      if ((e.target as HTMLElement).tagName === 'BUTTON') {
                        e.stopPropagation();
                      }
                    }}
                  >
                    {isLiveUIMode ? (
                      <ProjectPreviewMockup projectId={project.id} />
                    ) : (
                      <div className="relative h-full w-full overflow-hidden bg-slate-950">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F]/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Category & Deployment Meta Row */}
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                          {project.category}
                        </span>
                        {project.deploymentPlatform && (
                          <span className="rounded-full border border-purple-500/30 bg-purple-950/30 px-2 py-0.5 font-mono text-[10px] font-medium text-purple-300">
                            {project.deploymentPlatform}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 shrink-0">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                          {project.deploymentStatus || 'Production'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <p className="mt-1 font-mono text-xs text-purple-400 font-medium">
                      {project.tagline}
                    </p>

                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-3.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/20 px-3 py-1.5 text-xs font-bold text-cyan-300 transition-all hover:bg-cyan-500 hover:text-black"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Case Study</span>
                      </button>

                      <div className="flex items-center space-x-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
                            title="Visit Live System"
                            aria-label={`Visit Live System for ${project.title}`}
                          >
                            <span>Visit</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
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
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
