'use client';

import React from 'react';
import { Modal } from '../ui/Modal';
import { Project } from '../../types';
import { ExternalLink, Github, CheckCircle2, AlertCircle, Cpu, Award } from 'lucide-react';
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
            <span className="text-xs text-slate-400">• Case Study Deep Dive</span>
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
                Code Repo
              </a>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base font-medium text-slate-300">
          {project.tagline}
        </p>

        {/* Visual Preview */}
        <div className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 sm:h-80">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              // fallback placeholder if image asset is not loaded
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

        {/* Case Study 4-Pillar Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Pillar 1: The Problem */}
          <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-rose-400">
              <AlertCircle className="h-4 w-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">The Problem Solved</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Pillar 2: Role & Architecture */}
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/10 p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-cyan-400">
              <Cpu className="h-4 w-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Role & Architectural Approach</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.caseStudy.roleAndApproach}
            </p>
          </div>

          {/* Pillar 3: Key Challenge */}
          <div className="rounded-xl border border-purple-500/20 bg-purple-950/10 p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-purple-400">
              <AlertCircle className="h-4 w-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Key Challenge & Solution</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.caseStudy.keyChallenge}
            </p>
          </div>

          {/* Pillar 4: Outcome & Impact */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Quantifiable Outcome & Impact</h4>
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
