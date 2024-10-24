import React from 'react';
import style from './CustomSlideBox.module.scss';

const CustomSlideBox = ({
  children,
  gridGap,
  marginTop,
  marginBottom,
  changeClass,
  elementType,
  inLineStyle,
}) => {
  return (
    <div
      className={`${style['default']} ${style[changeClass]}`}
      style={{ ...inLineStyle }}
    >
      {elementType === 'divBox' && (
        <div
          className={`${style['overflow']}`}
          style={{
            gap: `0 ${gridGap}px`,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          }}
        >
          {children}
        </div>
      )}
      {elementType === 'ulBox' && (
        <ul
          className={`${style['overflow']}`}
          style={{
            gap: `0 ${gridGap}px`,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          }}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

CustomSlideBox.defaultProps = {
  gridGap: 6,
  marginTop: 0,
  changeClass: '',
  elementType: 'divBox',
  inLineStyle: {},
};

export default CustomSlideBox;
