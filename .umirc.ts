import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Image Shadow',
  favicon:
    'https://github.com/xrkffgg/react-image-shadow/blob/main/logo.png?raw=true',
  logo:
    'https://github.com/xrkffgg/react-image-shadow/blob/main/logo.png?raw=true',
  outputPath: 'docs-dist',
  base: '/react-image-shadow/',
  publicPath: '/react-image-shadow/',
  styles: [
    `a img + svg {
      display: none;
    }`,
  ],
  theme: {
    '@c-primary': '#3bacea',
  },
  hash: true,
});
