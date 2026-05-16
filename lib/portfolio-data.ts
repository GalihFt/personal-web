import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleGauge,
  Database,
  FileSpreadsheet,
  Github,
  GraduationCap,
  Landmark,
  Linkedin,
  Mail,
  MessageCircle,
  Network,
  PackageCheck,
  ReceiptText,
  Route,
  Sigma,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

export type ToolStackItem = {
  name: string;
  icon: string;
  group: string;
};

export type Project = {
  title: string;
  category: string;
  featured: boolean;
  summary: string;
  problem: string;
  impact: string;
  tools: string[];
  link: string;
  icon: LucideIcon;
};

export type TimelineItem = {
  title: string;
  place: string;
  period: string;
  type: string;
  icon: LucideIcon;
  points: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Achievement = {
  title: string;
  issuer: string;
  detail: string;
  image: string;
  icon: LucideIcon;
  href?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  href: string;
  image: string;
  detail: string;
};

export type SelectableCredential = {
  title: string;
  issuer: string;
  detail: string;
  image: string;
  href?: string;
};

export const navItems: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#profile", label: "Profile" },
  { href: "/#education", label: "Education" },
  {
    href: "/#professional-experience",
    label: "Experience",
    children: [
      { href: "/#professional-experience", label: "Professional" },
      { href: "/#organization-experience", label: "Leadership & Community" },
    ],
  },
  { href: "/#projects", label: "Projects" },
  {
    href: "/#honors",
    label: "Certificates",
    children: [
      { href: "/#honors", label: "Honors & Awards" },
      { href: "/#certifications", label: "Skill Certifications" },
    ],
  },
  { href: "/#contact", label: "Contact" },
];

export const siteConfig = {
  name: "Galih Fitriatmo",
  initials: "GF",
  role: "Data Analyst ",
  headline: "Data Analyst",
  location: "Surabaya, Indonesia",
  email: "galihfitriatmo2611@gmail.com",
  linkedin: "https://www.linkedin.com/in/galih-fitriatmo/",
  github: "https://github.com/GalihFt",
  cvHref: "/assets/documents/GALIH-FITRIATMO_CV.pdf",
  portrait: "/assets/profile/galih-portrait.jpg",
  heroImage: "/assets/profile/galih-analyst.png",
  graduationImage: "/assets/profile/galih-graduation.jpg",
  description:
    "Statistics graduate who turns operational, financial, and business data into clear analysis for reporting accuracy, cost control, and data-driven decision-making. Experienced in analyzing cross-functional data, identifying inefficiencies, and translating complex records into practical business insights, with a strong interest in continuous improvement and making work processes more effective.",
};

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
  { label: "GitHub", href: siteConfig.github, icon: Github },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const toolStack: ToolStackItem[] = [
  { name: "Excel", icon: "/assets/tools/excel.svg", group: "Analysis" },
  { name: "Python", icon: "/assets/tools/python.svg", group: "Analysis" },
  { name: "R", icon: "/assets/tools/r.svg", group: "Analysis" },
  { name: "SQL", icon: "/assets/tools/sql.svg", group: "Analysis" },
  { name: "Power BI", icon: "/assets/tools/power-bi.svg", group: "Reporting" },
  { name: "Tableau", icon: "/assets/tools/tableau.svg", group: "Reporting" },
  { name: "Looker Studio", icon: "/assets/tools/looker.svg", group: "Reporting" },
  { name: "Minitab", icon: "/assets/tools/minitab.png", group: "Statistics" },
  { name: "SPSS", icon: "/assets/tools/spss.png", group: "Statistics" },
  { name: "Git", icon: "/assets/tools/git.svg", group: "Workflow" },
];

export const profileSummary = [
  "I come from a statistics background and work best where business needs meet structured analysis.",
  "Most of my work turns repetitive reporting, fragmented data, or unclear processes into tools that are faster to run and easier to trust.",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Analytics & Modeling",
    items: [
      "Data Visualization",
      "Statistical Modeling",
      "Machine Learning",
      "Predictive Analytics",
      "NLP", "Basic Accounting"
    ],
  },
  {
    title: "Tools",
    items: ["Python", "R", "SQL", "Power BI", "Tableau", "Looker Studio", "Excel", "Minitab", "SPSS", "Git"],
  },
  {
    title: "Business & Collaboration",
    items: [
      "Communication",
      "Problem Solving",
      "Critical Thinking",
      "Data-driven Decision Making",
      "Team Management",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Deepfake Speech Detection",
    category: "Machine Learning Research",
    featured: true,
    summary:
      "A comparative thesis project evaluating feature-based and image-based methods for detecting deepfake speech.",
    problem:
      "Deepfake speech creates risks in fraud and misinformation. This project compares SVM, Random Forest, CNN, and CNN-LSTM approaches using ASVspoof 2019.",
    impact:
      "CNN achieved 91.43% test accuracy, while SVM provided the most efficient inference time, highlighting the trade-off between accuracy and speed.",
    tools: ["Python", "SVM", "Random Forest", "CNN", "CNN-LSTM", "Mel-spectrogram", "ASVspoof 2019"],
    link: "https://github.com/GalihFt/comparative-deepfake-speech-classification",
    icon: BrainCircuit,
  },
  {
    title: "MoodMate Machine Learning",
    category: "NLP Capstone",
    featured: true,
    summary:
      "Machine learning component for a journaling app that classifies user mood and supports chatbot interaction.",
    problem:
      "The project required an NLP model that could understand journal text and classify emotional states into anger, sadness, fear, and joy.",
    impact:
      "Built a text emotion model with 92.60% testing accuracy and converted the model to TensorFlow.js for web deployment.",
    tools: ["TensorFlow", "NLP", "Sastrawi", "Pandas", "TensorFlow.js", "Chatbot"],
    link: "https://github.com/MoodMate-Bangkit-2024",
    icon: Sparkles,
  },
  {
    title: "Container Repair Optimizer",
    category: "Cost Optimization",
    featured: true,
    summary:
      "A Streamlit application that recommends container repair vendor allocation based on cost efficiency and capacity constraints.",
    problem:
      "Repair allocation decisions can be inconsistent when vendor costs, capacity, material references, and container types are checked manually.",
    impact:
      "The app calculates repair costs, compares vendors, validates material references, and exports structured allocation results for further review.",
    tools: ["Python", "Streamlit", "Pandas", "Google Sheets API", "gspread"],
    link: "https://github.com/GalihFt/container-repair-optimizer",
    icon: PackageCheck,
  },
  {
    title: "Auto RK Branch",
    category: "Finance Reconciliation",
    featured: true,
    summary:
      "A Streamlit reconciliation tool for affiliate receivable and payable balances between head office and branches.",
    problem:
      "Manual affiliate reconciliation requires matching documents, dates, descriptions, and values across branch records.",
    impact:
      "Automates transaction matching, classifies reconciliation groups, separates unresolved balances, and exports branch-level Excel results.",
    tools: ["Python", "Streamlit", "Pandas", "NumPy", "OR-Tools", "Docker"],
    link: "https://github.com/GalihFt/rk-reconciliation-automation",
    icon: Network,
  },
  {
    title: "KBM Accrual Automation",
    category: "Accounting Automation",
    featured: false,
    summary:
      "A local web app that processes KBM and General Ledger files to generate branch-level accrual outputs.",
    problem:
      "Accrual checking and journal preparation can take repetitive manual work across files, periods, and branch selections.",
    impact:
      "Creates downloadable Excel outputs containing details, JMH lists, accrual journals, and summary totals.",
    tools: ["Python", "Streamlit", "Excel", "Pandas"],
    link: "https://github.com/GalihFt/kbm-accrual-automation",
    icon: FileSpreadsheet,
  },
  {
    title: "Piutang Reconciliation Automation",
    category: "Finance Reconciliation",
    featured: false,
    summary:
      "A Streamlit reconciliation app for matching General Ledger accounts receivable records with Program Piutang BM transaction data.",
    problem:
      "Accounts receivable reconciliation requires comparing GL records, payment data, and payment cancellation data across fixed-format Excel sheets.",
    impact:
      "Generates structured Excel outputs with matched, unmatched, cancellation, batch summary, and checking sections so finance teams can trace differences faster.",
    tools: ["Python", "Streamlit", "Pandas", "NumPy", "OpenPyXL", "XlsxWriter"],
    link: "https://github.com/GalihFt/piutang-reconciliation-automation",
    icon: ReceiptText,
  },
  {
    title: "Roundtrip Mapping Optimization",
    category: "Logistics Optimization",
    featured: false,
    summary:
      "A handed-over logistics optimization prototype that I refined into a more usable roundtrip mapping tool for operational review.",
    problem:
      "Trucks often return to port empty after unloading. The system matches eligible unload-load pairs under distance, time, route, and branch constraints.",
    impact:
      "Designed to reduce empty trips, optimize trucking routes, and support logistics teams with map-based visualization and downloadable mapping results.",
    tools: ["Next.js", "FastAPI", "Python", "TypeScript", "Leaflet", "Valhalla", "Hungarian Algorithm"],
    link: "https://github.com/GalihFt/roundtrip-optimization",
    icon: Route,
  },
  {
    title: "Buletin Kapuas",
    category: "Public Finance Reporting",
    featured: false,
    summary:
      "A KPPN Sanggau bulletin project combining APBN data analysis, narrative writing, and publication design for the first semester of 2024.",
    problem:
      "Public finance information and stakeholder activities needed to be presented in a clearer, more engaging format for KPPN, stakeholders, and general readers.",
    impact:
      "Analyzed APBN data, strengthened activity narratives, and created most of the bulletin designs to make the publication more informative and reader-friendly.",
    tools: ["APBN Analysis", "Data Visualization", "Publication Design", "Reporting", "Narrative Writing"],
    link: "https://drive.google.com/file/d/1qSi-c8XGTH-16x7kVetM7xr6piYw5QoM/view?usp=sharing",
    icon: Landmark,
  },
  {
    title: "TALAS SUPER",
    category: "Data Storytelling",
    featured: false,
    summary:
      "A first-place infographic project for Visual Quest by FTMM UNAIR, presenting data-driven insights on the dangers of smoking.",
    problem:
      "The competition required a clear, engaging, and evidence-based infographic that could communicate the health risks of smoking to a broad audience.",
    impact:
      "Collected and analyzed data from multiple sources, helped shape the visual narrative, and contributed to a reader-friendly infographic that won first place.",
    tools: ["Data Analysis", "Data Visualization", "Infographic", "Research", "Storytelling"],
    link: "https://www.behance.net/gallery/216517133/Infographics-on-the-Dangers-of-Smoking-and-Solutions/modules/1232858515",
    icon: BarChart3,
  },
  {
    title: "CLIMATE HERO",
    category: "Data Storytelling",
    featured: false,
    summary:
      "A third-place infographic project for ACTION by Data Science UNESA about mapping and reducing the negative impact of CO2 emissions in Indonesia.",
    problem:
      "The project needed to translate CO2 emissions data into an accessible visual story that connected environmental patterns with practical public awareness.",
    impact:
      "Gathered and analyzed emissions-related data, identified key relationships, and helped turn the findings into an attractive infographic that earned third place.",
    tools: ["Data Analysis", "Data Visualization", "Infographic", "Environmental Data", "Storytelling"],
    link: "https://www.behance.net/gallery/216517711/Infographics-on-the-Dangers-of-Carbon-Emissions/modules/1232861319",
    icon: BarChart3,
  },
  {
    title: "Inpatient Admission Forecasting",
    category: "Time Series Forecasting",
    featured: false,
    summary:
      "A time series project analyzing and forecasting hospital inpatient admissions using SARIMA models.",
    problem:
      "Hospital resource planning benefits from understanding seasonal inpatient admission patterns and expected future arrivals.",
    impact:
      "SARIMA(0,0,2)(0,1,1)7 produced the best result with RMSE 28.57 and MAPE 22.19% on test data.",
    tools: ["R", "SARIMA", "Time Series", "Box-Cox", "RMSE", "MAPE"],
    link: "https://github.com/GalihFt/time-series-inpatient-admissions",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Management Information System Excel Dashboard",
    category: "Resource Analytics Dashboard",
    featured: false,
    summary:
      "A team-based Excel dashboard final project for the Management Information Systems course, focused on Indonesia's energy and mining resources.",
    problem:
      "Energy and mining resource data from BPS and ministry publications needed to be organized into a clearer analytical view for exploration and presentation.",
    impact:
      "Built an Excel dashboard that transforms public resource data into visual insights, making Indonesia's energy and mining information easier to interpret.",
    tools: ["Excel", "Dashboard", "BPS Data", "Ministry Publications", "Data Visualization"],
    link: "https://drive.google.com/file/d/1GthdrgalsdatUqsMIX99Vt-uFMyuRzwq/view?usp=sharing",
    icon: BarChart3,
  },
  {
    title: "Hotel Reservation Cancellation Dashboard",
    category: "Predictive Dashboard",
    featured: false,
    summary:
      "An R Shiny dashboard for exploring hotel reservation behavior and predicting cancellation probability.",
    problem:
      "Hotels need to understand cancellation patterns and identify high-risk reservations to improve retention and revenue planning.",
    impact:
      "Combines KPI monitoring, interactive filters, model comparison, ROC evaluation, and customer-level cancellation prediction.",
    tools: ["R", "Shiny", "XGBoost", "Decision Tree", "Naive Bayes", "Logistic Regression"],
    link: "https://github.com/GalihFt/hotel-booking-churn-dashboard",
    icon: Building2,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archiveProjects = projects.filter((project) => !project.featured);

export const workExperiences: TimelineItem[] = [
  {
    title: "Accounting Data Analyst",
    place: "PT Salam Pacific Indonesia Lines",
    period: "Oct 2025 - Present",
    type: "Full-time",
    icon: BriefcaseBusiness,
    points: [
      "Analyzed cross-functional operational, procurement, and financial data to support cost control, reporting accuracy, and strategic decision-making in a shipping and logistics business environment.",
      "Developed web applications to automate end-to-end reconciliation and reporting workflows, reducing monthly reporting time by more than 30 hours and improving reporting accuracy.",
      "Developed an anomaly detection framework for procurement data by standardizing and classifying highly unstructured item descriptions, helping the accounting department identify unusual transaction patterns and strengthen procurement control.",
      "Refined a handed-over roundtrip mapping prototype into a practical operational tool for analyzing unloading and loading activities, helping logistics teams identify more efficient trucking pairings and reduce empty-trip opportunities.",
      "Partnered with internal departments to clarify data issues, align reporting requirements, and turn unclear operational records into structured insights for stakeholder review.",
    ],
  },
  {
    title: "Data Analyst Intern",
    place: "PT Salam Pacific Indonesia Lines",
    period: "Apr 2025 - Sep 2025",
    type: "Internship",
    icon: BarChart3,
    points: [
      "Achieved a 10% reduction in average repair costs by developing an optimization algorithm for container-vendor allocation, improving decision accuracy through data-driven damage assessment.",
      "Developed and maintained interactive dashboards in Power BI, enabling real-time monitoring of key operational metrics and enhancing stakeholder visibility into business performance and trends.",
      "Conducted extensive exploratory data analysis and statistical modeling to identify repair trends, vendor inefficiencies, and anomalies, supporting data-driven decision making.",
      "Cleaned and preprocessed large datasets using Python and SQL, resolving inconsistencies and preparing data pipelines for analysis and dashboard integration.",
    ],
  },
  {
    title: "Assistant Lecturer of Data Warehouse",
    place: "Institut Teknologi Sepuluh Nopember",
    period: "Aug 2024 - Dec 2024",
    type: "Contract",
    icon: Database,
    points: [
      "Taught SQL fundamentals, database design, and data warehouse concepts.",
      "Delivered hands-on ETL training using Pentaho Data Integration and ELT operations with MySQL.",
      "Guided Power BI dashboard creation to help students implement data warehouse outputs.",
    ],
  },
  {
    title: "Research Assistant",
    place: "ITS & DJPPR",
    period: "Aug 2024 - Dec 2024",
    type: "Contract",
    icon: Sigma,
    points: [
      "Contributed to sentiment analysis research on the Indonesian Government Securities (SUN) market as part of an ITS-DJPPR research collaboration.",
      "Collected online news data through scraping from multiple platforms and performed sentiment analysis using VADER to assess public opinion.",
      "Analyzed sentiment patterns and translated the results into clear visualizations for research reporting and stakeholder discussion.",
    ],
  },
  {
    title: "Statistics Student Intern",
    place: "Kantor Pelayanan Perbendaharaan Negara, Kabupaten Sanggau",
    period: "Jul 2024 - Aug 2024",
    type: "Internship",
    icon: Landmark,
    points: [
      "Analyzed APBN data managed by KPPN Sanggau for Semester 1, 2024, providing actionable insights for reporting and decision-making.",
      "Created visually engaging reports and graphics that were featured in the KPPN Sanggau bulletin to improve stakeholder communication.",
      "Improved presentation materials with a focus on clarity and visual appeal.",
      "Gained deeper insights into APBN and the related ministries/agencies.",
    ],
  },
  {
    title: "Medical Record Intern",
    place: "Muhammadiyah Bandung Tulungagung Hospital",
    period: "Jan 2024 - Feb 2024",
    type: "Internship",
    icon: CircleGauge,
    points: [
      "Developed a SARIMA-based forecasting model to predict inpatient arrivals with 22% MAPE, providing Muhammadiyah Bandung Tulungagung Hospital with actionable insights for long-term workload anticipation and resource planning.",
      "Ensured accuracy and completeness of 100+ medical records, streamlining administrative processes.",
      "Developed a dynamic dashboard showcasing inpatient statistics, improving data accessibility and supporting management decisions.",
    ],
  },
  {
    title: "Assistant Lecturer of Database",
    place: "Institut Teknologi Sepuluh Nopember",
    period: "Aug 2023 - Dec 2023",
    type: "Contract",
    icon: Database,
    points: [
      "Supported the Database course for 54 students with a focus on DBMS fundamentals and MySQL practice.",
      "Developed teaching materials and supplementary learning resources for database and MySQL topics.",
      "Provided academic support by helping students resolve technical and subject-related issues.",
    ],
  },
  {
    title: "Assistant Lecturer of Mathematics I and Calculus II",
    place: "Institut Teknologi Sepuluh Nopember",
    period: "Feb 2023 - Jul 2023",
    type: "Contract",
    icon: Sigma,
    points: [
      "Supported 77 students in Mathematics I and 75 students in Calculus II through classroom instruction and tutoring.",
      "Prepared teaching materials and additional learning resources for foundational calculus topics.",
      "Used a personalized approach in guiding students and evaluating assignments across supporting classes.",
    ],
  },
];

export const organizationExperiences: TimelineItem[] = [
  {
    title: "Vice Chairman",
    place: "Professional Statistics (PSt) 2024",
    period: "Mar 2024 - Feb 2025",
    type: "Organization",
    icon: Users,
    points: [
      "Partnered with the Chairman to lead and oversee work programs executed by 50 members across multiple functions.",
      "Improved inter-divisional coordination through regular alignment meetings, helping teams resolve communication gaps and maintain program execution.",
      "Contributed to the development of a collaboration program concept with the Sidoarjo Regency Office of Cooperatives, creating a new revenue stream opportunity for the organization.",
      "Supported program evaluation and organizational improvement by reviewing team capacity, execution challenges, and strategic priorities.",
    ],
  },
  {
    title: "Staff of Research and Data Analytics Division",
    place: "Professional Statistics (PSt) 2023",
    period: "Mar 2023 - Mar 2024",
    type: "Organization",
    icon: BookOpen,
    points: [
      "Managed SITASI, a free statistics study and consultation program for ITS Statistics students.",
      "Coordinated tutor selection, learning facilities, schedules, and participant communication for more than 170 student registrations.",
      "Contributed to a performance appraisal score above 90 through structured execution and coordination of the SITASI program.",
    ],
  },
  {
    title: "Head of Conference Subject Data Analytics Competition",
    place: "Pekan Raya Statistika (PRS) 2023",
    period: "Nov 2022 - Oct 2023",
    type: "Committee",
    icon: Trophy,
    points: [
      "Led a team of 9 in developing competition materials for an ASEAN-level data analytics competition.",
      "Coordinated team contributions, supervisor feedback, and quality review to ensure competition materials were relevant, structured, and well-executed.",
      "Directed project strategy, established data partnerships through negotiation, and served as the main communication liaison with external stakeholders.",
    ],
  },
  {
    title: "Expert Staff of Equipment Division",
    place: "Scientist Championship (SCETCH) 2023",
    period: "May 2023 - Jun 2023",
    type: "Committee",
    icon: Users,
    points: [
      "Coordinated with the Mobile Legends Division to identify and fulfill required items and resources.",
      "Supervised staff members and assigned operational tasks to support event execution.",
      "Helped ensure equipment readiness across division needs during the competition period.",
    ],
  },
  {
    title: "Staff of Equipment Division",
    place: "Scientist Championship (SCETCH) 2022",
    period: "Sep 2022 - Oct 2022",
    type: "Committee",
    icon: Users,
    points: [
      "Handled procurement of required goods and monitored items to prevent loss or damage.",
      "Coordinated with other divisions to identify equipment and resource requirements.",
      "Sourced items needed by event divisions to support smooth event preparation.",
    ],
  },
  {
    title: "Academic Course Mentor",
    place: "Peer Learning and Exam Preparation",
    period: "Flexible",
    type: "Mentoring",
    icon: BookOpen,
    points: [
      "Actively mentored students preparing for exams, especially in statistics and mathematics subjects.",
      "Supported both departmental and cross-departmental students through peer-learning sessions focused on exam readiness.",
      "Explained core statistical and mathematical concepts in a practical, accessible way to help students build confidence before exams.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Statistics",
    place: "Institut Teknologi Sepuluh Nopember",
    period: "Jun 2021 - Sep 2025",
    note: "GPA 3.68, Cum Laude. Specialized in computational statistics with thesis on feature-based and image-based deepfake speech detection.",
    image: "/assets/education/logo-its.png",
    gallery: ["/assets/education/logo-its.png", "/assets/education/its-graduation.jpg"],
    relevantCourses: [
      "Statistical Modeling",
      "Machine Learning",
      "Data Mining",
      "Time Series",
      "Database",
      "Data Visualization",
    ],
    detail:
      "Studying Statistics at ITS gave me a strong analytical foundation, but the experience went beyond coursework. I was involved in teaching, research, student programs, and collaborative projects that helped me develop both technical depth and communication skills. These experiences taught me how to explain complex ideas clearly, work with different teams, and apply statistical thinking to practical problems.",
    highlights: [
      "Served as a Teaching Assistant for Calculus I & II, Database, and Data Warehouse, while also mentoring peers through HIMASTA-ITS learning programs.",
      "Conducted sentiment analysis research on the Indonesian Government Securities (SUN) market in collaboration with DJPPR.",
      "Contributed to student organizations, committee-based programs, and peer-learning activities through leadership roles, event coordination, and academic mentoring, including Vice Chairman of the PSt Division, CS Division Head for DAC, and exam preparation mentorship.",
      "Earned 1st Place at Visual Quest UNAIR and 3rd Place at ACTION UNESA through infographic and data storytelling competitions.",
      "Completed analytics-related internships at PT SPIL and KPPN Sanggau, applying data analysis to operational and public finance contexts.",
      "Developed a deep learning-based deepfake speech detection study comparing feature-based and image-based methodologies.",
    ],
  },
  {
    title: "Machine Learning Cohort",
    place: "Bangkit Academy by Google",
    period: "Feb 2024 - Jun 2024",
    note: "Distinction Graduate, Top 10%, average score 95.78. Built MoodMate NLP capstone and reached Top 50 out of 588 teams.",
    image: "/assets/education/logo-bangkit.png",
    gallery: ["/assets/education/logo-bangkit.png", "/assets/education/bangkit/bangkit-moodmate-meet.jpg"],
    relevantCourses: [
      "TensorFlow",
      "Deep Learning",
      "NLP",
      "Model Deployment",
      "Data Pipeline",
      "Capstone Project",
    ],
    detail:
      "Bangkit Academy helped me turn machine learning concepts into practical product development. Through structured learning and a team-based capstone project, I worked on TensorFlow workflows, NLP modeling, and model deployment for a journaling application. The experience strengthened my ability to experiment with models, collaborate across technical tracks, and build machine learning outputs that can support real user-facing products.",
    highlights: [
      "Completed structured learning in supervised learning, deep learning, TensorFlow, NLP, model evaluation, and deployment workflows.",
      "Built the machine learning component for MoodMate, a journaling application that classifies user emotions from text input and prepares the model for web deployment.",
      "Collaborated with a multidisciplinary team across machine learning, cloud computing, and mobile development tracks.",
      "Graduated as a Top 10% Distinction Graduate in the Machine Learning path, while MoodMate was selected as a Top 50 capstone project out of 588 teams.",
      "Learned to connect model performance with usability, application flow, and the needs of real users.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "First Place Winner - Visual Quest",
    issuer: "Dataquest 3.0, Airnology 3.0",
    detail:
      "Won first place with TALAS SUPER, a three-member infographic project for Visual Quest by FTMM UNAIR. The project highlighted the dangers of smoking, with my role focused on collecting data from multiple sources, analyzing patterns and relationships, and turning the findings into cohesive, reader-friendly visual information.",
    image: "/assets/honors/visual-quest.png",
    icon: Trophy,
    href: "https://www.behance.net/gallery/216517133/Infographics-on-the-Dangers-of-Smoking-and-Solutions/modules/1232858515",
  },
  {
    title: "Third Place Winner - ACTION",
    issuer: "ACTION Competition",
    detail:
      "Won third place with CLIMATE HERO, a three-member infographic project for ACTION by Data Science UNESA. The work explored how data science can help map and reduce the negative impact of CO2 emissions in Indonesia, with my role focused on gathering data, analyzing patterns and relationships, and visualizing the insights in an engaging graphic format.",
    image: "/assets/honors/action-third-place.png",
    icon: Trophy,
    href: "https://www.behance.net/gallery/216517711/Infographics-on-the-Dangers-of-Carbon-Emissions/modules/1232861319",
  },
  {
    title: "Distinction Graduate",
    issuer: "Bangkit Academy Machine Learning Path",
    detail:
      "Graduated as a Distinction Graduate in the Machine Learning path at Bangkit Academy by Google, placing in the Top 10% with an average score of 95.78. The program strengthened my foundation in end-to-end machine learning production, AI, data analytics, TensorFlow workflows, NLP, model evaluation, and deployment-oriented development.",
    image: "/assets/honors/bangkit-certificate.jpg",
    icon: GraduationCap,
  },
  {
    title: "Top 50 Capstone Project",
    issuer: "Bangkit Academy",
    detail:
      "MoodMate was selected as a Top 50 capstone project out of 588 teams. I worked on the machine learning component for a journaling application, building an NLP-based mood detection model that classifies journal entries into anger, sadness, fear, and joy, while also supporting chatbot interaction. The model achieved 92.60% testing accuracy and was converted to TensorFlow.js for web deployment.",
    image: "/assets/honors/top-50-bangkit.jpg",
    icon: Award,
    href: "https://github.com/MoodMate-Bangkit-2024",
  },
  {
    title: "Semifinalist - NSC UB",
    issuer: "National Statistics Competition",
    detail: "Reached semifinal stage in a statistics competition organized by Universitas Brawijaya.",
    image: "/assets/honors/nsc-semifinal.png",
    icon: Award,
  },
];

export const certifications: Certification[] = [
  {
    name: "Dev Certified for Machine Learning with TensorFlow",
    issuer: "Dev Certification",
    href: "https://dev.id/certificate/verify/ZJE0PXGV75",
    image: "/assets/certifications/dev_cert_dcml.png",
    detail:
      "Assesses practical TensorFlow proficiency across neural networks, image classification, natural language processing, time series prediction, and machine learning model development best practices.",
  },
  {
    name: "Mathematics for Machine Learning and Data Science Specialization",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/L2LAVZ82NSG4",
    image: "/assets/certifications/math_ml_ds.png",
    detail:
      "Strengthens the mathematical and statistical foundations behind machine learning, including linear algebra, calculus, Bayesian statistics, dimensionality reduction, data transformation, descriptive statistics, and model optimization.",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/MM3M7M6QDK2F",
    image: "/assets/certifications/machine_learning.png",
    detail:
      "Builds core machine learning foundations using NumPy, scikit-learn, and TensorFlow, covering supervised learning, classification, decision trees, unsupervised learning, anomaly detection, recommender systems, and reinforcement learning.",
  },
  {
    name: "DeepLearning.AI TensorFlow Developer Specialization",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/FZRTLFU4HHUM",
    image: "/assets/certifications/tensorflow_developer.png",
    detail:
      "Covers applied deep learning with TensorFlow, including computer vision, image augmentation, overfitting prevention, NLP systems, sequence models, embeddings, forecasting, and Keras-based neural network development.",
  },
  {
    name: "TensorFlow: Advanced Techniques Specialization",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/BUN676LVLZAW",
    image: "/assets/certifications/tensorflow_advanced.png",
    detail:
      "Explores advanced TensorFlow techniques such as the Functional API, custom losses and layers, GradientTape, distributed training optimization, object detection, segmentation, model interpretation, and generative deep learning.",
  },
  {
    name: "TensorFlow: Data and Deployment Specialization",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/BVZHGZNWR23Z",
    image: "/assets/certifications/tensorflow_data_and_deployment.png",
    detail:
      "Focuses on deploying TensorFlow models across browser, mobile, and serving environments using TensorFlow.js, TensorFlow Lite, TensorFlow Serving, TensorFlow Hub, TensorBoard, and data pipeline workflows.",
  },
];

export const contactItems = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/galih-fitriatmo", href: siteConfig.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/GalihFt", href: siteConfig.github, icon: Github },
  { label: "WhatsApp", value: "+62 812 5762 3853", href: "https://wa.me/6281257623853", icon: MessageCircle },
];

export const focusAreas = [
  "Statistical Data Analysis",
  "Operational Data Analysis",
  "Business Reporting",
  "Operational optimization",
  "Statistical forecasting",
  "Decision-support analytics",
];

export const visualSystem = {
  background: "#F6F9FF",
  text: "#425165",
  accent: "#6E9FE0",
  surface: "#F1F5FC",
  reason:
    "A soft blue palette keeps the interface calm and polished while giving the content more definition.",
};
