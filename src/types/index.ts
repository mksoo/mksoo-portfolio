export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

export interface Career {
  company: string;
  period: string;
  logo: string;
  description: string;
  tech: string[];
}

export interface Project {
  id: number;
  category: 'tainai' | 'personal' | 'all';
  title: string;
  date: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export type FilterType = 'all' | 'tainai' | 'personal';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Particle {
  left: number;
  top: number;
  delay: number;
  duration: number;
}
