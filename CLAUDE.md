# CLAUDE.md — Muizz Jamiu portfolio

Personal portfolio for Muizz Jamiu, frontend engineer in Lagos. It will be sent to hiring managers
and company founders, so it has to load fast, read clearly and look finished on a phone.

Read this file before making any change. Structure rules come from `docs/frontendStructureGuide.md`
(the frontend structure guide). Where this file and the guide disagree, this file wins, and the
reason is listed under "Departures from the guide".

The approved visual design is in `docs/design/` (see "Design reference" below).

---

## How to work with me

- Build each part yourself and run the checks (`npx tsc --noEmit`, `npm run lint`, `npm run dev`).
  Then stop and summarise what you built and why, so I can review and test before the next part.
- Work one part at a time. Finish a part, then wait for me to ask for the next.
- Each part gets its own branch, created from an up-to-date `main`. When a part is done, stop, tell me
  the branch name and leave it uncommitted for review.
- If I reply "approved", commit with a clear message, merge the branch into `main`, push, then start
  the next part. If I reply with changes instead, make them, then stop again for review.
- Give the full path of every file you mention, e.g. `src/components/ui/button/button.tsx`.
- Spell out every abbreviation the first time, e.g. LCP (Largest Contentful Paint).
- When I explain something back to you, grade it out of 10 and correct me honestly.
- If an idea of mine is flawed, push back and say why. Use everyday comparisons.

---

## Stack

- Next.js with the App Router, TypeScript, strict mode
- Tailwind CSS v4 (configured in `src/app/globals.css`, no `tailwind.config` file)
- `next-themes` for light and dark mode
- `motion` (formerly Framer Motion) for the few animations listed below, imported from `motion/react`
- `next/font` for Poppins (and IBM Plex Mono for the terminal), `next/image` for every image
- `clsx` + `tailwind-merge` behind a `cn()` helper

Do not add a library without asking first. This site has no backend, no auth and no data fetching.

---

## Pages

Tabs are separate routes, not client-side tab state, so each one has its own link, title and
preview, and the browser's back button works.

| Route         | File                             | Content                                  |
| ------------- | -------------------------------- | ---------------------------------------- |
| `/`           | `src/app/page.tsx`               | Projects (default tab)                   |
| `/experience` | `src/app/experience/page.tsx`    | Work experience and skills               |
| `/about`      | `src/app/about/page.tsx`         | Short bio                                |
| `/contact`    | `src/app/contact/page.tsx`       | Email, GitHub, LinkedIn, CV download     |

The sidebar card and the tab bar live in `src/app/layout.tsx` through the app shell, so they stay on
screen while only the tab content changes.

Layout: sidebar card on the left on desktop, sticky (`lg:sticky lg:top-6`) so it stays in view while
the tab content scrolls. On mobile it collapses to a compact card at the top: photo, name, role badge,
theme toggle, then "Show contacts" and "Download CV" side by side. Contacts open in a dropdown on
mobile. The sidebar must never be sticky below the `lg` breakpoint.

Profile photo: a rounded square, not a circle, with no accent ring. 128px with `rounded-2xl` on
desktop, 76px with `rounded-xl` on mobile, `object-top` so the face isn't cropped, quality 90.
Contacts: Email and Location are full rows with uppercase captions; GitHub and LinkedIn are a centred
row of icon links (20px icons, 44px tap targets) underneath. On mobile both sit inside the dropdown.

---

## Project structure

```
src/
├── app/                          # Routing only. Thin files.
│   ├── layout.tsx                # Font, metadata, ThemeProvider, AppShell
│   ├── globals.css               # Tailwind import, theme tokens
│   ├── page.tsx                  # Projects tab
│   ├── experience/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── opengraph-image.png       # 1200×630 link preview, picked up automatically
│   └── not-found.tsx
│
├── assets/
│   └── images/
│       ├── profile/muizz.png     # Imported, so next/image knows its size
│       └── projects/             # flowboard.png, enter.webp, foodbridge.webp, ekowatch.webp
│
├── components/
│   ├── ui/                       # Generic. Knows nothing about projects or jobs.
│   │   ├── button/button.tsx
│   │   ├── badge/badge.tsx
│   │   ├── badge/tagList.tsx     # Wrapping list of outline badges (tech tags)
│   │   ├── card/card.tsx
│   │   ├── typography/text.tsx
│   │   ├── link/externalLink.tsx
│   │   ├── icons/icons.tsx       # Inline SVG icons from the design, all aria-hidden
│   │   └── themeToggle/themeToggle.tsx
│   │
│   ├── layouts/
│   │   ├── appShell.tsx          # Sidebar + tab bar + content area
│   │   ├── sidebar.tsx
│   │   ├── contactsDisclosure.tsx # Mobile "Show contacts" toggle (client)
│   │   ├── contactList.tsx       # Email and location rows; sidebar and Contact tab
│   │   ├── socialLinks.tsx       # GitHub and LinkedIn icon row
│   │   ├── pageHeader.tsx        # h1 + intro at the top of every tab
│   │   └── tabNav.tsx            # Active tab via usePathname()
│   │
│   ├── providers/
│   │   └── themeProvider.tsx
│   │
│   └── content/                  # One folder per tab
│       ├── projects/
│       │   ├── projectsContent.tsx
│       │   ├── projectCard.tsx       # Featured card
│       │   ├── teamProjectCard.tsx   # Smaller team card
│       │   └── toolsStrip.tsx        # Marquee of tools
│       ├── experience/
│       │   ├── experienceContent.tsx
│       │   └── jobCard.tsx           # One role on the work timeline
│       ├── about/aboutContent.tsx
│       └── contact/contactContent.tsx
│
├── data/                         # All site copy, typed
│   ├── profile.ts                # Name, photo, tagline, contacts, CV
│   ├── projects.ts               # Projects tab intro, featured and team projects
│   ├── experience.ts             # Experience tab intro, jobs, education
│   ├── skills.ts                 # Skill groups and the tools strip
│   ├── about.ts                  # About tab copy, terminal lines, principles
│   └── contact.ts                # Contact tab copy (no design; new copy)
│
├── models/                       # Types for the data files
│   ├── page.ts                   # PageIntro: title + intro shared by every tab
│   ├── profile.ts
│   ├── project.ts
│   ├── experience.ts             # Job, SkillGroup, Education
│   ├── about.ts
│   └── contact.ts
│
└── utilities/
    ├── helpers/cn.ts
    └── constants/navigation.ts   # Tab list: label + href
```

Outside `src/`:

```
public/files/muizz-jamiu-cv.pdf   # Download CV links here
docs/frontendStructureGuide.md
docs/design/                      # Approved design files, reference only
```

Rules:

- `ui/` never imports from `content/` or `data/`. Pass things in as props.
- Route files only render a content component and export `metadata`.
- Images used on the page are imported from `src/assets/images/` (static imports), never referenced
  by string path, so `next/image` gets width and height at build time. Images can be PNG or WebP:
  `next/image` converts them to a modern format for the browser automatically. Screenshots are 16:10.
- Copy lives in `src/data/`, never hard-coded in components. Changing a project description should
  mean editing one data file.
- Server Components by default. `"use client"` only where needed: `themeToggle.tsx`, `tabNav.tsx`,
  `themeProvider.tsx`, the mobile contacts toggle, and small animation wrappers. Keep client
  components small and at the leaves.

---

## Naming

From the guide: files camelCase (`projectCard.tsx`), components PascalCase (`ProjectCard`), folders
lowercase, camelCase when multi-word (`themeToggle/`), booleans `is`/`has`/`can`, handlers `handleX` defined and `onX` as props. Exception: Next.js
reserved files (`page.tsx`, `layout.tsx`, `not-found.tsx`) keep their required names.

---

## Design system

### Colour

Dark and light mode, both first-class. Default follows the system setting; the toggle in the sidebar
overrides it. Accent is indigo, used only for the active tab, links, focus rings and small badges.

Never use raw Tailwind colours (`text-gray-500`, `bg-white`) or hex codes in components. Use the role
tokens below.

```css
/* src/app/globals.css */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

:root {
  --bg: #f7f7f8;
  --surface: #ffffff;
  --surface-raised: #f1f2f4;
  --border: #e4e5e9;
  --text-primary: #15171a;
  --text-body: #33373d;
  --text-secondary: #555b65;
  --text-muted: #6b717a;
  --accent: #5b46f0;
  --accent-text: #4a35e0;
  --accent-subtle: #efedff;
  --accent-foreground: #ffffff;
  --danger: #dc2626;
}

.dark {
  --bg: #121417;
  --surface: #1b1e23;
  --surface-raised: #22262c;
  --border: #2a2e35;
  --text-primary: #e7e9ec;
  --text-body: #c9cdd3;
  --text-secondary: #9aa0a8;
  --text-muted: #858b94;
  --accent: #7c6cff;
  --accent-text: #b3a8ff;
  --accent-subtle: #2a2550;
  --accent-foreground: #0e0b24;
  --danger: #f87171;
}

@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-raised: var(--surface-raised);
  --color-border: var(--border);
  --color-text-primary: var(--text-primary);
  --color-text-body: var(--text-body);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);
  --color-accent: var(--accent);
  --color-accent-text: var(--accent-text);
  --color-accent-subtle: var(--accent-subtle);
  --color-accent-foreground: var(--accent-foreground);
  --color-danger: var(--danger);
  --font-sans: var(--font-poppins);
  --font-mono: var(--font-plex-mono);
}
```

Usage: `bg-bg`, `bg-surface`, `border-border`, `text-text-primary`, `text-text-secondary`,
`text-accent-text`, `bg-accent-subtle`.

Use `--text-body` for paragraphs inside cards, `--text-secondary` for supporting copy, and
`--text-muted` only for captions, labels and dates. Text on an `--accent` fill (the Download CV
button) uses `--accent-foreground`. All text tokens pass WCAG AA contrast on their backgrounds; do
not introduce new greys. Never fade
text with `opacity`.

Theme setup notes:

- `ThemeProvider` uses `attribute="class"`, `defaultTheme="system"`, `enableSystem`.
- Add `suppressHydrationWarning` to `<html>` in `layout.tsx`, because next-themes sets the class
  before React hydrates.
- `themeToggle.tsx` must render a placeholder until mounted, or the icon flickers and mismatches.

### Typography

- One font: Poppins via `next/font/google`, weights 400, 500, 600 and 700 only (not a variable
  font, so each weight is a separate file; add none without a reason), exposed as
  `--font-poppins`. The only exception is IBM Plex Mono (400, 500) for the About terminal card,
  loaded with `preload: false` since only one tab uses it.
- Headings use 600 or 700. The name in the sidebar is 700.
- Hierarchy comes from size and weight only. Use the `Text` component so sizes stay consistent.
- Scale: 32/24/18 for headings, 16 body, 14 small, 12 captions. Line height 1.6 for body.
- Sentence case for headings, tabs and buttons. No all-caps section titles.

### Spacing and shape

- Spacing on the Tailwind 4px scale. Sections separated by generous space (`gap-12` or more).
- Card radius `rounded-xl`, controls `rounded-lg`. Borders 1px `border-border`.
- No gradients, glows or heavy shadows. A card is separated by surface colour and border, not shadow.
- Text content max width about 680px for readability.

### Animation

A little motion, never decorative noise. Every animation must have a reason.

| Where              | What                                                         | Duration          |
| ------------------ | ------------------------------------------------------------ | ----------------- |
| Page load          | Sidebar, tabs, heading, then cards fade in and rise 14px, staggered ~110ms apart | ~600ms each |
| Profile photo      | Pops in from 90% scale (rounded square, no ring)             | ~600ms            |
| Tab bar            | Active underline scales in under the new tab (`layoutId` or scaleX) | ~300ms     |
| Tab content        | Fades and rises 8px on route change                          | ~200ms            |
| Cards              | On hover: lift 4px, border turns `--accent`, screenshot zooms to 104% | ~250ms   |
| Links with arrows  | Arrow nudges up-right 2px on hover                           | ~200ms            |
| Buttons            | Lift 1px and brighten on hover, scale to 97% when pressed    | ~150ms            |
| Theme switch       | Colours transition, no flash                                 | ~200ms            |
| Mobile contacts    | Dropdown expands, chevron rotates 180°                       | ~350ms            |
| Page background    | Static dot grid with a soft accent glow at the top (not animated) | —            |
| Sidebar tagline    | "I build interfaces that are fast / accessible / reliable": the last word slides up to the next | 7.5s loop |
| Status pill        | "Open to frontend roles" with a green dot that pings outward | 2s loop           |
| Tools strip        | Projects tab: tool names scroll sideways in a marquee, pauses on hover | 40s loop |
| About terminal     | Lines type out one by one, then a blinking cursor            | ~5s, cursor loops |

Rules:

- Ease-out curves only (`cubic-bezier(.2,.7,.2,1)` for entrances). No bounce, no spring overshoot.
- Entrance animations must not hold a final `transform` (use `animation-fill-mode: backwards`), or
  they block the hover lift on cards.
- Loops are allowed only for the four listed above (tagline, status pill, tools strip, terminal
  cursor). No other looping animation. Every loop stops under `prefers-reduced-motion`.
- The rotating tagline word is `aria-hidden`; screen readers get the full sentence from visually
  hidden text instead. The marquee's duplicated copy is also `aria-hidden`.
- Respect `prefers-reduced-motion`: use `useReducedMotion()` from `motion/react` and the Tailwind
  `motion-safe:` / `motion-reduce:` variants. With reduced motion, things appear instantly.
- Animate only `transform` and `opacity` (plus colour for hover and theme). Never animate width,
  height via layout thrash, or anything that causes layout shift.
- No scroll-triggered animation on text. Content must be readable immediately.

---

## Design reference

`docs/design/` holds the approved screens as `.dc.html` files exported from the design canvas:

| File                          | Screen                    |
| ----------------------------- | ------------------------- |
| `Main.dc.html`                | Desktop, Projects, dark   |
| `DesktopLight.dc.html`        | Desktop, Projects, light  |
| `DesktopExperience.dc.html`   | Desktop, Experience, dark |
| `DesktopAbout.dc.html`        | Desktop, About, dark      |
| `MobileDark.dc.html`          | Mobile, Projects, dark    |
| `MobileLight.dc.html`         | Mobile, Projects, light   |
| `MobileExperience.dc.html`    | Mobile, Experience, dark  |
| `MobileAbout.dc.html`         | Mobile, About, dark       |

Use them for layout, spacing, sizes, copy and animation behaviour. Do not copy their markup: they
use inline styles and hex values, and a design-tool template syntax (`{{ }}`, `<sc-for>`, `<sc-if>`,
`class Component extends DCLogic`). In the real code, every colour becomes a token from this file,
every repeated block becomes a component, and every piece of copy moves to `src/data/`.
Light versions of Experience and About follow the same layout with the light tokens.

---

## Content rules

These apply to every piece of copy in `src/data/`.

- Featured projects: Flowboard, Enter, and later the Fastship concept. Team projects (smaller cards):
  FoodBridge and EkoWatch, with the badge "Capstone project" (never "In progress", which reads as
  unfinished).
- Experience and About copy comes from the CV and the design files in `docs/design/`. Three roles:
  TeSA Africa (Software Engineering Fellow), RWA Inc and STX Technology (Frontend Developer Intern).
- Don't narrow the role to one industry anywhere on the site.
- Each project card: screenshot, title, three short lines (the problem, what was built, one decision
  and why), tech used, live link, GitHub link where public.
- FoodBridge and EkoWatch are team projects. Say so, and state my role: interface engineer working
  with backend engineers.
- Enter appears once only, not in both projects and experience.
- Never expose employer internals: no internal route names, architecture, tooling, weaknesses or
  incidents. Describe the contribution at a product level.
- Do not state years of experience anywhere.
- Do not list Python.
- RWA Inc internship has ended. Show the end date, not "Present".
- No soft-skill tags ("Growth Mindset", "Flexibility"). Show qualities through project write-ups.
- Write plainly. No "leverage", "seamless", "passionate", "cutting-edge". Short sentences.

---

## Metadata and sharing

The current site's link preview is blank. Fixing that is a priority.

- Root `metadata` in `src/app/layout.tsx`: title template `%s · Muizz Jamiu`, default title,
  description, `openGraph` and `twitter` with a 1200×630 preview image in `public/`, and `metadataBase`.
- Each tab page exports its own `title` and `description`.
- Add `src/app/sitemap.ts` and `src/app/robots.ts`.
- Test the preview by pasting the link into WhatsApp and LinkedIn before calling it done.

---

## Performance and accessibility

Target: Lighthouse 95+ on mobile for Performance, Accessibility, Best Practices and SEO (Search
Engine Optimisation). This site is evidence that I care about performance, so it has to score well.

- Every image through `next/image` with correct `sizes`. Source images in PNG or WebP;
  `next/image` serves an optimised format.
- Mark the sidebar photo `preload` (Next 16 deprecated `priority`) since it is likely the LCP (Largest Contentful Paint) element.
- No layout shift: fixed image dimensions, fonts through `next/font`.
- Keep client JavaScript small. Do not make a whole page a client component for one interactive bit.
- Tabs: `aria-current="page"` on the active link. Visible focus ring using `--accent`.
- Colour contrast meets WCAG (Web Content Accessibility Guidelines) AA in both themes.
- Every image has meaningful `alt` text. Decorative icons get `aria-hidden`.
- Whole site usable with keyboard only.

---

## Departures from the guide

The guide is written for a data-heavy app. This site has no backend, so:

- **No `services/`, `configs/` or API client.** There is nothing to fetch.
- **No `models/requests`, `models/responses` or `models/validations`.** Types for the data files live
  directly in `src/models/`.
- **Added `src/data/`.** Site copy needs one obvious home, and the guide has no folder for static content.
- **Added `src/assets/images/`.** Static image imports give `next/image` real dimensions, which
  prevents layout shift.
- **Added `src/components/providers/`.** The theme provider is neither a generic UI component nor a
  page shell.
- **No table, modal or toast components** until a screen actually needs one. Third use, then extract.
- If a contact form is added later, follow the guide's form rules (section 7): schema in its own
  file, field components bound to the form object, messages that name the field and the fix.

---

## Smells to grep for

| Search for                         | Why it is wrong                                         |
| ---------------------------------- | ------------------------------------------------------- |
| `text-gray-`, `bg-white`, `#` hex  | Breaks dark mode. Use role tokens.                      |
| `<img`                             | Skips image optimisation. Use `next/image`.             |
| `"use client"` at the top of a page | Ships the whole page as JavaScript.                    |
| Project or job text inside a component | Copy belongs in `src/data/`.                        |
| `ui/` importing from `content/` or `data/` | Breaks the one-way dependency rule.            |
| `: any`                            | A type nobody finished.                                 |
| `opacity-` on text                 | Use `text-text-secondary` or `text-text-muted`.         |
| Animation without reduced-motion handling | Ignores users who turned motion off.             |
| `useEffect` with no dependency array | Runs every render.                                    |
