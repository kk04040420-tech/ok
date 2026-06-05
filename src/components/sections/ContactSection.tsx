"use client";

// 연락처 섹션 컴포넌트 — 볼드 에디토리얼 CTA 스타일
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/personal";

export function ContactSection() {
  return (
    <section className="py-32 px-6 bg-zinc-50 dark:bg-[#09090f] relative overflow-hidden">
      {/* 배경 글로우 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-violet-500/5 dark:bg-violet-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 상단 레이블 */}
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-violet-500 dark:text-violet-400 mb-6">
            // get in touch
          </p>

          {/* 헤드라인 */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
            Let&apos;s work
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              together
            </span>
            <span className="text-gray-900 dark:text-white">.</span>
          </h2>

          {/* 서브 텍스트 */}
          <p className="text-gray-500 dark:text-slate-400 text-lg mb-12 leading-relaxed max-w-md mx-auto">
            새로운 기회나 협업에 대한 이야기라면<br />언제든지 환영합니다
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-semibold transition-colors shadow-lg shadow-violet-600/25"
            >
              <Mail size={17} />
              {personalInfo.email}
              <ArrowUpRight size={16} className="ml-1 opacity-70" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-[#13131f] border border-zinc-200 dark:border-white/[0.08] text-gray-700 dark:text-slate-200 hover:border-zinc-300 dark:hover:border-white/[0.14] rounded-2xl font-semibold transition-colors"
            >
              <GithubIcon size={17} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
