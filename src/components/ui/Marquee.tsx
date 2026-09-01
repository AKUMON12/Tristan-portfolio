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

interface BrandItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  accent: string;
}

const brandList: BrandItem[] = [
  { name: 'React', category: 'Frontend', icon: <ReactIcon className="h-6 w-6" />, accent: 'cyan' },
  { name: 'Next.js 14', category: 'Framework', icon: <NextJsIcon className="h-6 w-6" />, accent: 'slate' },
  { name: 'TypeScript', category: 'Language', icon: <TypeScriptIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'Node.js', category: 'Runtime', icon: <NodeJsIcon className="h-6 w-6" />, accent: 'emerald' },
  { name: 'Tailwind CSS', category: 'Styling', icon: <TailwindIcon className="h-6 w-6" />, accent: 'sky' },
  { name: 'PostgreSQL', category: 'Database', icon: <PostgresIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'Supabase', category: 'BaaS & Auth', icon: <SupabaseIcon className="h-6 w-6" />, accent: 'emerald' },
  { name: 'Express.js', category: 'Backend', icon: <ExpressIcon className="h-6 w-6" />, accent: 'slate' },
  { name: 'Nuxt.js', category: 'Vue Ecosystem', icon: <NuxtIcon className="h-6 w-6" />, accent: 'emerald' },
  { name: 'MySQL', category: 'Relational DB', icon: <MySqlIcon className="h-6 w-6" />, accent: 'amber' },
  { name: 'Figma', category: 'UI/UX Design', icon: <FigmaIcon className="h-6 w-6" />, accent: 'purple' },
  { name: 'Canva', category: 'Graphic Design', icon: <CanvaIcon className="h-6 w-6" />, accent: 'cyan' },
  { name: 'Adobe Photoshop', category: 'Graphics', icon: <AdobePsIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'VS Code', category: 'IDE', icon: <VsCodeIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'Cursor AI', category: 'AI Editor', icon: <CursorIcon className="h-6 w-6" />, accent: 'cyan' },
  { name: 'Arduino', category: 'IoT Firmware', icon: <ArduinoIcon className="h-6 w-6" />, accent: 'teal' },
  { name: 'Cisco Packet Tracer', category: 'Networking', icon: <CiscoIcon className="h-6 w-6" />, accent: 'sky' },
  { name: 'Gemini AI', category: 'LLM Agents', icon: <GeminiIcon className="h-6 w-6" />, accent: 'purple' },
  { name: 'Vercel', category: 'Cloud Hosting', icon: <VercelIcon className="h-6 w-6" />, accent: 'slate' },
  { name: 'Railway', category: 'Production PaaS', icon: <RailwayIcon className="h-6 w-6" />, accent: 'purple' },
  { name: 'Docker', category: 'Containers', icon: <DockerIcon className="h-6 w-6" />, accent: 'blue' },
  { name: 'Python', category: 'AI / Backend', icon: <PythonIcon className="h-6 w-6" />, accent: 'amber' },
  { name: 'Git', category: 'Version Control', icon: <GitIcon className="h-6 w-6" />, accent: 'rose' },
];

export const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-cyan-500/20 bg-[#0A0D14]/85 py-5 backdrop-blur-md">
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
    </div>
  );
};
