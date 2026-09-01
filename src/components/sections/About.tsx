'use client';

import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Cpu,
  Terminal,
  Compass,
  Code,
  Layers,
} from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Compass className="h-3.5 w-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            Full-Stack Developer focused on building clean, high-performance web systems with deliberate UI/UX craftsmanship.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main Summary Card (Col 8) */}
          <div className="rounded-3xl border border-cyan-500/20 bg-[#0E131F]/80 p-8 backdrop-blur-xl lg:col-span-8 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
            <div className="mb-4 flex items-center gap-2 text-cyan-400">
              <Terminal className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Engineering Approach
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Design Precision Coupled with Scalable Full-Stack Logic
            </h3>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                I am <span className="font-semibold text-white">Tristan Jesus V. Elvinia</span> (<span className="font-mono text-cyan-400">Akumon</span>), an Information Technology graduate specializing in modern web development, frontend architecture, and responsive user interfaces.
              </p>
              <p>
                My core stack is built around <span className="text-cyan-300 font-medium">Node.js</span>, <span className="text-cyan-300 font-medium">Next.js</span>, <span className="text-purple-300 font-medium">TypeScript</span>, and <span className="text-cyan-300 font-medium">PostgreSQL / Supabase</span>. I prioritize writing modular, maintainable code paired with intuitive, accessible user interfaces.
              </p>
            </div>

            {/* Core Focus Pillars */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                <p className="text-xs font-bold text-white">Full-Stack Systems</p>
                <p className="mt-1 text-[11px] text-slate-400">End-to-end web apps with secure auth & clean APIs.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                <p className="text-xs font-bold text-white">Modern UI/UX</p>
                <p className="mt-1 text-[11px] text-slate-400">Tailwind CSS, responsive design, and micro-interactions.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                <p className="text-xs font-bold text-white">AI Solutions</p>
                <p className="mt-1 text-[11px] text-slate-400">Retrieval systems and Gemini LLM integrations.</p>
              </div>
            </div>
          </div>

          {/* Education & Status Card (Col 4) */}
          <div className="flex flex-col justify-between space-y-6 rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-8 backdrop-blur-xl lg:col-span-4">
            <div>
              <div className="mb-4 flex items-center gap-2 text-purple-400">
                <GraduationCap className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Education
                </span>
              </div>
              <h4 className="text-xl font-bold text-white">BS in Information Technology</h4>
              <p className="mt-1 text-sm font-medium text-cyan-400">University of Cebu Main Campus</p>
              <p className="mt-1 text-xs text-slate-400">Graduated December 2025 • Cebu City, PH</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/30 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Current Status</span>
              </div>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Available for full-time engineering roles, contract projects, and freelance full-stack development.
              </p>
            </div>
          </div>

          {/* Experience Card (Col 6) */}
          <div className="rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl lg:col-span-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-400">
                <Briefcase className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Professional Experience
                </span>
              </div>
              <span className="rounded-full bg-blue-950/60 px-2.5 py-0.5 text-xs text-blue-300 border border-blue-800/40">
                June 2024 – August 2024
              </span>
            </div>

            <h4 className="text-lg font-bold text-white">Chat Support Specialist</h4>
            <p className="text-sm font-medium text-slate-300">Eperformax • Shopee Account</p>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Handled complex e-commerce order troubleshooting and customer account resolution.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Maintained high Customer Satisfaction (CSAT) metrics through rapid inquiry diagnosis and clear communication.</span>
              </li>
            </ul>
          </div>

          {/* Technical Domains & Interests (Col 6) */}
          <div className="rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl lg:col-span-6">
            <div className="mb-3 flex items-center gap-2 text-emerald-400">
              <Cpu className="h-4 w-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Technical Domains & Focus
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Code className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Full-Stack Web Apps</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Building reactive client interfaces with robust API backend architectures.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-purple-400" />
                  <span>IoT & Embedded Systems</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  ESP32 and Arduino firmware, sensor telemetry, and hardware prototypes.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-amber-400" />
                  <span>UI/UX Design Systems</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Crafting accessible components, wireframes, and design tokens.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  <span>AI & LLM Workflows</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Prompt engineering, RAG pipelines, and Gemini API integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
