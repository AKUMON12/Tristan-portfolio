export interface ToolItem {
  name: string;
  badge?: string;
  iconName: string;
  description?: string;
}

export interface ToolCategory {
  id: string;
  category: string;
  headline: string;
  accentColor: string;
  tools: ToolItem[];
}

/**
 * Exact Tools & Tech Stack specification mapped by professional domain
 */
export const toolsData: ToolCategory[] = [
  {
    id: 'ui-ux',
    category: 'UI/UX Design',
    headline: 'Interface Architecture & Wireframing',
    accentColor: 'cyan',
    tools: [
      { name: 'Figma', badge: 'Wireframing & Prototypes', iconName: 'Figma' },
      { name: 'Google Stitch', badge: 'Design System & Tokens', iconName: 'GoogleStitch' },
    ],
  },
  {
    id: 'graphic-design',
    category: 'Graphic Design',
    headline: 'Vector Assets & Brand Visuals',
    accentColor: 'purple',
    tools: [
      { name: 'Canva', badge: 'Layouts & Social Assets', iconName: 'Canva' },
      { name: 'MS PowerPoint', badge: 'Pitch Decks & Vectors', iconName: 'MsPpt' },
      { name: 'Adobe Photoshop', badge: 'Photo Retouch & Graphics', iconName: 'AdobePs' },
    ],
  },
  {
    id: 'video-editing',
    category: 'Video Editing',
    headline: 'Motion Graphics & Dynamic Cuts',
    accentColor: 'rose',
    tools: [
      { name: 'CapCut', badge: 'Short-Form & Keyframes', iconName: 'CapCut' },
      { name: 'Canva Video', badge: 'Animated Typography', iconName: 'Canva' },
      { name: 'Adobe Express', badge: 'Social Media & Reels', iconName: 'AdobeExpress' },
    ],
  },
  {
    id: 'web-development-ide',
    category: 'Web-App Development',
    headline: 'IDEs, AI Pair Programmers & Editors',
    accentColor: 'sky',
    tools: [
      { name: 'VS Code', badge: 'Primary Development IDE', iconName: 'VsCode' },
      { name: 'NetBeans', badge: 'Java & MVC Enterprise', iconName: 'NetBeans' },
      { name: 'Cursor', badge: 'AI-Powered Agentic Code', iconName: 'Cursor' },
      { name: 'Antigravity', badge: 'DeepMind Agentic Suite', iconName: 'Antigravity' },
    ],
  },
  {
    id: 'tech-stack',
    category: 'Tech Stack & Cloud',
    headline: 'Full-Stack Frameworks & Datastores',
    accentColor: 'emerald',
    tools: [
      { name: 'Node.js', badge: 'Runtime', iconName: 'NodeJs' },
      { name: 'Tailwind CSS', badge: 'Styling', iconName: 'Tailwind' },
      { name: 'Express.js', badge: 'REST API', iconName: 'Express' },
      { name: 'Next.js', badge: 'Full-Stack SSR', iconName: 'NextJs' },
      { name: 'Nuxt.js', badge: 'Vue Ecosystem', iconName: 'Nuxt' },
      { name: 'TypeScript', badge: 'Strict Typing', iconName: 'TypeScript' },
      { name: 'React', badge: 'Frontend', iconName: 'React' },
      { name: 'PostgreSQL', badge: 'Relational DB', iconName: 'Postgres' },
      { name: 'Supabase', badge: 'BaaS & Auth', iconName: 'Supabase' },
      { name: 'MySQL', badge: 'Relational DB', iconName: 'MySql' },
      { name: 'Render', badge: 'Cloud Deploy', iconName: 'Render' },
      { name: 'Railway', badge: 'Production PaaS', iconName: 'Railway' },
    ],
  },
  {
    id: 'iot',
    category: 'IoT & Microcontrollers',
    headline: 'Embedded Firmware & Circuit Schematics',
    accentColor: 'amber',
    tools: [
      { name: 'Arduino IDE', badge: 'C++ Firmware & Telemetry', iconName: 'Arduino' },
      { name: 'Tinkercad', badge: 'Circuit Simulation & CAD', iconName: 'Tinkercad' },
    ],
  },
  {
    id: 'technical-writing',
    category: 'Technical Writing',
    headline: 'Documentation, Specifications & Manuals',
    accentColor: 'blue',
    tools: [
      { name: 'MS Office Suite', badge: 'Word, Docs & Specifications', iconName: 'MsOffice' },
    ],
  },
  {
    id: 'qa-testing',
    category: 'QA & Test Validation',
    headline: 'Test Case Tracking & Data Auditing',
    accentColor: 'emerald',
    tools: [
      { name: 'MS Excel', badge: 'Data Validation & Test Matrices', iconName: 'MsExcel' },
    ],
  },
  {
    id: 'prompt-engineering',
    category: 'Prompt Engineering & AI',
    headline: 'LLM Workflow Orchestration & Synthetic Data',
    accentColor: 'violet',
    tools: [
      { name: 'Gemini AI', badge: 'Multimodal Agents & RAG', iconName: 'Gemini' },
      { name: 'ChatGPT', badge: 'Reasoning & Architecture', iconName: 'OpenAi' },
      { name: 'Cursor AI', badge: 'In-Editor Agent Coding', iconName: 'Cursor' },
    ],
  },
  {
    id: 'networking',
    category: 'Networking & Infrastructure',
    headline: 'Enterprise Routing & Topologies',
    accentColor: 'cyan',
    tools: [
      { name: 'Cisco Packet Tracer', badge: 'CCNA Routing & VLANs', iconName: 'Cisco' },
    ],
  },
];
