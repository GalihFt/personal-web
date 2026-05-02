import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, focusAreas, profileSummary, siteConfig, skillGroups } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        icon={BadgeCheck}
        eyebrow="About"
        title="Statistics graduate focused on usable analytics systems."
        description=""
      />

      <section className="section-band bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)]">
            <Image
              src={siteConfig.portrait}
              alt="Galih Fitriatmo portrait"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </Reveal>

          <div className="grid gap-6">
            <Reveal>
              <SectionHeading
                eyebrow="Profile"
                title="Business questions, technical execution, and practical output."
                description={profileSummary[0]}
              />
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{profileSummary[1]}</p>
            </Reveal>

            <Reveal delay={0.05} className="surface-card p-5">
              <h3 className="text-xl font-extrabold text-[var(--heading)]">Analytical focus</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Chip key={area}>{area}</Chip>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-shell">
          <Reveal>
              <SectionHeading
                eyebrow="Education"
                title="Academic background and technical training."
              />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="surface-card overflow-hidden">
                <div className="relative aspect-[16/9] bg-[var(--surface)]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{item.period}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-[var(--heading)]">{item.title}</h3>
                  <p className="mt-1 text-sm font-bold text-[var(--text)]">{item.place}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
              <SectionHeading
                eyebrow="Skills"
                title="Tools and methods I use across analytics work."
              />
          </Reveal>
          <div className="grid gap-5">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.04} className="surface-card p-5">
                <h3 className="text-xl font-extrabold text-[var(--heading)]">{group.title}</h3>
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
    </>
  );
}
