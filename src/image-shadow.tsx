import * as React from 'react';
import classNames from 'classnames';

interface ImageShadowProps {
  children: React.ReactElement;
  shadowBlur?: number;
  style?: React.CSSProperties;
}

export { ImageShadowProps };

const ImageShadow = (props: ImageShadowProps) => {
  const { children, shadowBlur = 20, style } = props;

  if (!children || !children.props.src) {
    console.log(`Children don't have "src"!`);
  }

  return (
    <div
      className="rc-imgShadow"
      style={{
        position: 'relative',
        width: `${children.props.width}px` || 'auto',
        ...style,
      }}
    >
      {children}
      <div
        className="image-shadow"
        style={{
          backgroundImage: `url(${children.props.src})`,
          filter: `blur(${shadowBlur}px)`,
          position: 'absolute',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          bottom: '-10%',
          left: '5%',
          width: '90%',
          height: '95%',
          zIndex: -1,
          transition: 'all 0.4s',
        }}
      ></div>
    </div>
  );
};

export default ImageShadow;
