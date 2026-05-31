import { createExperienceAction } from "@/app/actions/experiences";
import { FormField, TextAreaField } from "@/components/ui/FormField";
import Link from "next/link";

export default function NewExperiencePage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-6">경력 추가</h1>
      <form action={createExperienceAction} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="회사명" name="company" required placeholder="OO 회사" />
          <FormField label="직함" name="role" required placeholder="Frontend Developer" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="입사일" name="startDate" type="date" required />
          <FormField label="퇴사일" name="endDate" type="date" hint="재직 중이면 비워두세요" />
        </div>
        <TextAreaField
          label="업무 설명"
          name="description"
          required
          placeholder="주요 업무와 성과를 입력해주세요"
        />
        <FormField
          label="기술 스택"
          name="techStack"
          placeholder="Next.js, TypeScript, Tailwind CSS"
          hint="쉼표로 구분해서 입력하세요"
        />
        <FormField label="정렬 순서" name="sortOrder" type="number" defaultValue="0" />

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
