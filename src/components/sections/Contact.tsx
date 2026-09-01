'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Loader2,
  Sparkles,
} from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot spam trap
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // 1. Client-Side Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          website: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(
          data.error || 'Unable to send message right now. Please reach out directly to tjelvinia@gmail.com.'
        );
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        'Network error occurred. Please check your connection or email me directly at tjelvinia@gmail.com.'
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Mail className="h-3.5 w-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
            Available for frontend roles, web design projects, and collaboration inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards (Col 5) */}
          <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
            <div className="space-y-3">
              {/* Email Card */}
              <div className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0E131F]/80 p-4 backdrop-blur-xl transition-colors hover:border-cyan-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 shadow-inner">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-semibold">Email</p>
                    <a
                      href="mailto:tjelvinia@gmail.com"
                      className="font-medium text-white hover:text-cyan-300 transition-colors text-xs sm:text-sm"
                    >
                      tjelvinia@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('tjelvinia@gmail.com', 'email')}
                  className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied === 'email' ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0E131F]/80 p-4 backdrop-blur-xl transition-colors hover:border-cyan-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 shadow-inner">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-semibold">Phone</p>
                    <a
                      href="tel:09928571488"
                      className="font-medium text-white hover:text-purple-300 transition-colors text-xs sm:text-sm"
                    >
                      +63 992 857 1488
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('09928571488', 'phone')}
                  className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:text-purple-400 transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copied === 'phone' ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0E131F]/80 p-4 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 shadow-inner">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-semibold">Location</p>
                  <p className="text-xs sm:text-sm font-medium text-white">Cebu City, Philippines (UTC+8)</p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex gap-2.5 pt-2">
              <a
                href="https://www.linkedin.com/in/tristan-jesus-elvinia-3a11863a3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-[#0E131F]/80 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/AKUMON12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-[#0E131F]/80 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-white"
              >
                <Github className="h-3.5 w-3.5 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (Col 7) */}
          <div className="rounded-3xl border border-cyan-500/30 bg-[#0E131F]/90 p-6 sm:p-7 backdrop-blur-xl lg:col-span-7 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
              <h3 className="text-lg font-bold text-white">Send Direct Message</h3>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Direct Inbox
              </span>
            </div>

            {/* Success State Confirmation */}
            {status === 'success' ? (
              <div className="my-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-8 text-center animate-in fade-in">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-950/50 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thanks for reaching out. Your inquiry has been delivered directly to my inbox (<span className="text-cyan-300">tjelvinia@gmail.com</span>). I will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-cyan-400"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                {/* Honeypot field (hidden from users, traps bots) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div
                    className="flex items-start gap-2 rounded-xl border border-rose-500/30 bg-rose-950/30 p-3 text-xs text-rose-300 animate-in fade-in"
                    role="alert"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300">Name *</label>
                    <input
                      type="text"
                      required
                      disabled={status === 'submitting'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none disabled:opacity-60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300">Email *</label>
                    <input
                      type="email"
                      required
                      disabled={status === 'submitting'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none disabled:opacity-60 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300">Subject (Optional)</label>
                  <input
                    type="text"
                    disabled={status === 'submitting'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none disabled:opacity-60 transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={4}
                    disabled={status === 'submitting'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or opportunity..."
                    className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none disabled:opacity-60 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-xs sm:text-sm font-bold text-black shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:scale-[1.01] hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
