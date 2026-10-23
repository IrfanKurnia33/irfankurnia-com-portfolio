---
readingTime: 60 sec
toc:
  make-lease-changes-safe-to-act-on: Brief & glossary
  from-document-to-dependable-handoff: What I built
  the-value-to-test: Business impact
---

## Make lease changes safe to act on

**The brief:** help US commercial property lease teams verify changes before billing or handoff. Keep sources, dates, and missing evidence together.

**My role:** solo product design, practitioner research, branding, and AI-assisted prototype implementation.

<aside class="case-glossary" aria-label="Real estate glossary">
  <p class="eyebrow">Real estate, decoded</p>
  <dl>
    <div><dt>Amendment</dt><dd>A change to an existing lease.</dd></div>
    <div><dt>Abstraction</dt><dd>Contract text → structured terms.</dd></div>
    <div><dt>Renewal option</dt><dd>A conditional right to extend.</dd></div>
    <div><dt>Qualified handoff</dt><dd>Reviewed, with open questions visible.</dd></div>
  </dl>
</aside>

## From document to dependable handoff

Two practitioner sessions exposed unclear statuses, interrupted source access, and unstructured conditions. I built this workflow:

<ol class="case-flow" aria-label="Review workflow">
  <li><span>01</span><strong>Documents</strong><small>Check coverage</small></li>
  <li><span>02</span><strong>Review</strong><small>Decide with sources</small></li>
  <li><span>03</span><strong>Open items</strong><small>Assign next actions</small></li>
  <li><span>04</span><strong>Handoff</strong><small>Retain the limits</small></li>
</ol>

<figure>
  <img src="/projects/stratis/02-review-amendment.png" alt="The amended rent and effective period sit beside their supporting source in Stratis." loading="lazy" />
  <figcaption><strong>Verify the change.</strong> Keep the governing clause beside the decision.</figcaption>
</figure>

<figure>
  <img src="/projects/stratis/08-handoff-unknown-and-periods.png" alt="A missing expense cap retains its evidence request and owner, alongside dated rent terms in the handoff." loading="lazy" />
  <figcaption><strong>Make uncertainty actionable.</strong> Missing evidence travels with an owner and next step.</figcaption>
</figure>

## The value to test

<dl class="metric-grid" aria-label="Illustrative business projections">
  <div class="metric-card"><dt><span class="metric-kind">Planning target</span>Less review effort</dt><dd>25<span>%</span></dd><dd class="metric-context">40 → 30 min per amendment.</dd></div>
  <div class="metric-card"><dt><span class="metric-kind">Illustrative projection</span>Capacity returned</dt><dd>~17<span>h / mo</span></dd><dd class="metric-context">At 100 amendments per month.</dd></div>
</dl>

<p class="case-footnote">Assumptions, not measured results: 10 min × 100 ÷ 60 ≈ 16.7 hours/month.</p>

**Delivered:** working React/TypeScript prototype; seven model tests pass. Screens use fictional data; extraction suggestions are prepared.

**Next:** validate quality and time with more reviewers. Business impact is unmeasured.

**Lesson:** a saved decision can still need evidence.
