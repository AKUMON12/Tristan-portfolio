import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'coop-sync',
    title: 'UC-METC Coop Loan Monitoring System',
    tagline: 'Automated Loan Tracking & Member Financial System',
    category: 'Freelance',
    description: 'Production financial management system built for UC-METC Community Cooperative to automate loan processing, amortization tracking, and member verification.',
    image: "/projects/coop-sync.png",
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Railway'],
    liveUrl: 'https://uc-coop-loan-monitoring.up.railway.app/',
    githubUrl: 'https://github.com/Vinzz290034/UC_Coop_Loan-Monitoring-System.git',
    deploymentDomain: 'uc-coop-loan-monitoring.up.railway.app',
    deploymentPlatform: 'Railway',
    branch: 'main',
    deploymentStatus: 'Production',
    caseStudy: {
      problem: 'Manual loan tracking caused administrative bottlenecks, ledger calculation errors, and delayed member verifications.',
      roleAndApproach: 'Lead Full-Stack Developer — Designed relational PostgreSQL schemas, secure session authentication, and responsive management dashboards.',
      keyChallenge: 'Managing multi-tier calculation logic for complex amortization schedules with zero precision loss across large datasets.',
      outcome: 'Reduced auditing overhead by over 60% with zero data discrepancies on live deployment.'
    }
  },
  {
    id: 'chrononav',
    title: 'ChronoNav Campus Navigation & Scheduler',
    tagline: 'Interactive Indoor Campus Pathfinding & Schedule Allocator',
    category: 'Capstone',
    description: 'Indoor pathfinding and room management system designed for students, faculty, and visitors at University of Cebu Main Campus.',
    image: '/projects/chrononav.png',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://chrononav-ccs.vercel.app/',
    githubUrl: 'https://github.com/AKUMON12/ChronoNav_.git',
    deploymentDomain: 'chrononav-ccs.vercel.app',
    deploymentPlatform: 'Vercel',
    branch: 'main',
    deploymentStatus: 'Production',
    caseStudy: {
      problem: 'Students and visitors experienced high navigational friction locating classrooms and labs across multi-story buildings.',
      roleAndApproach: 'Frontend Lead & System Architect — Engineered interactive indoor spatial maps and synchronized real-time schedules via Supabase.',
      keyChallenge: 'Implementing spatial floor-to-floor route mapping without relying on third-party GPS inside concrete buildings.',
      outcome: 'Successfully defended as 4th-year Capstone project with top departmental recognition for UI/UX excellence.'
    }
  },
  {
    id: 'skycast-os',
    title: 'SkyCast Weather Intelligence',
    tagline: 'Dynamic Real-Time Meteorological Visualizer',
    category: 'Personal',
    description: 'Meteorological dashboard featuring interactive canvas particle physics, multi-city tracking, and 5-day predictive forecasts.',
    image: '/projects/skycast.png',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'OpenWeather API', 'Vercel'],
    liveUrl: 'https://weather-system-by-mrspecific.vercel.app/',
    githubUrl: 'https://github.com/AKUMON12/SkyCast-OS.git',
    deploymentDomain: 'weather-system-by-mrspecific.vercel.app',
    deploymentPlatform: 'Vercel',
    branch: 'main',
    deploymentStatus: 'Production',
    caseStudy: {
      problem: 'Standard weather applications present static numbers without engaging visual immersion or atmospheric context.',
      roleAndApproach: 'Creator & Designer — Engineered dynamic HTML5 canvas particle engines that render weather condition visuals synced with real-time API states.',
      keyChallenge: 'Maintaining smooth 60 FPS particle physics during rapid user search and canvas resizing.',
      outcome: 'Delivered an ultra-smooth visual weather dashboard with instant city search and sub-second load times.'
    }
  },
  {
    id: 'nanoworld',
    title: 'NanoWorld Science Exploration Hub',
    tagline: 'Interactive Nanotechnology Educational Portal',
    category: 'Academic',
    description: 'Educational showcase breaking down nanotechnology concepts through interactive modules, visual diagrams, and responsive learning materials.',
    image: '/projects/nanoworld.png',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'GitHub Pages'],
    liveUrl: 'https://akumon12.github.io/NanoWorld/index.html',
    githubUrl: 'https://github.com/AKUMON12/NanoWorld.git',
    deploymentDomain: 'akumon12.github.io/NanoWorld',
    deploymentPlatform: 'GitHub Pages',
    branch: 'main',
    deploymentStatus: 'Production',
    caseStudy: {
      problem: 'Science topics like nanotechnology present high cognitive loads when taught in dense textual formats.',
      roleAndApproach: 'UI Designer & Web Developer — Crafted accessible layouts, vector diagrams, and responsive modules for enhanced visual storytelling.',
      keyChallenge: 'Achieving responsive typography and fluid layouts across disparate screen ratios using vanilla styles.',
      outcome: 'Earned top marks in the curriculum for innovative presentation.'
    }
  },
  {
    id: 'biodiversity',
    title: 'Biodiversity Conservation Hub',
    tagline: 'Ecological Awareness & Species Showcase',
    category: 'Academic',
    description: 'Environmental showcase platform highlighting wildlife conservation with high-performance responsive media and filtering.',
    image: '/projects/biodiversity.png',
    techStack: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://biodiversity-gamma.vercel.app/',
    githubUrl: 'https://github.com/AKUMON12/biodiversity.git',
    deploymentDomain: 'biodiversity-gamma.vercel.app',
    deploymentPlatform: 'Vercel',
    branch: 'main',
    deploymentStatus: 'Production',
    caseStudy: {
      problem: 'Lack of accessible digital repositories for local wildlife conservation education.',
      roleAndApproach: 'Frontend Developer — Designed modular component architectures, dynamic search filtering, and responsive hero displays.',
      keyChallenge: 'Structuring high-resolution media galleries without compromising initial page load speed.',
      outcome: 'Achieved a 98+ Google Lighthouse performance rating through optimized assets.'
    }
  }
];
