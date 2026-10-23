<aside class="case-glossary" aria-label="Finance decoded">
  <p class="eyebrow">Finance, decoded</p>
  <dl>
    <div><dt>Ledger / books</dt><dd>Company accounting records.</dd></div>
    <div><dt>Reconciliation</dt><dd>Explain bank/book differences.</dd></div>
    <div><dt>Outstanding check</dt><dd>Recorded payment awaiting bank clearance.</dd></div>
    <div><dt>Sign-off</dt><dd>Independent review approval.</dd></div>
  </dl>
</aside>

## The problem

> Two legitimate $4,800 payments; one bank withdrawal without a reference. Guessing could mark the wrong payment as cleared.

<figure>
  <img src="/projects/finodus/03b-investigation-overview.png" alt="Working investigation: two payment candidates beside the original bank image identifying check 1042." loading="lazy" />
  <figcaption>Working investigation: two payment candidates beside the original bank image identifying check 1042.</figcaption>
</figure>

> **The solution:** put evidence and authority beside the decision. Watch investigates without automatic changes. Dollar limits never override evidence conflicts.

```mermaid
flowchart LR
    A["Inspect check image"] --> B["Confirm supported match"]
    B --> C["Document remaining<br/>outstanding check"]
    C --> D["Independent review"]
```

<figure>
  <img src="/projects/finodus/05a-balance-bridge.png" alt="Actual balance bridge: USD 124,800 bank balance less the USD 4,800 outstanding check equals USD 120,000 in the books, with no book adjustment." loading="lazy" />
  <figcaption>Actual balance bridge: USD 124,800 bank balance less the USD 4,800 outstanding check equals USD 120,000 in the books, with no book adjustment.</figcaption>
</figure>

## Projected opportunity

**5 hours/month recovered per team.** Illustrative assumptions: 100 exceptions × (8 − 5 minutes) ÷ 60. A **37.5% handling-time reduction**, unmeasured; capacity, not cash savings.

**Learning** Matching, timing, and sign-off need separate states. Recovery needs the same care as success.

**Built:** React/TypeScript, browser-local state, enforced decision gates, and a replayable product tour.

## Next Steps

1. Six formative sessions—four accountants
2. Two Controllers—to test Watch comprehension
3. Evidence selection, timing, review, and recovery
4. Benchmark equivalent tasks against current workflows.