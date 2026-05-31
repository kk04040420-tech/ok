"use client";

// 연/월 직접 입력 컴포넌트 — 캘린더 대신 숫자 입력
// DB는 YYYY-MM-DD 형식을 요구하므로, 일(day)은 01로 고정해서 hidden input에 저장
import { useState } from "react";

interface YearMonthInputProps {
  label: string;
  name: string;
  required?: boolean;
  defaultValue?: string | null; // YYYY-MM-DD 형식
  hint?: string;
}

export function YearMonthInput({
  label,
  name,
  required,
  defaultValue,
  hint,
}: YearMonthInputProps) {
  const [year, setYear] = useState(defaultValue ? defaultValue.slice(0, 4) : "");
  const [month, setMonth] = useState(defaultValue ? defaultValue.slice(5, 7) : "");

  // 연, 월이 모두 입력된 경우 YYYY-MM-01 조합, 아니면 빈 문자열
  const combined =
    year.length === 4 && month.length >= 1
      ? `${year}-${month.padStart(2, "0")}-01`
      : "";

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
        {label} {required && <span className="text-rose-400">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="2023"
          min="1900"
          max="2100"
          className="w-24 px-3 py-2.5 rounded-xl border border-violet-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-700 placeholder:text-gray-300 dark:placeholder:text-gray-600 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span className="text-gray-400 text-sm">년</span>
        <input
          type="number"
          value={month}
          onChange={(e) => {
            const v = Math.min(12, Math.max(1, Number(e.target.value)));
            setMonth(e.target.value === "" ? "" : String(v));
          }}
          placeholder="1"
          min="1"
          max="12"
          className="w-16 px-3 py-2.5 rounded-xl border border-violet-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-700 placeholder:text-gray-300 dark:placeholder:text-gray-600 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span className="text-gray-400 text-sm">월</span>
      </div>
      {/* Server Action이 읽는 실제 hidden input */}
      <input type="hidden" name={name} value={combined} />
      {hint && <p className="mt-1.5 text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
