import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { ProjectCard } from "@/components/cards/project-card";
import { StatCard } from "@/components/cards/stat-card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  featuredProjects,
  focusAreas,
  homeStats,
  profileSummary,
  siteConfig,
  skillGroups,
  socialLinks,
  visualSystem,
  workExperiences,
} from "@/lib/portfolio-data";

export default function HomePage() {
  return (
    <>
      <section className="section-grid relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,248,255,0.98))]">
        <div className="blue-orbit -left-20 top-20 h-64 w-64" />
        <div className="blue-orbit right-10 top-12 h-72 w-72" />
        <div className="container-shell grid min-h-[calc(100vh-4rem)] gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
          <Reveal className="relative z-10">
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

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects" label="View projects" />
              <ButtonLink href={siteConfig.cvHref} label="Download CV" variant="secondary" />
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-[var(--muted)]">
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

          <Reveal delay={0.08} className="relative z-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-[rgba(220,229,241,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(241,245,252,0.98))] shadow-[0_28px_90px_rgba(34,50,74,0.16)]">
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
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[20px] border border-[var(--line)] bg-[rgba(255,255,255,0.84)] p-4 backdrop-blur-md">
                <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">Impact Snapshot</p>
                <p className="mt-3 text-2xl font-extrabold text-[var(--heading)]">30+ hrs</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">Monthly reporting work reduced through automation.</p>
              </div>
              <div className="rounded-[20px] border border-[rgba(79,127,192,0.18)] bg-[linear-gradient(180deg,rgba(79,127,192,0.08),rgba(255,255,255,0.92))] p-4 backdrop-blur-md">
                <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">Current Focus</p>
                <p className="mt-3 text-sm font-bold leading-6 text-[var(--heading)]">Analytics automation, reporting systems, and applied ML.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-white py-8">
        <div className="container-shell grid gap-4 md:grid-cols-4">
          {homeStats.map((stat, index) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} delay={index * 0.04} />
          ))}
        </div>
      </section>

      <section className="section-band section-tint">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Profile"
              title="From raw data to systems people can actually use."
              description={profileSummary.join(" ")}
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

      <section className="section-band section-surface">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Featured Projects"
                title="Projects that show both business context and technical depth."
                description="These are the clearest examples of how I approach automation, optimization, and applied machine learning."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <ButtonLink href="/projects" label="See all projects" variant="secondary" />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {featuredProjects.slice(2).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 2} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Experience shaped by operations, finance, and analytical problem-solving."
              description="My roles have focused on making business data easier to validate, report, and act on."
            />
            <div className="mt-7">
              <ButtonLink href="/experience" label="Explore experience" variant="secondary" />
            </div>
          </Reveal>

          <div className="grid gap-4">
            {workExperiences.slice(0, 3).map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04} className="surface-card relative overflow-hidden p-5">
                  <div className="absolute left-5 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(110,159,224,0.35),transparent_84%)]" />
                  <div className="relative flex items-start gap-4 pl-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(110,159,224,0.2)] bg-[rgba(255,255,255,0.95)] text-[var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{item.period}</p>
                      <h3 className="mt-1 text-lg font-extrabold text-[var(--heading)]">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{item.place}</p>
                      <ul className="mt-3 grid gap-2">
                        {item.points.slice(0, 2).map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band section-surface">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="Tools I use to automate reporting and support decisions."
              description={visualSystem.reason}
            />
          </Reveal>
          <div className="grid gap-5">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 0.04}
                className="surface-card relative overflow-hidden p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),transparent)]" />
                <h3 className="text-lg font-extrabold text-[var(--heading)]">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-shell">
          <Reveal className="grid gap-6 rounded-lg border border-[var(--line)] bg-[var(--heading)] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--surface)]">Open to work</p>
              <h2 className="mt-3 text-2xl font-extrabold md:text-4xl">Open to analytics roles and data teams.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#d7e1ea]">Available for internships, junior analyst roles, and project-based collaboration.</p>
            </div>
            <Link
              href={siteConfig.cvHref}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-[var(--heading)] hover:bg-[var(--surface)]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
