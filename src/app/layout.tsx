import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tristan Jesus V. Elvinia (Akumon) | Full-Stack Developer',
  description:
    'Portfolio of Tristan Jesus V. Elvinia (Akumon / Tan). Full-Stack Developer and UI/UX Designer from Cebu City, specializing in Node.js, Next.js, and modern web architectures.',
  keywords: [
    'Tristan Jesus Elvinia',
    'Akumon',
    'Full-Stack Developer',
    'Node.js',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Cebu Web Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Tristan Jesus V. Elvinia', url: 'https://github.com/AKUMON12' }],
  openGraph: {
    title: 'Tristan Jesus V. Elvinia (Akumon) | Full-Stack Developer',
    description:
      'Explore production web systems, capstones, IoT hardware projects, and engineering case studies.',
    url: 'https://elvinia-portfolio.vercel.app',
    siteName: 'Tristan Elvinia Portfolio',
    images: [
      {
        url: '/assets/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Tristan Jesus V. Elvinia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0A0D14] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
