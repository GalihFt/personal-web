import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, siteConfig, socialLinks } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
            {siteConfig.role}
          </p>
          <h2 className="mt-3 max-w-xl text-2xl font-extrabold tracking-normal text-[var(--heading)] md:text-3xl">
            Building analytical systems that make business decisions easier to trust.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            This first portfolio iteration is built from the prepared asset folder and structured for future project
            images, detailed case studies, and content refinements.
          </p>
        </div>

        <div className="grid gap-4 md:justify-items-end">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md border border-[var(--line)] px-3 py-2 text-xs font-semibold text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--heading)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-[var(--heading)] hover:text-[var(--accent-strong)]"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
