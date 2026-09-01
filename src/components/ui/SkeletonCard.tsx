import React from 'react';

interface SkeletonCardProps {
  type?: 'project' | 'service' | 'cert';
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ type = 'project' }) => {
  if (type === 'service') {
    return (
      <div className="animate-pulse rounded-3xl border border-white/5 bg-slate-900/40 p-8 backdrop-blur-sm">
        <div className="mb-4 h-12 w-12 rounded-2xl bg-slate-800" />
        <div className="mb-2 h-6 w-2/3 rounded bg-slate-800" />
        <div className="mb-4 h-4 w-full rounded bg-slate-800/70" />
        <div className="h-4 w-5/6 rounded bg-slate-800/50" />
        <div className="mt-6 flex flex-wrap gap-2">
          <div className="h-5 w-20 rounded-full bg-slate-800" />
          <div className="h-5 w-24 rounded-full bg-slate-800" />
        </div>
      </div>
    );
  }

  if (type === 'cert') {
    return (
      <div className="animate-pulse rounded-3xl border border-white/5 bg-slate-900/40 p-8 backdrop-blur-sm">
        <div className="mb-3 h-5 w-28 rounded-full bg-slate-800" />
        <div className="mb-2 h-6 w-3/4 rounded bg-slate-800" />
        <div className="mb-3 h-4 w-1/3 rounded bg-slate-800/70" />
        <div className="h-4 w-full rounded bg-slate-800/50" />
      </div>
    );
  }

  return (
    <div className="animate-pulse rounded-2xl border border-slate-800/80 bg-slate-900/60 overflow-hidden backdrop-blur-sm">
      {/* Vercel-style header skeleton */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950 px-3.5 py-2.5">
        <div className="flex items-center space-x-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        </div>
        <div className="h-4 w-32 rounded bg-slate-800" />
        <div className="h-3 w-12 rounded bg-slate-800" />
      </div>
      {/* Viewport preview skeleton */}
      <div className="h-44 w-full bg-slate-800/70" />
      {/* Body skeleton */}
      <div className="p-6">
        <div className="mb-2 h-5 w-3/5 rounded bg-slate-800" />
        <div className="mb-3 h-3 w-2/5 rounded bg-slate-800/60" />
        <div className="mb-4 h-3 w-4/5 rounded bg-slate-800/40" />
        <div className="flex gap-2">
          <div className="h-5 w-14 rounded bg-slate-800" />
          <div className="h-5 w-16 rounded bg-slate-800" />
          <div className="h-5 w-12 rounded bg-slate-800" />
        </div>
      </div>
    </div>
  );
};
