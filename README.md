# Web Porto

Portfolio website built with Next.js for showcasing profile, education, work experience, projects, honors, certifications, and contact information.

## Overview

This repository contains a personal portfolio site.
The site is designed as a single-page experience with section-based navigation and detail previews for:

- profile and background
- education history
- professional experience
- leadership and community experience
- selected projects
- honors and awards
- skill certifications
- contact information

## Tech Stack

- `Next.js 15`
- `React 19`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `Lucide React`

## Main Features

- section-based landing page with smooth navigation
- responsive portfolio layout
- interactive project explorer with pagination
- detail popups for education, projects, and community experience
- honors and certifications preview panels
- dark mode support
- downloadable CV and external profile links

## Project Structure

```text
app/                    Next.js app router pages and global styles
components/             UI building blocks and page sections
  cards/                Reusable card components
  layout/               Header and layout-related components
  motion/               Animation wrappers
  sections/             Main homepage sections
  ui/                   Shared UI primitives
lib/                    Content data and utility helpers
public/assets/          Images, documents, and static portfolio assets
```

## Data Source

Most portfolio content is managed directly from:

- [lib/portfolio-data.ts](./lib/portfolio-data.ts)
- [lib/showcase-data.ts](./lib/showcase-data.ts)

This includes profile details, work experience, projects, honors, certifications, and gallery assets.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run lint checks:

```bash
npm run lint
```

## Notes

- Static assets are stored in `public/assets/`.
- The main homepage entry is [app/page.tsx](./app/page.tsx).
- Content updates are easiest to make through the files in `lib/`.
