'use client';

import React from 'react';
import { Modal } from '../ui/Modal';
import { CertificationItem } from '../../types';
import { Award, ShieldCheck, CheckCircle2, Download, Printer } from 'lucide-react';
import { CiscoIcon } from '../ui/BrandIcons';

interface CertificateModalProps {
  cert: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  cert,
  isOpen,
  onClose,
}) => {
  if (!cert) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={cert.title} maxWidth="max-w-4xl">
      <div className="space-y-5">
        {/* Sub-header meta bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-xs font-bold text-purple-300">
              {cert.badge}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified Cisco Credential
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-white"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save</span>
            </button>
          </div>
        </div>

        {/* High-Fidelity Authentic Cisco Certificate Paper Canvas */}
        <div className="relative overflow-hidden rounded-2xl border-4 border-slate-200/80 bg-white p-8 sm:p-12 text-slate-900 shadow-2xl font-sans select-none print:m-0 print:p-0 print:border-none">
          {/* Subtle Background Pattern & Border Ring */}
          <div className="absolute inset-3 rounded-xl border border-slate-200 pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/70 via-sky-50/40 to-transparent pointer-events-none" />

          {/* Cisco Networking Academy Header */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <div className="flex items-end space-x-0.5 h-6">
                    <span className="w-1 h-3 bg-[#049FD9] rounded-xs" />
                    <span className="w-1 h-4 bg-[#049FD9] rounded-xs" />
                    <span className="w-1 h-6 bg-[#049FD9] rounded-xs" />
                    <span className="w-1 h-6 bg-[#049FD9] rounded-xs" />
                    <span className="w-1 h-4 bg-[#049FD9] rounded-xs" />
                    <span className="w-1 h-3 bg-[#049FD9] rounded-xs" />
                  </div>
                  <div className="pl-1.5 font-sans font-bold text-xs tracking-wider text-[#049FD9] uppercase">
                    <p className="leading-tight text-[11px] font-extrabold tracking-wide">Networking</p>
                    <p className="leading-tight text-[11px] font-normal tracking-wide text-slate-600">Academy</p>
                  </div>
                </div>
                <span className="mt-1 font-black text-xs tracking-widest text-[#002D5A]">CISCO</span>
              </div>
            </div>

            <div className="text-right">
              <span className="rounded-md bg-blue-50 px-2.5 py-1 font-mono text-[10px] font-bold text-blue-700 border border-blue-100">
                {cert.code || 'CISCO-OFFICIAL-VERIFIED'}
              </span>
            </div>
          </div>

          {/* Certificate Main Text Body */}
          <div className="relative z-10 my-8 sm:my-12 text-center">
            <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
              This certificate is awarded to
            </p>

            {/* Recipient Full Name */}
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-[#002D5A] sm:text-4xl">
              Tristan Jesus Elvinia
            </h2>

            <p className="mt-4 text-xs sm:text-sm font-medium text-slate-500">
              for successfully completing
            </p>

            {/* Course Title */}
            <h3 className="mt-2 text-xl sm:text-3xl font-extrabold text-[#0070B8] tracking-tight">
              {cert.title}
            </h3>

            {/* Issuer program note */}
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              {cert.title.includes('Cybersecurity')
                ? 'offered by University of Cebu through the Cisco Networking Academy program.'
                : 'through the Cisco Networking Academy program.'}
            </p>
          </div>

          {/* Signatories & Completion Date Footer */}
          <div className="relative z-10 mt-8 sm:mt-12 pt-6 border-t border-slate-200/80 flex flex-wrap items-end justify-between gap-6 text-left">
            {/* Instructor / Director Signatory */}
            <div className="flex flex-col">
              <div className="mb-1 font-serif italic text-lg sm:text-xl text-[#002D5A] select-none">
                {cert.title.includes('Cybersecurity') ? (
                  <span className="font-sans font-semibold text-base text-slate-800">Heubert Ferolino</span>
                ) : (
                  <span className="font-serif italic font-bold text-slate-700 tracking-wider">Lynn Bloomer</span>
                )}
              </div>
              <p className="text-xs font-bold text-slate-800">
                {cert.title.includes('Cybersecurity') ? 'Heubert Ferolino' : 'Lynn Bloomer'}
              </p>
              <p className="text-[11px] text-slate-500">
                {cert.title.includes('Cybersecurity') ? 'Instructor' : 'Director'}
              </p>
              <p className="text-[10px] text-slate-400 font-medium">
                {cert.title.includes('Cybersecurity') ? 'University of Cebu' : 'Cisco Networking Academy'}
              </p>
            </div>

            {/* Completion Date */}
            <div className="text-right">
              <p className="font-mono text-sm font-bold text-slate-900">
                {cert.date}
              </p>
              <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                Completion Date
              </p>
            </div>
          </div>
        </div>

        {/* Verification Footer Notes */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="text-[11px]">Cisco Networking Academy • Verified Digital Badge</span>
          <span className="font-mono text-cyan-400 text-[11px]">Tristan Jesus Elvinia</span>
        </div>
      </div>
    </Modal>
  );
};
