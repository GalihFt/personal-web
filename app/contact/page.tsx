import Link from "next/link";
import { ArrowUpRight, ContactRound } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactItems, siteConfig } from "@/lib/portfolio-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        icon={ContactRound}
        eyebrow="Contact"
        title="Direct contact, no extra steps."
        description="If something here looks relevant, the fastest way to reach me is through the contact details below."
      />

      <section className="section-band section-surface">
        <div className="container-shell max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="Availability"
              title="Open for analytics roles, automation work, and collaboration."
              description="Everything important is here: direct contact, professional profile, code portfolio, and current location."
            />
            <div className="mt-6 rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(237,244,255,0.72),rgba(255,255,255,0.9))] p-5">
              <p className="mono text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">Best Fit</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                Teams that need reporting automation, cleaner validation flows, or practical analytics support for daily operations.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(110,159,224,0.18)] bg-white text-[var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="mono block text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-[var(--heading)]">{item.value}</span>
                    </span>
                  </>
                );

                return item.href === "#" ? (
                  <div key={item.label} className="surface-card flex items-center gap-4 p-4">
                    {content}
                  </div>
                ) : (
                  <Link key={item.label} href={item.href} className="focus-ring surface-card flex items-center gap-4 p-4 hover:border-[var(--accent)]">
                    {content}
                  </Link>
                );
              })}
            </div>

            <Link
              href={siteConfig.cvHref}
              className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--heading)] px-4 py-3 text-sm font-bold text-white hover:bg-[var(--accent-strong)]"
            >
              Download CV
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
