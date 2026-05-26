import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

// 예시 테이블 — 실제 프로젝트에 맞게 수정하세요
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  createdAt: timestamp("created_at").defaultNow(),
});
