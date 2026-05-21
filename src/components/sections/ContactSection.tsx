// 연락처 섹션 컴포넌트 — 이메일, GitHub 소셜 링크
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/personal";

export function ContactSection() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-xl mx-auto text-center">
        <SectionTitle title="Contact" subtitle="편하게 연락주세요" />
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          새로운 기회나 협업에 대한 이야기라면 언제든지 환영합니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            <Mail size={18} />
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
