# Product Requirements Document (PRD)

**Project Name:** `portfolio-yulti-syaridayanti`  
**Owner:** Yulti Syaridayanti, S.K.M.  
**Target Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS

---

## 1. Project Overview

- **Description:** Personal portfolio website showcasing the professional background, healthcare administration and database management experience, public health initiatives, and competencies of Yulti Syaridayanti, S.K.M.
- **Target Audience:** Healthcare recruiters, hospitals, Puskesmas, public health agencies (Ministry of Health, BKKBN), and health NGOs.
- **Locale:** Indonesian-only user-facing copy (`src/content/id.ts`), with all code identifiers, file names, comments, and documentation written in English.
- **Couple Theme Concept:** Designed as a complementary light-mode companion to [portfolio-juzairi-safitli](https://portfolio-juzairi-safitli.vercel.app/), sharing core structural rhythm, a `HeartbeatLine` visual motif, and a cross-portfolio link in the navbar and footer.

---

## 2. Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router) with TypeScript (`strict: true`).
- **Styling:** Tailwind CSS with custom pastel pink/rose/cream/mint/slate tokens (`tailwind.config.ts`) and lightweight CSS transitions/animations (no `shadcn/ui`, `Framer Motion`, or MDX).
- **Icons & Illustration:** `lucide-react` icons and custom inline SVG components (`StorysetHealthIllustration.tsx`, `HeartbeatLine.tsx`).
- **Deployment & Analytics:** Vercel with `@vercel/analytics` and `@vercel/speed-insights`.
- **Code Quality:** ESLint (`next/core-web-vitals`) and `tsc --noEmit`.

---

## 3. Visual & Anti-AI-Slop Standards

- **Light-Mode Presentation:** Warm cream background (`#FFFDFB`) with dark slate body text (`#1E293B`) for high readability, paired with a restrained pastel pink/rose accent.
- **Typography:** `Plus Jakarta Sans` (`--font-sans`) for body copy and `Quicksand` (`--font-heading`) for headings via `next/font/google`.
- **Anti-AI-Slop Rules:**
  - No purple gradients, gradient text, heavy `blur-3xl` glow blobs, or floating/bouncing/pulsing animations.
  - No pills above section headlines, stat banners, decorative icon boxes, tiny ALL-CAPS labels, or emojis in navigation bars.
  - 4-point spacing grid, left-aligned section headers, direct value-driven copy, and one primary CTA per section.

---

## 4. Information Architecture & Core Flow

Single-page application (`src/app/page.tsx`) with smooth-scroll navigation:

1. **Navbar (`Navbar.tsx`):** Brand identity, section links, couple-portfolio link, and CV download action (`CV_Yulti_Syaridayanti_SKM.pdf`).
2. **Hero (`HeroSection.tsx`):** Name, degree (`S.K.M.`), role headline, concise bio, primary CTA (Download CV), secondary CTA (Contact), and `BlobPhotoFrame` (`/images/profile.webp`).
3. **About (`AboutSection.tsx`):** Career focus, academic summary (Universitas Jambi, Cumlaude GPA `3.86/4.00`, Sinta 3 publication), core competency pillars, and `StorysetHealthIllustration`.
4. **Experience (`ExperienceSection.tsx`):** Chronological timeline covering Puskesmas Tarutung, UPTD Puskesmas Rawasari, BKKBN Provinsi Jambi, and UPTD Puskesmas Simpang Kawat.
5. **Projects (`ProjectsSection.tsx`):** Public health & community initiatives (HPU FKIK UNJA, TB Stigma Prevention Planning of Action, and `sad-empowerment` GEMPITA SAD).
6. **Skills & Awards (`SkillsSection.tsx`):** Technical competency categories and formal certifications/honors.
7. **Contact (`ContactSection.tsx`) & Footer (`Footer.tsx`):**
   - Direct contact cards (Email with safe `navigator.clipboard.writeText` copy + error handling, WhatsApp, Location, and CV download).
   - Direct message composer routing directly to **WhatsApp** (`https://wa.me/...`) and **Email** (`mailto:...`) without external form backends.

---

## 5. SEO, Metadata & Coding Standards

- **SEO & Open Graph:** Configured in `src/app/layout.tsx` using `getSiteUrl()` (`NEXT_PUBLIC_SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL`), Indonesian `id_ID` OG locale, and `1200x630` `/og-image.jpg`.
- **Content Separation:** All user-facing strings, URLs, and SVG labels are centralized in `src/content/id.ts` and typed in `src/content/types.ts`.
- **Clean Code & DRY:** English-first naming for all symbols, files, and data keys; no dead code, unused imports, or orphaned assets.
