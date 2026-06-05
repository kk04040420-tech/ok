"use client";

// 프로젝트 카드 컴포넌트
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { Project } from "@/types";

const gradients = [
  "from-violet-600/20 via-violet-500/10 to-transparent",
  "from-pink-600/20 via-pink-500/10 to-transparent",
  "from-cyan-600/20 via-cyan-500/10 to-transparent",
];

const gradientsBorder = [
  "border-violet-200 dark:border-violet-500/20",
  "border-pink-200 dark:border-pink-500/20",
  "border-cyan-200 dark:border-cyan-500/20",
];

const gradientsDot = [
  "bg-violet-500",
  "bg-pink-500",
  "bg-cyan-500",
];

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];
  const borderAccent = gradientsBorder[index % gradientsBorder.length];
  const dot = gradientsDot[index % gradientsDot.length];

  return (
    <motion.div
      className={`bg-white dark:bg-[#13131f] rounded-2xl overflow-hidden flex flex-col border border-zinc-100 dark:border-white/[0.07] hover:border-zinc-200 dark:hover:border-white/[0.12] shadow-sm hover:shadow-md transition-all ${borderAccent.split(" ")[0]} dark:${borderAccent.split(" ")[1]}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* 썸네일 헤더 */}
      <div className={`h-36 relative overflow-hidden ${project.imageUrl ? "bg-zinc-100 dark:bg-[#09090f]" : `bg-gradient-to-br ${gradient} dark:${gradient}`}`}>
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-4">
            <div className={`w-2 h-2 rounded-full ${dot} opacity-60`} />
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* 기술 태그 */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs rounded-full bg-zinc-100 dark:bg-[#09090f] text-gray-600 dark:text-slate-400 border border-zinc-200 dark:border-white/[0.07] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 링크 버튼 */}
        <div className="flex items-center gap-4 pt-3 border-t border-zinc-100 dark:border-white/[0.06]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
            >
              <GithubIcon size={13} /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium"
            >
              <ExternalLink size={13} />
              {project.liveUrl.includes("kyobobook")
                ? "교보문고"
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
