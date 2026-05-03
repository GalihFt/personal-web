"use client";

import { type MouseEvent, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type SectionDot = {
  id: string;
  label: string;
};

const sectionDots: SectionDot[] = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "professional-experience", label: "Professional" },
  { id: "organization-experience", label: "Community" },
  { id: "projects", label: "Projects" },
  { id: "honors", label: "Honors" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function SectionDots() {
  const [activeId, setActiveId] = useState("home");
  const ids = useMemo(() => sectionDots.map((item) => item.id), []);

  useEffect(() => {
    const root = document.querySelector(".home-snap");
    const sections = ids
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
          setActiveId(visible.target.id);
        }
      },
      { root, threshold: [0.42, 0.62] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", `/#${id}`);
    setActiveId(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-2 shadow-[0_18px_50px_rgba(34,50,74,0.12)] backdrop-blur-xl xl:flex"
    >
      <div className="flex flex-col gap-2">
        {sectionDots.map((item, index) => (
          <a
            key={item.id}
            href={`/#${item.id}`}
            aria-label={`Go to ${item.label}`}
            title={item.label}
            onClick={(event) => handleClick(event, item.id)}
            className={cn(
              "focus-ring group relative flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-extrabold transition",
              activeId === item.id
                ? "bg-[var(--button-bg)] text-[var(--button-text)] shadow-[0_8px_18px_rgba(79,127,192,0.28)]"
                : "text-[var(--accent-strong)] hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]",
            )}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="pointer-events-none absolute right-9 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-[var(--line)] bg-white px-2.5 py-1 text-xs font-bold text-[var(--heading)] shadow-[0_12px_28px_rgba(34,50,74,0.12)] group-hover:block">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
