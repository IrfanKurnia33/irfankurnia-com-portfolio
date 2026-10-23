# Irfan Kurnia’s portfolio

A static portfolio built with Astro, TypeScript, plain CSS, and local fonts. Browser scripts add the clocks, card stacks, navigation, and dialogs. Content remains in local Markdown and data files.

## Run locally

Use Node.js **24.19 or newer on the 24 LTS release line** and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Astro, normally **http://127.0.0.1:4321/**. Stop the server with Ctrl+C. The original design documents remain in `docs/initial-design/`.

## Check and preview the production build

```sh
npm run check
npm run build
npm run preview
```

The static website is generated in `dist/`. Preview serves that built output; rerun the build to see source changes there. Use the development server for automatic updates while editing.

## Browser tests

```sh
npm test
```

Tests build on the production preview, so run `npm run build` first. They launch a preview automatically when port 4321 is free. They use locally installed Google Chrome for desktop and mobile emulation; no browser download is necessary. If Chrome is not installed, install it or change `channel` in `playwright.config.ts` to another installed Playwright-supported browser.

The mobile profile uses Chromium device emulation; it does not replace testing on a real iPhone or Safari. Open the HTML test report with `npx playwright show-report`.

## Edit content

See [the content guide](docs/content-guide.md) for projects, quests, photos, links, and update dates. See [verification notes](docs/verification.md) for tested scenarios and remaining limitations.

Each case study pairs a full article in `src/content/projects/<slug>.md` with a short article in `src/content/projects/tldr/<slug>.md`. Shared metadata lives in the full file. TL;DR opens at `/work/<slug>/` by default; Full lives at `/work/<slug>/full/`. Previous `/tldr/` links remain valid. Each version can configure its reading time and TOC labels in Markdown; see the content guide for reusable metric cards, notes, and glossaries.

The application has three main layers:

- `src/content/` and `src/data/`: the writing and editable portfolio information.
- `src/components/`, `src/layouts/`, and `src/pages/`: reusable markup and route templates.
- `src/styles/global.css` and `src/scripts/site.ts`: visual styles and browser interactions.

`public/` holds assets used by URL. Original photographs live in `src/assets/` and are optimized into responsive WebP images by Astro. Google Font families are installed as packages and served locally, without requests to Google’s font servers.

Run `npm run format` to format your edits. It skips the original reference documents and supplied public assets.

## Before publishing

Public indexing and link following are intentionally enabled with `index, follow`. The production domain is `https://irfankurnia.com` in `astro.config.mjs`; the shared layout generates canonical URLs, social metadata, and JSON-LD. The sharing image is `public/og-image.jpg`, favicons live in `public/favicon/`, and Android home-screen settings live in `public/manifest.json`. Review [the content checklist](docs/content-guide.md#remaining-content-checklist) and rebuild before deployment.

Google Analytics 4 uses measurement ID `G-6YM4RQM063`, configured in `src/data/site.ts`. It loads asynchronously in production builds on `irfankurnia.com` and `www.irfankurnia.com`; local previews and other hosts do not load the tag. See [analytics settings and verification](docs/content-guide.md#google-analytics) for case-study history tracking and checking the deployed site.

No CMS, database, runtime server, or API keys are required.
