import { eq } from "drizzle-orm";
import { db } from "@/db";
import { experiences, experienceTechStack, educations } from "@/db/schema";

// 날짜 문자열(YYYY-MM-DD)을 "YYYY.MM" 형태로 변환
function formatDate(date: string | null): string {
  if (!date) return "현재";
  const [year, month] = date.split("-");
  return `${year}.${month}`;
}

export type ExperienceRow = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
};

export type EducationRow = {
  id: string;
  school: string;
  major: string;
  degree: string;
  period: string;
  description: string | null;
};

export async function getExperiences(): Promise<ExperienceRow[]> {
  const rows = await db
    .select()
    .from(experiences)
    .orderBy(experiences.sortOrder);

  const techs = await db.select().from(experienceTechStack);

  return rows.map((exp) => ({
    id: exp.id,
    company: exp.company,
    role: exp.role,
    period: `${formatDate(exp.startDate)} — ${formatDate(exp.endDate)}`,
    description: exp.description,
    techStack: techs
      .filter((t) => t.experienceId === exp.id)
      .map((t) => t.tech),
  }));
}

export async function getEducations(): Promise<EducationRow[]> {
  const rows = await db
    .select()
    .from(educations)
    .orderBy(educations.sortOrder);

  return rows.map((edu) => ({
    id: edu.id,
    school: edu.school,
    major: edu.major,
    degree: edu.degree,
    period: `${formatDate(edu.startDate)} — ${formatDate(edu.endDate)}`,
    description: edu.description,
  }));
}
