import { notFound } from "next/navigation";
import Link from "next/link";
import { getEducationById } from "@/db/queries";
import { updateEducationAction } from "@/app/actions/educations";
import { FormField, TextAreaField } from "@/components/ui/FormField";

export default async function EditEducationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const edu = await getEducationById(id);
  if (!edu) notFound();

  const action = updateEducationAction.bind(null, id);

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-6">학력 수정</h1>
      <form action={action} className="space-y-5">
        <FormField label="학교명" name="school" required defaultValue={edu.school} />
        <div className="grid grid-cols-2 gap-4">
          <FormField label="전공" name="major" required defaultValue={edu.major} />
          <FormField label="학위" name="degree" required defaultValue={edu.degree} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="입학일" name="startDate" type="date" required defaultValue={edu.startDate} />
          <FormField label="졸업일" name="endDate" type="date" defaultValue={edu.endDate ?? ""} hint="재학 중이면 비워두세요" />
        </div>
        <TextAreaField
          label="설명"
          name="description"
          defaultValue={edu.description ?? ""}
          rows={3}
        />
        <FormField label="정렬 순서" name="sortOrder" type="number" defaultValue={String(edu.sortOrder)} />

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-violet-400 hover:bg-violet-500 text-white rounded-xl text-sm font-medium transition-colors"
          >
            저장
          </button>
          <Link
            href="/admin/educations"
            className="px-5 py-2.5 border border-violet-200 dark:border-slate-600 text-gray-600 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-violet-50 dark:hover:bg-slate-700 transition-colors"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  );
}
