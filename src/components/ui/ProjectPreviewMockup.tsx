'use client';

import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  CloudSun,
  Wind,
  Droplets,
  Atom,
  Leaf,
  ShieldCheck,
  Building2,
  ExternalLink,
} from 'lucide-react';

interface ProjectPreviewMockupProps {
  projectId: string;
}

/**
 * High-fidelity replicas of the actual deployed web systems and interfaces
 */
export const ProjectPreviewMockup: React.FC<ProjectPreviewMockupProps> = ({ projectId }) => {
  // 1. ChronoNav: Exact Replica of chrononav-ccs.vercel.app
  if (projectId === 'chrononav') {
    const [activeFloor, setActiveFloor] = useState<'7F' | '6F' | '5F' | '4F' | '3F' | '2F' | 'MF' | '1F'>('1F');

    const floorDetails = {
      '7F': { name: '7th Floor', desc: 'CCS Faculty & Multipurpose Hall', route: 'Gate 1 ➔ Elev. 2 ➔ 7F Faculty Room' },
      '6F': { name: '6th Floor', desc: 'College of Engineering & Labs', route: 'Gate 1 ➔ Elev. 1 ➔ 6F Engg Lab 602' },
      '5F': { name: '5th Floor', desc: 'College of Computer Studies (CCS)', route: 'Gate 1 ➔ Main Stairs ➔ 5F Lab 501' },
      '4F': { name: '4th Floor', desc: 'Business & Accountancy Classrooms', route: 'Gate 2 ➔ Elev. 1 ➔ 4F Room 408' },
      '3F': { name: '3rd Floor', desc: 'Main Library & Reading Center', route: 'Gate 1 ➔ Grand Stairs ➔ 3F Library' },
      '2F': { name: '2nd Floor', desc: 'Registrar & Accounting Offices', route: 'Gate 1 ➔ Front Stairs ➔ 2F Registrar' },
      'MF': { name: 'Mezzanine', desc: 'Student Lounge & Guidance Office', route: 'Gate 1 ➔ Mezzanine Stairs' },
      '1F': { name: '1st Floor', desc: 'Ingress Gates & Medical Clinic', route: 'Gate 1 Ingress ➔ 1F Room 104' },
    };

    const current = floorDetails[activeFloor];

    return (
      <div className="relative h-full w-full bg-[#F8FAFC] text-slate-900 flex flex-col justify-between overflow-hidden select-none font-sans border-b border-slate-200">
        {/* ChronoNav Clean Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
          <div className="flex items-center space-x-1.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
              <Compass className="h-3.5 w-3.5" />
            </div>
            <span className="font-extrabold tracking-tight text-[11px] text-slate-900 font-sans">
              CHRONONAV
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-3 text-[9px] font-semibold text-slate-600">
            <span className="hover:text-blue-600 cursor-pointer">Features</span>
            <span className="hover:text-blue-600 cursor-pointer">Departments</span>
            <span className="hover:text-blue-600 cursor-pointer">How It Works</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="hidden sm:inline rounded-full bg-blue-50 px-2 py-0.5 text-[8px] font-bold text-blue-600 border border-blue-100">
              Sign In
            </span>
            <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-[9px] font-bold text-white shadow-sm flex items-center gap-1">
              <span>Study Load</span>
              <ArrowRight className="h-2.5 w-2.5" />
            </span>
          </div>
        </div>

        {/* ChronoNav Main Hero & 3D Simulator Grid */}
        <div className="my-auto grid grid-cols-12 gap-2.5 p-3 items-center">
          {/* Left Column: Headline & Feature Badges */}
          <div className="col-span-12 sm:col-span-7 flex flex-col space-y-1.5">
            <div className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50/80 px-2 py-0.5 text-[8px] font-bold text-blue-700 w-fit">
              <span>University of Cebu Main • 8 Floors</span>
              <Sparkles className="h-2 w-2 text-blue-500" />
            </div>

            <h4 className="text-xs sm:text-sm font-black tracking-tight leading-tight text-slate-900">
              Navigate Your Campus.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Never Miss a Class.
              </span>
            </h4>

            <p className="text-[8px] sm:text-[9px] leading-tight text-slate-500 line-clamp-2">
              Indoor navigation guiding students across corridors, stairs, and elevators with automatic routing.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-4 gap-1 pt-1">
              <div className="rounded-md border border-slate-200/90 bg-white p-1 text-center shadow-xs">
                <p className="font-bold text-[8px] text-slate-900">8 Levels</p>
                <p className="text-[7px] text-slate-400">Floors</p>
              </div>
              <div className="rounded-md border border-slate-200/90 bg-white p-1 text-center shadow-xs">
                <p className="font-bold text-[8px] text-slate-900">60+ Rooms</p>
                <p className="text-[7px] text-slate-400">Mapped</p>
              </div>
              <div className="rounded-md border border-slate-200/90 bg-white p-1 text-center shadow-xs">
                <p className="font-bold text-[8px] text-blue-600">Dijkstra</p>
                <p className="text-[7px] text-slate-400">Engine</p>
              </div>
              <div className="rounded-md border border-slate-200/90 bg-white p-1 text-center shadow-xs">
                <p className="font-bold text-[8px] text-emerald-600">Zero-Login</p>
                <p className="text-[7px] text-slate-400">Guest</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Layered Floor Plate Simulator Card */}
          <div className="col-span-12 sm:col-span-5">
            <div className="rounded-xl border border-blue-100 bg-white p-2 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                <span className="font-mono text-[8px] font-bold text-slate-700">3D SIMULATOR</span>
                <span className="rounded bg-blue-50 px-1 py-0.2 text-[7px] font-bold text-blue-600">
                  UC MAIN
                </span>
              </div>

              {/* Layered Isometric Floor Stack Visual */}
              <div className="relative my-1.5 flex flex-col items-center justify-center h-16 bg-gradient-to-b from-blue-50/40 to-slate-50/80 rounded-lg overflow-hidden border border-slate-100">
                {/* Visualizing layered translucent floor planes */}
                <div className="relative w-28 h-12 flex flex-col items-center justify-center">
                  <div className="absolute w-24 h-4 rounded-md bg-slate-300/30 border border-slate-300 -translate-y-3 transform skew-x-12" />
                  <div className="absolute w-24 h-4 rounded-md bg-slate-300/40 border border-slate-300 -translate-y-1.5 transform skew-x-12" />
                  {/* Highlighted active floor plane */}
                  <div className="absolute w-26 h-5 rounded-md bg-blue-500/85 border border-blue-400 shadow-[0_0_12px_rgba(37,99,235,0.4)] flex items-center justify-between px-2 text-white font-bold text-[8px] transform skew-x-12 z-10">
                    <span>{activeFloor}</span>
                    <span className="text-[7px] font-normal">{current.name}</span>
                  </div>
                  <div className="absolute w-24 h-4 rounded-md bg-slate-300/30 border border-slate-300 translate-y-2 transform skew-x-12" />
                </div>
              </div>

              {/* Active Floor Navigator Detail */}
              <div className="rounded-md bg-blue-50/80 p-1 border border-blue-100 text-[8px]">
                <div className="flex justify-between font-semibold text-slate-800">
                  <span className="text-blue-700 font-bold">{current.name}</span>
                  <span className="text-[7px] text-emerald-600 font-bold">Optimal Route</span>
                </div>
                <p className="text-[7px] text-slate-500 truncate mt-0.5">{current.route}</p>
              </div>

              {/* Floor Switcher Tabs */}
              <div className="mt-1.5 flex justify-between gap-0.5">
                {(['7F', '6F', '5F', '4F', '3F', '2F', 'MF', '1F'] as const).map((fl) => (
                  <button
                    key={fl}
                    onClick={() => setActiveFloor(fl)}
                    className={`flex-1 py-0.5 rounded text-[7px] font-bold transition-all ${
                      activeFloor === fl
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {fl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ChronoNav Bottom Bar */}
        <div className="flex items-center justify-between border-t border-slate-200/90 bg-slate-50 px-3 py-1 text-[8px] text-slate-500">
          <span className="flex items-center gap-1 text-slate-700 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Campus Live Navigation System</span>
          </span>
          <span className="font-mono text-blue-600 font-bold">chrononav-ccs.vercel.app</span>
        </div>
      </div>
    );
  }

  // 2. UC-METC Coop Loan Monitoring: Cooperative Financial Portal
  if (projectId === 'coop-sync' || projectId === 'loan-monitoring') {
    const [selectedView, setSelectedView] = useState<'loans' | 'members' | 'audit'>('loans');

    return (
      <div className="relative h-full w-full bg-[#0E1726] text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        {/* Cooperative Dashboard Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#131F37] px-3 py-2">
          <div className="flex items-center space-x-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500 font-bold text-white text-[9px]">
              UC
            </div>
            <div>
              <p className="text-[10px] font-bold text-white leading-none">UC-METC COOP</p>
              <p className="text-[7px] text-slate-400">Loan Monitoring & Ledger</p>
            </div>
          </div>
          <div className="flex space-x-1">
            {(['loans', 'members', 'audit'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={`rounded px-1.5 py-0.5 text-[8px] font-mono capitalize transition-all ${
                  selectedView === view
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* Main Financial Metrics */}
        <div className="my-auto p-3 space-y-2">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-1.5">
              <span className="text-[7px] text-slate-400 uppercase font-semibold">Total Disbursed</span>
              <p className="font-mono text-xs font-bold text-emerald-400">₱14.8M</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-1.5">
              <span className="text-[7px] text-slate-400 uppercase font-semibold">Active Members</span>
              <p className="font-mono text-xs font-bold text-cyan-400">1,428</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-1.5">
              <span className="text-[7px] text-slate-400 uppercase font-semibold">Audit Health</span>
              <p className="font-mono text-xs font-bold text-purple-400">100% Zero-Loss</p>
            </div>
          </div>

          {/* Member Ledger Rows */}
          <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-2 space-y-1 text-[8px] font-mono">
            <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-0.5">
              <span>Account #</span>
              <span>Amortization</span>
              <span>Status</span>
            </div>
            <div className="flex justify-between text-slate-200">
              <span>#METC-2041</span>
              <span>₱12,500/mo</span>
              <span className="text-emerald-400 font-bold">Approved</span>
            </div>
            <div className="flex justify-between text-slate-200">
              <span>#METC-1892</span>
              <span>₱8,200/mo</span>
              <span className="text-cyan-400 font-bold">Current</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 bg-[#0A101D] px-3 py-1 text-[8px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="h-2.5 w-2.5" />
            <span>PostgreSQL ACID Relational Core</span>
          </span>
          <span className="font-mono text-slate-300">Railway Deployed</span>
        </div>
      </div>
    );
  }

  // 3. SkyCast Weather Intelligence Visualizer
  if (projectId === 'skycast-os') {
    const [city, setCity] = useState<'Cebu' | 'Tokyo' | 'London'>('Cebu');

    const weatherData = {
      Cebu: { temp: '31°C', condition: 'Tropical Sun & Breeze', humidity: '76%', wind: '14 km/h', iconColor: 'text-amber-400' },
      Tokyo: { temp: '19°C', condition: 'Clear Atmosphere', humidity: '52%', wind: '9 km/h', iconColor: 'text-sky-300' },
      London: { temp: '14°C', condition: 'Light Precipitation', humidity: '82%', wind: '18 km/h', iconColor: 'text-cyan-200' },
    };

    const current = weatherData[city];

    return (
      <div className="relative h-full w-full bg-[#081120] text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-3 py-1.5">
          <div className="flex items-center space-x-1.5">
            <CloudSun className={`h-4 w-4 ${current.iconColor}`} />
            <span className="text-[10px] font-bold text-white">SkyCast Weather Intelligence</span>
          </div>
          <div className="flex space-x-1">
            {(['Cebu', 'Tokyo', 'London'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`rounded px-1.5 py-0.5 text-[8px] font-mono transition-colors ${
                  city === c
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Live Weather Metrics */}
        <div className="my-auto p-3 grid grid-cols-12 gap-2 items-center">
          <div className="col-span-6 flex flex-col">
            <div className="flex items-baseline space-x-1">
              <span className="font-mono text-2xl font-black text-white">{current.temp}</span>
              <span className="text-[10px] text-cyan-400 font-bold">{city}</span>
            </div>
            <p className="text-[8px] text-slate-300 font-medium">{current.condition}</p>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-1 text-[8px]">
            <div className="rounded-md border border-slate-800 bg-slate-900/90 p-1">
              <div className="flex items-center gap-1 text-slate-400">
                <Droplets className="h-2 w-2 text-cyan-400" />
                <span>Humidity</span>
              </div>
              <p className="font-mono font-bold text-white">{current.humidity}</p>
            </div>
            <div className="rounded-md border border-slate-800 bg-slate-900/90 p-1">
              <div className="flex items-center gap-1 text-slate-400">
                <Wind className="h-2 w-2 text-sky-400" />
                <span>Wind</span>
              </div>
              <p className="font-mono font-bold text-white">{current.wind}</p>
            </div>
          </div>
        </div>

        {/* Micro 5-Day Bar */}
        <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-950 px-3 py-1 text-[8px] font-mono text-slate-400">
          <span className="text-cyan-400">Canvas Particle Physics</span>
          <span className="text-emerald-400">60 FPS Sync</span>
        </div>
      </div>
    );
  }

  // 4. NanoWorld Science Exploration Hub
  if (projectId === 'nanoworld') {
    const [topic, setTopic] = useState<'Graphene' | 'Nanotubes' | 'Quantum'>('Graphene');

    return (
      <div className="relative h-full w-full bg-[#0A0D18] text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-3 py-1.5">
          <div className="flex items-center space-x-1.5">
            <Atom className="h-3.5 w-3.5 text-purple-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span className="text-[10px] font-bold text-white">NanoWorld Educational Hub</span>
          </div>
          <span className="rounded bg-purple-950/60 border border-purple-500/40 px-1.5 py-0.5 text-[8px] font-mono text-purple-300">
            Interactive Modules
          </span>
        </div>

        <div className="my-auto p-3 space-y-2">
          <div className="flex justify-center gap-1">
            {(['Graphene', 'Nanotubes', 'Quantum'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`rounded-full px-2 py-0.5 text-[8px] font-semibold transition-all ${
                  topic === t
                    ? 'bg-purple-600 text-white font-bold shadow-xs'
                    : 'bg-slate-900 border border-slate-800 text-slate-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2 flex items-center justify-between text-[9px]">
            <div>
              <p className="font-bold text-cyan-300">{topic} Structure</p>
              <p className="text-[7px] text-slate-400">Atomic thickness: 0.345 nm</p>
            </div>
            <span className="font-mono text-[8px] text-emerald-400 font-semibold">98+ Score</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-950 px-3 py-1 text-[8px] text-slate-400">
          <span>Modular STEM Showcase</span>
          <span className="font-mono text-purple-300">GitHub Pages</span>
        </div>
      </div>
    );
  }

  // 5. Biodiversity Conservation Hub
  if (projectId === 'biodiversity') {
    const [habitat, setHabitat] = useState<'Marine' | 'Rainforest' | 'Highland'>('Marine');

    return (
      <div className="relative h-full w-full bg-[#08120F] text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-3 py-1.5">
          <div className="flex items-center space-x-1.5">
            <Leaf className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[10px] font-bold text-white">Biodiversity Conservation Hub</span>
          </div>
          <div className="flex space-x-1">
            {(['Marine', 'Rainforest', 'Highland'] as const).map((h) => (
              <button
                key={h}
                onClick={() => setHabitat(h)}
                className={`rounded px-1.5 py-0.5 text-[8px] font-mono transition-colors ${
                  habitat === h
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        <div className="my-auto p-3 space-y-1.5">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-1.5">
              <span className="text-[7px] text-slate-400 uppercase font-semibold">Cataloged Species</span>
              <p className="font-mono text-sm font-bold text-emerald-400">
                {habitat === 'Marine' ? '184 Species' : habitat === 'Rainforest' ? '292 Species' : '96 Species'}
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-1.5">
              <span className="text-[7px] text-slate-400 uppercase font-semibold">Protection Index</span>
              <p className="font-mono text-sm font-bold text-cyan-300">94.8% Secure</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-950 px-3 py-1 text-[8px] text-slate-400">
          <span className="text-emerald-400">Species Biodiversity Matrix</span>
          <span className="font-mono text-cyan-300">Lighthouse 98+</span>
        </div>
      </div>
    );
  }

  // Fallback generic interactive preview
  return (
    <div className="relative h-full w-full bg-slate-950 p-4 text-slate-100 flex flex-col justify-between font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="text-xs font-bold text-cyan-400">System Dashboard</span>
        <span className="font-mono text-[10px] text-emerald-400">Online</span>
      </div>
      <div className="my-auto text-center">
        <p className="font-mono text-sm font-bold text-white">Production Build</p>
      </div>
    </div>
  );
};
