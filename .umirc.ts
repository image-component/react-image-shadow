import { defineConfig } from 'dumi';

const name = 'react-image-shadow';

export default defineConfig({
  title: 'Image Shadow',
  favicon:
    'https://github.com/image-component/react-image-shadow/blob/main/logo.png?raw=true',
  logo:
    'https://github.com/image-component/react-image-shadow/blob/main/logo.png?raw=true',
  outputPath: 'docs-dist',
  exportStatic: {},
  base: `/${name}/`,
  publicPath: `/${name}/`,
  theme: {
    '@c-primary': '#3bacea',
  },
  hash: true,
  scripts: [
    {
      content: `
      (function () {
        var timer = setInterval(function() {
          try {
            var menuList = document.getElementsByClassName('__dumi-default-menu-list');
            menuList[0].childNodes[0].childNodes[0].innerText = '🌈 ${name}';
            clearInterval(timer);
          } catch (e) {}
        }, 200)
      })();
    `,
    },
  ],
});
