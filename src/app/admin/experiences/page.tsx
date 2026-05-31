import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { getExperiences } from "@/db/queries";
import { DeleteExperienceButton } from "@/components/ui/DeleteButton";

export default async function ExperiencesAdminPage() {
  const data = await getExperiences();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">경력 관리</h1>
        <Link
          href="/admin/experiences/new"
          className="flex items-center gap-1.5 px-4 py-2 bg-violet-400 hover:bg-violet-500 text-white rounded-xl text-sm font-medium transition-colors"
        >
          <Plus size={15} /> 추가
        </Link>
      </div>

      <div className="space-y-3">
        {data.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-10">경력 데이터가 없습니다.</p>
        )}
        {data.map((exp) => (
          <div
            key={exp.id}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-violet-100 dark:border-slate-700 flex items-start justify-between gap-4"
          >
            <div>
              <p className="font-medium text-gray-800 dark:text-white">{exp.role}</p>
              <p className="text-sm text-violet-500 dark:text-violet-300">{exp.company}</p>
              <p className="text-xs text-gray-400 mt-0.5">{exp.period}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/admin/experiences/${exp.id}/edit`}
                className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border border-violet-200 dark:border-slate-600 text-violet-500 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-slate-700 transition-colors"
              >
                <Pencil size={12} /> 수정
              </Link>
              <DeleteExperienceButton id={exp.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
