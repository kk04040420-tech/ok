# ok — 포트폴리오 사이트

## 프로젝트 개요
루스의 개인 브랜딩 포트폴리오 사이트. Next.js 16 + Tailwind CSS v4로 만들었고 Vercel에 배포 예정.
섹션 구성: About / Projects / Skills / Contact. 다크/라이트 모드 토글 지원.

## 기술 스택
- Next.js 16.2.6 (App Router, Turbopack)
- Tailwind CSS v4
- Framer Motion v12 — 스크롤 애니메이션, 호버 효과
- next-themes — 다크/라이트 모드
- lucide-react — 아이콘
- TypeScript
- Vercel 배포

## 폴더 구조
```
src/
├── app/              — 라우팅 (layout.tsx, page.tsx, globals.css)
├── components/
│   ├── layout/       — Navbar
│   ├── providers/    — ThemeProvider
│   ├── sections/     — HeroSection, ProjectsSection, SkillsSection, ContactSection
│   └── ui/           — ProjectCard, SkillBadge, ThemeToggle, SectionTitle, GithubIcon
├── data/             — personal.ts, projects.ts, skills.ts (내용 교체 여기서)
└── types/            — index.ts (Project, Skill, PersonalInfo 타입)
```

## 자주 쓰는 명령어
- `npm run dev` — 개발 서버 시작 (http://localhost:3000)
- `npm run build` — 배포용 빌드

## 콘텐츠 수정 방법
- 개인 정보 (이름, 소개, 이메일, GitHub): `src/data/personal.ts`
- 프로젝트 목록: `src/data/projects.ts`
- 기술 스택 목록: `src/data/skills.ts`

## 주의사항
- Tailwind v4는 `tailwind.config.ts` 없이 CSS에서 설정함 (`globals.css`의 `@custom-variant dark` 참고)
- lucide-react v1에는 GitHub 브랜드 아이콘 없음 → `src/components/ui/GithubIcon.tsx` 인라인 SVG 사용
- Framer Motion 사용 컴포넌트는 반드시 `"use client"` 선언
- ThemeToggle은 SSR 하이드레이션 방지를 위해 mounted 전 빈 div 반환
- `public/` 폴더 이미지는 함부로 삭제하지 마세요
- 배포는 항상 main 브랜치에서 해요

## 코딩 스타일
- 컴포넌트 이름은 한국어 주석으로 설명해줘요
- 코드 설명은 항상 한국어로 해줘요
