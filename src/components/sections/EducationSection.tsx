"use client";

// 학력 섹션 컴포넌트 — 타임라인 형태
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { educations } from "@/data/education";

export function EducationSection() {
  return (
    <section className="py-24 px-6 bg-violet-50/60 dark:bg-slate-900/60">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Education" subtitle="학력 사항입니다" />
        <div className="relative">
          {/* 타임라인 세로선 */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-violet-100 dark:bg-slate-700" />

          <div className="space-y-8">
            {educations.map((edu, i) => (
              <motion.div
                key={edu.id}
                className="relative pl-14"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* 타임라인 아이콘 */}
                <div className="absolute left-0 w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-400 dark:text-rose-300">
                  <GraduationCap size={16} />
                </div>

                <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-5 border border-violet-100 dark:border-slate-700/50">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white">
                        {edu.school}
                      </h3>
                      <p className="text-sm text-rose-400 dark:text-rose-300 font-medium">
                        {edu.degree} · {edu.major}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 bg-violet-50 dark:bg-slate-700 px-2.5 py-1 rounded-full border border-violet-100 dark:border-slate-600 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">
                      {edu.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
