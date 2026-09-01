'use client';

import React from 'react';
import { Modal } from '../ui/Modal';
import { Download, ExternalLink, Mail, Phone, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Curriculum Vitae & Resume Preview" maxWidth="max-w-4xl">
      <div className="space-y-6">
        {/* Quick Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Download className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Tristan Jesus V. Elvinia - Resume</p>
              <p className="text-xs text-slate-400">Official PDF • Updated 2025/2026</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/assets/Tristan_Elvinia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              Open PDF
            </a>
            <a
              href="/assets/Tristan_Elvinia_Resume.pdf"
              download="Tristan_Jesus_Elvinia_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-xs font-bold text-black shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:scale-105 hover:from-cyan-400 hover:to-blue-500"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Quick Highlights Summary Card */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="mb-2 flex items-center gap-2 text-cyan-400">
              <GraduationCap className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Education</span>
            </div>
            <p className="text-sm font-semibold text-white">BS Information Technology</p>
            <p className="text-xs text-slate-400">University of Cebu Main Campus</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="mb-2 flex items-center gap-2 text-purple-400">
              <Award className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Certifications</span>
            </div>
            <p className="text-sm font-semibold text-white">Cisco CCNAv7 (SRWE)</p>
            <p className="text-xs text-slate-400">Introduction to Cybersecurity</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="mb-2 flex items-center gap-2 text-blue-400">
              <Briefcase className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Experience</span>
            </div>
            <p className="text-sm font-semibold text-white">Chat Support Specialist</p>
            <p className="text-xs text-slate-400">Eperformax (Shopee Account)</p>
          </div>
        </div>

        {/* PDF Embedded Frame */}
        <div className="relative h-[480px] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
          <iframe
            src="/assets/Tristan_Elvinia_Resume.pdf#toolbar=0"
            title="Tristan Jesus V. Elvinia Resume"
            className="h-full w-full"
          />
        </div>

        {/* Contact info strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            <span>Cebu City, Philippines</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-cyan-400" />
            <span>tjelvinia@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-cyan-400" />
            <span>+63 992 857 1488 / +63 992 857 1499</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
