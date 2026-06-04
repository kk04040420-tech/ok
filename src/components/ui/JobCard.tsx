"use client";

// 채용 공고 카드 컴포넌트
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Briefcase, Wifi } from "lucide-react";
import type { Job } from "@/types";

interface JobCardProps {
  job: Job;
}

const employmentTypeLabel: Record<string, string> = {
  FULLTIME: "정규직",
  PARTTIME: "파트타임",
  CONTRACTOR: "계약직",
  INTERN: "인턴",
};

function formatSalary(job: Job): string | null {
  if (!job.job_min_salary && !job.job_max_salary) return null;
  const currency = job.job_salary_currency ?? "USD";
  const period = job.job_salary_period === "YEAR" ? "/yr" : job.job_salary_period === "MONTH" ? "/mo" : job.job_salary_period === "HOUR" ? "/hr" : "";
  const fmt = (n: number) =>
    currency === "USD"
      ? `$${n >= 1000 ? `${(n / 1000).toFixed(0)}k` : n}`
      : `${n.toLocaleString()} ${currency}`;
  if (job.job_min_salary && job.job_max_salary) {
    return `${fmt(job.job_min_salary)} – ${fmt(job.job_max_salary)}${period}`;
  }
  return `${fmt((job.job_min_salary ?? job.job_max_salary)!)}${period}`;
}

export function JobCard({ job }: JobCardProps) {
  const salary = formatSalary(job);
  const location =
    job.job_is_remote
      ? "Remote"
      : [job.job_city, job.job_state, job.job_country]
          .filter(Boolean)
          .join(", ");

  const initials = job.employer_name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <motion.div
      className="bg-white dark:bg-slate-800/60 rounded-2xl border border-violet-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:shadow-violet-100 dark:hover:shadow-slate-900 transition-shadow flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-5 flex flex-col flex-1">
        {/* 회사 정보 */}
        <div className="flex items-center gap-3 mb-3">
          {job.employer_logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={job.employer_logo}
              alt={job.employer_name}
              className="w-10 h-10 rounded-lg object-contain bg-gray-50 dark:bg-slate-700 p-1 border border-gray-100 dark:border-slate-600 flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-900/30 dark:to-pink-900/30 flex items-center justify-center text-xs font-bold text-violet-500 dark:text-violet-300 border border-violet-100 dark:border-violet-800/30">
              {initials}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
              {job.employer_name}
            </p>
            <h3 className="font-bold text-sm text-gray-800 dark:text-white leading-snug line-clamp-2">
              {job.job_title}
            </h3>
          </div>
        </div>

        {/* 배지 행 */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {/* 고용 형태 */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-violet-50 dark:bg-violet-900/20 text-violet-500 dark:text-violet-300 border border-violet-100 dark:border-violet-800/30">
            <Briefcase size={10} />
            {employmentTypeLabel[job.job_employment_type] ?? job.job_employment_type}
          </span>
          {/* 원격 여부 */}
          {job.job_is_remote && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800/30">
              <Wifi size={10} />
              Remote
            </span>
          )}
        </div>

        {/* 위치 */}
        {location && (
          <p className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mb-2">
            <MapPin size={11} className="flex-shrink-0" />
            <span className="truncate">{location}</span>
          </p>
        )}

        {/* 급여 */}
        {salary && (
          <p className="text-xs font-semibold text-pink-500 dark:text-pink-400 mb-3">
            {salary}
          </p>
        )}

        {/* 요구 기술 태그 */}
        {job.job_required_skills && job.job_required_skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4 flex-1">
            {job.job_required_skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-xs rounded-full bg-slate-50 dark:bg-slate-700/50 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-slate-600/50"
              >
                {skill}
              </span>
            ))}
            {job.job_required_skills.length > 4 && (
              <span className="px-2 py-0.5 text-xs rounded-full text-gray-400 dark:text-gray-500">
                +{job.job_required_skills.length - 4}
              </span>
            )}
          </div>
        )}

        {/* 지원하기 버튼 */}
        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/20 dark:hover:bg-violet-900/40 text-violet-500 dark:text-violet-300 border border-violet-100 dark:border-violet-800/30 transition-colors"
        >
          <ExternalLink size={12} />
          지원하기
        </a>
      </div>
    </motion.div>
  );
}
