// 섹션 제목 공통 컴포넌트
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-12 h-1 bg-blue-500 rounded-full" />
    </div>
  );
}
