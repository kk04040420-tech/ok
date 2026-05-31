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

export type ExperienceDetail = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  sortOrder: number;
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

export type EducationDetail = {
  id: string;
  school: string;
  major: string;
  degree: string;
  startDate: string;
  endDate: string | null;
  description: string | null;
  sortOrder: number;
};

// ── 경력 조회 ──────────────────────────────────────────

export async function getExperiences(): Promise<ExperienceRow[]> {
  const rows = await db.select().from(experiences).orderBy(experiences.sortOrder);
  const techs = await db.select().from(experienceTechStack);

  return rows.map((exp) => ({
    id: exp.id,
    company: exp.company,
    role: exp.role,
    period: `${formatDate(exp.startDate)} — ${formatDate(exp.endDate)}`,
    description: exp.description,
    techStack: techs.filter((t) => t.experienceId === exp.id).map((t) => t.tech),
  }));
}

export async function getExperienceById(id: string): Promise<ExperienceDetail | null> {
  const [row] = await db.select().from(experiences).where(eq(experiences.id, id));
  if (!row) return null;

  const techs = await db
    .select()
    .from(experienceTechStack)
    .where(eq(experienceTechStack.experienceId, id));

  return {
    id: row.id,
    company: row.company,
    role: row.role,
    startDate: row.startDate,
    endDate: row.endDate ?? null,
    description: row.description,
    sortOrder: row.sortOrder,
    techStack: techs.map((t) => t.tech),
  };
}

// ── 경력 생성/수정/삭제 ────────────────────────────────

export type ExperienceInput = {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  techStack: string[];
  sortOrder?: number;
};

export async function createExperience(input: ExperienceInput): Promise<string> {
  const [row] = await db.insert(experiences).values({
    company: input.company,
    role: input.role,
    startDate: input.startDate,
    endDate: input.endDate,
    description: input.description,
    sortOrder: input.sortOrder ?? 0,
  }).returning({ id: experiences.id });

  if (input.techStack.length > 0) {
    await db.insert(experienceTechStack).values(
      input.techStack.map((tech) => ({ experienceId: row.id, tech }))
    );
  }
  return row.id;
}

export async function updateExperience(id: string, input: ExperienceInput): Promise<void> {
  await db.update(experiences).set({
    company: input.company,
    role: input.role,
    startDate: input.startDate,
    endDate: input.endDate,
    description: input.description,
    sortOrder: input.sortOrder ?? 0,
  }).where(eq(experiences.id, id));

  // 기술 스택 전체 교체
  await db.delete(experienceTechStack).where(eq(experienceTechStack.experienceId, id));
  if (input.techStack.length > 0) {
    await db.insert(experienceTechStack).values(
      input.techStack.map((tech) => ({ experienceId: id, tech }))
    );
  }
}

export async function deleteExperience(id: string): Promise<void> {
  await db.delete(experiences).where(eq(experiences.id, id));
}

// ── 학력 조회 ──────────────────────────────────────────

export async function getEducations(): Promise<EducationRow[]> {
  const rows = await db.select().from(educations).orderBy(educations.sortOrder);

  return rows.map((edu) => ({
    id: edu.id,
    school: edu.school,
    major: edu.major,
    degree: edu.degree,
    period: `${formatDate(edu.startDate)} — ${formatDate(edu.endDate)}`,
    description: edu.description,
  }));
}

export async function getEducationById(id: string): Promise<EducationDetail | null> {
  const [row] = await db.select().from(educations).where(eq(educations.id, id));
  if (!row) return null;

  return {
    id: row.id,
    school: row.school,
    major: row.major,
    degree: row.degree,
    startDate: row.startDate,
    endDate: row.endDate ?? null,
    description: row.description,
    sortOrder: row.sortOrder,
  };
}

// ── 학력 생성/수정/삭제 ────────────────────────────────

export type EducationInput = {
  school: string;
  major: string;
  degree: string;
  startDate: string;
  endDate: string | null;
  description: string | null;
  sortOrder?: number;
};

export async function createEducation(input: EducationInput): Promise<string> {
  const [row] = await db.insert(educations).values({
    school: input.school,
    major: input.major,
    degree: input.degree,
    startDate: input.startDate,
    endDate: input.endDate,
    description: input.description,
    sortOrder: input.sortOrder ?? 0,
  }).returning({ id: educations.id });
  return row.id;
}

export async function updateEducation(id: string, input: EducationInput): Promise<void> {
  await db.update(educations).set({
    school: input.school,
    major: input.major,
    degree: input.degree,
    startDate: input.startDate,
    endDate: input.endDate,
    description: input.description,
    sortOrder: input.sortOrder ?? 0,
  }).where(eq(educations.id, id));
}

export async function deleteEducation(id: string): Promise<void> {
  await db.delete(educations).where(eq(educations.id, id));
}
