import React from 'react';
import style from './CommonGridBox.module.scss';

function CommonGridBox({ children, gridType, changeStyle, inLineStyle }) {
  return (
    <>
      {gridType === 'divFlexBox' && (
        <div
          className={`${style['d-flex']} ${style[changeStyle]}`}
          style={{ ...inLineStyle }}
        >
          {children}
        </div>
      )}
      {gridType === 'ulFlexBox' && (
        <ul
          className={`${style['d-flex']} ${style[changeStyle]}`}
          style={{ ...inLineStyle }}
        >
          {children}
        </ul>
      )}
      {gridType === 'divGridBox' && (
        <div
          className={`${style['d-grid']} ${style[changeStyle]}`}
          style={{ ...inLineStyle }}
        >
          {children}
        </div>
      )}
      {gridType === 'ulGridBox' && (
        <ul
          className={`${style['d-grid']} ${style[changeStyle]}`}
          style={{ ...inLineStyle }}
        >
          {children}
        </ul>
      )}
    </>
  );
}

CommonGridBox.propTypes = {};
CommonGridBox.defaultProps = {
  gridType: 'divFlexBox',
  changeStyle: '',
  inLineStyle: {},
};

export default CommonGridBox;
