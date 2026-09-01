import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI/UX',
    description: 'Modern, accessible, high-performance interfaces with responsive layouts.',
    skills: [
      { name: 'Next.js 14 & React', proficiency: 92, highlight: 'App Router, SSR, Server Components' },
      { name: 'TypeScript / JavaScript', proficiency: 90, highlight: 'Type safety & ES6+ async' },
      { name: 'Tailwind CSS', proficiency: 95, highlight: 'Glassmorphism & design systems' },
      { name: 'Figma & Prototyping', proficiency: 88, highlight: 'UI Wireframes & mockups' },
      { name: 'HTML5 Semantic / CSS3', proficiency: 95, highlight: 'Responsive layouts & a11y' },
    ],
  },
  {
    title: 'Backend & Databases',
    description: 'Server architectures, secure auth flows, and relational schemas.',
    skills: [
      { name: 'Node.js & Express.js', proficiency: 88, highlight: 'RESTful APIs & middleware' },
      { name: 'PostgreSQL & Supabase', proficiency: 85, highlight: 'Relational design & RLS security' },
      { name: 'SQL Query Optimization', proficiency: 84, highlight: 'Indexing & schema design' },
      { name: 'PHP & MySQL', proficiency: 80, highlight: 'MVC architecture & legacy apps' },
      { name: 'MongoDB', proficiency: 78, highlight: 'Document databases' },
    ],
  },
  {
    title: 'AI & IoT Systems',
    description: 'Retrieval pipelines, prompt engineering, and microcontroller firmware.',
    skills: [
      { name: 'RAG & Gemini AI APIs', proficiency: 86, highlight: 'LLM agents & prompt workflows' },
      { name: 'ESP32 & Arduino', proficiency: 80, highlight: 'Hardware firmware & telemetry' },
      { name: 'Tinkercad & Circuits', proficiency: 78, highlight: 'Schematic prototyping' },
      { name: 'Multimodal Integrations', proficiency: 82, highlight: 'Document & vision analysis' },
    ],
  },
  {
    title: 'DevOps & Networking',
    description: 'Cloud deployment, version control, and Cisco enterprise routing.',
    skills: [
      { name: 'Git & GitHub Workflows', proficiency: 90, highlight: 'Branching & version control' },
      { name: 'Vercel & Railway Cloud', proficiency: 88, highlight: 'Automated CI/CD & hosting' },
      { name: 'Cisco Routing & CCNAv7', proficiency: 82, highlight: 'VLANs, switches & topology' },
      { name: 'Docker & Linux CLI', proficiency: 75, highlight: 'Containerization & bash scripts' },
    ],
  },
];
