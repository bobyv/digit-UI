import React from 'react';
import style from './StickyBox.module.scss';

function StickyBox({ children, changeStyle, inLineStyle }) {
  return (
    <div
      className={`${style['sticky']} ${style[changeStyle]}`}
      style={{ ...inLineStyle }}
    >
      {children}
    </div>
  );
}

StickyBox.propTypes = {};
StickyBox.defaultProps = {
  changeStyle: '',
  inLineStyle: {},
};

export default StickyBox;
