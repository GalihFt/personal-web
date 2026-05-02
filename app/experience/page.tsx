import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ExperienceShowcase, type ExperienceEntry } from "@/components/sections/experience-showcase";
import { OrganizationShowcase, type OrganizationEntry } from "@/components/sections/organization-showcase";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { organizationExperiences, workExperiences } from "@/lib/portfolio-data";

export default function ExperiencePage() {
  const workGalleryMap: Record<string, string[]> = {
    "Accounting Data Analyst": [
      "/assets/profile/galih-analyst.png",
      "/assets/profile/galih-graduation.jpg",
      "/assets/education/its-graduation.jpg",
    ],
    "Data Analyst Intern": [
      "/assets/profile/galih-graduation.jpg",
      "/assets/education/its-graduation.jpg",
      "/assets/honors/top-50-bangkit.jpg",
    ],
    "Assistant Lecturer of Data Warehouse": [
      "/assets/education/its-graduation.jpg",
      "/assets/profile/galih-graduation.jpg",
      "/assets/profile/galih-analyst.png",
    ],
    "Research Assistant": [
      "/assets/profile/galih-analyst.png",
      "/assets/honors/bangkit-certificate.jpg",
      "/assets/profile/galih-graduation.jpg",
    ],
    "Statistics Student Intern": [
      "/assets/profile/galih-graduation.jpg",
      "/assets/education/its-graduation.jpg",
      "/assets/profile/galih-analyst.png",
    ],
    "Medical Record Intern": [
      "/assets/profile/galih-graduation.jpg",
      "/assets/profile/galih-analyst.png",
      "/assets/education/its-graduation.jpg",
    ],
  };

  const workSummaryMap: Record<string, string> = {
    "Accounting Data Analyst":
      "Focused on reconciliation automation, fragmented financial data cleanup, and tools that reduce repetitive monthly work.",
    "Data Analyst Intern":
      "Worked on optimization logic, dashboarding, and operational analysis to support vendor and repair decisions.",
    "Assistant Lecturer of Data Warehouse":
      "Helped students understand SQL, ETL workflows, and dashboard output through practical sessions.",
    "Research Assistant":
      "Turned scraped public data into sentiment signals and visual insight for research use.",
    "Statistics Student Intern":
      "Translated public finance data into accessible analysis and publication-ready reporting.",
    "Medical Record Intern":
      "Combined administrative accuracy with forecasting and dashboard work in a healthcare setting.",
  };

  const organizationGalleryMap: Record<string, string[]> = {
    "Vice Chairman": [
      "/assets/profile/galih-graduation.jpg",
      "/assets/profile/galih-portrait.jpg",
      "/assets/honors/visual-quest.png",
    ],
    "Staff of Research and Data Analytics": [
      "/assets/profile/galih-portrait.jpg",
      "/assets/honors/top-50-bangkit.jpg",
      "/assets/profile/galih-analyst.png",
    ],
    "Head of Conference Subject Data Analytics Competition": [
      "/assets/honors/visual-quest.png",
      "/assets/honors/action-third-place.png",
      "/assets/profile/galih-graduation.jpg",
    ],
  };

  const organizationSummaryMap: Record<string, string> = {
    "Vice Chairman":
      "A leadership role centered on aligning people, programs, and execution across a large student organization.",
    "Staff of Research and Data Analytics":
      "Focused on learning support, coordination, and operational management for a high-participation academic program.",
    "Head of Conference Subject Data Analytics Competition":
      "Led preparation, stakeholder communication, and strategic direction for a data analytics competition track.",
  };

  const workExperienceEntries: ExperienceEntry[] = workExperiences.map((item) => ({
    title: item.title,
    place: item.place,
    period: item.period,
    type: item.type,
    points: item.points,
    summary: workSummaryMap[item.title] ?? item.points[0],
    gallery: workGalleryMap[item.title] ?? ["/assets/profile/galih-portrait.jpg"],
  }));

  const organizationEntries: OrganizationEntry[] = organizationExperiences.map((item) => ({
    title: item.title,
    place: item.place,
    period: item.period,
    type: item.type,
    points: item.points,
    summary: organizationSummaryMap[item.title] ?? item.points[0],
    gallery: organizationGalleryMap[item.title] ?? ["/assets/profile/galih-portrait.jpg"],
  }));

  return (
    <>
      <PageHero
        icon={BriefcaseBusiness}
        eyebrow="Experience"
        title="Experience built through operational, financial, and analytical work."
        description="I have worked in environments where accuracy, reporting speed, and practical output mattered more than theory alone."
      />

      <section className="section-band section-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Work Experience"
              title="Work focused on making data more useful for day-to-day decisions."
              description="The pattern across these roles is consistent: reduce manual effort, improve clarity, and make reporting more reliable."
            />
          </Reveal>

          <div className="mt-10">
            <ExperienceShowcase items={workExperienceEntries} />
          </div>
        </div>
      </section>

      <section className="section-band section-tint">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Organization"
              title="Leadership experience beyond technical delivery."
              description="These roles helped me build ownership, coordination, and communication alongside analytical work."
            />
          </Reveal>

          <div className="mt-10">
            <OrganizationShowcase items={organizationEntries} />
          </div>
        </div>
      </section>
    </>
  );
}
