'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollToTop Component
 *
 * A floating "Back to Top" action button positioned at the bottom-right of the viewport.
 * Features:
 * - Dynamic scroll detection: Displays once the user scrolls beyond 300px.
 * - Smooth scroll restoration to top of page on click.
 * - Consistent cyber-aesthetic theme with subtle glassmorphism and cyan neon hover glow.
 * - Responsive placement and sizing tailored for Mobile, Tablet, and Desktop screens.
 */
export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check scroll position to toggle visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Passive event listener for optimal scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check in case user is already scrolled upon hydration
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-5 right-5 z-40 flex items-center justify-center rounded-full border transition-all duration-300 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-90 pointer-events-none'
      } h-11 w-11 sm:h-12 sm:w-12 bg-[#0E131F]/90 backdrop-blur-md border-cyan-500/30 text-cyan-400 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-cyan-500 hover:text-black hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50`}
    >
      <ArrowUp className="h-5 w-5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};
