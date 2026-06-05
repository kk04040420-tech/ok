"use client";

// 경력 섹션 컴포넌트 — 다크 타임라인 카드 스타일
import { motion } from "framer-motion";
import { Briefcase, Plus, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { deleteExperienceAction } from "@/app/actions/experiences";
import type { ExperienceRow } from "@/db/queries";

interface Props {
  data: ExperienceRow[];
}

export function ExperienceSection({ data }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    startTransition(async () => {
      await deleteExperienceAction(id);
      router.refresh();
    });
  };

  return (
    <section className="py-28 px-6 bg-white dark:bg-[#0d0d18]">
      <div className="max-w-3xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-start justify-between mb-16">
          <SectionTitle title="Experience" subtitle="걸어온 커리어" />
          <a
            href="/admin/experiences/new"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-xl text-sm font-medium hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-colors border border-violet-200 dark:border-violet-500/20 shrink-0 mt-1"
          >
            <Plus size={14} /> 추가
          </a>
        </div>

        {/* 타임라인 */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/15 to-transparent" />

          <div className="space-y-6">
            {data.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative pl-14"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* 타임라인 아이콘 */}
                <div className="absolute left-0 w-10 h-10 rounded-full bg-violet-50 dark:bg-[#1a1228] border border-violet-200 dark:border-violet-500/30 flex items-center justify-center text-violet-500 dark:text-violet-400 shadow-sm">
                  <Briefcase size={15} />
                </div>

                {/* 카드 */}
                <div className="bg-zinc-50 dark:bg-[#13131f] rounded-2xl p-5 border border-zinc-100 dark:border-white/[0.07] hover:border-violet-200 dark:hover:border-violet-500/20 transition-colors group">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 dark:text-slate-500 bg-white dark:bg-[#09090f] px-2.5 py-1 rounded-full border border-zinc-200 dark:border-white/[0.07] font-mono whitespace-nowrap">
                        {exp.period}
                      </span>
                      <a
                        href={`/admin/experiences/${exp.id}/edit`}
                        className="p-1.5 rounded-lg text-gray-300 dark:text-slate-700 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                        title="수정"
                      >
                        <Pencil size={13} />
                      </a>
                      <button
                        onClick={() => handleDelete(exp.id)}
                        disabled={pending}
                        className="p-1.5 rounded-lg text-gray-300 dark:text-slate-700 hover:text-red-400 dark:hover:text-red-400 transition-colors disabled:opacity-40"
                        title="삭제"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mt-3">
                    {exp.description}
                  </p>

                  {exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-xs rounded-full bg-white dark:bg-[#09090f] text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20 font-medium"
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
