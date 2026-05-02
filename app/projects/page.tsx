import { LayoutDashboard } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectShowcaseGrid, type ShowcaseProject } from "@/components/sections/project-showcase-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  const orderedProjects = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  const projectGalleryMap: Record<string, string[]> = {
    "Roundtrip Mapping Optimization": [
      "/assets/profile/galih-analyst.png",
      "/assets/profile/galih-graduation.jpg",
      "/assets/education/its-graduation.jpg",
    ],
    "Deepfake Speech Detection": [
      "/assets/profile/galih-graduation.jpg",
      "/assets/honors/bangkit-certificate.jpg",
      "/assets/profile/galih-portrait.jpg",
    ],
    "MoodMate Machine Learning": [
      "/assets/honors/top-50-bangkit.jpg",
      "/assets/profile/galih-analyst.png",
      "/assets/honors/bangkit-certificate.jpg",
    ],
    "Container Repair Optimizer": [
      "/assets/profile/galih-analyst.png",
      "/assets/profile/galih-graduation.jpg",
      "/assets/profile/galih-portrait.jpg",
    ],
    "Auto RK Branch": [
      "/assets/profile/galih-graduation.jpg",
      "/assets/profile/galih-portrait.jpg",
      "/assets/education/its-graduation.jpg",
    ],
    "KBM Accrual Automation": [
      "/assets/profile/galih-portrait.jpg",
      "/assets/profile/galih-analyst.png",
      "/assets/education/its-graduation.jpg",
    ],
    "Hotel Reservation Cancellation Dashboard": [
      "/assets/honors/visual-quest.png",
      "/assets/profile/galih-graduation.jpg",
      "/assets/profile/galih-portrait.jpg",
    ],
    "Inpatient Admission Forecasting": [
      "/assets/profile/galih-graduation.jpg",
      "/assets/profile/galih-analyst.png",
      "/assets/education/its-graduation.jpg",
    ],
  };

  const projectSignalMap: Record<string, { value: string; label: string }[]> = {
    "Roundtrip Mapping Optimization": [
      { value: "Route pairing", label: "operational optimization logic" },
      { value: "Map-based", label: "dispatch-friendly output" },
      { value: "Constraint-led", label: "distance, time, branch rules" },
    ],
    "Deepfake Speech Detection": [
      { value: "91.43%", label: "best CNN test accuracy" },
      { value: "ASVspoof", label: "benchmark dataset used" },
      { value: "Speed vs acc", label: "model comparison focus" },
    ],
    "MoodMate Machine Learning": [
      { value: "92.60%", label: "emotion classification accuracy" },
      { value: "TensorFlow.js", label: "web deployment target" },
      { value: "NLP", label: "journal text understanding" },
    ],
    "Container Repair Optimizer": [
      { value: "Vendor fit", label: "allocation recommendation" },
      { value: "Cost focus", label: "repair decision support" },
      { value: "Export-ready", label: "structured output delivery" },
    ],
    "Auto RK Branch": [
      { value: "Matching", label: "transaction reconciliation flow" },
      { value: "Excel output", label: "branch-level result files" },
      { value: "Automation", label: "manual review reduced" },
    ],
    "KBM Accrual Automation": [
      { value: "Branch-level", label: "accrual output generation" },
      { value: "Excel-based", label: "operational accounting fit" },
      { value: "Repeatable", label: "monthly process support" },
    ],
    "Hotel Reservation Cancellation Dashboard": [
      { value: "Dashboard", label: "interactive cancellation view" },
      { value: "Prediction", label: "customer-level risk scoring" },
      { value: "R Shiny", label: "analytics delivery format" },
    ],
    "Inpatient Admission Forecasting": [
      { value: "SARIMA", label: "forecasting method" },
      { value: "MAPE 22.19%", label: "test performance signal" },
      { value: "Hospital", label: "resource planning context" },
    ],
  };

  const showcaseProjects: ShowcaseProject[] = orderedProjects.map((project) => ({
    title: project.title,
    category: project.category,
    featured: project.featured,
    summary: project.summary,
    problem: project.problem,
    impact: project.impact,
    tools: project.tools,
    link: project.link,
    gallery: projectGalleryMap[project.title] ?? ["/assets/profile/galih-portrait.jpg"],
    signals: projectSignalMap[project.title] ?? [
      { value: project.category, label: "project context" },
      { value: "Delivery", label: "working implementation" },
      { value: "Applied", label: "business-facing build" },
    ],
  }));
  return (
    <>
      <PageHero
        icon={LayoutDashboard}
        eyebrow="Projects"
        title="Projects built around business problems, not just models."
        description="Most of these projects started with a practical issue: slow reporting, inefficient allocation, unclear patterns, or data that was hard to trust."
      />

      <section className="section-band section-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Project Library"
              title="A visual pass through analytics, automation, and machine learning work."
              description="Projects that were previously featured are shown first, followed by the rest in the same flow."
            />
          </Reveal>
          <div className="mt-10">
            <ProjectShowcaseGrid projects={showcaseProjects} />
          </div>
        </div>
      </section>
    </>
  );
}
