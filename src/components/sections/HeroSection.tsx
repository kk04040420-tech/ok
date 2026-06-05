"use client";

// 히어로 섹션 — 2칼럼 레이아웃, 플로팅 일러스트, 역할 애니메이션
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/personal";

// 우측 플로팅 일러스트 컴포넌트
function HeroIllustration() {
  return (
    <motion.div
      className="relative h-[420px] w-full hidden md:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* 배경 글로우 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-500/10 dark:bg-violet-600/15 blur-[100px] pointer-events-none" />

      {/* SVG 장식 — 링 + 스파클 */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" aria-hidden>
        <defs>
          <linearGradient id="rg" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="152" stroke="url(#rg)" strokeWidth="1" strokeDasharray="5 4" opacity="0.2" />
        <circle cx="200" cy="200" r="98" stroke="url(#rg)" strokeWidth="0.5" opacity="0.12" />
        {/* 스파클 */}
        <path d="M338 62 342 72 352 76 342 80 338 90 334 80 324 76 334 72Z" fill="#a78bfa" opacity="0.55" />
        <path d="M52 280 55 288 63 291 55 294 52 302 49 294 41 291 49 288Z" fill="#f472b6" opacity="0.45" />
        <path d="M312 298 314 304 320 306 314 308 312 314 310 308 304 306 310 304Z" fill="#22d3ee" opacity="0.5" />
        <circle cx="76" cy="100" r="3" fill="#a78bfa" opacity="0.35" />
        <circle cx="330" cy="240" r="2" fill="#f472b6" opacity="0.4" />
        <circle cx="160" cy="340" r="2.5" fill="#22d3ee" opacity="0.35" />
      </svg>

      {/* 플로팅 코드 카드 */}
      <motion.div
        className="absolute top-8 right-6 w-48 bg-white/90 dark:bg-[#13131f]/95 rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-4 backdrop-blur-sm shadow-xl shadow-black/5 dark:shadow-black/40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-400/80" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <div className="w-2 h-2 rounded-full bg-green-400/80" />
          <span className="ml-auto text-[9px] text-gray-400 dark:text-slate-600 font-mono">work.ts</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-violet-500 dark:text-violet-400 font-mono shrink-0">const</span>
            <div className="h-1.5 bg-gray-200 dark:bg-slate-100/10 rounded-full flex-1" />
          </div>
          <div className="h-1.5 bg-cyan-400/30 rounded-full w-3/4" />
          <div className="h-1.5 bg-pink-400/25 rounded-full w-1/2" />
          <div className="h-1.5 bg-gray-200 dark:bg-slate-100/10 rounded-full w-5/6" />
          <div className="h-1.5 bg-violet-400/20 rounded-full w-2/3" />
        </div>
      </motion.div>

      {/* 플로팅 스탯 카드 */}
      <motion.div
        className="absolute bottom-20 left-10 bg-white/90 dark:bg-[#13131f]/95 rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-4 backdrop-blur-sm shadow-xl shadow-black/5 dark:shadow-black/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <p className="text-[9px] text-gray-400 dark:text-slate-600 font-mono uppercase tracking-[0.15em] mb-1">shipped</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
          12<span className="text-violet-500 text-xl">+</span>
        </p>
        <p className="text-[10px] text-gray-400 dark:text-slate-500 mt-0.5">projects done</p>
      </motion.div>

      {/* 기술 태그 칩들 */}
      <motion.div
        className="absolute top-[43%] left-4 px-3 py-1.5 bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/25 rounded-full text-[11px] text-violet-600 dark:text-violet-300 font-mono backdrop-blur-sm"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        ✦ Next.js
      </motion.div>

      <motion.div
        className="absolute top-[32%] right-4 px-3 py-1.5 bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/25 rounded-full text-[11px] text-pink-600 dark:text-pink-300 font-mono backdrop-blur-sm"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        ✦ TypeScript
      </motion.div>

      <motion.div
        className="absolute bottom-36 right-10 px-3 py-1.5 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/25 rounded-full text-[11px] text-cyan-600 dark:text-cyan-300 font-mono backdrop-blur-sm"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        ✦ Design
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 pt-20 pb-10 bg-zinc-50 dark:bg-[#09090f]">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* 좌측 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 상태 배지 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#13131f] border border-zinc-200 dark:border-white/[0.08] rounded-full mb-7 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-gray-500 dark:text-slate-400 font-mono">available for work</span>
          </div>

          {/* 이름 */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            {personalInfo.name}
            <span className="text-violet-500">.</span>
          </h1>

          {/* 역할 애니메이션 */}
          <div className="h-8 mb-5 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="text-lg text-violet-600 dark:text-violet-400 font-mono"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {personalInfo.roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* 소개 문구 */}
          <p className="text-gray-500 dark:text-slate-400 text-lg mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-semibold transition-colors shadow-lg shadow-violet-600/20"
            >
              프로젝트 보기
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#13131f] border border-zinc-200 dark:border-white/[0.08] text-gray-700 dark:text-slate-200 hover:border-violet-400 dark:hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-300 rounded-2xl font-semibold transition-colors"
            >
              연락하기
            </a>
          </div>

          {/* 소셜 링크 */}
          <div className="flex items-center gap-5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-slate-600 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 dark:text-slate-600 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              aria-label="이메일"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* 우측 일러스트 */}
        <HeroIllustration />
      </div>
    </section>
  );
}
