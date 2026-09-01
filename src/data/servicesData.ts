import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development',
    description: 'End-to-end development of dynamic, lightning-fast web applications with Node.js, Next.js, and modern relational databases (PostgreSQL/Supabase).',
    badge: 'Core Expertise',
    deliverables: ['Custom Web Applications', 'RESTful API Engineering', 'Database Architecture', 'Secure Auth & Session Flows'],
    iconName: 'Code',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Frontend Engineering',
    description: 'High-contrast, accessible, and responsive user interfaces with smooth micro-interactions, dark/light aesthetics, and fluid modern layouts.',
    badge: 'Design First',
    deliverables: ['Figma Prototyping & Wireframes', 'Tailwind CSS Component Systems', 'Mobile-First Responsive Layouts', 'WCAG Accessibility Standards'],
    iconName: 'Palette',
  },
  {
    id: 'ai-integrations',
    title: 'AI & Chatbot Integrations',
    description: 'Supercharge your web apps with modern Generative AI, Retrieval-Augmented Generation (RAG), and intelligent assistants using Gemini APIs.',
    badge: 'Emerging Tech',
    deliverables: ['RAG Knowledge Base Pipelines', 'Intelligent Web Chatbots', 'Multimodal Document Analysis', 'Prompt Optimization'],
    iconName: 'Bot',
  },
  {
    id: 'iot-hardware',
    title: 'IoT & Smart Device Prototyping',
    description: 'Bridge hardware and software with custom Arduino and ESP32 microcontroller systems for sensor monitoring and edge telemetry.',
    badge: 'Hardware & IoT',
    deliverables: ['ESP32 & Arduino Firmware', 'Sensor Telemetry Dashboards', 'Hardware Prototyping', 'Tinkercad Schematic Design'],
    iconName: 'Cpu',
  },
  {
    id: 'qa-technical-writing',
    title: 'Technical Writing & QA Verification',
    description: 'Ensure rock-solid software quality through rigorous manual/functional testing, clear API documentation, and comprehensive system user guides.',
    badge: 'Quality Assurance',
    deliverables: ['System Documentation & SRS', 'Functional Test Matrix Creation', 'API Endpoint Documentation', 'User Manuals & SOPs'],
    iconName: 'FileCheck',
  },
  {
    id: 'networking-devops',
    title: 'Network Setup & Cloud Deployment',
    description: 'Deploy web applications to modern PaaS platforms (Vercel, Railway) with automated CI/CD and secure routing based on Cisco CCNAv7 principles.',
    badge: 'Infrastructure',
    deliverables: ['Vercel & Railway Deployment', 'Custom Domain & SSL Setup', 'Cisco Packet Tracer Topologies', 'VLAN & Router Configurations'],
    iconName: 'Network',
  },
];
