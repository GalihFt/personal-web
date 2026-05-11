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
  "Assistant Lecturer of Database": [
    "/assets/education/its-graduation.jpg",
    "/assets/profile/galih-graduation.jpg",
    "/assets/education/its-graduation.jpg",
  ],
  "Assistant Lecturer of Mathematics I and Calculus II": [
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
    "Built reconciliation automation, Python validation pipelines, master data classification, and budgeting frameworks for accounting operations.",
  "Data Analyst Intern":
    "Improved container repair decisions through vendor allocation optimization, Power BI monitoring, EDA, modeling, and data preparation.",
  "Assistant Lecturer of Data Warehouse":
    "Helped students understand SQL, ETL workflows, and dashboard output through practical sessions.",
  "Assistant Lecturer of Database":
    "Supported database learning through DBMS fundamentals, MySQL practice, and structured classroom guidance.",
  "Assistant Lecturer of Mathematics I and Calculus II":
    "Built experience in mentoring foundational quantitative courses through teaching support, tutoring, and guided problem-solving.",
  "Research Assistant":
    "Collected online news data, applied VADER sentiment analysis, and visualized public opinion findings for research use.",
  "Statistics Student Intern":
    "Analyzed APBN data, created bulletin-ready visuals, and improved presentation materials for clearer public finance reporting.",
  "Medical Record Intern":
    "Built inpatient arrival forecasting, improved medical record completeness, and developed a dashboard for hospital statistics.",
};

const organizationGalleryMap: Record<string, string[]> = {
  "Vice Chairman": [
    "/assets/community/pst/pst-2025-01.jpeg",
    "/assets/community/pst/pst-2025-03.jpg",
    "/assets/community/pst/pst-2025-02.jpeg",
  ],
  "Staff of Research and Data Analytics Division": [
    "/assets/community/pst/pst-2024-01.jpeg",
    "/assets/community/pst/pst-2024-02.jpg",
  ],
  "Head of Conference Subject Subdivision of DAC 2023": [
    "/assets/community/dac/dac-01.jpeg",
    "/assets/community/dac/dac-02.jpeg",
    "/assets/community/dac/dac-03.jpeg",
  ],
  "Expert Staff of Equipment Division": [
    "/assets/community/scetch/scetch-2025-01.jpg",
  ],
  "Staff of Equipment Division": [
    "/assets/community/scetch/scetch-2023-01.jpeg",
  ],
  "Academic Course Mentor": [
    "/assets/community/mentoring/academic-course-mentor-lab.png",
  ],
};

const organizationSummaryMap: Record<string, string> = {
  "Vice Chairman":
    "Led organizational programs with 50 members, improved inter-divisional alignment, and helped shape a revenue-generating collaboration concept.",
  "Staff of Research and Data Analytics Division":
    "Coordinated tutors, facilities, schedules, and participant communication for SITASI, a high-participation peer learning program.",
  "Head of Conference Subject Subdivision of DAC 2023":
    "Led material development, question quality control, data partnership coordination, and external communication for a data analytics competition.",
  "Expert Staff of Equipment Division":
    "Supported Scientist Championship 2023 by coordinating resource needs, supervising staff tasks, and maintaining equipment readiness.",
  "Staff of Equipment Division":
    "Handled procurement, cross-division equipment coordination, and item monitoring for Scientist Championship 2022.",
  "Academic Course Mentor":
    "Actively mentored students preparing for exams, especially across statistics and mathematics subjects.",
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
  href: item.href,
}));

export const skillCertifications = certifications.map((item) => ({
  title: item.name,
  issuer: item.issuer,
  detail: item.detail,
  image: item.image,
  href: item.href,
}));
