import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "OO 회사",
    role: "Frontend Developer",
    period: "2023.03 — 현재",
    description:
      "Next.js 기반의 웹 서비스를 개발 및 유지보수하였습니다. 팀 내 UI 컴포넌트 라이브러리를 구축하고, 성능 최적화를 통해 페이지 로드 속도를 개선했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    company: "OO 스타트업",
    role: "Frontend Intern",
    period: "2022.07 — 2022.12",
    description:
      "React를 활용한 대시보드 개발에 참여하였습니다. 사용자 피드백을 반영한 UI 개선 작업을 주도적으로 진행했습니다.",
    techStack: ["React", "JavaScript", "Styled Components"],
  },
];
