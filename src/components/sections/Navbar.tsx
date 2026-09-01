'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Moon, Sun, Terminal } from 'lucide-react';
import { useTheme } from '../providers/ThemeProvider';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Tools', href: '#tools' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Labs', href: '#labs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0D14]/85 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-md border-b border-cyan-500/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center space-x-2 font-mono text-base sm:text-lg font-bold tracking-tight text-white transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0E131F] border border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.35)] group-hover:scale-110 group-hover:border-cyan-400 transition-all">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <circle cx="12" cy="12" r="7.5" stroke="url(#navIconGrad)" strokeWidth="2" />
              <circle cx="12" cy="12" r="2.5" fill="#00F0FF" />
              <defs>
                <linearGradient id="navIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white group-hover:text-cyan-400 transition-colors">Akumon</span>
            <span className="text-purple-400">.dev</span>
            <span className="text-cyan-400"> /&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 lg:space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden items-center space-x-3 md:flex">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 p-2.5 text-slate-300 transition-all hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-105"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-purple-600" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="group flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-950/30 px-4 py-2 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-purple-600" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-b border-cyan-500/20 bg-[#0A0D14]/95 px-4 pt-3 pb-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-cyan-950/40 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2.5 text-xs font-bold text-black shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <FileText className="h-4 w-4" />
              <span>Preview & Download Resume</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
