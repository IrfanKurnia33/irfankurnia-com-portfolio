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

The application has three main layers:

- `src/content/` and `src/data/`: the writing and editable portfolio information.
- `src/components/`, `src/layouts/`, and `src/pages/`: reusable markup and route templates.
- `src/styles/global.css` and `src/scripts/site.ts`: visual styles and browser interactions.

`public/` holds assets used by URL. Original photographs live in `src/assets/` and are optimized into responsive WebP images by Astro. Google Font families are installed as packages and served locally, without requests to Google’s font servers.

Run `npm run format` to format your edits. It skips the original reference documents and supplied public assets.

## Before publishing

This milestone is local only. The site currently marks every page `noindex, nofollow` through `site.preview` because draft projects and media remain. Complete [the content checklist](docs/content-guide.md#remaining-content-checklist), set `preview: false`, confirm the social-sharing image URL in `Base.astro`, and rebuild before a later deployment.

No CMS, database, runtime server, analytics, or API keys are required.
