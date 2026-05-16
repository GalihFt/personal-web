import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { EducationShowcase } from "@/components/sections/education-showcase";
import { ExperienceShowcase } from "@/components/sections/experience-showcase";
import { OrganizationShowcase } from "@/components/sections/organization-showcase";
import { ProjectShowcaseGrid } from "@/components/sections/project-showcase-grid";
import { SelectedCertificateGallery } from "@/components/sections/selected-certificate-gallery";
import { SectionDots } from "@/components/sections/section-dots";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  contactItems,
  education,
  focusAreas,
  siteConfig,
  skillGroups,
  socialLinks,
  toolStack,
} from "@/lib/portfolio-data";
import {
  honorCertificates,
  organizationEntries,
  showcaseProjects,
  skillCertifications,
  workExperienceEntries,
} from "@/lib/showcase-data";

function SectionKicker({ number, label }: { number: string; label: string }) {
  return (
    <p className="section-kicker">
      <span>{number}</span>
      {label}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="home-snap">
      <SectionDots />
      <section id="home" className="home-snap-section section-grid relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,248,255,0.98))]">
        <div className="blue-orbit -left-20 top-20 h-64 w-64" />
        <div className="blue-orbit right-10 top-12 h-72 w-72" />
        <div className="container-shell relative z-10 grid gap-6 py-8 md:py-10">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <Reveal>
              <SectionKicker number="01" label="Home" />
              <h1 className="mt-3 max-w-3xl text-5xl font-extrabold tracking-normal text-[var(--heading)] md:text-7xl">
                {siteConfig.name}
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[var(--text)]">{siteConfig.headline}</p>
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
                      target="_blank"
                      rel="noreferrer"
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

          <Reveal delay={0.12} className="rounded-[26px] border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-4 shadow-[0_18px_48px_rgba(34,50,74,0.07)] backdrop-blur md:p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--accent-strong)]">Tool Stack</p>
                <p className="mt-1 text-sm font-semibold text-[var(--muted)]">Practical tools for analysis, reporting, statistics, and workflow support.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-5 lg:grid-cols-10">
              {toolStack.map((tool) => (
                <div
                  key={tool.name}
                  className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-[18px] border border-[rgba(110,159,224,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,251,255,0.9))] p-3 text-center shadow-[0_8px_22px_rgba(34,50,74,0.045)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(237,244,255,0.72)]">
                    <Image src={tool.icon} alt="" width={30} height={30} className="max-h-7 max-w-7 object-contain" />
                  </div>
                  <span className="text-[13px] font-semibold leading-tight text-[var(--heading)]">{tool.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="profile" className="home-snap-section section-band section-tint">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <Reveal className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[0_20px_56px_rgba(34,50,74,0.1)]">
            <div className="relative aspect-[4/5] max-h-[68vh] bg-[var(--surface)]">
              <Image
                src={siteConfig.graduationImage}
                alt="Galih Fitriatmo portrait"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <SectionKicker number="02" label="Profile" />
            <h2 className="text-4xl font-extrabold tracking-normal text-[var(--heading)] md:text-6xl">Hi, I am Galih!</h2>
            <p className="mt-5 max-w-3xl text-base leading-[1.75] text-[var(--muted)] md:text-lg">
              As a <strong className="font-extrabold text-[var(--heading)]">Statistics graduate from ITS</strong> with over a year of{" "}
              <strong className="font-extrabold text-[var(--heading)]">practical analytics experience</strong>, I see data as a
              strategic tool for bridging technical infrastructure and business operations. My work focuses on turning chaotic,
              fragmented datasets into <strong className="font-extrabold text-[var(--heading)]">standardized insights</strong>,
              automated workflows, and decision-ready outputs. Over the past year, I have applied{" "}
              <strong className="font-extrabold text-[var(--heading)]">statistical analysis and process automation</strong>{" "}
              to improve <strong className="font-extrabold text-[var(--heading)]">operational efficiency, financial accuracy, and measurable business impact</strong>.
            </p>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="surface-card p-4">
                  <h3 className="text-base font-extrabold text-[var(--heading)]">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(110,159,224,0.18)] bg-[rgba(237,244,255,0.72)] px-3 py-1 text-xs font-bold text-[var(--heading)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="education" className="home-snap-section section-band bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionKicker number="03" label="Education" />
            <SectionHeading
              eyebrow="Education"
              title="Formal learning path that shaped my statistics, analytics, and machine learning foundation."
            />
          </Reveal>

          <div className="home-section-scroll mt-8">
            <EducationShowcase items={education} />
          </div>
        </div>
      </section>

      <section id="professional-experience" className="home-snap-section section-band section-surface">
        <div className="container-shell">
          <Reveal>
            <SectionKicker number="04" label="Professional Experience" />
            <SectionHeading
              eyebrow="Professional Experience"
              title="Practical roles where accuracy, repeatability, and business usefulness mattered in daily operations."
            />
          </Reveal>

          <div className="mt-5">
            <ExperienceShowcase items={workExperienceEntries} />
          </div>
        </div>
      </section>

      <section id="organization-experience" className="home-snap-section section-band section-tint">
        <div className="container-shell">
          <Reveal>
            <SectionKicker number="05" label="Leadership & Community Experience" />
            <SectionHeading
              eyebrow="Leadership & Community Experience"
              title="Leadership and coordination experience from turning ideas into organized student programs."
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
            <SectionKicker number="06" label="Projects" />
            <SectionHeading
              eyebrow="Projects"
              title="Selected work that connects technical implementation with real operational and analytical problems."
            />
          </Reveal>
          <div className="mt-5">
            <ProjectShowcaseGrid projects={showcaseProjects} />
          </div>
        </div>
      </section>

      <section id="honors" className="home-snap-section section-band section-surface">
        <div className="container-shell">
          <Reveal>
            <SectionKicker number="07" label="Honors & Awards" />
            <SectionHeading
              eyebrow="Honors"
              title="Achievements that reflect learning consistency, competition results, and program recognition."
            />
          </Reveal>

          <div className="home-section-scroll mt-6 rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-4 md:p-5">
            <SelectedCertificateGallery
              items={honorCertificates}
              emptyText="Select an honor certificate to preview."
              actionLabel="View work"
            />
          </div>
        </div>
      </section>

      <section id="certifications" className="home-snap-section section-band section-tint">
        <div className="container-shell">
          <Reveal>
            <SectionKicker number="08" label="Skill Certifications" />
            <SectionHeading
              eyebrow="Certifications"
              title="Skill-based certificates that support my work across machine learning, analytics, and applied data tools."
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

      <section id="contact" className="home-snap-section section-band section-surface">
        <div className="container-shell max-w-6xl">
          <Reveal>
            <SectionKicker number="09" label="Contact" />
            <SectionHeading
              eyebrow="Let's Connect!"
              title="I am open to career opportunities in data analytics, business intelligence, machine learning, and analytics automation. I enjoy working on problems that involve messy data, operational processes, and business decisions that need clearer evidence. If you are looking for someone who can combine statistical thinking, technical execution, and practical communication, feel free to reach out. I would be happy to connect, collaborate, or discuss potential opportunities."
              wide
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const isEmail = item.label === "Email";
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(110,159,224,0.18)] bg-white text-[var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="mono block text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-[var(--heading)]">{item.value}</span>
                    </span>
                  </>
                );

                if (isEmail) {
                  return (
                    <div key={item.label} className="surface-card flex items-center gap-4 p-4">
                      {content}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring surface-card flex items-center gap-4 p-4 hover:border-[var(--accent)]"
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
            <Link
              href={siteConfig.cvHref}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--button-bg)] px-4 py-3 text-sm font-bold text-[var(--button-text)] hover:bg-[var(--button-hover)]"
            >
              Download CV
              <Download className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
