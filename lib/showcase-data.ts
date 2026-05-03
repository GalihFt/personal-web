import type { ExperienceEntry } from "@/components/sections/experience-showcase";
import type { OrganizationEntry } from "@/components/sections/organization-showcase";
import type { ShowcaseProject } from "@/components/sections/project-showcase-grid";
import {
  achievements,
  certifications,
  organizationExperiences,
  projects,
  workExperiences,
} from "@/lib/portfolio-data";

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

const workGalleryMap: Record<string, string[]> = {
  "Accounting Data Analyst": [
    "/assets/profile/galih-graduation.jpg",
    "/assets/education/its-graduation.jpg",
    "/assets/profile/galih-graduation.jpg",
  ],
  "Data Analyst Intern": [
    "/assets/education/its-graduation.jpg",
    "/assets/profile/galih-graduation.jpg",
    "/assets/education/its-graduation.jpg",
  ],
  "Assistant Lecturer of Data Warehouse": [
    "/assets/education/its-graduation.jpg",
    "/assets/profile/galih-graduation.jpg",
    "/assets/education/its-graduation.jpg",
  ],
  "Research Assistant": [
    "/assets/profile/galih-graduation.jpg",
    "/assets/education/its-graduation.jpg",
    "/assets/profile/galih-graduation.jpg",
  ],
  "Statistics Student Intern": [
    "/assets/profile/galih-graduation.jpg",
    "/assets/education/its-graduation.jpg",
    "/assets/profile/galih-graduation.jpg",
  ],
  "Medical Record Intern": [
    "/assets/education/its-graduation.jpg",
    "/assets/profile/galih-graduation.jpg",
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

const orderedProjects = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

export const showcaseProjects: ShowcaseProject[] = orderedProjects.map((project) => ({
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

export const workExperienceEntries: ExperienceEntry[] = workExperiences.map((item) => ({
  title: item.title,
  place: item.place,
  period: item.period,
  type: item.type,
  points: item.points,
  summary: workSummaryMap[item.title] ?? item.points[0],
  gallery: workGalleryMap[item.title] ?? ["/assets/profile/galih-portrait.jpg"],
}));

export const organizationEntries: OrganizationEntry[] = organizationExperiences.map((item) => ({
  title: item.title,
  place: item.place,
  period: item.period,
  type: item.type,
  points: item.points,
  summary: organizationSummaryMap[item.title] ?? item.points[0],
  gallery: organizationGalleryMap[item.title] ?? ["/assets/profile/galih-portrait.jpg"],
}));

export const honorCertificates = achievements.map((item) => ({
  title: item.title,
  issuer: item.issuer,
  detail: item.detail,
  image: item.image,
}));

export const skillCertifications = certifications.map((item) => ({
  title: item.name,
  issuer: item.issuer,
  detail: "Sertifikasi keahlian yang bisa dipreview lalu diverifikasi lewat link credential.",
  image: item.image,
  href: item.href,
}));
