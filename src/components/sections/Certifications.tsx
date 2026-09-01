'use client';

import React, { useState, useEffect } from 'react';
import { certifications } from '../../data/certsData';
import { SkeletonCard } from '../ui/SkeletonCard';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="certifications" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Award className="h-3.5 w-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
            Official industry credentials and certifications earned through Cisco Networking Academy covering cybersecurity and enterprise routing architectures.
          </p>
        </div>

        {/* Certificates Grid with Skeletal State */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <SkeletonCard key={n} type="cert" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(0,240,255,0.1)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-950/40 text-cyan-400 shadow-inner">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-purple-500/30 bg-purple-950/30 px-2.5 py-0.5 text-[11px] font-bold text-purple-300">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
                    {cert.title}
                  </h3>

                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">{cert.issuer}</span>
                    <span>•</span>
                    <span className="text-cyan-400 font-medium">{cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    {cert.description}
                  </p>
                </div>

                {/* Verification status */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-3.5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified Credential
                  </span>

                  <span className="text-[10px] font-mono text-slate-500">
                    {cert.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
