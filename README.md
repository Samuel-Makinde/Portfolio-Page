# Samuel Tobi Makinde — Portfolio

Personal portfolio site for Samuel Tobi Makinde, a software engineer based in Lagos, Nigeria.

**Live site:** [https://samuelpage.netlify.app/](https://samuelpage.netlify.app/)

## Stack

- React 18
- Vite 4
- Tailwind CSS 3
- react-icons

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Content updates

Editable site content lives in `src/data/content.js` (profile, projects, skills, experience, education, and contact details). CV download links live in the `cvDocuments` array in that file. Leave `href` empty until a Google Drive link is ready. Project images are imported from `src/assets/`.

## Deployment

The site builds to `dist/` and is configured for Netlify static hosting. No special Netlify config is required beyond the default Vite publish directory.
