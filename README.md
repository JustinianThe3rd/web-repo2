# Doctor HVACR — Cherry Hill HVAC, Electrical & Plumbing

A modern, high-performance marketing website for Doctor HVACR, a licensed HVAC, electrical, and plumbing contractor serving Cherry Hill, NJ and the greater South Jersey / Philadelphia area.

Built with **Next.js 15**, **Tailwind CSS 4**, and **TypeScript**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🛠 Tech Stack

| Layer          | Choice                                      |
| --------------- | ------------------------------------------- |
| Framework       | Next.js 15 (App Router)                     |
| Styling         | Tailwind CSS v4 (`@import "tailwindcss"`)   |
| Language        | TypeScript (strict)                         |
| Fonts           | Google Fonts via `next/font` — Outfit (display), Inter (body) |
| Deployment      | Vercel                                      |
| Analytics       | Vercel Analytics                            |
| Forms           | Web3Forms API                               |

## 📁 Project Structure

```
doctorhvacr/
├── app/
│   ├── layout.tsx          # Root layout (fonts, analytics, nav/footer)
│   ├── page.tsx            # Homepage — assembles all sections
│   ├── globals.css         # Design system (colors, typography, animations)
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # robots.txt
│   └── components/
│       ├── Navbar.tsx       # Sticky nav with mobile hamburger menu
│       ├── Hero.tsx         # Full-viewport hero with gradient overlay
│       ├── Services.tsx     # 4 service cards (AC, Heating, Electrical, Plumbing)
│       ├── StatsBar.tsx     # Animated counters (experience, projects, clients, satisfaction)
│       ├── About.tsx        # Company story + credential badges
│       ├── Differentials.tsx# 6 trust-badge cards (24h, Licensed, Transparent Pricing, etc.)
│       ├── Gallery.tsx      # Project gallery with lightbox modal
│       ├── Reviews.tsx      # 5-star reviews carousel (auto-play)
│       ├── Partners.tsx     # Infinite-scroll partner logo marquee
│       ├── Contact.tsx      # Contact info + Google Maps embed
│       ├── Footer.tsx       # 4-column footer with services, company, contact, licenses
│       └── StickyMobileCTA.tsx  # Bottom-fixed call/quote buttons on mobile
├── messages/
│   └── en.json             # UI copy (i18n-ready, single locale)
├── public/
│   └── images/             # Logo, team, gallery uploads
├── tailwind.config.ts      # Tailwind v3 compat layer (for Hero component)
└── next.config.ts          # Next.js config
```

## 🎨 Design System

- **Primary (Red):** `#d62e4a` — CTAs, highlights, brand accents
- **Accent (Blue):** `#2a4d73` — Links, secondary elements, nav
- **Navy:** `#152238` — Footer background, dark surfaces
- **Display Font:** Outfit (headings)
- **Body Font:** Inter (body copy)

## 📝 Content Editing

All UI strings live in `messages/en.json`. To update text content, edit that file — no need to touch components.

## 📸 Image Assets

Upload team and gallery photos to `public/images/`:
- `Logo of company.png` — Company logo (used in navbar + footer)
- `Skib Town.jpg` — Team photo (About section)
- `uploads/gallery-1.jpg` through `gallery-10` — Project gallery images

## 🔑 Key Features

- **Fully responsive** — mobile-first with sticky call-to-action bar on small screens
- **Scroll reveal animations** — elements slide/fade in as the user scrolls
- **Auto-playing reviews carousel** with manual controls
- **Google Maps embed** with lazy loading
- **Animated counters** (StatsBar counts up when visible in viewport)
- **Gallery lightbox** with keyboard navigation and click-outside-to-close
- **Partner logo marquee** with pause-on-hover
- **SEO-ready** — dynamic sitemap, robots.txt, semantic HTML, ARIA labels
- **24/7 phone links** — `tel:` links on both phone numbers throughout the site

## 📞 Business Info

| Detail          | Value                                    |
| --------------- | ---------------------------------------- |
| **Company**     | Doctor HVACR Electrical & Plumbing       |
| **Phone 1**     | (856) 900-2260                           |
| **Phone 2**     | (856) 548-7018                           |
| **Email**       | doctorhvacr@gmail.com                    |
| **Address**     | 2050 Fairfax Ave Unit K, Cherry Hill, NJ 08003 |
| **Hours**       | Open 24/7                                |
| **Licenses**    | NJ HVAC License #19HC00131400           |
|                 | NJ Electrical License #34EB00121500     |
|                 | NJ Plumbing License #12345              |

## 🚢 Deployment

Deploy to Vercel (recommended):

```bash
npm install -g vercel
vercel
```

## 📄 License

All rights reserved © 2025 Doctor HVACR Electrical & Plumbing.
