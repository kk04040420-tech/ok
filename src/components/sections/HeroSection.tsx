"use client";

// 히어로/소개 섹션 컴포넌트 — 이름, 역할 타이핑 애니메이션, CTA 버튼
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/personal";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  // roles 배열을 순환하며 타이핑 효과 구현
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 프로필 아바타 */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-300 via-pink-200 to-rose-300 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-violet-200 dark:shadow-violet-900/30">
          {personalInfo.name.charAt(0)}
        </div>

        {/* 이름 */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          {personalInfo.name}
        </h1>

        {/* 역할 타이핑 애니메이션 */}
        <div className="h-8 mb-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              className="text-xl text-violet-400 dark:text-violet-300 font-medium"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {personalInfo.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 한 줄 소개 */}
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10">
          {personalInfo.tagline}
        </p>

        {/* CTA 버튼 */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-400 hover:bg-violet-500 text-white rounded-2xl font-medium transition-colors shadow-md shadow-violet-200 dark:shadow-violet-900/30"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white dark:bg-slate-800 border border-violet-200 dark:border-slate-700 text-violet-500 dark:text-violet-300 rounded-2xl font-medium hover:bg-violet-50 dark:hover:bg-slate-700 transition-colors"
          >
            연락하기
          </a>
        </div>

        {/* 소셜 링크 */}
        <div className="flex items-center justify-center gap-5">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-rose-400 dark:hover:text-rose-300 transition-colors"
            aria-label="이메일"
          >
            <Mail size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
