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
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
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
                Available for Full-Stack & Frontend Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block text-white">Tristan Jesus V. Elvinia</span>
                <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 bg-clip-text text-transparent">
                  Full-Stack Developer & Designer
                </span>
              </h1>
              <p className="text-sm sm:text-base font-mono text-purple-400">
                &lt;Akumon.dev /&gt; • Scalable Web Applications & Modern UI Systems
              </p>
            </div>

            {/* Concise Bio */}
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Information Technology graduate from <span className="text-white font-semibold">University of Cebu</span> specializing in <span className="text-cyan-300 font-medium">Node.js</span>, <span className="text-cyan-300 font-medium">Next.js</span>, and <span className="text-purple-300 font-medium">UI/UX architecture</span>. Focused on high-performance web systems, accessible interfaces, and modern full-stack workflows.
            </p>

            {/* Core Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Node.js', 'Next.js 14', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Supabase', 'REST APIs'].map((t) => (
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
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/20 px-6 py-3.5 text-sm font-semibold text-cyan-300 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-900/30 hover:text-white"
              >
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-3.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Direct Connect Links */}
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

          {/* Right Profile Column (Col 5) - Fluid Wave & Arch Cutout Design matching reference */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/10 blur-3xl" />

              {/* Decorative Fluid Contour SVG Line */}
              <svg
                viewBox="0 0 400 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-3 -right-3 h-[106%] w-[106%] pointer-events-none z-20 opacity-80"
              >
                <path
                  d="M 170,15 C 290,15 385,80 385,210 C 385,320 330,370 370,455 C 330,470 200,475 140,430 C 80,385 15,350 15,260 C 15,120 70,15 170,15 Z"
                  stroke="rgba(0, 240, 255, 0.45)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="animate-pulse-slow"
                />
              </svg>

              {/* Secondary Blue Wave Fluid Shape Layer */}
              <div
                className="absolute -inset-1 bg-gradient-to-tr from-[#0052D4] via-[#4364F7] to-[#6FB1FC] shadow-[0_15px_40px_rgba(0,122,255,0.35)] transition-transform duration-700"
                style={{
                  borderRadius: '42% 58% 68% 32% / 38% 42% 58% 62%',
                  transform: 'rotate(4deg) scale(1.03)',
                }}
              />

              {/* Main Photo Cutout Container with Asymmetric Arch / Fluid Wave Mask */}
              <div
                className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-slate-900 border-2 border-white/20 shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  borderRadius: '45% 55% 62% 38% / 40% 40% 60% 60%',
                }}
              >
                <Image
                  src="/assets/profile.jpg"
                  alt="Tristan Jesus V. Elvinia"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle soft gradient at the lower fluid edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent opacity-50" />

                {/* Pagination indicator dots along bottom curve (matching reference image) */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center space-x-2 rounded-full bg-black/40 px-3 py-1 backdrop-blur-md border border-white/10">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Floating Stack Focus Chip */}
              <div className="absolute -bottom-2 -left-3 z-30 flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-[#0A0D14]/90 px-3.5 py-2 shadow-xl backdrop-blur-md">
                <Code2 className="h-4 w-4 text-cyan-400" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Stack</p>
                  <p className="text-xs font-semibold text-white">Next.js & Node.js</p>
                </div>
              </div>

              {/* Floating Location Chip */}
              <div className="absolute -top-2 right-2 z-30 flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-[#0A0D14]/90 px-3 py-1.5 shadow-xl backdrop-blur-md">
                <span className="text-xs font-bold text-blue-300">Cebu City, PH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
