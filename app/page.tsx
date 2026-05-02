import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  Download,
  FileSpreadsheet,
  GitBranch,
  MapPin,
  MessageSquareText,
  PieChart,
  Presentation,
  Sigma,
  Sparkles,
  Users,
} from "lucide-react";
import { StatCard } from "@/components/cards/stat-card";
import { Reveal } from "@/components/motion/reveal";
import { ExperienceShowcase } from "@/components/sections/experience-showcase";
import { OrganizationShowcase } from "@/components/sections/organization-showcase";
import { ProjectShowcaseGrid } from "@/components/sections/project-showcase-grid";
import { SelectedCertificateGallery } from "@/components/sections/selected-certificate-gallery";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  contactItems,
  education,
  focusAreas,
  homeStats,
  siteConfig,
  skillGroups,
  socialLinks,
} from "@/lib/portfolio-data";
import {
  honorCertificates,
  organizationEntries,
  showcaseProjects,
  skillCertifications,
  workExperienceEntries,
} from "@/lib/showcase-data";

const skillIconMap = {
  "Data Visualization": BarChart3,
  "Statistical Modeling": Sigma,
  Forecasting: ChartNoAxesCombined,
  "Machine Learning": BrainCircuit,
  "Predictive Analytics": Sparkles,
  NLP: MessageSquareText,
  "Data Storytelling": Presentation,
  Python: Code2,
  R: PieChart,
  SQL: Database,
  "Power BI": BarChart3,
  Tableau: PieChart,
  "Looker Studio": BarChart3,
  Excel: FileSpreadsheet,
  Minitab: Sigma,
  SPSS: Sigma,
  Git: GitBranch,
  "Stakeholder Communication": Users,
  "Problem Solving": Sparkles,
  "Critical Thinking": BrainCircuit,
  "Data-driven Decision Making": Bot,
  "Team Management": Users,
  "Basic Accounting": FileSpreadsheet,
};

export default function HomePage() {
  return (
    <div className="home-snap">
      <section id="home" className="home-snap-section section-grid relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,248,255,0.98))]">
        <div className="blue-orbit -left-20 top-20 h-64 w-64" />
        <div className="blue-orbit right-10 top-12 h-72 w-72" />
        <div className="container-shell relative z-10 grid gap-6 py-8 md:py-10">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(110,159,224,0.18)] bg-[rgba(255,255,255,0.82)] px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{siteConfig.headline}</p>
              </div>
              <h1 className="mt-5 max-w-3xl text-5xl font-extrabold tracking-normal text-[var(--heading)] md:text-7xl">
                {siteConfig.name}
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[var(--text)]">{siteConfig.role}</p>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
                {siteConfig.description}
              </p>
              <div className="mt-6 max-w-md">
                <div className="accent-divider" />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {focusAreas.slice(0, 3).map((area) => (
                  <Chip key={area} className="bg-[rgba(255,255,255,0.78)]">
                    {area}
                  </Chip>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/#projects" label="View projects" />
                <ButtonLink href={siteConfig.cvHref} label="Download CV" variant="secondary" />
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-[var(--muted)]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--accent-strong)]" />
                  {siteConfig.location}
                </span>
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="focus-ring inline-flex items-center gap-2 rounded-md hover:text-[var(--heading)]"
                    >
                      <Icon className="h-4 w-4 text-[var(--accent-strong)]" />
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative aspect-[4/5] max-h-[62vh] overflow-hidden rounded-[24px] border border-[rgba(220,229,241,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(241,245,252,0.98))] shadow-[0_28px_90px_rgba(34,50,74,0.16)]">
                <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[rgba(110,159,224,0.16)] to-transparent" />
                <Image
                  src={siteConfig.heroImage}
                  alt="Galih Fitriatmo professional portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {homeStats.map((stat, index) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={index * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="home-snap-section section-band section-tint">
        <div className="container-shell grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Profile"
              title="From raw data to usable systems."
            />
            <div className="mt-6 rounded-[20px] border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-5">
              <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">How I Usually Work</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                Understand the process, clean the data, remove repetitive steps, then build something the team can keep using.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <Reveal
                key={area}
                delay={index * 0.03}
                className="surface-card relative overflow-hidden p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,var(--accent),transparent)]" />
                <p className="mono pl-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">0{index + 1}</p>
                <h3 className="mt-3 pl-3 text-lg font-extrabold text-[var(--heading)]">{area}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="home-snap-section section-band bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Education"
              title="Academic background and technical training."
            />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="surface-card overflow-hidden">
                <div className="grid gap-0">
                  <div className="relative min-h-[340px] bg-[var(--surface)]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
                  </div>
                  <div className="flex min-h-[220px] flex-col justify-center p-6">
                    <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{item.period}</p>
                    <h3 className="mt-3 text-3xl font-extrabold text-[var(--heading)]">{item.title}</h3>
                    <p className="mt-1 text-sm font-bold text-[var(--text)]">{item.place}</p>
                    <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="professional-experience" className="home-snap-section section-band section-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Professional Experience"
              title="Roles focused on reporting, validation, automation, and analysis."
            />
          </Reveal>

          <div className="home-section-scroll mt-6">
            <ExperienceShowcase items={workExperienceEntries} />
          </div>
        </div>
      </section>

      <section id="organization-experience" className="home-snap-section section-band section-tint">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Organization Experience"
              title="Leadership, coordination, and student organization work."
            />
          </Reveal>

          <div className="home-section-scroll mt-6">
            <OrganizationShowcase items={organizationEntries} />
          </div>
        </div>
      </section>

      <section id="projects" className="home-snap-section section-band">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="Analytics, automation, optimization, and machine learning work."
            />
          </Reveal>
          <div className="home-section-scroll mt-6">
            <ProjectShowcaseGrid projects={showcaseProjects} />
          </div>
        </div>
      </section>

      <section id="honors" className="home-snap-section section-band section-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Honors"
              title="Awards, recognition, and competition results."
            />
          </Reveal>

          <div className="home-section-scroll mt-6 rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-4 md:p-5">
            <SelectedCertificateGallery
              items={honorCertificates}
              emptyText="Select an honor certificate to preview."
            />
          </div>
        </div>
      </section>

      <section id="certifications" className="home-snap-section section-band section-tint">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Certifications"
              title="Technical credentials and course certificates."
            />
          </Reveal>

          <div className="home-section-scroll mt-6 rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-4 md:p-5">
            <SelectedCertificateGallery
              items={skillCertifications}
              emptyText="Select a skill certification to preview."
              actionLabel="Verify credential"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="home-snap-section section-band">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="Tools I use across analytics work."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 0.04}
                className="surface-card relative min-h-[390px] overflow-hidden p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),transparent)]" />
                <h3 className="text-2xl font-extrabold text-[var(--heading)]">{group.title}</h3>
                <div className="mt-6 grid gap-3">
                  {group.items.map((item) => {
                    const Icon = skillIconMap[item as keyof typeof skillIconMap] ?? Sparkles;

                    return (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-lg border border-[rgba(110,159,224,0.16)] bg-[rgba(237,244,255,0.48)] px-3 py-2.5"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-[var(--accent-strong)] shadow-[inset_0_0_0_1px_var(--line)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-bold text-[var(--heading)]">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="home-snap-section section-band section-surface">
        <div className="container-shell max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Direct links for email, profile, code, and CV."
            />
            <div className="mt-6 rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(237,244,255,0.72),rgba(255,255,255,0.9))] p-5">
              <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">Best Fit</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                Teams that need reporting automation, cleaner validation flows, or practical analytics support for daily operations.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="focus-ring surface-card flex items-center gap-4 p-4 hover:border-[var(--accent)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(110,159,224,0.18)] bg-white text-[var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="mono block text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-[var(--heading)]">{item.value}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link
              href={siteConfig.cvHref}
              className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--heading)] px-4 py-3 text-sm font-bold text-white hover:bg-[var(--accent-strong)]"
            >
              Download CV
              <Download className="h-4 w-4" />
            </Link>
            <div className="mt-8 rounded-lg border border-[var(--line)] bg-[var(--heading)] p-6 text-white">
              <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--surface)]">
                {siteConfig.role}
              </p>
              <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
                Building analytical systems that make business decisions easier to trust.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#d7e1ea]">
                Available for analytics roles, automation work, and data-driven product collaboration.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
