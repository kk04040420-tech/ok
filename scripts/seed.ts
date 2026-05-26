import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import {
  experiences,
  experienceTechStack,
  educations,
} from "../src/db/schema";

const client = postgres(process.env.DATABASE_URL!, { prepare: false });
const db = drizzle(client);

async function seed() {
  console.log("🌱 시드 데이터 삽입 시작...");

  // 기존 데이터 초기화
  await db.delete(experienceTechStack);
  await db.delete(experiences);
  await db.delete(educations);
  console.log("✓ 기존 데이터 초기화");

  // 경력 삽입
  const [exp1] = await db.insert(experiences).values({
    company: "OO 회사",
    role: "Frontend Developer",
    startDate: "2023-03-01",
    endDate: null,
    description:
      "Next.js 기반의 웹 서비스를 개발 및 유지보수하였습니다. 팀 내 UI 컴포넌트 라이브러리를 구축하고, 성능 최적화를 통해 페이지 로드 속도를 개선했습니다.",
    sortOrder: 0,
  }).returning();

  const [exp2] = await db.insert(experiences).values({
    company: "OO 스타트업",
    role: "Frontend Intern",
    startDate: "2022-07-01",
    endDate: "2022-12-31",
    description:
      "React를 활용한 대시보드 개발에 참여하였습니다. 사용자 피드백을 반영한 UI 개선 작업을 주도적으로 진행했습니다.",
    sortOrder: 1,
  }).returning();

  console.log("✓ 경력 2건 삽입");

  // 경력 기술 스택 삽입
  await db.insert(experienceTechStack).values([
    { experienceId: exp1.id, tech: "Next.js" },
    { experienceId: exp1.id, tech: "TypeScript" },
    { experienceId: exp1.id, tech: "Tailwind CSS" },
  ]);

  await db.insert(experienceTechStack).values([
    { experienceId: exp2.id, tech: "React" },
    { experienceId: exp2.id, tech: "JavaScript" },
    { experienceId: exp2.id, tech: "Styled Components" },
  ]);

  console.log("✓ 경력 기술 스택 6건 삽입");

  // 학력 삽입
  await db.insert(educations).values({
    school: "OO대학교",
    major: "컴퓨터공학과",
    degree: "학사",
    startDate: "2019-03-01",
    endDate: "2023-02-28",
    description:
      "전공 수업과 프로젝트를 통해 소프트웨어 개발 기초를 쌓았습니다.",
    sortOrder: 0,
  });

  console.log("✓ 학력 1건 삽입");
  console.log("🎉 시드 완료!");

  await client.end();
}

seed().catch((e) => {
  console.error("❌ 시드 실패:", e);
  process.exit(1);
});
