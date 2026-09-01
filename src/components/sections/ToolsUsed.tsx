'use client';

import React, { useState, useEffect } from 'react';
import { toolsData, ToolCategory } from '../../data/toolsData';
import { SkeletonCard } from '../ui/SkeletonCard';
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
  AdobeExpressIcon,
  CapCutIcon,
  VsCodeIcon,
  CursorIcon,
  NetBeansIcon,
  AntigravityIcon,
  GoogleStitchIcon,
  ArduinoIcon,
  TinkercadIcon,
  CiscoIcon,
  GeminiIcon,
  OpenAiIcon,
  MsOfficeIcon,
  MsPptIcon,
  MsExcelIcon,
  RailwayIcon,
  RenderIcon,
} from '../ui/BrandIcons';
import { Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

/** Map string icon names to vector brand icons */
const brandIconMap: Record<string, React.ReactNode> = {
  Figma: <FigmaIcon className="h-6 w-6" />,
  GoogleStitch: <GoogleStitchIcon className="h-6 w-6" />,
  Canva: <CanvaIcon className="h-6 w-6" />,
  MsPpt: <MsPptIcon className="h-6 w-6" />,
  AdobePs: <AdobePsIcon className="h-6 w-6" />,
  CapCut: <CapCutIcon className="h-6 w-6" />,
  AdobeExpress: <AdobeExpressIcon className="h-6 w-6" />,
  VsCode: <VsCodeIcon className="h-6 w-6" />,
  NetBeans: <NetBeansIcon className="h-6 w-6" />,
  Cursor: <CursorIcon className="h-6 w-6" />,
  Antigravity: <AntigravityIcon className="h-6 w-6" />,
  NodeJs: <NodeJsIcon className="h-6 w-6" />,
  Tailwind: <TailwindIcon className="h-6 w-6" />,
  Express: <ExpressIcon className="h-6 w-6" />,
  NextJs: <NextJsIcon className="h-6 w-6" />,
  Nuxt: <NuxtIcon className="h-6 w-6" />,
  TypeScript: <TypeScriptIcon className="h-6 w-6" />,
  React: <ReactIcon className="h-6 w-6" />,
  Postgres: <PostgresIcon className="h-6 w-6" />,
  Supabase: <SupabaseIcon className="h-6 w-6" />,
  MySql: <MySqlIcon className="h-6 w-6" />,
  Render: <RenderIcon className="h-6 w-6" />,
  Railway: <RailwayIcon className="h-6 w-6" />,
  Arduino: <ArduinoIcon className="h-6 w-6" />,
  Tinkercad: <TinkercadIcon className="h-6 w-6" />,
  MsOffice: <MsOfficeIcon className="h-6 w-6" />,
  MsExcel: <MsExcelIcon className="h-6 w-6" />,
  Gemini: <GeminiIcon className="h-6 w-6" />,
  OpenAi: <OpenAiIcon className="h-6 w-6" />,
  Cisco: <CiscoIcon className="h-6 w-6" />,
};

export const ToolsUsed: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const filterOptions = ['All', 'Design & Video', 'Development & Stack', 'AI, IoT & Cisco'];

  const getFilteredCategories = (): ToolCategory[] => {
    if (selectedFilter === 'All') return toolsData;
    if (selectedFilter === 'Design & Video') {
      return toolsData.filter((c) => ['ui-ux', 'graphic-design', 'video-editing'].includes(c.id));
    }
    if (selectedFilter === 'Development & Stack') {
      return toolsData.filter((c) => ['web-development-ide', 'tech-stack'].includes(c.id));
    }
    if (selectedFilter === 'AI, IoT & Cisco') {
      return toolsData.filter((c) =>
        ['iot', 'technical-writing', 'qa-testing', 'prompt-engineering', 'networking'].includes(c.id)
      );
    }
    return toolsData;
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section id="tools" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Wrench className="h-3.5 w-3.5" />
            <span>Tools & Tech Stack Used</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tools & Ecosystem
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400">
            Comprehensive suite of specialized tools, IDEs, frameworks, design software, and hardware environments utilized in production.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  selectedFilter === filter
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Bento Grid with Skeletal State */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <SkeletonCard key={n} type="tools" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-[#0E131F]/85 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_36px_rgba(0,240,255,0.12)]"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
                    <div>
                      <h3 className="text-base font-bold text-white transition-colors group-hover:text-cyan-300">
                        {category.category}
                      </h3>
                      <p className="font-mono text-[11px] text-slate-400">
                        {category.headline}
                      </p>
                    </div>
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-950/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-300">
                      {category.tools.length} Tools
                    </span>
                  </div>

                  {/* Tools Logo & Badge Grid */}
                  <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center space-x-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-2.5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/90"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950/80 border border-slate-800/80 p-1.5 shadow-inner group-hover:border-cyan-500/30">
                          {brandIconMap[tool.iconName] || <Sparkles className="h-5 w-5 text-cyan-400" />}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-bold text-slate-100">
                            {tool.name}
                          </p>
                          {tool.badge && (
                            <p className="truncate text-[10px] text-slate-400">
                              {tool.badge}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer validation status */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>Active Workflow Ready</span>
                  </span>
                  <span className="font-mono text-cyan-400">Production Verified</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
