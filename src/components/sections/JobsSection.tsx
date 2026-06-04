"use client";

// 채용 공고 섹션 — 스크롤 진입 시 카드 순차 등장
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { JobCard } from "@/components/ui/JobCard";
import type { Job } from "@/types";

interface JobsSectionProps {
  jobs: Job[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function JobsSection({ jobs }: JobsSectionProps) {
  if (jobs.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-slate-50/60 dark:bg-slate-900/60">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Jobs"
          subtitle="현재 채용 중인 공고들을 살펴보세요"
        />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {jobs.map((job) => (
            <motion.div key={job.job_id} variants={cardVariants}>
              <JobCard job={job} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
