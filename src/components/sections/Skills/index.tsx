import { SKILL_CATEGORIES } from '@/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>SKILLS</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
