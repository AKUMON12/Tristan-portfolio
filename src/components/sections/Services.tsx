'use client';

import React, { useState, useEffect } from 'react';
import { services } from '../../data/servicesData';
import { SkeletonCard } from '../ui/SkeletonCard';
import {
  Code,
  Palette,
  Bot,
  Cpu,
  FileCheck,
  Network,
  Layers,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-5 w-5 text-cyan-400" />,
  Palette: <Palette className="h-5 w-5 text-purple-400" />,
  Bot: <Bot className="h-5 w-5 text-amber-400" />,
  Cpu: <Cpu className="h-5 w-5 text-emerald-400" />,
  FileCheck: <FileCheck className="h-5 w-5 text-sky-400" />,
  Network: <Network className="h-5 w-5 text-rose-400" />,
};

export const Services: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Layers className="h-3.5 w-3.5" />
            <span>Capabilities</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Services & Expertise
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
            Specialized engineering across modern full-stack web applications, user interfaces, AI integrations, and cloud infrastructure.
          </p>
        </div>

        {/* Bento Grid with Skeletal State */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <SkeletonCard key={n} type="service" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] flex flex-col justify-between"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-500/5 blur-3xl transition-all group-hover:bg-cyan-500/15" />

                <div>
                  <div className="mb-3.5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 shadow-inner group-hover:border-cyan-500/30">
                      {iconMap[service.iconName] || <Code className="h-5 w-5 text-cyan-400" />}
                    </div>
                    <span className="rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-400">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Compact Deliverables Pill Tags */}
                <div className="mt-5 pt-3.5 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
