import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/providers/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://elvinia-portfolio.vercel.app'),
  title: 'Tristan Jesus V. Elvinia (Akumon) | Full-Stack Developer',
  description:
    'Portfolio of Tristan Jesus V. Elvinia (Akumon). Full-Stack Developer and UI/UX Designer specializing in Node.js, Next.js, and modern web architectures.',
  keywords: [
    'Tristan Jesus Elvinia',
    'Akumon',
    'Full-Stack Developer',
    'Node.js',
    'Next.js',
    'React',
    'Tailwind CSS',
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('akumon_portfolio_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0D14] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
