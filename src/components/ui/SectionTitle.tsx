// 섹션 제목 공통 컴포넌트
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div>
      {subtitle && (
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-violet-500 dark:text-violet-400 mb-2.5">
          // {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
      <div className="mt-3 h-px w-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
    </div>
  );
}
