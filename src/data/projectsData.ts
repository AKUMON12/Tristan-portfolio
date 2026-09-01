import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'loan-monitoring',
    title: 'UC-METC Coop Loan Monitoring System',
    tagline: 'Automated Loan Tracking & Member Financial Management',
    category: 'Freelance',
    description: 'Production-ready financial management system built for the UC-METC Community Cooperative to automate loan processing, payment monitoring, and member record verification.',
    image: '/projects/loan-monitoring.svg',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Railway'],
    liveUrl: 'https://uc-coop-loan-monitoring.up.railway.app/',
    githubUrl: 'https://github.com/Vinzz290034/UC_Coop_Loan-Monitoring-System.git',
    caseStudy: {
      problem: 'Manual loan tracking in the cooperative caused administrative bottlenecks, ledger calculation discrepancies, and delayed verification cycles for cooperative members.',
      roleAndApproach: 'Lead Full-Stack Developer — Architected relational schemas in PostgreSQL, built secure session-based authentication, and designed high-density responsive management dashboards.',
      keyChallenge: 'Managing multi-tier calculation logic for complex amortization schedules with zero precision loss across large member datasets.',
      outcome: 'Reduced loan auditing processing overhead by over 60% with zero data discrepancies on live deployment.'
    }
  },
  {
    id: 'chrononav',
    title: 'ChronoNav Campus Navigation & Scheduler',
    tagline: 'Interactive Indoor Campus Pathfinding & Academic Schedule Allocator',
    category: 'Capstone',
    description: 'Smart campus indoor pathfinding and room management system designed for students, faculty, and visitors at University of Cebu Main Campus.',
    image: '/projects/chrononav.svg',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://chrononav-ccs.vercel.app/',
    githubUrl: 'https://github.com/AKUMON12/ChronoNav_.git',
    caseStudy: {
      problem: 'Students and visitors experienced high navigational friction locating classrooms, labs, and faculty offices across a multi-story university campus.',
      roleAndApproach: 'Frontend Lead & System Architect — Engineered interactive indoor spatial data maps, synchronized real-time schedules via Supabase, and delivered a mobile-responsive UI.',
      keyChallenge: 'Implementing spatial floor-to-floor route mapping cleanly without relying on third-party GPS signals inside dense concrete campus buildings.',
      outcome: 'Successfully defended as the 4th-year Capstone project with top departmental recognition for UI/UX excellence and real-time usability.'
    }
  },
  {
    id: 'campass-iot',
    title: 'CAMPass – Edge AI IoT Security System',
    tagline: 'On-Device Face Recognition & Real-time Residential Access Control',
    category: 'IoT/AI',
    description: 'Smart access control system leveraging an ESP32-CAM microcontroller and Edge AI for low-latency on-device face recognition paired with real-time mobile push notifications.',
    image: '/projects/campass-iot.svg',
    techStack: ['ESP32-CAM', 'C++', 'Python', 'Firebase', 'Edge AI', 'IoT'],
    liveUrl: 'https://github.com/AKUMON12',
    githubUrl: 'https://github.com/AKUMON12',
    caseStudy: {
      problem: 'Traditional security locks lack automated biometric identification, while cloud-dependent facial recognition suffers from latency and internet dependency.',
      roleAndApproach: 'IoT & Systems Developer — Programmed the ESP32-CAM firmware, deployed on-device facial feature extraction, and created real-time alert dispatching via Firebase.',
      keyChallenge: 'Running lightweight facial recognition inference within the strict RAM and compute constraints of an ESP32 microcontroller.',
      outcome: 'Achieved sub-second biometric verification on the edge without external cloud inference costs.'
    }
  },
  {
    id: 'skycast-os',
    title: 'SkyCast Weather Intelligence Dashboard',
    tagline: 'Dynamic Real-time Meteorological Visualization & Analytics',
    category: 'Personal',
    description: 'Meteorological dashboard featuring interactive particle rain and cloud animations, multi-city tracking, atmospheric pressure charts, and 5-day predictive forecasts.',
    image: '/projects/skycast.svg',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'OpenWeather API', 'Vercel'],
    liveUrl: 'https://weather-system-by-mrspecific.vercel.app/',
    githubUrl: 'https://github.com/AKUMON12/SkyCast-OS.git',
    caseStudy: {
      problem: 'Standard weather applications present static numbers without engaging visual immersion or contextual atmospheric cues.',
      roleAndApproach: 'Sole Creator & Designer — Engineered dynamic HTML5 canvas particle engines that render weather condition visuals synced with real-time API states.',
      keyChallenge: 'Maintaining smooth 60 FPS particle physics while handling rapid user inputs and responsive canvas resizes.',
      outcome: 'Delivered an ultra-smooth visual weather intelligence interface with instant city search and sub-second load times.'
    }
  },
  {
    id: 'election-simulation',
    title: 'National Election Simulation System',
    tagline: 'High-Concurrency Digital Ballot & Real-Time Polling Visualizer',
    category: 'Academic',
    description: 'High-concurrency web platform simulating the national presidential election process with cryptographic ballot validation and live data visualization.',
    image: '/projects/election-simulation.svg',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    liveUrl: 'https://github.com/AKUMON12',
    githubUrl: 'https://github.com/AKUMON12',
    caseStudy: {
      problem: 'Simulating large-scale voting scenarios requires tamper-evident verification logic and high-throughput real-time tally aggregation.',
      roleAndApproach: 'Full-Stack Developer — Designed atomic database transactions, vote verification hashes, and dynamic percentage charts for live polling results.',
      keyChallenge: 'Preventing race conditions and duplicate voting attempts during rapid burst traffic.',
      outcome: 'Successfully processed thousands of simulated votes in benchmark tests with 100% ballot integrity.'
    }
  },
  {
    id: 'libmanage',
    title: 'LibManage – Academic Library System',
    tagline: 'Full-Stack Cataloging, Circulation & Patron Tracking',
    category: 'Academic',
    description: 'Comprehensive Library Management Web-App built for the University of Cebu to automate book cataloging, circulation checkouts, return penalties, and patron records.',
    image: '/projects/libmanage.svg',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Apache'],
    liveUrl: 'https://github.com/AKUMON12',
    githubUrl: 'https://github.com/AKUMON12',
    caseStudy: {
      problem: 'Paper-based and legacy cataloging caused stock inaccuracies and long queues during peak semester borrow periods.',
      roleAndApproach: 'Database & Backend Developer — Designed normalized MySQL schemas, query procedures, and an intuitive administrative interface.',
      keyChallenge: 'Structuring complex SQL queries to calculate overdue fees dynamically across varied patron tiers.',
      outcome: 'Streamlined checkout throughput and provided librarians with instant inventory search.'
    }
  },
  {
    id: 'nanoworld',
    title: 'NanoWorld Science Exploration Portal',
    tagline: 'Interactive Nanotechnology Educational Hub',
    category: 'Academic',
    description: 'Educational showcase website breaking down complex concepts of nanotechnology through interactive modules, visual diagrams, and responsive learning materials.',
    image: '/projects/nanoworld.svg',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'GitHub Pages'],
    liveUrl: 'https://akumon12.github.io/NanoWorld/index.html',
    githubUrl: 'https://github.com/AKUMON12/NanoWorld.git',
    caseStudy: {
      problem: 'High-level science topics like nanotechnology often present high cognitive loads to students when presented in dense textual formats.',
      roleAndApproach: 'UI Designer & Web Developer — Crafted accessible layouts, vector diagrams, and responsive modules for enhanced visual storytelling.',
      keyChallenge: 'Achieving responsive typography and fluid layouts across disparate screen ratios using vanilla styles.',
      outcome: 'Earned top marks in the Science, Technology, and Society curriculum for innovative presentation.'
    }
  },
  {
    id: 'biodiversity',
    title: 'Biodiversity Conservation Hub',
    tagline: 'Ecological Awareness & Endangered Species Showcase',
    category: 'Academic',
    description: 'Curated environmental showcase platform highlighting endangered species, ecosystem preservation, and interactive ecological education.',
    image: '/projects/biodiversity.svg',
    techStack: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://biodiversity-gamma.vercel.app/',
    githubUrl: 'https://github.com/AKUMON12/biodiversity.git',
    caseStudy: {
      problem: 'Lack of accessible digital repositories for local wildlife conservation education.',
      roleAndApproach: 'Frontend Developer — Designed modular component architectures, dynamic search filtering, and sleek hero displays.',
      keyChallenge: 'Structuring high-resolution media galleries without compromising initial page load speed.',
      outcome: 'Achieved a 98+ Google Lighthouse performance rating through aggressive lazy-loading and responsive image assets.'
    }
  }
];
