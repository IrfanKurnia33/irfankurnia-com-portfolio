# Verification — October 23, 2026

## Automated checks

- `npm run check`: zero errors, warnings, or hints.
- TOC scrolling: build, type checks, and all 16 focused desktop/mobile navigation and case-study checks pass. TOC clicks animate through intermediate scroll positions, retain section alignment when layout changes during the animation, and jump immediately when reduced motion is enabled.
- `npm run build`: fifteen static pages generated successfully, including default TL;DR, full, and legacy `/tldr/` routes for all four case studies, with responsive WebP photographs.
- Case-study reading update: 51 desktop/mobile scenarios passed across the full and focused runs; one mobile-only scenario is intentionally skipped on desktop. All 12 focused navigation/diagram checks passed, followed by six navigation checks after reserving the cover's actual dimensions. Coverage includes TL;DR defaults, retained legacy URLs, independent Markdown TOC labels, section-six alignment through delayed covers, article images and diagrams, reloads, version switching, scroll tracking, responsive glossary/metrics, accessibility, and no eager PDF requests. Stratis contains approximately 200/940 words, two/five screenshots, and static or dynamically loaded diagrams. Desktop/mobile layouts and metric cards were visually reviewed. Supporting PDFs remain optional links. Original research detail is preserved in `docs/stratis-research-archive.md`.
- Case-study header adjustments: Astro check/build and 14 targeted desktop/mobile browser checks passed against the production preview. The eyebrow above the title is removed and the toggle follows the featured image. Separate browser checks exercised all three project-button types with one, two, or no configured buttons; supplied icons, new-tab navigation, shared Full/TL;DR buttons, and layouts at 320, 402, and 1440 CSS pixels passed. The Now blog button uses the supplied live-link icon.
- Mermaid: all six desktop/mobile checks passed, covering brand styling, accessible SVG names, left-to-right and top-down node order, mobile fit, lazy loading, breakpoint changes, Full/TL;DR switching, browser history, unique IDs, another case study, and readable source after a syntax error. Separate visual checks covered the Stratis diagrams, wrapped return-arrow labels, and the source fallback with JavaScript disabled. The local dev server was refreshed after installation and also renders the diagrams.
- Back to Top: all eight Full/TL;DR routes were checked at desktop and mobile sizes. The supplied arrow icon, fixed placement, smooth intermediate scroll positions, keyboard activation, reduced-motion behavior, focus at the main content, preserved query parameters, and absence of a reload were verified. Home and Now retain their motion controls.
- Case-study image zoom: all six desktop/mobile checks passed. These cover the hover/touch hint, original image source and alternative text, viewport fit, intact captions and picture sources, outside/Escape/button dismissal, focus containment and restoration, version switching without duplicate controls, animated exits, and changes to reduced motion. The open viewer and visible overlays passed automated WCAG A/AA checks. Visual review covered the Stratis image on desktop/mobile; its original image remains visible without JavaScript.
- Case-study version checks: all eight desktop/mobile checks passed. These cover in-place Markdown and TOC switching, keyboard activation and retained focus, unchanged scroll position, Back/Forward, reloads and direct URLs, shared metadata, one Work card per pair, no duplicate heading IDs, unknown-version 404s, and navigation without JavaScript. Both versions passed Axe WCAG A/AA checks. The toggle measures 48px high, aligns with the featured image, and sits 24px below it at 320, 402, 768, and 1440 CSS pixels.
- Quest exit polish: `npx playwright test --grep "Quest"` passed all four desktop/mobile checks. These cover all dismissal paths, focus and scroll lock during the exit, early and repeated dismissal, and reduced motion enabled while closing.
- Axe checks reported no WCAG A/AA violations on Home, Now, Finodus, the 404 page, all five hero cards, all dock states, and the open Quest dialog in the tested Chrome desktop/mobile profiles.

Case-study table polish was verified at 320, 402, 768, and 1440 CSS pixels. Wide tables stayed within the article and scrolled with the keyboard. The Stratis comparison table retained its copy, gained column/row header associations, and passed automated WCAG A/AA checks on desktop/mobile. Full/TL;DR switching preserved one wrapper per table. The styled no-JavaScript table remained readable without page overflow. Build, Astro checks, and all eight case-study browser tests passed.

Browser tests cover section navigation, browser Back, all project routes, the custom 404, menu dismissal, TOC anchors, card state and autoplay, pause preferences, dialog focus containment and restoration, and the personal-blog destination.

UI polish checks also cover the word/card entrance sequence, interruption by the global pause control, delayed autoplay, moving orbit geometry, changes to device motion preferences, dock highlight alignment on desktop and mobile, and returning to the top through the brand without reloading. The six animated dots were measured against their corresponding SVG paths with less than one screen pixel of error.

Clocks were checked with a fixed instant in Jakarta, Singapore, and New York. Tests verify different local dates and New York’s summer/winter offsets. Layout checks cover 320, 402, 768, 1024, and 1440 CSS pixels, a short viewport, and enlarged root text. Additional visual review covered the reference desktop/mobile compositions and article layouts.

## Local performance sample

The production build reports a chunk-size warning for Mermaid's diagram dependencies. They load dynamically only when the selected case-study article contains a diagram. The performance samples below predate the Mermaid integration and do not measure diagram pages.

These are single browser measurements against the production build on localhost, not Lighthouse scores or measurements from deployed visitors. Desktop and mobile samples ran while the browser suite was active, so machine contention can affect timing.

| Sample                                                                          | Largest contentful paint | Layout shift | Resource transfer     |
| ------------------------------------------------------------------------------- | ------------------------ | ------------ | --------------------- |
| Desktop, 1440 × 1020, cold context                                              | 2.01 s                   | 0.0001       | approximately 237 KiB |
| Mobile, 402 × 874, DPR 2, 4× CPU slowdown, 1.6 Mbps / 150 ms network simulation | 2.93 s                   | 0.0140       | approximately 235 KiB |

The samples included the first-visit entrance. Neither sample made external runtime requests. The layout-shift measurement is the sum of observed shifts without recent input during the sample, rather than a field Core Web Vitals assessment.

## Additional manual checks

- Microsoft Edge: Now gallery loaded and shuffled to the next photograph.
- JavaScript disabled: Home heading and all four Work cards remained visible, with an accessible Now link on mobile.
- Supplied artwork and all four original Now photos were used; reference documentation remains intact.
- Hero and non-hero background variants were inspected; reduced motion stops automatic background and card movement.
- A tablet gallery overflow was corrected by stacking the Now layout at intermediate widths.
- Dialog Tab/Shift+Tab wrap and Escape/backdrop/button dismissal restore focus to the originating Quest card.
- Visual review of desktop/mobile entrance frames confirmed that words settle before cards rise together and fan outward, following the supplied animation JSON.
- The new favicon matches the supplied SVG exactly; the header logo retains its separate asset. Resume and all four supplied social destinations match their configured links.
- Smooth brand scrolling was checked with motion enabled on desktop and mobile, including preservation of the current document. The Now page's fade-up entrance and the JavaScript-disabled homepage were also checked.
- Quest dialog entrance and backdrop blur were inspected at intermediate and completed animation frames on desktop and mobile. Repeat opening, restored focus, manual pause, and reduced motion leave the dialog visible and usable.
- The mobile hamburger morphs into a close icon and reverses on dismissal. Its links are Home, Resume, LinkedIn, and Now in that order; Escape dismissal was checked with motion enabled.
- Both case-study toggle states were visually compared with the supplied desktop/mobile SVG references, using the supplied 18px icons and regular 14px Sora labels (12px on the narrowest screens).

## Practical limits and content remaining

Chrome mobile emulation and an Edge smoke check do not establish compatibility with real iOS Safari, Firefox, or assistive technologies. Automated accessibility checks were supplemented with keyboard, focus, and rendered contrast inspection; they do not constitute a full accessibility audit. Field performance and platform-specific social previews require a later deployed build.

The portfolio intentionally contains draft project copy, three sample projects, six Quest media placeholders, and a marked Now update. See [the remaining content checklist](content-guide.md#remaining-content-checklist). Pages remain `noindex, nofollow` until `site.preview` is changed before publication.

The local build is complete. No hosting, DNS, deployment, or external account changes were made.
