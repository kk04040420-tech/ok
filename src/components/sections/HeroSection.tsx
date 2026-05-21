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
        {/* 프로필 사진 */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          {personalInfo.name.charAt(0)}
        </div>

        {/* 이름 */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {personalInfo.name}
        </h1>

        {/* 역할 타이핑 애니메이션 */}
        <div className="h-8 mb-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              className="text-xl text-blue-500 dark:text-blue-400 font-medium"
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
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
          {personalInfo.tagline}
        </p>

        {/* CTA 버튼 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            연락하기
          </a>
        </div>

        {/* 소셜 링크 */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="이메일"
          >
            <Mail size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
