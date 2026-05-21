import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "포트폴리오 사이트",
    description:
      "Next.js와 Tailwind CSS로 만든 개인 포트폴리오. 다크/라이트 모드와 부드러운 스크롤 애니메이션을 지원합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yoursite.vercel.app",
  },
  {
    id: "project-2",
    title: "프로젝트 이름",
    description:
      "프로젝트에 대한 간략한 설명입니다. 어떤 문제를 해결했는지 한두 문장으로 적어주세요.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: "project-3",
    title: "또 다른 프로젝트",
    description:
      "세 번째 프로젝트 설명입니다. 실제 프로젝트 내용으로 교체해주세요.",
    techStack: ["Python", "FastAPI", "Docker"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.example.com",
  },
];
