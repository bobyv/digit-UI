import React from 'react';
import style from './ContainerBox.module.scss';

function ContainerBox({
  children,
  changeStyle,
  noGutterSpace,
  inLineStyle,
  isWrap,
}) {
  return isWrap ? (
    <div
      className={`${style['container']} ${
        noGutterSpace ? style['no-gutter'] : ''
      } ${style[changeStyle]}`}
      style={{ ...inLineStyle }}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}

ContainerBox.propTypes = {};
ContainerBox.defaultProps = {
  changeStyle: '',
  noGutterSpace: false,
  inLineStyle: {},
  isWrap: true,
};

export default ContainerBox;
