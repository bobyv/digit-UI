import React from 'react';
import style from './TickerCssSlider.module.scss';

function TickerCssSlider({ children, changeStyle, inLineStyle }) {
  return (
    <div
      className={`${style['TickerSliderContainer']} ${style[changeStyle]}`}
      style={{ ...inLineStyle }}
    >
      <div className={`${style['marquee__item']}`}>{children}</div>
      <div className={`${style['marquee__item']}`}>{children}</div>
    </div>
  );
}

TickerCssSlider.propTypes = {};
TickerCssSlider.defaultProps = {
  changeStyle: '',
  inLineStyle: {},
};

export default TickerCssSlider;
