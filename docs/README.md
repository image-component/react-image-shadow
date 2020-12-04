# 🌈 react-image-shadow

A React image plugin. Simple realization of image shadow.

[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi)

## Example

Online: https://xrkffgg.github.io/react-image-shadow/

## Usage

```js
import ImageShadow from 'react-image-shadow';

export default () => (
  <>
    <ImageShadow src="https://github.com/xrkffgg/react-image-shadow/blob/main/image/red.png?raw=true" />
  </>
);
```

## API

| Property     | Description                         | Type          | Required | Default |
| ------------ | ----------------------------------- | ------------- | -------- | ------- |
| className    | Component extra class.              | string        | ✖        | -       |
| shadowBlur   | The shadow blur of the image.       | number        | ✖        | 20      |
| shadowHover  | Whether to support the mouse hover. | boolean       | ✖        | false   |
| shadowRadius | The border radius of the image.     | number        | ✖        | 8       |
| src          | The src of the image.               | string        | ✔        | -       |
| style        | Component extra style.              | CSSProperties | ✖        | -       |
| width        | The width of the image.             | number        | ✖        | 300     |

## Development

```
yarn
yarn start
```

## License

[MIT](https://github.com/xrkffgg/react-image-shadow/blob/main/LICENSE)
