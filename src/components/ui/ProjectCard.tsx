"use client";

// 프로젝트 카드 컴포넌트
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { Project } from "@/types";

const gradients = [
  "from-violet-200 via-pink-200 to-rose-200",
  "from-sky-200 via-violet-200 to-pink-200",
  "from-emerald-200 via-teal-200 to-sky-200",
];

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-slate-800/60 rounded-2xl overflow-hidden flex flex-col border border-violet-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:shadow-violet-100 dark:hover:shadow-slate-900 transition-shadow"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* 썸네일 — imageUrl 있으면 이미지, 없으면 파스텔 그라디언트 */}
      <div className={`h-36 relative overflow-hidden ${!project.imageUrl ? `bg-gradient-to-br ${gradients[index % gradients.length]}` : "bg-gray-100 dark:bg-slate-700"}`}>
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-base text-gray-800 dark:text-white mb-1.5">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* 기술 태그 */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-500 dark:text-violet-300 font-medium border border-violet-100 dark:border-violet-800/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 링크 버튼 */}
        <div className="flex items-center gap-4 pt-1 border-t border-gray-50 dark:border-slate-700/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors font-medium"
            >
              <GithubIcon size={14} /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-rose-400 dark:hover:text-rose-300 transition-colors font-medium"
            >
              <ExternalLink size={14} />
              {project.liveUrl.includes("kyobobook")
                ? "교보문고에서 보기"
                : project.liveUrl.includes("kakaocompliance")
                ? "보고서 보기"
                : project.liveUrl.includes("naver.com")
                ? "시리즈 보기"
                : "라이브"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
