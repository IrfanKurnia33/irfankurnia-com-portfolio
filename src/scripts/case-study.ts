// Both versions have static URLs. Enhance their links with an immediate in-page switch.
import { initImageZoom } from './image-zoom';
import { initCaseDiagrams } from './case-diagrams';

function enhanceExternalLinks(container: HTMLElement) {
  container.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    if (
      (link.protocol === 'https:' || link.protocol === 'http:') &&
      link.origin !== location.origin
    ) {
      link.target = '_blank';
      link.relList.add('noopener', 'noreferrer');
    }
  });
}

function enhanceTables(body: HTMLElement) {
  let heading = 'Case study';
  body
    .querySelectorAll<HTMLElement>('.case-prose h2, .case-prose h3, .case-prose table')
    .forEach((element) => {
      if (!(element instanceof HTMLTableElement)) {
        heading = element.textContent?.trim() || heading;
        return;
      }
      if (element.parentElement?.classList.contains('case-table')) return;
      const frame = document.createElement('div');
      frame.className = 'case-table';
      frame.tabIndex = 0;
      frame.setAttribute('role', 'region');
      frame.setAttribute('aria-label', `${element.caption?.textContent?.trim() || heading} table`);
      element.replaceWith(frame);
      frame.append(element);
      element.querySelectorAll<HTMLTableCellElement>('thead th').forEach((cell) => {
        if (!cell.scope) cell.scope = 'col';
      });
      // Comparison tables often leave the top-left label visually blank.
      const firstHeader = element.tHead?.rows[0]?.cells[0];
      if (firstHeader?.tagName === 'TH' && !firstHeader.textContent?.trim()) {
        const label = document.createElement('span');
        label.className = 'sr-only';
        label.textContent = 'Comparison category';
        firstHeader.append(label);
        for (const section of element.tBodies) {
          for (const row of section.rows) {
            const cell = row.cells[0];
            if (!cell || cell.tagName !== 'TD') continue;
            const header = document.createElement('th');
            for (const attribute of cell.attributes)
              header.setAttribute(attribute.name, attribute.value);
            header.scope = 'row';
            header.append(...cell.childNodes);
            cell.replaceWith(header);
          }
        }
      }
    });
}

function initToc(body: HTMLElement) {
  const toc = body.querySelector<HTMLDetailsElement>('.toc details');
  const links = [...body.querySelectorAll<HTMLAnchorElement>('[data-toc-link]')];
  const closeOnMobile = () => {
    if (toc && matchMedia('(max-width: 700px)').matches) toc.open = false;
  };
  closeOnMobile();

  const observer = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (active) {
        for (const link of links) {
          if (link.hash === `#${active.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-15% 0px -60% 0px', threshold: 0 },
  );
  body.querySelectorAll('.case-prose h2').forEach((heading) => observer.observe(heading));
  links.forEach((link) => link.addEventListener('click', closeOnMobile));
  return () => {
    observer.disconnect();
    links.forEach((link) => link.removeEventListener('click', closeOnMobile));
  };
}

export function initCaseStudy(motionPaused: () => boolean) {
  const article = document.querySelector<HTMLElement>('[data-case-study]');
  const toggle = article?.querySelector<HTMLElement>('[data-case-toggle]');
  const alternate = article?.querySelector<HTMLTemplateElement>('[data-case-alternate]');
  const initialBody = article?.querySelector<HTMLElement>('.case-body');
  if (!article || !toggle || !alternate || !initialBody) return;
  enhanceExternalLinks(article);
  const enhanceImages = initImageZoom(article, motionPaused);
  const enhanceDiagrams = initCaseDiagrams(article);

  const links = [...toggle.querySelectorAll<HTMLAnchorElement>('[data-case-version]')];
  const status = article.querySelector<HTMLElement>('[data-case-status]');
  let body = initialBody;
  enhanceTables(body);
  let cleanUpToc = initToc(body);

  function selectVersion(link: HTMLAnchorElement, pushHistory: boolean) {
    const mode = link.dataset.caseVersion;
    if (body.dataset.caseMode === mode) return;
    const nextBody = alternate!.content.querySelector<HTMLElement>('.case-body');
    if (!nextBody || nextBody.dataset.caseMode !== mode) return;

    cleanUpToc();
    body.replaceWith(nextBody);
    alternate!.content.replaceChildren(body);
    body = nextBody;
    enhanceExternalLinks(body);
    enhanceTables(body);
    enhanceImages(body);
    enhanceDiagrams(body);
    cleanUpToc = initToc(body);

    toggle!.dataset.mode = mode;
    for (const item of links) {
      if (item === link) item.setAttribute('aria-current', 'page');
      else item.removeAttribute('aria-current');
    }
    document.title = link.dataset.pageTitle!;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    if (status) {
      status.textContent =
        mode === 'full' ? 'Full case study selected.' : 'TL;DR version selected.';
    }
    if (pushHistory) {
      // Drop section anchors from the previous article; keep any incoming query parameters.
      history.pushState(null, '', link.pathname + location.search);
    }
  }

  for (const link of links) {
    link.addEventListener('click', (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      event.preventDefault();
      selectVersion(link, true);
    });
  }
  window.addEventListener('popstate', () => {
    const link = links.find((item) => item.pathname === location.pathname);
    if (link) selectVersion(link, false);
  });
}
