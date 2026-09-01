'use client';

import React from 'react';
import {
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Cpu,
  Sparkles,
  Terminal,
  Compass,
  Code,
} from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Compass className="h-3.5 w-3.5" />
            <span>The Journey & Mindset</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            A concise story of who I am, what drives my engineering passion, and where I'm headed.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main Story Card (Col 8) */}
          <div className="rounded-3xl border border-cyan-500/20 bg-[#0E131F]/80 p-8 backdrop-blur-xl lg:col-span-8 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
            <div className="mb-4 flex items-center gap-2 text-cyan-400">
              <Terminal className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Philosophy & Background
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Driven by Design Precision, Powered by Full-Stack Logic
            </h3>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                I am <span className="font-semibold text-white">Tristan Jesus V. Elvinia</span> (known online as <span className="font-mono text-cyan-400">Akumon</span> or <span className="font-mono text-purple-400">Tan</span>), an IT graduate seeking dynamic opportunities in web development, frontend engineering, and interactive web design.
              </p>
              <p>
                I am exceptionally particular about design—it has been one of my core focal areas since senior high school. I believe that extraordinary software isn't just reliable behind the scenes; it must communicate clearly and effortlessly to the humans interacting with it.
              </p>
              <p>
                My primary tech stack centers around <span className="text-cyan-300 font-medium">Node.js</span>, <span className="text-cyan-300 font-medium">Next.js</span>, and modern relational databases. I embrace continuous iteration: I do make mistakes, but that is the crucible of learning. I am relentlessly driven to absorb new paradigms and push the boundaries of what I can build.
              </p>
            </div>

            {/* Core Values Quote */}
            <div className="mt-8 rounded-2xl border-l-4 border-cyan-400 bg-cyan-950/20 p-4 text-sm italic text-slate-300">
              "Quality is not an accident; it is the result of continuous curiosity, rigorous attention to detail, and the courage to build, test, break, and refine."
            </div>
          </div>

          {/* Education & Status Card (Col 4) */}
          <div className="flex flex-col justify-between space-y-6 rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-8 backdrop-blur-xl lg:col-span-4">
            <div>
              <div className="mb-4 flex items-center gap-2 text-purple-400">
                <GraduationCap className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Academic Foundation
                </span>
              </div>
              <h4 className="text-xl font-bold text-white">Bachelor of Science in Information Technology</h4>
              <p className="mt-1 text-sm font-medium text-cyan-400">University of Cebu Main Campus</p>
              <p className="mt-1 text-xs text-slate-400">Graduated December 2025 • Cebu City, PH</p>

              <div className="mt-6 border-t border-slate-800 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Prior Education</p>
                <p className="mt-1 text-sm text-slate-300">University of Cebu - METC (Senior & Junior High)</p>
                <p className="text-xs text-slate-500">Design & IT Foundation (2016 – 2021)</p>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/30 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Current Status</span>
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Accepting freelance web development projects & interviewing for full-time engineering roles.
              </p>
            </div>
          </div>

          {/* Experience Highlight Card (Col 6) */}
          <div className="rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl lg:col-span-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-400">
                <Briefcase className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Industry Experience
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
                <span>Resolved complex e-commerce logistics and technical customer account inquiries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Maintained consistently high Customer Satisfaction (CSAT) scores through rapid diagnosis and clear communication.</span>
              </li>
            </ul>
          </div>

          {/* Hobbies & Beyond Code Card (Col 6) */}
          <div className="rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl lg:col-span-6">
            <div className="mb-3 flex items-center gap-2 text-emerald-400">
              <Cpu className="h-4 w-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Beyond the Screen: Hobbies & Passions
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Code className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Personal Web Apps</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Building useful tools for friends & community, pairing Next.js with AI tools.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-purple-400" />
                  <span>IoT & DIY Circuits</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Experimenting with Arduino, ESP32-CAM, and Tinkercad hardware prototypes.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>Creative Design & Logos</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Crafting brand logos, motion graphics, and sleek vector brochures.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  <span>AI & RAG Workflows</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Testing LLM agents, prompt pipelines, and multimodal integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
