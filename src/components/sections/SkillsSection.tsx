"use client";

// 기술 스택 섹션 컴포넌트 — 카테고리별로 그룹화
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

const CATEGORIES: { key: Skill["category"]; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "infra", label: "Infra / DevOps" },
  { key: "etc", label: "Etc" },
];

export function SkillsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Skills" subtitle="사용하는 기술들입니다" />
        <div className="space-y-8">
          {CATEGORIES.map(({ key, label }) => {
            const categorySkills = skills.filter((s) => s.category === key);
            if (categorySkills.length === 0) return null;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
