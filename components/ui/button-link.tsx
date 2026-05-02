import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, label, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition-all duration-200",
        variant === "primary"
          ? "bg-[var(--heading)] text-white shadow-[0_14px_30px_rgba(33,48,63,0.12)] hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          : "border border-[var(--line)] bg-white text-[var(--heading)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--surface-2)]",
        className,
      )}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
