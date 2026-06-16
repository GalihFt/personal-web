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
    "/assets/projects/round-trip/round-trip-01.png",
  ],
  "Deepfake Speech Detection": [
    "/assets/projects/deepfake/deepfake-speech.jpg",
  ],
  "MoodMate Machine Learning": [
    "/assets/projects/mood-mate/moodmate-01.jpeg",
    "/assets/projects/mood-mate/portfolio-galih-fitriatmo.png",
    "/assets/projects/mood-mate/moodmate-02.jpeg",
    "/assets/projects/mood-mate/moodmate-03.jpeg",
  ],
  "Container Repair Optimizer": [
    "/assets/projects/container-repair/container-repair-01.png",
    "/assets/projects/container-repair/container-repair-02.png",
    "/assets/projects/container-repair/container-repair-03.png",
  ],
  "Auto Reconciliation Tools": [
    "/assets/projects/finance-covers/auto-reconciliation-tools.png",
  ],
  "Port Cost Accrual Automation": [
    "/assets/projects/finance-covers/port-cost-accrual.jpg",
  ],
  "Dooring Optimizer": [
    "/assets/projects/dooring/dooring-optimizer-trucks.jpg",
  ],
  "Hotel Reservation Cancellation Dashboard": [
    "/assets/projects/hotel/hotel-home-page.png",
  ],
  "Inpatient Admission Forecasting": [
    "/assets/projects/inpatient/inpatient-02.png",
    "/assets/projects/inpatient/inpatient-01.png",
  ],
  "TALAS SUPER": [
    "/assets/projects/talas-super/talas-super-01.png",
  ],
  "CLIMATE HERO": [
    "/assets/projects/climate-hero/climate-hero-01.png",
  ],
  "Buletin Kapuas": [
    "/assets/projects/bulletin-kapuas/bulletin-kapuas-01.png",
    "/assets/projects/bulletin-kapuas/bulletin-kapuas-02.png",
    "/assets/projects/bulletin-kapuas/bulletin-kapuas-03.png",
  ],
  "Management Information System Excel Dashboard": [
    "/assets/projects/excel-dashboard/excel-dashboard-01.png",
    "/assets/projects/excel-dashboard/excel-dashboard-02.png",
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
  "Auto Reconciliation Tools": [
    { value: "30 hours", label: "manual work saved per month" },
    { value: "Matching", label: "transaction reconciliation flow" },
    { value: "Excel output", label: "branch and batch-level review" },
  ],
  "Port Cost Accrual Automation": [
    { value: "Branch-level", label: "accrual output generation" },
    { value: "Excel-based", label: "operational accounting fit" },
    { value: "Repeatable", label: "monthly process support" },
  ],
  "Dooring Optimizer": [
    { value: "CP-SAT", label: "constraint-based job selection" },
    { value: "Trailer cap", label: "active capacity planning" },
    { value: "Excel output", label: "summary and selected plan" },
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
  "TALAS SUPER": [
    { value: "1st Place", label: "Visual Quest FTMM UNAIR" },
    { value: "Smoking risk", label: "public health infographic" },
    { value: "Data story", label: "analysis-led visual narrative" },
  ],
  "CLIMATE HERO": [
    { value: "3rd Place", label: "ACTION Data Science UNESA" },
    { value: "CO2 emissions", label: "Indonesia environmental data" },
    { value: "Data story", label: "pattern-driven infographic" },
  ],
  "Buletin Kapuas": [
    { value: "APBN", label: "semester 1 public finance analysis" },
    { value: "KPPN Sanggau", label: "internship publication project" },
    { value: "Design + writing", label: "reader-friendly bulletin" },
  ],
  "Management Information System Excel Dashboard": [
    { value: "Excel", label: "dashboard development" },
    { value: "BPS data", label: "public statistics source" },
    { value: "Resources", label: "energy and mining insights" },
  ],
};

const projectDescriptionMap: Record<string, { text: string; strong?: boolean }[]> = {
  "Roundtrip Mapping Optimization": [
    { text: "Roundtrip Mapping Optimization is a " },
    { text: "handed-over internship prototype initially developed by Ivan", strong: true },
    { text: " and later continued as a web-based route optimization system for matching unloading and loading activities into more efficient truck roundtrips. My contribution focused on " },
    { text: "refining the optimization workflow, improving usability, validating operational constraints, and aligning the system with user needs", strong: true },
    { text: ". The project addresses a common logistics problem where " },
    { text: "trucks return empty after completing deliveries", strong: true },
    { text: ", creating unnecessary distance, cost, and idle capacity. The refined application processes Excel inputs, geocodes locations, calculates route distances with " },
    { text: "Valhalla", strong: true },
    { text: ", and uses the " },
    { text: "Hungarian Algorithm", strong: true },
    { text: " to recommend unload-load pairs under branch, distance, time, and route constraints. The result is a " },
    { text: "map-based decision tool", strong: true },
    { text: " that helps logistics teams review practical roundtrip opportunities, estimate savings, and export structured mapping results." },
  ],
  "Deepfake Speech Detection": [
    { text: "This research project compares " },
    { text: "feature-based and image-based approaches", strong: true },
    { text: " for detecting deepfake speech using the " },
    { text: "ASVspoof 2019", strong: true },
    { text: " benchmark dataset. The problem is relevant because synthetic speech can be used for fraud, impersonation, and misinformation, while detection systems need to balance accuracy with processing speed. The study extracts audio features for SVM and Random Forest models, then converts audio into " },
    { text: "Mel-spectrogram images", strong: true },
    { text: " for CNN and CNN-LSTM models. The comparison shows that CNN delivers the strongest performance with " },
    { text: "91.43% test accuracy", strong: true },
    { text: ", while SVM is more computationally efficient for speed-sensitive scenarios." },
  ],
  "MoodMate Machine Learning": [
    { text: "MoodMate Machine Learning is the " },
    { text: "NLP component", strong: true },
    { text: " of a journaling and mental wellness capstone application. The main challenge was turning free-form user journal text into emotional signals that could support mood tracking and chatbot interaction. The project prepares text data, applies Indonesian language preprocessing with " },
    { text: "Sastrawi", strong: true },
    { text: ", trains a " },
    { text: "TensorFlow-based emotion classification model", strong: true },
    { text: ", and converts the model into " },
    { text: "TensorFlow.js", strong: true },
    { text: " for web deployment. The resulting model classifies moods such as anger, sadness, fear, and joy with " },
    { text: "92.60% testing accuracy", strong: true },
    { text: ", giving the product a practical machine learning layer for personalized reflection." },
  ],
  "Container Repair Optimizer": [
    { text: "This Streamlit application supports " },
    { text: "container repair allocation", strong: true },
    { text: " by recommending vendors based on cost efficiency, capacity, container type, material references, and allocation rules. The business problem is that repair decisions can become inconsistent when teams compare vendor prices, capacity limits, and repair details manually across many records. The app centralizes those checks into an interactive workflow, validates inputs, calculates repair costs, and produces " },
    { text: "vendor allocation recommendations", strong: true },
    { text: " that can be reviewed and exported. Its impact is a " },
    { text: "more consistent and transparent decision process", strong: true },
    { text: " while reducing manual comparison work." },
  ],
  "Auto Reconciliation Tools": [
    { text: "Auto Reconciliation Tools is a set of " },
    { text: "Streamlit-based finance automation tools", strong: true },
    { text: " built to reduce repetitive matching work across accounting reconciliation workflows. The tools read structured Excel inputs, standardize transaction fields, match related records, classify reconciliation results, separate unresolved differences, and generate " },
    { text: "review-ready Excel outputs", strong: true },
    { text: ". The workflow covers affiliate receivable and payable reconciliation between head office and branches, as well as accounts receivable reconciliation between " },
    { text: "General Ledger records, payment data, and cancellation transactions", strong: true },
    { text: ". By automating transaction matching, exception classification, and output generation, the tools improve traceability and monthly reporting efficiency while saving around " },
    { text: "30 hours of manual work per month", strong: true },
    { text: "." },
  ],
  "Port Cost Accrual Automation": [
    { text: "Port Cost Accrual Automation is a web-based Streamlit application that automates accrual preparation for " },
    { text: "loading and unloading costs", strong: true },
    { text: " across branches. In the shipping operation, every loading and unloading activity creates costs that should be recognized based on the vessel departure date. The challenge is that some costs only appear in the following month, so finance teams need to accrue them accurately while avoiding duplicate accrual. The app processes loading and unloading reports, applicable tariff references, and General Ledger data to " },
    { text: "automatically identify activities that need accrual, calculate the required cost, generate accrual journals, and compare the result against the ledger", strong: true },
    { text: ". This creates an end-to-end workflow that improves accuracy, reduces repetitive checking, and helps prevent loading and unloading costs from being double accrued." },
  ],
  "Dooring Optimizer": [
    { text: "Dooring Optimizer is a " },
    { text: "Streamlit-based logistics planning tool", strong: true },
    { text: " for selecting profitable dooring jobs under active trailer capacity constraints. The application validates uploaded Excel input, enriches jobs with customer, cost, time, coordinate, and route master data, then calculates " },
    { text: "travel distance, travel time, fuel cost, operational cost, toll cost, and optimizer-basis profit", strong: true },
    { text: ". It uses " },
    { text: "OR-Tools CP-SAT", strong: true },
    { text: " to maximize planned profit while preventing schedule overlap beyond available trailers. The workflow also supports optional schedule shifting, eligible 20 ft combo activities, trailer assignment, final profit recalculation after trip-sequence costs, and " },
    { text: "Excel exports containing summary, selected planned jobs, and all validation-stage data", strong: true },
    { text: " for operational review." },
  ],
  "Hotel Reservation Cancellation Dashboard": [
    { text: "This R Shiny dashboard analyzes hotel reservation behavior and predicts the probability of " },
    { text: "booking cancellation", strong: true },
    { text: ". The business problem is that cancellations affect occupancy planning, revenue forecasting, and customer retention, but raw reservation data is difficult to interpret without an interactive analytical layer. The dashboard combines KPI monitoring, visual exploration, filters, model comparison, ROC evaluation, and customer-level prediction using methods such as " },
    { text: "XGBoost, Decision Tree, Naive Bayes, and Logistic Regression", strong: true },
    { text: ". It helps hotel stakeholders move from descriptive reporting to " },
    { text: "practical risk identification", strong: true },
    { text: " so high-risk bookings can be reviewed earlier." },
  ],
  "Inpatient Admission Forecasting": [
    { text: "This time series project analyzes and forecasts " },
    { text: "hospital inpatient admissions", strong: true },
    { text: " to support resource planning. Admissions can show recurring seasonal patterns, and understanding those patterns helps teams anticipate patient volume, staffing pressure, and operational needs. The project prepares admission data, performs exploratory analysis, checks stationarity, builds " },
    { text: "SARIMA models", strong: true },
    { text: ", evaluates them with RMSE and MAPE, and produces forecasts from the best-performing specification. " },
    { text: "SARIMA(0,0,2)(0,1,1)7", strong: true },
    { text: " achieved the strongest result with " },
    { text: "RMSE 28.57 and MAPE around 22%", strong: true },
    { text: ", providing a useful planning signal for weekly seasonal demand." },
  ],
  "TALAS SUPER": [
    { text: "TALAS SUPER is a " },
    { text: "first-place infographic project", strong: true },
    { text: " created for the Visual Quest competition by FTMM UNAIR. The theme focused on the " },
    { text: "dangers of smoking", strong: true },
    { text: ", and the challenge was turning public health information into a cohesive visual story that was accurate, persuasive, and easy to read. Working in a three-member team, my role centered on " },
    { text: "data collection and analysis", strong: true },
    { text: ": gathering information from multiple sources, identifying patterns and relationships, and helping shape the findings into an engaging infographic. The project combined evidence-based storytelling with clear visual communication, and the work earned " },
    { text: "1st place", strong: true },
    { text: " in the competition." },
  ],
  "CLIMATE HERO": [
    { text: "CLIMATE HERO is a " },
    { text: "third-place infographic project", strong: true },
    { text: " created for ACTION by Data Science UNESA. The competition theme was the use of data science to map and reduce the negative impact of " },
    { text: "CO2 emissions in Indonesia", strong: true },
    { text: ". As part of a three-member team, I focused on gathering emissions-related data from various sources, analyzing patterns and relationships, and translating the insights into a clear graphic narrative. The final work made environmental data more accessible through " },
    { text: "attractive, reader-friendly visualization", strong: true },
    { text: " and helped the team earn " },
    { text: "3rd place", strong: true },
    { text: " in the competition." },
  ],
  "Buletin Kapuas": [
    { text: "Buletin Kapuas is a regular publication issued by " },
    { text: "KPPN Sanggau", strong: true },
    { text: ", and this edition was one of my key internship projects. I analyzed " },
    { text: "APBN data for the first semester of 2024", strong: true },
    { text: " and presented the findings in a more engaging, reader-friendly format for KPPN, stakeholders, and general readers. Beyond the data section, I also strengthened narratives around KPPN Sanggau activities, events, and stakeholder collaborations. Most of the newsletter design work was created by me, combining " },
    { text: "public finance analysis, narrative writing, and visual design", strong: true },
    { text: " into a publication that is easier to understand and more polished to read." },
  ],
  "Management Information System Excel Dashboard": [
    { text: "Management Information System Excel Dashboard is a final project for the " },
    { text: "Management Information Systems course", strong: true },
    { text: ", completed as a two-person team. The project focuses on presenting insights about " },
    { text: "Indonesia's energy and mining resources", strong: true },
    { text: " by organizing public data from " },
    { text: "BPS and ministry publications", strong: true },
    { text: " into a structured dashboard. The main challenge was turning scattered resource information into a format that was easier to explore, compare, and explain. Using " },
    { text: "Excel dashboard features", strong: true },
    { text: ", the project transforms raw public data into visual summaries that support clearer understanding of Indonesia's resource landscape." },
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
    "Analyzed operational, procurement, and financial data to improve reporting accuracy, strengthen control, and support decision-making in shipping and logistics.",
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
  "Head of Conference Subject Data Analytics Competition": [
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
  "Head of Conference Subject Data Analytics Competition":
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
  description:
    projectDescriptionMap[project.title] ?? [{ text: `${project.summary} ${project.problem} ${project.impact}` }],
  tools: project.tools,
  link: project.link,
  confidential: project.confidential,
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
