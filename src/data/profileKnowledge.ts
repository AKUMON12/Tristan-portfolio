import { projects } from './projectsData';
import { skillCategories } from './skillsData';
import { certifications } from './certsData';
import { services } from './servicesData';
import { toolsData } from './toolsData';

/**
 * Core personal profile & background details not stored in the other data files.
 * Edit or expand this object anytime to update what the chatbot knows about you.
 */
export const personalProfile = {
  fullName: 'Tristan Jesus V. Elvinia',
  aliases: ['Akumon', 'Tan'],
  role: 'Frontend Developer, Web Designer & Full-Stack IT Graduate',
  location: 'Cebu City, Philippines (UTC+8)',
  availability:
    'Open for full-time IT roles, frontend/full-stack roles, contract work, and freelance web development projects.',
  summary:
    'Information Technology graduate specializing in frontend development, responsive UI/UX design, and interactive web experiences. Combines design-first aesthetics (such as Midnight Cyber-Glass UI) with modern frontend and backend engineering using React, Next.js, TypeScript, Node.js, PostgreSQL, and Supabase.',
  education: {
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    school: 'University of Cebu Main Campus',
    graduated: 'December 2025',
    location: 'Cebu City, Philippines',
    highlights: [
      '4th-year Capstone Project: ChronoNav Campus Navigation & Scheduler (earned top departmental recognition for UI/UX excellence)',
    ],
  },
  experience: [
    {
      role: 'Chat Support Specialist',
      company: 'Eperformax (Shopee Account)',
      period: '2024',
      highlights: [
        'Resolved high-volume e-commerce logistics and account technical inquiries.',
        'Maintained top Customer Satisfaction (CSAT) metrics through rapid issue diagnosis and clear communication.',
      ],
    },
  ],
  accolades: [
    'Cisco Certified — CCNAv7: Switching, Routing, and Wireless Essentials (SRWE)',
    'Cisco Verified — Introduction to Cybersecurity',
    'ChronoNav Capstone Recognition for UI/UX Excellence',
    '5+ Production Web Applications Deployed (Vercel, Railway, GitHub Pages)',
  ],
  contact: {
    email: 'tjelvinia@gmail.com',
    phone: '+63 992 857 1488',
    github: 'https://github.com/AKUMON12',
    linkedin: 'https://www.linkedin.com/in/tristan-jesus-elvinia-3a11863a3',
    portfolio: 'https://elvinia-portfolio.vercel.app',
    resumePath: '/assets/Tristan_Elvinia_Resume.pdf',
  },
  // Add any extra personal details you want the chatbot to share (hobbies, fun facts, work style, FAQs)
  extraNotes: [
    'Enjoys crafting high-contrast, interactive web interfaces and experimenting with AI/RAG workflows and IoT prototyping.',
    'Visitors can view or download Tristan’s official resume directly from the Resume modal on this portfolio.',
    'For project inquiries, collaborations, or job offers, visitors can use the Contact form on the site or email tjelvinia@gmail.com.',
  ],
};

/**
 * Builds the complete, formatted knowledge base string injected into the chatbot's system prompt.
 * Automatically stays in sync with projectsData, skillsData, certsData, servicesData, and toolsData.
 */
export function buildTristanKnowledgeBase(): string {
  const projectsSection = projects
    .map(
      (p) =>
        `- **${p.title}** (${p.category} | ${p.deploymentStatus})
  - Tagline: ${p.tagline}
  - Description: ${p.description}
  - Tech Stack: ${p.techStack.join(', ')}
  - Live URL: ${p.liveUrl}
  - GitHub: ${p.githubUrl}
  - Problem: ${p.caseStudy.problem}
  - Role & Approach: ${p.caseStudy.roleAndApproach}
  - Key Challenge: ${p.caseStudy.keyChallenge}
  - Outcome: ${p.caseStudy.outcome}`
    )
    .join('\n\n');

  const skillsSection = skillCategories
    .map(
      (cat) =>
        `- **${cat.title}** (${cat.description}):\n` +
        cat.skills
          .map((s) => `  - ${s.name} (${s.proficiency}%): ${s.highlight}`)
          .join('\n')
    )
    .join('\n\n');

  const toolsSection = toolsData
    .map(
      (cat) =>
        `- **${cat.category}**: ${cat.tools
          .map((t) => (t.badge ? `${t.name} (${t.badge})` : t.name))
          .join(', ')}`
    )
    .join('\n');

  const certsSection = certifications
    .map(
      (c) =>
        `- **${c.title}** — ${c.issuer} (${c.date}, Code: ${c.code}): ${c.description}`
    )
    .join('\n');

  const servicesSection = services
    .map(
      (s) =>
        `- **${s.title}** [${s.badge}]: ${s.description} Deliverables: ${s.deliverables.join(', ')}.`
    )
    .join('\n');

  const experienceSection = personalProfile.experience
    .map(
      (e) =>
        `- **${e.role}** at ${e.company} (${e.period}):\n` +
        e.highlights.map((h) => `  - ${h}`).join('\n')
    )
    .join('\n');

  return `# TRISTAN JESUS V. ELVINIA — PORTFOLIO KNOWLEDGE BASE

## Identity & Summary
- Full Name: ${personalProfile.fullName}
- Aliases / Handles: ${personalProfile.aliases.join(', ')}
- Role: ${personalProfile.role}
- Location: ${personalProfile.location}
- Availability: ${personalProfile.availability}
- Bio: ${personalProfile.summary}

## Education
- Degree: ${personalProfile.education.degree}
- School: ${personalProfile.education.school} (${personalProfile.education.location})
- Graduated: ${personalProfile.education.graduated}
- Highlights: ${personalProfile.education.highlights.join(' | ')}

## Work Experience
${experienceSection}

## Key Accolades
${personalProfile.accolades.map((a) => `- ${a}`).join('\n')}

## Contact & Links
- Email: ${personalProfile.contact.email}
- Phone: ${personalProfile.contact.phone}
- GitHub: ${personalProfile.contact.github}
- LinkedIn: ${personalProfile.contact.linkedin}
- Portfolio URL: ${personalProfile.contact.portfolio}
- Resume: Available via the interactive Resume modal on the portfolio (${personalProfile.contact.resumePath})

## Projects & Case Studies
${projectsSection}

## Skills Matrix
${skillsSection}

## Tools & Tech Stack
${toolsSection}

## Certifications
${certsSection}

## Services Offered
${servicesSection}

## Additional Notes
${personalProfile.extraNotes.map((n) => `- ${n}`).join('\n')}
`;
}
