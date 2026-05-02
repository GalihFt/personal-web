import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ icon: Icon, eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="accent-wash border-b border-[var(--line)] py-10 md:py-12">
      <div className="container-shell">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[var(--accent-strong)] shadow-[inset_0_0_0_1px_var(--line),0_10px_24px_rgba(63,111,184,0.12)]">
              <Icon className="h-4 w-4" />
            </span>
            <h1 className="text-4xl font-extrabold tracking-normal text-[var(--heading)] md:text-5xl">{eyebrow}</h1>
          </div>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-[var(--muted)]">{title}</p>
          {description ? <p className="mt-1.5 max-w-2xl text-sm leading-7 text-[var(--muted)]">{description}</p> : null}
          <div className="mt-5 max-w-md">
            <div className="accent-divider" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
