"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronLeft, ChevronRight, Trophy, Users, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type OrganizationEntry = {
  title: string;
  place: string;
  period: string;
  type: string;
  points: string[];
  summary: string;
  gallery: string[];
};

type OrganizationShowcaseProps = {
  items: OrganizationEntry[];
};

const iconMap = {
  "Vice Chairman": Users,
  "Staff of Research and Data Analytics Division": BookOpen,
  "Head of Conference Subject Subdivision of DAC 2023": Trophy,
  "Expert Staff of Equipment Division": Users,
  "Staff of Equipment Division": Users,
  "Academic Course Mentor": BookOpen,
};

export function OrganizationShowcase({ items }: OrganizationShowcaseProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [imageIndexByTitle, setImageIndexByTitle] = useState<Record<string, number>>(
    Object.fromEntries(items.map((item) => [item.title, 0])),
  );

  const selected = items.find((item) => item.title === selectedTitle) ?? null;
  const visibleItems = items.slice(startIndex, startIndex + 3);
  const canGoBack = startIndex > 0;
  const canGoNext = startIndex < Math.max(items.length - 3, 0);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedTitle(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function shiftCards(direction: -1 | 1) {
    const next = startIndex + direction;

    if (next < 0 || next > Math.max(items.length - 3, 0)) {
      return;
    }

    setSlideDirection(direction);
    setStartIndex(next);
  }

  function shiftModalImage(direction: -1 | 1) {
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
      <div className="grid gap-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[var(--muted)]">
            Showing {visibleItems.length} of {items.length} community roles
          </p>
          <div className="hidden gap-1.5 sm:flex">
            {items.map((item, index) => (
              <button
                key={`${item.title}-dot`}
                type="button"
                onClick={() => {
                  const nextStart = Math.min(index, Math.max(items.length - 3, 0));
                  setSlideDirection(nextStart >= startIndex ? 1 : -1);
                  setStartIndex(nextStart);
                }}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index >= startIndex && index < startIndex + 3
                    ? "w-6 bg-[var(--accent-strong)]"
                    : "w-2 bg-[rgba(110,159,224,0.28)]",
                )}
                aria-label={`Show community role ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative px-0 md:px-7">
          <button
            type="button"
            onClick={() => shiftCards(-1)}
            disabled={!canGoBack}
            className="focus-ring absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(110,159,224,0.24)] bg-[rgba(255,255,255,0.92)] text-[var(--heading)] shadow-[0_16px_36px_rgba(34,50,74,0.12)] backdrop-blur disabled:opacity-35 md:inline-flex"
            aria-label="Previous community cards"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => shiftCards(1)}
            disabled={!canGoNext}
            className="focus-ring absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(110,159,224,0.24)] bg-[rgba(255,255,255,0.92)] text-[var(--heading)] shadow-[0_16px_36px_rgba(34,50,74,0.12)] backdrop-blur disabled:opacity-35 md:inline-flex"
            aria-label="Next community cards"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: slideDirection > 0 ? 42 : -42 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: slideDirection > 0 ? -42 : 42 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 lg:grid-cols-3"
              >
                {visibleItems.map((item) => {
                  const Icon = iconMap[item.title as keyof typeof iconMap] ?? Users;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setSelectedTitle(item.title)}
                      className="focus-ring group grid h-full min-h-[440px] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card-bg)] text-left shadow-[0_14px_42px_rgba(34,50,74,0.07)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_20px_52px_rgba(34,50,74,0.11)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[rgba(237,244,255,0.5)]">
                        <Image
                          src={item.gallery[0]}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(min-width: 1024px) 33vw, 100vw"
                        />
                        <span className="absolute left-3 top-3 rounded-full border border-[rgba(255,255,255,0.56)] bg-[rgba(255,255,255,0.86)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[var(--accent-strong)] backdrop-blur">
                          {item.type}
                        </span>
                      </div>

                      <div className="grid grid-rows-[auto_auto_1fr_auto] p-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(110,159,224,0.18)] bg-white text-[var(--accent-strong)] shadow-[0_10px_22px_rgba(79,127,192,0.08)]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div className="min-w-0">
                            <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                              {item.period}
                            </p>
                            <p className="mt-0.5 truncate text-sm font-bold text-[var(--text)]">{item.place}</p>
                          </div>
                        </div>

                        <h3 className="mt-4 line-clamp-2 min-h-[3.25rem] text-xl font-extrabold leading-tight text-[var(--heading)]">
                          {item.title}
                        </h3>
                        <p className="mt-3 line-clamp-4 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                        <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                          <span className="text-xs font-bold text-[var(--accent-strong)]">View detail</span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(237,244,255,0.8)] text-[var(--accent-strong)]">
                            <ChevronRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex justify-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => shiftCards(-1)}
              disabled={!canGoBack}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)] disabled:opacity-35"
              aria-label="Previous community cards"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => shiftCards(1)}
              disabled={!canGoNext}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)] disabled:opacity-35"
              aria-label="Next community cards"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(17,25,40,0.55)] p-4 pt-20 backdrop-blur-sm md:p-8 md:pt-24"
            onClick={() => setSelectedTitle(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="mx-auto grid h-[calc(100dvh-6rem)] max-w-6xl overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.4)] bg-[var(--card-bg)] shadow-[0_28px_90px_rgba(17,25,40,0.25)] md:h-[calc(100dvh-7rem)] lg:grid-cols-[1.02fr_0.98fr]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid min-h-0 gap-4 border-b border-[var(--line)] p-5 lg:border-b-0 lg:border-r lg:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                    Community Preview
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedTitle(null)}
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)]"
                    aria-label="Close organization detail"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-[rgba(110,159,224,0.18)] bg-[rgba(237,244,255,0.42)]">
                  <div className="relative aspect-[16/10]">
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
                        onClick={() => shiftModalImage(-1)}
                        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.82)] text-[var(--heading)] backdrop-blur-md"
                        aria-label="Previous organization image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => shiftModalImage(1)}
                        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.82)] text-[var(--heading)] backdrop-blur-md"
                        aria-label="Next organization image"
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
                        "relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--line)] bg-white",
                        (imageIndexByTitle[selected.title] ?? 0) === index && "border-[var(--accent-strong)]",
                      )}
                      aria-label={`Show image ${index + 1}`}
                    >
                      <Image src={image} alt="" fill className="object-cover" sizes="140px" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="panel-scroll min-h-0 overflow-y-auto p-5 lg:p-7">
                <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                  {selected.type} . {selected.period}
                </p>
                <h3 className="mt-2 text-3xl font-extrabold leading-tight text-[var(--heading)]">{selected.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">{selected.place}</p>

                <div className="mt-4 border-l-2 border-[var(--accent)] bg-[rgba(237,244,255,0.34)] px-4 py-3">
                  <p className="text-[0.96rem] font-semibold leading-7 text-[var(--heading)]">{selected.summary}</p>
                </div>

                <div className="mt-5 grid gap-3">
                  <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">
                    Detailed Contributions
                  </p>
                  {selected.points.map((point, index) => (
                    <div
                      key={point}
                      className="grid min-h-[92px] grid-cols-[2.25rem_minmax(0,1fr)] gap-3 rounded-2xl border border-[rgba(110,159,224,0.16)] bg-white/78 p-4 shadow-[0_10px_28px_rgba(38,52,69,0.04)]"
                    >
                      <span className="mono flex h-8 w-8 items-center justify-center rounded-full bg-[var(--button-bg)] text-[11px] font-extrabold text-[var(--button-text)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[0.94rem] font-semibold leading-7 text-[var(--heading)]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
