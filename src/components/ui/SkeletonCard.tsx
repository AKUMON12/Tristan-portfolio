import React from 'react';

interface SkeletonCardProps {
  type?: 'project' | 'service' | 'cert';
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ type = 'project' }) => {
  if (type === 'service') {
    return (
      <div className="animate-pulse rounded-2xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-sm">
        <div className="mb-4 h-10 w-10 rounded-lg bg-slate-800" />
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
      <div className="animate-pulse rounded-2xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-sm">
        <div className="mb-3 h-5 w-28 rounded-full bg-slate-800" />
        <div className="mb-2 h-6 w-3/4 rounded bg-slate-800" />
        <div className="mb-3 h-4 w-1/3 rounded bg-slate-800/70" />
        <div className="h-4 w-full rounded bg-slate-800/50" />
      </div>
    );
  }

  return (
    <div className="animate-pulse rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-sm">
      <div className="mb-4 h-52 w-full rounded-xl bg-slate-800/90" />
      <div className="mb-2 flex items-center justify-between">
        <div className="h-6 w-3/5 rounded bg-slate-800" />
        <div className="h-5 w-20 rounded-full bg-slate-800/70" />
      </div>
      <div className="mb-2 h-4 w-4/5 rounded bg-slate-800/60" />
      <div className="mb-4 h-3 w-2/3 rounded bg-slate-800/40" />
      <div className="mb-5 flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded-md bg-slate-800" />
        <div className="h-6 w-20 rounded-md bg-slate-800" />
        <div className="h-6 w-14 rounded-md bg-slate-800" />
      </div>
      <div className="flex gap-3 pt-2">
        <div className="h-9 w-28 rounded-lg bg-slate-800" />
        <div className="h-9 w-28 rounded-lg bg-slate-800/60" />
      </div>
    </div>
  );
};
