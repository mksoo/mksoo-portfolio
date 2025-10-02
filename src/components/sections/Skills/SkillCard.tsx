import { SkillCategory } from '@/types';

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-gray-500"></div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg flex items-center justify-center text-white text-xl">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="flex items-center justify-between">
            <span className="font-medium text-gray-700">{skill.name}</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    dotIndex < skill.level ? 'bg-amber-500' : 'bg-gray-200'
                  }`}
                  aria-label={`레벨 ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
