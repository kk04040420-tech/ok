import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "series-1",
    title: "권경원의 유브갓테크",
    description: "서울경제신문에 연재 중인 테크 시리즈 칼럼입니다.",
    techStack: ["시리즈"],
    liveUrl: "https://m.search.naver.com/search.naver?nso=&query=%EC%9C%A0%EB%B8%8C%EA%B0%93%ED%85%8C%ED%81%AC+site%3Awww.sedaily.com&qvt=0&sm=mtb_pge&ssc=tab.m.all",
  },
  {
    id: "kakao-compliance-1",
    title: "카카오 준법과신뢰위원회 연간보고서",
    description: "카카오 준법과신뢰위원회 연간보고서 작성에 참여하였습니다.",
    techStack: ["보고서"],
    liveUrl: "https://www.kakaocompliance.com/contents/reference_view.html?seq=5956",
    imageUrl: "/kakao-compliance.jpg",
  },
  {
    id: "book-1",
    title: "도시를 짓는 사람들",
    description: "공저. 도시와 공간을 만드는 사람들의 이야기를 담은 책입니다.",
    techStack: ["공저"],
    liveUrl: "https://product.kyobobook.co.kr/detail/S000000478583",
    imageUrl: "/book-city-builders.jpg",
  },
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
