import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import caseImageDimensions from './src/lib/case-image-dimensions.mjs';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  markdown: { processor: satteri({ mdastPlugins: [caseImageDimensions()] }) },
  vite: {
    // Pre-bundle Mermaid's lazy diagram modules before the first dev-page request.
    optimizeDeps: { include: ['mermaid'] },
  },
});
