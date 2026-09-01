'use client';

import React from 'react';
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  FileText,
  Code2,
  Terminal,
  Layers,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Context Column (Col 7) */}
          <div className="flex flex-col space-y-6 lg:col-span-7">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-cyan-300">
                Available for Freelance & Full-Time Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 font-mono">
                Hello, World! I am
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block text-white">Tristan Jesus V. Elvinia</span>
                <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h1>
              <p className="text-lg font-medium text-slate-300 sm:text-xl font-mono">
                &lt;<span className="text-cyan-400">Akumon</span> / <span className="text-purple-400">Tan</span> /&gt; — Building Scalable, Intuitive Web Apps
              </p>
            </div>

            {/* Concise Tagline */}
            <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              IT Graduate from <span className="text-slate-200 font-semibold">University of Cebu Main Campus</span> specializing in <span className="text-cyan-300 font-medium">Node.js</span>, <span className="text-cyan-300 font-medium">Next.js</span>, and modern <span className="text-purple-300 font-medium">UI/UX architecture</span>. Passionate about engineering high-concurrency systems, accessible web apps, and AI/IoT integrations.
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Node.js', 'Next.js 14', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'RAG / AI', 'IoT'].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all hover:scale-105 hover:from-cyan-400 hover:to-blue-500"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/20 px-6 py-3.5 text-sm font-semibold text-cyan-300 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-900/30 hover:text-white"
              >
                <FileText className="h-4 w-4" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-3.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Direct Social & Connect Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <a
                href="https://www.linkedin.com/in/tristan-jesus-elvinia-3a11863a3"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-2.5 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:text-cyan-400 hover:scale-110"
                aria-label="Tristan's LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/AKUMON12"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-2.5 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:text-cyan-400 hover:scale-110"
                aria-label="Tristan's GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:tjelvinia@gmail.com"
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-2.5 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:text-cyan-400 hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:09928571488"
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-2.5 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:text-cyan-400 hover:scale-110"
                aria-label="Call Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Profile Column (Col 5) */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Luminous Glow Rings Behind Portrait */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-600 to-sky-400 opacity-30 blur-2xl transition-all duration-700 group-hover:opacity-60" />

              {/* Main Cyber-Glass Container */}
              <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0E131F]/90 p-4 shadow-[0_0_40px_rgba(0,240,255,0.2)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60">
                {/* Header status strip in frame */}
                <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 px-2 pb-2">
                  <div className="flex items-center space-x-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400/80">
                    profile.tsx • Akumon
                  </span>
                </div>

                {/* Profile Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950">
                  <Image
                    src="/assets/profile.jpg"
                    alt="Tristan Jesus V. Elvinia"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-60" />

                  {/* Floating floating chip 1 */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-[#0A0D14]/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
                    <Code2 className="h-4 w-4 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold text-slate-400">Stack Focus</p>
                      <p className="text-xs font-semibold text-white">Node.js & Next.js</p>
                    </div>
                  </div>

                  {/* Floating chip 2 */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-[#0A0D14]/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                    <span className="text-xs font-bold text-purple-300">Cebu City, PH</span>
                  </div>
                </div>

                {/* Micro tech metrics bar under portrait */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2">
                    <p className="font-mono text-base font-bold text-cyan-400">8+</p>
                    <p className="text-[10px] text-slate-400 uppercase font-medium">Projects</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2">
                    <p className="font-mono text-base font-bold text-purple-400">2x</p>
                    <p className="text-[10px] text-slate-400 uppercase font-medium">Cisco Certs</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2">
                    <p className="font-mono text-base font-bold text-emerald-400">100%</p>
                    <p className="text-[10px] text-slate-400 uppercase font-medium">Committed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
