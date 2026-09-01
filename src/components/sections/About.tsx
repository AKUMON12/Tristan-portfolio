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
  Award,
  CheckCircle2,
} from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Compass className="h-3.5 w-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
            Full-Stack Developer focused on building clean, high-performance web systems with deliberate UI/UX craftsmanship.
          </p>
        </div>

        {/* Minimalist Bento Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Card 1: Core Philosophy & Stack (Col 8) */}
          <div className="rounded-3xl border border-cyan-500/20 bg-[#0E131F]/80 p-7 backdrop-blur-xl lg:col-span-8 shadow-[0_0_30px_rgba(0,240,255,0.05)] flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-cyan-400">
                <Terminal className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Engineering Focus
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Design Precision Coupled with Scalable Full-Stack Logic
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                I am <span className="font-semibold text-white">Tristan Jesus V. Elvinia</span> (<span className="font-mono text-cyan-400">Akumon</span>), an Information Technology graduate specializing in modern web applications, frontend architecture, and responsive user experiences.
              </p>
            </div>

            {/* Core Domain Badges */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-800/80">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-2.5">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Code className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Full-Stack</span>
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">Next.js & PostgreSQL</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-2.5">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-purple-400" />
                  <span>Modern UI/UX</span>
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">Tailwind & Glassmorphism</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-2.5">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                  <span>APIs & Systems</span>
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">REST & Microservices</p>
              </div>
            </div>
          </div>

          {/* Card 2: Academic Credential & Status (Col 4) */}
          <div className="flex flex-col justify-between space-y-5 rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-7 backdrop-blur-xl lg:col-span-4">
            <div>
              <div className="mb-3 flex items-center gap-2 text-purple-400">
                <GraduationCap className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Education
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">BS in Information Technology</h4>
              <p className="text-sm font-medium text-cyan-400">University of Cebu Main Campus</p>
              <p className="mt-1 text-xs text-slate-400">Graduated December 2025 • Cebu City, PH</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/30 p-3.5">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Current Status</span>
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Open for full-time engineering roles, contract work, and freelance full-stack projects.
              </p>
            </div>
          </div>

          {/* Card 3: Experience (Col 6) */}
          <div className="rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl lg:col-span-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-400">
                <Briefcase className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Experience
                </span>
              </div>
              <span className="rounded-full bg-blue-950/60 px-2.5 py-0.5 text-[11px] text-blue-300 border border-blue-800/40 font-mono">
                2024
              </span>
            </div>

            <h4 className="text-base font-bold text-white">Chat Support Specialist</h4>
            <p className="text-xs font-medium text-slate-300">Eperformax • Shopee Account</p>
            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Resolved high-volume e-commerce logistics and account technical inquiries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Maintained top Customer Satisfaction (CSAT) metrics through rapid issue diagnosis.</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Key Accolades & Highlights Matrix (Col 6) */}
          <div className="rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl lg:col-span-6 flex flex-col justify-between">
            <div className="mb-3 flex items-center gap-2 text-emerald-400">
              <Award className="h-4 w-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Key Accolades & Accreditations
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="font-mono text-base font-bold text-cyan-400">CCNAv7</p>
                <p className="text-[11px] text-slate-300 font-medium">Cisco Certified (SRWE)</p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="font-mono text-base font-bold text-purple-400">Top Capstone</p>
                <p className="text-[11px] text-slate-300 font-medium">ChronoNav Recognition</p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="font-mono text-base font-bold text-emerald-400">5+ Apps</p>
                <p className="text-[11px] text-slate-300 font-medium">Production Deployed</p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="font-mono text-base font-bold text-sky-400">Cybersecurity</p>
                <p className="text-[11px] text-slate-300 font-medium">Cisco Verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
