# Verification — October 21, 2026

## Automated checks

- `npm run check`: zero errors, warnings, or hints.
- `npm run build`: seven static pages generated successfully, with responsive WebP photographs.
- Last full `npm test` run: 23 passed; one desktop run intentionally skipped because that test exercises the mobile navigation. The corresponding mobile test passed.
- Quest exit polish: `npx playwright test --grep "Quest"` passed all four desktop/mobile checks. These cover all dismissal paths, focus and scroll lock during the exit, early and repeated dismissal, and reduced motion enabled while closing.
- Axe checks reported no WCAG A/AA violations on Home, Now, Finodus, the 404 page, all five hero cards, all dock states, and the open Quest dialog in the tested Chrome desktop/mobile profiles.

Browser tests cover section navigation, browser Back, all project routes, the custom 404, menu dismissal, TOC anchors, card state and autoplay, pause preferences, dialog focus containment and restoration, and the personal-blog destination.

UI polish checks also cover the word/card entrance sequence, interruption by the global pause control, delayed autoplay, moving orbit geometry, changes to device motion preferences, dock highlight alignment on desktop and mobile, and returning to the top through the brand without reloading. The six animated dots were measured against their corresponding SVG paths with less than one screen pixel of error.

Clocks were checked with a fixed instant in Jakarta, Singapore, and New York. Tests verify different local dates and New York’s summer/winter offsets. Layout checks cover 320, 402, 768, 1024, and 1440 CSS pixels, a short viewport, and enlarged root text. Additional visual review covered the reference desktop/mobile compositions and article layouts.

## Local performance sample

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

## Practical limits and content remaining

Chrome mobile emulation and an Edge smoke check do not establish compatibility with real iOS Safari, Firefox, or assistive technologies. Automated accessibility checks were supplemented with keyboard, focus, and rendered contrast inspection; they do not constitute a full accessibility audit. Field performance and platform-specific social previews require a later deployed build.

The portfolio intentionally contains draft project copy, three sample projects, six Quest media placeholders, and a marked Now update. See [the remaining content checklist](content-guide.md#remaining-content-checklist). Pages remain `noindex, nofollow` until `site.preview` is changed before publication.

The local build is complete. No hosting, DNS, deployment, or external account changes were made.
