import { Reveal } from "@/components/motion/reveal";
import type { TimelineItem } from "@/lib/portfolio-data";

type ExperienceCardProps = {
  item: TimelineItem;
  index?: number;
};

export function ExperienceCard({ item, index = 0 }: ExperienceCardProps) {
  const Icon = item.icon;

  return (
    <Reveal
      delay={index * 0.04}
      className="surface-card relative overflow-hidden p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      <div className="absolute left-10 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(110,159,224,0.35),transparent)]" />
      <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(110,159,224,0.18)] bg-white text-[var(--accent-strong)]">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{item.type}</p>
            <h3 className="mt-1 text-xl font-extrabold text-[var(--heading)]">{item.title}</h3>
            <p className="mt-1 text-sm font-semibold text-[var(--text)]">{item.place}</p>
          </div>
        </div>
        <p className="mono rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-2 text-xs font-semibold text-[var(--muted)]">
          {item.period}
        </p>
      </div>
      <ul className="mt-5 grid gap-2 border-t border-[var(--line)] pt-5">
        {item.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
