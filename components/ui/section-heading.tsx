import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  wide?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className, wide = false }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : wide ? "max-w-6xl" : "max-w-3xl", className)}>
      <h2 className="text-2xl font-extrabold tracking-normal text-[var(--heading)] md:text-4xl">{eyebrow}</h2>
      <p className={cn("mt-2 text-pretty text-sm leading-7 text-[var(--muted)] md:text-base", wide ? "max-w-6xl" : "max-w-2xl")}>{title}</p>
      {description ? <p className="mt-1.5 max-w-2xl text-sm leading-7 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
