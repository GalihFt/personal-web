"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Chip } from "@/components/ui/chip";

export type EducationEntry = {
  title: string;
  place: string;
  period: string;
  note: string;
  image: string;
  relevantCourses: string[];
  detail: string;
  highlights: string[];
};

type EducationShowcaseProps = {
  items: EducationEntry[];
};

export function EducationShowcase({ items }: EducationShowcaseProps) {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const selected = items.find((item) => item.title === selectedTitle) ?? null;

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            onClick={() => setSelectedTitle(item.title)}
            className="focus-ring surface-card group overflow-hidden text-left"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid gap-0">
              <div className="relative min-h-[340px] bg-[var(--surface)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>

              <div className="flex min-h-[240px] flex-col justify-center p-6">
                <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                  0{index + 1} . {item.period}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold leading-tight text-[var(--heading)]">{item.title}</h3>
                <p className="mt-1 text-sm font-bold text-[var(--text)]">{item.place}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.note}</p>

                <div className="mt-5 border-t border-[var(--line)] pt-4">
                  <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">
                    Relevant Courses
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.relevantCourses.slice(0, 4).map((course) => (
                      <Chip key={course}>{course}</Chip>
                    ))}
                    {item.relevantCourses.length > 4 ? <Chip>+{item.relevantCourses.length - 4}</Chip> : null}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--heading)]">
                    View more
                    <ArrowUpRight className="h-4 w-4 text-[var(--accent-strong)]" />
                  </span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
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
              className="mx-auto h-[calc(100dvh-6rem)] max-w-5xl overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.4)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,250,255,0.98))] shadow-[0_28px_90px_rgba(17,25,40,0.25)] md:h-[calc(100dvh-7rem)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid h-full min-h-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[260px] overflow-hidden border-b border-[var(--line)] bg-[var(--surface)] lg:min-h-0 lg:border-b-0 lg:border-r">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,25,40,0.02),rgba(17,25,40,0.42))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-6">
                    <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[#dbeafe]">{selected.period}</p>
                    <h3 className="mt-2 text-3xl font-extrabold leading-tight">{selected.title}</h3>
                    <p className="mt-2 text-sm font-bold text-[#e7eef8]">{selected.place}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTitle(null)}
                    className="focus-ring absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.45)] bg-[rgba(255,255,255,0.84)] text-[var(--heading)] backdrop-blur-md"
                    aria-label="Close education detail"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="min-h-0 overflow-y-auto p-5 lg:p-7">
                  <div className="mb-5 border-b border-[var(--line)] pb-4">
                    <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">
                      Education Detail
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{selected.place}</p>
                  </div>

                  <div className="border-l-4 border-[var(--accent)] bg-[rgba(237,244,255,0.5)] px-4 py-3">
                    <p className="text-[0.98rem] font-semibold leading-7 text-[var(--heading)]">{selected.note}</p>
                  </div>

                  <div className="mt-6">
                    <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">
                      Education Story
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-8 text-[var(--text)]">{selected.detail}</p>
                  </div>

                  <div className="mt-6 rounded-[22px] border border-[rgba(110,159,224,0.16)] bg-[rgba(237,244,255,0.46)] p-5">
                    <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">
                      What I Worked On
                    </p>
                    <div className="mt-4 grid gap-4">
                      {selected.highlights.map((highlight, index) => (
                        <div key={highlight} className="flex gap-3 border-l border-[rgba(110,159,224,0.24)] pl-4">
                          <span className="mono shrink-0 text-xs font-extrabold text-[var(--accent-strong)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-[0.92rem] font-semibold leading-7 text-[var(--heading)]">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent-strong)]">
                      Relevant Courses
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.relevantCourses.map((course) => (
                        <Chip key={course}>{course}</Chip>
                      ))}
                    </div>
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
