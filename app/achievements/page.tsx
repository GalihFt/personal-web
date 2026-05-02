import { Trophy } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { SelectedCertificateGallery } from "@/components/sections/selected-certificate-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, certifications } from "@/lib/portfolio-data";

export default function AchievementsPage() {
  const honorCertificates = achievements.map((item) => ({
    title: item.title,
    issuer: item.issuer,
    detail: item.detail,
    image: item.image,
  }));
  const skillCertifications = certifications.map((item) => ({
    title: item.name,
    issuer: item.issuer,
    detail: "Sertifikasi keahlian yang bisa dipreview lalu diverifikasi lewat link credential.",
    image: item.image,
    href: item.href,
  }));

  return (
    <>
      <PageHero
        icon={Trophy}
        eyebrow="Achievements"
        title="Honors and skill certifications, shown separately."
        description="Awards stay under honors. Technical credentials stay under certifications."
      />

      <section className="section-band section-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Honors"
              title="Awards, recognition, and competition results."
              description="Pick one to preview the selected certificate."
            />
          </Reveal>

          <div className="mt-10 rounded-[28px] border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-5 md:p-6">
            <SelectedCertificateGallery
              items={honorCertificates}
              emptyText="Select an honor certificate to preview."
            />
          </div>
        </div>
      </section>

      <section className="section-band section-tint">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Skill Certifications"
              title="Technical certifications with selected preview."
              description="Dev ID is placed first, then the rest can be opened and verified."
            />
          </Reveal>

          <div className="mt-10 rounded-[28px] border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-5 md:p-6">
            <SelectedCertificateGallery
              items={skillCertifications}
              emptyText="Select a skill certification to preview."
              actionLabel="Verify credential"
            />
          </div>
        </div>
      </section>
    </>
  );
}
