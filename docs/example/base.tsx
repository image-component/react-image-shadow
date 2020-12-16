/**
 * desc: Basic display.
 */

import React from 'react';
import ImageShadow from 'react-image-shadow';
import './demo.less';
import '../../assets/index.less';

const url1 =
  'https://github.com/image-component/gallery/blob/main/girl/5.jpg?raw=true';
const url2 =
  'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';
const url3 =
  'https://github.com/image-component/gallery/blob/main/girl/2.jpg?raw=true';

const App = () => {
  return (
    <div className="base-demo">
      <ImageShadow src={url1}></ImageShadow>
      <ImageShadow src={url2}></ImageShadow>
      <ImageShadow shadowRadius={20} src={url3}></ImageShadow>
    </div>
  );
};

export default App;
