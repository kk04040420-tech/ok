"use client";

// 기술 스택 배지 컴포넌트 — 파스텔 카테고리별 색상 구분
import { motion } from "framer-motion";
import { Skill } from "@/types";

const categoryColors: Record<Skill["category"], string> = {
  frontend: "bg-violet-50 dark:bg-violet-900/20 text-violet-500 dark:text-violet-300 border-violet-100 dark:border-violet-800/30",
  backend:  "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/30",
  infra:    "bg-sky-50 dark:bg-sky-900/20 text-sky-500 dark:text-sky-300 border-sky-100 dark:border-sky-800/30",
  etc:      "bg-rose-50 dark:bg-rose-900/20 text-rose-400 dark:text-rose-300 border-rose-100 dark:border-rose-800/30",
};

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <motion.span
      className={`px-3 py-1.5 rounded-full text-sm font-medium border ${categoryColors[skill.category]}`}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.15 }}
    >
      {skill.name}
    </motion.span>
  );
}
