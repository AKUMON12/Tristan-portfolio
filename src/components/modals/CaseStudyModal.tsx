'use client';

import React from 'react';
import { Modal } from '../ui/Modal';
import { Project } from '../../types';
import { ExternalLink, Github, CheckCircle2, AlertCircle, Cpu, Lock } from 'lucide-react';
import Image from 'next/image';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="max-w-4xl">
      <div className="space-y-6">
        {/* Banner with tagline & category */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
              {project.category}
            </span>
            <span className="text-xs text-slate-400">• Case Study & System Overview</span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-1.5 text-xs font-bold text-black transition-all hover:bg-cyan-400"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
              >
                <Github className="h-3.5 w-3.5" />
                Repository
              </a>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base font-medium text-purple-400 font-mono">
          {project.tagline}
        </p>

        {/* Vercel-Style Browser Window Frame */}
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-3.5 py-2">
            <div className="flex items-center space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex items-center space-x-1.5 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-0.5 font-mono text-[11px] text-slate-300">
              <Lock className="h-2.5 w-2.5 text-emerald-400" />
              <span>{project.deploymentDomain || 'deployment.live'}</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 font-semibold">
              ● {project.deploymentStatus || 'Production'}
            </span>
          </div>

          {/* Visual Preview */}
          <div className="relative h-64 w-full overflow-hidden bg-slate-900 sm:h-80">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-[#0E131F]/90 px-2.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study 4-Pillar Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Pillar 1: The Problem */}
          <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-rose-400">
              <AlertCircle className="h-4 w-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Problem Statement</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Pillar 2: Role & Architecture */}
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/10 p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-cyan-400">
              <Cpu className="h-4 w-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Role & Architecture</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.caseStudy.roleAndApproach}
            </p>
          </div>

          {/* Pillar 3: Key Challenge */}
          <div className="rounded-xl border border-purple-500/20 bg-purple-950/10 p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-purple-400">
              <AlertCircle className="h-4 w-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Key Challenge</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.caseStudy.keyChallenge}
            </p>
          </div>

          {/* Pillar 4: Outcome & Impact */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Quantifiable Outcome</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.caseStudy.outcome}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
