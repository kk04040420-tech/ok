"use client";

// 경력 섹션 컴포넌트 — 타임라인 형태
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900/40">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Experience" subtitle="걸어온 커리어입니다" />
        <div className="relative">
          {/* 타임라인 세로선 */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-violet-100 dark:bg-slate-700" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative pl-14"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* 타임라인 아이콘 */}
                <div className="absolute left-0 w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-400 dark:text-violet-300">
                  <Briefcase size={16} />
                </div>

                <div className="bg-violet-50/60 dark:bg-slate-800/50 rounded-2xl p-5 border border-violet-100 dark:border-slate-700/50">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-violet-500 dark:text-violet-300 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 bg-white dark:bg-slate-700 px-2.5 py-1 rounded-full border border-gray-100 dark:border-slate-600 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">
                    {exp.description}
                  </p>
                  {exp.techStack && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-xs rounded-full bg-white dark:bg-slate-700 text-violet-500 dark:text-violet-300 border border-violet-100 dark:border-violet-800/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
