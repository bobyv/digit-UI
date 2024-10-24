import React from 'react';
import style from './AbsoluteBox.module.scss';

function AbsoluteBox({ children, changeStyle, inLineStyle }) {
  return (
    <div
      className={`${style['sticky']} ${style[changeStyle]}`}
      style={{ ...inLineStyle }}
    >
      {children}
    </div>
  );
}

AbsoluteBox.propTypes = {};
AbsoluteBox.defaultProps = {
  changeStyle: '',
  inLineStyle: {},
};

export default AbsoluteBox;
