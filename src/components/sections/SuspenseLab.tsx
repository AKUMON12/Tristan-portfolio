'use client';

import React, { useState } from 'react';
import { Terminal, Sparkles, Flame, Eye, ArrowRight, Play } from 'lucide-react';

export const SuspenseLab = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'terminal'>('terminal');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'Initializing Akumon.dev Core System...',
    'System: Linux x86_64 / Node.js runtime loaded.',
    'Status: Accepting Freelance projects & Full-stack roles.',
    'Type "help" or "status" to test interactive CLI commands.',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, `$ akumon > ${terminalInput}`];

    switch (cmd) {
      case 'help':
        newLogs.push('Available commands: status, projects, skills, contact, clear, labs, echo');
        break;
      case 'status':
        newLogs.push('STATUS: 100% ONLINE. Location: Cebu City, PH. Open to Opportunities.');
        break;
      case 'projects':
        newLogs.push('PROJECTS: 1. UC-Coop Loan 2. ChronoNav 3. CAMPass 4. SkyCast-OS 5. ElectionSim');
        break;
      case 'skills':
        newLogs.push('STACK: Node.js, Next.js 14, TypeScript, PostgreSQL, Tailwind, RAG, IoT');
        break;
      case 'contact':
        newLogs.push('CONTACT: tjelvinia@gmail.com | Phone: 09928571488 | LinkedIn: tristan-jesus-elvinia');
        break;
      case 'labs':
        newLogs.push('ACTIVE R&D: [1] Project Aether (Local RAG Assistant) [2] CAMPass v2 (LoRa Edge Mesh)');
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push(`Command not recognized: "${cmd}". Type "help" for a list of commands.`);
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <section id="labs" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Background glow orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Suspense & Innovation Labs</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Under The Hood: Akumon Labs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            A suspense sneak peek into ongoing research, upcoming hardware prototypes, and an interactive command-line terminal.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mb-8 flex justify-center gap-3">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
              activeTab === 'terminal'
                ? 'border border-cyan-500 bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                : 'border border-slate-800 bg-[#0E131F] text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="h-4 w-4" />
            <span>Interactive Terminal</span>
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
              activeTab === 'preview'
                ? 'border border-purple-500 bg-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                : 'border border-slate-800 bg-[#0E131F] text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="h-4 w-4" />
            <span>Upcoming R&D Pipeline</span>
          </button>
        </div>

        {/* Tab 1: Terminal */}
        {activeTab === 'terminal' && (
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#070A10] shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {/* Terminal title bar */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-xs font-semibold text-slate-400">
                tristan@akumon-dev: ~ (bash)
              </span>
              <span className="rounded bg-cyan-950 px-2 py-0.5 font-mono text-[10px] text-cyan-400">
                v2.4-live
              </span>
            </div>

            {/* Terminal log output */}
            <div className="h-64 overflow-y-auto p-4 font-mono text-xs text-slate-300 space-y-1.5 scrollbar-thin">
              {terminalLogs.map((log, i) => (
                <div
                  key={i}
                  className={
                    log.startsWith('$')
                      ? 'text-cyan-400 font-semibold'
                      : log.startsWith('STATUS')
                      ? 'text-emerald-400'
                      : log.startsWith('Command not recognized')
                      ? 'text-rose-400'
                      : 'text-slate-300'
                  }
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Interactive Prompt Input */}
            <form onSubmit={handleCommand} className="flex border-t border-slate-800 bg-slate-950/90 px-4 py-3">
              <span className="font-mono text-xs font-bold text-cyan-400 mr-2 flex items-center">
                $ akumon &gt;
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help', 'status', 'skills', 'projects'..."
                className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-600 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded bg-cyan-500/20 px-3 py-1 font-mono text-[10px] font-bold text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors"
              >
                EXECUTE
              </button>
            </form>
          </div>
        )}

        {/* Tab 2: Upcoming R&D Cards */}
        {activeTab === 'preview' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-500/20 bg-[#0E131F]/80 p-6 backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-cyan-950/60 px-3 py-1 text-[10px] font-bold uppercase text-cyan-400 border border-cyan-800/40">
                  In Incubation
                </span>
                <span className="text-xs text-slate-500 font-mono">Q3 2026</span>
              </div>
              <h4 className="text-lg font-bold text-white">Project Aether AI</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Personalized offline-capable Retrieval-Augmented Generation agent running directly on client browsers via WebGPU and Gemini 1.5/Flash APIs.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/20 bg-[#0E131F]/80 p-6 backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-purple-950/60 px-3 py-1 text-[10px] font-bold uppercase text-purple-400 border border-purple-800/40">
                  Hardware Proto
                </span>
                <span className="text-xs text-slate-500 font-mono">Q4 2026</span>
              </div>
              <h4 className="text-lg font-bold text-white">CAMPass v2.0 Edge Mesh</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Next-generation distributed biometric access node utilizing LoRa wireless mesh networking for off-grid perimeter defense and emergency broadcast.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-[#0E131F]/80 p-6 backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-emerald-950/60 px-3 py-1 text-[10px] font-bold uppercase text-emerald-400 border border-emerald-800/40">
                  DevTools
                </span>
                <span className="text-xs text-slate-500 font-mono">2026</span>
              </div>
              <h4 className="text-lg font-bold text-white">OmniFlow Studio</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Visual node-based API composition canvas built with Next.js and WebSockets to visually orchestrate microservices and AI pipelines.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
