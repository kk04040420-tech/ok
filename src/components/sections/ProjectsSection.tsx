"use client";

// 프로젝트 섹션 컴포넌트 — 스크롤 진입 시 카드 순차 등장
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection() {
  return (
    <section className="py-28 px-6 bg-white dark:bg-[#0d0d18]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <SectionTitle title="Projects" subtitle="만든 것들" />
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project, i) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
