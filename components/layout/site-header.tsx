"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent, useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function syncHash() {
      setActiveHash(window.location.hash || "#home");
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const root = document.querySelector(".home-snap");
    const sections = navItems
      .flatMap((item) => [item, ...(item.children ?? [])])
      .map((item) => item.href.split("#")[1])
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!root || sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      { root, threshold: [0.45, 0.65] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const [targetPath, targetHash] = href.split("#");

    setOpen(false);

    if (pathname !== "/" || targetPath !== "/" || !targetHash) {
      return;
    }

    const target = document.getElementById(targetHash);

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", href);
    setActiveHash(`#${targetHash}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function isActive(href: string) {
    const [targetPath, targetHash = ""] = href.split("#");

    if (targetPath !== "/" || pathname !== "/") {
      return pathname === targetPath;
    }

    return activeHash === `#${targetHash || "home"}`;
  }

  function isGroupActive(item: (typeof navItems)[number]) {
    return isActive(item.href) || Boolean(item.children?.some((child) => isActive(child.href)));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,250,255,0.82)] backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/#home" onClick={(event) => handleNavClick(event, "/#home")} className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--heading)] text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(63,111,184,0.18)]">
            {siteConfig.initials}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-[var(--heading)]">{siteConfig.name}</span>
            <span className="block text-xs font-medium text-[var(--muted)]">{siteConfig.role}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = isGroupActive(item);

            return item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={cn(
                    "focus-ring inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "bg-[var(--accent-soft)] text-[var(--heading)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--heading)]",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute right-0 top-full z-50 min-w-52 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid gap-1 rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.96)] p-2 shadow-[0_18px_48px_rgba(34,50,74,0.14)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={(event) => handleNavClick(event, child.href)}
                        className={cn(
                          "focus-ring rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                          isActive(child.href)
                            ? "bg-[var(--accent-soft)] text-[var(--heading)]"
                            : "text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--heading)]",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={cn(
                  "focus-ring rounded-md px-2.5 py-2 text-sm font-semibold transition-colors",
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
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] bg-white text-[var(--heading)] lg:hidden"
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
            className="overflow-hidden border-t border-[var(--line)] lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-shell grid gap-2 py-4">
              {navItems.map((item) => {
                const active = isGroupActive(item);

                return (
                  <div key={item.href} className="grid gap-2">
                    <Link
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item.href)}
                      className={cn(
                        "focus-ring rounded-md px-3 py-3 text-sm font-semibold",
                        active ? "bg-[var(--accent-soft)] text-[var(--heading)]" : "bg-white text-[var(--muted)]",
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <div className="grid gap-2 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={(event) => handleNavClick(event, child.href)}
                            className={cn(
                              "focus-ring rounded-md px-3 py-2 text-sm font-semibold",
                              isActive(child.href) ? "bg-[var(--accent-soft)] text-[var(--heading)]" : "bg-white text-[var(--muted)]",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
