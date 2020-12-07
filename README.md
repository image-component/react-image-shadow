# 🌈 react-image-shadow

A React image component. Simple realization of image shadow.

[![npm](https://img.shields.io/npm/v/react-image-shadow?style=flat-square&color=orange)](https://www.npmjs.com/package/react-image-shadow) [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) ![](https://github.com/image-tool/react-image-shadow/workflows/ci/badge.svg) ![](https://img.shields.io/github/last-commit/image-tool/react-image-shadow/main?color=%23722ed1&style=flat-square) [![codecov](https://codecov.io/gh/image-tool/react-image-shadow/branch/main/graph/badge.svg?token=PYD7S8BHOB)](https://codecov.io/gh/image-tool/react-image-shadow) ![](https://img.shields.io/npm/dt/react-image-shadow?color=%23eb2f96&style=flat-square) ![](https://img.shields.io/npm/l/react-image-shadow?style=flat-square&color=red)

## 📚 Example

Online: https://image-tool.github.io/react-image-shadow/

## 📦 Install

```bash
npm i react-image-shadow
# or
yarn add react-image-shadow
```

## 🎉 Usage

```js
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

export default () => (
  <>
    <ImageShadow src="https://github.com/image-tool/react-image-shadow/blob/main/image/red.png?raw=true" />
  </>
);
```

## 📔 API

| Property     | Description                         | Type          | Required | Default |
| ------------ | ----------------------------------- | ------------- | -------- | ------- |
| className    | Component extra class.              | string        | ✖        | -       |
| shadowBlur   | The shadow blur of the image.       | number        | ✖        | 20      |
| shadowHover  | Whether to support the mouse hover. | boolean       | ✖        | false   |
| shadowRadius | The border radius of the image.     | number        | ✖        | 8       |
| src          | The src of the image.               | string        | ✔        | -       |
| style        | Component extra style.              | CSSProperties | ✖        | -       |
| width        | The width of the image.             | number        | ✖        | 300     |

## 🔨 Development

```
yarn
yarn start
```

## License

[MIT](https://github.com/image-tool/react-image-shadow/blob/main/LICENSE)
