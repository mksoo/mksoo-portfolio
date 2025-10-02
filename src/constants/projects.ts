import { Project } from '@/types';

export const PROJECTS: Project[] = [
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
