import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import caseImageDimensions from './src/lib/case-image-dimensions.mjs';

export default defineConfig({
  site: 'https://irfankurnia.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  markdown: { processor: satteri({ mdastPlugins: [caseImageDimensions()] }) },
});
