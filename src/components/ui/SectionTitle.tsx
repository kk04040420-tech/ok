// 섹션 제목 공통 컴포넌트
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-10 h-1 bg-gradient-to-r from-violet-300 to-pink-300 rounded-full" />
    </div>
  );
}
