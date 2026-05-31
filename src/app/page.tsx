import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getExperiences, getEducations } from "@/db/queries";

// 빌드 시점이 아닌 요청 시점에 DB 조회
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [experiences, educations] = await Promise.all([
    getExperiences(),
    getEducations(),
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
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
