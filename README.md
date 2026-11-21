# Oluwaferanmi Sokunbi: Portfolio Website

Step-by-step build plan. Work through the phases in order and tick each box as you go. We will improve this file as the project grows.

## 1. Project summary

| Item | Decision |
|---|---|
| Owner | Oluwaferanmi Sokunbi (Sokunbi Oluwaferanmi Tantoolorun) |
| Title | Frontend & Web Developer |
| Audience | Anyone who needs web development services (businesses, agencies, individuals) |
| Stack | Next.js (App Router) + TypeScript + Tailwind CSS + GSAP + Motion |
| Content | MDX files in the repo (projects and blog) |
| Contact form | Resend (emails you each enquiry) |
| Hosting | Vercel (free `.vercel.app` address first, custom domain later) |
| Design reference | https://awmedia.marketing/ (structure and feel only, see section 2) |
| Email | feranmiisaac622@gmail.com |
| WhatsApp | +2349059730499 (link: `https://wa.me/2349059730499`) |
| GitHub | https://github.com/Deorum-1 |
| LinkedIn | https://linkedin.com/in/oluwaferanmi212 |
| Blog | Yes |

## 2. Using awmedia.marketing as the design reference

Copy these ideas from the site:

- A big, clear promise in the first line, with two buttons under it.
- Real work shown early, inside a browser frame.
- Services as a grid of cards.
- A simple numbered process ("how we work").
- A short FAQ, a blog, and the same call to action repeated down the page.
- A polished, modern look with smooth scrolling and subtle motion.

Do **not** copy their text, logo, images, numbers (450+ sites, awards, reviews) or code. Write your own words, use your own work, and make the visuals your own. Copying another business's content can get you into legal trouble and makes you look less credible to clients.

## 3. Things to prepare before coding

- [ ] Deploy **Agency.ai** to Vercel if you can, so it has a live link. Until then, link its GitHub repo: https://github.com/Deorum-1/Agency.ai
- [ ] Rename "Award-Winning Website" to **Animated Gaming Site** everywhere.
- [ ] Take screenshots of all three projects (full-page desktop plus one phone view). Save as `.webp` or `.png`, around 1600px wide.
- [ ] Write 2 or 3 sentences per project: the goal, what you built, and the tools you used.
- [ ] Export your CV as `cv.pdf`.
- [ ] Choose a colour palette and two fonts (one for headings, one for body text).
- [ ] Create accounts: GitHub (done), Vercel, Resend.
- [ ] Confirm which phone number you want shown. Your CV lists +234 702 536 4239 and your WhatsApp is +2349059730499.

## 4. Phase 1: Project setup

```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd portfolio
npm install gsap @gsap/react motion zod resend gray-matter next-mdx-remote
npm install -D prettier prettier-plugin-tailwindcss
npm run dev
```

- [x] App runs at http://localhost:3000
- [ ] Create a GitHub repo called `portfolio` and push the code
- [x] Add a `.prettierrc` with the Tailwind plugin

Suggested folders:

```
src/
  app/
    layout.tsx
    page.tsx
    work/[slug]/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    api/contact/route.ts
    sitemap.ts
    robots.ts
  components/
    Header.tsx  Footer.tsx  Hero.tsx  ProjectCard.tsx
    Services.tsx  Process.tsx  About.tsx  Faq.tsx  ContactForm.tsx
  content/
    projects/*.mdx
    blog/*.mdx
  lib/
    content.ts  site.ts
public/
  images/  cv.pdf
```

Put all your personal details (name, email, links) in `src/lib/site.ts` so you only change them in one place.

## 5. Phase 2: Design foundations

- [ ] Define colour variables for light and dark mode in `globals.css`.
- [ ] Load fonts with `next/font` (pick something with character, not default Arial or Inter).
- [ ] Set a spacing scale and a max content width (about 1100 to 1200px).
- [ ] Build one `Button` component (primary and outline).
- [ ] Add a dark mode toggle that respects the system setting.
- [ ] Set up smooth page scrolling and make every animation respect `prefers-reduced-motion`.

## 6. Phase 3: Build the pages

Build in this order. Test each on a phone-sized screen before moving on.

### Home page sections

1. **Header**: logo/name, links (Work, Services, About, Blog, Contact), "Book a call" or "Start a project" button.
2. **Hero**: one-line promise, one sentence on who you help, two buttons ("Start a project", "See my work"). Add one animated moment with GSAP (text reveal or a moving shape).
3. **Selected work**: three project cards inside a browser frame, each with tags and "View case study" plus "Live site" links.
4. **Services**: Business websites, Animated and interactive frontends, React and Next.js web apps, Website redesigns.
5. **How I work**: Discovery, Design, Build, Launch, Support (one sentence each).
6. **About**: short bio, skills, experience (freelance, instructor at SAI, ICTREC internship), AI Fluency certification, "Download CV" button.
7. **FAQ**: how long a site takes, what content you need from clients, can they edit the site after launch, how pricing works, do you work remotely.
8. **Contact**: form, email, WhatsApp, GitHub, LinkedIn.
9. **Footer**: links, socials, copyright.

### Other pages

- [ ] `/work/[slug]`: case study (goal, what you built, tools, result, screenshots, live link)
- [ ] `/blog` and `/blog/[slug]`
- [ ] A custom 404 page

Warning: do not add testimonials, client names, awards or numbers you cannot prove. Add them later when you have real ones.

## 7. Phase 4: Project content

Create one MDX file per project in `src/content/projects/`.

```mdx
---
title: "Animated Gaming Site"
slug: "animated-gaming-site"
summary: "An interactive gaming website with scroll and interaction animations."
tags: ["React", "GSAP", "JavaScript"]
liveUrl: "https://award-winning-website-with-reactjs.vercel.app"
repoUrl: ""
image: "/images/animated-gaming-site.webp"
order: 1
---

## The goal
...

## What I built
...

## Tools and decisions
...
```

- [ ] `animated-gaming-site.mdx`
- [ ] `real-estate-listing-platform.mdx` (live: https://real-estate-website-five-bice.vercel.app)
- [ ] `agency-ai.mdx` (repo: https://github.com/Deorum-1/Agency.ai)

Write a small function in `src/lib/content.ts` that reads these files with `gray-matter`, sorts by `order`, and returns them to the pages.

## 8. Phase 5: Blog

A blog helps people find you on Google. Start with three posts, each 600 to 900 words, written from your own experience:

1. "How I added GSAP scroll animations without slowing the page down"
2. "What a small business should know before hiring a web developer"
3. "React vs Next.js: which one does your website need?"

- [ ] Create `src/content/blog/` with the three MDX files (title, date, description, tags)
- [ ] Blog list page, post page, reading time
- [ ] Publish one new post a month

## 9. Phase 6: Contact form

- [ ] Build `ContactForm.tsx` with fields: name, email, project type, budget (optional), message.
- [ ] Validate on the client and the server with `zod`.
- [ ] Create `src/app/api/contact/route.ts` that sends the email with Resend.
- [ ] Add a hidden honeypot field to block spam bots.
- [ ] Show clear loading, success and error states.
- [ ] Add a WhatsApp button linking to `https://wa.me/2349059730499?text=Hi%20Oluwaferanmi%2C%20I%27d%20like%20to%20discuss%20a%20project.`

Create `.env.local` (never commit it):

```
RESEND_API_KEY=your_key_here
CONTACT_TO_EMAIL=feranmiisaac622@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Until you own a domain, Resend only lets you send from its test address to your own account email, which is fine because the form emails you.

## 10. Phase 7: SEO, speed and accessibility

- [ ] Page titles and descriptions on every page (`metadata`)
- [ ] OpenGraph image so links look good when shared on WhatsApp and LinkedIn
- [ ] `sitemap.ts` and `robots.ts`
- [ ] JSON-LD structured data (Person and WebSite)
- [ ] Use `next/image` with `alt` text on every image
- [ ] Keyboard navigation works and focus outlines are visible
- [ ] Text contrast passes in both light and dark mode
- [ ] Run Lighthouse in Chrome and aim for 90+ in all four categories
- [ ] Test on a real phone with a slow connection

## 11. Phase 8: Deploy

1. Push the code to GitHub.
2. Go to vercel.com, choose **Add New → Project**, and import the `portfolio` repo.
3. Add the three environment variables in **Settings → Environment Variables**. Set `NEXT_PUBLIC_SITE_URL` to your Vercel address.
4. Deploy, then submit a test message through the contact form.
5. Later, buy a domain (for example `yourname.dev`) and add it in **Settings → Domains**. Update `NEXT_PUBLIC_SITE_URL` afterwards.

## 12. Phase 9: Launch checklist

- [ ] Every link works (live sites, GitHub, LinkedIn, WhatsApp, CV download)
- [ ] No placeholder text left
- [ ] Contact form delivers to your inbox
- [ ] Looks right on phone, tablet and desktop
- [ ] Add the portfolio link to your CV, LinkedIn and GitHub profile
- [ ] Submit the site to Google Search Console
- [ ] Share it on LinkedIn with a short post about one project

## 13. Improvements for later

- Add real testimonials as soon as you have them
- Convert the three project descriptions into fuller case studies with before and after screenshots
- Add a services page with starting prices
- Add a booking link (Calendly or Cal.com)
- Add Google Analytics or Plausible
- Build the TypeScript habit: type all components and content helpers

## 14. Master prompt for Claude Code or Cursor

Paste this when you are ready to generate the code, then work through the phases above one at a time.

```
You are a senior frontend engineer and designer. Build a portfolio website for Oluwaferanmi Sokunbi, a Frontend & Web Developer in Abeokuta, Nigeria, available for freelance and agency projects.

Stack: Next.js App Router, TypeScript, Tailwind CSS, GSAP (ScrollTrigger), Motion, MDX content with gray-matter, Resend for the contact form, deploy on Vercel.

Follow README.md in this repo for the folder structure, pages, sections and phases. Use only the facts in the README and src/lib/site.ts. Never invent testimonials, metrics, awards or client names.

Design: follow the structure and feel of awmedia.marketing (clear promise in the hero, real work early, services grid, five-step process, FAQ, blog, repeated call to action), but write original copy and do not copy its text, logo, images or code. Light and dark mode, responsive from 360px, respect prefers-reduced-motion, distinctive typography, one memorable animated hero moment.

Quality: Lighthouse 90+, semantic HTML, alt text, keyboard accessible, metadata and OpenGraph on every page, sitemap and robots, JSON-LD, clean reusable components, ESLint and Prettier.

Work one phase at a time. After each phase, tell me what changed and what to test.
```

## 15. Open items

| Item | Status |
|---|---|
| Project screenshots | To do |
| Short write-up for each project | To do |
| Palette and fonts | To decide |
| Phone number to display | To confirm |
| SAI instructor details | Dates left out on purpose |
| Testimonials | None yet |
| Domain | Not yet |
