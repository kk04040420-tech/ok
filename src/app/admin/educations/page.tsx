import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { getEducations } from "@/db/queries";
import { DeleteEducationButton } from "@/components/ui/DeleteButton";

export default async function EducationsAdminPage() {
  const data = await getEducations();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">학력 관리</h1>
        <Link
          href="/admin/educations/new"
          className="flex items-center gap-1.5 px-4 py-2 bg-violet-400 hover:bg-violet-500 text-white rounded-xl text-sm font-medium transition-colors"
        >
          <Plus size={15} /> 추가
        </Link>
      </div>

      <div className="space-y-3">
        {data.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-10">학력 데이터가 없습니다.</p>
        )}
        {data.map((edu) => (
          <div
            key={edu.id}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-violet-100 dark:border-slate-700 flex items-start justify-between gap-4"
          >
            <div>
              <p className="font-medium text-gray-800 dark:text-white">{edu.school}</p>
              <p className="text-sm text-rose-400 dark:text-rose-300">{edu.degree} · {edu.major}</p>
              <p className="text-xs text-gray-400 mt-0.5">{edu.period}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/admin/educations/${edu.id}/edit`}
                className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border border-violet-200 dark:border-slate-600 text-violet-500 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-slate-700 transition-colors"
              >
                <Pencil size={12} /> 수정
              </Link>
              <DeleteEducationButton id={edu.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
