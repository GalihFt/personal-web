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
    <section className="accent-wash border-b border-[var(--line)] py-16 md:py-20">
      <div className="container-shell">
        <Reveal className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-[var(--accent-strong)] shadow-[inset_0_0_0_1px_var(--line),0_12px_30px_rgba(63,111,184,0.14)]">
              <Icon className="h-5 w-5" />
            </span>
            <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{eyebrow}</p>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-normal text-[var(--heading)] md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">{description}</p>
          <div className="mt-8 max-w-xl">
            <div className="accent-divider" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
