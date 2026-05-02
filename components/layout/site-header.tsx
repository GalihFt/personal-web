"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,250,255,0.82)] backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--heading)] text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(63,111,184,0.18)]">
            {siteConfig.initials}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-[var(--heading)]">{siteConfig.name}</span>
            <span className="block text-xs font-medium text-[var(--muted)]">{siteConfig.role}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "bg-[var(--accent-soft)] text-[var(--heading)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--heading)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] bg-white text-[var(--heading)] md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-[var(--line)] md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-shell grid gap-2 py-4">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "focus-ring rounded-md px-3 py-3 text-sm font-semibold",
                      active ? "bg-[var(--accent-soft)] text-[var(--heading)]" : "bg-white text-[var(--muted)]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
