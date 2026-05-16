import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteConfig.name, url: siteConfig.linkedin }],
  creator: siteConfig.name,
  keywords: [
    "Galih Fitriatmo",
    "Data Analyst",
    "Statistics Graduate",
    "Operational Data Analysis",
    "Business Data Analysis",
    "Python",
    "SQL",
    "Power BI",
    "Surabaya",
    "Indonesia",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: [siteConfig.heroImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  document.documentElement.dataset.theme = stored || preferred;
                } catch (_) {
                  document.documentElement.dataset.theme = "light";
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#content"
          className="focus-ring sr-only left-4 top-4 z-50 rounded-md bg-[var(--button-bg)] px-4 py-2 text-sm font-semibold text-[var(--button-text)] focus:not-sr-only focus:absolute"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
      </body>
    </html>
  );
}
