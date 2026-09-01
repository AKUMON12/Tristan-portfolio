'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Terminal } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#070A10] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#"
              className="flex items-center space-x-2 font-mono text-base font-bold tracking-tight text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Terminal className="h-3.5 w-3.5" />
              </span>
              <span>
                <span className="text-cyan-400">&lt;</span>
                <span className="text-white">Akumon</span>
                <span className="text-purple-400">.dev</span>
                <span className="text-cyan-400"> /&gt;</span>
              </span>
            </a>
            <p className="mt-2 text-xs text-slate-500 text-center md:text-left">
              Designed & Built with precision by <span className="text-slate-300 font-medium">Tristan Jesus V. Elvinia</span>.
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/AKUMON12"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tristan-jesus-elvinia-3a11863a3"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:tjelvinia@gmail.com"
              className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="rounded-lg border border-cyan-500/30 bg-cyan-950/40 p-2 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)]"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-900 pt-6 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Tristan Jesus V. Elvinia (Akumon). Built with Next.js 14, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
