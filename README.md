# 🌈 react-image-shadow

A React image component. Simple realization of image shadow.

[![npm](https://img.shields.io/npm/v/react-image-shadow?style=flat-square&color=orange)](https://www.npmjs.com/package/react-image-shadow) [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) ![](https://github.com/image-component/react-image-shadow/workflows/ci/badge.svg) ![](https://img.shields.io/github/last-commit/image-component/react-image-shadow/main?color=%23722ed1&style=flat-square) [![codecov](https://codecov.io/gh/image-component/react-image-shadow/branch/main/graph/badge.svg?token=PYD7S8BHOB)](https://codecov.io/gh/image-component/react-image-shadow) ![](https://img.shields.io/npm/dt/react-image-shadow?color=%23eb2f96&style=flat-square) ![](https://img.shields.io/npm/l/react-image-shadow?style=flat-square&color=red)

## 📚 Example

Online: https://image-component.github.io/react-image-shadow/

## 🌀 Template

https://github.com/one-template/react-component-template

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

const src =
  'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

export default () => (
  <>
    <ImageShadow src={src} />
  </>
);
```

## 📔 API

| Property     | Description                         | Type          | Required | Default | Version |
| ------------ | ----------------------------------- | ------------- | -------- | ------- | ------- |
| alt          | The alt of the image.               | string        | ✖        | -       | 1.1.0   |
| className    | Component extra class.              | string        | ✖        | -       | 1.0.0   |
| shadowBlur   | The shadow blur of the image.       | number        | ✖        | 20      | 1.0.0   |
| shadowHover  | Whether to support the mouse hover. | boolean       | ✖        | false   | 1.0.0   |
| shadowRadius | The border radius of the image.     | number        | ✖        | 8       | 1.0.0   |
| src          | The src of the image.               | string        | ✔        | -       | 1.0.0   |
| style        | Component extra style.              | CSSProperties | ✖        | -       | 1.0.0   |
| width        | The width of the image.             | number        | ✖        | 300     | 1.0.0   |

## 🔨 Development

```
yarn
yarn start
```

## License

[MIT](https://github.com/image-component/react-image-shadow/blob/main/LICENSE)
