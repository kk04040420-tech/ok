"use client";

// 기술 스택 배지 컴포넌트 — 카테고리별 색상 구분
import { motion } from "framer-motion";
import { Skill } from "@/types";

const categoryColors: Record<Skill["category"], string> = {
  frontend: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  backend: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  infra: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  etc: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
};

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <motion.span
      className={`px-3 py-1.5 rounded-full text-sm font-medium ${categoryColors[skill.category]}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
    >
      {skill.name}
    </motion.span>
  );
}
