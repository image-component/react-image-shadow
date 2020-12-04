/**
 * desc: Base
 */

import React from 'react';
import ImageShadow from 'react-image-shadow';
import './base.less';

const App = () => {
  return (
    <div className="base-demo">
      <ImageShadow>
        <img
          width="200"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </ImageShadow>
      <ImageShadow>
        <img
          width="200"
          src="https://avatars2.githubusercontent.com/u/29775873?s=400&u=97ba7e9850cb238625be976e7d247125cfd2295a&v=4"
        />
      </ImageShadow>
    </div>
  );
};

export default App;
