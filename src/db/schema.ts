import {
  pgTable,
  uuid,
  text,
  date,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

// 경력
export const experiences = pgTable("experiences", {
  id:          uuid("id").primaryKey().defaultRandom(),
  company:     text("company").notNull(),
  role:        text("role").notNull(),
  startDate:   date("start_date").notNull(),
  endDate:     date("end_date"),              // null = 현재 재직 중
  description: text("description").notNull(),
  sortOrder:   integer("sort_order").notNull().default(0),
  createdAt:   timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// 경력 기술 스택
export const experienceTechStack = pgTable("experience_tech_stack", {
  id:           uuid("id").primaryKey().defaultRandom(),
  experienceId: uuid("experience_id").notNull().references(() => experiences.id, { onDelete: "cascade" }),
  tech:         text("tech").notNull(),
});

// 학력
export const educations = pgTable("educations", {
  id:          uuid("id").primaryKey().defaultRandom(),
  school:      text("school").notNull(),
  major:       text("major").notNull(),
  degree:      text("degree").notNull(),
  startDate:   date("start_date").notNull(),
  endDate:     date("end_date"),              // null = 재학 중
  description: text("description"),
  sortOrder:   integer("sort_order").notNull().default(0),
  createdAt:   timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// 프로젝트
export const projects = pgTable("projects", {
  id:          uuid("id").primaryKey().defaultRandom(),
  title:       text("title").notNull(),
  description: text("description").notNull(),
  githubUrl:   text("github_url"),
  liveUrl:     text("live_url"),
  imageUrl:    text("image_url"),
  sortOrder:   integer("sort_order").notNull().default(0),
  createdAt:   timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// 프로젝트 기술 스택
export const projectTechStack = pgTable("project_tech_stack", {
  id:        uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
  tech:      text("tech").notNull(),
});

// 기술 스택
export const skills = pgTable("skills", {
  id:        uuid("id").primaryKey().defaultRandom(),
  name:      text("name").notNull(),
  category:  text("category").notNull(),     // frontend | backend | infra | etc
  sortOrder: integer("sort_order").notNull().default(0),
});
