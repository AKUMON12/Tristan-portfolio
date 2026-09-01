import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'loan-monitoring',
    title: 'UC-METC Coop Loan Monitoring System',
    tagline: 'Automated Loan Tracking & Member Financial System',
    category: 'Freelance',
    description: 'Production financial management system built for UC-METC Community Cooperative to automate loan processing, amortization tracking, and member verification.',
    image: '/projects/loan-monitoring.svg',
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
    image: '/projects/chrononav.svg',
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
    id: 'campass-iot',
    title: 'CAMPass – Edge AI Access Control',
    tagline: 'On-Device Face Recognition & Real-Time Access Alerts',
    category: 'IoT/AI',
    description: 'Edge security access system leveraging ESP32-CAM microcontroller for on-device face recognition with instant mobile alerts.',
    image: '/projects/campass-iot.svg',
    techStack: ['ESP32-CAM', 'C++', 'Python', 'Firebase', 'Edge AI', 'IoT'],
    liveUrl: 'https://github.com/AKUMON12',
    githubUrl: 'https://github.com/AKUMON12',
    deploymentDomain: 'campass-edge.hardware',
    deploymentPlatform: 'Firebase',
    branch: 'main',
    deploymentStatus: 'Production',
    caseStudy: {
      problem: 'Traditional door locks lack biometric logging, while cloud recognition introduces latency and requires constant internet.',
      roleAndApproach: 'IoT & Systems Developer — Programmed ESP32-CAM firmware, deployed on-device facial feature extraction, and created real-time alerts via Firebase.',
      keyChallenge: 'Running lightweight facial recognition inference within strict RAM constraints of an ESP32 microcontroller.',
      outcome: 'Achieved sub-second biometric verification on the edge without recurring cloud inference costs.'
    }
  },
  {
    id: 'skycast-os',
    title: 'SkyCast Weather Intelligence',
    tagline: 'Dynamic Real-Time Meteorological Visualizer',
    category: 'Personal',
    description: 'Meteorological dashboard featuring interactive canvas particle physics, multi-city tracking, and 5-day predictive forecasts.',
    image: '/projects/skycast.svg',
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
    id: 'election-simulation',
    title: 'National Election Simulation System',
    tagline: 'High-Concurrency Digital Ballot & Polling Visualizer',
    category: 'Academic',
    description: 'High-concurrency voting simulation platform with cryptographic ballot validation and live data visualization.',
    image: '/projects/election-simulation.svg',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    liveUrl: 'https://github.com/AKUMON12',
    githubUrl: 'https://github.com/AKUMON12',
    deploymentDomain: 'election-simulation.local',
    deploymentPlatform: 'Vercel',
    branch: 'main',
    deploymentStatus: 'Ready',
    caseStudy: {
      problem: 'Simulating large-scale voting scenarios requires tamper-evident verification logic and high-throughput tally aggregation.',
      roleAndApproach: 'Full-Stack Developer — Designed atomic database transactions, vote verification hashes, and dynamic percentage charts.',
      keyChallenge: 'Preventing race conditions and duplicate voting attempts during rapid burst traffic.',
      outcome: 'Successfully processed thousands of simulated votes in benchmark tests with 100% ballot integrity.'
    }
  },
  {
    id: 'libmanage',
    title: 'LibManage – Library Management System',
    tagline: 'Full-Stack Cataloging, Circulation & Patron Tracking',
    category: 'Academic',
    description: 'Comprehensive Library Management Web-App built for University of Cebu to automate book cataloging, checkouts, and overdue tracking.',
    image: '/projects/libmanage.svg',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Apache'],
    liveUrl: 'https://github.com/AKUMON12',
    githubUrl: 'https://github.com/AKUMON12',
    deploymentDomain: 'libmanage.uc-system.edu',
    deploymentPlatform: 'Self-Hosted',
    branch: 'main',
    deploymentStatus: 'Ready',
    caseStudy: {
      problem: 'Legacy paper cataloging caused inventory inaccuracies and long queues during peak semester borrow periods.',
      roleAndApproach: 'Database & Backend Developer — Designed normalized MySQL schemas, query procedures, and an intuitive administrative interface.',
      keyChallenge: 'Structuring complex SQL queries to calculate overdue fees dynamically across varied patron tiers.',
      outcome: 'Streamlined checkout throughput and provided librarians with instant inventory search.'
    }
  },
  {
    id: 'nanoworld',
    title: 'NanoWorld Science Exploration Hub',
    tagline: 'Interactive Nanotechnology Educational Portal',
    category: 'Academic',
    description: 'Educational showcase breaking down nanotechnology concepts through interactive modules, visual diagrams, and responsive learning materials.',
    image: '/projects/nanoworld.svg',
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
    image: '/projects/biodiversity.svg',
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
