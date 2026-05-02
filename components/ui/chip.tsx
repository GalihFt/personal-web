import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgba(110,159,224,0.18)] bg-[rgba(237,244,255,0.72)] px-2.5 py-1 text-xs font-semibold text-[var(--text)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
