'use client';

import React from 'react';
import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  NodeJsIcon,
  TailwindIcon,
  PostgresIcon,
  SupabaseIcon,
  ExpressIcon,
  NuxtIcon,
  MySqlIcon,
  FigmaIcon,
  CanvaIcon,
  AdobePsIcon,
  VsCodeIcon,
  CursorIcon,
  ArduinoIcon,
  CiscoIcon,
  GeminiIcon,
  RailwayIcon,
  VercelIcon,
  DockerIcon,
  PythonIcon,
  GitIcon,
} from './BrandIcons';
import { Cpu, Sparkles } from 'lucide-react';

interface BrandItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  accent: string;
}

const brandList: BrandItem[] = [
  { name: 'React', category: 'Frontend UI', icon: <ReactIcon className="h-6 w-6" />, accent: 'cyan' },
  { name: 'Next.js 14', category: 'Web Framework', icon: <NextJsIcon className="h-6 w-6" />, accent: 'slate' },
  { name: 'TypeScript', category: 'Language', icon: <TypeScriptIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'Node.js', category: 'Runtime Env', icon: <NodeJsIcon className="h-6 w-6" />, accent: 'emerald' },
  { name: 'Tailwind CSS', category: 'Modern UI/UX', icon: <TailwindIcon className="h-6 w-6" />, accent: 'sky' },
  { name: 'PostgreSQL', category: 'Relational DB', icon: <PostgresIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'Supabase', category: 'BaaS & Auth', icon: <SupabaseIcon className="h-6 w-6" />, accent: 'emerald' },
  { name: 'Express.js', category: 'Backend REST', icon: <ExpressIcon className="h-6 w-6" />, accent: 'slate' },
  { name: 'Nuxt.js', category: 'Vue Framework', icon: <NuxtIcon className="h-6 w-6" />, accent: 'emerald' },
  { name: 'MySQL', category: 'Database', icon: <MySqlIcon className="h-6 w-6" />, accent: 'amber' },
  { name: 'Figma', category: 'UI/UX Design', icon: <FigmaIcon className="h-6 w-6" />, accent: 'purple' },
  { name: 'Canva', category: 'Graphic Design', icon: <CanvaIcon className="h-6 w-6" />, accent: 'cyan' },
  { name: 'Adobe Photoshop', category: 'Graphics & Visuals', icon: <AdobePsIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'VS Code', category: 'Primary IDE', icon: <VsCodeIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'Cursor AI', category: 'AI Development', icon: <CursorIcon className="h-6 w-6" />, accent: 'cyan' },
  { name: 'Arduino', category: 'IoT Firmware', icon: <ArduinoIcon className="h-6 w-6" />, accent: 'teal' },
  { name: 'Cisco Packet Tracer', category: 'Networking', icon: <CiscoIcon className="h-6 w-6" />, accent: 'sky' },
  { name: 'Gemini AI', category: 'LLM Agents & RAG', icon: <GeminiIcon className="h-6 w-6" />, accent: 'purple' },
  { name: 'Vercel', category: 'Cloud Deployment', icon: <VercelIcon className="h-6 w-6" />, accent: 'slate' },
  { name: 'Railway', category: 'Cloud Hosting', icon: <RailwayIcon className="h-6 w-6" />, accent: 'purple' },
  { name: 'Docker', category: 'Containerization', icon: <DockerIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'Python', category: 'AI & Scripting', icon: <PythonIcon className="h-6 w-6" />, accent: 'amber' },
  { name: 'Git', category: 'Version Control', icon: <GitIcon className="h-6 w-6" />, accent: 'rose' },
];

export const Marquee: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-cyan-500/20 bg-[#0A0D14]/90 pt-7 pb-6 backdrop-blur-md">
      {/* Context Title & Badge */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
          <span>Tools and Tech Stack used</span>
        </div>
        <p className="mt-1.5 text-xs text-slate-400 font-medium">
          The software, frameworks, IDEs, and tools powering my daily frontend engineering and web design workflow.
        </p>
      </div>

      {/* Gradient masks for smooth fade at edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#0A0D14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#0A0D14] to-transparent" />

      {/* Infinite marquee ticker containing brand symbols and icons */}
      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
        {[...brandList, ...brandList].map((brand, idx) => (
          <div
            key={idx}
            className="group relative flex items-center space-x-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
            title={`${brand.name} • ${brand.category}`}
          >
            {/* Vector Brand Logo / Symbol */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {brand.icon}
            </div>

            {/* Brand Title & Domain Badge */}
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white transition-colors group-hover:text-cyan-200">
                {brand.name}
              </span>
              <span className="font-mono text-[10px] text-slate-400 group-hover:text-cyan-300/90">
                {brand.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
