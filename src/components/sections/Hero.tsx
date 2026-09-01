'use client';

import React from 'react';
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  FileText,
  Code2,
  Terminal,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Minimalist Value Proposition (Col 7) */}
          <div className="flex flex-col space-y-6 lg:col-span-7">
            {/* Status Beacon */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 backdrop-blur-md w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300">
                Available for Full-Stack Roles
              </span>
            </div>

            {/* Core Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span>Tristan Jesus V. Elvinia</span>
                <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h1>
              <p className="font-mono text-sm text-purple-400">
                &lt;Akumon.dev /&gt; • Modern Web Architectures & Responsive UI
              </p>
            </div>

            {/* Minimalist 1-Sentence Summary */}
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              IT graduate from <span className="text-white font-semibold">University of Cebu</span> engineering scalable web applications with <span className="text-cyan-300 font-medium">Node.js</span>, <span className="text-cyan-300 font-medium">Next.js</span>, and <span className="text-purple-300 font-medium">PostgreSQL</span>.
            </p>

            {/* Core Tech Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {['Node.js', 'Next.js 14', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Supabase'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:scale-105 hover:from-cyan-400 hover:to-blue-500"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/20 px-5 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-900/30 hover:text-white"
              >
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/in/tristan-jesus-elvinia-3a11863a3"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-2 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/AKUMON12"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-2 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:tjelvinia@gmail.com"
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-2 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:09928571488"
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-2 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Cyber-Glass Profile Showcase (Col 5) */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glowing Halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-600/30 to-blue-500/30 opacity-70 blur-2xl transition-all duration-700" />

              {/* Cyber-Glass Container */}
              <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0E131F]/90 p-4 shadow-[0_0_50px_rgba(0,240,255,0.2)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60">
                {/* Header Window Bar */}
                <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 px-2 pb-2.5">
                  <div className="flex items-center space-x-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono text-[11px] text-cyan-400/90 font-medium">
                    <Terminal className="h-3 w-3 text-cyan-400" />
                    <span>profile.tsx • Akumon</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">online</span>
                  </div>
                </div>

                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950 shadow-inner">
                  <Image
                    src="/assets/profile.jpg"
                    alt="Tristan Jesus V. Elvinia"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F]/90 via-transparent to-transparent opacity-75" />

                  {/* Floating Hologram Chip 1 */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-[#0A0D14]/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
                    <Code2 className="h-4 w-4 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold text-slate-400">Stack</p>
                      <p className="text-xs font-semibold text-white">Next.js & Node.js</p>
                    </div>
                  </div>

                  {/* Floating Hologram Chip 2 */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-xl border border-purple-500/40 bg-[#0A0D14]/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
                    <span className="text-xs font-bold text-purple-300">Cebu City, PH</span>
                  </div>
                </div>

                {/* Metrics Matrix Bar */}
                <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2 transition-colors hover:border-cyan-500/30">
                    <p className="font-mono text-base font-bold text-cyan-400">5+</p>
                    <p className="text-[10px] text-slate-400 uppercase font-medium">Projects</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2 transition-colors hover:border-purple-500/30">
                    <p className="font-mono text-base font-bold text-purple-400">2x</p>
                    <p className="text-[10px] text-slate-400 uppercase font-medium">Cisco Certs</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2 transition-colors hover:border-emerald-500/30">
                    <p className="font-mono text-base font-bold text-emerald-400">100%</p>
                    <p className="text-[10px] text-slate-400 uppercase font-medium">Available</p>
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
