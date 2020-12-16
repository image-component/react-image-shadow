/**
 * desc: Use `shadowHover` to turn on the floating effect.
 */

import React from 'react';
import ImageShadow from 'react-image-shadow';
import './demo.less';
import '../../assets/index.less';

const url1 =
  'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true';
const url2 =
  'https://github.com/image-component/gallery/blob/main/girl/6.jpg?raw=true';
const url3 =
  'https://github.com/image-component/gallery/blob/main/girl/8.png?raw=true';

const App = () => {
  return (
    <div className="base-demo">
      <ImageShadow shadowHover src={url1}></ImageShadow>
      <ImageShadow shadowHover src={url2}></ImageShadow>
      <ImageShadow shadowHover src={url3}></ImageShadow>
    </div>
  );
};

export default App;
