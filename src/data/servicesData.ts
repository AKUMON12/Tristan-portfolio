import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development',
    description: 'Dynamic, production-ready web applications built with Node.js, Next.js, and relational databases.',
    badge: 'Core Expertise',
    deliverables: ['Next.js Apps', 'REST APIs', 'PostgreSQL / Supabase', 'Secure Auth'],
    iconName: 'Code',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Frontend Engineering',
    description: 'High-contrast, responsive interfaces engineered with Tailwind CSS, glassmorphism, and fluid animations.',
    badge: 'Design First',
    deliverables: ['Figma Prototypes', 'Tailwind Systems', 'Mobile-First', 'WCAG a11y'],
    iconName: 'Palette',
  },
  {
    id: 'ai-integrations',
    title: 'AI & Chatbot Integrations',
    description: 'Supercharge web workflows with Retrieval-Augmented Generation (RAG) and Gemini LLM integrations.',
    badge: 'Emerging Tech',
    deliverables: ['RAG Pipelines', 'AI Chatbots', 'Multimodal APIs', 'Prompt Design'],
    iconName: 'Bot',
  },
  {
    id: 'iot-hardware',
    title: 'IoT & Microcontroller Systems',
    description: 'Hardware firmware development and real-time sensor telemetry dashboards using ESP32 and Arduino.',
    badge: 'Hardware & IoT',
    deliverables: ['ESP32 Firmware', 'Sensor Telemetry', 'Circuit Design', 'Tinkercad'],
    iconName: 'Cpu',
  },
  {
    id: 'qa-technical-writing',
    title: 'QA & Technical Documentation',
    description: 'Structured software testing, comprehensive API documentation, and clear system architecture guides.',
    badge: 'Quality Assurance',
    deliverables: ['Test Matrices', 'API Docs', 'System SRS', 'User Manuals'],
    iconName: 'FileCheck',
  },
  {
    id: 'networking-devops',
    title: 'Deployment & Network Setup',
    description: 'Automated CI/CD deployment to Vercel/Railway with secure routing based on Cisco CCNAv7 principles.',
    badge: 'Infrastructure',
    deliverables: ['Vercel / Railway', 'Custom Domains & SSL', 'Packet Tracer', 'VLAN Config'],
    iconName: 'Network',
  },
];
