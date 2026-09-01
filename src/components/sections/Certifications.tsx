'use client';

import React from 'react';
import { certifications } from '../../data/certsData';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Award className="h-3.5 w-3.5" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            Official industry certifications from Cisco Networking Academy covering enterprise network topologies, routing protocols, and cybersecurity.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(0,240,255,0.1)]"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-950/40 text-cyan-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-purple-500/30 bg-purple-950/30 px-3 py-1 text-xs font-bold text-purple-300">
                  {cert.badge}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                {cert.title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">{cert.issuer}</span>
                <span>•</span>
                <span className="text-cyan-400">{cert.date}</span>
                {cert.code && (
                  <>
                    <span>•</span>
                    <span className="font-mono text-slate-400">{cert.code}</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                {cert.description}
              </p>

              {/* Verification status */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified Credential
                </span>

                <span className="text-xs text-slate-400">
                  Cisco Academy
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
