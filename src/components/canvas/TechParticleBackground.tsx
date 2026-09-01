'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../providers/ThemeProvider';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  size: number;
  baseOpacity: number;
  opacity: number;
  color: string;
}

export const TechParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const symbols = ['< >', '{ }', ';', '0101', '=>', '&&', '||', '!=', '/>', 'git', 'npm', 'const'];

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const isLight = document.documentElement.classList.contains('light');
    const colors = isLight
      ? ['#0284C7', '#6366F1', '#475569', '#0D9488']
      : ['#00F0FF', '#8B5CF6', '#38BDF8'];

    const particleCount = Math.min(42, Math.floor((width * height) / 30000));
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const baseOpacity = isLight ? (0.08 + Math.random() * 0.12) : (0.15 + Math.random() * 0.25);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(0.25 + Math.random() * 0.5), // gentle float upward
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: 11 + Math.random() * 5,
        baseOpacity,
        opacity: baseOpacity,
        color,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const currentlyLight = document.documentElement.classList.contains('light');

      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;

        // Wrap around borders
        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;

        // Interactive mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let activeOpacity = p.baseOpacity;
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2.5;
          p.y -= (dy / dist) * force * 2.5;
          activeOpacity = currentlyLight
            ? Math.min(0.4, p.baseOpacity + 0.2)
            : Math.min(0.85, p.baseOpacity + 0.45);
        }

        ctx.font = `600 ${p.size}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.fillStyle = currentlyLight ? (p.color === '#00F0FF' ? '#0284C7' : p.color) : p.color;
        ctx.globalAlpha = activeOpacity;
        ctx.fillText(p.symbol, p.x, p.y);
      });

      // Subtle ambient grid dots
      ctx.globalAlpha = currentlyLight ? 0.025 : 0.05;
      ctx.fillStyle = currentlyLight ? '#0284C7' : '#00F0FF';
      const step = 64;
      for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
};
