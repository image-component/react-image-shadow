import { defineConfig } from 'dumi';

const name = 'react-image-shadow';
const shortName = 'ImageShadow';

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
  scripts: [
    {
      content: `
      (function () {
        var timer = setInterval(function() {
          try {
            var menuList = document.getElementsByClassName('__dumi-default-menu-list');
            menuList[0].childNodes[0].childNodes[0].innerText = '🌈 ${shortName}';
            clearInterval(timer);
          } catch (e) {}
        }, 200)
      })();
    `,
    },
  ],
});
