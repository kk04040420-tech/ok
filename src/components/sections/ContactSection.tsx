// 연락처 섹션 컴포넌트 — 이메일, GitHub 소셜 링크
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/personal";

export function ContactSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900/40">
      <div className="max-w-xl mx-auto text-center">
        <SectionTitle title="Contact" subtitle="편하게 연락주세요" />
        <p className="text-gray-400 dark:text-gray-500 mb-10 leading-relaxed">
          새로운 기회나 협업에 대한 이야기라면<br />언제든지 환영합니다 🌸
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-violet-400 hover:bg-violet-500 text-white rounded-2xl font-medium transition-colors shadow-md shadow-violet-200 dark:shadow-violet-900/30"
          >
            <Mail size={17} />
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-violet-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 rounded-2xl font-medium hover:bg-violet-50 dark:hover:bg-slate-700 transition-colors"
          >
            <GithubIcon size={17} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
