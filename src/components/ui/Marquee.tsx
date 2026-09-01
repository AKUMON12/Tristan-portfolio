'use client';

import React from 'react';

const techBadges = [
  { name: 'Node.js', category: 'Backend' },
  { name: 'Next.js 14', category: 'Framework' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'UI/UX' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Supabase', category: 'BaaS' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Figma', category: 'Design' },
  { name: 'RAG & Gemini AI', category: 'AI' },
  { name: 'Arduino & ESP32', category: 'IoT' },
  { name: 'Cisco CCNAv7', category: 'Networking' },
  { name: 'Vercel', category: 'Cloud' },
  { name: 'Railway', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Python', category: 'AI/Backend' },
];

export const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-cyan-500/20 bg-[#0A0D14]/80 py-4 backdrop-blur-md">
      {/* Gradient masks for smooth fade at edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A0D14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A0D14] to-transparent" />

      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
        {[...techBadges, ...techBadges].map((item, idx) => (
          <div
            key={idx}
            className="group flex items-center space-x-3 rounded-full border border-slate-800/80 bg-slate-900/60 px-4 py-2 text-xs font-semibold tracking-wider text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:text-cyan-300"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] transition-transform group-hover:scale-125" />
            <span className="text-white group-hover:text-cyan-200">{item.name}</span>
            <span className="rounded bg-slate-800/90 px-1.5 py-0.5 text-[10px] text-slate-400 group-hover:text-cyan-300/80">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
