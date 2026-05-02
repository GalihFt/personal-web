import Image from "next/image";
import type { ComponentType } from "react";
import { Reveal } from "@/components/motion/reveal";

type AchievementCardProps = {
  item: {
    title: string;
    issuer: string;
    detail: string;
    image: string;
    icon: ComponentType<{ className?: string }>;
  };
  index?: number;
};

export function AchievementCard({ item, index = 0 }: AchievementCardProps) {
  const Icon = item.icon;

  return (
    <Reveal delay={index * 0.04} className="surface-card group overflow-hidden transition-transform duration-200 hover:-translate-y-1">
      <div className="relative aspect-[16/10] bg-[var(--surface)]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="p-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--surface)] text-[var(--accent-strong)]">
          <Icon className="h-5 w-5" />
        </span>
        <p className="mono mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{item.issuer}</p>
        <h3 className="mt-2 text-xl font-extrabold text-[var(--heading)]">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
      </div>
    </Reveal>
  );
}
