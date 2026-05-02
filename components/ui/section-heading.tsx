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
      <h2 className="text-3xl font-extrabold tracking-normal text-[var(--heading)] md:text-[2.75rem]">{eyebrow}</h2>
      <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-[var(--muted)]">{title}</p>
      {description ? <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
