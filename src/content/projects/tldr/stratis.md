## Overview

**A working product design concept for reviewing commercial lease amendments—with sources, open questions, and responsibility kept together.**

<figure>
  <img src="/projects/stratis/02-review-amendment.png" alt="Corrected November rent beside the amendment that changes it, in the Stratis desktop workspace." loading="lazy" />
</figure>

## The problem

A lease amendment can change next month's rent, alter a renewal deadline, and leave other terms unchanged. Extracting a number is only part of the work. Someone must establish which document governs it, when it applies, and what evidence is still missing.

I focused Stratis's broader AI real estate vision on that review task for **US owner/operator lease administration teams**. The first scenario ends in a qualified handoff: useful reviewed information with unresolved questions clearly retained.

Yardi already offers extraction inside Voyager. I explored traceable review and handoff as a possible reason for another product to exist; that opportunity remains unvalidated. [Yardi's 2026 update](https://www.yardi.com/blog/commercial-product-update-2026-q1/).

## My contribution

I led product framing, practitioner research, workflow, interaction and visual design, original branding, and prototype direction, with AI assistance for documentation, implementation, and technical checks.

## What informed the design

I created a synthetic lease and amendment from public document patterns, then ran **two moderated browser sessions with practitioners from different US owner/operators**: a senior administrator and a junior analyst.

Both accounts raised status, source-access, and conditional-rights concerns. They differed on navigation guidance and recipient clarity. Final task records and timing were unavailable for scoring.

## What changed

- **Clearer outcomes.** A saved decision stays distinct from verified evidence or finished follow-up.
- **Structured conditions.** Known option terms survive while eligibility remains unverified.
- **Sources beside decisions.** Related amendment clauses remain available, with a drawer on narrow screens.
- **Readable handoff.** Evidence, effective period, owner, and next action travel together in HTML and structured JSON.

<figure>
  <img src="/projects/stratis/08-handoff-unknown-and-periods.png" alt="The handoff places an unknown operating expense cap with its owner and request, followed by current and future rent with explicit effective periods." loading="lazy" />
</figure>

## What exists now

A working prototype connects **Documents → Review terms → Open items → Handoff**, with saved progress, date calculations, conditional rights, and versioned exports. Warm neutral surfaces and readable type support document review.

The build and seven model tests pass. Browser checks cover the synthetic flow and eight selected widths, 320–1920 pixels. Selected automated accessibility checks found no violations; conformance and user-performance improvement remain unestablished.

Suggestions are prepared, with no live AI extraction or external integrations. GitHub/Vercel configuration is ready; deployment is pending.

## What remains to learn

I proceeded without another round because the practitioners were busy. Time savings, revised usability, extraction accuracy, and business impact remain unmeasured. Next, I would recruit additional preparers, approvers, and a recipient to test status meaning, handoff policy, source continuity, and review effort.

The main lesson: a useful review tool needs to preserve both the decision and its limits. A finished review action can leave evidence unresolved, with a clear owner for the next step.

**Explore:** [Example readable handoff](https://files.irfankurnia.com/stratis/example-qualified-handoff.html) · [PDF example](https://files.irfankurnia.com/stratis/example-qualified-handoff.pdf).