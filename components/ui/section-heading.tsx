import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-[var(--heading)] md:text-[2.75rem]">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
