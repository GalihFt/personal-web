"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  FileSpreadsheet,
  Landmark,
  Network,
  PackageCheck,
  ReceiptText,
  Route,
  Sparkles,
  X,
  ChartNoAxesCombined,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Chip } from "@/components/ui/chip";
import { ModalPortal } from "@/components/ui/modal-portal";
import { cn } from "@/lib/utils";

export type ShowcaseProject = {
  title: string;
  category: string;
  featured: boolean;
  summary: string;
  problem: string;
  impact: string;
  description: { text: string; strong?: boolean }[];
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
  "Piutang Reconciliation Automation": ReceiptText,
  "KBM Accrual Automation": FileSpreadsheet,
  "Hotel Reservation Cancellation Dashboard": Building2,
  "Inpatient Admission Forecasting": ChartNoAxesCombined,
  "TALAS SUPER": BarChart3,
  "CLIMATE HERO": BarChart3,
  "Buletin Kapuas": Landmark,
  "Management Information System Excel Dashboard": BarChart3,
};

export function ProjectShowcaseGrid({ projects }: ProjectShowcaseGridProps) {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageDirection, setPageDirection] = useState<1 | -1>(1);
  const [imageIndexByTitle, setImageIndexByTitle] = useState<Record<string, number>>(
    Object.fromEntries(projects.map((project) => [project.title, 0])),
  );

  const selected = projects.find((project) => project.title === selectedTitle) ?? null;
  const projectsPerPage = 4;
  const pageCount = Math.max(Math.ceil(projects.length / projectsPerPage), 1);
  const visibleProjects = projects.slice(pageIndex * projectsPerPage, pageIndex * projectsPerPage + projectsPerPage);
  const canGoUp = pageIndex > 0;
  const canGoDown = pageIndex < pageCount - 1;
  const selectedImageIndex = selected ? imageIndexByTitle[selected.title] ?? 0 : 0;
  const selectedImage = selected?.gallery[selectedImageIndex] ?? selected?.gallery[0] ?? "";

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedTitle(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const scrollRoot = document.querySelector<HTMLElement>(".home-snap");

    if (!selected || !scrollRoot) {
      return;
    }

    const previousOverflowY = scrollRoot.style.overflowY;
    scrollRoot.style.overflowY = "hidden";

    return () => {
      scrollRoot.style.overflowY = previousOverflowY;
    };
  }, [selected]);

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

  function shiftProjectPage(direction: -1 | 1) {
    const nextPage = pageIndex + direction;

    if (nextPage < 0 || nextPage >= pageCount) {
      return;
    }

    setPageDirection(direction);
    setPageIndex(nextPage);
  }

  return (
    <>
      <div className="grid gap-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[var(--muted)]">
            Showing {visibleProjects.length} of {projects.length} selected projects
          </p>
          <div className="hidden gap-1.5 sm:flex">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={`project-page-${index}`}
                  type="button"
                  onClick={() => {
                    setPageDirection(index >= pageIndex ? 1 : -1);
                    setPageIndex(index);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    pageIndex === index ? "w-6 bg-[var(--accent-strong)]" : "w-2 bg-[rgba(110,159,224,0.28)]",
                )}
                aria-label={`Show project page ${index + 1}`}
              />
              ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pageIndex}
              initial={{ opacity: 0, y: pageDirection > 0 ? 36 : -36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: pageDirection > 0 ? -36 : 36 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
            >
              {visibleProjects.map((project) => {
                const Icon = iconMap[project.title as keyof typeof iconMap] ?? FileSpreadsheet;
                const projectImage = project.gallery[0];
                const cardDescription = `${project.summary} ${project.problem} ${project.impact}`;

                return (
                  <motion.button
                    layout
                    key={project.title}
                    type="button"
                    onClick={() => setSelectedTitle(project.title)}
                    className="focus-ring flex h-full min-h-[410px] flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card-bg)] text-left shadow-[0_12px_34px_rgba(34,50,74,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_18px_44px_rgba(34,50,74,0.1)]"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image src={projectImage} alt={project.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
                      {project.featured ? (
                        <span className="absolute left-3 top-3 border-l-2 border-[var(--accent)] bg-[rgba(255,255,255,0.82)] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[var(--heading)] shadow-[0_10px_24px_rgba(34,50,74,0.08)] backdrop-blur">
                          Featured
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(110,159,224,0.18)] bg-white text-[var(--accent-strong)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="line-clamp-2 text-xl font-extrabold leading-tight text-[var(--heading)]">{project.title}</h3>
                        </div>
                      </div>
                      <p className="mt-3.5 line-clamp-6 text-sm leading-6 text-[var(--muted)]">{cardDescription}</p>
                      <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
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

          <div className="mt-3 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => shiftProjectPage(-1)}
              disabled={!canGoUp}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)] shadow-[0_10px_24px_rgba(34,50,74,0.08)] disabled:opacity-35"
              aria-label="Previous project page"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => shiftProjectPage(1)}
              disabled={!canGoDown}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)] shadow-[0_10px_24px_rgba(34,50,74,0.08)] disabled:opacity-35"
              aria-label="Next project page"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <ModalPortal>
        <AnimatePresence>
          {selected ? (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[rgba(17,25,40,0.55)] p-4 pt-20 backdrop-blur-sm md:p-8 md:pt-24"
            onClick={() => setSelectedTitle(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="mx-auto grid h-[calc(100dvh-6rem)] max-w-6xl overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.4)] bg-[var(--card-bg)] shadow-[0_28px_90px_rgba(17,25,40,0.25)] md:h-[calc(100dvh-7rem)] lg:grid-cols-[1.04fr_0.96fr]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid h-full min-h-0 border-b border-[var(--line)] bg-[var(--surface)] p-4 lg:border-b-0 lg:border-r">
                <div className="relative min-h-0 overflow-hidden rounded-[24px] bg-[var(--surface)]">
                  <Image
                    src={selectedImage}
                    alt={selected.title}
                    fill
                    className="object-contain p-6"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,25,40,0.02),rgba(17,25,40,0.42))]" />
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
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-6">
                    <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[#dbeafe]">{selected.category}</p>
                    <h3 className="mt-2 text-3xl font-extrabold leading-tight">{selected.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTitle(null)}
                    className="focus-ring absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.45)] bg-[rgba(255,255,255,0.84)] text-[var(--heading)] backdrop-blur-md"
                    aria-label="Close project detail"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="panel-scroll min-h-0 overflow-y-auto p-5 lg:p-7">
                <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{selected.category}</p>
                <h3 className="mt-2 text-3xl font-extrabold leading-tight text-[var(--heading)]">{selected.title}</h3>
                <div className="mt-4 border-l-2 border-[var(--accent)] bg-[rgba(237,244,255,0.34)] px-4 py-3">
                  <p className="text-[0.98rem] font-semibold leading-7 text-[var(--heading)]">{selected.summary}</p>
                </div>

                <div className="mt-5">
                  <div className="rounded-2xl border border-[rgba(110,159,224,0.16)] bg-[rgba(237,244,255,0.34)] p-4">
                    <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">Description</p>
                    <p className="mt-2 text-[0.92rem] leading-7 text-[var(--text)]">
                      {selected.description.map((part, index) =>
                        part.strong ? (
                          <strong key={`${selected.title}-description-${index}`} className="font-extrabold text-[var(--heading)]">
                            {part.text}
                          </strong>
                        ) : (
                          <span key={`${selected.title}-description-${index}`}>{part.text}</span>
                        ),
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.tools.map((tool) => (
                    <Chip key={tool}>{tool}</Chip>
                  ))}
                </div>

                <Link
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--button-bg)] px-5 text-sm font-bold text-[var(--button-text)] hover:bg-[var(--button-hover)]"
                >
                  Open repository
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </ModalPortal>
    </>
  );
}
