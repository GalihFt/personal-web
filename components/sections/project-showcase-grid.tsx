"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  Network,
  PackageCheck,
  Route,
  Sparkles,
  X,
  ChartNoAxesCombined,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/lib/utils";

export type ShowcaseProject = {
  title: string;
  category: string;
  featured: boolean;
  summary: string;
  problem: string;
  impact: string;
  tools: string[];
  link: string;
  gallery: string[];
  signals: { value: string; label: string }[];
};

type ProjectShowcaseGridProps = {
  projects: ShowcaseProject[];
};

const iconMap = {
  "Roundtrip Mapping Optimization": Route,
  "Deepfake Speech Detection": BrainCircuit,
  "MoodMate Machine Learning": Sparkles,
  "Container Repair Optimizer": PackageCheck,
  "Auto RK Branch": Network,
  "KBM Accrual Automation": FileSpreadsheet,
  "Hotel Reservation Cancellation Dashboard": Building2,
  "Inpatient Admission Forecasting": ChartNoAxesCombined,
};

export function ProjectShowcaseGrid({ projects }: ProjectShowcaseGridProps) {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [imageIndexByTitle, setImageIndexByTitle] = useState<Record<string, number>>(
    Object.fromEntries(projects.map((project) => [project.title, 0])),
  );

  const selected = projects.find((project) => project.title === selectedTitle) ?? null;
  const visibleSlice = projects.slice(startIndex, startIndex + 4);

  function shiftCards(direction: -1 | 1) {
    const next = startIndex + direction;

    if (next < 0 || next > Math.max(projects.length - 4, 0)) {
      return;
    }

    setSlideDirection(direction);
    setStartIndex(next);
  }

  function shiftImage(direction: -1 | 1) {
    if (!selected) {
      return;
    }

    const total = selected.gallery.length;
    const currentIndex = imageIndexByTitle[selected.title] ?? 0;
    const nextIndex = (currentIndex + direction + total) % total;

    setImageIndexByTitle((current) => ({
      ...current,
      [selected.title]: nextIndex,
    }));
  }

  return (
    <>
      <div className="grid gap-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[var(--muted)]">
            Showing {visibleSlice.length} of {projects.length} projects
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => shiftCards(-1)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)] disabled:opacity-40"
              disabled={startIndex === 0}
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => shiftCards(1)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)] disabled:opacity-40"
              disabled={startIndex >= Math.max(projects.length - 4, 0)}
              aria-label="Next projects"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: slideDirection > 0 ? 48 : -48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection > 0 ? -48 : 48 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            >
              {visibleSlice.map((project) => {
                const Icon = iconMap[project.title as keyof typeof iconMap] ?? FileSpreadsheet;

                return (
                  <motion.button
                    layout
                    key={project.title}
                    type="button"
                    onClick={() => setSelectedTitle(project.title)}
                    className="focus-ring overflow-hidden rounded-[26px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,250,255,0.98))] text-left shadow-[0_16px_48px_rgba(34,50,74,0.08)] transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image src={project.gallery[0]} alt={project.title} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(110,159,224,0.18)] bg-white text-[var(--accent-strong)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{project.category}</p>
                          <h3 className="mt-1 line-clamp-2 text-lg font-extrabold text-[var(--heading)]">{project.title}</h3>
                        </div>
                      </div>
                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tools.slice(0, 3).map((tool) => (
                          <Chip key={tool}>{tool}</Chip>
                        ))}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgba(17,25,40,0.55)] p-4 backdrop-blur-sm md:p-8"
            onClick={() => setSelectedTitle(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="mx-auto grid h-full max-w-6xl overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.4)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,250,255,0.98))] shadow-[0_28px_90px_rgba(17,25,40,0.25)] lg:grid-cols-[1.05fr_0.95fr]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid min-h-0 gap-4 border-b border-[var(--line)] p-5 lg:border-b-0 lg:border-r lg:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{selected.category}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedTitle(null)}
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)]"
                    aria-label="Close project detail"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-[rgba(110,159,224,0.18)] bg-[linear-gradient(180deg,rgba(237,244,255,0.58),rgba(255,255,255,0.88))]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={selected.gallery[imageIndexByTitle[selected.title] ?? 0]}
                      alt={selected.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                  {selected.gallery.length > 1 ? (
                    <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3">
                      <button
                        type="button"
                        onClick={() => shiftImage(-1)}
                        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.82)] text-[var(--heading)] backdrop-blur-md"
                        aria-label="Previous project image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => shiftImage(1)}
                        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.82)] text-[var(--heading)] backdrop-blur-md"
                        aria-label="Next project image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {selected.gallery.map((image, index) => (
                    <button
                      key={`${selected.title}-gallery-${image}`}
                      type="button"
                      onClick={() =>
                        setImageIndexByTitle((current) => ({
                          ...current,
                          [selected.title]: index,
                        }))
                      }
                      className={cn(
                        "relative aspect-[16/10] overflow-hidden rounded-[18px] border border-[var(--line)] bg-white",
                        (imageIndexByTitle[selected.title] ?? 0) === index && "border-[var(--accent-strong)]",
                      )}
                    >
                      <Image src={image} alt="" fill className="object-cover" sizes="140px" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-0 overflow-y-auto p-5 lg:p-6">
                <h3 className="text-3xl font-extrabold text-[var(--heading)]">{selected.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{selected.summary}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {selected.signals.map((signal) => (
                    <div
                      key={`${selected.title}-${signal.label}`}
                      className="rounded-[20px] border border-[rgba(110,159,224,0.16)] bg-[rgba(237,244,255,0.48)] p-4"
                    >
                      <p className="text-2xl font-extrabold text-[var(--heading)]">{signal.value}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{signal.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[22px] border border-[rgba(110,159,224,0.16)] bg-[rgba(237,244,255,0.42)] p-4">
                  <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">Problem</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text)]">{selected.problem}</p>
                </div>

                <div className="mt-4 rounded-[22px] border border-[rgba(110,159,224,0.16)] bg-white p-4">
                  <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">Impact</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{selected.impact}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.tools.map((tool) => (
                    <Chip key={tool}>{tool}</Chip>
                  ))}
                </div>

                <Link
                  href={selected.link}
                  className="focus-ring mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--heading)] px-5 text-sm font-bold text-white hover:bg-[var(--accent-strong)]"
                >
                  Open repository
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
