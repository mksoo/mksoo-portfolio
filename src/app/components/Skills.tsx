export default function Skills() {
  const skillCategories = [
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

  return (
    <section id="skills" className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16 relative">
        SKILLS
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
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
                          dotIndex < skill.level 
                            ? 'bg-amber-500'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
