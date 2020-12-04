/**
 * desc: Use `shadowHover` to turn on the floating effect.
 */

import React from 'react';
import ImageShadow from 'react-image-shadow';
import './demo.less';
import '../../assets/index.less';

const App = () => {
  return (
    <div className="base-demo">
      <ImageShadow
        shadowHover
        src="https://github.com/xrkffgg/react-image-shadow/blob/main/image/red.png?raw=true"
      ></ImageShadow>
      <ImageShadow
        shadowHover
        src="https://github.com/xrkffgg/react-image-shadow/blob/main/image/blue.jpg?raw=true"
      ></ImageShadow>
      <ImageShadow
        shadowHover
        src="https://github.com/xrkffgg/react-image-shadow/blob/main/image/white.jpg?raw=true"
      ></ImageShadow>
    </div>
  );
};

export default App;
