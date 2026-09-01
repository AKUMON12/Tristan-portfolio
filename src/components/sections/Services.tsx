'use client';

import React from 'react';
import { services } from '../../data/servicesData';
import {
  Code,
  Palette,
  Bot,
  Cpu,
  FileCheck,
  Network,
  CheckCircle,
  Layers,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-6 w-6 text-cyan-400" />,
  Palette: <Palette className="h-6 w-6 text-purple-400" />,
  Bot: <Bot className="h-6 w-6 text-amber-400" />,
  Cpu: <Cpu className="h-6 w-6 text-emerald-400" />,
  FileCheck: <FileCheck className="h-6 w-6 text-sky-400" />,
  Network: <Network className="h-6 w-6 text-rose-400" />,
};

export const Services = () => {
  return (
    <section id="services" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Layers className="h-3.5 w-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Services & Expertise
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            Specialized engineering services spanning modern full-stack web applications, user interfaces, AI integrations, and embedded systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-500/5 blur-3xl transition-all group-hover:bg-cyan-500/15" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 shadow-inner group-hover:border-cyan-500/30">
                  {iconMap[service.iconName] || <Code className="h-6 w-6 text-cyan-400" />}
                </div>
                <span className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold text-cyan-400">
                  {service.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                {service.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>

              {/* Deliverables checklist */}
              <div className="mt-6 border-t border-slate-800/80 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Deliverables
                </p>
                <ul className="mt-2.5 space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
