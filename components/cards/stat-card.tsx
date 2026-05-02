import { Reveal } from "@/components/motion/reveal";

type StatCardProps = {
  value: string;
  label: string;
  delay?: number;
};

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <Reveal delay={delay} className="surface-card accent-wash p-5">
      <p className="mono text-3xl font-semibold text-[var(--heading)]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{label}</p>
    </Reveal>
  );
}
