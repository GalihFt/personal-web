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
  "Staff of Research and Data Analytics": BookOpen,
  "Head of Conference Subject Data Analytics Competition": Trophy,
};

export function OrganizationShowcase({ items }: OrganizationShowcaseProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [imageIndexByTitle, setImageIndexByTitle] = useState<Record<string, number>>(
    Object.fromEntries(items.map((item) => [item.title, 0])),
  );
  const selected = items.find((item) => item.title === selectedTitle) ?? null;
  const visibleItems = items.slice(startIndex, startIndex + 3);

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
          <div className="rounded-full border border-[rgba(110,159,224,0.16)] bg-[rgba(255,255,255,0.78)] px-4 py-2">
            <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
              Leadership and Community
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => shiftCards(-1)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)] disabled:opacity-40"
              disabled={startIndex === 0}
              aria-label="Previous organization card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => shiftCards(1)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)] disabled:opacity-40"
              disabled={startIndex >= Math.max(items.length - 3, 0)}
              aria-label="Next organization card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {visibleItems.map((item) => {
            const Icon = iconMap[item.title as keyof typeof iconMap] ?? Users;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedTitle(item.title)}
                className="focus-ring overflow-hidden rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,250,255,0.98))] text-left shadow-[0_16px_48px_rgba(34,50,74,0.08)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={item.gallery[0]} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(110,159,224,0.18)] bg-white text-[var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{item.period}</p>
                      <p className="text-sm font-semibold text-[var(--muted)]">{item.type}</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold text-[var(--heading)]">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--text)]">{item.place}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                </div>
              </button>
            );
          })}
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
              className="mx-auto grid h-[calc(100dvh-6rem)] max-w-6xl overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.4)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,250,255,0.98))] shadow-[0_28px_90px_rgba(17,25,40,0.25)] md:h-[calc(100dvh-7rem)] lg:grid-cols-[1.05fr_0.95fr]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid min-h-0 gap-4 border-b border-[var(--line)] p-5 lg:border-b-0 lg:border-r lg:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{selected.period}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedTitle(null)}
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--heading)]"
                    aria-label="Close organization detail"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-[rgba(110,159,224,0.18)] bg-[linear-gradient(180deg,rgba(237,244,255,0.58),rgba(255,255,255,0.88))]">
                  <div className="relative aspect-[16/11]">
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
                        "relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[var(--line)] bg-white",
                        (imageIndexByTitle[selected.title] ?? 0) === index && "border-[var(--accent-strong)]",
                      )}
                    >
                      <Image src={image} alt="" fill className="object-cover" sizes="140px" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-0 overflow-y-auto p-5 lg:p-6">
                <div className="mb-5 border-b border-[var(--line)] pb-4">
                  <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">
                    Organization Detail
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{selected.period}</p>
                </div>

                <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{selected.type}</p>
                <h3 className="mt-3 text-3xl font-extrabold text-[var(--heading)]">{selected.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">{selected.place}</p>
                <div className="mt-4 rounded-[18px] border border-[rgba(110,159,224,0.14)] bg-white/70 p-4 shadow-[0_12px_30px_rgba(38,52,69,0.04)]">
                  <p className="text-[0.95rem] leading-7 text-[var(--text)]">{selected.summary}</p>
                </div>

                <div className="mt-5 rounded-[24px] border border-[rgba(110,159,224,0.16)] bg-[linear-gradient(180deg,rgba(237,244,255,0.64),rgba(255,255,255,0.82))] p-4">
                  <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">Detailed Contributions</p>
                  <div className="mt-4 grid gap-3">
                    {selected.points.map((point, index) => (
                      <div
                        key={point}
                        className="group relative overflow-hidden rounded-[18px] border border-[rgba(110,159,224,0.16)] bg-white/82 p-4 shadow-[0_10px_26px_rgba(38,52,69,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(110,159,224,0.38)] hover:shadow-[0_16px_36px_rgba(38,52,69,0.08)]"
                      >
                        <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,var(--accent),transparent)]" />
                        <div className="flex gap-3 pl-1">
                          <span className="mono flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--button-bg)] text-[11px] font-extrabold text-[var(--button-text)] shadow-[0_8px_18px_rgba(34,50,74,0.14)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-[0.95rem] font-semibold leading-7 text-[var(--heading)]">{point}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
