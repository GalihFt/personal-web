"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type ExperienceEntry = {
  title: string;
  place: string;
  period: string;
  type: string;
  points: string[];
  summary: string;
  gallery: string[];
};

type ExperienceShowcaseProps = {
  items: ExperienceEntry[];
};

const typeFilters = ["All", "Full-time", "Internship", "Contract"] as const;
type TypeFilter = (typeof typeFilters)[number];

const roleFocusMap: Record<string, string[]> = {
  "Accounting Data Analyst": ["Business data analysis", "Operational improvement", "Decision support"],
  "Data Analyst Intern": ["Optimization logic", "Operational dashboards", "Repair cost analysis"],
  "Assistant Lecturer of Data Warehouse": ["SQL & ETL guidance", "Hands-on data systems", "Teaching support"],
  "Research Assistant": ["Sentiment analysis", "Scraped data processing", "Research visualization"],
  "Statistics Student Intern": ["Public finance analysis", "Reporting output", "Publication support"],
  "Medical Record Intern": ["Healthcare records", "Forecasting support", "Dashboard preparation"],
  "Assistant Lecturer of Database": ["DBMS fundamentals", "MySQL practice", "Student guidance"],
  "Assistant Lecturer of Mathematics I and Calculus II": ["Foundational calculus", "Tutoring support", "Assignment guidance"],
};

export function ExperienceShowcase({ items }: ExperienceShowcaseProps) {
  const [selectedTitle, setSelectedTitle] = useState(items[0]?.title ?? "");
  const [activeFilter, setActiveFilter] = useState<TypeFilter>("All");
  const filteredItems = activeFilter === "All" ? items : items.filter((item) => item.type === activeFilter);
  const selected = filteredItems.find((item) => item.title === selectedTitle) ?? filteredItems[0];

  if (!selected) {
    return null;
  }

  const focusAreas = roleFocusMap[selected.title] ?? [selected.type, selected.place, "Applied analytics"];

  return (
    <div className="grid gap-4">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {typeFilters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => {
                const nextItems = filter === "All" ? items : items.filter((item) => item.type === filter);
                setActiveFilter(filter);
                setSelectedTitle(nextItems[0]?.title ?? "");
              }}
              className={cn(
                "focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors",
                active
                  ? "border-[var(--accent-strong)] bg-[var(--button-bg)] text-[var(--button-text)]"
                  : "border-[var(--line)] bg-[var(--card-bg)] text-[var(--heading)] hover:border-[var(--accent)]",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 xl:h-[calc(100dvh-18.5rem)] xl:grid-cols-[390px_minmax(0,1fr)]">
        <div className="surface-card relative overflow-hidden p-4 xl:h-full">
          <div className="experience-timeline-scroll grid auto-rows-max content-start items-start gap-2.5 overflow-y-auto pr-1 xl:h-full">
            {filteredItems.map((item, index) => {
              const active = item.title === selected.title;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedTitle(item.title)}
                  className={cn(
                    "focus-ring relative w-full rounded-[20px] border border-transparent bg-transparent px-3.5 py-3 text-left transition-all duration-200",
                    active
                      ? "border-[rgba(110,159,224,0.28)] bg-[linear-gradient(180deg,rgba(237,244,255,0.78),rgba(255,255,255,0.94))] shadow-[0_14px_34px_rgba(38,52,69,0.06)]"
                      : "hover:border-[rgba(110,159,224,0.18)] hover:bg-[rgba(237,244,255,0.32)]",
                  )}
                >
                  <div className="grid grid-cols-[34px_minmax(0,1fr)] gap-3">
                    <div className="relative flex justify-center">
                      {index < filteredItems.length - 1 ? (
                        <span className="absolute left-1/2 top-6 h-[calc(100%+0.9rem)] w-[2px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(110,159,224,0.34),rgba(110,159,224,0.12))]" />
                      ) : null}
                      <span
                        className={cn(
                          "mt-1 flex h-5 w-5 items-center justify-center rounded-full border transition-colors",
                          active
                            ? "border-[var(--accent-strong)] bg-[var(--accent-strong)] shadow-[0_0_0_5px_rgba(110,159,224,0.12)]"
                            : "border-[rgba(110,159,224,0.32)] bg-[var(--card-bg)]",
                        )}
                      >
                        <span className={cn("h-1.5 w-1.5 rounded-full", active ? "bg-white" : "bg-[var(--accent)]")} />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="mono text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                          {String(index + 1).padStart(2, "0")} . {item.period}
                        </p>
                        <span className="rounded-full border border-[rgba(110,159,224,0.2)] bg-[rgba(237,244,255,0.72)] px-2 py-0.5 text-[10px] font-bold text-[var(--accent-strong)]">
                          {item.type}
                        </span>
                      </div>
                      <h4 className="mt-1.5 text-[1rem] font-extrabold leading-snug text-[var(--heading)] md:text-[1.08rem]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[13px] font-semibold text-[var(--text)]">{item.place}</p>
                      <p className="mt-1.5 line-clamp-2 text-[13px] leading-5 text-[var(--muted)]">{item.summary}</p>
                    </div>
                  </div>
                </button>
              );
          })}
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,250,255,0.98))] shadow-[0_20px_60px_rgba(34,50,74,0.1)] xl:h-full">
          <div className="grid gap-4 p-5 lg:p-6 xl:h-full xl:grid-rows-[auto_auto_auto_1fr]">
            <div className="grid gap-4 border-b border-[var(--line)] pb-4">
              <div>
                <h3 className="text-[2rem] font-extrabold leading-tight text-[var(--heading)]">{selected.title}</h3>
                <p className="mt-1.5 text-sm font-semibold text-[var(--text)]">{selected.place}</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <div className="rounded-full border border-[rgba(110,159,224,0.2)] bg-[rgba(237,244,255,0.72)] px-3 py-1.5">
                    <span className="mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">Period</span>
                    <span className="ml-2 text-sm font-semibold text-[var(--heading)]">{selected.period}</span>
                  </div>
                  <div className="rounded-full border border-[rgba(110,159,224,0.2)] bg-[rgba(237,244,255,0.72)] px-3 py-1.5">
                    <span className="mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">Type</span>
                    <span className="ml-2 text-sm font-semibold text-[var(--heading)]">{selected.type}</span>
                  </div>
                  <div className="rounded-full border border-[rgba(110,159,224,0.2)] bg-[rgba(237,244,255,0.72)] px-3 py-1.5">
                    <span className="mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">Company</span>
                    <span className="ml-2 text-sm font-semibold text-[var(--heading)]">{selected.place}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[var(--accent)] bg-[rgba(237,244,255,0.5)] px-4 py-3">
              <p className="text-[0.92rem] font-semibold leading-7 text-[var(--heading)]">{selected.summary}</p>
            </div>

            <div className="grid gap-2">
              <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((focus) => (
                  <span
                    key={focus}
                    className="rounded-full border border-[rgba(110,159,224,0.18)] bg-[rgba(237,244,255,0.56)] px-3 py-1 text-xs font-bold text-[var(--heading)]"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel-scroll rounded-[24px] border border-[rgba(110,159,224,0.16)] bg-[linear-gradient(180deg,rgba(237,244,255,0.62),rgba(255,255,255,0.86))] p-4 xl:min-h-0 xl:overflow-y-auto">
              <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">Key Contributions</p>
              <div className="mt-3 grid gap-3">
                {selected.points.map((point, index) => (
                  <div key={point} className="flex gap-3 border-l border-[rgba(110,159,224,0.24)] pl-4">
                    <span className="mono shrink-0 text-xs font-extrabold text-[var(--accent-strong)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.9rem] font-semibold leading-6 text-[var(--heading)]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
