"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { SelectableCredential } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type SelectedCertificateGalleryProps = {
  items: SelectableCredential[];
  emptyText?: string;
  actionLabel?: string;
};

export function SelectedCertificateGallery({
  items,
  emptyText = "Select a certificate to preview.",
  actionLabel = "Open credential",
}: SelectedCertificateGalleryProps) {
  const [selected, setSelected] = useState<SelectableCredential | null>(items[0] ?? null);

  return (
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <div className="grid gap-3">
        {items.map((item) => {
          const active = selected?.title === item.title;

          return (
            <button
              key={`${item.title}-${item.image}`}
              type="button"
              onClick={() => setSelected(item)}
              className={cn(
                "focus-ring surface-card grid grid-cols-[88px_1fr] gap-4 p-3 text-left transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-0.5",
                active && "border-[var(--accent-strong)] bg-[linear-gradient(180deg,rgba(237,244,255,0.72),rgba(255,255,255,0.92))]",
              )}
            >
              <span className="relative aspect-[4/3] overflow-hidden rounded-md bg-[var(--surface)]">
                <Image src={item.image} alt="" fill className="object-cover" sizes="88px" />
              </span>
              <span className="min-w-0">
                <span className="mono block text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                  {item.issuer}
                </span>
                <span className="mt-1 block text-sm font-extrabold leading-6 text-[var(--heading)]">{item.title}</span>
                <span className="mt-1 line-clamp-2 block text-xs leading-5 text-[var(--muted)]">{item.detail}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,250,255,0.98))] shadow-[0_20px_60px_rgba(38,52,69,0.10)]">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.image}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.22 }}
            >
              <div className="relative aspect-[16/11] bg-[linear-gradient(180deg,rgba(110,159,224,0.08),rgba(255,255,255,0.78))] p-3">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-contain p-3"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </div>
              <div className="grid gap-4 border-t border-[var(--line)] p-5 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{selected.issuer}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-[var(--heading)]">{selected.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{selected.detail}</p>
                </div>
                {selected.href ? (
                  <Link
                    href={selected.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--button-bg)] px-4 text-sm font-bold text-[var(--button-text)] hover:bg-[var(--button-hover)]"
                  >
                    {actionLabel}
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </motion.div>
          ) : (
            <div className="p-8 text-sm font-semibold text-[var(--muted)]">{emptyText}</div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
