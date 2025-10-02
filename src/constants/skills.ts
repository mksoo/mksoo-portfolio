import { SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: "🌐",
    title: "Mobile & Web",
    skills: [
      { name: "React Native", level: 5 },
      { name: "React", level: 4 },
      { name: "TypeScript", level: 4 },
    ]
  },
  {
    icon: "☁️",
    title: "Backend & Cloud",
    skills: [
      { name: "Firebase", level: 5 },
      { name: "Node.js", level: 3 },
      { name: "Django", level: 3 },
    ]
  },
  {
    icon: "🤖",
    title: "Data & AI",
    skills: [
      { name: "Python", level: 4 },
      { name: "GPT Integration", level: 4 },
      { name: "Data Analysis", level: 3 },
    ]
  }
];
