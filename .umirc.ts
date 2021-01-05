import { defineConfig } from 'dumi';

const name = 'react-image-shadow';
const shortName = 'Image Shadow';

const url = 'https://avatars1.githubusercontent.com/u/75532006?s=200&v=4';

export default defineConfig({
  title: shortName,
  favicon: url,
  logo: url,
  outputPath: 'docs-dist',
  exportStatic: {},
  base: `/${name}/`,
  publicPath: `/${name}/`,
  hash: true,
  styles: [
    `
      html {
        scroll-behavior: smooth;
      }
      .markdown table {
        width: auto !important;
      }
      .markdown table td:first-child {
        font-weight: normal !important;
      }
    `,
  ],
});
