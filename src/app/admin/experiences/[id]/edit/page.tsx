import { notFound } from "next/navigation";
import Link from "next/link";
import { getExperienceById } from "@/db/queries";
import { updateExperienceAction } from "@/app/actions/experiences";
import { FormField, TextAreaField } from "@/components/ui/FormField";
import { YearMonthInput } from "@/components/ui/YearMonthInput";

export default async function EditExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exp = await getExperienceById(id);
  if (!exp) notFound();

  const action = updateExperienceAction.bind(null, id);

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-6">경력 수정</h1>
      <form action={action} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="회사명" name="company" required defaultValue={exp.company} />
          <FormField label="직함" name="role" required defaultValue={exp.role} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <YearMonthInput label="입사일" name="startDate" required defaultValue={exp.startDate} />
          <YearMonthInput label="퇴사일" name="endDate" defaultValue={exp.endDate} hint="재직 중이면 비워두세요" />
        </div>
        <TextAreaField label="업무 설명" name="description" required defaultValue={exp.description} />
        <FormField
          label="기술 스택"
          name="techStack"
          defaultValue={exp.techStack.join(", ")}
          hint="쉼표로 구분해서 입력하세요"
        />
        <FormField label="정렬 순서" name="sortOrder" type="number" defaultValue={String(exp.sortOrder)} />

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-violet-400 hover:bg-violet-500 text-white rounded-xl text-sm font-medium transition-colors"
          >
            저장
          </button>
          <Link
            href="/admin/experiences"
            className="px-5 py-2.5 border border-violet-200 dark:border-slate-600 text-gray-600 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-violet-50 dark:hover:bg-slate-700 transition-colors"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  );
}
