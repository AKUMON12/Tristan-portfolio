'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  MapPin,
  Compass,
  CloudSun,
  Wind,
  Droplets,
  Atom,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ProjectPreviewMockupProps {
  projectId: string;
}

/**
 * High-fidelity interactive Vercel-style mini showcase components
 * Simulates the exact UI, design and interactive state for personal projects
 */
export const ProjectPreviewMockup: React.FC<ProjectPreviewMockupProps> = ({ projectId }) => {
  // 1. UC-METC Coop Loan Monitoring Interactive View
  if (projectId === 'loan-monitoring') {
    const [selectedTab, setSelectedTab] = useState<'overview' | 'ledger' | 'amortization'>('overview');
    const [loanTerm, setLoanTerm] = useState<number>(12);

    return (
      <div className="relative h-full w-full bg-[#090D16] p-3 sm:p-4 text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        {/* Mini App Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center space-x-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">
              UC
            </span>
            <span className="text-[11px] font-bold tracking-tight text-white">
              COOP Financial Portal
            </span>
          </div>
          <div className="flex space-x-1">
            {(['overview', 'ledger', 'amortization'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`rounded px-1.5 py-0.5 text-[9px] font-mono capitalize transition-colors ${
                  selectedTab === tab
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents */}
        {selectedTab === 'overview' && (
          <div className="my-auto space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-2">
                <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Active Loan Balance</p>
                <p className="mt-0.5 font-mono text-sm font-bold text-cyan-300">₱450,000.00</p>
                <div className="mt-1 flex items-center gap-1 text-[9px] text-emerald-400 font-medium">
                  <TrendingUp className="h-2.5 w-2.5" />
                  <span>Verified 0.0% variance</span>
                </div>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-2">
                <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Next Due Date</p>
                <p className="mt-0.5 font-mono text-sm font-bold text-purple-300">15th Prox.</p>
                <div className="mt-1 flex items-center gap-1 text-[9px] text-cyan-400 font-medium">
                  <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />
                  <span>Amortization Active</span>
                </div>
              </div>
            </div>

            {/* Micro Transaction Row */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1.5 flex items-center justify-between text-[10px]">
              <div className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="font-mono text-slate-300">TXN #8942-ELV</span>
              </div>
              <span className="font-mono font-semibold text-emerald-400">+₱37,500.00 Disbursed</span>
            </div>
          </div>
        )}

        {selectedTab === 'ledger' && (
          <div className="my-auto space-y-1.5 text-[9px]">
            <div className="grid grid-cols-3 font-mono text-slate-400 border-b border-slate-800 pb-1 px-1">
              <span>Member ID</span>
              <span>Principal</span>
              <span className="text-right">Status</span>
            </div>
            {[
              { id: 'MEM-00142', amount: '₱120,000', status: 'Settled', color: 'text-emerald-400' },
              { id: 'MEM-00891', amount: '₱85,000', status: 'Current', color: 'text-cyan-400' },
              { id: 'MEM-01205', amount: '₱245,000', status: 'In Audit', color: 'text-purple-400' },
            ].map((row) => (
              <div key={row.id} className="grid grid-cols-3 font-mono bg-slate-900/70 p-1 rounded border border-slate-800/80">
                <span className="text-slate-300">{row.id}</span>
                <span className="text-slate-200">{row.amount}</span>
                <span className={`text-right font-semibold ${row.color}`}>{row.status}</span>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'amortization' && (
          <div className="my-auto space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-300 font-medium">Repayment Term</span>
              <div className="flex gap-1">
                {[6, 12, 24].map((term) => (
                  <button
                    key={term}
                    onClick={() => setLoanTerm(term)}
                    className={`px-1.5 py-0.5 rounded text-[9px] font-mono ${
                      loanTerm === term ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {term}m
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-slate-900/90 p-2 border border-slate-800 text-[10px]">
              <div className="flex justify-between text-slate-400 text-[9px]">
                <span>Est. Monthly Amortization:</span>
                <span className="font-mono font-bold text-cyan-300">₱{(450000 / loanTerm).toFixed(2)}</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-1.5 text-[9px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            <span>PostgreSQL ACID Compliant</span>
          </span>
          <span className="font-mono text-cyan-400">Railway PaaS</span>
        </div>
      </div>
    );
  }

  // 2. ChronoNav Campus Navigation & Scheduler Interactive View
  if (projectId === 'chrononav') {
    const [activeFloor, setActiveFloor] = useState<'FL-1' | 'FL-2' | 'FL-4' | 'CCS-LAB'>('CCS-LAB');

    return (
      <div className="relative h-full w-full bg-[#080D1A] p-3 sm:p-4 text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center space-x-1.5">
            <Compass className="h-4 w-4 text-cyan-400" />
            <span className="text-[11px] font-bold text-white tracking-tight">ChronoNav Main Campus</span>
          </div>
          <div className="flex space-x-1">
            {(['FL-1', 'FL-2', 'FL-4', 'CCS-LAB'] as const).map((fl) => (
              <button
                key={fl}
                onClick={() => setActiveFloor(fl)}
                className={`rounded px-1.5 py-0.5 text-[9px] font-mono transition-colors ${
                  activeFloor === fl
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {fl}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Floor Path Map Viewport */}
        <div className="my-auto relative rounded-xl border border-cyan-500/30 bg-slate-950/80 p-2.5 overflow-hidden">
          {/* Floor grid visual */}
          <div className="grid grid-cols-3 gap-2">
            <div className={`rounded-lg border p-1.5 text-center transition-all ${
              activeFloor === 'CCS-LAB'
                ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'border-slate-800 bg-slate-900/60'
            }`}>
              <span className="font-mono text-[10px] font-bold text-cyan-300">Lab 402</span>
              <p className="text-[8px] text-slate-400">Web Sys II</p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-1.5 text-center">
              <span className="font-mono text-[10px] font-bold text-slate-300">Lecture 405</span>
              <p className="text-[8px] text-emerald-400">Vacant Now</p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-1.5 text-center">
              <span className="font-mono text-[10px] font-bold text-purple-300">Server Rm</span>
              <p className="text-[8px] text-slate-400">Restricted</p>
            </div>
          </div>

          {/* Dynamic waypoint route indicator */}
          <div className="mt-2.5 flex items-center justify-between rounded-lg bg-slate-900/90 px-2 py-1.5 border border-slate-800 text-[10px]">
            <div className="flex items-center gap-1.5 text-cyan-300">
              <MapPin className="h-3 w-3 text-cyan-400 animate-bounce" />
              <span className="font-medium">Direct Path: Lobby ➔ Elev. 2 ➔ CCS Lab</span>
            </div>
            <span className="font-mono text-[9px] text-emerald-400 font-semibold">ETA 1m 20s</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-1.5 text-[9px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Supabase Real-time Sync</span>
          </span>
          <span className="font-mono text-purple-300">Indoor Pathfinding</span>
        </div>
      </div>
    );
  }

  // 3. SkyCast Weather Intelligence Interactive View
  if (projectId === 'skycast-os') {
    const [city, setCity] = useState<'Cebu' | 'Tokyo' | 'London'>('Cebu');

    const weatherData = {
      Cebu: { temp: '31°C', condition: 'Tropical Breeze', humidity: '76%', wind: '14 km/h', iconColor: 'text-amber-400' },
      Tokyo: { temp: '19°C', condition: 'Clear Sky', humidity: '52%', wind: '9 km/h', iconColor: 'text-sky-300' },
      London: { temp: '14°C', condition: 'Light Mist', humidity: '82%', wind: '18 km/h', iconColor: 'text-cyan-200' },
    };

    const current = weatherData[city];

    return (
      <div className="relative h-full w-full bg-[#08101E] p-3 sm:p-4 text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        {/* Header with City Selector */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center space-x-1.5">
            <CloudSun className={`h-4 w-4 ${current.iconColor}`} />
            <span className="text-[11px] font-bold text-white tracking-tight">SkyCast OS Visualizer</span>
          </div>
          <div className="flex space-x-1">
            {(['Cebu', 'Tokyo', 'London'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`rounded px-1.5 py-0.5 text-[9px] font-mono transition-colors ${
                  city === c
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Live Weather Metrics */}
        <div className="my-auto grid grid-cols-12 gap-2 items-center">
          <div className="col-span-6 flex flex-col">
            <div className="flex items-baseline space-x-1">
              <span className="font-mono text-2xl sm:text-3xl font-black text-white">{current.temp}</span>
              <span className="text-[10px] text-cyan-400 font-semibold">{city}</span>
            </div>
            <p className="text-[10px] text-slate-300 font-medium">{current.condition}</p>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-1.5 text-[9px]">
            <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-1.5">
              <div className="flex items-center gap-1 text-slate-400">
                <Droplets className="h-2.5 w-2.5 text-cyan-400" />
                <span>Humidity</span>
              </div>
              <p className="mt-0.5 font-mono font-bold text-white">{current.humidity}</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-1.5">
              <div className="flex items-center gap-1 text-slate-400">
                <Wind className="h-2.5 w-2.5 text-sky-400" />
                <span>Wind</span>
              </div>
              <p className="mt-0.5 font-mono font-bold text-white">{current.wind}</p>
            </div>
          </div>
        </div>

        {/* 5-Day Micro Bar */}
        <div className="flex items-center justify-between rounded-lg bg-slate-950/70 p-1.5 border border-slate-800/90 text-[8px] font-mono text-slate-400">
          <span className="text-cyan-300">MON 31°</span>
          <span>TUE 30°</span>
          <span>WED 29°</span>
          <span>THU 32°</span>
          <span className="text-amber-400">FRI 33°</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-1.5 text-[9px] text-slate-400">
          <span className="font-mono text-cyan-400">Canvas Particle Physics</span>
          <span className="text-slate-300">60 FPS Sync</span>
        </div>
      </div>
    );
  }

  // 4. NanoWorld Science Hub Interactive View
  if (projectId === 'nanoworld') {
    const [activeNode, setActiveNode] = useState<'Graphene' | 'Nanotubes' | 'Quantum Dots'>('Graphene');

    return (
      <div className="relative h-full w-full bg-[#0A0D18] p-3 sm:p-4 text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center space-x-1.5">
            <Atom className="h-4 w-4 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-[11px] font-bold text-white tracking-tight">NanoWorld Science Hub</span>
          </div>
          <span className="rounded bg-purple-950/60 border border-purple-500/40 px-1.5 py-0.5 font-mono text-[9px] text-purple-300">
            Interactive 3D
          </span>
        </div>

        {/* Interactive Topic Selector & Visual */}
        <div className="my-auto space-y-2">
          <div className="flex justify-center gap-1.5">
            {(['Graphene', 'Nanotubes', 'Quantum Dots'] as const).map((node) => (
              <button
                key={node}
                onClick={() => setActiveNode(node)}
                className={`rounded-full px-2 py-0.5 text-[9px] font-semibold transition-all ${
                  activeNode === node
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {node}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-2.5 flex items-center justify-between text-[10px]">
            <div>
              <p className="font-bold text-cyan-300">{activeNode} Lattice</p>
              <p className="text-[8px] text-slate-400">Atomic thickness: 0.345 nm</p>
            </div>
            <div className="flex items-center gap-1 font-mono text-[9px] text-emerald-400">
              <Sparkles className="h-3 w-3 text-purple-400" />
              <span>Simulation Active</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-1.5 text-[9px] text-slate-400">
          <span>Vector Interactive Canvas</span>
          <span className="font-mono text-purple-300">GitHub Pages</span>
        </div>
      </div>
    );
  }

  // 5. Biodiversity Conservation Hub Interactive View
  if (projectId === 'biodiversity') {
    const [habitat, setHabitat] = useState<'Marine' | 'Rainforest' | 'Highland'>('Marine');

    return (
      <div className="relative h-full w-full bg-[#08120F] p-3 sm:p-4 text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center space-x-1.5">
            <Leaf className="h-4 w-4 text-emerald-400" />
            <span className="text-[11px] font-bold text-white tracking-tight">Biodiversity Hub</span>
          </div>
          <div className="flex space-x-1">
            {(['Marine', 'Rainforest', 'Highland'] as const).map((h) => (
              <button
                key={h}
                onClick={() => setHabitat(h)}
                className={`rounded px-1.5 py-0.5 text-[9px] font-mono transition-colors ${
                  habitat === h
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        {/* Habitat Metrics View */}
        <div className="my-auto space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-2">
              <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold">Cataloged Species</p>
              <p className="mt-0.5 font-mono text-base font-bold text-emerald-400">
                {habitat === 'Marine' ? '184 Species' : habitat === 'Rainforest' ? '292 Species' : '96 Species'}
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-2">
              <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold">Protection Index</p>
              <p className="mt-0.5 font-mono text-base font-bold text-cyan-300">94.8% Secure</p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-950/70 p-1.5 border border-slate-800 text-[9px]">
            <span className="text-slate-300">Active Habitat: <strong className="text-emerald-400">{habitat} Eco-Zone</strong></span>
            <span className="font-mono text-emerald-400 font-semibold">Lighthouse 98+</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-1.5 text-[9px] text-slate-400">
          <span className="text-emerald-400">Endangered Species Monitor</span>
          <span className="font-mono text-cyan-300">Vercel Deploy</span>
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
        <p className="text-xs text-slate-400">Verified Vercel Serverless Architecture</p>
      </div>
      <div className="border-t border-slate-800 pt-2 text-[10px] text-slate-400 flex justify-between">
        <span>Framework Ready</span>
        <span className="text-cyan-400">SSR Enabled</span>
      </div>
    </div>
  );
};
