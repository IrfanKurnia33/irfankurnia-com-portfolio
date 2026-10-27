## Overview

**A location intelligence prototype for Jakarta minimarket expansion.**

<aside class="case-glossary" aria-label="GIS glossary">
  <p class="eyebrow">A quick GIS glossary</p>
  <dl>
    <div><dt>GIS</dt><dd>Geographics Information Systems, software for examining information by location.</dd></div>
    <div><dt>Catchment</dt><dd>The area reachable from a store under a chosen travel assumption.</dd></div>
    <div><dt>Walking Network</dt><dd>Connected paths and crossings; distance follows those connections.</dd></div>
    <div><dt>Overlap/Exposure</dt><dd>Shared catchment area; a reason to investigate branch impact.</dd></div>
    <div><dt>Cannibalization</dt><dd>Customers shifting spending from an existing branch to a new one. Area overlap cannot measure that sales transfer.</dd></div>
    <div><dt>Synthetic</dt><dd>Fictional records and geometry created for this demonstration.</dd></div>
  </dl>
</aside>

<figure>
  <img src="/projects/geomaxx/01-workspace.png" alt="GeoMaxx desktop workspace: a Jakarta basemap, synthetic catchment, common study settings, and a selected candidate inspector." loading="lazy" />
  <figcaption>GeoMaxx workspace with a Jakarta basemap, fictional properties, and candidate evidence.</figcaption>
</figure>

## Initial research

Three practitioner conversations informed a workflow for comparing sites, questioning evidence, and preserving the rationale.

```mermaid
flowchart LR
    A["Compare 3 sites"] --> B["Inspect access<br/>and branch exposure"]
    B --> C["Visit / hold / reject<br/>with reasons"]
    C --> D["Reviewable brief<br/>up to 2 visits"]
```

<figure>
  <img src="/projects/geomaxx/02-comparison.png" alt="Candidate comparison table showing all three properties on the same basis, with coverage, branch exposure, access context, and evidence gaps." loading="lazy" />
</figure>

> **Access changes the question:** Site B is 250 m from E03 directly; the fictional walking route is 1,150 m.

<figure>
  <img src="/projects/geomaxx/03-access-barrier.png" alt="Site B selected with the modeled barrier, catchment, and expanded access explanation." loading="lazy" />
  <figcaption>Site B's catchment, modeled barrier, and access explanation.</figcaption>
</figure>

<div style="grid-template-columns: repeat(2, minmax(0, 1fr));" class="case-gallery case-gallery-staircase" role="group" aria-label="Branch context, traffic evidence, and missing evidence">
  <figure>
    <img src="/projects/geomaxx/05-traffic-evidence.png" alt="Site C's single payday-period observation and its limitation." loading="lazy" />
    <figcaption>Question the evidence: Site C's single payday-period observation and its limitation.</figcaption>
  </figure>
  <figure>
    <img src="/projects/geomaxx/07-recommendation.png" alt="Saved hold recommendation with rationale and open checks." loading="lazy" />
    <figcaption>Carry reasons into review: Saved hold recommendation with rationale and open checks.</figcaption>
  </figure>
</div>

## Closing

**Potential impact:** assuming 120 → 90 minutes per three-site batch and 20 batches/month, **10 preparation hours/month** recovered. This is an illustrative projection, not a measured result.

**Delivered:** working prototype and printable brief. All study records are fictional; overlap cannot estimate lost sales. Practitioner usability testing is next.

**Learning:** make assumptions and missing evidence part of the decision.