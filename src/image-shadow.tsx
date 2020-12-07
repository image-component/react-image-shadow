import * as React from 'react';
import classNames from 'classnames';

interface ImageShadowProps {
  className?: string;
  shadowBlur?: number;
  shadowHover?: boolean;
  shadowRadius?: number;
  src: string;
  style?: React.CSSProperties;
  width?: number;
}

export { ImageShadowProps };

const ImageShadow = (props: ImageShadowProps) => {
  const {
    className,
    shadowBlur = 20,
    shadowHover = false,
    shadowRadius = 8,
    src,
    style,
    width = 300,
  } = props;

  const cls = classNames('react-image-shadow', className, {
    'react-image-shadow-hover': shadowHover,
  });

  return (
    <div
      className={cls}
      style={{
        position: 'relative',
        width: `${width}px`,
        ...style,
      }}
    >
      <img
        className="react-image-shadow-img"
        src={src}
        width={width}
        style={{
          borderRadius: `${shadowRadius}px`,
        }}
      ></img>
      <div
        className="react-image-shadow-card"
        style={{
          backgroundImage: `url(${src})`,
          borderRadius: `${shadowRadius}px`,
          filter: `blur(${shadowBlur}px)`,
        }}
      ></div>
    </div>
  );
};

export default ImageShadow;
