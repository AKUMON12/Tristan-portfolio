import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI/UX Design',
    description: 'Specializing in intuitive, accessible, and high-performance user interfaces with pixel-perfect responsive layouts.',
    skills: [
      { name: 'Tailwind CSS & Modern UI', proficiency: 95, highlight: 'Glassmorphism, CSS Grid, Micro-animations' },
      { name: 'Next.js & React', proficiency: 92, highlight: 'App Router, SSR, Server Components' },
      { name: 'TypeScript / JavaScript (ES6+)', proficiency: 90, highlight: 'Strict typing, modern asynchronous patterns' },
      { name: 'Figma & UI/UX Prototyping', proficiency: 88, highlight: 'Wireframing, Design Systems, High-fidelity Mockups' },
      { name: 'HTML5 Semantic / CSS3', proficiency: 95, highlight: 'Accessibility (a11y), responsive layouts' },
    ],
  },
  {
    title: 'Backend & Databases',
    description: 'Building robust, scalable server architectures, secure authentication workflows, and relational database schemas.',
    skills: [
      { name: 'Node.js & Express.js', proficiency: 88, highlight: 'REST APIs, Middleware, JWT auth' },
      { name: 'PostgreSQL & Supabase', proficiency: 85, highlight: 'Relational schemas, indexing, RLS security' },
      { name: 'SQL & Database Optimization', proficiency: 84, highlight: 'Complex aggregations, stored procedures' },
      { name: 'PHP & MySQL', proficiency: 80, highlight: 'Legacy integration, MVC web patterns' },
      { name: 'MongoDB', proficiency: 78, highlight: 'Document collections, dynamic indexing' },
    ],
  },
  {
    title: 'AI Engineering & IoT Prototyping',
    description: 'Integrating modern machine intelligence, Retrieval-Augmented Generation (RAG), and embedded hardware systems.',
    skills: [
      { name: 'RAG & Prompt Engineering', proficiency: 86, highlight: 'Gemini 1.5/3.0, Context grounding, Cursor/LLM pipelines' },
      { name: 'Edge AI & Microcontrollers', proficiency: 80, highlight: 'ESP32-CAM, On-device computer vision' },
      { name: 'Arduino IDE & Tinkercad', proficiency: 78, highlight: 'Circuit design, sensor telemetry, IoT prototyping' },
      { name: 'Multimodal AI Integration', proficiency: 82, highlight: 'Vision-to-text, audio-video generation flows' },
    ],
  },
  {
    title: 'DevOps, Tools & Networking',
    description: 'Streamlining CI/CD workflows, containerization, hosting platforms, and Cisco network configurations.',
    skills: [
      { name: 'Git & GitHub Workflows', proficiency: 90, highlight: 'Branching, PR reviews, version management' },
      { name: 'Cloud Deployment (Vercel & Railway)', proficiency: 88, highlight: 'Serverless deployment, environment variables' },
      { name: 'Cisco Networking & Routing', proficiency: 82, highlight: 'CCNAv7 certified, VLANs, switch/router setup' },
      { name: 'Docker & Linux Environments', proficiency: 75, highlight: 'Containerization, bash scripting' },
      { name: 'Graphic & Video Tools (Canva/PS/CapCut)', proficiency: 85, highlight: 'Assets, brand aesthetics, motion graphics' },
    ],
  },
];
