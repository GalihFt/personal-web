"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  ChevronDown,
  FileSpreadsheet,
  Landmark,
  Network,
  PackageCheck,
  ReceiptText,
  Route,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Chip } from "@/components/ui/chip";
import type { Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export type ExplorerProject = Omit<Project, "icon">;

type ProjectExplorerProps = {
  projects: ExplorerProject[];
};

const projectIcons = {
  "Roundtrip Mapping Optimization": Route,
  "Deepfake Speech Detection": BrainCircuit,
  "MoodMate Machine Learning": Sparkles,
  "Container Repair Optimizer": PackageCheck,
  "Auto RK Branch": Network,
  "Piutang Reconciliation Automation": ReceiptText,
  "KBM Accrual Automation": FileSpreadsheet,
  "Hotel Reservation Cancellation Dashboard": Building2,
  "Inpatient Admission Forecasting": ChartNoAxesCombined,
  "TALAS SUPER": BarChart3,
  "CLIMATE HERO": BarChart3,
  "Buletin Kapuas": Landmark,
  "Management Information System Excel Dashboard": BarChart3,
};

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [expandedTitle, setExpandedTitle] = useState(projects[0]?.title ?? "");

  const visibleProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const searchable = `${project.title} ${project.category} ${project.summary} ${project.tools.join(" ")}`.toLowerCase();
    return matchesCategory && searchable.includes(query.toLowerCase());
  });

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(245,249,255,0.96))] p-4 md:grid-cols-[1fr_auto] md:items-center">
        <label className="focus-within:ring-[var(--accent-strong)] flex min-h-11 items-center gap-3 rounded-full border border-[var(--line)] bg-white px-4 focus-within:ring-2">
          <Search className="h-4 w-4 text-[var(--accent-strong)]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, stack, or domain"
            className="h-full w-full bg-transparent text-sm font-semibold text-[var(--heading)] outline-none placeholder:text-[var(--muted)]"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "focus-ring rounded-full border px-3 py-2 text-xs font-bold transition-colors",
                activeCategory === category
                  ? "border-[rgba(79,127,192,0.18)] bg-[var(--accent-soft)] text-[var(--heading)]"
                  : "border-[var(--line)] bg-white text-[var(--text)] hover:border-[var(--accent)]",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const Icon = projectIcons[project.title as keyof typeof projectIcons] ?? FileSpreadsheet;
            const expanded = expandedTitle === project.title;

            return (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24, delay: index * 0.02 }}
                className="surface-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpandedTitle(expanded ? "" : project.title)}
                  className="focus-ring flex w-full flex-col gap-4 p-5 text-left md:flex-row md:items-start md:justify-between"
                >
                  <span className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(110,159,224,0.18)] bg-[rgba(255,255,255,0.95)] text-[var(--accent-strong)] shadow-[0_10px_24px_rgba(79,127,192,0.08)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                        {project.category}
                      </span>
                      <span className="mt-2 block text-xl font-extrabold text-[var(--heading)]">{project.title}</span>
                      <span className="mt-2 block max-w-3xl text-sm leading-7 text-[var(--muted)]">{project.summary}</span>
                    </span>
                  </span>
                  <ChevronDown className={cn("h-5 w-5 shrink-0 text-[var(--accent-strong)] transition-transform", expanded && "rotate-180")} />
                </button>

                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-5 border-t border-[var(--line)] p-5 md:grid-cols-[1fr_1fr_auto]">
                        <div className="rounded-2xl bg-[rgba(237,244,255,0.4)] p-3">
                          <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">Problem</p>
                          <p className="mt-2 text-sm leading-7 text-[var(--text)]">{project.problem}</p>
                        </div>
                        <div className="rounded-2xl bg-[rgba(255,255,255,0.56)] p-3">
                          <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">Impact</p>
                          <p className="mt-2 text-sm leading-7 text-[var(--text)]">{project.impact}</p>
                        </div>
                        <Link
                          href={project.link}
                          className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--button-bg)] px-4 text-sm font-bold text-[var(--button-text)] hover:bg-[var(--button-hover)]"
                        >
                          Repo
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2 px-5 pb-5">
                        {project.tools.map((tool) => (
                          <Chip key={tool}>{tool}</Chip>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </AnimatePresence>

        {visibleProjects.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[var(--line)] bg-white p-8 text-center text-sm font-semibold text-[var(--muted)]">
            No project matched that filter.
          </div>
        ) : null}
      </div>
    </div>
  );
}
