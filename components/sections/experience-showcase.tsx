"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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

export function ExperienceShowcase({ items }: ExperienceShowcaseProps) {
  const [selectedTitle, setSelectedTitle] = useState(items[0]?.title ?? "");
  const [imageIndexByTitle, setImageIndexByTitle] = useState<Record<string, number>>(
    Object.fromEntries(items.map((item) => [item.title, 0])),
  );
  const selected = items.find((item) => item.title === selectedTitle) ?? items[0];

  if (!selected) {
    return null;
  }

  const selectedImageIndex = imageIndexByTitle[selected.title] ?? 0;
  const selectedImage = selected.gallery[selectedImageIndex] ?? selected.gallery[0];

  function shiftImage(direction: -1 | 1) {
    const total = selected.gallery.length;
    const nextIndex = (selectedImageIndex + direction + total) % total;

    setImageIndexByTitle((current) => ({
      ...current,
      [selected.title]: nextIndex,
    }));
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 xl:grid-cols-[460px_minmax(0,1fr)] 2xl:grid-cols-[500px_minmax(0,1fr)]">
        <div className="grid max-h-[calc(100dvh-15rem)] content-start gap-4 overflow-y-auto pr-3">
          {items.map((item, index) => {
            const active = item.title === selected.title;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedTitle(item.title)}
                className={cn(
                  "focus-ring surface-card relative min-h-[132px] overflow-hidden p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]",
                  active && "border-[var(--accent-strong)] bg-[linear-gradient(180deg,rgba(237,244,255,0.72),rgba(255,255,255,0.92))]",
                )}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,var(--accent),transparent)]" />
                <div className="h-full pl-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="mono min-w-0 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                      0{index + 1} . {item.period}
                    </p>
                    <span className="shrink-0 rounded-full border border-[rgba(110,159,224,0.22)] bg-[rgba(237,244,255,0.82)] px-2 py-0.5 text-[10px] font-bold text-[var(--accent-strong)]">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="mt-1.5 text-[1.08rem] font-extrabold leading-snug text-[var(--heading)] md:text-[1.16rem]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{item.place}</p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-[30px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,250,255,0.98))] shadow-[0_20px_60px_rgba(34,50,74,0.1)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="grid gap-6 p-6"
            >
              <div className="grid gap-6">
                <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="grid gap-4">
                    <div className="flex flex-col gap-3 border-b border-[var(--line)] pb-5">
                      <div>
                        <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{selected.period}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <h3 className="text-3xl font-extrabold text-[var(--heading)]">{selected.title}</h3>
                          <span className="rounded-full border border-[rgba(110,159,224,0.2)] bg-[rgba(237,244,255,0.8)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                            {selected.type}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-[var(--text)]">{selected.place}</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-[var(--accent)] bg-[rgba(237,244,255,0.5)] px-4 py-3">
                      <p className="text-[0.95rem] font-semibold leading-7 text-[var(--heading)]">{selected.summary}</p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="relative overflow-hidden rounded-[26px] border border-[rgba(110,159,224,0.18)] bg-[var(--surface)]">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={selectedImage}
                          alt={selected.title}
                          fill
                          className="object-cover object-[center_38%]"
                          sizes="(min-width: 1280px) 36vw, 100vw"
                        />
                      </div>
                      {selected.gallery.length > 1 ? (
                        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3">
                          <button
                            type="button"
                            onClick={() => shiftImage(-1)}
                            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.82)] text-[var(--heading)] backdrop-blur-md"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => shiftImage(1)}
                            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.82)] text-[var(--heading)] backdrop-blur-md"
                            aria-label="Next image"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>
                      ) : null}
                    </div>

                    {selected.gallery.length > 1 ? (
                      <p className="mono text-center text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">
                        {selectedImageIndex + 1} / {selected.gallery.length}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-[24px] border border-[rgba(110,159,224,0.16)] bg-[linear-gradient(180deg,rgba(237,244,255,0.62),rgba(255,255,255,0.86))] p-5">
                  <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">Key Contributions</p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {selected.points.map((point, index) => (
                      <div
                        key={point}
                        className="flex gap-3 border-l border-[rgba(110,159,224,0.24)] pl-4"
                      >
                        <span className="mono shrink-0 text-xs font-extrabold text-[var(--accent-strong)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[0.92rem] font-semibold leading-7 text-[var(--heading)]">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
