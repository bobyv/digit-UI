import React from 'react';
import style from './BgBoxWrapper.module.scss';

function BgBoxWrapper({ isWrap = true, children, changeStyle, inLineStyle }) {
  return isWrap ? (
    <div
      className={`${style['box-default']} ${style[changeStyle]}`}
      style={{ ...inLineStyle }}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}

BgBoxWrapper.propTypes = {};
BgBoxWrapper.defaultProps = {
  changeStyle: '',
  inLineStyle: {},
};

export default BgBoxWrapper;
