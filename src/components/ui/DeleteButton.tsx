"use client";

// 삭제 확인 후 Server Action 호출하는 버튼 컴포넌트
import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteExperienceAction } from "@/app/actions/experiences";
import { deleteEducationAction } from "@/app/actions/educations";

export function DeleteExperienceButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    startTransition(() => deleteExperienceAction(id));
  };

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border border-rose-200 dark:border-rose-900/50 text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors disabled:opacity-50"
    >
      <Trash2 size={12} /> {pending ? "삭제 중..." : "삭제"}
    </button>
  );
}

export function DeleteEducationButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    startTransition(() => deleteEducationAction(id));
  };

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border border-rose-200 dark:border-rose-900/50 text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors disabled:opacity-50"
    >
      <Trash2 size={12} /> {pending ? "삭제 중..." : "삭제"}
    </button>
  );
}
