import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Chip } from "@/components/ui/chip";
import type { Project } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: Project;
  index?: number;
  compact?: boolean;
};

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <Reveal
      delay={index * 0.04}
      className="surface-card group relative overflow-hidden p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),transparent)]" />
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(110,159,224,0.18)] bg-[rgba(255,255,255,0.95)] text-[var(--accent-strong)] shadow-[0_10px_24px_rgba(79,127,192,0.08)]">
          <Icon className="h-5 w-5" />
        </span>
        <Link
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="focus-ring rounded-full border border-transparent p-2 text-[var(--muted)] transition-colors hover:border-[rgba(110,159,224,0.18)] hover:bg-[var(--surface)] hover:text-[var(--heading)]"
          aria-label={`Open ${project.title} repository`}
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <p className="mono mt-5 text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
        {project.category}
      </p>
      <h3 className="mt-2 text-xl font-extrabold tracking-normal text-[var(--heading)]">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>

      {!compact ? (
        <>
          <div className="mt-5 grid gap-3 border-t border-[var(--line)] pt-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[rgba(237,244,255,0.42)] p-3">
              <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">Problem</p>
              <p className="mt-1 text-sm leading-7 text-[var(--text)]">{project.problem}</p>
            </div>
            <div className="rounded-2xl bg-[rgba(255,255,255,0.56)] p-3">
              <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">Impact</p>
              <p className="mt-1 text-sm leading-7 text-[var(--text)]">{project.impact}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Chip key={tool}>{tool}</Chip>
            ))}
          </div>
        </>
      ) : null}
    </Reveal>
  );
}
