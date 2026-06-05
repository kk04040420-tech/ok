import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JobsSection } from "@/components/sections/JobsSection";
import { getExperiences, getEducations } from "@/db/queries";
import { fetchJobs } from "@/lib/jobs";

// 빌드 시점이 아닌 요청 시점에 DB 조회
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [experiences, educations, jobs] = await Promise.all([
    getExperiences(),
    getEducations(),
    fetchJobs({ query: "developer", country: "us", date_posted: "week" }),
  ]);

  return (
    <main>
      <section id="about">
        <HeroSection />
      </section>
      <section id="experience">
        <ExperienceSection data={experiences} />
      </section>
      <section id="education">
        <EducationSection data={educations} />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="jobs">
        <JobsSection jobs={jobs} />
      </section>
    </main>
  );
}
