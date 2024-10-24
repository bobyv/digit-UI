import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import slickStyles from 'slick-carousel/slick/slick.scss';
import slickTheme from 'slick-carousel/slick/slick-theme.css';
import style from './SlickNormalWrapper.module.scss';

function SlickNormalWrapper({
  children,
  marginTop,
  marginBottom,
  changeBodyStyle,
  changeSliderStyle,
  slideCount,
}) {
  const settingData = {
    infinite: false,
    speed: 500,
    slidesToShow: slideCount,
    slidesToScroll: 1,
    className: `${style['default']} ${style[changeSliderStyle]}`,
  };

  return (
    <div
      className={`${style[changeBodyStyle]}`}
      style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}
    >
      <Slider {...settingData}>{children}</Slider>
    </div>
  );
}
SlickNormalWrapper.propTypes = {};
SlickNormalWrapper.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  changeBodyStyle: 'd-flex',
  changeSliderStyle: '',
  slideCount: '2',
};
export default (slickStyles, slickTheme)(SlickNormalWrapper);
