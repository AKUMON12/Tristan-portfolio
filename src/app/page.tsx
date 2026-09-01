'use client';

import React, { useState } from 'react';
import { TechParticleBackground } from '../components/canvas/TechParticleBackground';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/ui/Marquee';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Certifications } from '../components/sections/Certifications';
import { SuspenseLab } from '../components/sections/SuspenseLab';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';
import { ResumeModal } from '../components/modals/ResumeModal';
import { CaseStudyModal } from '../components/modals/CaseStudyModal';
import { Project } from '../types';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="relative min-h-screen bg-[#0A0D14] text-slate-100 selection:bg-cyan-400 selection:text-black">
      {/* Interactive Cursor-Responsive Canvas */}
      <TechParticleBackground />

      {/* Primary Sticky Cyber Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* Tech Stack Infinite Marquee */}
      <Marquee />

      {/* About Me & Journey */}
      <About />

      {/* Services & Capabilities Bento */}
      <Services />

      {/* Featured Projects with Case Studies */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* Technical Skills Matrix */}
      <Skills />

      {/* Cisco Credentials & Training Vault */}
      <Certifications />

      {/* Suspense / Akumon Labs Interactive Section */}
      <SuspenseLab />

      {/* Contact & Inquiry */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
