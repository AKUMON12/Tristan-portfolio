'use client';

import React, { useState, useEffect } from 'react';
import { skillCategories } from '../../data/skillsData';
import { SkeletonCard } from '../ui/SkeletonCard';
import { Cpu, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 380);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Skills & Proficiencies
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
            Production-tested technologies across frontend, backend, AI integrations, and cloud infrastructure.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                activeCategoryIndex === idx
                  ? 'border border-cyan-500/50 bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'border border-slate-800 bg-[#0E131F]/80 text-slate-400 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Display with Skeletal Loading State */}
        {isLoading ? (
          <SkeletonCard type="skills" />
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="mb-6 border-b border-slate-800/80 pb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {skillCategories[activeCategoryIndex].title}
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">
                {skillCategories[activeCategoryIndex].description}
              </p>
            </div>

            {/* Skill Progress Bars Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skillCategories[activeCategoryIndex].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {skill.proficiency}%
                    </span>
                  </div>

                  {/* Progress track */}
                  <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 transition-all duration-1000"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  {/* Highlight Focus */}
                  {skill.highlight && (
                    <p className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0" />
                      <span>{skill.highlight}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
