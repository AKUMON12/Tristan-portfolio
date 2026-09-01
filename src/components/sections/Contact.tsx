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
  Copy,
  Clock,
} from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto trigger as fallback
    const mailtoUrl = `mailto:tjelvinia@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Mail className="h-3.5 w-3.5" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            Have a project in mind, a freelance opportunity, or an engineering role? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Info Cards (Col 5) */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Direct Communication Channels</h3>
              <p className="text-sm text-slate-400">
                Reach out via email, phone, or professional networks. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3.5">
              {/* Email */}
              <div className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0E131F]/80 p-4 backdrop-blur-xl transition-colors hover:border-cyan-500/40">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email Address</p>
                    <a
                      href="mailto:tjelvinia@gmail.com"
                      className="font-medium text-white hover:text-cyan-300 transition-colors text-sm"
                    >
                      tjelvinia@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('tjelvinia@gmail.com', 'email')}
                  className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:text-cyan-400"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied === 'email' ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0E131F]/80 p-4 backdrop-blur-xl transition-colors hover:border-cyan-500/40">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                    <a
                      href="tel:09928571488"
                      className="font-medium text-white hover:text-purple-300 transition-colors text-sm"
                    >
                      +63 992 857 1488
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('09928571488', 'phone')}
                  className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:text-purple-400"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copied === 'phone' ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-800 bg-[#0E131F]/80 p-4 backdrop-blur-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location & Timezone</p>
                  <p className="text-sm font-medium text-white">Cebu City, Philippines (UTC+8)</p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/tristan-jesus-elvinia-3a11863a3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-[#0E131F]/80 py-3 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/AKUMON12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-[#0E131F]/80 py-3 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-white"
              >
                <Github className="h-4 w-4 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Contact Form (Col 7) */}
          <div className="rounded-3xl border border-cyan-500/30 bg-[#0E131F]/90 p-8 backdrop-blur-xl lg:col-span-7 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl font-bold text-white">Send A Quick Message</h3>
            <p className="mt-1 text-xs text-slate-400">
              Fill out the details below to dispatch an email inquiry directly to my inbox.
            </p>

            {formSubmitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h4 className="mt-3 text-lg font-bold text-white">Inquiry Prepared!</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Your mail client has been opened with your pre-filled inquiry. You can also email me directly at{' '}
                  <span className="font-semibold text-cyan-400">tjelvinia@gmail.com</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all hover:scale-[1.01] hover:from-cyan-400 hover:to-blue-500"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
