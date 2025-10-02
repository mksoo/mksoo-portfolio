"use client";

import { useState } from "react";
import Badge from "./common/Badge";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "tainai",
      title: "고객 응대 시스템 리뉴얼",
      date: "2024.11",
      description: "채널톡에서 Zendesk로 고객 응대 시스템 전면 마이그레이션",
      achievements: [
        "응답 시간 50% 단축",
        "티켓 처리 자동화",
        "Native SDK Bridge 개발"
      ],
      tech: ["React Native", "Zendesk SDK", "TypeScript"]
    },
    {
      id: 2,
      category: "tainai",
      title: "일본 오퍼월 시스템",
      date: "2024.08",
      description: "일본 시장 맞춤형 결제 시스템 GMO-tech 오퍼월 통합",
      achievements: [
        "일본 시장 매출 증대",
        "SDK 완벽 통합",
        "실시간 보상 시스템"
      ],
      tech: ["React Native", "GMO SDK", "Firebase"]
    },
    {
      id: 3,
      category: "tainai",
      title: "AI 리뷰 관리 시스템",
      date: "2024.09",
      description: "GPT 기반 앱스토어 리뷰 자동 분석 및 대응 시스템",
      achievements: [
        "부정 리뷰 자동 감지",
        "감정 분석 대시보드",
        "트렌드 분석 리포트"
      ],
      tech: ["GPT", "React Admin", "React Native"]
    },
    {
      id: 4,
      category: "personal",
      title: "식단 관리 서비스 '냠냠'",
      date: "2024.02",
      description: "모두의연구소 AISW 과정 팀프로젝트 리드",
      achievements: [
        "AI 기반 식단 추천",
        "영양소 분석",
        "팀 리더십 발휘"
      ],
      tech: ["React Native", "FastAPI", "ML"]
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16 relative">
        PROJECTS
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full"></div>
      </h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {[
          { key: "all", label: "All" },
          { key: "tainai", label: "TainAI" },
          { key: "personal", label: "Personal" }
        ].map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === filter.key
                ? 'bg-gradient-to-r from-gray-700 to-gray-500 text-white'
                : 'bg-white border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Project Image Placeholder */}
            <div className="w-full h-48 bg-gradient-to-r from-gray-700 to-gray-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-50">
                  {project.title.charAt(0)}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <span className="text-gray-500 text-sm">{project.date}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2 last:mb-0">
                    <span className="text-gray-700 font-bold">✓</span>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
