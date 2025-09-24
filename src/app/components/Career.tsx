"use client";

import { useEffect, useState } from "react";

export default function Career() {
  const [counters, setCounters] = useState({
    responseTime: 0,
    countries: 0,
    projects: 0,
    experience: 0
  });

  const careerData = [
    {
      company: "TainAI",
      period: "2024.05 - 현재",
      logo: "T",
      description: "AI 채팅 앱 '러비더비' React Native 풀스택 개발\n고객 응대 시스템 리뉴얼, 일본 시장 결제 시스템 구축",
      tech: ["React Native", "TypeScript", "Firebase", "LLM"]
    },
    {
      company: "FLES",
      period: "2022.01 - 2024.05",
      logo: "F",
      description: "데이터 사이언티스트로 KPI 대시보드 제작\n고려대학교와 AI 공동연구 (자연어처리, 추천시스템)",
      tech: ["Python", "Tableau", "NLP", "ML"]
    },
    {
      company: "에듀포미",
      period: "2020.10 - 2021.06",
      logo: "E",
      description: "영유아 학부모 대상 성교육 플랫폼 스타트업 창업\n예비창업패키지 선정 (4,000만원 규모)",
      tech: ["창업", "기획", "MVP"]
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const targets = { responseTime: 50, countries: 5, projects: 4, experience: 3 };
      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          responseTime: Math.floor(targets.responseTime * progress),
          countries: Math.floor(targets.countries * progress),
          projects: Math.floor(targets.projects * progress),
          experience: Math.floor(targets.experience * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('career-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="career" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-black text-center mb-16 relative">
          CAREER
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full"></div>
        </h2>

        <div id="career-section" className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-700 to-gray-500 hidden md:block"></div>

          <div className="space-y-12">
            {careerData.map((job, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center relative`}>
                <div className="w-full md:w-1/2 px-8">
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
                        <span className="text-gray-500 text-sm">{job.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-500 text-white text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-gray-700 rounded-full z-10 hidden md:block"></div>
              </div>
            ))}
          </div>

          {/* Impact Numbers */}
          {/* <div className="mt-16 bg-gradient-to-r from-gray-700 to-gray-500 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-black mb-2">{counters.responseTime}%</div>
                <div className="text-sm opacity-90">응답시간 단축</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">{counters.countries}</div>
                <div className="text-sm opacity-90">서비스 국가</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">{counters.projects}</div>
                <div className="text-sm opacity-90">주요 프로젝트</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">{counters.experience}</div>
                <div className="text-sm opacity-90">년 경력</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
