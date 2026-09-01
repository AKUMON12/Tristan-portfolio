'use client';

import React from 'react';

interface SkeletonCardProps {
  type?: 'project' | 'service' | 'cert' | 'tools' | 'skills' | 'generic';
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ type = 'project' }) => {
  // Service Skeleton
  if (type === 'service') {
    return (
      <div className="animate-pulse rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 backdrop-blur-sm">
        <div className="mb-3.5 flex items-center justify-between">
          <div className="h-10 w-10 rounded-xl bg-slate-800" />
          <div className="h-5 w-20 rounded-full bg-slate-800" />
        </div>
        <div className="mb-2 h-5 w-3/4 rounded bg-slate-800" />
        <div className="mb-4 h-3.5 w-full rounded bg-slate-800/70" />
        <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
          <div className="h-4 w-16 rounded bg-slate-800" />
          <div className="h-4 w-20 rounded bg-slate-800" />
          <div className="h-4 w-14 rounded bg-slate-800" />
        </div>
      </div>
    );
  }

  // Tools Skeleton
  if (type === 'tools') {
    return (
      <div className="animate-pulse rounded-3xl border border-slate-800 bg-[#0E131F]/85 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
          <div className="space-y-1.5 w-2/3">
            <div className="h-5 w-3/4 rounded bg-slate-800" />
            <div className="h-3 w-1/2 rounded bg-slate-800/70" />
          </div>
          <div className="h-5 w-16 rounded-full bg-slate-800" />
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-3 rounded-2xl bg-slate-900/60 p-2.5 border border-slate-800">
              <div className="h-9 w-9 rounded-xl bg-slate-800 shrink-0" />
              <div className="space-y-1 flex-1">
                <div className="h-3.5 w-3/4 rounded bg-slate-800" />
                <div className="h-2.5 w-1/2 rounded bg-slate-800/60" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between border-t border-slate-800/80 pt-3">
          <div className="h-3 w-28 rounded bg-slate-800" />
          <div className="h-3 w-20 rounded bg-slate-800" />
        </div>
      </div>
    );
  }

  // Certifications Skeleton
  if (type === 'cert') {
    return (
      <div className="animate-pulse rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-7 backdrop-blur-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-11 w-11 rounded-2xl bg-slate-800" />
          <div className="h-5 w-24 rounded-full bg-slate-800" />
        </div>
        <div className="mt-4 mb-2 h-5 w-4/5 rounded bg-slate-800" />
        <div className="mb-3 h-3.5 w-1/3 rounded bg-slate-800/70" />
        <div className="h-3 w-full rounded bg-slate-800/50" />
        <div className="mt-5 flex justify-between pt-3.5 border-t border-slate-800/80">
          <div className="h-4 w-28 rounded bg-slate-800" />
          <div className="h-3 w-16 rounded bg-slate-800" />
        </div>
      </div>
    );
  }

  // Skills Matrix Skeleton
  if (type === 'skills') {
    return (
      <div className="animate-pulse rounded-3xl border border-slate-800 bg-[#0E131F]/80 p-6 sm:p-8 backdrop-blur-sm">
        <div className="mb-6 border-b border-slate-800/80 pb-4">
          <div className="h-6 w-1/3 rounded bg-slate-800 mb-2" />
          <div className="h-4 w-1/2 rounded bg-slate-800/70" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4">
              <div className="flex justify-between mb-3">
                <div className="h-4 w-32 rounded bg-slate-800" />
                <div className="h-4 w-10 rounded bg-slate-800" />
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 mb-2" />
              <div className="h-3 w-40 rounded bg-slate-800/60" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: Project Skeleton
  return (
    <div className="animate-pulse rounded-3xl border border-slate-800/80 bg-[#0E131F]/85 overflow-hidden backdrop-blur-sm">
      {/* Vercel-style header skeleton */}
      <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950 px-3.5 py-2.5">
        <div className="flex items-center space-x-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        </div>
        <div className="h-4 w-32 rounded bg-slate-800" />
        <div className="h-3 w-16 rounded bg-slate-800" />
      </div>
      {/* Viewport preview skeleton */}
      <div className="h-48 w-full bg-slate-800/70" />
      {/* Body skeleton */}
      <div className="p-5 sm:p-6">
        <div className="mb-2 h-5 w-3/5 rounded bg-slate-800" />
        <div className="mb-3 h-3 w-2/5 rounded bg-slate-800/60" />
        <div className="mb-4 h-3 w-4/5 rounded bg-slate-800/40" />
        <div className="flex gap-1.5">
          <div className="h-4 w-14 rounded bg-slate-800" />
          <div className="h-4 w-16 rounded bg-slate-800" />
          <div className="h-4 w-12 rounded bg-slate-800" />
        </div>
      </div>
    </div>
  );
};
