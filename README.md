# Developer Portfolio (Next.js)

A personal developer portfolio web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

**Live Demo:** [https://nextjs-portfolio-delta-nine.vercel.app/](https://nextjs-portfolio-delta-nine.vercel.app/)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router), React 18, TypeScript
- **Styling & Typography:** Tailwind CSS, `tailwind-merge`, Google Fonts (`Inter`, `Calistoga`)
- **Animations & Assets:** Framer Motion, `@svgr/webpack`

---

## Project Structure

```text
nextjs-portfolio/
├── src/
│   ├── app/               # Root layout, global styles & landing page
│   ├── components/        # Card, CardHeader, HeroOrbit, SectionHeader, ToolboxItems
│   └── sections/          # Header, Hero, Projects, Tape, About, Contact, Footer
├── public/                # Static assets & project previews
├── tailwind.config.ts
└── package.json
```

---

## Local Development

```bash
npm install
npm run dev
```

Available scripts:

- `npm run dev` — Start development server at `http://localhost:3000`
- `npm run build` — Create production build
- `npm run lint` — Run Next.js ESLint checks
