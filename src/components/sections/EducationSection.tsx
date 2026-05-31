"use client";

// 학력 섹션 컴포넌트 — DB에서 받은 데이터를 타임라인으로 렌더링
import { motion } from "framer-motion";
import { GraduationCap, Plus, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { deleteEducationAction } from "@/app/actions/educations";
import type { EducationRow } from "@/db/queries";

interface Props {
  data: EducationRow[];
}

export function EducationSection({ data }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    startTransition(async () => {
      await deleteEducationAction(id);
      router.refresh();
    });
  };

  return (
    <section className="py-24 px-6 bg-violet-50/60 dark:bg-slate-900/60">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle title="Education" subtitle="학력 사항입니다" />
          <a
            href="/admin/educations/new"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-100 dark:bg-rose-900/20 text-rose-400 dark:text-rose-300 rounded-xl text-sm font-medium hover:bg-rose-200 dark:hover:bg-rose-900/40 transition-colors shrink-0 self-start mt-1"
          >
            <Plus size={14} /> 추가
          </a>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-violet-100 dark:bg-slate-700" />
          <div className="space-y-8">
            {data.map((edu, i) => (
              <motion.div
                key={edu.id}
                className="relative pl-14"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="absolute left-0 w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-400 dark:text-rose-300">
                  <GraduationCap size={16} />
                </div>
                <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-5 border border-violet-100 dark:border-slate-700/50">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white">{edu.school}</h3>
                      <p className="text-sm text-rose-400 dark:text-rose-300 font-medium">
                        {edu.degree} · {edu.major}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 dark:text-gray-500 bg-violet-50 dark:bg-slate-700 px-2.5 py-1 rounded-full border border-violet-100 dark:border-slate-600 whitespace-nowrap">
                        {edu.period}
                      </span>
                      <a
                        href={`/admin/educations/${edu.id}/edit`}
                        className="p-1.5 rounded-lg text-gray-300 dark:text-slate-600 hover:text-violet-400 dark:hover:text-violet-400 transition-colors"
                        title="수정"
                      >
                        <Pencil size={13} />
                      </a>
                      <button
                        onClick={() => handleDelete(edu.id)}
                        disabled={pending}
                        className="p-1.5 rounded-lg text-gray-300 dark:text-slate-600 hover:text-rose-400 dark:hover:text-rose-400 transition-colors disabled:opacity-40"
                        title="삭제"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
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
