export interface ProjectCaseStudy {
  problem: string;
  roleAndApproach: string;
  keyChallenge: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Freelance' | 'Capstone' | 'Academic' | 'Personal' | 'IoT/AI';
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  deploymentDomain?: string;
  deploymentPlatform?: 'Vercel' | 'Railway' | 'GitHub Pages' | 'Self-Hosted' | 'Firebase';
  branch?: string;
  deploymentStatus?: 'Ready' | 'Production' | 'Live';
  caseStudy: ProjectCaseStudy;
}

export interface SkillItem {
  name: string;
  proficiency: number;
  icon?: string;
  highlight?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  deliverables: string[];
  iconName: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  code?: string;
  badge: string;
  description: string;
  link?: string;
}
